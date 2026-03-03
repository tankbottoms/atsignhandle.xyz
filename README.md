# atsignhandle.xyz

A Chrome dino-style endless runner starring Banny the banana, deployed on Cloudflare Workers and pinned to IPFS/IPNS.

## Features

- **4 Themes** -- Pterodactyl, UFO, Birds, and Steamboat Willie, each with unique obstacles and sprites
- **Sound toggle** with custom audio support
- **Resolution control** (1x / 2x / auto) for pixel-perfect rendering
- **Dynamic game description** updates based on active theme (character name + obstacle name)
- **Tooltips** with touch support for mobile
- **Pause** with P key
- **Font Awesome icons** for UI controls
- **Decentralized hosting** via IPFS and IPNS

## Tech Stack

- **Cloudflare Workers** with static asset serving
- **TypeScript** worker entry point
- **Vanilla JS** game engine (no framework dependencies)
- **IPFS / IPNS** for decentralized pinning
- **Font Awesome 6** for iconography

## Getting Started

```bash
# Clone
git clone https://github.com/tankbottoms/atsignhandle.xyz.git
cd atsignhandle.xyz

# Install dependencies
bun install

# Start dev server
bun run dev

# Deploy to Cloudflare
bun run deploy
```

## Game Controls

| Key | Action |
|-----|--------|
| SPACE / UP | Jump |
| DOWN | Duck |
| ENTER | Restart |
| P | Pause / Resume |

## Themes

| Theme | Character | Obstacles |
|-------|-----------|-----------|
| Pterodactyl | Banny | Bongs, pot plants, pterodactyls |
| UFO | Banny | Bongs, pot plants, UFOs |
| Birds | Banny | Bongs, pot plants, birds |
| Steamboat Willie | Willie | Bongs, pot plants, birds |

## Deployment

### Cloudflare Workers

```bash
bun run deploy
```

Serves at [atsignhandle.xyz](https://atsignhandle.xyz) and [www.atsignhandle.xyz](https://www.atsignhandle.xyz).

### IPFS

```bash
ipfs add -r --cid-version=1 public
```

### IPNS

```bash
ipfs name publish --key=atsignhandle /ipfs/<CID>
```

## Links

- **Live:** [atsignhandle.xyz](https://atsignhandle.xyz)
- **IPFS:** `bafybeia4ymm2q4ha3dbls5dggjydd3s2byalmtq7lazttouevhomftguxq`
- **IPNS:** `k51qzi5uqu5dgodqsvftjebelxaxjia9chta6ht9ubb9xzwg0g6a79zciqthyx`

## License

[MIT](LICENSE)
