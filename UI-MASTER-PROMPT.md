# MASTER UI BUILD PROMPT — White-Label Marketing Site

> Paste this entire document into Lovable or Claude Code as the build brief.
> Stack-agnostic: any modern framework (React/Vite, Next.js, Astro, plain HTML/CSS) works. All styling values are expressed as design tokens so they map to Tailwind config, CSS custom properties, or any styling system.
> This is a **white-label template**: every brand-specific value is a token (`--brand-*`, `{{BRAND_NAME}}`). Swap tokens, not markup.

---

## 1. Design Philosophy

Build a site that blends two proven references:

- **Editorial restraint (Reference A — private-markets.com):** generous whitespace, serif display headings at normal weight, uppercase letter-spaced eyebrow labels, disciplined 2-color sections, no decorative noise. Every section earns its place. Formal, institutional, calm.
- **Modern energy (Reference B — iclickdemo.netlify.app):** a light lilac-grey canvas with one electric accent color, pill-shaped CTAs with a soft glow, large soft-shadow cards, dark "feature" sections for contrast, animated stat counters, logo marquees, and proof-dense layouts.

**The blend rule:** Reference B supplies the *palette, component shapes, and proof patterns*. Reference A supplies the *spacing, typographic discipline, and restraint*. When in doubt: remove the element, increase the whitespace, and let one accent color do the work.

Concretely:

- Max ONE accent color per viewport. Accent is for CTAs and key data points only — never for decoration.
- Headings are large but quiet: serif display font at weight 400–500 with tight letter-spacing (NOT weight 900). This is the single biggest "formality" lever.
- Section rhythm alternates: light canvas → white → light canvas → dark ink section (max 2 dark sections per page).
- Cards get soft shadows and rounded corners, but radius is 20px (calmer than Reference B's 28px) and shadows are subtle at rest, lifting on hover.
- No gradients on text. One radial accent glow allowed in the hero background, at ≤15% opacity.

---

## 2. Design Tokens

Implement these as CSS custom properties on `:root` (or Tailwind theme extension). **Never hard-code these values in components.**

### 2.1 Color

```css
:root {
  /* Canvas & surfaces */
  --bg-canvas:        #F7F7FA;   /* page background (Ref B) */
  --bg-surface:       #FFFFFF;   /* cards, alternating sections */
  --bg-warm:          #F6F4F2;   /* optional warm alt-section (Ref A) — use for editorial/blog areas */
  --bg-ink:           #0A0A12;   /* dark feature sections, footer */
  --bg-ink-elevated:  #14141F;   /* cards on dark sections */

  /* Text */
  --text-primary:     #0B0E1E;   /* near-ink navy (Ref A's #090C2A, normalized) */
  --text-secondary:   #51555F;   /* body copy, descriptions */
  --text-tertiary:    #8A8E99;   /* captions, meta, timestamps */
  --text-on-dark:     #FFFFFF;
  --text-on-dark-dim: rgba(255,255,255,0.72);

  /* Brand accent (the ONLY saturated color) */
  --brand-accent:        #6754E9;  /* electric violet (Ref B) — REPLACE per client */
  --brand-accent-hover:  #5743D6;
  --brand-accent-deep:   #2F05A2;  /* deep variant: hero glow, dark-section highlights */
  --brand-accent-soft:   rgba(103,84,233,0.10); /* tinted chips, icon backgrounds */
  --brand-accent-glow:   rgba(103,84,233,0.25); /* CTA shadow glow */

  /* Borders & lines */
  --border-subtle:    rgba(11,14,30,0.08);
  --border-strong:    rgba(11,14,30,0.16);
  --border-on-dark:   rgba(255,255,255,0.12);

  /* Semantic */
  --success: #1A9E6C;  --warning: #D98E04;  --error: #D43D51;
}
```

**Usage ratios per page:** ~60% canvas/white, ~25% text inks, ~10% dark sections, ~5% accent. If accent exceeds 5% of a viewport, remove accent usages.

### 2.2 Typography

Two families only:

```css
:root {
  /* Display serif — formal lever (Ref A). Free alternatives to Zodiak:
     "Fraunces", "Source Serif 4", or "STIX Two Text" */
  --font-display: "Fraunces", Georgia, serif;
  /* UI/body sans — modern lever (Ref B). Free alternatives to Satoshi:
     "Inter", "General Sans", or system-ui */
  --font-body: "Inter", system-ui, -apple-system, sans-serif;
}
```

Type scale (desktop → mobile):

| Token | Use | Family | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|---|---|
| `display-xl` | Homepage H1 | display | 64px → 40px | 450 | -1.5% | 1.08 |
| `display-lg` | Page H1, section H2 | display | 48px → 32px | 450 | -2% | 1.15 |
| `display-md` | Card titles, H3 | display | 28px → 22px | 450 | -1% | 1.2 |
| `heading-sm` | Sub-headings, H4 | body | 20px → 18px | 600 | -0.5% | 1.35 |
| `body-lg` | Hero subcopy, intros | body | 18px | 400 | 0 | 1.6 |
| `body-md` | Default body | body | 16px | 400 | 0 | 1.65 |
| `body-sm` | Captions, meta | body | 14px | 400 | 0 | 1.5 |
| `eyebrow` | Section labels | body | 12px | 600 | +2.5px, UPPERCASE | 1.2 |
| `stat` | Big numbers | body | 56px → 36px | 700 | -2% | 1.0 |

Rules:

- Every major section opens with an `eyebrow` label above its H2 (Ref A pattern: "Operational intelligence for private capital"). Eyebrow color: `--text-tertiary` on light, `--brand-accent` on dark.
- Headings use sentence case, never all-caps, never title-cased-every-word.
- Body copy column max-width: 68ch. Heading max-width: 16ch for display-xl, 24ch for display-lg.
- Numbers/stats use the body sans at weight 700 with `font-variant-numeric: tabular-nums`.

### 2.3 Spacing, Radius, Shadows, Motion

```css
:root {
  /* Spacing scale (8px base) */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;
  --space-9: 96px; --space-10: 128px; --space-11: 160px;

  /* Section padding: 128px desktop / 72px mobile (Ref A generosity) */
  --section-pad-y: clamp(72px, 10vw, 128px);

  /* Radius */
  --radius-sm: 8px;    /* inputs, chips */
  --radius-md: 12px;   /* buttons (non-pill), small cards */
  --radius-lg: 20px;   /* cards (calmed-down from Ref B's 28px) */
  --radius-pill: 999px;/* CTAs, badges, filter tabs */

  /* Shadows (Ref B softness, dialed back) */
  --shadow-card:      0 1px 2px rgba(11,14,30,0.04), 0 8px 24px rgba(34,22,119,0.06);
  --shadow-card-hover:0 2px 4px rgba(11,14,30,0.06), 0 16px 40px rgba(34,22,119,0.12);
  --shadow-cta:       0 0 0 1px var(--brand-accent-glow), 0 8px 24px var(--brand-accent-glow);

  /* Motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 150ms; --dur-base: 250ms; --dur-slow: 450ms;
}
```

Motion rules: hover transitions at `--dur-fast`; scroll-reveal = fade + 16px rise at `--dur-slow`, triggered once at 20% visibility, staggered 60ms between siblings; stat counters count up over 1.2s when scrolled into view; logo marquee scrolls at 30s/loop, pauses on hover. Respect `prefers-reduced-motion: reduce` — disable all of the above.

### 2.4 Layout Grid

- Container: max-width 1200px, side padding 24px (16px mobile).
- 12-column grid, 24px gutters.
- Breakpoints: 640 / 768 / 1024 / 1280.
- Sticky header height: 72px (64px mobile).

---

## 3. Component Library

Build these once, reuse everywhere. Names are canonical — agents and pages must reference these exact names.

### `SiteHeader`
Sticky, white at 92% opacity with `backdrop-filter: blur(12px)`, 1px `--border-subtle` bottom border that appears only after 8px scroll. Left: logo (`{{BRAND_LOGO}}`, max-height 32px). Center: nav items — Solutions (dropdown), Services (dropdown), Resources (dropdown), Tools, Blog, About. Dropdowns are full-width panels (Ref A mega-menu style): 2-column layout with grouped link lists + one featured card (image, title, link) on the right. Right: text link "Contact" + primary pill CTA `{{CTA_PRIMARY_LABEL}}`. Mobile: hamburger → full-screen overlay, nav groups as accordions, CTA pinned to bottom.

### `SiteFooter`
On `--bg-ink`. Top row: one-line brand statement in `display-md` serif (Ref A: a thesis, not a tagline), max-width 28ch. Below: 4 link columns (Company / Services / Resources / Contact) with `eyebrow`-styled column titles, links in `--text-on-dark-dim` → white on hover. Bottom bar: © line, Privacy, Terms, social icons. Optional newsletter input inline (see `NewsletterBlock`).

### `Button`
Variants:
- `primary`: pill, `--brand-accent` bg, white text, weight 500, padding 12px 28px, `--shadow-cta` glow; hover: `--brand-accent-hover` + translateY(-1px).
- `secondary`: pill, transparent bg, 1px `--border-strong` border, `--text-primary` text; hover: border-color `--text-primary`, bg `rgba(11,14,30,0.03)`.
- `ghost`: text + "→" arrow that shifts 4px right on hover.
- `on-dark`: white bg, ink text (for dark sections).
Sizes: sm (8px 20px / 14px), md (12px 28px / 16px), lg (16px 36px / 16px).

### `Eyebrow`
12px / 600 / +2.5px tracking / uppercase. Optional 24px horizontal rule before text.

### `SectionHeader`
Eyebrow + H2 (`display-lg`) + optional one-sentence subcopy (`body-lg`, `--text-secondary`, max 68ch). Alignment prop: left (default) or center (use sparingly — heroes and CTA bands only).

### `Card`
White bg, `--radius-lg`, 1px `--border-subtle`, `--shadow-card`; hover: `--shadow-card-hover` + translateY(-2px). Padding 32px. Dark variant for ink sections: `--bg-ink-elevated` bg, `--border-on-dark`.

### `StatBlock`
Big number (`stat` style, count-up animation) + label (`body-sm`, `--text-tertiary`). Optional delta chip ("+22.4%" in `--success`). Used in rows of 3–4 with 1px vertical dividers.

### `LogoMarquee`
Single row of client/partner logos, grayscale at 60% opacity (→ full color + 100% on hover), infinite scroll, edge fade masks, header line above in `eyebrow` style ("Trusted by teams at"). Duplicate logo set for seamless loop.

### `TestimonialCard` / `TestimonialMarquee`
Quote (`body-lg`), avatar or logo 40px, name (weight 600), role · company (`body-sm`, tertiary). Marquee variant: two rows scrolling opposite directions, pause on hover. Static variant: 3-up grid.

### `CaseStudyCard`
Industry chip (pill, `--brand-accent-soft` bg, accent text) + client name (`display-md`) + one-line outcome + 2–3 inline `StatBlock`s (sm) + 1-sentence "how" + ghost button "Read the story". This is the highest-value proof component — keep metrics dominant.

### `FeatureRow`
Alternating 2-column rows (text 5 cols / visual 7 cols, flipping each row). Text side: eyebrow, `display-md` heading, body, ghost link. Visual side: image or UI mock in a `Card` frame.

### `IconFeatureGrid`
3 or 4-up grid. Each cell: 40px icon in a `--brand-accent-soft` rounded square, `heading-sm` title, 2-line body. No card borders — whitespace separates (Ref A restraint).

### `Accordion` (FAQ)
1px bottom-border rows, question in `heading-sm`, "+/−" rotating icon, smooth height animation. First item open by default. Wrap page FAQ in `FAQPage` JSON-LD schema.

### `CTABand`
Full-width section on `--bg-ink` with radial `--brand-accent-deep` glow at 15% opacity top-center. Centered: `display-lg` heading (serif, white), one-line subcopy, primary + secondary(on-dark) buttons. One per page, near the end.

### `NewsletterBlock`
Eyebrow + heading + single-row form (email input + pill button) + one-line consent note (`body-sm`, tertiary). Success and error inline states required.

### `FilterTabs`
Pill tabs: active = ink bg/white text; inactive = transparent + `--border-subtle`. Used on blog, events/case-study, and discover listing pages.

### `ContentCard` (blog/resource)
16:9 thumbnail (`--radius-md` top), category chip, `display-md` title (2-line clamp), excerpt (2-line clamp), meta row (author avatar 24px · date · read time).

### `ResourceCard` (whitepaper/report)
Portrait 3:4 cover mock (generate a typographic cover: serif title on ink or accent-deep bg), type chip ("White Paper" / "Industry Report"), title, 1-line abstract, "Download →" ghost link + gated badge if applicable.

### `BreadcrumbNav`, `Pagination`, `TagChip`, `AuthorByline`, `TableOfContents` (sticky sidebar, scroll-spy, `--brand-accent` active state), `ShareRow`, `Badge` ("Top 3%", "Premier Partner" style proof badges: pill, 1px border, 12px text).

### `LeadForm`
Name / work email / message (optional) / hidden source field. Labels above inputs, 48px input height, `--radius-sm`, focus ring = 2px `--brand-accent` at 40%. Inline validation, loading state on submit button, success state replaces form with a confirmation card. One-line privacy note under submit.

### `MetricDashboardMock` (optional, Ref B's signature)
Illustrative analytics card: 4 clickable metric tiles (Clicks/Conversions/ROAS/Conv-rate) + simple line chart, "Illustrative data" caption. Use on Service LPs and homepage only if relevant to `{{INDUSTRY}}`.

---

## 4. Global Page Rules

1. Every page: `SiteHeader` + `SiteFooter` + exactly one `CTABand` (except legal pages).
2. Every section: `--section-pad-y` vertical padding; section content starts with `SectionHeader` unless it's a hero or band.
3. Dark sections: max 2 per page, never adjacent, never first.
4. All images: `alt` text, lazy-loaded below the fold, aspect-ratio boxes to prevent CLS.
5. Semantic HTML: one `h1` per page, landmarks (`header/main/footer/nav`), skip-to-content link.
6. Accessibility: WCAG AA contrast (verify accent-on-white ≥ 4.5:1 for text usage; `#6754E9` passes at normal weight ≥ 16px — for small text use `--brand-accent-hover`), visible focus states everywhere, full keyboard support for dropdowns/accordions/tabs.
7. SEO scaffold per page: unique `<title>` ≤ 60 chars, meta description ≤ 155 chars, OG + Twitter card tags, canonical URL, JSON-LD (`Organization` sitewide; `Article` on blog posts; `FAQPage` where FAQs exist; `BreadcrumbList` on nested pages).
8. Copy voice: short declarative sentences. Outcome-first ("Real spend. Real clients. Real numbers."), zero filler adjectives. All copy below is placeholder-structured — replace `{{...}}` tokens with brand content.

---

## 5. Page Specifications

### 5.1 Sitemap

```
/                       Homepage
/about                  About
/contact                Contact
/services               Services index
/solutions/[vertical]   Vertical landing pages (3+: e.g. ecommerce, saas, professional-services)
/lp/[variant]           Standalone campaign LPs (3 templates: lp-a, lp-b, lp-c)
/tools                  Tools hub
/tools/[tool]           Individual tool (calculator) pages
/blog                   Blog collection
/blog/[slug]            Blog article
/discover               Research & insights hub
/discover/reports/[slug]      Industry research doc page
/discover/whitepapers/[slug]  White paper page (gated)
/case-studies           Case study collection
/case-studies/[slug]    Case study detail
/privacy  /terms        Legal
/404                    Not found
```

### 5.2 Homepage

Section order (each = one section component):

1. **Hero** — canvas bg + one radial accent glow (top-right, 15%). Eyebrow (`{{POSITIONING_LINE}}`), `display-xl` serif H1 (≤ 10 words, the thesis: e.g. "{{HERO_HEADLINE}}"), `body-lg` subcopy (2 sentences max: who it's for + the proof hook), primary + secondary buttons. Below: small "partner/credential" line with 2–3 partner logos (Ref B's trust strip). NO hero image — typography is the hero (Ref A).
2. **LogoMarquee** — "Trusted by teams at {{...}}".
3. **Three Pillars** — `SectionHeader` + 3 `Card`s with image tops linking to the three core offerings (Ref A's Events/Intelligence/Podcast pattern → map to `{{PILLAR_1..3}}`).
4. **Stats band** — white section, 4 `StatBlock`s in a divider row ("{{METRIC_1}}+ …").
5. **How we work / value props** — `IconFeatureGrid` 4-up (Ref B's "How we drive revenue", with Ref A whitespace).
6. **Dark feature section** — `--bg-ink`. Eyebrow in accent, serif H2, 2-col: left = 3 short value props as bordered list rows; right = `MetricDashboardMock` or product visual.
7. **Proof** — `SectionHeader` ("Specific proof beats generic claims.") + 3-up `CaseStudyCard` grid + ghost "View all stories".
8. **TestimonialMarquee** — with review-platform badges row above (Ref B's "5.0 on Google · 4.95 on Clutch" pattern → `{{REVIEW_BADGES}}`).
9. **FAQ** — 2-col: left = `SectionHeader` + "still have questions" mini-card; right = `Accordion` (5–6 items).
10. **CTABand** + **NewsletterBlock** (NewsletterBlock may live inside footer top instead).

### 5.3 About

Hero (eyebrow + `display-lg` + 1-paragraph mission, left-aligned, 68ch) → "Who's behind it" founder section (Ref A): portrait card left, serif H2 + bio right, LinkedIn link → Values: `IconFeatureGrid` 3-up → Timeline/milestones: vertical line with year markers and `body-md` entries → Team grid (optional): photo cards, name, role → Credentials band: `Badge` row + partner logos → `CTABand`.

### 5.4 Contact

2-column: left = serif H2 ("Talk to a human."), response-time promise line, contact methods list (email, phone/WhatsApp, address) each with icon + `heading-sm`, and 2–3 `TestimonialCard`s stacked for reassurance; right = `LeadForm` in an elevated `Card`. Below: optional map embed or office photo band. NO `CTABand` (the page IS the CTA). Add a compact FAQ accordion (3 items: response time, what happens next, pricing question).

### 5.5 Vertical Landing Pages — `/solutions/[vertical]` (3+ versions, shared template)

One template, content-swapped per vertical (Ref B's industries pattern). Define content as data (JSON/frontmatter), render through the same components:

```json
{
  "vertical": "ecommerce",
  "eyebrow": "For eCommerce brands",
  "h1": "{{VERTICAL_HEADLINE}}",
  "pains": ["...", "...", "..."],
  "outcomes": [{"metric": "10x", "label": "ROAS"}, ...],
  "caseStudies": ["slug-1", "slug-2"],
  "faq": [...],
  "testimonials": [...]
}
```

Template sections: Hero (eyebrow names the audience, H1 names the outcome, subcopy names the qualifier — who this is/isn't for) → "Sound familiar?" pains: 3-up cards, each a pain quote in serif italic + 1-line reframe → Outcome stats band → Approach: `FeatureRow` ×3 (the methodology for THIS vertical) → Vertical-specific `CaseStudyCard`s ×2 → Vertical FAQ → `CTABand` with vertical-specific CTA copy.

Build with **three example verticals**: `ecommerce`, `saas`, `professional-services`.

### 5.6 Campaign Landing Page Templates — `/lp/[variant]` (3 structurally different layouts)

Standalone pages for paid traffic: **no full nav** (logo + single CTA button only in header), no footer link columns (slim footer: logo, ©, privacy/terms). Three distinct structures for A/B testing:

**LP-A "Hero-led / Conversion-direct"** — Above fold: eyebrow credential, `display-xl` H1, 3-bullet outcome list (checkmark icons), `LeadForm` embedded right of hero text (2-col). Then: logo strip → 3 `StatBlock`s → short testimonial row → compressed FAQ (4) → repeat form in `CTABand` style. Total height ≤ 5 viewports.

**LP-B "Proof-led / Skeptic"** — Above fold: H1 as a proof claim ("{{METRIC}} for companies like yours"), subcopy, single primary CTA (anchor-scrolls to form). Then: dense proof stack — 3 `CaseStudyCard`s full-width horizontal variant → `TestimonialMarquee` → review badges → "How it works" 3-step numbered row → form section (2-col: left "what you get" checklist, right `LeadForm` in elevated card) → guarantee/risk-reversal note.

**LP-C "Demo-led / Show-don't-tell"** — Above fold: H1 + subcopy centered, `MetricDashboardMock` (or product screenshot in browser-chrome frame) as the hero visual with subtle float animation. Then: `FeatureRow` ×3 walking through the product/process → comparison table ("Us vs typical {{CATEGORY}}": check/cross rows, our column tinted `--brand-accent-soft`) → single testimonial spotlight (large serif quote, centered) → pricing/engagement summary cards (optional, 2–3 tiers) → form `CTABand`.

All three: sticky mobile bottom CTA bar (appears after 1 viewport of scroll), form ≤ 4 fields, every CTA on the page targets the same form/anchor.

### 5.7 Services Index — `/services`

Hero → grid of service `Card`s (icon, name, 1-liner, "Learn more →") grouped by category with eyebrow group labels → "How engagement works" 3-step `FeatureRow` → `CTABand`. Individual service pages reuse the vertical-LP template with service-specific data.

### 5.8 Tools Hub — `/tools` and `/tools/[tool]`

**Hub:** Hero ("Free tools. No email wall.") → grid of tool `Card`s: icon, tool name, 1-line "what you get", chip showing output type ("Calculator" / "Checklist" / "Grader") → cross-link band to newsletter.

**Tool page template** (build 2 examples, e.g. ROI/ROAS calculator + budget calculator): 2-col layout — left: inputs in an elevated `Card` (labeled sliders + number inputs, live-updating); right: results panel on `--bg-ink` card — big `stat` numbers, 1-line interpretation, mini chart if relevant. Below: "How this is calculated" accordion (methodology = trust), related-tool cards, soft CTA row ("Want this done for you? →"). All calculation client-side, instant, no submit button.

### 5.9 Blog — `/blog` and `/blog/[slug]`

**Collection:** Hero (eyebrow + `display-lg` + search input) → Featured post: full-width horizontal `Card` (image left 50%, content right) → `FilterTabs` by category → 3-col `ContentCard` grid (2-col tablet, 1-col mobile) → `Pagination` → `NewsletterBlock`.

**Article layout:** Breadcrumb → category chip + `display-lg` serif title + dek (`body-lg`) → `AuthorByline` + date + read-time + `ShareRow` → full-width 16:9 hero image (`--radius-lg`) → 2-col body: left rail = sticky `TableOfContents` (desktop only); main = article prose at 68ch — styled `h2`(serif `display-md`)/`h3`, paragraphs `body-md` at 1.7 line-height, blockquotes with 2px accent left border + serif italic, code blocks on ink bg, callout boxes (`--brand-accent-soft` bg, `--radius-md`), figure captions in `body-sm` tertiary → end matter: tag chips, author card (avatar, bio, links), prev/next post nav cards, "Related posts" 3-up → `NewsletterBlock`. `Article` + `BreadcrumbList` schema.

### 5.10 Discover Hub — `/discover` (+ report & whitepaper detail pages)

The content-asset library (Ref A's Market Intelligence pattern).

**Hub:** Hero (eyebrow "Research & Intelligence", serif H1, subcopy) → Featured report: full-width dark `Card` — left: type chip, serif title, abstract, meta (date · pages · topics), primary button; right: 3D-tilted cover mock → `FilterTabs` (All / Industry Reports / White Papers / Benchmarks / Event Summaries) + sort dropdown → 3-col `ResourceCard` grid → `NewsletterBlock` ("Get new research first").

**Report detail (ungated):** Breadcrumb → 2-col hero: left = type chip, serif title, abstract, meta row, author/org line, primary "Read report" + secondary "Download PDF"; right = cover mock → "Key findings" — 3–5 `StatBlock` pull-stats in a band → body content (same prose styles as blog, with sticky TOC) → "Cited sources" accordion → related resources 3-up → `CTABand`.

**Whitepaper detail (gated):** Same hero, but right column = gated download `Card`: "Get the full paper" + `LeadForm` (name, work email, company) + privacy note + "What's inside" checklist (4 items). Body shows executive summary only, then a blurred-content fade into the form anchor. After submit: success card with download button + email confirmation note.

### 5.11 Case Studies — `/case-studies` and `/case-studies/[slug]`

**Collection:** Hero → `FilterTabs` by vertical → 2-col `CaseStudyCard` grid.
**Detail:** Hero: client logo, vertical chip, serif H1 (the outcome as headline), 3 `StatBlock`s in a row → "Snapshot" sidebar card (client, industry, services, timeline) sticky right; main: Challenge / Approach / Results sections with serif H2s → pull-quote testimonial (large serif) → result charts/before-after if available → next-case-study nav → `CTABand`.

### 5.12 Legal + 404

Legal: narrow 68ch prose, sticky TOC, last-updated date. 404: centered serif "Lost?" headline, one-liner, primary button home + popular links list.

---

## 6. Responsive Behavior Summary

- Grids: 3/4-col → 2-col (≤1024) → 1-col (≤640). `FeatureRow` stacks text-first.
- Heroes: type scales per §2.2; buttons go full-width stacked at ≤640.
- Header → hamburger at ≤1024. Sticky TOCs hide ≤1024 (collapse into a "Contents" disclosure above article).
- Marquees keep scrolling on mobile (smaller logos); testimonial marquee becomes swipeable single row.
- Tables (comparison, etc.) horizontally scrollable with edge-fade hint at ≤768.

---

## 7. Quality Bar / Definition of Done

- [ ] Zero hard-coded colors/fonts/radii outside the token file.
- [ ] Lighthouse: ≥90 performance, ≥95 accessibility, ≥95 SEO on home, one LP, one blog post.
- [ ] All interactive states implemented: hover, focus-visible, active, disabled, loading, error, success, empty.
- [ ] `prefers-reduced-motion` honored globally.
- [ ] Every page renders correctly at 360, 768, 1024, 1440 widths.
- [ ] All forms validate inline and have success/error states; no dead submits.
- [ ] One `h1` per page; heading levels never skip.
- [ ] All `{{TOKEN}}` placeholders inventoried in a single `brand.config` file (name, logo, accent colors, CTA labels, contact details, social URLs, review badges, metrics).

---

## 8. White-Label Swap Guide

To rebrand: edit only (1) `brand.config` content tokens, (2) the 5 `--brand-accent*` color tokens, (3) optionally `--font-display`/`--font-body`, (4) logo assets. Nothing else. If a rebrand requires touching a component, the component is wrong — fix the token usage instead.
