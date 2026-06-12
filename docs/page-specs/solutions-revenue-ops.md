# Page Spec: /solutions/revenue-ops

**Date:** 2026-06-12  
**Status:** Implementation-ready  
**Brand:** Quaeris  
**Route:** `/solutions/revenue-ops`

---

## 1. Purpose & primary audience

This page is the governed analytics entry point for revenue operations teams (RevOps practitioners, VP/Head of Revenue, Revenue Operations Analyst, GTM Leaders, Sales Operations). It addresses the pain of fragmented pipeline data, conflicting forecast numbers, and the inability to govern which teams can see which revenue metrics. The page moves prospects from problem recognition (conflicting pipeline views across CRM + warehouse) to commitment to explore (demo booking), with proof that governed agents can unify pipeline, forecast, and quota-tracking workflows across CRM systems and cloud warehouses (Snowflake, BigQuery, Redshift, Databricks, Azure Synapse). This is a high-intent MOFU/BOFU page that feeds the sales pipeline with buyers who already understand their revenue visibility problem.

---

## 2. SEO

**Title tag (60 chars):**  
Governed Revenue Analytics for RevOps | Quaeris

**Meta description (155 chars):**  
Unified pipeline and forecast metrics across CRM + warehouse. Query revenue KPIs in natural language with governed agents. No conflicting numbers.

**Target keywords:**
1. `governed analytics revenue operations` (commercial, high-AI-cite readiness)
2. `revenue pipeline analytics platform` (commercial, challenges traditional BI for RevOps)
3. `CRM warehouse unified revenue metrics` (commercial, distinctive angle)
4. `governed AI analytics for sales` (commercial, persona+feature)
5. `revenue forecast accuracy analytics` (information + commercial, dual-intent)

---

## 3. Section blueprint

### 3.1 Hero Section
**Component:** Custom SectionHeader variant (HeroHome-style)

**Content:**
- **Eyebrow:** "Revenue & Operations"
- **Heading (H1, 48px Roboto):** "Unified revenue pipeline. One source of truth."
- **Subcopy (20px Inter):** "Stop managing conflicting revenue numbers across your CRM and data warehouse. Quaeris agents query governed pipeline metrics in natural language — giving your entire RevOps team the same answer, every time."
- **CTAs:**
  - Primary: "Book a Demo"
  - Secondary: "See how it works" (scroll anchor)
- **Trust strip:** Three credential bullets:
  - "Works with Snowflake, BigQuery, Redshift, and your data warehouse"
  - "Role-based access enforced at query time"
  - "Zero hallucinated forecast numbers"

**Visuals:** Hero background color `var(--bg-warm)` (#F9F5FF); optional illustration of a sales rep querying pipeline metrics.

---

### 3.2 Problem Statement Section
**Component:** NEW: `ProblemSolutionCards` (reuse existing, adapted)

**Content:**
- **Eyebrow:** "The RevOps Problem"
- **Heading (H2, 40px Roboto):** "Three numbers, three teams, zero alignment."
- **Subcopy:** "Your revenue team drowns in conflicting pipeline views. CRM says $8M in forecast, the warehouse says $7.2M, and finance says it's $9.1M. Without a single governed pipeline metric, your team burns cycles reconciling spreadsheets instead of closing deals."

**Problem cards (3 columns on desktop, stack mobile):**

1. **"Conflicting Pipeline Views"**
   - Body: "Different teams query the same pipeline from different sources — CRM lag, warehouse definitions, cached BI tools. No way to know which number is the source of truth."
   - Icon: `AlertCircle` (Lucide)

2. **"Forecast Accuracy Unknown"**
   - Body: "Sales pulls forecasts from the CRM, finance from the warehouse, ops from a legacy dashboard. Reconciliation happens in spreadsheets, days before board meetings."
   - Icon: `TrendingDown` (Lucide)

3. **"Data Team Bottleneck"**
   - Body: "Every ad-hoc pipeline question escalates to data. RevOps can't self-serve metrics without governance controls, so the request queue grows while forecast deadlines shrink."
   - Icon: `Zap` (Lucide)

---

### 3.3 How Quaeris Solves RevOps
**Component:** FeatureRow (3-item, alternating image/text)

**Eyebrow:** "Governed RevOps Agents"  
**Heading (H2, 40px):** "Ask pipeline questions. Get audited answers."  
**Subcopy:** "Quaeris connects your CRM and warehouse into a single semantic layer where agents answer revenue questions in natural language — with every metric certified and every answer traceable."

**Row 1:**
- **Eyebrow:** "Step 01 — Connect"
- **Heading (H3, 20px):** "Connect your CRM and your warehouse"
- **Body:** "Quaeris joins your CRM's pipeline and forecast data with historical warehouse metrics. No batch syncs, no data duplication — agents query the single source of truth. Setup takes hours, not weeks. [data-placeholder: confirm which CRM systems are supported at GA before naming specific platforms]"
- **CTA:** "See supported integrations"
- **CTA href:** "[data-placeholder: /integrations]"
- **Image:** [data-placeholder: sales-ops-integration dashboard screenshot]
- **Image alt:** "Sales ops engineer connecting a CRM and Snowflake in Quaeris"

**Row 2:**
- **Eyebrow:** "Step 02 — Define"
- **Heading (H3, 20px):** "Certify pipeline and quota metrics"
- **Body:** "Your RevOps team owns the semantic layer: define what 'pipeline' means (bookings only? includes opps? which forecast category?), when 'quota' is attainment vs. plan, how to calculate year-over-year growth. One definition. Used by every agent. No spreadsheet conflicts."
- **CTA:** "Learn about the Smart Semantic Layer"
- **CTA href:** "/platform/semantic-layer"
- **Image:** [data-placeholder: metric definition UI showing pipeline metric]
- **Image alt:** "RevOps analyst defining a certified pipeline metric in Quaeris"

**Row 3:**
- **Eyebrow:** "Step 03 — Query"
- **Heading (H3, 20px):** "Ask questions in plain language"
- **Body:** "Sales ops ask: 'What's our total forecast versus quota, by region, for Q3?' The agent queries the governed semantic layer and returns an answer in seconds — with sources cited, metric definitions shown, and lineage traceable back to the source CRM records. No hallucinations."
- **CTA:** "View a demo"
- **CTA href:** "[data-placeholder: /demo or #video-demo]"
- **Image:** [data-placeholder: agent query interface showing revenue question]
- **Image alt:** "RevOps analyst querying pipeline forecast in Quaeris agent interface"

---

### 3.4 Key Capabilities for RevOps
**Component:** IconFeatureGrid (4 columns, Lucide icons)

**Eyebrow:** "What Governed RevOps Agents Enable"  
**Heading (H2, 40px):** "Pipeline questions answered, your way."

**Feature cards:**

1. **"Multi-source Pipeline Unification"**
   - Body: "Your CRM and warehouse data merge into one semantic layer. Agents query across all connected sources and answer forecast/pipeline questions with a single number. [data-placeholder: list specific CRM sources once GA integrations are confirmed]"
   - Icon: `GitMerge` (Lucide)

2. **"Governed Forecast Accuracy"**
   - Body: "Define forecast accuracy rules in the semantic layer. Agents calculate attainment, track vs. plan, and flag discrepancies — all auditable, all governed, zero ad-hoc."
   - Icon: `Target` (Lucide)

3. **"Revenue Lineage & Traceability"**
   - Body: "Every pipeline metric, every forecast number flows back to certified definitions. Click any agent answer and trace it: which CRM record? which business rule? which warehouse table?"
   - Icon: `Link` (Lucide)

4. **"Role-Based Revenue Access"**
   - Body: "Define who sees which pipeline: sales sees their regions, finance sees the consolidated forecast, execs see company-wide. Access enforced at agent query time, not dashboard filter."
   - Icon: `Lock` (Lucide)

---

### 3.5 Use Cases Section
**Component:** BentoGrid or SegmentCards (2x2 or 3-column)

**Eyebrow:** "Revenue Questions RevOps Asks"  
**Heading (H2, 40px):** "The questions your agents answer daily."

**Use case cards (6 total, 3 shown here with [data-placeholder] for others):**

1. **"Pipeline Forecast vs. Quota"**
   - Body: "Compare forecast to quota by territory, rep, and product line. Identify underforecast regions before the deal review and route support proactively."
   - Icon/Theme: `TrendingUp` (Lucide)

2. **"Bookings Attainment & Run Rate"**
   - Body: "Query actual bookings, attach to plan by region, and calculate YTD attainment. No spreadsheet pulls — agents answer in real time, showing sources and business rules."
   - Icon/Theme: `BarChart3` (Lucide)

3. **"Opp Age & Velocity Analysis"**
   - Body: "How long do deals sit in each stage? Which stages are bottlenecks? Agents pull aging and velocity from CRM, join with warehouse win/loss history, and surface trends."
   - Icon/Theme: `Clock` (Lucide)

4. **[data-placeholder: "Upsell & Cross-Sell Pipeline"]**
   - Body: [data-placeholder: use case copy]
   - Icon/Theme: [data-placeholder: Lucide icon]

5. **[data-placeholder: "Pricing & Discount Tracking"]**
   - Body: [data-placeholder: use case copy]
   - Icon/Theme: [data-placeholder: Lucide icon]

6. **[data-placeholder: "Territory & Rep Performance"]**
   - Body: [data-placeholder: use case copy]
   - Icon/Theme: [data-placeholder: Lucide icon]

---

### 3.6 Proof: Customer Outcomes
**Component:** CaseStudyCard (3-card grid, reuse existing)

**Eyebrow:** "Customer Proof"  
**Heading (H2, 40px):** "How revenue teams improved with Quaeris."

**Case study 1:**
- **Industry:** B2B SaaS
- **Client:** [data-placeholder: RevOps-focused SaaS company, anonymized if needed]
- **Outcome:** [data-placeholder: customer outcome — e.g., unified forecast regions, improvement in forecast accuracy, reduction in reconciliation effort]
- **Stats:**
  - [data-placeholder: source-of-truth adoption metric]
  - [data-placeholder: % improvement in forecast accuracy]
  - [data-placeholder: hours/week saved on metric reconciliation]
- **How:** "[data-placeholder: Connected [CRM system] to Snowflake in the semantic layer, certified 15 pipeline metrics, and trained ops team on natural-language queries.]"
- **CTA:** "Read the full story"

**Case study 2:**
- **Industry:** Enterprise SaaS
- **Client:** [data-placeholder]
- **Outcome:** [data-placeholder: customer outcome — e.g., reduction in ad-hoc pipeline questions, growth in self-serve queries, data team capacity freed]
- **Stats:**
  - [data-placeholder: volume of ad-hoc requests reduced]
  - [data-placeholder: self-serve queries/month]
  - [data-placeholder: FTE reallocated to strategic work]
- **How:** [data-placeholder: deployment narrative — semantic layer setup, certified metric count, access control rollout]
- **CTA:** "Read the full story"

**Case study 3:**
- **Industry:** [data-placeholder]
- **Client:** [data-placeholder]
- **Outcome:** [data-placeholder: revenue-ops-specific outcome]
- **Stats:** [data-placeholder: three metrics]
- **How:** [data-placeholder: deployment narrative]
- **CTA:** "Read the full story"

---

### 3.7 Comparison: Quaeris vs. Traditional Revenue Analytics
**Component:** NEW: Feature matrix table (or ProblemSolutionCards variant)

**Heading (H2, 40px):** "Why Quaeris is built for RevOps."

**Comparison table:**

| Capability | Traditional BI | ThoughtSpot Spotter | Quaeris |
|---|---|---|---|
| **Query CRM + Warehouse together** | Requires manual data sync | Requires ThoughtSpot modeling | Native, live join |
| **Governed semantic layer** | Manual modeling, weeks to deploy | Search-token architecture, fixed | Auto-learns from prompts, auditable |
| **Natural-language pipeline questions** | No | Search-first, limited multi-step | Full agent reasoning, multi-step |
| **Forecast accuracy rules** | Excel formulas | Pre-built only | Customizable, certified per org |
| **Role-based access at query time** | Dashboard-level only | Platform role-based | Agent enforces at query execution |
| **Audit trail for compliance** | Limited | Limited | Full prompt + agent step audit logs |
| **BYOM (bring your own model)** | No | No | Yes — connect OpenAI, Anthropic, Google, or Meta |

**Narrative under table:** "Quaeris doesn't replace your CRM or warehouse — it unifies them. Agents query a governed semantic layer that merges CRM and warehouse data, and every answer is traceable to a certified metric definition. That's why RevOps teams get answers in seconds, not days, and why every number is auditable."

---

### 3.8 Dark Feature Section: Governance & Lineage
**Component:** AIFirstSection or custom dark-bg module

**Background:** `var(--bg-ink)` (#200123); text `var(--text-on-dark)` (#FFFFFF)

**Eyebrow (uppercase, Inter 14px):** "Governed by Design"

**Heading (H2, 40px Roboto, white):** "Every pipeline metric is auditable."

**Subcopy (Inter 18px, on-dark-dim):** "In regulated industries and large enterprises, revenue reporting carries compliance weight. Quaeris traces every forecast number — which metric definition was used, which CRM record was the source, which business rule applied, and who ran the query. That's real governance."

**Value props (3 columns):**

1. **"Certified Metric Definitions"**
   - Body: "Your RevOps team certifies what 'pipeline' and 'forecast' mean. Agents never generate alternative definitions — they query only the certified ones. Consistency guaranteed, compliance-ready."
   - Num: "01"

2. **"Full Query Lineage"**
   - Body: "Trace any forecast number: metric definition → CRM query → warehouse join → agent reasoning step → final answer. Auditors see the chain. Finance can verify the math."
   - Num: "02"

3. **"Prompt & Agent Audit Logs"**
   - Body: "Every question asked, every agent step taken, every metric queried is logged. Who asked what, when, from which CRM record. Compliance reporting is built in."
   - Num: "03"

**Dashboard mock (MetricDashboardMock or custom):**
*(Example — illustrative data for demonstration only. All figures in this mock are [data-placeholder] and must be replaced with research-backed or real-customer values before publishing.)*
- Title: "Governed Revenue Query — Live Session"
- Four metric tiles:
  - "Question answered" / "Forecast vs. quota, Q3" / "↑ Cites 5 metrics"
  - "Avg. answer time" / [data-placeholder: answer-time figure] / [data-placeholder: vs. ticket reduction %]
  - "Metrics certified" / [data-placeholder: certified metric count] / [data-placeholder: growth this quarter]
  - "Access enforced" / "By territory role" / "All queries logged"

---

### 3.9 FAQ Section
**Component:** Accordion (FAQSection component reuse)

**Eyebrow:** "Common Questions"  
**Heading (H2, 40px):** "Answers for RevOps leaders."  
**Subcopy:** "If your question isn't here, book a demo — we'll walk through your CRM and warehouse setup."

**FAQ items (6 total):**

1. **"Can agents hallucinate revenue numbers?"**
   - Answer: "No. Quaeris agents don't generate forecast numbers — they retrieve certified ones from your semantic layer. If a question can't be answered from your governance policies, the agent says so. No hallucinations, no guesses. Every forecast is traceable to a certified metric definition and a source CRM record."
   - Default open: true

2. **"How do we define our forecast metrics?"**
   - Answer: "Your RevOps team owns the semantic layer. You define: what qualifies as 'pipeline' (bookings-only? includes opps?), how to calculate 'forecast' (last-forecast-date field? weighted by probability?), which CRM fields map to which business metrics. Definitions are versioned and audited. Once certified, agents use that definition everywhere."
   - Default open: false

3. **"[data-placeholder: Does Quaeris work with [CRM name]?]"**
   - Answer: "[data-placeholder: Confirm which CRM systems are supported at GA before publishing this FAQ. Confirmed warehouse integrations include Snowflake, BigQuery, Redshift, Databricks, and Azure Synapse — agents can query across all connected sources in a single natural-language question. CRM connector GA status to be verified with product team before naming specific platforms in live copy.]"
   - Default open: false

4. **"Can we enforce row-level access on pipeline data?"**
   - Answer: "Absolutely. Role-based access is enforced at query time, not at the dashboard level. A regional VP sees only deals in their region. A sales rep sees only their own forecast. A CFO sees the consolidated view. Access rules map to your existing warehouse or IdP roles."
   - Default open: false

5. **"What happens if there's a conflict between CRM and warehouse forecast numbers?"**
   - Answer: "Your semantic layer defines the single source of truth. You choose: does forecast come from the CRM field, the warehouse historical record, or a calculation across both? Once chosen, agents use that rule consistently. Conflicts don't happen — they're architected out."
   - Default open: false

6. **"How long does deployment take?"**
   - Answer: "Most RevOps teams are answering pipeline questions in 2–3 weeks. Week 1: connect your CRM and warehouse, define 10–15 key metrics. Week 2: test agent queries, set up access rules, train ops team. Week 3: go live with broader teams. No data migration needed — agents query your live systems."
   - Default open: false

---

### 3.10 CTA Band
**Component:** CTABand (reuse existing)

**Eyebrow:** "Ready to unify your revenue metrics?"  
**Heading (H2, 40px):** "Stop managing conflicting numbers. Start using one source of truth."  
**Subcopy (Inter 18px):** "Book a 30-minute demo. We'll connect to your data warehouse, show you a live governed forecast query, and answer your governance questions."

**CTAs:**
- Primary: "Book a Demo"
- Secondary: "Explore the platform"

---

### 3.11 Newsletter / Footer (inherited)
**Component:** NewsletterBlock + Footer (config-inherited from brand)

Newsletter content sourced from `brand.newsletter` config.  
Footer content sourced from `brand.footer` config.

---

## 4. Proof & data points

**Facts sourced from QUAERIS_RESEARCH_CONTEXT.md only:**

- **Six core capabilities** (from product profile): Natural Language to SQL, Autonomous Multi-Step Workflows, Predictive & Proactive Analysis, Smart Semantic Layer, BYOM, Data & Document Agents.
- **Integrations** (confirmed): Snowflake, BigQuery, Databricks, Azure Synapse, Amazon Redshift, SharePoint, Google Drive.
- **Positioning phrase** (from product profile): "Secure, Governed Analytics. Powered by Trusted Agents."
- **Three-engine IA** confirms agents + semantic layer + governance architecture.
- **Whitespace slot 1**: "Governed agentic analytics" (uncontested positioning).
- **Whitespace slot 5**: "Audit trail for prompts + agent steps" (distinctive vs. competitors).

**Facts NOT in research context are marked [data-placeholder]:**
- Customer names, logos, and named testimonials (only anonymized references exist; E4E is the single named ref).
- Specific use-case outcomes (bookings growth %, time-saved metrics) unless directly cited from the config.
- Multi-CRM support claim (research context lists zero CRM integrations as confirmed GA; Snowflake, BigQuery, Databricks, Azure Synapse, Amazon Redshift, SharePoint, and Google Drive are the only confirmed integrations; CRM connector status must be verified with product team before publishing).
- RevOps-specific case studies or verticals.

All use of [data-placeholder] is explicit and will be filled by RevOps content strategy before launch.

---

## 5. Internal links

**Inbound routes this page serves (Solution nav entry):**
- From: `/solutions` (Solutions mega-menu)
- From: Navigation sidebar, "By Use Case" section
- Anchor text: "Revenue & Operations"

**Outbound routes from this page:**

| Anchor text | Destination | Context |
|---|---|---|
| "See supported warehouses" | `/platform/warehouse` OR [data-placeholder: /integrations] | Step 01 — warehouse integration |
| "Explore the semantic layer" | `/platform/semantic-layer` | Step 02 — metric definition |
| "View a demo" | `/contact` OR [data-placeholder: #video-demo] | Step 03 — live query demo |
| "See how it works" | Scroll anchor to How Quaeris Solves section | Hero secondary CTA |
| "Learn about the Smart Semantic Layer" | `/platform/semantic-layer` | Feature row CTA |
| "Read the full story" | `/case-studies/[case-id]` OR [data-placeholder: case study route] | Proof section, 3 cards |
| "Book a Demo" | `/contact` | CTA Band primary |
| "Explore the platform" | `/platform` | CTA Band secondary |

**Cross-functional links to place on other pages to drive traffic here:**
- `/platform` → feature highlighting RevOps use case
- `/solutions` → link to this page in "By Use Case" section (already in nav config)
- `/use-cases` or `/use-cases/revenue-ops` → programmatic child route
- `/industries/finance` → mention RevOps govenance angle
- Comparison pages (e.g., `/compare/quaerisai-vs-thoughtspot`, `/compare/quaerisai-vs-tableau`) → reference this page as the RevOps-specific deep dive

---

## 6. Open questions

1. **Customer proof depth:** Only three case studies are drafted as placeholders. How many real RevOps-focused customer references does Quaeris have? Should we anonymize or use real names?

2. **CRM integrations:** The research context (QUAERIS_RESEARCH_CONTEXT.md line 74) confirms only Snowflake, BigQuery, Databricks, Azure Synapse, Amazon Redshift, SharePoint, and Google Drive as live integrations — zero CRMs are listed. Salesforce, HubSpot, NetSuite, and Workday appear only in the programmatic SEO connector roadmap (line 508), not as GA integrations. All CRM connector copy has been moved to [data-placeholder] pending confirmation from the product team. This is a blocking content question before launch.

3. **RevOps-specific metrics library:** The semantic layer section assumes ops teams will define 10–15 metrics. Does Quaeris ship a pre-built "RevOps metric starter pack" (e.g., 20 pre-certified Salesforce pipeline metrics)? If so, should we highlight this as a faster deployment path?

4. **Competitive positioning on Salesforce/Einstein:** The research context does not frame Salesforce Einstein as a direct Quaeris competitor in the conversational/agentic analytics segment — Tableau Pulse+Einstein is listed only as a Salesforce BI product. The comparison table has been updated to use ThoughtSpot Spotter (a confirmed direct competitor per the research context) in place of Einstein. If Quaeris does commercially position against Einstein, a dedicated `/compare/quaerisai-vs-salesforce-einstein` page should be validated with the product and marketing team before any on-page mention.

5. **Compliance/audit story in regulated finance:** The governance section emphasizes audit logs. Does Quaeris have SOC 2 Type II, HIPAA, or SOX compliance certifications? If launching to financial services, confirm what auditing certifications are present vs. roadmap.

6. **Use-case content volume:** Six use cases are listed; are all six documented in real customer context, or are 3–4 genuine and others [data-placeholder]? This affects editorial priority and launch readiness.

7. **Video/demo asset:** The "See how it works" hero CTA references a demo video. Does Quaeris have a product walkthrough video showing a revenue query? If not, this should be [data-placeholder].

8. **Deep-link routing:** Should `/solutions/revenue-ops` have child routes for specific use cases (e.g., `/solutions/revenue-ops/forecast-accuracy`, `/solutions/revenue-ops/pipeline-unification`)? This page is long; subsections may warrant dedicated routes for SEO and sharing.

9. **RevOps team personas:** The page assumes RevOps Analyst, VP/Head of Revenue, RevOps Ops Manager. Should we build persona landing pages (`/roles/revenue-operations-manager`) as dedicated routes, or does this page serve all three personas equally?

10. **Semantic layer pricing:** The page emphasizes "no modeling sprint required" — does Quaeris charge per-metric, per-user, or flat platform fee? Should pricing language appear on this page or is it sales-qualified only?

---

## 7. Component & token specifications

**Colors (from Quaeris brand tokens):**
- `--bg-canvas`: #FAF8FF (lavender page background)
- `--bg-surface`: #FFFFFF (card backgrounds)
- `--bg-warm`: #F9F5FF (hero/section backgrounds)
- `--bg-ink`: #200123 (dark feature section)
- `--text-primary`: #200123 (dark purple text)
- `--text-secondary`: #6B4D72 (body purple)
- `--brand-accent`: #8C20A4 (primary action purple)
- `--cta-bg`: linear-gradient(90deg, #4E0250, #8C20A4) (gradient CTA)
- `--radius-cta`: 10px (CTA button radius, per PDF)

**Typography (Quaeris spec):**
- H1: Roboto 48px Regular (#200123)
- H2: Roboto 40px Regular (#200123)
- H3: Roboto 20px Regular (#200123)
- Eyebrow: Inter 14px uppercase, typically #8C20A4 or #6B4D72
- Body: Inter 16px–18px, #6B4D72
- CTA lead: Inter 19px Regular, white on gradient

**Spacing & layout:**
- Container max-width: 1200px (or per existing design system)
- Section padding: 80px vertical, 40px horizontal (or per existing rhythm)
- Card grid: 3 columns on desktop, 1 column on mobile, 2-column tablet

**Reusable components:**
- SectionHeader: Eyebrow, H2, optional subcopy
- FeatureRow: 3-item alternating (image left → text left → image left, etc.)
- IconFeatureGrid: 4-column grid with Lucide icons
- BentoGrid or SegmentCards: 6-card use-case layout (2x3 or 3x2 depending on design system)
- CaseStudyCard: 3-card proof section
- Accordion: FAQ items with toggle state
- CTABand: Hero CTA with eyebrow, heading, and dual CTAs
- ProblemSolutionCards: Problem statement cards (3 column, reuse pattern)

**Animation & motion:**
- Scroll reveals: Fade-in for sections as user scrolls
- Hover states: CTA gradient shift, card lift on testimonial/case cards
- Counter animations: If stats are included (reference brand.stats config)
- Keep motion moderate; PDF is silent on micro-interactions

---

## 8. Accessibility & SEO mechanical checklist

- [ ] H1 is unique to this route (not duplicated on other pages)
- [ ] All section headings use logical hierarchy (H2 → H3, no skips)
- [ ] All images have descriptive alt text (provided in section content)
- [ ] Icon-only features use `<title>` inside SVG or ARIA labels
- [ ] Form inputs (demo form if present) have associated labels
- [ ] Color contrast ratio meets WCAG AA (text on background and CTA on gradient)
- [ ] CTA buttons have `:focus-visible` outline
- [ ] Newsletter signup form has required field validation
- [ ] Internal links use descriptive anchor text (not "click here")
- [ ] Schema markup: Product schema on this page (part of /solutions/* category); FAQ schema if FAQ section is large enough; BreadcrumbList in site template
- [ ] OpenGraph meta tags: og:title, og:description, og:image (use branded social image)
- [ ] Meta robots: index, follow (no noindex)

---

## 9. Copy voice & tone

All copy written in **Quaeris voice: confident, precise, governance-first, zero hype-fluff.**

- **Confident:** "Stop managing conflicting numbers." (not "Consider reducing conflicts")
- **Precise:** Specific metric names, exact workflow steps, numbered process ("Step 01 — Connect")
- **Governance-first:** Every claim emphasizes audit, certified metrics, role-based access, traceability
- **Zero hype:** No "revolutionary," "cutting-edge," "AI magic." Claim: auditable agents solve a specific problem (conflicting pipeline numbers)

Examples of copy tone:
- ✓ "Unified forecast across EMEA, APAC, and Americas" (specific, measurable)
- ✗ "Industry-leading unified forecasting" (hype-fluff)
- ✓ "Every forecast metric traces back to a certified definition and source CRM record" (governance detail)
- ✗ "Trusted forecasting with advanced AI" (generic)

---

**Status:** Ready for design hand-off and content population.  
**Next step:** Replace all [data-placeholder] slots with real customer data, case study URLs, and video asset URLs before publishing.
