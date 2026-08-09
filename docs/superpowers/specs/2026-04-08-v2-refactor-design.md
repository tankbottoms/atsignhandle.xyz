# atsignhandle.xyz v2.0 Design Spec

**Date:** 2026-04-08
**Status:** Approved
**Scope:** Code documentation, global leaderboard, /help and /ux-spec routes, neo-brutalist skill expansion, CLAUDE.md overhaul

---

## Overview

atsignhandle.xyz is a Chrome dino-style endless runner starring Banny the banana, deployed as a Cloudflare Worker with static assets. This spec covers seven phases of work to add documentation, a global leaderboard, two new informational routes, and project tooling improvements.

### Current State

- **index.html** (1502 lines): Game shell with ~900 lines of inline JS for UI controls, 6 theme selectors, resolution toggles, haptic feedback engine, mobile touch controls, mod menu, and sprite cycling
- **index.js** (3137 lines): Game engine in an IIFE -- Runner class with ~40 prototype methods, collision detection, sprite rendering, physics, sound, scoring
- **index.css**: Canvas and runner styles
- **spec.html**: Sprite sheet specification page for designers
- **src/worker.ts**: Passthrough worker (static assets served by `[assets]` binding)
- **High score**: Already persists locally via `localStorage.getItem('bannyHighScore')` (index.js:39,996)
- **Theme/resolution**: Use `sessionStorage` (lost on tab close)
- **Haptics**: Full system with per-event customization, persisted in `localStorage` (`bannyHaptics`, `bannyHapticsOn`, `bannyCustomHaptics`)

### Storage Keys Inventory (Current)

| Key | Storage | Purpose |
|-----|---------|---------|
| `bannyHighScore` | localStorage | High score (integer) |
| `bannyHaptics` | localStorage | Haptic event settings (JSON) |
| `bannyHapticsOn` | localStorage | Haptics enabled flag (`on`/`off`) |
| `bannyCustomHaptics` | localStorage | Custom haptic step patterns (JSON) |
| `bannyRes` | sessionStorage | Resolution mode (`1` or `2`) |
| `bannySound` | sessionStorage | Sound enabled (`on`/`off`) |
| `bannyCustomAudio` | sessionStorage | Custom audio enabled (`on`/`off`) |
| `bannyTheme` | sessionStorage | Active theme name |

---

## Phase 1: Code Documentation (In-Place)

**Goal:** Make the existing code navigable without structural changes.

### index.html Inline JS Sections

Add `// ============================================================` section markers and JSDoc comments to delineate:

1. **Theme System** (~L530-620): `THEME_SPRITES` map, `THEME_NAMES`, `THEME_CHARS`, sprite image loading, theme button handlers
2. **Resolution Toggle** (~L574-590): 1x/auto/2x switching, 2x detection, `window.__forceRes`
3. **Sprite Cycling** (~L599-670): Hero/villain canvas drawing, `drawPair()`, `startSpriteCycle()`, pair rotation across theme sheets
4. **Theme/Sound/Custom Buttons** (~L670-720): Button click handlers, sessionStorage persistence, theme switching logic
5. **Haptics Engine** (~L740-1200): `triggerHaptic()`, haptic event catalog, settings popup, custom step patterns, iOS/Android workarounds, `navigator.vibrate` integration
6. **Mobile Controls** (~L1200-1410): Touch button handlers, crouch/jump/pause, mobile detection, `showMobileControls()`/`hideMobileControls()`
7. **Mod Menu** (~L1417-1502): God mode toggle, speed slider, `Runner.prototype.gameOver` override

Each section gets:
- A section header comment with description
- JSDoc on key functions (parameters, return values, side effects)
- Brief inline comments where logic is non-obvious (e.g., Safari audio unlock pattern, haptic user-gesture requirement)

### index.js Game Engine

Add JSDoc to:
- `Runner` constructor and config constants (~L14-230)
- `Runner.spriteDefinition` LDPI/HDPI coordinate maps (~L170-200)
- `Runner.keycodes`, `Runner.events`, `Runner.sounds` (~L201-240)
- Key prototype methods: `init`, `update`, `startGame`, `gameOver`, `onKeyDown`, `onKeyUp`, `handleEvent`, `startListening`, `adjustDimensions`
- `Trex` class: animation states, jump physics, collision boxes
- `Obstacle` class: type definitions, gap calculations
- `DistanceMeter`: score rendering, high score display
- `HorizonLine`, `Cloud`, `NightMode`, `Horizon`: parallax scrolling, scenery generation

**Constraint:** No code changes. Documentation only. Preserve exact line numbers where possible (comments inserted, not code moved).

---

## Phase 2: Global Leaderboard

### 2a. Handle/Name Modal

**Trigger:** First game-over when no handle exists in `localStorage('bannyHandle')`.

**UI Pattern:** Reuse existing `.haptics-popup` / `.haptics-popup-inner` overlay pattern:
- Dark semi-transparent backdrop
- Centered modal with monospace typography
- Input field for handle (max 20 chars, alphanumeric + underscore)
- "Save" button
- "Skip" option (plays anonymously, score not submitted to global board)

**Storage:** `localStorage.setItem('bannyHandle', handle)`

**Change Handle:** Add option in mod menu popup to update handle.

**Markup location:** Add to `index.html` after the existing `#haptics-popup` block (~L432).

### 2b. CF Worker API + KV Storage

**Expand `src/worker.ts`** with API route handling before the static asset fallback.

#### Routes

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/score` | Submit a score |
| `GET` | `/api/leaderboard` | Get top scores |
| `GET` | `/api/leaderboard?around={fingerprint}` | Get scores around a specific player |

#### KV Namespace

Add to `wrangler.toml`:
```toml
[[kv_namespaces]]
binding = "SCORES"
id = "<create via wrangler kv:namespace create SCORES>"
```

#### Data Model

**Leaderboard entry:**
```json
{
  "handle": "string (max 20)",
  "score": "number",
  "fingerprint": "string (SHA-256 hash)",
  "ip": "string (first 3 octets only, for rough geo)",
  "ua": "string (browser family only)",
  "timestamp": "number (epoch ms)"
}
```

**KV Keys:**
- `leaderboard` -- JSON array of top 100 scores, sorted descending. Updated atomically on each valid submission.
- `player:{fingerprint}` -- Player's best score and handle. TTL: 90 days.
- `recent:{timestamp}` -- Recent submission for rate-limit checking. TTL: 60 seconds.

#### Device Fingerprint (Client-Side)

Generate in `index.html` JS:
```javascript
async function getFingerprint() {
  var raw = [
    navigator.userAgent,
    screen.width + 'x' + screen.height,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    navigator.language
  ].join('|');
  var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}
```

No cookies, no tracking pixels. Fingerprint is a rough device identifier only.

#### Rate Limiting

- One submission per fingerprint per 30 seconds (checked via `recent:{fingerprint}` key with TTL)
- Score must be > 0 and <= 99999 (sanity bounds)
- Handle must match stored `player:{fingerprint}` handle or be a new player

#### Score Submission Flow

1. Game over fires in `index.js`
2. `index.html` JS checks `bannyHandle` exists
3. If no handle, show handle modal; on save, proceed
4. POST `/api/score` with `{ handle, score, fingerprint }`
5. Worker validates, updates `player:{fingerprint}` if new personal best
6. Worker updates `leaderboard` key if score qualifies for top 100
7. Response: `{ rank, leaderboard: [...top10] }`

### 2c. Leaderboard UI

**Location:** Integrated into game-over state, below the restart prompt.

**Display:**
- Top 10 scores in a compact monospace table
- Current player's row highlighted with accent color
- Player's rank shown even if not in top 10 ("You: #42")
- Fetched from `/api/leaderboard` on game-over
- Cached in memory for the session (re-fetched on each game-over)

**Style:** Consistent with existing game UI -- dark text on light canvas area, monospace font, minimal chrome.

---

## Phase 3: `/help` Page

**File:** `public/help.html`

### Design System (Finder Style)

Standalone CSS in the file, matching finder.atsignhandle.xyz conventions:

```css
:root {
  --color-bg: #ffffff;
  --color-bg-alt: #fafafa;
  --color-text: #111111;
  --color-text-muted: #666666;
  --color-border: #e5e5e5;
  --color-accent: #5c6bc0;
  --font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, monospace;
  --spacing-xs: .5rem;
  --spacing-sm: .75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --max-width: 900px;
  --nav-height: 52px;
}
```

**Icons:** Font Awesome Light (`fa-light fa-*`) from `/fontawesome/` (already bundled in `public/fontawesome/`). Note: the existing bundle has `fa-solid` -- will need to add `fa-light` CSS + woff2 if not present, or use FA Thin (`fat`) per project conventions.

**Layout:** Single-column, `max-width: 900px`, responsive breakpoints at 1024/768/640/480px.

**Typography:** All monospace. `h1` 1.8rem, `h2` 1.2rem with border-bottom, body 0.85-0.9rem.

### Content Sections

1. **Header:** `<- Back to game` link + "How to Play" title + subtitle
2. **Game Overview:** `.doc-section` -- What this game is (Chrome dino mod, Banny the banana, obstacle dodging)
3. **Controls:** `.doc-section`
   - Keyboard: table with key -> action mapping (Space/Up = jump, Down = crouch, P = pause)
   - Mobile: touch zone description (left = crouch, center = jump, right = pause)
   - SVG diagram: keyboard layout showing game keys highlighted
4. **Themes:** `.doc-section` -- 6 themes listed as `.feature-list` with `fa-light` icons, brief description of each (ufo, pterodactyl, birds, trex, original, legal/steamboat willie)
5. **Sound & Audio:** `.doc-section` -- Default sounds (jump, hit, score milestone), custom audio option
6. **Haptics:** `.doc-section` -- Which events trigger vibration, how to open haptics settings, custom patterns, device compatibility notes
7. **Mod Menu:** `.doc-section` -- God mode, speed adjustment, how to access (M key or toggle)
8. **Leaderboard:** `.doc-section` -- How global scoring works, handle setup, how rankings update
9. **Footer:** Link back to game, link to `/ux-spec`, link to `/spec.html`

---

## Phase 4: `/ux-spec` Page

**File:** `public/ux-spec.html`

Same design system as `/help`. This page is the **portable reference** for recreating this presentation style with haptics on other sites.

### Content Sections

1. **Header:** "UX Specification" + subtitle "Design reference for atsignhandle.xyz -- portable patterns for web haptics and game UI"

2. **Haptics Specification** (primary section):
   - **Event Catalog:** Table of all haptic events with vibration patterns
     | Event | Trigger | Pattern | Description |
     |-------|---------|---------|-------------|
     | `gameStart` | Game begins | `[50]` | Short pulse on start |
     | `jump` | Space/Up/tap | `[30]` | Quick tap feedback |
     | `nearMiss` | Close obstacle pass | `[20, 30, 40]` | Escalating buzz |
     | `score` | Score milestone | `[40, 20, 40]` | Double-tap celebration |
     | `gameOver` | Collision | `[100, 50, 100, 50, 200]` | Long dramatic buzz |
     | `gameEnd` | Post game-over | `[80]` | Finality pulse |
   - **`triggerHaptic()` API:** Function signature, how it reads settings, fallback behavior
   - **Custom Patterns:** Step-based pattern editor (duration + intensity), localStorage schema
   - **Platform Notes:** iOS Safari requires user gesture context for `navigator.vibrate()`, Android supports full Vibration API, desktop browsers ignore silently
   - **SVG Diagram:** Haptic event flow (user action -> event name -> settings lookup -> navigator.vibrate call)

3. **Presentation Style Guide:**
   - **CSS Variable System:** Full token table with values and usage
   - **Typography:** Monospace stack, size scale, heading hierarchy
   - **Toggle Bar Pattern:** How the resolution/sound/theme/haptics toggle row works -- markup structure, `.control-label` styling (10px, #888, monospace), button states
   - **Popup Overlay Pattern:** `.haptics-popup` / `.haptics-popup-inner` -- backdrop, centering, close button, scrollable content area
   - **Canvas Integration:** How the game canvas sits within the page, sizing rules, DPI handling

4. **Theme System Architecture:**
   - `THEME_SPRITES` map structure (theme name -> { '1x': path, '2x': path })
   - Sprite sheet format: 1233x68 (1x), coordinate system via `Runner.spriteDefinition`
   - Theme switching: sessionStorage persistence, button handler pattern, sprite image swap
   - **SVG Diagram:** Theme state machine (button click -> sessionStorage update -> sprite reload -> canvas redraw)

5. **Component Inventory:**
   - Toggle bar (`.toggle-bar`)
   - Control labels (`.control-label`)
   - Theme buttons (`.theme-btn`)
   - Popup overlays (`.haptics-popup`)
   - Mobile controls (`#mobile-controls`, `#mobile-jump-btn`, `#mobile-crouch-btn`, `#mobile-pause-btn`)
   - Mod menu (`#mod-popup`)
   - Leaderboard display (new)
   - Handle input modal (new)

6. **Responsive Behavior:**
   - Breakpoints: 1024/768/640/480px
   - Mobile detection pattern (`ontouchstart` + UA regex)
   - Touch control visibility toggling
   - Canvas scaling approach

7. **Reuse Guide:**
   - "How to add haptics to your site" -- minimal code snippet showing `triggerHaptic()` integration
   - "How to replicate this toggle bar UI" -- markup + CSS template
   - "How to use the popup overlay pattern" -- markup + CSS template

---

## Phase 5: Worker Routing

**File:** `src/worker.ts`

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // API routes
    if (url.pathname === '/api/score' && request.method === 'POST') {
      return handleScoreSubmission(request, env);
    }
    if (url.pathname.startsWith('/api/leaderboard')) {
      return handleLeaderboard(url, env);
    }

    // Clean URL rewrites for documentation pages
    if (url.pathname === '/help') {
      return env.ASSETS.fetch(new Request(new URL('/help.html', url.origin), request));
    }
    if (url.pathname === '/ux-spec') {
      return env.ASSETS.fetch(new Request(new URL('/ux-spec.html', url.origin), request));
    }

    // Static assets fallthrough (handled by [assets] binding)
    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
```

**Env interface:**
```typescript
interface Env {
  ASSETS: Fetcher;
  SCORES: KVNamespace;
}
```

---

## Phase 6: Neo-Brutalist Skill Expansion

**File:** `~/.claude/skills/brutalist-ui/SKILL.md`

Add new section: "Finder Documentation Style"

### Additions

1. **CSS Variable Tokens** -- the full `--color-*`, `--spacing-*`, `--font-mono`, `--max-width`, `--nav-height` set from finder
2. **Layout Components:**
   - `.doc-section` -- bordered bottom sections with heading + description + content
   - `.workflow-step` -- left-accent-bordered steps with `.step-number`
   - `.feature-item` / `.feature-list` -- icon + title + description rows
   - `.feature-grid` -- 2-column grid layout for feature cells
   - `.info-box` -- callout/notice box
   - `.key-example` -- technical illustration container
3. **Icon Convention:** `fa-light fa-*` (Font Awesome Light weight, not Thin/Solid). Note divergence from global CLAUDE.md `fat` convention -- finder sites use `fa-light`.
4. **SVG Diagram Conventions:**
   - `font-family: ui-monospace, monospace` in all text elements
   - Color palette: `#111` (primary), `#666` (secondary), `#999` (tertiary/arrows)
   - Stroke: `1.5px` default, `2px` for emphasis boxes
   - Arrow markers: `<marker>` defs with `orient="auto-start-reverse"`
   - Backgrounds: `#fafafa` for data boxes, `none` for output boxes with `2px` border
5. **Glyph Title Pattern:** `<i class="fa-light fa-icon"></i> BRANDNAME` in nav, uppercase, `0.85rem` monospace
6. **Responsive Breakpoints:** 1024 (table compress), 768 (single-column grid, 13px base), 640 (hamburger nav), 480 (hide nav icon, column workflow steps)

---

## Phase 7: CLAUDE.md Overhaul

**File:** `CLAUDE.md` (project root, gitignored)

Replace current CLAUDE.md with comprehensive project snapshot:

### Sections

1. **Project Identity:** Name, URL, description, current version
2. **File Tree:**
   ```
   public/
     index.html        -- Game page (HTML + inline JS for UI, themes, haptics, mod menu)
     index.js           -- Game engine (Runner class, sprites, physics, collision)
     index.css          -- Canvas and runner styles
     help.html          -- How-to-play documentation page
     ux-spec.html       -- UX specification / design reference
     spec.html          -- Sprite sheet specification for designers
     trexrunnermode.js  -- Legacy god mode / skin changer (unused by current UI)
     fontawesome/       -- Font Awesome assets (CSS + webfonts)
     assets/            -- Sprite sheets (PNG), audio files (WAV/MP3)
     banny-assets/      -- Original Banny sprite sheets
   src/
     worker.ts          -- Cloudflare Worker (API routes + clean URL rewrites + static fallthrough)
   docs/
     deploy.md          -- IPFS + Cloudflare deployment workflow
   ```
3. **Routes:**
   | Path | Handler | Description |
   |------|---------|-------------|
   | `/` | Static | Game page (index.html) |
   | `/help` | Worker rewrite -> help.html | How to play |
   | `/ux-spec` | Worker rewrite -> ux-spec.html | UX specification |
   | `/spec.html` | Static | Sprite sheet spec |
   | `/api/score` | Worker (POST) | Submit score |
   | `/api/leaderboard` | Worker (GET) | Get leaderboard |
4. **Theme System:** `THEME_SPRITES` map (6 themes), sprite sheet format (1233x68 1x), `Runner.spriteDefinition` coordinate system
5. **Haptics System:** Event names, `triggerHaptic()` API, settings structure, localStorage keys
6. **Leaderboard:** KV namespace `SCORES`, data model, fingerprint generation, rate limiting
7. **Storage Keys:** Full inventory table (localStorage + sessionStorage + KV)
8. **CSS Classes:** Key UI classes (`.control-label`, `.haptics-popup`, `.toggle-bar`, `.theme-btn`, etc.)
9. **Index.html Inline JS Sections:** Section markers with line ranges
10. **Index.js Class Inventory:** Runner (40 methods), Trex, Obstacle, DistanceMeter, Horizon, HorizonLine, Cloud, NightMode, CollisionBox
11. **Deployment:** Quick reference (IPFS + CF + ENS), wrangler.toml config
12. **Dev Server:** `npx wrangler dev --ip 0.0.0.0`
13. **Route Protection Warning:** Never reassign atsignhandle.xyz routes
14. **Style Guide Reference:** Points to `/ux-spec` for design patterns, points to neo-brutalist skill for broader design system

---

## Execution Order

| Phase | Dependencies | Estimated Complexity |
|-------|-------------|---------------------|
| 1. Code Documentation | None | Low -- comments only |
| 7. CLAUDE.md Overhaul | Phase 1 (section markers inform line ranges) | Low |
| 2a. Handle Modal | None | Medium |
| 2b. CF Worker API | KV namespace creation | Medium |
| 2c. Leaderboard UI | 2a + 2b | Medium |
| 5. Worker Routing | 2b (API routes) | Low |
| 3. /help Page | Phase 2 complete (documents leaderboard) | Medium |
| 4. /ux-spec Page | Phase 1 + 2 complete (documents all systems) | Medium-High |
| 6. Skill Expansion | Phase 3 or 4 (validates the style guide) | Low |

Phases 1 and 7 can run first. Phase 2 (a/b/c) is the core feature work. Phases 3-4 depend on 2 being complete so they can document the leaderboard. Phase 6 can run after any documentation page validates the style.

---

## Constraints

- No build step -- all pages are static HTML with inline or linked JS/CSS
- No frameworks -- vanilla JS throughout
- Font Awesome: use what's already bundled in `public/fontawesome/`. Add `fa-light` assets if missing.
- Sprite sheets must not be modified (1233x68 format is fixed)
- `localStorage` key prefix: always `banny*`
- Worker route protection: never reassign `atsignhandle.xyz` or `www.atsignhandle.xyz` routes
