# Deployment

## Prerequisites

- `bun-ipfs` built at `~/Developer/bun-ipfs` (see https://github.com/tankbottoms/bun-ipfs)
- Local IPFS node running on port 5001 (API) / 8080 (gateway)
- Cloudflare API token in `~/.shellenv` as `CLOUDFLARE_API_TOKEN`
- `wrangler` installed (`bun add -g wrangler` or use `npx wrangler`)

## Step 1: Deploy to IPFS

```bash
~/Developer/bun-ipfs/bun-ipfs public --no-qr
```

This uploads the `public/` folder to the local IPFS node, pins it, and returns:

- **Folder CID** (use for ENS and gateway links)
- **ZIP CID** (archive backup)
- **Gateway URL** (`https://ipfs.io/ipfs/<CID>/`)

## Step 2: Verify IPFS deployment

```bash
curl -sL --max-time 15 "http://localhost:8080/ipfs/<CID>/" | head -5
```

Confirm the HTML output matches `public/index.html`.

## Step 3: Deploy to Cloudflare Workers

```bash
source ~/.shellenv
CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" npx wrangler deploy
```

Or if `source ~/.shellenv` fails (zsh parsing issues), extract the token directly:

```bash
CLOUDFLARE_API_TOKEN=$(grep CLOUDFLARE_API_TOKEN ~/.shellenv | head -1 | sed 's/.*"\(.*\)"/\1/') npx wrangler deploy
```

Deploys to:

- https://atsignhandle.xyz
- https://www.atsignhandle.xyz
- https://atsignhandle-xyz.atsignhandle.workers.dev

## Step 4: Update ENS (manual)

Update the ENS `contenthash` for `atsignhandle.eth` with the new IPFS CID using the ENS Manager app or etherscan.

## Step 5: Update references

After deployment, update the CID in:

- `README.md` (Links section)
- `CHANGELOG.md` (Deployment section)
- `public/index.html` (footer IPFS link, if present)

## IPNS Key

The IPNS key `atsignhandle` publishes at:

```
k51qzi5uqu5dgodqsvftjebelxaxjia9chta6ht9ubb9xzwg0g6a79zciqthyx
```

To update IPNS (optional, if IPNS publishing is desired):

```bash
ipfs name publish --key=atsignhandle /ipfs/<CID>
```

## Quick deploy (all steps)

```bash
# 1. IPFS
~/Developer/bun-ipfs/bun-ipfs public --no-qr

# 2. Verify (replace CID)
curl -sL "http://localhost:8080/ipfs/<CID>/" | head -5

# 3. Cloudflare
CLOUDFLARE_API_TOKEN=$(grep CLOUDFLARE_API_TOKEN ~/.shellenv | head -1 | sed 's/.*"\(.*\)"/\1/') npx wrangler deploy

# 4. Update ENS contenthash manually
# 5. Update CID in README.md, CHANGELOG.md
```
