# Changelog

## v1.1.0 -- 2026-03-03

Mobile and haptics update.

### Features

- Haptic feedback engine with configurable presets per game event (jump, death, score, duck warning, game start/end)
- iOS haptics via hidden checkbox switch toggle with intensity-modulated rAF pattern
- Android haptics via navigator.vibrate() with PWM intensity modulation
- Haptics settings popup with preset selector, test buttons, and custom pattern builder
- Mobile touch controls: jump, pause, and crouch buttons (shown during gameplay on touch devices)
- Two-finger touch to duck on mobile
- Mobile pause button with play/pause icon toggle
- Desktop pause overlay with click-to-resume
- Safari / iOS audio workaround: AudioContext resume on user gesture, silent WAV for speaker routing
- Sprite badge cycling animation on page load (cycles all theme hero/villain pairs)
- Intro animation removed for instant game start
- Default theme changed to Steamboat Willie
- 2x resolution restricted to themes with real 2x sprites (auto-switches to UFO theme)
- 2x button disabled on mobile with tooltip explanation

### Fixes

- Game area positioning fixed for arcade mode container scale
- Pause overlay blocks touch events from reaching game underneath
- Mobile controls hidden during game over state
- Pause button state resets on game restart

### Deployment

- Cloudflare Workers
- IPFS pinning (CID: `bafybeiceblz4jybuzm3c5y5l2uqvhwezpjshvuy6uak2gqlojky4qnxpim`)
- IPNS publishing (key: `k51qzi5uqu5dgodqsvftjebelxaxjia9chta6ht9ubb9xzwg0g6a79zciqthyx`)

## v1.0.0 -- 2026-03-02

Initial release.

### Features

- Chrome dino-style endless runner with Banny the banana
- Resolution toggle (1x / 2x / auto)
- Sound toggle with custom audio ("mark" sounds)
- Theme system with 4 themes: Pterodactyl, UFO, Birds, Steamboat Willie
- Steamboat Willie character with custom ducking sprites
- Dynamic game description (character name + obstacle name per theme)
- Tooltips with touch support
- P key pause / resume
- Font Awesome icon integration for all UI controls
- Uniform button sizing across toggle bar

### Deployment

- Cloudflare Workers with static asset serving
- IPFS pinning (CID: `bafybeia4ymm2q4ha3dbls5dggjydd3s2byalmtq7lazttouevhomftguxq`)
- IPNS publishing (key: `k51qzi5uqu5dgodqsvftjebelxaxjia9chta6ht9ubb9xzwg0g6a79zciqthyx`)
