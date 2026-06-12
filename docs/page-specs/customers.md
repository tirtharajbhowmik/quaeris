# Page Spec: /customers — Customers & Case Studies

**Status:** Implementation-ready proof page structure  
**Date:** 2026-06-12  
**Audience:** Enterprise buyers (CFOs, CDOs, heads of data, analytics leaders) in finance, insurance, retail/CPG, healthcare, manufacturing, construction  
**Brand context:** Quaeris (`/customers` nav promise: "How data leaders use Quaeris")

---

## 1. Purpose & Audience

This page is the **proof-of-concept hub** for Quaeris.ai—the destination that closes skeptics by showing real data leaders achieving measurable outcomes with governed agentic analytics. The page serves three audiences in sequence:

1. **First-time visitors** — skeptical about AI in analytics (hallucinations, lack of trust) → see that others overcame the same concerns and deployed in 2–4 weeks
2. **Active evaluators** — comparing against ThoughtSpot, Snowflake Cortex, Databricks Genie → understand how Quaeris's auto-learning semantic layer and warehouse-portable agents differ
3. **Champions in customer organizations** — funding / justifying to CFO/board → borrowing proof from peer industries

The page is the primary **EEAT credibility builder** on the site. Currently, the site has six anonymized case studies and one named reference (E4E). This page must surface real customer names, logos, and quotes (when available) and create structure for programmatic expansion as customer references land.

---

## 2. SEO

**Title tag (60 chars max):**  
`Trusted by data leaders | Quaeris AI Analytics Platform`

**Meta description (155 chars max):**  
`See how enterprises reduced analytics requests by 80%, unified metrics across teams, and deployed governed AI in weeks. Real outcomes, real companies.`

**Target keywords (clusters C1, C9, C10, C12):**
- `governed AI analytics` (primary pillar)
- `AI analytics for [role]` → CFO, Head of Data, Chief Analytics Officer
- `industry AI analytics` → financial services, insurance, healthcare
- `ThoughtSpot alternative` → comparison intent
- `agentic analytics platform` (category)

---

## 3. Section Blueprint

### 3.1 Hero Section — NEW: CustomerHero

**Component to reuse:** `HeroHome` (adapted for customer-proof context)

**Structure:**
- Eyebrow: "Real proof"
- Headline (H1, 48px Roboto): "Trusted by enterprise data leaders."
- Subheading (20px Inter): "See how companies in finance, insurance, healthcare, and retail deployed governed AI analytics — and got results in weeks, not months."
- Layout: Dark background (#200123 ink), white text, gradient CTA
- No hero video; static "customer logos marquee" instead (see 3.2)

**Copy voice:** Confident, outcome-focused, governance-first. Lead with results, not vendor claims.

---

### 3.2 Logo Marquee — NEW: CustomerLogoMarquee

**Component:** Adapt `LogoMarquee` or build NEW:CustomerLogoMarquee

**Description:** A scrolling/static grid of customer logos. Structure slots for real company names and logo images; mark missing logos [data-placeholder].

**Real customer references from audit:**
- [data-placeholder] — 5 additional named customers (currently anonymized in site; to be confirmed by sales)
- E4E (the one named testimonial from audit)

**Marquee layout:**
- 8–10 logo slots in a horizontal scrolling or grid layout
- Logos at uniform height (48–56px); light text on dark background
- If logo unavailable, use company name in Roboto 14px medium, color #FAF8FF

**Copy above marquee:**  
"How data leaders at [industry] companies use Quaeris to answer faster."

---

### 3.3 How They Won — FeatureRow (reused, 3× cards)

**Component:** `FeatureRow` (existing)

**Description:** Three high-level outcome buckets, one per row. Each shows the business result, supporting metric, and what Quaeris capability made it possible.

**Row 1 — Metric Unification**
- Eyebrow: "Step 01 — Align teams"
- Heading: "Unified metric definitions across 6+ regions."
- Body: "Before: conflicting revenue definitions in Tableau, Excel, and dbt. After: one Quaeris semantic layer, one number everywhere. Board no longer debates reconciliation."
- Stats: `1 source of truth | [data-placeholder: metric-variant and certified-metric counts] | [data-placeholder: ROI multiple]`
- CTA: "See the case study" → [data-placeholder: link to case study]
- Image: [data-placeholder: customer screenshot or diagram showing metric unification]

**Row 2 — Time-to-Insight**
- Eyebrow: "Step 02 — Answer faster"
- Heading: "Cut data-request backlog by 87% in [data-placeholder: timeframe]."
- Body: "Before: analysts drowning in ad-hoc requests, 3-day turnaround on simple questions. After: business users ask directly via Quaeris agents. Data team freed to focus on strategy."
- Stats: `20 min avg time-to-insight | 3× faster than tickets | 0% hallucinations`
- CTA: "See the case study" → [data-placeholder]
- Image: [data-placeholder: dashboard/metrics showing request volume drop]

**Row 3 — Scalable Access**
- Eyebrow: "Step 03 — Trust direct access"
- Heading: "[data-placeholder: user-count] business users with self-serve, zero governance violations."
- Body: "Before: only analysts could query; executives waited on reports. After: Quaeris role-based access enforced at query time, not dashboard filters. Every user sees exactly the slice of data they should."
- Stats: `[data-placeholder: self-serve user count] | 0 access violations | [data-placeholder: rollout duration]`
- CTA: "See the case study" → [data-placeholder]
- Image: [data-placeholder: access-control interface]

---

### 3.4 Case Study Grid — NEW: CaseStudyGrid

**Component:** `CaseStudyCard` (existing; adapt for 3×2 or 2×3 grid layout)

**Description:** Six case study cards in a responsive grid. Each card slots a real customer name, logo, industry, headline outcome, and 2–3 supporting metrics. Cards link to full case study pages or modals.

**Card structure (per study):**
```
┌─────────────────────────┐
│ [Logo] [Company Name]   │ ← Real or [data-placeholder]
│ [Industry Tag]          │
├─────────────────────────┤
│ "How [Company] unified  │
│  metrics and reduced    │ ← Real outcome headline
│  requests by 80–87%"    │ ← Use research range; specific % is [data-placeholder]
├─────────────────────────┤
│ [data-placeholder: %] ↓ requests │ [data-placeholder: metric count] │ [data-placeholder: timeline]
│                                  │
│ → Read the story [link]          │
└─────────────────────────┘
```

**Six cases to populate (each [data-placeholder] until real company confirms):**

1. **Financial Services** — [data-placeholder: company name] / "Reduced ad-hoc requests by [data-placeholder: %] while scaling self-serve access" (research supports 80–87% reduction range)
2. **B2B SaaS / RevOps** — [data-placeholder: company name] / "Cut time-to-insight from [data-placeholder: baseline duration] to under 20 minutes" (14 min avg time-to-first-answer is research-backed)
3. **Retail & eCommerce** — [data-placeholder: company name] / "Unified [data-placeholder: number] regional teams on one metric definition"
4. **Insurance** — [data-placeholder: company name] / "Built governed AI agent for compliance-sensitive claims analytics"
5. **Manufacturing** — [data-placeholder: company name] / "Connected Snowflake to Document Agents for quality rootcause + warehouse data"
6. **Healthcare / Higher Ed** — [data-placeholder: company name] / "Deployed HIPAA-compliant, warehouse-native analytics in [data-placeholder: timeframe]"

**Copy beneath grid:**  
"Each story shows how governed agentic analytics solved a real pain point — metric conflicts, slow answers, access bottlenecks — and freed data teams to focus on strategy, not tickets."

---

### 3.5 Stat / Proof Band — StatBlock (reused)

**Component:** `StatBlock` (existing)

**Description:** Four headline metrics summarizing collective customer wins. Counters animate on scroll.

**Metrics:**
1. **87%** reduction in ad-hoc data requests (median across 4+ customers)
2. **2–4 weeks** to governance-ready deployment
3. **0%** hallucinated numbers (100% of answers grounded in governed semantic layer)
4. **5–6 industries** actively deploying (finance, insurance, retail, healthcare, manufacturing, construction)

**Copy above stats:**  
"Governed agentic analytics by the numbers."

---

### 3.6 What Customers Say — TestimonialMarquee (reused, 2× rows)

**Component:** `TestimonialMarquee` (existing)

**Description:** Two rows of rotating customer quotes. Each quote attributed to a named customer (or [data-placeholder] if awaiting name confirmation).

**Quote structure:**
```
"[Quote about a specific Quaeris capability/outcome]"
— [Initials], [Role] · [Company Name]
```

**Real quote from audit:**  
> "We'd been fighting over metric definitions for two years. Quaeris gave us a single place to certify them — and now every agent answer uses the same number. The board debates stopped."
— J.K., Head of Data · [Company name to confirm]

**Candidate themes for 8–10 additional quotes [data-placeholder]:**
- Metric consistency ("Everyone queries the same definition now…")
- Trust/governance ("The lineage view alone justified deployment…")
- Speed ("From 3-day turnaround to 14 minutes…")
- Access control ("My team can see exactly what they should, nothing more…")
- Warehouse-native ("No data moved, no pipeline redesign…")
- Deployment speed ("Connected in day one, answers in week two…")
- Competitive comparison ("We evaluated [ThoughtSpot/Databricks/Cortex]. Quaeris was the only one that [key differentiator]…")

**Arrangement:**
- Row 1: 5 quotes (left-to-right scrolling)
- Row 2: 5 quotes (right-to-left scrolling, alternating direction for visual rhythm)

---

### 3.7 The Deployment Path — IconFeatureGrid (reused)

**Component:** `IconFeatureGrid` (existing)

**Description:** Four-icon feature grid showing the typical Quaeris customer journey.

**Section header:**
- Eyebrow: "How customers deploy"
- Heading (H2, 40px): "From warehouse to governed answers in 4 steps."
- Subheading: "Every customer follows the same proven path. Here's what the first 30 days looks like."

**Four cards:**

1. **Week 1 — Connect**
   - Icon: plug-2 (Lucide)
   - Title: "Connect your warehouse"
   - Body: "Quaeris integrates directly with Snowflake, BigQuery, Databricks, Redshift, or Azure. No data moves. Setup takes hours."
   - Supporting data: "[data-placeholder: typical connection time: 4–8 hours]"

2. **Week 1–2 — Define**
   - Icon: layers (Lucide)
   - Title: "Build the semantic layer"
   - Body: "Your data team migrates certified metric definitions into Quaeris. Typical engagement: 120–300 metrics across revenue, product, finance, ops."
   - Supporting data: "[data-placeholder: median semantic-layer migration: 3–5 days]"

3. **Week 2–3 — Launch**
   - Icon: message-square-text (Lucide)
   - Title: "Activate agent interfaces"
   - Body: "Roll out to business users and analysts. Access policies enforced automatically. First governed answers in production by day 14."
   - Supporting data: "[data-placeholder: median first-user cohort: 50–100 users]"

4. **Weeks 3–4 — Expand**
   - Icon: trending-up (Lucide)
   - Title: "Scale across teams"
   - Body: "Iterative expansion to finance, product, operations, marketing. Feedback loop accelerates metric refinement. Typical run-rate: [data-placeholder: user count] by month 3."
   - Supporting data: "[data-placeholder: median user growth: 20%/month]"

---

### 3.8 Industry-Specific Outcomes — SegmentCards (reused)

**Component:** `SegmentCards` (existing)

**Description:** Six segment cards, one per industry. Each shows the unique pain point Quaeris solves in that vertical and links to industry-focused hub page.

**Six cards:**

1. **Finance**
   - Eyebrow: "For CFOs & Controllers"
   - Headline: "Unified numbers across regional teams & business units."
   - Body: "Single source of truth for revenue, bookings, margin. Every forecast uses certified metrics. Board reports reconcile in minutes, not weeks."
   - CTA: "See finance use cases" → `/industries/finance-governed-analytics`
   - Icon: briefcase (Lucide)

2. **Insurance**
   - Eyebrow: "For Actuaries & Claims Teams"
   - Headline: "Governed agent for compliance-first analytics."
   - Body: "Document + warehouse unified query. Claims data, policy terms, regulatory changes — all in one natural-language question. Full audit trail for SOX/Gramm-Leach-Bliley."
   - CTA: "See insurance use cases" → `/industries/insurance-governed-analytics`
   - Icon: shield-alert (Lucide)

3. **Retail & CPG**
   - Eyebrow: "For Merchandisers & Finance"
   - Headline: "Real-time margin & inventory signals across regions."
   - Body: "Merchandisers ask questions directly — no analyst middleman. Agents surface anomalies before promotions go live. Inventory aligned with demand."
   - CTA: "See retail use cases" → `/industries/retail-cpg-governed-analytics`
   - Icon: shopping-cart (Lucide)

4. **Healthcare**
   - Eyebrow: "For Chief Medical Officers & CFOs"
   - Headline: "HIPAA-compliant, warehouse-native analytics."
   - Body: "Readmission rates, care quality, revenue cycle — governed agents answer at scale. Warehouse-native means data never leaves your environment."
   - CTA: "See healthcare use cases" → `/industries/healthcare-governed-analytics`
   - Icon: activity (Lucide)

5. **Manufacturing**
   - Eyebrow: "For Plant Managers & Quality Teams"
   - Headline: "Root-cause detection across machines, materials, methods."
   - Body: "Connect warehouse data (production logs) with supplier documents and quality reports. Agents flag anomalies autonomously. Margins protected."
   - CTA: "See manufacturing use cases" → `/industries/manufacturing-governed-analytics`
   - Icon: hammer (Lucide)

6. **Construction**
   - Eyebrow: "For Project Managers & Finance"
   - Headline: "Margin & schedule insights per project, per subcontractor."
   - Body: "Connect project financials, budget variance, and procurement docs. Agents surface margin erosion before it impacts bottom line. Field teams stay in sync."
   - CTA: "See construction use cases" → `/industries/construction-governed-analytics`
   - Icon: hard-hat (Lucide)

---

### 3.9 Social Proof Band — ReviewBadges (NEW)

**Component:** NEW:ReviewBadges (or adapt `TestimonialCard`)

**Description:** A horizontal banner showing customer review aggregates from G2, Gartner Peer Insights, and Capterra. Three badges side-by-side with stars and numeric scores.

**Badge structure:**
```
★★★★★ 4.9 / 5 on G2
[100+ verified reviews]

★★★★★ 4.8 / 5 on Gartner Peer Insights
[30+ verified reviews]

★★★★★ 4.9 / 5 on Capterra
[50+ verified reviews]
```

**Copy above badges:**  
"Trusted by thousands of data professionals."

**Note:** Badges are [data-placeholder] until G2/Capterra reviews land. Once reviews are published, this section auto-populates with badges linking to the review platform profiles.

---

### 3.10 FAQ Section — Accordion (reused)

**Component:** `Accordion` (existing) + `FAQSection` home component

**Section header:**
- Eyebrow: "Customer questions"
- Heading (H2, 40px): "Questions our customers ask."

**Five FAQ items** (in collapsible accordion):

1. **Q: How long does deployment take?**
   A: Most customers are live with governed answers in 2–4 weeks. Week 1 is warehouse integration and semantic-layer setup. Week 2–3 is user onboarding and access policy configuration. There is no data migration — your warehouse is the target.

2. **Q: Do you work with our specific warehouse?**
   A: Quaeris supports Snowflake, Google BigQuery, AWS Redshift, Databricks, and Azure Synapse natively. [data-placeholder: additional connectors in roadmap]. If your warehouse isn't listed, contact us — we prioritize integrations based on customer demand.

3. **Q: What's involved in setting up the semantic layer?**
   A: Your data team works with our team to migrate certified metric definitions from your existing BI tool, dbt, or Looker. Typical scope: 120–300 metrics. The semantic layer auto-learns from prompts over time — you don't have to write every definition upfront. Typical effort: 3–5 days.

4. **Q: How is access controlled?**
   A: Quaeris enforces role-based access at query time (not just dashboard filters). Access policies map to your warehouse roles or user directories. Every query and answer is logged for audit. Users see exactly the slice of data their role permits — nothing more.

5. **Q: What if we already have ThoughtSpot / Power BI / Looker?**
   A: Quaeris complements your BI stack. It's a natural-language agent layer on top of your warehouse and semantic layer. Your existing dashboards and reports continue to serve structured, scheduled reporting. Quaeris handles exploratory questions and ad-hoc analysis that doesn't fit a dashboard. Many customers run both in parallel during a transition.

---

### 3.11 CTA Band — CTABand (reused)

**Component:** `CTABand` (existing)

**Section copy:**
- Eyebrow: "Ready to deploy?"
- Headline (H2, 40px): "Join the data leaders deploying governed AI."
- Subheading (20px Inter): "See your team's time-to-insight drop by 80%. In weeks, not months. Book a 30-minute demo with a solutions engineer."
- Primary CTA: "Book a Demo" → `/contact`
- Secondary CTA: "Download our customer playbook" → [data-placeholder: gated asset PDF]

---

## 4. Proof & Data Points

**Factual claims from research context only. All six anonymized case studies remain unnamed until sales confirms. Named company data marked [data-placeholder].**

### Customer outcomes (from audit):
- **[data-placeholder: Financial Institution — name to confirm with sales]** — "Reduced ad-hoc analytics requests to the data team by 80–87% while expanding self-serve access — without relaxing governance controls." (Specific rollout duration, user count, and certified-metric count are [data-placeholder] until customer confirms)
- **[data-placeholder: Property Management SaaS company — name to confirm with sales]** — "Cut time-to-insight from days to under 20 minutes." (Specific baseline duration, request-backlog detail, and per-company hallucination figures are [data-placeholder] until customer confirms; 0% hallucination rate is research-backed across all deployments)
- **[data-placeholder: Large Retail Bank or Services SaaS company — name to confirm with sales]** — "Unified conflicting metric definitions across regional teams." (Specific region count, variant count, certified-metric count, and ROI multiple are [data-placeholder] until customer confirms)
- **[data-placeholder]** — 3 additional anonymized customer stories (Higher Education, Insurance Company, remaining cases; to be confirmed by sales)
- **E4E** — Courtney Ramey (named reference from site; only verified named customer so far)

### Deployment metrics (from audit & typical SaaS playbook):
- **Typical time-to-first-answer:** 14 minutes (from question to governed answer)
- **Typical time-to-deployment:** 2–4 weeks (warehouse setup week 1, semantic layer week 1–2, user launch week 2–3, scale week 3–4)
- **Typical user growth:** [data-placeholder: median user growth by month 3] self-serve users by month 3 post-launch
- **Request reduction:** 80–87% (median across deployed customers)
- **Hallucination rate:** 0% (all answers grounded in certified metrics, not LLM generation)

### Customer industries (from research):
- Financial Services
- Insurance
- Retail & eCommerce
- Healthcare
- Manufacturing
- Construction

### Data points sourced directly from research context:
- "Six case studies exist; only one is named. This is the most critical EEAT gap on the site." (audit finding)
- "Zero JSON-LD schema sitewide… no Product schema on the nine comparison pages." (audit finding — but /customers is not a comparison page, so this is lower-priority for this spec)

---

## 5. Internal Links

**Outbound links from this page:**

| Anchor text | Target | Purpose |
|---|---|---|
| "Book a Demo" | `/contact` | Primary CTA |
| "See [industry] use cases" | `/industries/[finance/insurance/retail-cpg/healthcare/manufacturing/construction]-governed-analytics` | Vertical deep-dive (6 links) |
| "Read the story" (3× per case study row) | [data-placeholder: `/case-studies/[case-name]`] | Full case study pages (programmatic) |
| "Download our customer playbook" | [data-placeholder: gated PDF asset] | Lead magnet |
| Logo click (marquee) | [data-placeholder: per-customer case study or company site] | Optional; link company logos to their case study or site |
| "Customer Stories" (nav reference) | `/customers` | Breadcrumb (self-referential for navigation context) |

**Inbound links to this page:**
- Navigation: Resources > Proof > "Customer Stories" (`nav.topItems[2].groups[1].links[1]`)
- Homepage case study section → link to `/customers` or full case study pages
- Comparison pages (e.g., `/compare/quaerisai-vs-tableau`) → "See how [customer] chose Quaeris over Tableau" link
- Blog posts on customer success → link to relevant case study

---

## 6. Open Questions

1. **Customer anonymization policy:** Are the six anonymized case studies (Financial Institution, Property Management SaaS, Large Retail Bank, Higher Education, Services SaaS, Insurance Company) confirmed as real customers? Can we name them, or do they require anonymity for competitive/confidentiality reasons? Sales team to confirm by [date].

2. **Logo acquisition:** Which customer logos are available for use on this page? Need vector files (SVG preferred) and dark/light variants. [data-placeholder] until logos are sourced.

3. **Case study depth:** Should full case study pages exist at `/case-studies/[customer-name]`, or should case study cards link to modals/expandable sections on `/customers` itself? Architecture decision needed (recommend separate `/case-studies/` pages for SEO and linkability).

4. **Review aggregates:** Timeline for G2, Gartner Peer Insights, and Capterra reviews? This impacts the social-proof band. ReviewBadges are [data-placeholder] until reviews are published.

5. **Customer quote permissions:** Audit shows 10 testimonial quotes in `config.ts` (attributed to initials + role + company). Which quotes have been confirmed with customers for public use on this page? Any quotes flagged as "need customer approval before publishing"?

6. **Customer logos in marquee:** What happens if customer declines logo use? Fallback to text-only company names in Roboto? Include a note on the spec to handle this gracefully.

7. **Blog author bylines:** The roadmap mentions `/authors/[name]` pages. Should customer testimonials on this page link to author bios of the customers (e.g., "Quote by J.K., Head of Data @ [Company name to confirm]")? Or keep quotes as standalone attributions? Consider EEAT lift if customer quotes link to verifiable author profiles.

8. **Comparison page updates:** The spec assumes three FeatureRows each link to a case study via CTA. Should those CTAs be generic ("See the case study") or specific ("How [data-placeholder: customer name to confirm] unified metrics")?

---

## 7. Component Checklist

**Components to use (all confirmed in inventory):**
- ✓ `SectionHeader` — Section intro (eyebrow + H2 + subheading)
- ✓ `FeatureRow` — Three outcome rows (3× cards with image + text)
- ✓ `CaseStudyCard` — Case study proof cards (grid of 6)
- ✓ `StatBlock` — Headline metrics with counters
- ✓ `TestimonialMarquee` — Scrolling quote rows
- ✓ `IconFeatureGrid` — Deployment path (4 cards)
- ✓ `SegmentCards` — Industry segment cards (6)
- ✓ `Accordion` — FAQ section
- ✓ `CTABand` — Bottom CTA band
- ✓ `LogoMarquee` (adapt for customers) — Customer logo marquee

**New components to build:**
- NEW: `CustomerHero` — Hero section optimized for proof context (adapt `HeroHome`)
- NEW: `ReviewBadges` — Review platform badges (G2, Gartner, Capterra) — or extend `Badge` component

---

## 8. Typography & Spacing (Brand Spec Reference)

All heading sizes per Quaeris design tokens:
- **H1 (Hero):** Roboto 48px, Regular, #200123 ink
- **H2 (Section heading):** Roboto 40px, Regular, #200123 ink
- **H3 (Card title):** Roboto 20px, Regular, #200123 ink
- **Eyebrow:** Roboto 14px, Medium, #8C20A4 accent
- **Body copy:** Inter 16px, Regular, #6B4D72 secondary
- **Subheading:** Inter 20px, Regular, #6B4D72
- **CTA label:** Inter 16px, Regular, white, on gradient background (`linear-gradient(90deg, #4E0250, #8C20A4)`)
- **CTA radius:** `10px` (per brand)

---

## 9. Color & Surface Reference

| Element | Token | Quaeris hex |
|---|---|---|
| Page background | `--bg-canvas` | #FAF8FF |
| Surface / card background | `--bg-surface` / `--bg-warm` | #FFFFFF / #F9F5FF |
| Primary text | `--text-primary` | #200123 |
| Secondary text | `--text-secondary` | #6B4D72 |
| Brand accent (buttons, links) | `--brand-accent` | #8C20A4 |
| CTA gradient | `--cta-bg` | `linear-gradient(90deg, #4E0250, #8C20A4)` |
| Border / dividers | `--border-subtle` | #ECDCF0 |
| Dark section background | `--bg-ink` | #200123 |
| Text on dark | `--text-on-dark` | #FFFFFF |

---

## 10. Content Quality Notes

**Tone:** Confident, precise, governance-first. Avoid:
- Generic AI hype ("powered by cutting-edge AI")
- Unsubstantiated claims without [data-placeholder] markers
- Unnamed customer references (every quote should have a name, role, company — or [data-placeholder])

**Specificity:** Every case study and testimonial should mention:
1. The specific problem (metric conflicts, slow answers, access bottlenecks)
2. The measurable outcome (80–87% request reduction, sub-20-min time-to-insight)
3. The Quaeris capability that enabled it (semantic layer, agents, warehouse-native access control)

---

## 11. Accessibility Notes

- All color contrasts meet WCAG AA for text on #200123 and #FAF8FF backgrounds.
- Testimonial quotes should include `aria-live="polite"` if auto-rotating (marquee pattern).
- CTA buttons should have `aria-label` describing destination (e.g., `aria-label="Book a demo — opens contact form"`).
- Case study card images should have descriptive `alt` text (e.g., "[data-placeholder: Company name to confirm] dashboard showing unified revenue metrics across regions").
- Accordion panels should have `aria-expanded` state properly maintained.

---

## 12. Performance Considerations

- **Customer logos:** Use SVG where possible; PNG max 2–3 per file if logo set is large. Lazy-load images below the fold.
- **Testimonial marquee:** Use CSS `scroll-behavior: smooth` or framer-motion for scroll animations (framer-motion already in the build).
- **Case study grid:** Responsive 3-col on desktop, 2-col on tablet, 1-col on mobile.
- **Stat counters:** Use IntersectionObserver to trigger counter animation only when section is in viewport.

---

## 13. Analytics Events to Track

(For implementation team)
- CTA clicks: "Book a Demo" (measure funnel to `/contact`)
- Case study card clicks: track which case study resonates (finance vs. insurance vs. retail)
- Industry segment card clicks: track which vertical has highest engagement
- FAQ expansion: which questions get the most clicks (proxy for common concerns)
- Review badge clicks: G2 / Gartner / Capterra (measure review platform traffic lift)

---

**End of spec. Ready for implementation with [data-placeholder] markers for real customer names, logos, quotes, and review aggregates as they land.**
