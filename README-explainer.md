# Cane Securities Fraud -- Interactive Explainer

Single-page interactive forensic analysis of Attorney Kyleen E. Cane's decades-long securities fraud enterprise. Built as a self-contained HTML document with D3.js visualizations and scroll-driven animations.

## What This Covers

- **Entity transformation pipeline** -- How Tele-Lawyer became LATI, then Davi Skin, then offshore liquidation
- **Concealed ownership** -- 48.7% reported vs 85.7% actual family control vs 89.9% enterprise control
- **Certificate trail** -- 36 sequential CEDE & CO. certificates totaling 2,249,825 shares
- **Follow the money** -- $60M+ in federal funds through shell structures ($49.3M Medicare, $6.4M securities, $4.8M CARES Act)
- **Federal statutes violated** -- Securities fraud, wire fraud, money laundering, structuring, perjury

## Local Development

Open `index.html` in a browser. No build step required.

```bash
open index.html
# or
python3 -m http.server 8080
```

## Deploy to Cloudflare Workers

```bash
./deploy.sh
```

Requires `wrangler` CLI and Cloudflare API token in `/Users/mark.phillips/Developer/fontawesome/.env`.

## Files

```
index.html          Current explainer (v0.2)
index_v0.1.html     Previous version
ref/                Source reference materials
wrangler.toml       Cloudflare Workers config
deploy.sh           Deployment script
CLAUDE.md           Project instructions for Claude Code
```

## License

All rights reserved. M.P.
