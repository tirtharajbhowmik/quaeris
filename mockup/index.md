# Quaeris Mockup Index

Every HTML mockup in this project, grouped by purpose. **56 mockups** total across `pages/` and `sections/`.
Build convention, gates, and architecture: see [`../docs/QUAERIS-WEBSITE-KNOWLEDGE.md`](../docs/QUAERIS-WEBSITE-KNOWLEDGE.md).
Live pages are served through the Next.js catch-all (`web/src/lib/mockup.ts`) — run `npm run dev:quaeris` (→ `http://localhost:3101`). Standalone: `npx serve -l 3200 .` (→ `http://localhost:3200/mockup/...`).

_Last updated: 2026-06-16._

---

## 1. Live site pages — `pages/` (2026-06-14)

Served at `localhost:3101/<route>` via the catch-all.

| Route | File |
|---|---|
| `/about` | `pages/2026-06-14-about.html` |
| `/blog` | `pages/2026-06-14-blog.html` |
| `/blog/sample-post` | `pages/2026-06-14-blog-article.html` |
| `/case-studies` | `pages/2026-06-14-case-studies.html` |
| `/customers` | `pages/2026-06-14-customers.html` |
| `/docs` | `pages/2026-06-14-docs.html` |
| `/platform` | `pages/2026-06-14-platform.html` |
| `/platform/access-control` | `pages/2026-06-14-platform-access-control.html` |
| `/platform/agents` | `pages/2026-06-14-platform-agents.html` |
| `/platform/audit` | `pages/2026-06-14-platform-audit.html` |
| `/platform/governance` | `pages/2026-06-14-platform-governance.html` |
| `/platform/semantic-layer` | `pages/2026-06-14-platform-semantic-layer.html` |
| `/platform/warehouse` | `pages/2026-06-14-platform-warehouse.html` |
| `/pricing` | `pages/2026-06-14-pricing.html` |
| `/resources` | `pages/2026-06-14-resources.html` |
| `/resources/webinars` | `pages/2026-06-14-resources-webinars.html` |
| `/solutions` | `pages/2026-06-14-solutions.html` |
| `/solutions/analysts` | `pages/2026-06-14-solutions-analysts.html` |
| `/solutions/data-teams` | `pages/2026-06-14-solutions-data-teams.html` |
| `/solutions/executives` | `pages/2026-06-14-solutions-executives.html` |
| `/solutions/product` | `pages/2026-06-14-solutions-product.html` |
| `/solutions/revenue-ops` | `pages/2026-06-14-solutions-revenue-ops.html` |

## 2. Homepage redesign explorations — `pages/` (2026-06-16)

| Route | File | Notes |
|---|---|---|
| `/home-redesign` | `pages/2026-06-16-homepage-redesign.html` | v1 — competitor-informed homepage; Solutions section = graphics-forward cards |
| `/home-redesign-v2` | `pages/2026-06-16-homepage-redesign-v2.html` | v2 — cohesive shared-kit rebuild |
| `/solutions-variations` | `pages/2026-06-16-solutions-variations.html` | 3 diagram/animation variations of the Solutions section (Pipeline / Live Proof Stage / Governance Map) |

## 3. Finance gold-standard lineage — `sections/`

The flagship page and the blocks it was assembled from.

| File | Role |
|---|---|
| `sections/2026-06-13-solutions-finance-v3.html` | ⭐ **Gold standard** — live at `/solutions/finance` |
| `sections/2026-06-13-solutions-finance-v2.html` | Prior full version |
| `sections/2026-06-13-finance-hero-combined.html` | Hero building block |
| `sections/2026-06-13-finance-capabilities-interactive.html` | Capabilities dashboard block |
| `sections/2026-06-13-finance-why-v5.html` | "Why Quaeris" (final) |
| `sections/2026-06-13-finance-stats-v2.html` | Stats-band iteration |
| `sections/2026-06-14-finance-stats-v3.html` | Stats-band iteration |
| `sections/2026-06-13-finance-stats-v4.html` | Stats-band iteration |

## 4. First-pass section drafts — `sections/` (2026-06-12, superseded)

Early per-page section drafts, since rebuilt into the full pages in §1. Kept as design history.

`2026-06-12-{about, case-studies, customers, platform, platform-access-control, platform-agents, platform-audit, platform-governance, platform-semantic-layer, platform-warehouse, pricing, solutions, solutions-analysts, solutions-data-teams, solutions-executives, solutions-finance, solutions-product, solutions-revenue-ops}.html` (18 files)

## 5. Archived iterations — `sections/_archive/`

"Why Quaeris" design-tournament rejects: `2026-06-13-finance-why-{interactive, v2, v3, v4}.html` (4 files)

## 6. Supporting files (not mockups)

| File | Purpose |
|---|---|
| `sections/_template.html` | Starter template for new mockups (copy this) |
| `sections/README.md` | Mockup pipeline docs |
| `sections/2026-06-13-finance-v3-buildsheet.md` | Finance v3 decision log |
| `pages/_qa-fixlist.json` | QA sweep findings |
| `*.png`, `bands/*.png` | Reference screenshots |
