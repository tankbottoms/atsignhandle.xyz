# Changelog

## v1.2.0 -- 2026-03-03

Themes, god mode, and high score update.

### Features

- Color T-Rex theme with remapped sprite sheet (43px frames aligned to 44px grid)
- Original Chrome dino T-Rex theme with remapped sprite sheet
- God mode toggle via G key (invincibility) with audio feedback
- God mode speed control via mod menu popup (click G button)
- G button darkens when god mode is active
- High score persistence in localStorage across sessions
- Toggle bar reorganized into 3 labeled rows (size/audio, themes, god mode/haptics)
- Spec badge linking to /spec sprite sheet reference
- Full IPFS/IPNS CIDs displayed in footer (not truncated)

### Fixes

- Spec page sprite overflow fixed (canvas to img elements with max-width)
- Color T-Rex sprite alignment (43px source frames with 1px padding in 44px slots)
- Monochrome elements (TEXT, STAR, MOON, RESTART, CLOUD, HORIZON) copied from reference sprite for color/original themes

### Deployment

- Cloudflare Workers (version `38407c2d`)
- IPFS pinning on spark-1 (CID: `bafybeibo3jaenyc4oeu5k6dux62spt4mhwzzlv5ys5mqoyad7ts7vlhehi`)
- IPNS key: `k51qzi5uqu5dgodqsvftjebelxaxjia9chta6ht9ubb9xzwg0g6a79zciqthyx`

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
- IPFS pinning (CID: `bafybeigd5onpxwdiiplkta3kcogapuaax3bpl3525pxngdxnsczjkkz2sq`)
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
