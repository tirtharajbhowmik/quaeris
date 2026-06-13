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
| 5 | **Security / compliance** | 🔒 **LOCKED** | v2 "inside your perimeter" + comparison table — see below |
| 4 | **Why Quaeris** | 🔒 **LOCKED** | 2×2 interactive "Ledger Cards" (v5) — **placed AFTER §5** — see below |

**v3 section order** (note §4 moves after §5 per user): Hero → The problem → What it does → Security/compliance → **Why Quaeris** → (FAQ → Closing CTA → …).
| 6 | Use cases | ⬜ | v1 SegmentCards ×3 (v1-only) |
| 7 | Stats | ⬜ | v1 StatBlock ×4 (v1-only) |
| 8 | Testimonials | ⬜ | v1 ×6 (v1-only) |
| 9 | **FAQ** | 🔒 **LOCKED** | v2 "Questions CFOs ask us. Before they sign." — 7 SEO-rich Q&As — see below |
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

## Slot 4 — Why Quaeris · 🔒 LOCKED (2026-06-13) · placed AFTER §5

**Source:** `2026-06-13-finance-why-v5.html` (chosen via an 8-agent design tournament — winner
"Ledger Cards / Cohesive-Calm" — then re-laid-out to **2×2** per user direction). Retired
iterations (`why-interactive`, `-v2`, `-v3`, `-v4`) archived under `mockup/sections/_archive/`.

**Composition:** centered header (eyebrow "Why Quaeris" → H2 "Built for the way finance *actually
works.*" → subcopy) on a **white** surface (deliberate authority signal). Below: a **2×2 grid**
(`repeat(2,1fr)`; → 1-col ≤1000px) of equal-height cards. Each card = **text column** (number `0X`
with accent tick · icon · `h3` · claim) + a **proof column** (bordered-left panel), vertically
centered. Internal card grid `minmax(0,0.64fr) minmax(0,1fr)`; stacks ≤620px.

**The 4 cards** — one signature interaction each, one motion language ("ledger settle, inked left-to-right"):
1. **Certified Metrics Library** — a registry table (Metric · GL root · Ver · ✓) of 6 certified metrics; **click a row** → its certified definition + owner + date expands (single-open). Pulsing cert dot + ticking UTC stamp.
2. **Multi-Dimensional Variance** — segmented toggle **vs Budget / vs Forecast / Prior Year** re-tweens 3 ranked driver bars + deltas (GL-cited, error-tinted).
3. **Instant Budget Questions** — question chip + **Run** button reveals 3 ranked answer rows (Marketing/R&D/Legal + GL roots) + provenance footer.
4. **EU AI Act & SOX Ready** — SOX §302/§404 + EU AI Act Art. 13 tags + a **Replay**-able 3-node audit timeline (Permitted → Approved → Traced) + Live pulse.

**Motion/a11y:** staggered card entrance + per-row left-to-right "ink"; ambient = one motif per card;
all click-driven (no hover-to-discover); full ARIA (registry rows `aria-expanded`, toggle `role=group`
`aria-pressed`, Run/Replay buttons, `aria-live`/`role=log`), 44px targets, `:focus-visible`. Gated by
`.wq.js`; reduced-motion + no-JS → correct static state. Verified on the :3200 preview (2×2 confirmed,
zero clipped registry cells).

### Port notes (for v3 → Next.js)
- **Component:** `WhyQuaeris.tsx` + small per-card pieces (`MetricsRegistry`, `VarianceToggle`,
  `BudgetQuery`, `AuditTrail`). Motion → framer-motion (`useInView`, `useReducedMotion`, `animate` for
  count-ups + bar widths); the registry expand = controlled state.
- **Content → brand config:** card titles/claims + each proof's data (6 metrics & lineage strings; the
  3 variance datasets; the budget Q + 3 answers; the audit nodes + framework tags) → `brands/*/config.ts`
  (`solutions.finance.why`), typed in `config/types.ts`. All illustrative data stays `data-placeholder`.
- **New CSS → globals.css (token-driven):** the `wq-*` system (`.wq-grid`, `.wq-card`, `.wq-text`,
  `.wq-head`, `.wq-num`/`-tick`, `.wq-icon`, `.wq-claim`, `.wq-proof`, and the four proof blocks
  `wq-reg*` / `wq-dim*` / `wq-q`+`wq-ans*` / `wq-tags`+`wq-chain`+`wq-node*`) + keyframe `wq-pulse`.
  White section bg is intentional — do not change to `--bg-warm`/`--bg-canvas`.

---

## Slot 9 — FAQ · 🔒 LOCKED (2026-06-13)

**Source:** `2026-06-13-solutions-finance-v2.html` — section `#faq` (chosen over v1's 7 generic Q&As;
v2's set is finance-specific and SEO-rich). Background `--bg-warm`; centered header eyebrow "FAQ" →
H2 "Questions CFOs ask us. *Before they sign.*"; single-column accordion (`.accordion.fin-faq`,
max-width 760px, first item open).

**The 7 Q&As** (each `accordion-item` → `accordion-question` + `accordion-content` answer):
1. **What is agentic analytics for financial services?** — governed platform; plain-English questions, sourced/audited answers grounded in certified metric definitions, never an LLM guess.
2. **What is the best AI analytics platform for banks, asset managers, and capital-markets firms?** — warehouse-native, role-based access at query time, full audit trail; Quaeris architected for regulated environments.
3. **How do banks accelerate regulatory reporting (BCBS 239, CCAR, CECL) with AI analytics?** — certify metrics once in a governed semantic layer; every figure traceable to source on demand.
4. **How do you unify ERP, general ledger, Bloomberg, core banking, and document data?** — query the warehouse where sources are synced + document agents; one semantic layer spans them.
5. **How do finance teams analyze contracts, 10-Ks, and prospectuses alongside warehouse data?** — document agents extract structured data from filings, unified with warehouse metrics in one query.
6. **Is the AI compliant with SOX, SOC 2, GLBA, SR 11-7, and the EU AI Act?** — SOC 2 Type II audited; role-based controls + full query logging for SOX/SR 11-7; EU AI Act roadmap; data residency enforced.
7. **Is Quaeris an alternative to Hebbia, AlphaSense, Rogo, or FP&A tools like Anaplan?** — complements them; sits above warehouse + semantic layer as a governed NL interface.

### Port notes (for v3 → Next.js)
- **Component:** reuse the existing `FAQSection` / `Accordion` (Radix) component; mockup uses native
  `<details>` as the Radix stand-in.
- **Content → brand config:** the 7 Q&A pairs + header → `brands/*/config.ts` (`solutions.finance.faq`),
  typed in `config/types.ts`.
- **SEO:** emit **FAQPage JSON-LD** from these 7 Q&As at port (the question phrasing is intentionally
  search-optimized). Reuses existing `.accordion*` globals; no new CSS.

---

## Next
Slot 10 (Closing CTA) — v1 dark band vs v2 gradient card ("Your next board deck. Answered in minutes.").
Then assemble v3 in the locked order (Hero → Problem → Capabilities → Security → Why → FAQ → CTA …).
