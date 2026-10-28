# Zita Ye — personal portfolio

Static GitHub Pages site with a React island for the draggable Home cards. About, Gallery and Contact remain separate hash-routed views.

## Development

Use the existing checkout; no additional worktree is needed.

```sh
npm ci
npm run build
python3 -m http.server 8000 --bind 127.0.0.1
```

Run `npm run dev` in another terminal to watch React/Tailwind source changes and regenerate the Home assets. Refresh the browser after changes. `npm run build` runs TypeScript checks before the production build. The root HTML loads `assets/home.js` and `assets/home.css`; these generated files are committed so the existing GitHub Pages branch deployment works without a new CI workflow. Rebuild them when changing `src/`.

## Adaptations from the supplied Aceternity Draggable Card source

- Added a Vite React/TypeScript island to this existing HTML site instead of replacing the other pages; `@/` resolves to `src/`. Both original component exports and the `cn` helper are preserved.
- Kept the supplied card utility defaults, hover scale, tilt springs, constraints and release animation settings. The Tailwind import omits Preflight to preserve existing page styles. The unused Next.js `use client` directive is kept in source; its bundler warning is filtered because this is a client-only build.
- Replaced the sample travel photos, titles and Fight Club sentence with Zita's existing local artwork and personal copy. The header keeps Zita's name and professions visible before any interaction. Artwork uses `object-contain` and pastel backing colours so it is shown uncropped.
- Replaced the demo's viewport minimum height with a 660px desktop / 450px mobile board. Retained its desktop rotations and positions; adjusted smaller-screen card dimensions, padding, type and horizontal positions to keep the stack usable. Card utility styles remain Tailwind classes.
- Added `useReducedMotion`: reduced-motion users get no hover scaling, pointer tilt, glare, opacity changes, release springs or drag momentum. The original source had no reduced-motion guard.
- Added touch-action handling for dragging, drag/hover/focus stacking, and focusable cards with bounded arrow-key movement using the same Motion x/y values. Added a Reset cards button that remounts the board.
- Preserved the supplied body's two velocity-based `animate` calls and parameters for ordinary motion. They animate numeric values without binding their output to card position in the supplied implementation; Motion's normal drag handles actual card inertia.
- Removed the informal physics comment; no behavioural effect.

The supplied light/dark utility variants remain available by applying `.dark` to a parent. The portfolio itself uses the current scrapbook paper theme.

## Scrapbook collage and OptionWheel navigation

The site uses warm graph paper with fine paper grain (`img/watercolor-paper.svg`), torn notebook sheets, magazine-cutout lettering and washi-taped photo cards, and a full-width content region beside the desktop navigation wheel. The previous header/footer have been removed. On phones the wheel opens from the floating Explore control; use View [page] or Escape to close it.

`src/components/OptionWheel.jsx` and its CSS adapt the supplied source: the demo options become Home/About/Gallery/Contact; muted pigment colours, type, inset and curve are configured by `PortfolioNavigation.tsx`. The source's click, wheel, pointer drag, frame-independent smoothing and keyboard interactions remain. Added a controlled `value` for hash/history synchronisation, active-descendant accessibility, a primary-button drag guard and lost-pointer-capture cleanup. Reduced-motion users select without eased travel. Navigation has no sound configured. The source remains JavaScript, included through TypeScript's `allowJs`; the typed wrapper and the rest of the React code are TypeScript.

Production builds also run `scripts/version-assets.mjs`. It adds content-derived version queries to the four stylesheet/script references in `index.html`, so each changed resource gets a fresh browser cache key after a Pages deployment.
