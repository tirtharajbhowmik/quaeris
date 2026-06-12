# Quaeris Brand Fork — Design Spec

**Date:** 2026-06-12
**Status:** Approved (visual direction, scope, mechanism, and token mapping confirmed by Tirtharaj in brainstorming session)

## Context

The repo holds a white-label marketing site (Next.js 16 App Router, Tailwind v4, Radix, framer-motion) in `web/`. It currently ships one brand — the "Veris" placeholder — with a completed homepage and a token-driven design system (`:root` CSS custom properties + `src/config/brand.config.ts`). Dev server runs on port 3100.

Quaeris, Inc. (quaeris.ai) is the first real client brand. The authoritative visual reference is **QuaerisAI_Design_Guidelines_Final.pdf** (10 pages, June 2026), which specs palette, type scale, and header/footer/component treatments for five page types (Homepage, Blog Listing, Blog Article, FAQ, Ambassador Program).

### Decisions locked during brainstorming

1. **Fidelity: Spec-Faithful.** The PDF is the law — Roboto headings, Inter body, exact hex palette, gradient CTAs at 10px radius, lavender surfaces. No editorial-serif reinterpretation.
2. **Scope: restyle the built homepage.** Keep the homepage's existing section structure; the reskin happens at the token layer. The PDF's other page types come in a later stretch.
3. **Mechanism: build-time brand packages.** Veris remains the clean reusable template; Quaeris is the first skin. One brand per build via `BRAND` env var. No runtime theme switching.

## Architecture

```
web/src/brands/
├── veris/                 # white-label template (visual output unchanged)
│   ├── config.ts          # content currently in src/config/brand.config.ts
│   ├── tokens.css         # :root token block currently in globals.css
│   ├── fonts.ts           # Fraunces (opsz axis) + Inter via next/font
│   └── assets/
└── quaeris/
    ├── config.ts          # Quaeris content (same interface)
    ├── tokens.css         # PDF palette (below)
    ├── fonts.ts           # Roboto 400/500/800 + Inter
    └── assets/            # logo pulled from quaeris.ai
```

- **Selection:** `next.config.ts` reads `process.env.BRAND` (default `veris`) and maps the alias `@brand` → `src/brands/<brand>` via Turbopack `resolveAlias` (webpack alias as fallback for `next build` if needed).
- **Imports:** components use `import { brand } from "@brand/config"`. `layout.tsx` imports `@brand/tokens.css`, fonts from `@brand/fonts`, and derives metadata from `@brand/config`.
- **Shared contract:** `src/config/types.ts` exports the `BrandConfig` interface; both brand configs are typed against it so a new brand cannot omit a field. The existing `src/config/brand.config.ts` dissolves into `brands/veris/config.ts` (a thin re-export may remain temporarily for migration safety, then is removed).
- **globals.css** keeps the Tailwind `@theme` mapping that references semantic vars (`var(--bg-canvas)` etc.); only the `:root` value block moves into per-brand `tokens.css`.
- **Scripts:** `dev:veris` (port 3100), `dev:quaeris` (port 3101), `build:veris`, `build:quaeris`. Plain `dev`/`build` honor `BRAND` from the shell environment, defaulting to `veris`. *(Deviation, recorded post-review: the selector script does NOT read `.env.local` — that was a property of the abandoned next.config approach. Set `BRAND` in the shell or use the `:brand` script variants.)*
- **One brand per checkout at a time:** both dev servers share `src/brand-active/` and `.next/`, so running `dev:veris` and `dev:quaeris` simultaneously from one checkout cross-contaminates. Stop one server before starting the other; for a true side-by-side demo, run the second brand from a `git worktree` of the same branch (own `node_modules`/`.next`).

## Quaeris tokens (PDF-sourced)

| Token | Veris (template) | Quaeris | Source |
|---|---|---|---|
| `--bg-canvas` | `#F7F7FA` | `#FAF8FF` | PDF "Page bg" |
| `--bg-surface` | `#FFFFFF` | `#FFFFFF` | PDF |
| `--bg-warm` | `#F6F4F2` | `#F9F5FF` | PDF "Section Bg Soft" / hero bg |
| `--bg-ink` | `#0A0A12` | `#200123` | PDF "Deep Dark Purple" |
| `--bg-ink-elevated` | `#14141F` | `#2D0136` | **derived** (cards on dark; PDF silent) |
| `--text-primary` | `#0B0E1E` | `#200123` | PDF |
| `--text-secondary` | `#51555F` | `#6B4D72` | PDF "Body Purple" |
| `--text-tertiary` | `#8A8E99` | `#9CA3AF` | PDF copyright bar |
| `--text-on-dark` | `#FFFFFF` | `#FFFFFF` | PDF |
| `--text-on-dark-dim` | `rgba(255,255,255,.72)` | `rgba(255,255,255,.75)` | PDF (75% opacity tagline) |
| `--brand-accent` | `#9333EA` | `#8C20A4` | PDF "Brand Purple" |
| `--brand-accent-hover` | `#7E22CE` | `#7A1C8F` | **derived** (PDF gives no CTA hover) |
| `--brand-accent-deep` | `#581C87` | `#4E0250` | PDF "Gradient Dark" |
| `--brand-accent-soft` | `rgba(147,51,234,.10)` | `rgba(140,32,164,.10)` | PDF category-pill bg (10%) |
| `--brand-accent-glow` | `rgba(147,51,234,.25)` | `rgba(140,32,164,.25)` | derived from pattern |
| `--border-subtle` | `rgba(11,14,30,.08)` | `#ECDCF0` | PDF "Border / Divider" |
| `--border-strong` | `rgba(11,14,30,.16)` | `#DCC8E4` | **derived** (between #ECDCF0 and ink) |
| `--border-on-dark` | `rgba(255,255,255,.12)` | `rgba(236,220,240,.15)` | derived |

### New brand-divergent tokens (added to BOTH brands)

| Token | Veris value | Quaeris value | Purpose |
|---|---|---|---|
| `--radius-cta` | `999px` (pill) | `10px` | PDF: CTA radius 10px |
| `--cta-bg` | `var(--brand-accent)` | `linear-gradient(90deg,#4E0250,#8C20A4)` | PDF primary CTA gradient |
| `--cta-bg-hover` | `var(--brand-accent-hover)` | `linear-gradient(90deg,#3D0140,#7A1C8F)` | derived |
| `--tracking-display` | `-0.02em` (serif tightening) | `0` | Roboto needs no serif tracking |

Additional PDF values used at component level where they appear (e.g. card bg `#FDFAFF`, post-card border `#E9E0EB`): the closest semantic token is used; no new one-off tokens unless a real collision appears.

## Typography

- **Veris:** Fraunces (display, `opsz` axis) + Inter — values unchanged, only relocated to `brands/veris/fonts.ts`.
- **Quaeris:** Roboto **400/500/800** (PDF: Regular headings at 48/40/20px; Extra Bold on blog heroes/featured cards) + Inter for body/subheadings/meta. `--font-display` → Roboto, `--font-body` → Inter.
- The heading size scale already in the build (48/40/20) matches the PDF scale; no structural type changes.

## Component sweep

- `button.tsx`: replace hardcoded pill radius / solid bg with `var(--radius-cta)` / `var(--cta-bg)`.
- Grep all of `src/components/` and `src/app/` for: hex literals, `border-radius`/`rounded-full` brand decisions on CTAs, serif-specific tracking. Route each through tokens.
- **Veris output must remain visually identical** after the refactor (this is a pure relocation for the template). Verified by before/after screenshots of header, hero, footer on :3100.

## Quaeris config content

- `name: "Quaeris"`, tagline unchanged (`"Secure, Governed Analytics. Powered by Trusted Agents."` — already Quaeris's real positioning), `url: "https://www.quaeris.ai"`, `email: "seek@quaeris.ai"`.
- Logo: real asset fetched from quaeris.ai (header height 28px per PDF). Fallback if unusable: Roboto 700 wordmark, marked `data-placeholder`.
- Copy, nav, and section content: inherited from the Veris config's current text (it is already written for governed agentic analytics). Content refinement is a later, separate pass.
- Page metadata derives from `@brand/config` (already wired in `layout.tsx`).
- Motion: keep current moderate system (scroll reveals, counters, marquee). PDF is silent on motion.

## Verification

1. `npx tsc --noEmit` passes.
2. `BRAND=veris npm run build` **and** `BRAND=quaeris npm run build` both succeed.
3. Veris dev on :3100 — visually unchanged (screenshot compare).
4. Quaeris dev on :3101 — computed checks: `--brand-accent` = `#8C20A4`; primary CTA radius `10px` with gradient bg; headings render Roboto; `<title>` starts with "Quaeris".
5. Hex-literal gate: no brand hex values outside `brands/*/tokens.css` (existing neutral exceptions: `--destructive`, `--success`, pure white/black).

## Out of scope (this stretch)

Blog Listing / Blog Article / FAQ / Ambassador pages; the other ~18 routes; Sanity CMS; HubSpot forms integration; 301 redirect map; copy rewrite; real logo redesign.
