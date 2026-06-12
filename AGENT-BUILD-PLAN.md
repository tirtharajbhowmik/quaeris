# AGENT BUILD PLAN — Sub-Agent Orchestration for the White-Label Site

> Companion to `UI-MASTER-PROMPT.md` (the **Spec**). This file tells an orchestrating agent how to split the build across sub-agents, in what order, with what contracts, and how to verify each unit. Every sub-agent receives: (1) the Spec, (2) this file, (3) its own assignment block below.

---

## 0. Orchestrator Instructions

1. Execute phases **strictly in order**. Within a phase, launch all listed agents **in parallel** — their file ownership is disjoint by design.
2. A phase is complete only when every agent's acceptance criteria pass. Run the QA gate at each phase boundary before proceeding.
3. **File ownership is exclusive.** An agent may read any file but write only files it owns. Shared contracts (§1) are frozen after Phase 0 — changing them requires stopping and re-planning, not silent edits.
4. If an agent needs a component that doesn't exist, it files a request to the orchestrator; it does NOT create a local one-off copy.
5. All copy uses `{{TOKEN}}` placeholders from `brand.config` unless the Spec gives literal structural copy.

## 1. Shared Contracts (frozen after Phase 0)

| Contract | File | Contents |
|---|---|---|
| Design tokens | `src/styles/tokens.css` (or `tailwind.config` theme) | Every value from Spec §2. Single source of truth. |
| Brand config | `src/config/brand.config.(ts/json)` | `{{BRAND_NAME}}`, logo paths, CTA labels, contact info, social URLs, metrics, review badges, partner logos. |
| Component API | `src/components/ui/*` | Canonical components from Spec §3, exact names (`Button`, `Card`, `SectionHeader`, …). Props documented in a JSDoc/README per component. |
| Routes | Spec §5.1 sitemap | Exact paths; no agent invents routes. |
| Content model | `src/content/` | JSON/MD collections: `verticals/*.json`, `case-studies/*.md`, `blog/*.md`, `resources/*.md`, `tools/*.json`, `faq/*.json`. Schemas defined in Phase 0. |
| Layout shells | `src/layouts/` | `DefaultLayout` (header+footer), `LandingLayout` (slim header/footer), `ArticleLayout` (prose+TOC). |

## 2. Dependency Graph

```
Phase 0: foundation ──► Phase 1: core pages ──► Phase 3: integration QA
                   └──► Phase 2: content systems ──┘
(Phases 1 and 2 run in parallel after Phase 0)
```

---

## Phase 0 — Foundation (sequential, 2 agents)

### Agent F1 · `design-system-agent`
- **Owns:** `src/styles/tokens.css`, `src/components/ui/*`, `src/config/brand.config`, component README.
- **Task:** Implement Spec §2 tokens exactly. Build every component in Spec §3 with all variants/states (hover, focus-visible, active, disabled, loading, error, success, empty). Create a `/dev/components` gallery page rendering every component in every state on light and dark backgrounds.
- **Acceptance:** Gallery page renders all components; zero hard-coded style values (grep for `#`, `px` literals outside tokens file passes); keyboard nav works on Accordion, dropdown, tabs; `prefers-reduced-motion` verified.

### Agent F2 · `layout-agent` (starts when F1 finishes `Button`/`Eyebrow`/tokens)
- **Owns:** `src/layouts/*`, `SiteHeader`, `SiteFooter`, mega-menu dropdowns, mobile nav overlay, 404 page, legal page template, SEO head utility (title/meta/OG/JSON-LD helpers).
- **Acceptance:** Header sticky+blur behavior on scroll; mega-menus keyboard accessible; mobile overlay traps focus; all three layout shells render; SEO helper outputs valid JSON-LD (test with one fixture).

**Phase 0 QA gate:** orchestrator (or QA agent) screenshots gallery at 360/768/1440, verifies token-only styling, approves freeze of contracts.

---

## Phase 1 — Core Pages (parallel, 4 agents)

### Agent P1 · `home-agent`
- **Owns:** `/` page file + home-only section components (`HeroHome`, dark feature section).
- **Task:** Spec §5.2, sections 1–10 in exact order.
- **Acceptance:** Section order matches Spec; exactly 1 dark section + 1 CTABand; stat counters animate once; hero has no image; Lighthouse a11y ≥95.

### Agent P2 · `supporting-pages-agent`
- **Owns:** `/about`, `/contact`, `/services`, privacy/terms content fills.
- **Task:** Spec §5.3, §5.4, §5.7, §5.12.
- **Acceptance:** Contact `LeadForm` validates inline with success state; About has founder section + timeline; no CTABand on contact; services grid links resolve.

### Agent P3 · `vertical-lp-agent`
- **Owns:** `/solutions/[vertical]` template + `src/content/verticals/{ecommerce,saas,professional-services}.json`.
- **Task:** Spec §5.5. Template is 100% data-driven — adding a 4th vertical = adding 1 JSON file, zero code.
- **Acceptance:** All 3 verticals render from data; pains/outcomes/FAQ/case-study refs all sourced from JSON; FAQ schema emitted; orchestrator spot-adds a dummy 4th vertical JSON and it renders without code changes.

### Agent P4 · `campaign-lp-agent`
- **Owns:** `/lp/lp-a`, `/lp/lp-b`, `/lp/lp-c` + `LandingLayout` usage + sticky mobile CTA bar + comparison table component (local to LP-C).
- **Task:** Spec §5.6 — three structurally distinct templates.
- **Acceptance:** No full nav on any LP; every CTA anchors to the single form; LP-A ≤5 viewports tall at 1440; sticky mobile CTA appears after 1 viewport; forms ≤4 fields.

---

## Phase 2 — Content Systems (parallel with Phase 1, 4 agents)

### Agent C1 · `blog-agent`
- **Owns:** `/blog`, `/blog/[slug]`, `ArticleLayout` prose styles, TOC scroll-spy, 3 seeded sample posts (≥1200 words each, with h2/h3/blockquote/callout/code/figure to exercise every prose style).
- **Task:** Spec §5.9.
- **Acceptance:** Filter tabs work; featured post renders; TOC highlights active section and collapses ≤1024; `Article` schema valid; prev/next nav correct.

### Agent C2 · `discover-agent`
- **Owns:** `/discover`, report detail template, gated whitepaper template, `ResourceCard` cover-mock generator, 4 seeded resources (2 reports, 2 whitepapers).
- **Task:** Spec §5.10.
- **Acceptance:** Filters + sort work; gated page shows exec summary → blur fade → form; post-submit success card with download; key-findings stat band on reports.

### Agent C3 · `case-study-agent`
- **Owns:** `/case-studies`, `/case-studies/[slug]`, 4 seeded case studies (one per vertical + one extra) with realistic metric structures.
- **Task:** Spec §5.11. Case-study content must use slugs referenced by P3's vertical JSONs — coordinate slug list with orchestrator at kickoff.
- **Acceptance:** Sticky snapshot sidebar; 3 StatBlocks in hero; vertical filters work; slugs match vertical references.

### Agent C4 · `tools-agent`
- **Owns:** `/tools`, `/tools/[tool]` template, 2 working calculators (ROI/ROAS + budget), calculation logic, methodology accordions.
- **Task:** Spec §5.8.
- **Acceptance:** Calculators update live with no submit; results panel on ink card with big stats; inputs validated (no NaN/negative blowups); methodology accordion present; related-tools cross-links resolve.

---

## Phase 3 — Integration & QA (sequential, 2 agents)

### Agent Q1 · `integration-agent`
- **Owns:** cross-page wiring only (nav menu items → real routes, footer links, related-content links, sitemap.xml, robots.txt, redirects).
- **Acceptance:** Zero dead links (run a crawler); every nav/footer item resolves; mega-menu featured cards point to real content.

### Agent Q2 · `qa-agent` (read-only + report)
- **Task:** Run the full Definition of Done from Spec §7 against every route. Screenshot all pages at 360/768/1024/1440. Check: token-only styling grep, heading hierarchy, form states, reduced-motion, schema validation, Lighthouse on `/`, `/lp/lp-a`, one blog post. File defects as a checklist back to owning agents; orchestrator loops fixes until clean.
- **Output:** `QA-REPORT.md` with pass/fail per Spec §7 item per page.

---

## 4. Seeded Content Inventory (so the build demos well)

| Collection | Count | Owner |
|---|---|---|
| Verticals | 3 | P3 |
| Campaign LPs | 3 | P4 |
| Blog posts | 3 | C1 |
| Reports / whitepapers | 2 + 2 | C2 |
| Case studies | 4 | C3 |
| Tools | 2 | C4 |
| FAQ sets | home + per-vertical + contact | P1/P3/P2 |

All seeded content is clearly placeholder-real: plausible structure and numbers, `{{BRAND_NAME}}` tokens for identity.

## 5. Conflict Rules

- Two agents needing the same new shared component → orchestrator assigns it to F1 (design-system-agent) as a fast-follow; both agents stub against the agreed prop API meanwhile.
- Token changes after Phase 0 freeze → forbidden without orchestrator sign-off; if approved, F1 makes the change and notifies all agents.
- Copy/voice disputes → Spec §4.8 wins (short, declarative, outcome-first).
