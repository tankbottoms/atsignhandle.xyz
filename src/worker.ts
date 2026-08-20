// Six content-hash directories from earlier deploys once served copies of an unrelated
// document from public/. They have been retired out of the assets directory, so they no
// longer match a static file and fall through to this handler.
//
// They answer 410 rather than the generic 404 below. Both remove a URL from the index,
// but 410 states the removal is permanent and search engines act on it considerably
// faster; 404 is treated as possibly transient and retried for a long time. These URLs
// are never coming back, so 410 is the accurate signal.
//
// Matched by shape rather than by an explicit list: a 12-hex-character path segment is
// the build-hash format, and no real asset on this site uses one.
// Hosted services that live off-site get a redirect here rather than a reverse proxy.
// DocuSeal is a Rails app with no base-path support: mounted under a subpath its assets,
// signing links and ActionCable socket would all resolve against the wrong origin, so the
// only correct treatment of a /services/<name> URL is to send the browser to the real one.
//
// Keys are compared with the trailing slash already stripped, so both /services/docseal
// and /services/docseal/ land on the same entry. "docuseal" is carried alongside the
// shorter spelling because the product's own name is the one people will type.
const SERVICE_REDIRECTS: Record<string, string> = {
  "/services/docseal": "https://docusign.atsignhandle.xyz/",
  "/services/docuseal": "https://docusign.atsignhandle.xyz/",
};

const RETIRED_BUILD_PATH = /^\/[0-9a-f]{12}(\/|$)/;

interface Env {
  VOTES: KVNamespace;
}

// Project ids come from the client, so they are the one untrusted input here. Constrained
// to the shape the /projects markup actually emits -- without this, a caller could write
// arbitrary keys into the namespace and use it as free storage.
const PROJECT_ID = /^[a-z0-9][a-z0-9-]{0,39}$/;

// Ceiling on a single ?projects= read. The page asks for roughly a dozen; anything much
// larger is someone enumerating rather than rendering.
const MAX_BATCH = 40;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      // Counts are decoration and change rarely. A short cache keeps a page full of
      // buttons from turning into a KV read per visitor.
      "cache-control": status === 200 ? "public, max-age=60" : "no-store",
    },
  });

/**
 * Interest votes on unreleased projects.
 *
 *   GET  /api/vote?projects=a,b,c  -> { a: 3, b: 0, c: 12 }
 *   POST /api/vote {"project":"a"} -> { count: 4 }
 *
 * Deliberately anonymous: the value stored is an integer per project and nothing else --
 * no IP, no cookie, no fingerprint. Duplicate voting is prevented only by a localStorage
 * flag in the voter's own browser, which anyone can clear.
 *
 * That is the right trade here. This counter decides which side project gets finished
 * next; it is not a poll with a prize attached. Real deduplication would mean storing
 * something that identifies a person, and doing that to protect a number nobody has an
 * incentive to inflate would be a worse deal for the visitor than a slightly soft count.
 *
 * KV is eventually consistent and read-modify-write races here will drop concurrent
 * increments. At this traffic level that loses a vote occasionally, which does not change
 * any decision the number informs. A Durable Object would be exact and is the upgrade path
 * if this ever gates something that matters.
 */
async function handleVote(request: Request, env: Env, url: URL): Promise<Response> {
  if (!env.VOTES) return json({ error: "votes unavailable" }, 503);

  if (request.method === "GET") {
    const raw = (url.searchParams.get("projects") ?? "").split(",").filter(Boolean);
    if (raw.length > MAX_BATCH) return json({ error: "too many projects" }, 400);

    const ids = raw.filter((id) => PROJECT_ID.test(id));
    const counts: Record<string, number> = {};
    await Promise.all(
      ids.map(async (id) => {
        const v = await env.VOTES.get(`vote:${id}`);
        counts[id] = v ? Number(v) || 0 : 0;
      }),
    );
    return json(counts);
  }

  if (request.method === "POST") {
    let project: unknown;
    try {
      project = ((await request.json()) as { project?: unknown }).project;
    } catch {
      return json({ error: "bad request body" }, 400);
    }
    if (typeof project !== "string" || !PROJECT_ID.test(project)) {
      return json({ error: "bad project id" }, 400);
    }

    const key = `vote:${project}`;
    const count = (Number(await env.VOTES.get(key)) || 0) + 1;
    await env.VOTES.put(key, String(count));
    return json({ count }, 200);
  }

  return new Response(null, { status: 405, headers: { allow: "GET, POST" } });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/vote") return handleVote(request, env, url);

    // 302, not 301: the destination is a self-hosted service that may move between
    // hosts, and a cached-forever redirect would outlive the decision.
    const target = SERVICE_REDIRECTS[url.pathname.replace(/\/+$/, "")];
    if (target) return Response.redirect(target, 302);

    // Static assets are served automatically by the [assets] binding.
    // This worker only handles requests that don't match a static file.
    if (RETIRED_BUILD_PATH.test(url.pathname)) {
      return new Response("410 Gone — this build has been retired.", {
        status: 410,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }
    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
