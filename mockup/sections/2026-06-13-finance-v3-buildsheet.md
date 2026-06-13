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
| 3 | **What it does** | 🔒 **LOCKED** | Interactive Core Capabilities tabs — see below |
| 4 | Why Quaeris | ⬜ (likely drop) | v1 IconFeatureGrid ×4 — not chosen so far |
| 5 | **Security / compliance** | 🔒 **LOCKED** | v2 "inside your perimeter" + comparison table — see below |
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

## Slot 3 — What it does · 🔒 LOCKED (2026-06-13)

**Source:** `2026-06-13-finance-capabilities-interactive.html` (interactive build, not the static v2).

**Composition:** centered header (eyebrow "Core Capabilities" → H2 "From close cycle to board prep.
*One platform covers it.*" → subcopy). Below: **4 ARIA tabs** (Governed Analytics / Variance Analysis /
Forecasting / Unification) over a two-column panel — left = title + lead + 3 check-bullets, right = a
purple-gradient **live dashboard** unique to each tab.

**Interactivity (locked):**
- **Tabs:** real `role=tablist/tab/tabpanel`, ←/→ keyboard, sliding **progress underline** that fills
  over `--dwell` (~6.5s) then **auto-advances**; **pauses on hover / focus-within**; click resets.
- **Per-tab dashboards**, each replays a choreographed entrance on activation + has ambient idle motion:
  1. *Governed Analytics* — a glowing dot **drops smoothly down the lineage** (Question → metric `revenue v3.1` → `GL 4000–4099`), a colored progress line fills behind it, and each node locks a ✓ **the instant the dot reaches it**; "traced in 0.8s" counts up; chip breathes. *(Refined 2026-06-13: measured, transform/GPU dot via the Web Animations API — stops exactly on the final circle; node lock-ins fire off the decelerating dot's real position via an easing-inverter, never fixed timers. Port: framer-motion + a measured `useAnimate` timeline, `useReducedMotion` → snap to fully-traced state.)*
  2. *Variance Analysis* — driver **bars grow with a light sweep**, values + **+8.8% total** count up; bars hover-highlight.
  3. *Forecasting* — the **line plots itself L→R** (smooth Catmull-Rom curve), the area fills under it, then the dashed projection + dots settle in; 98.8% counts up, a **live pulsing point** beats on "now", alert pulses; hover thickens line. *(Refined 2026-06-13: removed the disliked sweep/scan overlay → clean draw-on reveal; chart re-proportioned to a taller `460×200` viewBox with smooth curved `<path>`s — no more horizontal stretch / angular zig-zag. Port: framer-motion line-draw (`pathLength`), area/forecast/dots staggered fade.)*
  4. *Unification* — sources **slide in from their sides**, connectors draw, **data packets flow** into a **breathing core**; 3,000+ counts up; sources hover-lift.
- Progressive enhancement: gated behind a `.js` flag; reduced-motion / no-JS → correct static state.

### Port notes (for v3 → Next.js)
- **Component:** `CapabilitiesTabs.tsx` + a `CapabilityDashboard` per key (`LineageViz`, `VarianceViz`,
  `ForecastViz`, `UnificationViz`). Tabs = state + framer-motion (`AnimatePresence` for panel cross-fade,
  layout/`motion` for the progress underline, `useReducedMotion`). Auto-advance via an interval/`useAnimationFrame`
  that pauses on hover/focus. Count-ups via framer-motion `animate(0, target)`.
- **Content → brand config:** tab labels, each tab's title/lead/bullets, and each dashboard's placeholder
  data (lineage nodes, variance drivers, chart points, sources) live in `brands/*/config.ts`
  (`solutions.finance.capabilities`), typed in `config/types.ts`.
- **New CSS → globals.css (token-driven):** the `.cap-*` system (tabs, panels, `.cap-visual`, and the four
  viz blocks `cap-lineage` / `cap-bars` / `cap-chart` / `cap-union` + keyframes `cap-prog`, `cap-trace`,
  `cap-barshine`, `cap-ping`, `cap-scan`, `cap-flow`, `cap-corebeat`, `cap-breathe`, `cap-fade`). Reuses
  `.container`, `.section-header.center`, `.eyebrow`, `.display-md/-lg`, `.accent-line`, `.body-md`.
- All dashboard data stays `data-placeholder` until real product numbers are sourced.

---

## Slot 5 — Security / compliance · 🔒 LOCKED (2026-06-13)

**Source:** `2026-06-13-solutions-finance-v2.html` — section `#security`.

**Composition:** two-column (`.sec-grid`). **Left:** accent eyebrow "Security & Governance" → H2 "Your
financial data stays *inside your perimeter.*" → paragraph → **4 icon bullets** (`.sec-bullet`, `.icon-box`):
deploy on your own Kubernetes (database icon) · data-level permissions per query (lock) · everything logged,
PCI/DSS-ready (file-check) · bring your own model — OpenAI/Anthropic/Google/Meta (brain). **Right:** a
**comparison card** (`.compare-card`) titled "QuaerisAI vs Open AI Tools" with header row
(Capability / QuaerisAI / Open AI Tools) and **5 rows** (`.compare-row` → `.compare-feature` +
`.compare-cell.yes` ✓ + `.compare-cell.no` ✗): Data stays in your network (Always / Cloud only) ·
Audit trail on every answer (Built-in / None) · Role-based access control (Query-level / Manual) ·
On-premise deployment (Yes / Cloud only) · PCI/DSS ready (By design / Not built for it).

### Port notes (for v3 → Next.js)
- **Component:** `SecurityCompare.tsx` (left bullets + right `ComparisonTable`).
- **Content → brand config:** the 4 bullets (icon key + text) and the comparison rows
  (feature, ours, theirs) live in `brands/*/config.ts` (`solutions.finance.security`), typed in `config/types.ts`.
  Competitor column phrased generically ("Open AI Tools") — no named-vendor claims.
- **New CSS → globals.css (token-driven):** `.sec-grid`, `.sec-bullets`, `.sec-bullet`, `.compare-card`,
  `.compare-title`, `.compare-head`, `.compare-row`, `.compare-feature`, `.compare-cell` (+ `.yes`/`.no`).
  Reuses `.icon-box`, `.eyebrow`, `.display-lg`, `.accent-line`, `.subcopy`.
- Optional at port: light entrance (rows reveal on scroll); keep restrained — this is a trust section.

---

## Next
Slot 9 (FAQ) — reconcile v1's 7 vs v2's 7; and Slot 10 (Closing CTA) — v1 dark band vs v2 gradient card.
(Slot 4 "Why Quaeris" currently dropped; reinstate if wanted.)
