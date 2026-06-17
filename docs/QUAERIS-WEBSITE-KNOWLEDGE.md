# Quaeris Website — Knowledge Base & Build Reference

> **Single source of truth for building any Quaeris web page or section.** Read this before creating a new page, section, or component. When something here changes in the codebase, update this file. Last synced from the codebase: **2026-06-16**.

This file is split into two halves:
1. **Extracted from the codebase** (§1–§7) — design tokens, classes, conventions, architecture, brand, strategy. Authoritative; mirrors the repo.
2. **Information needed from you** (§8) — facts only the team knows (real customers, compliance dates, etc.). Filled in over time.

---

## 0. At a glance

| | |
|---|---|
| **Product** | Quaeris — governed, agentic analytics for regulated enterprises. Plain-language questions → governed, audited answers; warehouse-native; role-gated; zero hallucinations. |
| **Positioning** | *"Confidence is easy. Proof is hard."* — win on **provable governed trust**, not speed. |
| **Brand accent** | `#9333EA` (purple) — always via `var(--brand-accent)`, **never hardcoded**. Deep `#581C87`, hover `#7E22CE`. (Legacy values `#8C20A4` / `#4E0250` / `#200123` must never appear hardcoded — that's the QA gate.) |
| **Fonts** | Roboto (display/headings), Inter (body). |
| **Stack** | Next.js 16, React 19, Tailwind v4, build-time brand selection (`BRAND=quaeris`). |
| **Repo root** | `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec` |
| **Key dirs** | `web/` (Next app) · `mockup/sections/` + `mockup/pages/` (approved HTML mockups) · `docs/` (strategy, audit, this file) |
| **Run (dev)** | `npm run dev:quaeris` → http://localhost:3101 · static mockups: `npx serve -l 3200 .` → http://localhost:3200 |
| **Build** | `npm run build:quaeris` then `next start` |
| **Review routes** | `/home-redesign`, `/home-redesign-v2`, `/solutions-variations`, `/solutions/finance` (the gold-standard) |
| **Strategy doc** | `docs/2026-06-16-homepage-strategy.md` · **Audit** `docs/2026-06-15-production-readiness-audit.md` |

### The non-negotiables (every page must obey)
1. **Mockup first** — build new UI as a standalone HTML mockup, review/approve, *then* port. (§4)
2. **Tokens only** — never hardcode a brand hex; use `var(--brand-accent)` etc. (§2, §4)
3. **All-UI, no images** — build every visual with HTML + CSS + inline SVG; no `<img>`/external images. (§4)
4. **Correct without JS** — content visible & legible with scripts disabled; JS only enhances. (§4)
5. **Honest content** — no fabricated logos/metrics/customers; one canonical compliance status; mark illustrative data visibly. (§5)
6. **Pass the gates** — 0 "Veris", 0 hardcoded brand-hex, 0 visible placeholder text, exactly one `</html>`. (§4)

---

## Table of contents
1. [Brand, Voice & Content Rules](#1-brand-voice--content-rules)
2. [Design Tokens & Typography](#2-design-tokens--typography)
3. [Reusable CSS Classes](#3-reusable-css-classes)
4. [Mockup-First Pipeline & QA Gates](#4-mockup-first-pipeline--qa-gates)
5. [Architecture & How to Add a Page](#5-architecture--how-to-add-a-page)
6. [Positioning, Strategy, Component Kit & Threaded Dataset](#6-positioning-strategy-component-kit--threaded-dataset)
7. [Information Needed From You](#7-information-needed-from-you)


---

# 1. Brand, Voice & Content Rules

**Source files:**
- `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/web/src/brands/quaeris/config.ts`
- `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/docs/2026-06-15-production-readiness-audit.md`

---

## 1. Brand Facts

| Field | Value |
|---|---|
| Name | Quaeris |
| Tagline | Secure, Governed Analytics. Powered by Trusted Agents. |
| URL | https://www.quaeris.ai |
| Email | seek@quaeris.ai |
| Logo src | `/quaeris-logo.png` (string or null) |
| Footer thesis | "Governed analytics your enterprise can trust." |
| Copyright | © 2026 Quaeris. All rights reserved. |

---

## 2. Product One-Liner

Quaeris is **governed agentic analytics**: business users ask plain-language questions and AI agents return governed, audited, source-cited answers grounded in a certified semantic layer — warehouse-native, role-gated, and architecturally zero-hallucination.

Exact `brand.meta.description` from config:

> "Ask questions, get trusted answers — on a secure platform your enterprise can rely on. Quaeris is agentic analytics: governed, audited, warehouse-native."

Exact `brand.footer.brandDesc`:

> "Quaeris is agentic AI for analytics — a secure, governed platform where business users ask questions and AI agents return accurate, source-cited answers grounded in your semantic layer."

---

## 3. Navigation Structure

### Desktop top-level items (`brand.nav.topItems`)

| Label | Type | Href |
|---|---|---|
| Platform | Mega-menu | `/platform` |
| Solutions | Mega-menu | `/solutions` |
| Resources | Mega-menu | `/resources` |
| Docs | Plain link | `/docs` |
| Pricing | Plain link | `/pricing` |
| About | Plain link | `/about` |

### Platform mega-menu groups

**Core Capabilities**
- Agentic Query Engine — `/platform/agents` — "Plain-language questions, governed answers"
- Semantic Layer — `/platform/semantic-layer` — "Single source of truth for every metric"
- Governance & Lineage — `/platform/governance` — "Full trace from question to source"

**Security & Control**
- Role-Based Access — `/platform/access-control` — "Metrics scoped to who needs them"
- Warehouse-Native — `/platform/warehouse` — "Your data never leaves your environment"
- Audit Logs — `/platform/audit` — "Full trail of every query and answer"

### Solutions mega-menu groups

**By Team**
- Data Teams — `/solutions/data-teams`
- Analysts — `/solutions/analysts`
- Executives — `/solutions/executives`

**By Use Case**
- Revenue & Operations — `/solutions/revenue-ops`
- Product Analytics — `/solutions/product`
- Finance & Planning — `/solutions/finance`

### Resources mega-menu groups

**Learn**
- Blog — `/blog`
- Documentation — `/docs`
- Webinars — `/resources/webinars`

**Proof**
- Case Studies — `/case-studies`
- Customer Stories — `/customers`
- About Quaeris — `/about`

### Mobile nav items

Platform, Solutions, Docs, Case Studies, Blog, Pricing, Contact

---

## 4. Primary CTA Labels

All primary call-to-action labels resolve to `"Book a Demo"`. Exact values from `brand.cta`:

| Key | Value |
|---|---|
| `cta.primary` | "Book a Demo" |
| `cta.hero` | "Book a Demo" |
| `cta.ctaBandPrimary` | "Book a Demo" |
| `cta.bookACall` | "Book a Demo" |
| `cta.ctaBandSecondary` | "See case studies" |
| `cta.viewCaseStudies` | "View case studies" |
| `cta.viewAllStories` | "View all stories" |
| `cta.subscribe` | "Subscribe" |

Contact href: `/contact`

---

## 5. Footer Columns

Four columns as defined in `brand.footer.columns`:

| Column | Links |
|---|---|
| **Company** | About `/about`, How it works `/platform`, Careers `/careers`, Press `/about` |
| **Platform** | Agentic Engine `/platform/agents`, Semantic Layer `/platform/semantic-layer`, Governance `/platform/governance`, Security `/trust` |
| **Resources** | Case studies `/case-studies`, Blog `/blog`, Documentation `/docs`, Webinars `/resources/webinars` |
| **Contact** | Book a Demo `/contact`, seek@quaeris.ai `mailto:seek@quaeris.ai`, LinkedIn `#`, Twitter/X `#` |

Legal links: Privacy `/privacy`, Terms `/terms`

Socials: LinkedIn, Twitter/X, Instagram (all currently `href="#"`)

---

## 6. Content Rules (Mandatory for Every Page)

### 6a. No Fabricated Social Proof

**Never** render real-looking customer logos, company names, or performance metrics that are not confirmed and approved.

- The config uses anonymized single-word company labels (Vertex, Lumio, Orbit, Northwind, Cedar, Halo, Prism, Solent, Kova, Elara) in the logo marquee and case studies. These names are illustrative brand stand-ins, not confirmed clients.
- Testimonials use initials only (e.g. "J.K.", "S.R.") with role + company-label. Never expand these to full real names without explicit approval.
- Review badge scores (G2 4.9, Gartner 4.8, Capterra 4.9) are **unconfirmed**. Do not surface these on live pages until sourced.
- The audit found 6 literal `[Company Name]` placeholders rendering verbatim in `solutions/finance`. These must be replaced with anonymized descriptors or removed.
- The `customers` page uses 9/10 anonymized entries. Any non-anonymized entry requires sign-off before shipping.
- Any dashboard tile, stat, or metric displayed in UI mockups (e.g. the `darkFeature.dashboard` panel) must carry a **visibly readable** "Illustrative data — for demonstration only" label on the card face. Labels buried in low-opacity CSS or HTML comments do not count (audit P2).
- Stats shown in the `brand.stats` section (14 min, 0 hallucinations, 87% reduction, 3× faster) are positioned as aggregate claims "across deployed orgs." These must be verified against real deployment data before live publication, or labeled as illustrative targets.

### 6b. One Canonical Compliance Status

The audit (P0-3) identified contradictory compliance claims across multiple pages and JSON-LD. The single authoritative status, to be applied uniformly to **all** visible copy and **all** JSON-LD / structured data, is:

| Certification | Status |
|---|---|
| SOC 2 Type II | Audit in progress — do not claim as certified |
| GDPR | Supported |
| HIPAA | On roadmap — do not claim as certified or "ready" |

**Prohibited phrasings (found in audit):**
- `"SOC 2 Type II audited"` (solutions/finance FAQ) — false claim
- `"SOC 2 Type II · GDPR · HIPAA Ready"` (solutions/executives) — overstated
- JSON-LD `"HIPAA, GDPR, and SOC 2 Type II"` on pricing page — contradicts visible badge

**Required action:** legal must sign off on canonical copy before any compliance statement is shipped. Interim safe phrasing: `"SOC 2 Type II — audit in progress · GDPR supported · HIPAA on roadmap"`.

### 6c. No "Do Not Ship" Comments in Shipped HTML

The audit confirmed that `platform/access-control` ships the following source comment in rendered HTML at line 1282:

```
HIPAA certification pending — do not ship as visible copy
```

No authoring notes, staging flags, or "do not ship" annotations may appear in any page's rendered HTML output. Strip all such comments before the production build.

### 6d. Keep Visible Copy and JSON-LD Consistent

Structured data (JSON-LD `@type: SoftwareApplication`, FAQPage, Article, etc.) must match what the visible page says. The pricing page JSON-LD listed "HIPAA, GDPR, and SOC 2 Type II" as active certifications while the visible badge showed "SOC 2 Type II — Certification in progress." This is a legal and trust risk. Every JSON-LD block must be reviewed against its visible page copy before shipping.

---

## 7. Voice & Tone

**Confident, precise, enterprise B2B, trust-first.**

- State facts, not aspirations. Avoid hedging ("we believe", "we think") but do not overclaim ("we are the only", "guaranteed").
- Prefer concrete over generic: "14 minutes median time to first insight" beats "fast answers."
- Every claim should be traceable — mirror the product's own governance model in the copy.
- No AI hype language. The newsletter brief is explicitly labeled: "No generic AI hype."
- Address data leaders (CDOs, Heads of Data, VPs of Analytics) and their concerns: governance, audit trails, role-based access, metric consistency, board-level trust.
- Short sentences. Active voice. Oxford comma.
- The hero headline — "Ask questions. Get trusted answers." — sets the register: plain, direct, no superlatives.
- CTAs are action-oriented and specific: "Book a Demo", "See supported warehouses", "Explore the semantic layer" — not "Learn more" as the only option everywhere.


---

# 2. Design Tokens & Typography

## Design Tokens

Source file: `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/web/src/brands/quaeris/tokens.css`

All tokens are declared on `:root`. Values are verbatim from the file (June 2026 revision).

---

### Brand Colors (`--brand-accent` family)

| Token | Value | Notes |
|---|---|---|
| `--brand-accent` | `#9333EA` | Changed 2026-06-12 (was PDF Brand Purple `#8C20A4`) |
| `--brand-accent-hover` | `#7E22CE` | Derived from new accent |
| `--brand-accent-deep` | `#581C87` | Derived from new accent |
| `--brand-accent-soft` | `rgba(147,51,234,0.10)` | Pill / tint background |
| `--brand-accent-glow` | `rgba(147,51,234,0.25)` | Derived glow |

---

### Backgrounds / Surfaces

| Token | Value | Notes |
|---|---|---|
| `--bg-canvas` | `#FAF8FF` | Page background |
| `--bg-surface` | `#FFFFFF` | Default surface (cards, etc.) |
| `--bg-warm` | `#F6F4F2` | Alt sections; changed 2026-06-12 (was `#F9F5FF`) |
| `--bg-ink` | `#0A0A12` | Dark sections / footer; changed per Tirtharaj (was `#200123`) |
| `--bg-ink-elevated` | `#14141F` | Derived companion of neutral ink |

---

### Text Colors

| Token | Value | Notes |
|---|---|---|
| `--text-primary` | `#200123` | — |
| `--text-secondary` | `#6B4D72` | "Body Purple" |
| `--text-tertiary` | `#9CA3AF` | Copyright bar |
| `--text-on-dark` | `#FFFFFF` | — |
| `--text-on-dark-dim` | `rgba(255,255,255,0.75)` | — |

---

### Borders

| Token | Value | Notes |
|---|---|---|
| `--border-subtle` | `rgba(11,14,30,0.08)` | Changed per Tirtharaj (was `#ECDCF0`) |
| `--border-strong` | `rgba(11,14,30,0.16)` | Derived companion |
| `--border-on-dark` | `rgba(255,255,255,0.12)` | Derived companion for neutral ink |

---

### Semantic Colors (Success / Warning / Error)

The file declares on-dark semantic delta tints only. No global `--success` / `--warning` / `--error` base tokens are present.

| Token | Value | Notes |
|---|---|---|
| `--success-on-dark` | `#6EE7B7` | Lighter tint; safe on purple gradient |
| `--error-on-dark` | `#FCA5A5` | Lighter tint; safe on purple gradient |

No `--warning-*` token is defined.

---

### Spacing Scale

No `--space-*` tokens are defined in this file.

---

### Radii

| Token | Value | Notes |
|---|---|---|
| `--radius-cta` | `10px` | CTA shape radius per PDF spec |

No additional `--radius-*` tokens are defined.

---

### Shadows

No `--shadow-*` tokens are defined in this file.

---

### CTA / Gradient Tokens

| Token | Value |
|---|---|
| `--cta-bg` | `linear-gradient(90deg, var(--brand-accent-deep), var(--brand-accent))` |
| `--cta-bg-hover` | `linear-gradient(90deg, #46166D, var(--brand-accent-hover))` |
| `--cta-bg-hero` | `linear-gradient(90deg, var(--brand-accent-deep), var(--brand-accent))` |

---

### Typography Tokens (in tokens.css)

| Token | Value |
|---|---|
| `--font-display` | `var(--font-roboto), Arial, sans-serif` |
| `--font-body` | `var(--font-inter), system-ui, -apple-system, sans-serif` |
| `--font-hero` | `var(--font-display)` |
| `--weight-display` | `400` |
| `--weight-hero` | `400` |
| `--size-hero` | `3rem` |

---

### Code-Block Syntax Tints

Scoped to dark ink surface; not brand palette colors.

| Token | Value | Semantic role |
|---|---|---|
| `--code-base` | `#E2D4F0` | Default text on dark code surface |
| `--code-tok-kw` | `#C084FC` | Keyword |
| `--code-tok-fn` | `#7DD3FC` | Function / identifier |
| `--code-tok-str` | `#86EFAC` | String |
| `--code-tok-cm` | `#6B7280` | Comment (muted) |
| `--code-tok-nu` | `#FCA5A5` | Number |

---

### Decorative / Chrome Tokens

Decorative macOS window dots; not part of the brand palette.

| Token | Value |
|---|---|
| `--win-dot-red` | `#FF5F57` |
| `--win-dot-amber` | `#FEBC2E` |
| `--win-dot-green` | `#28C840` |

---

## Typography

Source file: `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/web/src/brands/quaeris/fonts.ts`

### Font Families

| CSS Variable | Font Family | Provider | Subsets | `font-display` |
|---|---|---|---|---|
| `--font-roboto` | Roboto | `next/font/google` | `latin` | `swap` |
| `--font-inter` | Inter | `next/font/google` | `latin` | `swap` |

### Weights Loaded

| Font | Weights Explicitly Loaded |
|---|---|
| Roboto | `400`, `500`, `700` |
| Inter | *(not specified — Next.js `Inter` defaults to variable font, all weights)* |

### Usage

| Variable | Mapped to | Used for |
|---|---|---|
| `--font-roboto` | `--font-display` → `--font-hero` | H1 hero heading and all display/heading text (PDF spec: Roboto Regular 48 px for H1) |
| `--font-inter` | `--font-body` | Body copy, UI text, system fallback stack |

The combined class string (`fontClasses = roboto.variable + " " + inter.variable`) is applied to the `<html>` element so that `:root` token declarations resolve correctly. The `--weight-display` token (`400`) matches the PDF guideline that headings use Roboto Regular (not Bold).


---

# 3. Reusable CSS Classes

## Reusable CSS Classes — Quaeris Website Knowledge Hub

**Source file:** `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/web/src/app/globals.css`

---

### Layout

| Class | Purpose |
|---|---|
| `.container` | Max-width 1200 px, centered, `0 var(--space-5)` horizontal padding (shrinks to `var(--space-4)` on ≤640 px). Wrap every section's inner content with this. |
| `.section-pad` | Adds `padding: var(--section-pad-y) 0` — fluid `clamp(72px, 10vw, 128px)` top/bottom. Use on every `<section>`. |

---

### Headlines / Type Scale

| Class | Purpose |
|---|---|
| `.display-xl` | Hero h1 size. `clamp(40px, 5vw, 64px)`, display font, weight `var(--weight-display)`, `line-height 1.08`. |
| `.display-lg` | Section h2 size. `clamp(32px, 4vw, 48px)`, display font, `line-height 1.15`. |
| `.display-md` | Card headline / sub-section h3. `clamp(22px, 2.5vw, 28px)`, display font, `line-height 1.2`. |
| `.heading-sm` | Utility sub-heading. `clamp(18px, 1.5vw, 20px)`, body font, `font-weight 600`. |
| `.body-lg` | Lead paragraph copy. `18px`, `line-height 1.6`. |
| `.body-md` | Default body copy. `16px`, `line-height 1.65` (matches `<body>` default). |
| `.body-sm` | Fine print / captions. `14px`, `line-height 1.5`. |
| `.eyebrow` | Label above headings. `12px`, `font-weight 600`, `letter-spacing 2.5px`, `text-transform: uppercase`. Color must be set in context (see Section Headers below). |
| `.stat-num` | Large metric number. `clamp(36px, 4vw, 56px)`, `font-weight 700`, tabular-nums, `line-height 1.0`. |

---

### Two-Tone Headline Pattern (`.accent-line`)

```html
<h1 class="hero-h1">
  Agentic AI for
  <span class="accent-line">Analytics Teams</span>
</h1>
```

| Class | Purpose |
|---|---|
| `.accent-line` | Colors the wrapped span `var(--brand-accent)`. When used inside `.hero-h1`, also forces `display: block` to break onto its own line, creating the canonical two-tone headline. |
| `.hero-h1` | Hero-specific h1 using brand-configurable `var(--font-hero)` / `var(--weight-hero)` / `var(--size-hero)` tokens; `letter-spacing -0.035em`; falls back to `2.25rem` on ≤640 px. |

**Gotcha:** `.accent-line` alone only sets `color`. The `display: block` line-break only fires when `.accent-line` is a *direct child* of `.hero-h1` (rule: `.hero-h1 .accent-line { display: block; }`). Nested deeper, it stays inline. For section headings you control the break manually with a `<br>` or by placing `.accent-line` on its own element.

---

### Buttons

All buttons require **both** the base class and a variant class: `class="btn btn-primary"`.

| Class | Purpose |
|---|---|
| `.btn` | Base button. `inline-flex`, `align-items center`, `gap var(--space-2)`, `border-radius var(--radius-cta)`, `min-height 44px`, `font-weight 500`. Never use alone. |
| `.btn-primary` | Filled CTA. Background `var(--cta-bg)` (brand gradient), white text, `padding 12px 28px`, `box-shadow var(--shadow-cta)`. `translateY(-1px)` on hover. |
| `.btn-secondary` | Outlined button for light backgrounds. Transparent bg, `border: 1px solid var(--border-strong)`, text `var(--text-primary)`. |
| `.btn-ghost` | Text-only link-style button. Brand accent color, no border/bg, appends ` →` via `::after`, arrow animates right on hover. Padding `8px 0`. |
| `.btn-on-dark` | Solid white-surface button for dark/ink sections. Background `var(--bg-surface)`, text `var(--text-primary)`. |
| `.btn-secondary-dark` | Outlined button for dark/ink sections. Transparent bg, `border: 1px solid var(--border-on-dark)`, white text. |
| `.btn-stack` | Responsive wrapper (≤640 px only): `display: flex; flex-direction: column; width: 100%`. All `.btn` children go `width: 100%; justify-content: center`. Use on the wrapping `<div>` when stacking two CTAs on mobile. |
| `.hero-cta` | Standalone hero primary CTA (alternative to `.btn.btn-primary`). Uses `var(--cta-bg-hero)` token, `box-shadow` with `var(--brand-accent-glow)`, animated arrow child `.arrow`. |

**Gotcha:** `.btn-primary` background uses `var(--cta-bg)` which is often a CSS gradient. Gradients cannot be transitioned, so the hover state swaps discretely to `var(--cta-bg-hover)` — this is intentional and noted in a CSS comment.

---

### Badges / Chips

| Class | Purpose |
|---|---|
| `.badge` | Base badge. `inline-flex`, `border-radius var(--radius-pill)`, `12px`, `font-weight 600`, `padding 4px 10px`, transparent bg, `border: 1px solid var(--border-strong)`. |
| `.badge-default` | Neutral badge variant — muted border + tertiary text color. |
| `.badge-accent` | Branded badge — accent-colored border, accent text, `background var(--brand-accent-soft)`. |
| `.industry-chip` | Case-study card chip (pill badge for vertical/industry label). `background var(--brand-accent-soft)`, accent text, `padding 4px 12px`. |
| `.trust-badges` | Flex wrapper for a row of badges (gap `var(--space-2)`, wraps). |

---

### Section Headers

| Class | Purpose |
|---|---|
| `.section-header` | Left-aligned heading block, `max-width 640px`. Children: `.eyebrow` (tertiary color), `h2`, `.subcopy` (secondary color, `max-width 68ch`). |
| `.section-header.center` | Same but centered, `max-width 720px`, `margin: auto`. |
| `.section-header-dark` | Color overrides for dark/ink backgrounds: eyebrow → `var(--brand-accent)`, h2 → `var(--text-on-dark)`, subcopy → `var(--text-on-dark-dim)`. Combine with `.section-header`. |

**Pattern:** always pair `.eyebrow` + `h2` + `.subcopy` inside `.section-header`. The `.eyebrow` rule inside `.section-header` sets `display: block` and `margin-bottom var(--space-3)` automatically.

---

### Hero Classes

| Class | Purpose |
|---|---|
| `#hero` | Section root. `background var(--bg-surface)`, `position relative`, `overflow hidden`. Padding is set by the inner wrapper in the component, not on `#hero` itself. |
| `.hero-glow` | Decorative radial gradient orb (absolute, top-right). Brand-accent radial gradient, `opacity 0.12`. |
| `.hero-inner` | Content wrapper, `max-width 760px`, `position relative; z-index 1`. |
| `.hero-buttons` | CTA button row. `display flex; gap var(--space-4); flex-wrap wrap`. Stacks to column at ≤640 px. |
| `.hero-bg-paths` | Animated SVG path background (absolute, `inset 0`), `opacity 0.45`. SVG strokes inherit `color: var(--brand-accent)`. |
| `.hero-scrim` | White gradient overlay (absolute) protecting text legibility over the animated paths. Fades from `var(--bg-surface)` on the left to transparent at ~62 %. |
| `.hero-purple-wash` | Subtle dual radial-gradient brand tint layer (absolute, pointer-events none). |
| `.trust-strip` | Row of partner/client logos below hero CTAs. `display flex; align-items center; gap var(--space-5); flex-wrap wrap`. |
| `.trust-logo` | Individual greyscale logo pill. `background var(--border-strong)`, `filter grayscale(1)`, `opacity 0.6`. |

---

### Accessibility

| Class | Purpose |
|---|---|
| `.sr-only` | Visually hidden but accessible to screen readers. Standard clip-rect technique: `position absolute; width 1px; height 1px; overflow hidden; clip rect(0,0,0,0); white-space nowrap`. |
| `.skip-link` | "Skip to content" link. Positioned off-screen (`top: -100px`), flies into view (`top: var(--space-5)`) on `:focus`. Brand-accent background, `z-index 9999`, `font-weight 600`. |

---

### Scroll Reveal Pattern

| Class | Purpose |
|---|---|
| `.reveal` | Entry animation base. `opacity 0; transform translateY(16px); transition opacity+transform var(--dur-slow) var(--ease-out)`. Apply to any element that should animate in on scroll. |
| `.reveal.visible` | Triggered state (add via IntersectionObserver in JS). `opacity 1; transform none`. |

**Gotcha:** `@media (prefers-reduced-motion: reduce)` sets `.reveal { opacity: 1; transform: none; transition: none; }` and collapses all animation durations globally. Never rely on `.reveal` toggling for layout — content must be accessible before JS fires.

---

### Cards (secondary reusable classes)

| Class | Purpose |
|---|---|
| `.card` | Generic surface card. `background var(--bg-surface)`, `border-radius var(--radius-lg)`, `border 1px solid var(--border-subtle)`, `box-shadow var(--shadow-card)`, `padding var(--space-6)`. `translateY(-2px)` lift on hover. |
| `.card-dark` | Dark variant of `.card`. Background `var(--bg-ink-elevated)`, `border var(--border-on-dark)`. |

---

### Key Token References

These tokens are referenced throughout the classes above and are defined per-brand in `src/brands/<brand>/tokens.css` (swapped at `src/brand-active/tokens.css`):

- `--cta-bg` / `--cta-bg-hover` / `--cta-bg-hero` — button gradient
- `--brand-accent` / `--brand-accent-soft` / `--brand-accent-glow` / `--brand-accent-deep` — color ramp
- `--font-display` / `--font-body` / `--font-hero` — typefaces
- `--weight-display` / `--weight-hero` — font weights
- `--size-hero` — hero h1 size
- `--radius-cta` — button corner radius
- `--text-on-dark` / `--text-on-dark-dim` — dark-section text
- `--border-on-dark` — dark-section border color
- `--bg-ink` / `--bg-ink-elevated` — dark section backgrounds
- `--section-pad-y` — `clamp(72px, 10vw, 128px)`, the canonical vertical section rhythm


---

# 4. Mockup-First Pipeline & QA Gates

**Sources:** `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/web/AGENTS.md`, `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/mockup/sections/README.md`, `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/mockup/sections/_template.html`, `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/mockup/sections/2026-06-13-solutions-finance-v3.html`.

---

## Mandatory Rule: Mockup First

From `web/AGENTS.md`:

> **Never build new UI directly in Next.js.** Every new section/element/page goes mockup-first: standalone HTML in `../mockup/sections/` (copy `_template.html`), reviewed and approved by the human in a browser, THEN ported.

No section, element, or page ships to the Next.js app until its standalone HTML mockup has been reviewed and approved. The approved mockup is kept permanently as the design record — never deleted.

---

## File-Naming Convention

```
YYYY-MM-DD-<slug>.html
```

Sections live in `mockup/sections/`; full pages live in `mockup/pages/`. Examples already in the repo: `2026-06-13-solutions-finance-v3.html`, `2026-06-14-platform.html`.

**To create a new section:**
```bash
cp mockup/sections/_template.html mockup/sections/$(date +%F)-<section-name>.html
```

---

## Required `<head>` (from `_template.html` and `2026-06-13-solutions-finance-v3.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>MOCKUP — [section name]</title>

<!-- Fonts: mirror what next/font loads in the app (Roboto for Quaeris display, Inter body) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

<!-- REAL design system — same files the Next.js app uses. No copies, no drift.
     Swap the brand by pointing tokens at ../../web/src/brands/veris/tokens.css -->
<link rel="stylesheet" href="../../web/src/brands/quaeris/tokens.css" />
<link rel="stylesheet" href="../../web/src/app/globals.css" />

<style>
  /* Mockup-only shims — everything here is replaced by the framework at port time. */

  /* next/font variables (the app injects these via fontClasses on <html>) */
  :root {
    --font-roboto: "Roboto";
    --font-fraunces: "Fraunces";
    --font-inter: "Inter";
  }

  /* Scroll-reveal elements render visible in static mockups (Reveal.tsx handles this in-app) */
  .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }

  /* The browser ignores globals.css's Tailwind at-rules (@import "tailwindcss", @theme) —
     that's expected; all design-system classes below them are plain CSS and apply fully. */
</style>
</head>
```

**Notes on the two real stylesheet links:**
- `../../web/src/brands/quaeris/tokens.css` — the Quaeris brand token file (swap to `../../web/src/brands/veris/tokens.css` for Veris work, and load Fraunces instead of Roboto in the fonts link).
- `../../web/src/app/globals.css` — the shared Next.js globals. The browser silently ignores the Tailwind at-rules (`@import "tailwindcss"`, `@theme`) at the top of this file; all design-system classes below them apply fully.

**`:root` font shim:** The three CSS custom properties (`--font-roboto`, `--font-fraunces`, `--font-inter`) replicate what `next/font` injects via `fontClasses` on the `<html>` element at runtime. They are mockup-only — remove at port time.

**`.reveal { opacity: 1 }` shim:** Force-makes scroll-reveal elements visible so the mockup is legible without a running `Reveal.tsx`. In the `_template.html` this is written with `!important`; in `2026-06-13-solutions-finance-v3.html` the v3 assembly removed `!important` from the global shim and instead has scripted sections (`hero`, `caps`, `why`) manage their own opacity, while bare `.reveal` sections are static and get `.reveal { opacity: 1; transform: none; }` without `!important`.

**`<noscript>` fallback:** The `_template.html` does not include an explicit `<noscript>` block. However, all interactive/animated sections in `2026-06-13-solutions-finance-v3.html` are built so that the correct static final state renders without JS (no-JS or CDN failure → static populated card stays visible). The production-readiness audit (`docs/2026-06-15-production-readiness-audit.md`) flags missing `<noscript>` fallbacks as a high-priority issue; the fix is `<noscript>` reveal blocks or native `<details>`/`<summary>` for tab/stepper/accordion widgets.

---

## Build Rules (from `mockup/sections/README.md`, `web/AGENTS.md`, `_template.html`)

1. **Existing classes first.** Use `.section-pad`, `.container`, `.section-header`, `.card`, `.btn`, `.eyebrow`, `.display-*`, `.heading-sm`, `.body-*`, etc. Invent new CSS only when no existing pattern fits.

2. **Label new CSS for porting.** New rules go in a `<style>` block marked `/* PORT: new classes */`. At port time, this block moves verbatim to `web/src/app/globals.css` (token-driven, brand-agnostic).

3. **All-UI: no `<img>` tags, no external images.** Build every visual with HTML + CSS + inline SVG. Icons must be Lucide-style SVG, `aria-hidden` on decorative ones. This rule appears in `_template.html` comments and in the buildsheet: e.g., the Finance Intelligence Brief card is described as "all-UI, no image."

4. **Correct and legible WITHOUT JS.** Every section must render in a readable final state with JS disabled. Animated sections achieve this by rendering the static populated state in markup and overlaying animation on top.

5. **JS gated, self-contained IIFE, `prefers-reduced-motion`-safe.**
   - Interactive sections check for a class flag before running (e.g., `caps.classList.add('js')`, `.wq.js` flag).
   - Each script block is a self-contained IIFE: `(function () { … })();` or an async arrow IIFE for module scripts.
   - Every animation path checks `matchMedia('(prefers-reduced-motion: reduce)').matches` and either skips animation entirely or snaps to the final state.
   - CDN failures must be handled: if a CDN import throws, all animated elements must be forced visible (example from v3 hero: `el.style.opacity = '1'; el.style.transform = 'none';`).

6. **`data-placeholder` as attribute only, never rendered as visible text.** Placeholder data is marked with the HTML attribute `data-placeholder` (e.g., `<div class="stat-block" data-placeholder>`). The attribute must not render as visible text. The QA fix-list (`mockup/pages/_qa-fixlist.json`) flags multiple pages as broken precisely because `data-placeholder` strings were rendered as literal visible text with no CSS hide rule.

7. **NEVER hardcode brand hex — use `var(--*)` tokens.** Every color, radius, and font name must reference a CSS custom property from `tokens.css`. Hardcoding hex values or font names in shared CSS is a violation of the white-label architecture and will fail the QA gate.

8. **Never use the word "Veris" in a Quaeris mockup.** Quaeris mockups must contain zero occurrences of "Veris". The authoritative check is `grep -c "Veris" <file>` → `0`. (`2026-06-13-solutions-finance-v3.html` passes: zero hits.)

---

## QA Gates Every Mockup Must Pass

These are derived from `mockup/sections/README.md`, `web/AGENTS.md`, and evidence from `mockup/pages/_qa-fixlist.json`:

| Gate | Check command / method |
|------|----------------------|
| **0 occurrences of "Veris"** | `grep -c "Veris" <file>` → `0` |
| **0 hardcoded brand hex values** | No literal `#RRGGBB` / `#RGB` color values outside `tokens.css`. All colors via `var(--*)`. |
| **0 visible placeholder text** | `data-placeholder` is used only as an HTML attribute; no bracket tokens (`[Company Name]`, `[data-placeholder: ...]`, `placeholder date`, `[user-title-placeholder]`) render as visible text. |
| **Exactly one `</html>`** | `grep -c "</html>" <file>` → `1` |
| **Legible without JS** | Open the file with JS disabled; all content must be visible and readable. |
| **Responsive at 390px** | Check in browser responsive mode at 390px; no horizontal overflow, no clipped content. |
| **Tag balance** | `grep -c '<section' <file>` equals `grep -c '</section>' <file>` (and similarly for other block elements after large edits). |

The `mockup/pages/_qa-fixlist.json` documents recurring real failures: literal `[data-placeholder]` strings rendering as visible text on `platform-semantic-layer`, `platform-audit`, `solutions-executives`, `customers`, `solutions-data-teams`, `blog`; and a `.reveal{opacity:1;transform:none}` inline shim silently killing all IntersectionObserver entrance animations on `platform`.

---

## The 32k Single-Write Output Cap

Large mockup files exceed the Claude Code `Write` tool's single-call output limit (approximately 32,000 characters). `2026-06-13-solutions-finance-v3.html` is 124,935 bytes / 1,647 lines. **Write large files incrementally:** build in logical chunks (e.g., CSS block, then body section by section, then scripts), appending or using `Edit` for subsequent sections, rather than attempting a single `Write` of the full file. This constraint is a Claude Code tool limitation, not documented in the repo's markdown files.

---

## The 5-Step Pipeline (from `mockup/sections/README.md`)

1. **Spec** — check `docs/page-specs/` for an existing spec; if absent, write 3–5 lines covering purpose, audience, sections, and copy source.
2. **Mock** — `cp mockup/sections/_template.html mockup/sections/$(date +%F)-<slug>.html`; build following all build rules above.
3. **Review** — `open mockup/sections/<file>.html` (works as `file://` — CSS paths are relative); self-check spacing, type scale, contrast, mobile at 390px; then show the human. Do not start the port before approval.
4. **Port (on approval only)** — in order: (a) content → both brand configs (`web/src/brands/quaeris/config.ts` and `web/src/brands/veris/config.ts`) with shared types in `web/src/config/types.ts`; (b) new CSS → `web/src/app/globals.css` (token-driven); (c) markup → component in `web/src/components/`, reading from `@/config/brand.config` with zero hardcoded content.
5. **Verify & commit** — `cd web && npx tsc --noEmit && npm run build:quaeris`; visual-compare on `:3101` against the mockup; commit the mockup file together with the component port.


---

# 5. Architecture & How to Add a Page

## Architecture & How to Add a Page

### Overview

Approved standalone HTML mockups (stored under `mockup/pages/` and `mockup/sections/` in the repo root) become live Next.js routes through a small pipeline in `web/src/lib/mockup.ts`. The app wraps each mockup in the shared `SiteHeader`/`SiteFooter` and injects the mockup's scoped CSS plus interactive scripts as-is.

---

### Key Files

| Purpose | Path |
|---|---|
| Mockup helpers (routes, splitting, SEO, stubs) | `web/src/lib/mockup.ts` |
| Catch-all route (page component + metadata) | `web/src/app/[...slug]/page.tsx` |
| Client-side mockup renderer | `web/src/components/MockupView.tsx` |
| "Coming soon" stub renderer | `web/src/components/StubPage.tsx` |
| 404 page | `web/src/app/not-found.tsx` |
| Next.js config (redirects) | `web/next.config.ts` |
| Brand selector script | `web/scripts/select-brand.mjs` |
| Generated brand re-exports (do not edit) | `web/src/brand-active/` |
| npm package / scripts | `web/package.json` |
| Launch configs (Claude Code) | `QAIwebsite/.claude/launch.json` (project-level) and `web/.claude/launch.json` (inner) |

---

### How Approved Mockups Become Live Routes

#### 1. `MOCKUP_ROUTES` — the canonical route list

`web/src/lib/mockup.ts` exports `MOCKUP_ROUTES: string[]`, which is the single source of truth for every route that has an approved mockup. Examples:

```
"platform", "platform/agents", "solutions/finance", "blog/sample-post", …
```

Any route in this array is pre-rendered at build time (`generateStaticParams` reads it) and will be matched by the `[...slug]` catch-all.

#### 2. `fileForRoute` — route → HTML file mapping

`fileForRoute(route: string): string | null` maps each route to a path relative to the repo root. The default pattern is:

```
mockup/pages/2026-06-14-{slug-with-dashes}.html
```

Several routes have explicit overrides that depart from this pattern:

| Route | Resolved file |
|---|---|
| `home-redesign` | `mockup/pages/2026-06-16-homepage-redesign.html` |
| `home-redesign-v2` | `mockup/pages/2026-06-16-homepage-redesign-v2.html` |
| `solutions-variations` | `mockup/pages/2026-06-16-solutions-variations.html` |
| `solutions/finance` | `mockup/sections/2026-06-13-solutions-finance-v3.html` |
| `blog/sample-post` | `mockup/pages/2026-06-14-blog-article.html` |
| All others | `mockup/pages/2026-06-14-{route-slashes-replaced-with-dashes}.html` |

`readMockup(route)` calls `fileForRoute` then reads the file from disk using `path.resolve(process.cwd(), "..")` as the repo root (one level above `web/`).

#### 3. `splitMockup` — decompose the standalone HTML

`splitMockup(raw: string): SplitMockup` splits the raw HTML document into three pieces that can be mounted safely inside the Next.js app:

- **`css`** — inner text of all `<style>` blocks, with `--font-roboto`, `--font-fraunces`, and `--font-inter` variable declarations stripped (so the app's `next/font` variables win).
- **`html`** — `<body>` inner markup with `<style>` and `<script>` tags removed.
- **`scripts`** — array of each `<script>` block's source, to be run client-side after mount.

#### 4. `MockupView` — the client component

`web/src/components/MockupView.tsx` is marked `"use client"`. It receives the `SplitMockup` object and:

1. Renders `<style dangerouslySetInnerHTML={{ __html: css }} />` for scoped styles.
2. Renders `<div dangerouslySetInnerHTML={{ __html: html }} />` — ships in the server-rendered HTML for SEO.
3. In a `useEffect`, executes each script string via `new Function(code)()` inside a `requestAnimationFrame` so scripts run after layout is committed. The parent page passes a unique `key={route}` prop to force a full remount on navigation, re-running all scripts against fresh markup.

#### 5. The `[...slug]` catch-all page

`web/src/app/[...slug]/page.tsx` is a Next.js async server component. Its logic:

1. Join `slug` segments into a `route` string.
2. Call `readMockup(route)`. If non-null: run `splitMockup`, render `<SiteHeader /> <MockupView key={route} {...parts} /> <SiteFooter />`.
3. Otherwise call `stubFor(route)`. If the route is a known stub: render `<StubPage category={stub} title={humanizeSlug(route)} />` (HTTP 200, no 404).
4. Otherwise call `notFound()` — falls through to `not-found.tsx`.

`generateStaticParams` pre-renders all `MOCKUP_ROUTES` plus all `Object.keys(STUB_ROUTES)` at build time.

---

### Per-Route SEO via `ROUTE_META`

`ROUTE_META: Record<string, RouteMeta>` in `web/src/lib/mockup.ts` holds per-route SEO overrides, keyed by the canonical route string. Each entry has:

- `title` — page title in Title Case, no brand suffix (the route's `generateMetadata` appends ` — Quaeris`).
- `description` — ~150-char meta description.
- `ogDescription` — punchier Open Graph / Twitter card description.

All 26 mockup routes currently have entries. Routes absent from `ROUTE_META` fall back to `prettyTitle(route)` (derived from the last slug segment, title-cased) for the title, and `brand.meta.description` / `brand.meta.ogDescription` for the descriptions.

Stub routes get `robots: { index: false, follow: true }` so they are not indexed.

---

### "Coming Soon" Stub Routes

`STUB_ROUTES: Record<string, StubCategory>` maps routes that are linked from the site but not yet written. They render a branded placeholder (HTTP 200) via `StubPage` instead of a 404, keeping all CTAs alive.

Each `StubCategory` carries:
- `label` — short kind label (e.g., `"Customer story"`, `"Webinar"`).
- `blurb` — one-line explanation shown on the stub.
- `backHref` / `backLabel` — the "browse all" link.

Defined categories and their routes:

| Category | Example routes |
|---|---|
| `blog` | `blog/semantic-layer-cfo-guide`, `blog/governed-analytics-blueprint`, … (5 routes) |
| `caseStudy` | `case-studies/finance-metric-unification`, `case-studies/e4e-metric-unification`, … (6 routes) |
| `compare` | `compare`, `compare/quaeris-vs-cube`, `compare/quaerisai-vs-looker`, … (6 routes) |
| `webinar` | `webinars/watch/agentic-architecture`, `webinars/register/finance-governed`, … (13 routes) |
| `resource` | `resources/sox-ai-analytics-checklist`, `resources/white-papers/smart-semantic-layers`, … (14 routes) |
| `careers` | `careers` |

---

### `next.config.ts` Redirects

`web/next.config.ts` defines a `REDIRECTS` array of `{ source, destination }` pairs returned from `async redirects()`. All are **temporary (307)** — `permanent: false`. They redirect paths that are linked across the site but map cleanly to an existing page, rather than receiving a stub. Selected examples:

| Source | Destination |
|---|---|
| `/use-cases`, `/use-cases/:path*` | `/solutions` |
| `/industries/finance-governed-analytics` | `/solutions/finance` |
| `/learn`, `/learn/:path*`, `/conversational-queries` | `/platform/agents` |
| `/login`, `/signup`, `/app`, `/dashboard`, `/support` | `/contact` |
| `/security` | `/trust` |
| `/search` | `/` |

---

### Branded `not-found.tsx`

`web/src/app/not-found.tsx` is a static branded 404. It renders:

- Title: `"Page not found — Quaeris"` (hardcoded; `robots: { index: false, follow: true }`).
- Headline: `"This page took an unaudited path."` (on-brand copy).
- A six-card navigation grid with hardcoded popular destinations: `/platform`, `/solutions`, `/pricing`, `/customers`, `/docs`, `/contact`.
- Wrapped in `SiteHeader` / `SiteFooter`.

Note: the brand name is hardcoded as `"Quaeris"` in this file, unlike other routes that pull `brand.name` from `brand.config.ts`.

---

### Build-Time Brand Selection

The project supports two brands: `veris` and `quaeris`. Brand selection runs before every dev/build/typecheck via `web/scripts/select-brand.mjs`, which reads `process.env.BRAND` (defaults to `"veris"`) and writes three generated files into `web/src/brand-active/`:

- `config.ts` — re-exports from `src/brands/{brand}/config`
- `fonts.ts` — re-exports from `src/brands/{brand}/fonts`
- `tokens.css` — `@import` of `src/brands/{brand}/tokens.css`

These generated files must not be edited by hand. App code imports from `@/config/brand.config` (which resolves through `brand-active/config.ts`).

---

### Running It

#### npm Scripts (`web/package.json`)

| Script | Command | Port | Notes |
|---|---|---|---|
| `dev:quaeris` | `BRAND=quaeris node scripts/select-brand.mjs && next dev -p 3101` | **3101** | Quaeris brand, hot-reload |
| `dev:veris` | `BRAND=veris node scripts/select-brand.mjs && next dev -p 3100` | 3100 | Veris brand, hot-reload |
| `dev` | `node scripts/select-brand.mjs && next dev -p 3100` | 3100 | Defaults to `veris` |
| `build:quaeris` | `BRAND=quaeris node scripts/select-brand.mjs && next build` | — | Production build |
| `build:veris` | `BRAND=veris node scripts/select-brand.mjs && next build` | — | Production build |
| `start` | `next start` | (from build) | Serve a previous build |
| `typecheck` | `node scripts/select-brand.mjs && tsc --noEmit` | — | Type-checks with brand set |

All scripts are run from the `web/` directory: `npm run dev:quaeris --prefix /path/to/website-ui-spec/web`.

#### Static Mockup Server

`QAIwebsite/.claude/launch.json` defines a `mockup-static` configuration:

```
npx --yes serve -l 3200 /Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec
```

This serves the entire `website-ui-spec` repo root (including `mockup/pages/` and `mockup/sections/`) at **port 3200**, so individual mockup HTML files can be previewed in isolation at e.g. `http://localhost:3200/mockup/pages/2026-06-14-platform.html`.

---

### Step-by-Step: Adding a New Page

**Scenario:** you have a new approved mockup and want it live as `/solutions/new-segment`.

**Step 1 — Build and place the mockup file**

Save the approved standalone HTML file into the repo. Following the convention used by all current non-special-case routes, name it:

```
mockup/pages/2026-06-14-solutions-new-segment.html
```

(The date prefix is the convention; use the actual approval date. Sections-only mockups go in `mockup/sections/` instead.)

**Step 2 — Register the route in `MOCKUP_ROUTES`**

In `web/src/lib/mockup.ts`, add the route string to the `MOCKUP_ROUTES` array:

```ts
export const MOCKUP_ROUTES: string[] = [
  // … existing entries …
  "solutions/new-segment",   // add this
];
```

**Step 3 — Add a `fileForRoute` mapping (only if the filename breaks the default pattern)**

If the filename follows the default pattern `mockup/pages/2026-06-14-{route-dashes}.html`, no change is needed — the fallback branch at the end of `fileForRoute` handles it automatically:

```ts
return `mockup/pages/2026-06-14-${route.split("/").join("-")}.html`;
// → "mockup/pages/2026-06-14-solutions-new-segment.html" ✓
```

If the file has a different date, name, or lives in `mockup/sections/`, add an explicit `if` branch before the fallback:

```ts
if (route === "solutions/new-segment")
  return "mockup/pages/2026-06-16-solutions-new-segment.html";
```

**Step 4 — Add `ROUTE_META` for SEO**

In `web/src/lib/mockup.ts`, add an entry to `ROUTE_META`:

```ts
"solutions/new-segment": {
  title: "New Segment Analytics",
  description: "~150-char description drawn from the page's actual content.",
  ogDescription: "Punchier social-share line.",
},
```

Without this entry the route still works, but it falls back to a generic title derived from the slug and the brand-level default descriptions.

**Step 5 — Verify**

Run the dev server and navigate to `http://localhost:3101/solutions/new-segment`:

```bash
npm run dev:quaeris --prefix "/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/web"
```

The route is rendered by `web/src/app/[...slug]/page.tsx` via the `[...slug]` catch-all. No additional routing config is needed — `generateStaticParams` picks up the new entry in `MOCKUP_ROUTES` automatically.


---

# 6. Positioning, Strategy, Component Kit & Threaded Dataset

## Positioning & Strategy

**Source:** `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/docs/2026-06-16-homepage-strategy.md`

### The Wedge

The explicit one-sentence bet is: every competitor is selling speed, self-serve, or "ask anything." Quaeris sells the one thing that lets a regulated enterprise actually ship agentic analytics — **a number you can defend**. The category has converged on the same hook ("agentic analytics," "ask your data anything"), and that convergence is the opening. Finance, healthcare, and insurance data leaders do not have a speed problem; they have a **liability** problem. Speed is table stakes; **defensibility is the unlock.** The homepage's job is therefore not "look how fast" but "look how every single number traces back to a certified definition, who could see it, and where it came from." Governance is made visible and beautiful — not a security badge buried at the bottom.

The tagline-level sharp hook, derived by direct contrast with WisdomAI's "Accuracy is the hard part," is:

> **"Confidence is easy. Proof is hard."**

The hero sub-headline operationalises it: *"Other AI tools answer fast. We answer in a way you can defend."*

### Competitive Differentiation

**vs ThoughtSpot (the enterprise-serious incumbent):**
- BORROW: Named-agent family as organising device (reframed around governance roles, not rendering modes); analyst-authority-high-on-page instinct; persona-lane navigation.
- AVOID: Product-light, concept-heavy hero (15-second-rule failure); generic enterprise-dark identity indistinguishable from Snowflake/Databricks/Palantir; decorative, metrics-light logo walls.

**vs WisdomAI (closest philosophical competitor — "accuracy is the hard part"):**
- BORROW: The teaching-framework device (reframe the problem before selling the solution); naming branded IP as a recurring anchor; the contrarian hook; "meets your data where it lives" displacement line.
- AVOID: Zero product visuals (their single biggest failure); single demo-only CTA with no mid-funnel path; anonymous hollow social proof; closing CTA that is a copy of the hero with no arc.

**vs Lumi AI (the ROI/outcome-first operator):**
- BORROW: A real working conversational demo (show, don't tell) — ours becomes ask → governed answer with citation; animated stat counters on honestly substantiable figures; three-tier CTA discipline (we do TWO, not three); direct competitive contrast line.
- AVOID: Two competing hero headlines; narrow vertical framing that alienates other buyers; auto-rotating testimonial carousel; sitemap-dump footer; fabricated-feeling ROI specificity.

**vs Hex (the design/PLG benchmark):**
- BORROW: The single-dataset narrative thread (one fictional company runs through every section — we adopt this hard, using a believable finance scenario); agent observability as a visible product section; role-specific testimonial format; light-mode premium aesthetic.
- AVOID: Trust message that stays abstract (Hex says "trust" but never explains the mechanism for a non-technical exec — they show a cold YAML view; we explain the mechanism in plain language AND show it beautifully); forgettable fictional data; notebook-first framing that reads "for data teams" despite "anyone" messaging; hidden pricing/PLG evasiveness.

### The Named Framework — "The Four Things a Number Needs to Be Trusted"

Directly derived from WisdomAI's "four types of context" teaching device, but mapped 1:1 to features Quaeris actually ships. The four pillars are:

1. **Definition** — every metric has one canonical SQL logic, certified by an owner, version-locked
2. **Permission** — role-based access enforced at query time (row- and field-level); no governance workarounds
3. **Lineage** — question traces to source table automatically; auditors get the lineage on demand
4. **Audit** — every query, every answer, every access is logged with a tamper-evident, immutable entry

The engine that enforces all four is the **Trust Engine** — the company's named, branded IP for the governed semantic layer (analogous to WisdomAI's "Adaptive Context Engine"). Usage: "Meet the Trust Engine — our governed semantic layer. Every metric is certified once, owned by a person, and reused everywhere. The AI can't invent a number, because it can only answer with definitions you've approved."

The four framework pills (Definition / Permission / Lineage / Audit) are interactive: hovering any pill in the semantic-lineage section highlights the corresponding part of the graph.

### Page-Narrative Principle

The page is a single argument that escalates through nine beats, answering the regulated buyer's questions in the order they actually ask them:

| Beat | Section id | Question answered |
|---|---|---|
| 1 | `hero` | Can I trust it? (provocation → live proof) |
| 2 | `trust-bar` | Why should I believe you? (stakes + honest compliance posture) |
| 3 | `how-it-works` | How does it actually work? (mechanism) |
| 4 | `differentiator-semantic` | What is the magic? (Trust Engine / governed semantic layer) |
| 5 | `capabilities-tabs` | What can it do? (one governed engine, every surface) |
| 6 | `warehouse-native-security` | Is my data safe and where does it live? |
| 7 | `solutions-by-fit` | Is it for me? (finance / healthcare / insurance self-select) |
| 8 | `social-proof` | Who else trusts this? |
| 9 | `closing-cta` | How do I start? (dual path: see a governed answer / talk to us) |

Every competitor either buries the mechanism (WisdomAI names it but never shows it) or shows capability before earning trust (Lumi, ThoughtSpot). The narrative earns trust first, then spends it on capability.

Six properties make Quaeris unmistakably different: (1) governance is the show, not the footer; (2) a live ask→proof moment in the hero; (3) a named framework + named engine; (4) one finance dataset threaded through the page; (5) radical honesty as a trust signal (SOC 2 Type II *in progress*, HIPAA *on roadmap*, GDPR *supported* — stated plainly, not elided); (6) a distinctive visual identity — purple/lavender, Roboto + Inter, light-premium — the anti-enterprise-dark.

---

## Interactive Component Kit & Threaded Dataset

**Primary sources:**
- `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/mockup/pages/2026-06-16-homepage-redesign.html`
- `/Users/tirtharajbhowmik/Desktop/Ads Research/website-ui-spec/mockup/sections/2026-06-13-solutions-finance-v3.html`

### Reusable Interactive Components

| Component name | HTML id / class prefix | One-line description |
|---|---|---|
| **Animated Intelligence-Brief answer card** | `#hero` / `.fin-brief`, `.hero-card` | Types a plain-language question into a query bar, shows an "agents working" skeleton state with status steps (semantic-layer lookup → role check → in-place query), then assembles the answer with a number, a green "Certified metric" chip, a citation line, and a collapsible "Show the trace" lineage panel; includes follow-up suggestion buttons that re-trigger the animation. |
| **3-step how-it-works stepper** | `.how-it-works-section` / `.how-it-works-stepper` | A horizontal stepper that auto-advances on scroll (or click); as each step activates, the relevant part of the intelligence-brief card lights up (Ask → Govern → Prove) and connecting lines animate left-to-right in brand purple via animated connector fills. |
| **Animated stat counters (trust bar)** | `.trust-bar-section` / `.trust-bar-stat-card` | Four stat cards that count up on scroll-into-view using a `trust-bar-visible` class; display animated numeric values (e.g. metric definitions governed, queries audited) with staggered entrance delays of 0 / 70 / 140 / 210 ms; honest framing labels each figure. |
| **Governance guarantee chip marquee** | `.trust-bar-guarantee-pill` | A static horizontal row of pill-style chips (Certified · Role-gated · Audited · Warehouse-native) with check icons — not an auto-rotating carousel (explicitly called out as an antipattern to avoid). |
| **Semantic-lineage graph (Trust Engine visual)** | `#differentiator-semantic` / `.ds-graph-svg`, `.ds-node-group` | An SVG graph with `net_revenue` at the centre; lines fan out to upstream source tables in the warehouse (fct_revenue, dim_region, dim_date in FINANCE_DW on Snowflake) on the left and downstream consumers (APAC Revenue Board dashboard, CFO Brief agent, Q3 close dashboard) on the right; hovering any of the four framework pills (Definition / Permission / Lineage / Audit) dims unrelated nodes and highlights the corresponding part of the graph; clicking `net_revenue` triggers a flip-card animation revealing the definition card (canonical SQL logic, owner, version, certified date, source). |
| **Tabbed capability dashboard** | `#capabilities-tabs` / `.capabilities-tabs-tab`, `.cap-tabs` | A tab strip (on the homepage: Intelligence Brief / Dashboards / Agents / Data Sources; on the finance page: Governed Analytics / Variance Analysis / Forecasting / Unification) that swaps the central product mock with a fade + slide animation on activation; each tab's mock uses the same finance dataset so switching tabs feels like moving through one continuous workflow; stat counters and "certified" chips animate on tab activation; tabs auto-advance on a configurable `--dwell` interval (default 6500ms) with a filling progress underline that pauses on hover/focus. |
| **Warehouse zero-copy flow visual** | `#warehouse-native-security` / `.wns-section` | An SVG diagram showing the Quaeris agent layer sending queries to warehouse connectors (Snowflake, BigQuery, Databricks, Redshift, Synapse) and receiving answers back with no data copied out; animated query and answer path strokes; a toggle button switches between an "Allowed query" scenario and a "Denied query" scenario (Marketing user, no Finance scope, blocked at query time, logged #A-10294) to prove role-gating visibly. |
| **Audit-trail lifecycle timeline** | `#warehouse-native-security` / `.wns-audit-allowed`, `.wq-chain` | A vertical, time-stamped log of a single question's lifecycle — "User asked → role verified (Analyst, APAC scope) → matched certified metric net_revenue → queried Snowflake in-place (0 rows copied, 0 egress) → answer returned → immutable audit entry #A-10293 written"; each event node expands on click; a separate denied branch shows the same question blocked for a Marketing user (logged #A-10294). Also appears as a 2×2 "Why Quaeris" ledger card (`.wq-card` card 04) on the finance solutions page with SOX §302/§404 and EU AI Act Art. 13 tags. |
| **Governed vs. Black-box AI BI comparison table** | `#social-proof` / `.social-proof-section`, `.compare-card` | A table with rows = the five governance features from the framework (certified definitions, role-gated access, full audit trail, warehouse-native, zero hallucinations) and columns = Quaeris vs. Black-box AI BI; checkmarks animate in on scroll; also appears on the finance solutions page as `.compare-card` (QuaerisAI vs Open AI Tools, rows covering data locality, audit trail, RBAC, on-premise deployment, PCI/DSS readiness). |
| **Graphics-forward proof cards (social-proof artifacts)** | `#social-proof` / `.social-proof-artifact-*` | Design-forward cards that surface governance artifacts — a rendered audit entry chip, the certified answer value ($48.2M, +6.1% QoQ), a lineage path, and an access-log excerpt — as visual evidence rather than borrowed brand logos or self-asserted claims; static with subtle hover lift. |
| **Closing CTA re-trigger animation** | `#closing-cta` / `.closing-cta-section` | A condensed re-run of the hero intelligence-brief animation with the same question ("What was Q3 net revenue for the APAC region, and is it certified?"), progressing through four named steps (Intent parsed → Scope verified → Queried in place → Answer certified) and ending on the $48.2M certified + audited state; visually closes the loop the hero opened before presenting dual CTAs. |
| **Variance analysis bars with light sweep** | `.cap-visual` / `.cap-bars`, `.cap-bar-fill` | Animated horizontal bars showing variance drivers (e.g. OPEX total +8.8%, Commission +5.1% GL 6210, Cloud spend +2.3% GL 6480) that fill left-to-right with a shine sweep on activation; hover translates the row right and brightens the fill. |
| **Forecast chart with scan reveal and live pulse** | `.cap-visual` / `.cap-chart`, `.cap-chart-ping` | An SVG area+line chart with actuals and a dashed forecast continuation; the line draws itself left-to-right via stroke-dashoffset on panel activation, the area fades in under it, then a pinging ring pulses at the handoff point from actuals to forecast; an early-warning alert card pulses its icon when the forecast threshold is breached. |
| **Certified metrics registry (Why Quaeris card 01)** | `.wq-card` / `.wq-reg` | An expandable table of certified metrics (Revenue, COGS, SG&A, EBT, Tax prov., Headcount) with GL account roots, version numbers, and certified status dots; clicking any row expands an inline lineage disclosure (definition SQL, owner, certified date); a pulsing green dot on the "All certified" bar animates on entrance. |
| **Multi-dimensional variance toggle (Why Quaeris card 02)** | `.wq-card` / `.wq-dim-toolbar`, `.wq-dim-fill` | A pill-button toolbar (vs Budget / vs Forecast / Prior Year) that swaps the variance bar values live via `data-rows` attributes; bars animate their fill widths on switch; sourced from certified metric `opex_variance v2.1`. |
| **Instant budget question runner (Why Quaeris card 03)** | `.wq-card` / `.wq-run`, `.wq-ans` | A static question chip ("Which departments exceeded budget by >10%?") with a "Run question" button that reveals a ranked answer list (Marketing GL 6100 +14.0%, R&D GL 6300 +11.0%, Legal GL 6550 +10.2%) with staggered slide-in transitions; answer footer cites `budget_query v1.4 · 0.6s`. |

### The Threaded Illustrative Dataset Convention

**What it is:** A single, internally-consistent finance scenario that runs through every section of the homepage and the finance solutions sub-page. Every component — hero card, stepper, semantic-lineage graph, audit-trail timeline, capabilities tabs, warehouse-native flow, closing CTA re-trigger — shows the exact same question, answer, metric, source, audit IDs, asker, and access decisions.

**The canonical dataset:**

| Field | Value |
|---|---|
| Question asked | "What was Q3 net revenue for the APAC region, and is it certified?" |
| Asker | Priya — Analyst, APAC scope |
| Answer value | **$48.2M** |
| Delta | **+6.1% QoQ** |
| Certified metric | **net_revenue**, version v3, certified **2026-04-12** |
| Certifying owner | **FP&A** |
| Source table | **FINANCE_DW.fct_revenue** on **Snowflake** |
| Query method | Queried in place — **0 rows copied, 0 egress** |
| Granted audit entry | **#A-10293** — Priya (Analyst, APAC scope) — Access granted |
| Denied audit entry | **#A-10294** — Marketing user (no Finance scope) — Access denied at query time |

The denied scenario (#A-10294) is surfaced in the warehouse-native toggle, the how-it-works stepper, the semantic-lineage definition card, and the capabilities-tabs Intelligence Brief panel, all showing the same Marketing user blocked and logged with 0 data returned.

**Why one continuous dataset (the "single-dataset narrative thread"):**

This convention is explicitly adopted from Hex's "NexaCorp" technique (strategy doc §Borrow-vs-avoid, Hex). Hex's single fictional company running through every section makes the page feel like one continuous workflow rather than four disconnected features. Quaeris applies the same device but with two improvements: (a) the data is a **believable finance scenario** a CFO recognises (not forgettable galactic product names), and (b) the dataset is **itself governed** — it carries audit IDs, a certified metric version, an owner, a source table, and an access-denial event, so every component that displays it implicitly demonstrates the governance story rather than merely claiming it.

The practical effect: when a reader arrives at the capabilities-tabs section after reading the hero, they recognise "$48.2M · net_revenue · APAC · Priya" from two sections earlier. When they reach the audit-trail timeline, they see the same #A-10293 entry that appeared as a chip in the hero answer block. The page is one auditable story — the mechanism (governance) is the protagonist, and the same dataset is the through-line that makes that protagonist legible in every scene.


---

# 7. Information Needed From You

These are the facts only the team can confirm. Until filled, pages must use anonymized/illustrative content per §5. Replace each 🔲 with the real answer (and date it).

### Company
- 🔲 **Legal/company name & entity:**
- 🔲 **HQ / locations:**
- 🔲 **Founded / stage / funding:**
- 🔲 **Team size:**
- 🔲 **Production domain(s):** (e.g. www.quaeris.ai — confirm)

### Product truth
- 🔲 **What's GA vs. roadmap** (so we never over-claim):
- 🔲 **Real integrations list** (which warehouses/tools are live today):
- 🔲 **Pricing / tiers** (real, if any, for the Pricing page):
- 🔲 **Named agents / product surfaces** (official names):

### Proof we're allowed to use
- 🔲 **Named customers / logos** (or "none yet — keep anonymized"):
- 🔲 **Real metrics / outcomes** we can cite (with source):
- 🔲 **Analyst / press mentions / awards:**
- 🔲 **Quotable testimonials** (name, title, company, approved):

### Compliance (overrides the canonical status in §5 if different)
- 🔲 **SOC 2 Type II** — status + date:
- 🔲 **HIPAA** — status:
- 🔲 **GDPR** — status:
- 🔲 **Other** (ISO 27001, HITRUST, EU AI Act, …):

### Audience & messaging
- 🔲 **Primary ICP / buyer** (role, company size, industries):
- 🔲 **Key target accounts / segments:**
- 🔲 **Voice do's & don'ts** — words/phrases to always use / never use:
- 🔲 **Brand guidelines PDF** to fold in (`QuaerisAI_Design_Guidelines_Final.pdf`)?
- 🔲 **SEO target keywords** per page:

### Operational
- 🔲 **Where demo/contact leads should route** (email / Slack webhook / CRM — sets `LEAD_WEBHOOK_URL` or `RESEND_API_KEY`+`LEAD_NOTIFY_EMAIL`):
- 🔲 **Real social URLs** (LinkedIn, X, …):
- 🔲 **Analytics / tag IDs** (GA, etc.):
- 🔲 **Legal pages** — who signs off privacy/terms copy:



---

## Maintenance

- **When tokens/classes/architecture change in the repo, update §2–§5 here.** This file is only useful if it stays in sync.
- The fastest way to refresh: re-read `web/src/brands/quaeris/tokens.css`, `web/src/app/globals.css`, `web/AGENTS.md`, `web/src/lib/mockup.ts`.
- Source of this doc: extracted from the codebase + the team's input on 2026-06-16.
