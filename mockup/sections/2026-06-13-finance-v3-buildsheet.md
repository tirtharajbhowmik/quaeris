# /solutions/finance — v3 build sheet (decision log)

Finalize each section from v1 / v2 (or a hybrid), lock it here, then assemble **v3**
(`2026-06-13-solutions-finance-v3.html`) from the locked sources, then port to the
Next.js `/solutions/finance` route. This file is the source of truth for v3 assembly.

**Source mockups**
- v1 (comprehensive, 11 sections): `2026-06-12-solutions-finance.html`
- v2 (tighter, 6 sections): `2026-06-13-solutions-finance-v2.html`
- Hero hybrid (interactive): `2026-06-13-finance-hero-combined.html`

**Status legend:** 🔒 locked · ⬜ pending

---

## Slot status

| # | Slot | Status | Decision / source |
|---|------|--------|-------------------|
| 1 | **Hero** | 🔒 **LOCKED** | Combined hero — see below |
| 2 | **The problem** | 🔒 **LOCKED** | v2 "The Leader's Challenge", 6 cards 3×2 — see below |
| 3 | What it does | ⬜ | v1 FeatureRow ×3 vs v2 Core-Capabilities tabs |
| 4 | Why Quaeris | ⬜ | v1 IconFeatureGrid ×4 (v1-only) |
| 5 | Security / compliance | ⬜ | v1 trust-badges ×6 vs v2 "inside your perimeter" comparison table |
| 6 | Use cases | ⬜ | v1 SegmentCards ×3 (v1-only) |
| 7 | Stats | ⬜ | v1 StatBlock ×4 (v1-only) |
| 8 | Testimonials | ⬜ | v1 ×6 (v1-only) |
| 9 | FAQ | ⬜ | v1 (7) vs v2 (7) — reconcile copy |
| 10 | Closing CTA | ⬜ | v1 dark CTA band vs v2 gradient CTA card |
| 11 | Newsletter | ⬜ | v1 (v1-only) |

---

## Slot 1 — Hero · 🔒 LOCKED (2026-06-13)

**Source:** `2026-06-13-finance-hero-combined.html`

**Composition:** v1 left column + v2 right card.
- **Left:** eyebrow "For Finance Teams and CFOs" → H1 "One metric definition. *Every report agrees.*" (accent second line) → subcopy → buttons (Book a Finance Demo / See a live variance query) → **4 trust pointers in a 2-column grid**: Audit-grade lineage · Certified metrics only · Role-based access · Role-gated data access (lock-keyhole icon).
- **Right:** **Finance Intelligence Brief** card (all-UI, no image) — search query → root-cause analysis (4 cost rows) → sources-verified box → 100% / <1 min / Zero stats.

**Interactivity (locked):** on scroll-into-view (and via the "Re-run" control), the card plays a
loading→answer sequence: card rises in → question **types out** → **skeleton-loader** with a
spinner and stepped status ("Interpreting question…" → "Querying the semantic layer…" →
"Verifying sources…") over shimmering skeleton rows (~1.5s) → real rows reveal with **count-up**
figures → sources pop → stats count up. Row hover nudges the delta. `aria-busy` during load.
Progressive enhancement: reduced-motion or no-engine → static populated card. Tokens drive all
color/easing/duration.

### Port notes (for v3 → Next.js)
- **Component:** `FinanceHero.tsx` (new). Card sub-tree is a good candidate to split into
  `FinanceBriefCard.tsx`.
- **Motion:** mockup uses **Motion One** (CDN); at port use **framer-motion** (already in deps) —
  same motion model. Sequence = `useInView` trigger + an async orchestration; count-ups via
  `animate(0, target, …)`; respect `useReducedMotion()`.
- **Content → brand config:** hero copy, the 4 trust pointers, and the brief card's
  placeholder data (query, 4 rows, sources, 3 stats) live in `brands/*/config.ts`
  (`solutions.finance.hero`), typed in `config/types.ts`; Veris gets brand-neutral equivalents.
- **New CSS → globals.css (token-driven):** `.fin-hero-grid`, `.fin-trust-strip`, `.fin-trust-item`,
  `.fin-brief` + all `.fin-brief-*` (head, chrome, replay, dots, bar, query, caret, analysis,
  loading, status, spinner, skel-rows/row, skel/label/val, title, row, delta, sources, stats, stat),
  keyframes `fin-caret` / `fin-spin` / `fin-shimmer`. Reuses existing globals: `hero-purple-wash`,
  `hero-h1`, `accent-line`, `hero-inner .subcopy`, `hero-buttons`, `eyebrow`, `btn*`, `container`,
  `section-pad`.
- All brief data stays `data-placeholder` until real product visuals/numbers are sourced.

---

## Slot 2 — The problem · 🔒 LOCKED (2026-06-13)

**Source:** `2026-06-13-solutions-finance-v2.html` — section `#challenge` ("The Leader's Challenge").

**Composition:** centered section header — eyebrow "The Leader's Challenge" → H2 "You have the
data. *You're still waiting for the answer.*" (accent second line) → subcopy ("The CFO's office
sits at the intersection of every business system…"). Below: a **6-card grid, 3×2** (`.challenge-grid`
→ `repeat(3,1fr)`, gap `--space-5`; collapses to 2-up ≤980px, 1-up ≤600px; equal-height cards).

**The 6 cards** (`.card.challenge-card`: icon-box + `h3.heading-sm` + body `p`):
| Card | Icon (lucide) |
|---|---|
| Slow Financial Close | clock |
| Version-Control Hell | bar-chart |
| Audit & Compliance Risk | shield |
| Analyst Bottleneck | user |
| Forecasting Blind Spots | trending-up |
| Fragmented Data Systems | database |

### Port notes (for v3 → Next.js)
- **Component:** reuse a problem-card grid (extends the existing `ProblemSolutionCards`/`IconFeatureGrid`
  pattern) or a small `ChallengeGrid.tsx`; cards = icon + title + body.
- **Content → brand config:** the 6 cards (icon key + title + body) and the section header live in
  `brands/*/config.ts` (`solutions.finance.challenge`), typed in `config/types.ts`.
- **New CSS → globals.css (token-driven):** `.challenge-grid`, `.challenge-card` (+ its `h3`/`p`).
  Reuses globals `.card`, `.icon-box`, `.section-header.center`, `.eyebrow`, `.display-lg`,
  `.accent-line`, `.heading-sm`.
- Icons: Lucide outline set (matches the rest of the site).

---

## Next
Finalize Slot 3 (What it does): compare v1's FeatureRow ×3 (Define → Answer → Audit, with UI
product-shots) vs v2's Core-Capabilities tabs in the browser, decide, lock here.
