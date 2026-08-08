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
const RETIRED_BUILD_PATH = /^\/[0-9a-f]{12}(\/|$)/;

export default {
  async fetch(request: Request): Promise<Response> {
    // Static assets are served automatically by the [assets] binding.
    // This worker only handles requests that don't match a static file.
    if (RETIRED_BUILD_PATH.test(new URL(request.url).pathname)) {
      return new Response("410 Gone — this build has been retired.", {
        status: 410,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }
    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler;
