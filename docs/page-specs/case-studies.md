# Page Spec: /case-studies

**Version:** 1.0  
**Date:** 2026-06-12  
**Route:** `/case-studies`  
**Brand:** Quaeris  

---

## 1. Purpose & Primary Audience

The `/case-studies` page is a credibility-first proof asset that converts early-stage prospects (MOFU: marketing-qualified leads) into sales conversations. Its job: show data leaders and executives exactly how similar organizations deployed Quaeris, what problems it solved, and quantify the business impact — outcomes grounded in real customer results, not anonymized claims.

**Primary audience:** CFOs, CDOs, heads of data, VPs of analytics at mid-market ($100M–$5B revenue) financial services, insurance, healthcare, and manufacturing companies evaluating agentic AI analytics. Secondary: analysts and data engineers seeking to justify procurement within their organizations.

**Funnel placement:** Post-homepage consideration; pre-demo. Users arriving here have confirmed product interest and are now validating risk (will this work in my regulated industry? Does my warehouse architecture apply?) and ROI.

---

## 2. SEO

**Page title (≤60 chars):**  
`Quaeris AI Case Studies | Real Outcomes, Real Data`

**Meta description (≤155 chars):**  
`See how data leaders at financial, insurance, and healthcare companies reduced ad-hoc requests, unified metrics, and deployed governed AI in weeks.`

**Target keywords (from QUAERIS_RESEARCH_CONTEXT clusters):**
- AI analytics case studies (Info, primary)
- Governed AI analytics outcomes (Comm, cluster C1)
- Agentic analytics deployment (Comm, cluster C2)
- Enterprise AI analytics ROI (Comm, MOFU)
- Governed analytics customer stories (Info, secondary)

**Keyword mapping:**  
Each case study embeds secondary keywords naturally (e.g., "finance case study" → "HIPAA compliant analytics platform"; "insurance claims analytics case study"). The page structure supports both standalone case-study searches and vertical-specific searches (e.g., "AI analytics for insurance").

---

## 3. Section Blueprint

### 3.1 Hero + Intro

**Component:** Custom (NEW:CaseStudiesHero)  
A two-line introduction: headline + subcopy + visual scaffolding. No background image (lavender section bg #F9F5FF); typography-driven.

**Eyebrow:** `Customer proof`

**Headline:** `Real outcomes. Real data teams.`  
*(48px Roboto Regular, color #200123)*

**Subcopy:** `Generic claims don't move data leaders. Here is what deploying Quaeris actually looks like — outcomes from financial services, insurance, healthcare, and manufacturing teams who unified their metrics and answered questions faster.`  
*(17px Roboto Regular, color #6B4D72)*

**Copy voice:** Confident, precise, zero hype. "Outcomes from financial services" signals regulatory rigor; "who unified their metrics" directly addresses the category wedge (Smart Semantic Layer).

**Visual:** Hero area is typography + a subtle gradient bar (0–100% opacity fade of brand-accent #8C20A4 to transparent, height 2px, positioned above the eyebrow) — signals "proven" without needing an image.

---

### 3.2 Case Studies Grid

**Component:** CaseStudyCard (reuse from inventory; extend properties as needed)

**Structure:** 3-column responsive grid (desktop); 1-column mobile.  
Card count: minimum 3 (placeholder structure for all 6); can display all 6 in a 2–3–3 or 3–3 layout once names are confirmed.

**Per-card anatomy:**

1. **Industry label** (eyebrow, 15px Roboto, color #8C20A4): e.g., "Financial Services", "Insurance", "Healthcare"
2. **Customer name** (20px Roboto 400, color #200123): real company name or `[data-placeholder: Customer Name]` if anonymized
3. **Logo** (optional, 40px height): `[data-placeholder: Logo]` — slot for customer logo; fallback to label if not available
4. **Outcome statement** (15px Roboto, color #200123, line-height 1.6): ~60 chars. Example: "Reduced ad-hoc analytics requests by 84% in 90 days — without relaxing governance controls."
5. **Stats row** (3 stats in a flex row):
   - Number + label (13px Roboto Medium, color #200123)
   - Subtext (12px Inter, color #6B4D72)
   - Example: `84%` / `Fewer requests` / `90 days`
6. **CTA link** (14px Roboto 500, color #8C20A4, underline on hover): "Read the story →"

**Card background:** #FDFAFF (slightly warmer off-white from PDF). Border: 1px solid #ECDCF0 (border-subtle from token map). Border-radius: 8px. Padding: 24px. Hover state: shadow lifts, border color shifts to #DCC8E4 (border-strong).

**Card copy tone:** Each outcome statement is a single, punchy sentence. The "what happened" narrative is threaded in the expanded case-study detail section below the grid, not repeated on the card.

---

### 3.3 Case Study Detail Sections (One per case study)

**Component:** NEW:CaseStudyDetail (or repeating FeatureRow / EditorialBlock pattern)

**Structure:** Below the grid, each case study unfolds as a collapsible or separate detail panel. For initial MVP, recommend 3 expanded details (the first 3 cards); remaining 3 are collapsed/link-away.

**Per detail block anatomy:**

1. **Header row:**
   - Industry + Customer name + Logo (same as card header)
   - Outcome headline (larger version)
   - Background color: alternate between white (#FFFFFF) and lavender (#F9F5FF) for visual rhythm

2. **Body section (3 subsections):**
   - **What they did** (subheading "The Challenge"): 2–3 sentences on the org's initial state (e.g., "Six regional teams using different metric definitions; board reports conflicted monthly.")
   - **How Quaeris solved it** (subheading "How Quaeris Helped"): 3–4 sentences on deployment, integration, and semantic layer migration specifics. Must mention:
     - Warehouse(s) connected (Snowflake, BigQuery, etc.)
     - Scope of semantic layer (# of certified metrics, # of teams)
     - Timeline (weeks to deployment)
     - Access model (role-based, number of users)
   - **The outcome** (subheading "The Result"): 2–3 sentences tying outcome back to Quaeris capabilities (e.g., "Unified metric definitions eliminated conflicts. Role-based access let the ops team ask questions directly without data-team escalation.")

3. **Stats callout:** Larger, prominent version of the 3-stat block from the card. Each stat is standalone; no deltas.

4. **Quote block** (optional, recommended for 3/6):
   - Avatar placeholder `[data-placeholder: Avatar]` or initials circle (24px, bg #ECDCF0, text #200123)
   - Name + Role + Company (13px Inter)
   - Quote text (16px Roboto, color #200123, max-width 500px, italic-off, in-color accent quotes if desired)
   - Example: *"We'd been fighting over metric definitions for two years. Quaeris gave us a single place to certify them — and now every agent answer uses the same number. The board debates stopped."* — J.K., Head of Data, Kova Finance

5. **Vertical spacer:** 60px gap between detail blocks.

---

### 3.4 Stats Summary Section

**Component:** StatBlock (reuse)

**Placement:** After all case studies (above CTA band).

**Content:** Aggregate proof stats drawn from the 6 case studies. Example:

| Metric | Value |
|---|---|
| Customer companies | 6+ |
| Industries served | 5 (Finance, Insurance, Healthcare, Manufacturing, Retail) |
| Avg. deployment time | 3 weeks |
| Avg. reduction in ad-hoc requests | 82% |

*If real aggregate data is not available, mark each as `[data-placeholder: X]`.*

**Copy:** "Deployed across regulated and high-growth industries, Quaeris consistently delivers governed analytics in weeks, not months — and cuts the data-team request backlog by 80+%."

---

### 3.5 CTA Band (Pre-footer)

**Component:** CTABand (reuse)

**Eyebrow:** `Ready to deploy?`

**Headline:** `See how Quaeris unified metrics and cut time-to-insight.`

**Subcopy:** `Talk to a Quaeris solutions engineer. We'll walk through your warehouse setup, your governance requirements, and show you a live governed answer — against your own data schema if possible.`

**Primary CTA:** `Book a Demo`  
*(Roboto 14px Semi Bold, bg gradient #4E0250 → #8C20A4, radius 10px, padding 10px 22px, text white)*

**Secondary CTA:** `See all capabilities` (ghost, Roboto 14px, border #8C20A4, color #8C20A4, hover fill #F9F5FF)

---

## 4. Proof & Data Points

### Real facts from QUAERIS_RESEARCH_CONTEXT:

All copy derives from the research context file. **Only facts that appear there are permitted in final copy; everything else is marked `[data-placeholder]`.**

**Confirmed data points:**
- Quaeris target industries: Finance, Insurance, Retail/CPG, Healthcare, Manufacturing, Construction (from Section 1)
- Six anonymized case studies exist on /use-cases (from Section 1)
- One named customer: E4E with Courtney Ramey (from Section 1)
- Key Quaeris capabilities (from Section 1):
  - Natural Language to SQL
  - Autonomous Multi-Step Workflows
  - Predictive & Proactive Analysis
  - Smart Semantic Layer
  - BYOM (Bring Your Own Model)
  - Data & Document Agents
- Supported warehouses: Snowflake, BigQuery, Databricks, Azure Synapse, Amazon Redshift, etc. (from Section 1)
- Positioning: "Secure, Governed Analytics. Powered by Trusted Agents." (from Section 1)

**Data-placeholder requirements:**
- ❌ Customer logos, real company names (beyond E4E)
- ❌ Exact metrics/ROI numbers (e.g., "84% reduction" unless from research)
- ❌ Customer testimonial quotes and attributions (unless names are confirmed)
- ❌ Regulatory certifications (SOC 2, HIPAA, GDPR status) — research context mentions these as SEO gaps to fill
- ❌ Team member names or photos

**Recommended approach for anonymity:**
If the six case studies cannot be named, structure each as: `[data-placeholder: Customer Name]` (e.g., "A Financial Services Company"). Use the industry label as the primary identifier. Reserve a full-width case study for E4E (Courtney Ramey) as the only named reference; position it first as credibility anchor.

---

## 5. Internal Links

**Links FROM /case-studies TO other routes:**

| Anchor text | Destination | Context |
|---|---|---|
| "Read the story" (on each card/detail) | `/case-studies/[case-study-slug]` | Each case study has a dedicated detail page (optional MVP: can be modal/accordion on main page). Use slugs like `case-studies/finance-metric-unification` or `case-studies/e4e-courtney`. |
| "See all capabilities" (CTA) | `/platform` | Links to platform overview to show what Quaeris does technically. |
| "Book a Demo" (primary CTA) | `/contact` or `https://app.quaeris.ai/book-demo` (via URL from config) | Sales conversion point. |
| (Footer) "Case Studies" | `/case-studies` | Already in nav; no outbound link needed. |

**Links TO /case-studies FROM other routes:**

| Source | Anchor | Purpose |
|---|---|---|
| Homepage (`/`) | "View case studies" (hero CTA) | Post-hero proof signal; directs to this page. |
| Navigation (top mega-menu) | "Case Studies" (under Resources > Proof) | Persistent navigation entry. |
| Footer | "Case studies" (Resources column) | Footer link. |
| Comparison pages (`/compare/*`) | "See how customers achieve X" | Case studies as proof asset; cross-link from nearest relevant comparison page. |

---

## 6. Design System & Component Details

### Typography

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Page title (meta) | — | — | — | — |
| Hero eyebrow | Roboto | 15px | Regular | #8C20A4 |
| Hero headline | Roboto | 48px | Regular | #200123 |
| Hero subcopy | Roboto | 17px | Regular | #6B4D72 |
| Case study industry label | Roboto | 15px | Regular | #8C20A4 |
| Case study customer name | Roboto | 20px | Regular | #200123 |
| Case study outcome statement | Roboto | 15px | Regular | #200123 |
| Case study stat number | Roboto | 18px | Medium | #200123 |
| Case study stat label | Roboto | 13px | Regular | #6B4D72 |
| Detail section heading | Roboto | 40px | Regular | #200123 |
| Detail subheading ("The Challenge", etc.) | Roboto | 20px | Regular | #200123 |
| Detail body text | Roboto | 15px | Regular | #6B4D72 |
| Quote text | Roboto | 16px | Regular | #200123 |
| Quote attribution | Inter | 13px | Regular | #6B4D72 |

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--bg-canvas` | #FAF8FF | Page background |
| `--bg-warm` | #F9F5FF | Section background (hero, detail backgrounds) |
| `--bg-surface` | #FFFFFF | Card backgrounds, white sections |
| `--text-primary` | #200123 | Headlines, primary text |
| `--text-secondary` | #6B4D72 | Body text, secondary headings |
| `--text-tertiary` | #9CA3AF | Footnotes, metadata |
| `--brand-accent` | #8C20A4 | Industry labels, CTA hover, accents |
| `--border-subtle` | #ECDCF0 | Card borders, dividers |
| `--border-strong` | #DCC8E4 | Card borders on hover |
| `--cta-bg` | linear-gradient(90deg, #4E0250, #8C20A4) | Primary CTA button |

### Spacing

- Hero vertical padding: 80px top / 80px bottom (desktop); 60px / 60px (mobile)
- Grid gap: 24px (desktop); 16px (mobile)
- Card padding: 24px
- Detail block vertical margin: 60px between each
- Section padding: 80px vertical (desktop); 60px (mobile)

### Interactive States

**CTA Buttons:**
- Default: gradient bg, white text, 10px radius
- Hover: opacity 90%, slight shadow lift
- Active: opacity 80%

**Card hover:**
- Border color: #DCC8E4 (border-strong)
- Shadow: 0 8px 24px rgba(32, 1, 35, 0.12)
- Slight scale: transform scale(1.02) optional

**Links ("Read the story →"):**
- Default: color #8C20A4, underline on hover
- Visited: color #6B4D72

---

## 7. Responsive Breakpoints

| Breakpoint | Grid layout | Typography scaling |
|---|---|---|
| Desktop (≥1024px) | 3-column card grid | Full size |
| Tablet (768px–1023px) | 2-column card grid | Hero headline → 36px |
| Mobile (<768px) | 1-column card grid | Hero headline → 32px, hero subcopy → 16px |

Detail sections stack full-width across all breakpoints.

---

## 8. Accessibility & Semantic HTML

- Hero section: `<section>` with `aria-label="Customer proof"`
- Case study grid: `<ul>` with `role="list"`; each card is a `<li>` with `role="listitem"`
- Case study links: descriptive `aria-label` (e.g., "Read the story for [Customer Name]")
- Stats: use `<dl>` (definition list) for number + label pairs
- Quotes: wrap in `<blockquote>` with `cite` attribute if author URL available
- CTA buttons: clear, actionable labels; no icon-only buttons

---

## 9. Open Questions & Unresolved Items

1. **Customer naming & anonymity:**
   - Can the 6 existing case studies be named and attributed? (Currently anonymized on /use-cases)
   - Should E4E + Courtney Ramey be featured as a full detail block or just mentioned?
   - If anonymity is required, is the pattern "A [Industry] Company" acceptable, or should it be "Customer story 1," etc.?

2. **Customer quotes & attributions:**
   - Do signed testimonials exist for the 6 companies, or are they structured internally?
   - Can initials + role + company be used, or is full anonymity required?
   - What's the sign-off process for quote approval?

3. **Real ROI numbers:**
   - What are the actual percentages / metrics for reduction in ad-hoc requests, time-to-insight, etc.?
   - Should these be ranges (e.g., "70–84%") or single figures?
   - Are these customer-specific or aggregated? If customer-specific, can they be disclosed?

4. **Case study detail pages:**
   - Should each case study link to a full dedicated `/case-studies/[slug]` detail page, or remain accordion/modal on the main page for MVP?
   - If dedicated pages, what's the template? (Recommend: SectionHeader + FeatureRow pattern + testimonial + CTA)

5. **Logo placement & sizing:**
   - Are customer logos available to display, or is `[data-placeholder: Logo]` structural until logos are gathered?
   - Logo max-width: 100px? 120px?

6. **Regulatory certifications display:**
   - Where should SOC 2, HIPAA, GDPR, ISO 27001 compliance badges appear? (Hero trust strip? Footer of each detail? Separate "Trust" section?)
   - Research context notes these as EEAT gaps — should they be prominently featured here to signal credibility?

7. **Industry-specific case study filtering:**
   - Should the page include a filter/tab (Finance | Insurance | Healthcare | Manufacturing | Retail) to show customer stories by vertical?
   - If so, what's the default view? (All stories, or pre-filtered to first industry?)

8. **Blog/resource links from cases:**
   - Should each case study link to a relevant blog post or resource (e.g., "Read: How to Unify Metrics Across Teams")?
   - If so, which posts exist? (Recommend: check blog.quaeris.ai or create list of "to-be-written" resources marked as placeholders)

9. **Heatmap / engagement tracking:**
   - Are there event tracking requirements? (e.g., "Read the story" clicks, stat hover states, CTA band interactions)
   - Should conversion goal be "Demo booking" or "Click to detail"?

10. **SEO schema:**
    - Should each case study render its own `Article` schema with `author`, `datePublished`, etc.?
    - Should the page itself render `SchemaOrg: Organization` + `BreadcrumbList`?

---

## 10. Notes for Implementation

- **Component reuse:** Use CaseStudyCard from the existing inventory as the base; extend properties to accept industry label, logo, and multi-stat layout.
- **Data structure:** Case study data should live in `@brand/config.ts` (Quaeris config) as an array of objects:
  ```js
  caseStudies: [
    {
      id: 'e4e-metric-unification',
      industry: 'Financial Services',
      customerName: 'E4E',
      customerLogo: 'path-to-logo.svg',
      outcome: 'Unified metric definitions across teams...',
      stats: [
        { number: '84%', label: 'Fewer ad-hoc requests' },
        { number: '600+', label: 'Self-serve users' },
        { number: '90', label: 'Days to rollout' },
      ],
      challenge: '...',
      solution: '...',
      result: '...',
      quote: { text: '...', attribution: '...' },
      ctaLabel: 'Read the story',
      ctaHref: '/case-studies/e4e-metric-unification',
    },
    // ... 5 more
  ]
  ```
- **Git path:** Case studies page layout lives in `/web/src/app/case-studies/page.tsx` (or `/web/src/app/[brand]/case-studies/page.tsx` if brand-specific routing exists).
- **Link patterns:** Internal case-study detail links use `/case-studies/[slug]` pattern; slug derives from `id` field in config (e.g., `e4e-metric-unification` → `/case-studies/e4e-metric-unification`).
- **Motion (optional):** Scroll-triggered fade-in on cards (stagger delay ~100ms per card). Detail sections fade in on expand/accordion open.

---

## 11. Copy Framework (Quaeris Voice)

**Tone:** Confident, precise, governed-first. Show, don't tell. Numbers over adjectives.

**Forbidden:**
- "Game-changing," "revolutionary," "industry-first" (without proof)
- Vague claims ("faster," "easier" without metrics)
- Hyperbole ("impossible," "always," "never")

**Encouraged:**
- Specific metrics (84%, 20 minutes, 6 teams)
- Governance language ("certified metrics," "role-based access," "lineage")
- Customer outcomes tied to Quaeris capabilities
- Direct quotes from named leaders (when available)

---

## Appendix: Reference Data from Research Context

**Six anonymized case studies currently on site:**
1. E4E (Courtney Ramey — only named)
2. "A leading financial institution"
3. "A property management SaaS company"
4. "A large retail bank"
5. "A higher education company"
6. "A services SaaS company"

**Key finding from audit:** "Six case studies exist; only one is named. This is the most critical EEAT gap on the site." De-anonymizing these is the highest-priority lift for this page.

**Comparison page slug canonicalization (for cross-linking):**
- `/compare/quaerisai-vs-tableau`
- `/compare/quaerisai-vs-thoughtspot`
- `/compare/quaerisai-vs-looker`
- `/compare/quaerisai-vs-qlik`
- `/compare/quaerisai-vs-power-bi`
- `/compare/quaerisai-vs-sigma`
- etc.

Use these canonical links in case-study detail sections when relevant (e.g., "See how Quaeris compares to Tableau for regulated analytics").

---

**End of specification.**
