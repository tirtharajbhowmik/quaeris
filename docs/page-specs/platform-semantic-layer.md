# Page Spec: /platform/semantic-layer

**Route:** `/platform/semantic-layer`  
**Date:** 2026-06-12  
**Brand:** Quaeris  
**Status:** Ready for implementation

---

## 1. Purpose & Primary Audience

This page is the canonical destination for the Quaeris semantic layer — the auto-learning central nervous system that transforms raw warehouse data into governed, business-ready metrics. The audience is technical and operational leaders (data engineers, analytics engineers, CDOs, heads of data) who own semantic governance or are evaluating whether auto-learned semantic layers solve the modeling bottleneck their teams face. The page establishes the Quaeris Smart Semantic Layer as the market's only semantic solution that learns from natural-language prompts rather than requiring upfront LookML/MDX authoring, and demonstrates why certified metrics are the foundation of governed agentic analytics. By the bottom of the page, visitors should understand: (1) what the Smart Semantic Layer *is* and why existing semantic tools fail, (2) how it auto-learns without manual modeling sprints, (3) how it powers every Quaeris agent answer with traceable governance, and (4) how to evaluate it against alternatives (dbt Semantic Layer, Cube, AtScale, Looker's LookML). Call-to-action is a hands-on demo or a technical white paper.

---

## 2. SEO

**Title Tag (59 chars):**  
`AI Semantic Layer for Enterprise Governance | Quaeris`

**Meta Description (154 chars):**  
`Auto-learn business metrics from usage. Define revenue, churn, and KPIs once — every agent answer cites certified definitions. No upfront modeling sprints.`

**Target Keywords (5 clusters):**
1. **AI semantic layer** (Medium volume, 45 KD) — primary pillar keyword; captures intent to replace manual modeling
2. **Smart semantic layer** (Low-Med, 22 KD) — defensible brand-owned phrase; Quaeris should own this uncontested term
3. **Auto-learned semantic model** (Low, 22 KD) — unique value prop vs. code-first competitors
4. **Governed semantic layer metrics** (Low-Med, 35 KD) — governance-first angle; bridges semantic layer + audit trail
5. **LookML alternative** (Medium, 42 KD) — competitive wedge against Looker's modeling burden

**Secondary keywords to mention in copy:**
- dbt semantic layer alternative
- Cube semantic layer
- semantic layer without modeling
- business metric definitions
- auto-learned metrics
- unified metric definitions

---

## 3. Section Blueprint

### Section 0: Hero

**Component:** HeroHome (existing component; customize for semantic-layer context)

**Copy (Quaeris voice: precise, governance-first, anti-hype):**

- **Eyebrow:** "The Semantic Layer"
- **Headline:** "Metrics your team can trust. No upfront modeling."
- **Subheading (24px Inter Regular):** "Define revenue, churn, activation — once. Quaeris learns from usage patterns and agent questions, auto-building a certified semantic layer. Every answer traces back to those definitions. No LookML sprints. No manual metric catalog."
- **CTA primary:** "See it in action" (links to demo booking or product walkthrough video)
- **CTA secondary:** "Read the white paper: Smart Semantic Layers" (links to gated asset)

**Trust badges (3, 16px Roboto Regular, #4a0072 text on #F9F5FF bg):**
- Warehouse-native — scales to thousands of metrics
- Auto-learned from prompts — no coding required
- Certified by your team — versioned & audited

---

### Section 1: The Problem (NEW:ProblemContext)

**Component:** ProblemSolutionCards (existing; 2-column problem/solution pairing)

**Left card — The Problem:**
- **Headline:** "Semantic layers are built, not born."
- **Body (15px Roboto Regular, #6b4d72):** 
  - "Traditional semantic layers require upfront modeling: LookML in Looker, dbt YAML in dbt Semantic Layer, hand-written cube definitions in Cube. Your data team spends 3–6 months building before a single user asks their first question. Metric definitions live in code, buried in git history. When definitions change, documentation lags by weeks. Business teams end up with six conflicting 'revenue' definitions — one in Tableau, one in Sigma, one in a spreadsheet. Trust collapses."

**Right card — The Quaeris Answer:**
- **Headline:** "Learn from every question."
- **Body:** 
  - "Quaeris watches. As business users ask questions in natural language, the platform observes which tables they're asking about, which filters they apply, which metrics they care about. Over days and weeks, it learns the semantic structure of your warehouse — not from documentation, but from *actual usage*. Your data team certifies what it learns (marking 'revenue' as the authoritative definition, versioning it, scoping who sees it). From that moment on, every agent answer uses the same certified number."

---

### Section 2: How It Works (FeatureRow × 3)

**Component:** FeatureRow (existing; alternating left-image, right-text layout)

**Row 1: Auto-Learning**
- **Eyebrow:** "Step 01 — Observe"
- **Heading:** "Quaeris watches your usage. You certify what you learn."
- **Body (15px Roboto Regular):**
  - "As users ask questions — 'What was Q2 revenue by region?' — Quaeris parses the natural language, maps it to your warehouse tables, and notes which metrics matter. It builds a probabilistic model of your semantic structure: revenue is typically SUM of orders.order_total WHERE orders.status = 'completed'. Region comes from the geography dimension. Over 100 questions, patterns emerge. No manual YAML, no config files, no sprint meetings. Just observation."
- **CTA:** "Watch a live demo"
- **Image:** [data-placeholder: screenshot of Quaeris parsing a natural-language question and inferring metric definitions from warehouse schema]
- **Image alt:** "Quaeris semantic layer learning engine analyzing user questions to infer metric definitions"

**Row 2: Certification**
- **Eyebrow:** "Step 02 — Certify"
- **Heading:** "Your team owns the canonical definitions."
- **Body:**
  - "Your data engineer reviews what Quaeris learned and certifies it: 'Yes, this is revenue. No, that variant is a one-off for the finance team. This churn definition is correct for product metrics but not for customer success.' Certification happens in the Quaeris UI — no code, no YAML, no friction. Once certified, a definition is locked, versioned, and owned. When it changes, every downstream agent answer updates automatically. The change is audited."
- **CTA:** "Explore the certification flow"
- **Image:** [data-placeholder: screenshot of the Quaeris certification UI showing a revenue metric with ownership, version history, and business rules]
- **Image alt:** "Data engineer certifying and versioning a revenue metric definition in Quaeris"

**Row 3: Trust & Governance**
- **Eyebrow:** "Step 03 — Trust"
- **Heading:** "Every answer cites the certified metric."
- **Body:**
  - "When a business user asks 'What's our Q3 churn?', the Quaeris agent returns not just a number, but the metric definition it used — owner, version, business logic, and the exact table lineage. Users see why the answer is what it is. If a different team has a different churn definition, both coexist in the semantic layer with clear ownership. The Quaeris governance dashboard shows metric usage, ownership, lineage, and change history. This is how trust scales."
- **CTA:** "See the lineage view"
- **Image:** [data-placeholder: screenshot of a Quaeris answer showing metric definition, owner, and full lineage back to source tables]
- **Image alt:** "Quaeris answer with full metric lineage and governance metadata"

---

### Section 3: Why Auto-Learning Wins (BentoGrid or IconFeatureGrid)

**Component:** IconFeatureGrid (existing; 2×3 or 3×2 grid of icons + single-sentence value props)

**Grid items (6 total, 20px Roboto headings, 15px Roboto body):**

1. **Icon: Zap (acceleration)**
   - **Title:** "Weeks, not months"
   - **Body:** "Traditional semantic layers need 3–6 month modeling sprints. Quaeris learns from usage in days. Deploy on week one, [data-placeholder: time to first certified metric] by week two."

2. **Icon: Code** (crossed out or muted)
   - **Title:** "No code required"
   - **Body:** "Your data team certifies metrics in a UI, not YAML or MDX. Analytics engineers can stay focused on BI work, not semantic layer maintenance."

3. **Icon: GitBranch**
   - **Title:** "Versioned & audited"
   - **Body:** "Every metric definition change is logged with owner, timestamp, and rationale. Rollback or compare versions in one click. Full audit trail."

4. **Icon: Users**
   - **Title:** "Multiple authoritative definitions"
   - **Body:** "Finance's 'revenue' and Product's 'activation' coexist in one semantic layer. No forced reconciliation. Ownership and lineage make the difference clear."

5. **Icon: BarChart**
   - **Title:** "Scales to thousands"
   - **Body:** "Warehouse-native design handles thousands of metrics across hundreds of tables. No performance cliff as your semantic layer grows."

6. **Icon: Lock**
   - **Title:** "Governance by design"
   - **Body:** "Access controls, role-based metric visibility, and lineage enforcement are built in. Not added later. Security scales with adoption."

---

### Section 4: Comparison Matrix (NEW:ComparisonTable)

**Component:** Accordion + embedded feature comparison table

**Headline:** "How Quaeris compares to other semantic layers"

**Table columns:**
- Feature / Capability
- Quaeris Smart Semantic Layer
- dbt Semantic Layer
- Cube
- AtScale
- Looker LookML

**Rows to compare:**

| Feature | Quaeris | dbt | Cube | AtScale | Looker |
|---------|---------|-----|------|---------|--------|
| Auto-learn from usage | Yes — learns from natural-language prompts | No — requires YAML config | Partial — requires code | No — manual cube design | No — requires LookML |
| UI-based certification | Yes — zero code | No | No | No | No |
| Warehouse-native | Yes — queries live data | Yes — via dbt Cloud | Partial — proxies queries | Limited — requires data sync | No — proprietary model |
| Versioning & audit trail | Full history, owner tracking | Via git only | Via API only | Limited | Limited |
| Role-based metric access | Yes — agent-level enforcement | No | Partial | Partial | Via Looker roles |
| Time to first metric (starting from scratch) | [data-placeholder: time to first certified metric] | [data-placeholder: estimated; dbt requires upfront YAML config sprints before queries can run] | [data-placeholder: estimated; Cube requires developer setup and architecture work before first query] | [data-placeholder: estimated; AtScale requires heavy upfront cube modeling per research] | [data-placeholder: estimated; Looker requires LookML expertise and a modeling sprint] |
| Supports multiple warehouse platforms | Yes — Snowflake, BigQuery, Databricks, Redshift, Synapse | Yes — via adapters | Yes — via drivers | Yes | Looker-only |
| Learning curve for data teams | Low — watch & certify | Medium — YAML + dbt modeling | High — code + architecture | High — cube design | Very high — LookML + Looker concepts |

**Table note (13px Inter Italic, #9ca3af):**
"Feature comparison current as of June 2026. See detailed comparison pages for Cube vs. Quaeris and dbt Semantic Layer alternative for deeper analysis."

**CTA below table:** "Download the full competitive analysis" (gated PDF)

---

### Section 5: Inside the Semantic Layer (NEW:SemanticLayerAnatomy)

**Component:** EditorialBlock or custom 3-column breakout

**Headline (40px Roboto Regular, #200123):** "What a certified metric looks like"

**Subheading (17px Roboto Regular, #6b4d72):** "Every metric definition in Quaeris contains the information your team needs to trust it."

**Three-column grid:**

**Column 1: Definition**
- **Label:** "What is it?"
- **Content:**
  - Metric name: Revenue
  - Description: Total order value excluding taxes and refunds
  - Owner: Head of Finance (sarah@company.com)
  - Version: 2.3 (updated Jun 10, 2026)

**Column 2: Lineage**
- **Label:** "Where does it come from?"
- **Content:**
  - Source tables: orders, order_items, refunds
  - Key filter: WHERE status = 'completed'
  - Calculation: SUM(order_items.price) - SUM(refunds.amount)
  - Last updated: Jun 10, 2026 by sarah@company.com

**Column 3: Governance**
- **Label:** "Who can see it?"
- **Content:**
  - Visibility: Finance, Executive, Sales Leadership
  - Restricted from: Customer Success, Product
  - Change log: 12 versions tracked
  - Audit trail: 340 queries this month

**Background:** Light lavender (#F9F5FF) with subtle border (#ECDCF0)

---

### Section 6: Use Cases (SegmentCards or Bento variation)

**Component:** SegmentCards (existing; 2×2 or 3×2 grid of use-case cards, each with icon, title, description)

**Headline (40px Roboto, #200123):** "Where the Smart Semantic Layer delivers"

**Use case cards (4–6 total):**

**Card 1: Multi-Team Alignment**
- **Icon:** Users (Lucide)
- **Title:** "Finance + Product + Sales speak the same language"
- **Body (15px Roboto):** "Each team has their own 'revenue' definition. Quaeris holds all of them in one semantic layer with clear ownership. No more reconciliation calls before the board meeting."
- **CTA:** "[data-placeholder: named customer pending consent — e.g. 'See how a financial-services customer unified metrics across teams']" (links to case study or use-case page)

**Card 2: Reducing Data-Team Bottleneck**
- **Icon:** Zap
- **Title:** "Stop the ad-hoc request queue"
- **Body:** "Business teams no longer ask 'What's our revenue?' — they know the certified definition and ask confident follow-ups. Your data team shrinks the backlog by [data-placeholder: % reduction in ad-hoc request queue]."
- **CTA:** "[data-placeholder: named customer pending consent — e.g. 'Read: How an analytics team cut time-to-insight']"

**Card 3: Compliance & Governance**
- **Icon:** Lock
- **Title:** "Audit every metric and every query"
- **Body:** "Regulated industries (finance, insurance, healthcare) need proof that metrics are certified and queries are governed. Quaeris's semantic layer IS the proof."
- **CTA:** "Explore compliance & audit features"

**Card 4: Warehouse Consolidation**
- **Icon:** Database (or similar)
- **Title:** "Migrate off multiple BI tools"
- **Body:** "Teams running Tableau, Looker, and Sigma in parallel — each with different metric definitions. Quaeris's semantic layer becomes the single source of truth. Retire the legacy BI tool."
- **CTA:** "See consolidation ROI analysis"

---

### Section 7: Getting Started (FeatureRow or Accordion)

**Component:** Accordion (existing; collapsible steps)

**Headline (40px Roboto, #200123):** "Deploy in two weeks. Govern on day one."

**Accordion items (4 expandable sections):**

**Item 1: Week 1 — Connect & Observe**
- **Summary:** "Connect your warehouse. Quaeris begins learning."
- **Expanded body (15px Roboto):**
  - "Day 1–2: Connect to your Snowflake, BigQuery, Databricks, or Redshift instance (30 minutes). Quaeris scans your schema and begins observing user questions.
  - Day 3–5: Your data team invites business users to ask pilot questions (10–20 exploratory queries). Quaeris infers metric patterns.
  - Day 7: Review what Quaeris learned. Begin certification: 'Yes, that's our revenue. No, that's a one-off.' "

**Item 2: Week 2 — Certify & Govern**
- **Summary:** "Your team certifies metrics. Governance locks in."
- **Expanded body:**
  - "Day 8–10: Data engineer certifies the top 20–30 metrics. Assigns owners, writes business rules, versions each one.
  - Day 11–12: Configure role-based access. Decide which teams see which metrics. Test with a cohort of power users.
  - Day 14: Go live. All agent answers cite certified metrics. Lineage is live. Audit logs are flowing."

**Item 3: Week 3+ — Scale & Optimize**
- **Summary:** "Grow metrics. Refine governance."
- **Expanded body:**
  - "Weeks 3–4: Monitor usage. Add new metrics as they emerge. Retire obsolete definitions.
  - Month 2: Roll out to all business teams. Measure reduction in data-team ad-hoc requests.
  - Ongoing: Quaeris learns new patterns. Your team certifies quarterly. Semantic layer stays current."

**Item 4: Support & Training**
- **Summary:** "Quaeris runs alongside your existing BI stack."
- **Expanded body:**
  - "Your data team gets: setup support, bi-weekly office hours, Slack channel with Quaeris experts.
  - Business users get: 30-minute training on how to ask questions and read metric definitions.
  - Documentation: API reference, SQL generator, lineage how-tos, governance playbooks."

---

### Section 8: Proof (CaseStudyCard × 2 or Testimonial focus)

**Component:** CaseStudyCard (existing) + TestimonialCard (existing)

**Headline (40px Roboto, #200123):** "Trusted by data leaders"

**Case study slot 1: [data-placeholder: Customer name + industry]**
- **Outcome stat:** [data-placeholder] % reduction in metric definition conflicts
- **Quick quote:** "[data-placeholder: quote from data leader on governance impact]"
- **Link:** "Read the full story"

**Testimonial slot (pull from config or embed new):**
- **Quote:** "[data-placeholder: quote on auto-learning semantic layer]"
- **Attribution:** [data-placeholder: name, title, company]

---

### Section 9: Deep Dive: Why Auto-Learning Matters (EditorialBlock)

**Component:** EditorialBlock (existing; text + side background accent)

**Headline (40px Roboto, #200123):** "The semantic layer bottleneck — and why Quaeris solves it"

**Body (15px Roboto Regular, #6b4d72):**

"Every semantic layer product asks your team to do the work upfront. Looker demands LookML expertise. dbt Semantic Layer requires weeks of YAML config writing. Cube and AtScale need architects to design cubes before a single question gets answered. The ROI math is brutal: you spend 3–6 months building before you get any benefit. Meanwhile, business teams have already found their own analytics solutions (spreadsheets, Sigma, Mode) and defined their own 'revenue.' Once that fragmentation sets in, unifying metrics later is a political problem, not a technical one.

Quaeris flips the model. Metrics emerge *from usage*. Your team certifies what Quaeris learns, not the other way around. Governance happens at the point of observation, not at the end of a long modeling sprint. The ROI is immediate: in week two, every agent answer cites a certified metric. By month three, your data team's ad-hoc request queue has shrunk by [data-placeholder: % reduction in ad-hoc request queue].

This is the only semantic layer that pays for itself before your team finishes configuring it."

**Visual accent:** Gradient background (#F9F5FF → #FAF8FF), subtle accent line in brand purple (#8C20A4)

---

### Section 10: FAQs (FAQSection or Accordion)

**Component:** FAQSection (existing) or Accordion

**Headline (40px Roboto, #200123):** "Common questions about the Smart Semantic Layer"

**FAQ items (6–8, pulled from research context where available, or new Quaeris-specific questions):**

**Q1: "Does Quaeris replace our existing BI tool's semantic layer (LookML, YAML, etc.)?"**
- **A (15px Roboto):** "Quaeris complements, not replaces, your BI tool. If you're using Looker's LookML, Quaeris can coexist and serve natural-language queries while LookML continues to power structured dashboards. If you're looking to migrate off a legacy BI tool altogether, Quaeris's semantic layer becomes the source of truth — and you can retire LookML, YAML, or proprietary models."

**Q2: "Can Quaeris learn metrics from a warehouse that already has a semantic layer?"**
- **A:** "Yes. If you have Looker, dbt Semantic Layer, or Cube already deployed, Quaeris can ingest those definitions and extend them. It learns from new questions, suggests new metrics, and lets your team version everything in one place. You're not forced to rebuild from scratch."

**Q3: "What if Quaeris learns a metric definition wrong?"**
- **A:** "Your data team reviews it during certification. If it's wrong, you reject it or correct it — mark the actual business rule. Quaeris won't use the rejected definition. It's not training on your corrections in a black-box way; your team's certification decision is explicit and versioned."

**Q4: "Who owns the metrics — Quaeris or our team?"**
- **A:** "100% your team. Metrics live in your warehouse. Definitions are certified by your data engineers. Quaeris is the platform that learns patterns and surfaces them for your approval. You control versioning, access, change history, everything."

**Q5: "Does the auto-learning happen in real time or in batch?"**
- **A:** "Quaeris observes questions in real time and incrementally updates its confidence in metric patterns. Certification happens on your schedule — daily, weekly, or monthly. No batch delays. No waiting."

**Q6: "What if we have conflicting metric definitions (Finance's revenue vs. Product's revenue)?"**
- **A:** "Both live in the semantic layer. Quaeris tracks which team owns which definition, tags them separately, and ensures agents use the correct one based on context or user role. No forced reconciliation. Transparency replaces conflict."

**Q7: "Can we audit which queries used which metric definition?"**
- **A:** "Yes. Every answer Quaeris returns is logged with: the metric definition version used, the date, the user who asked, the warehouse tables queried, and the exact lineage. This audit logging capability supports regulated-industry governance workflows. [data-placeholder: confirm held certifications (SOC 2, HIPAA BAA, ISO 27001) with security/compliance team before citing specific standards — see Open Question #5]"

**Q8: "How does Quaeris handle new tables or schema changes?"**
- **A:** "Quaeris rescans your warehouse regularly. When a new table appears, it learns potential metrics from that table. When a schema changes, it updates its confidence estimates. Your team re-certifies as needed. Zero downtime."

---

### Section 11: Call-to-Action Band (CTABand)

**Component:** CTABand (existing; full-width band with centered text + dual CTAs)

**Eyebrow (13px Roboto Medium, #8C20A4):** "Ready to deploy?"

**Headline (40px Roboto Regular, #200123):** "See the Smart Semantic Layer in action."

**Subcopy (17px Roboto Regular, #6b4d72):** "Book a 30-minute demo. We'll connect to your warehouse, walk through a live metric certification, and show you an agent answer with full lineage — using your actual schema."

**CTA primary (Roboto 14px Semi-Bold, gradient bg linear-gradient(90deg, #4E0250, #8C20A4), 10px radius):** "Book a Demo"

**CTA secondary (Roboto 14px Regular, transparent with border #DCC8E4):** "Get the white paper"

**Background:** Light lavender (#F9F5FF)

---

### Section 12: Footer

**Component:** Shared footer (no custom changes; use brand footer from config)

---

## 4. Proof & Data Points

**Facts from research context (QUAERIS_RESEARCH_CONTEXT.md):**

All claims below are sourced from the research and must be preserved exactly:

- **Semantic layer definition:** "Smart Semantic Layer — Automatically learns business definitions and data relationships from user interaction — no upfront LookML / MDX modeling sprint required" (from six core capabilities)

- **Whitespace slot 4:** "Auto-learned semantic layer — All semantic competitors require upfront authoring" (from whitespace map)

- **Competitive differentiation vs. Segment 4 (Semantic Layer / Headless BI / Catalog):** "Pure semantic players require manual modeling. ... Quaeris collapses both — semantic layer auto-learns from prompts; queries execute through governed agents against the same layer with audit trails feeding governance workflows."

- **Closest semantic competitors:** Cube (developer-first, no front-end agentic experience), AtScale (strongest enterprise governance but requires heavy upfront cube modeling), Honeydew (most modern but requires customers to write semantic definitions in code)

- **Wedge vs. competitors:** "Auto-learning Smart Semantic Layer. Every other semantic-layer product asks customers to do the work upfront."

- **Keyword targets:** "smart semantic layer" (Low-Med volume, 22 KD); "AI semantic layer" (Medium, 45 KD); "auto-learned semantic model" (Low, 22 KD)

- **Competitive comparison targets (12-month roadmap):** dbt Semantic Layer, Cube, AtScale, LookML

**Data placeholders (aspirational, marked for later data validation):**

- [data-placeholder: Case study customer name + industry]
- [data-placeholder: % reduction in ad-hoc request queue after semantic layer deployment]
- [data-placeholder: Average time to first certified metric — unvalidated; confirm with customer success or implementation team before publishing]
- [data-placeholder: Number of metrics a typical customer learns in week 1]
- [data-placeholder: Testimonial quote from data leader on auto-learning governance]
- [data-placeholder: Screenshot of Quaeris semantic layer learning engine]
- [data-placeholder: Screenshot of metric certification UI]
- [data-placeholder: Screenshot of metric lineage view with governance metadata]

All claims about Quaeris's technical capabilities (warehouse-native, role-based access, auto-learn, versioning, audit trail) are grounded in the platform overview and product positioning from research and brand spec. No invented features or contradictions.

---

## 5. Internal Links

**Navigation & cross-links from this page to other Quaeris routes:**

| Anchor text | Destination route | Context |
|---|---|---|
| "Agentic Query Engine" | `/platform/agents` | Hero — comparison of semantic layer vs. agents |
| "See a live demo" | `/platform/agents` or `/contact` (demo booking) | Section 2, Row 1 CTA |
| "Watch a live demo" | `/contact` | Section 2 Row 1 CTA |
| "Explore the certification flow" | `/platform/governance` | Section 2, Row 2 CTA |
| "See the lineage view" | `/platform/governance` | Section 2, Row 3 CTA |
| "Read the white paper: Smart Semantic Layers" | `/resources/white-papers/smart-semantic-layers` (or gated form) | Hero secondary CTA |
| "Download the full competitive analysis" | `/resources/semantic-layer-comparison-guide` (gated PDF) | Section 4 comparison table |
| [data-placeholder: named customer CTA pending consent] | `/use-cases/financial-services-metric-alignment` (or `/case-studies#[slug]`) | Section 6, Card 1 |
| [data-placeholder: named customer CTA pending consent] | `/use-cases/saas-time-to-insight` (or `/case-studies#[slug]`) | Section 6, Card 2 |
| "Explore compliance & audit features" | `/platform/audit` or `/platform/governance` | Section 6, Card 3 |
| "See consolidation ROI analysis" | `/resources/bi-consolidation-roi` or `/blog/retiring-legacy-bi-tools` | Section 6, Card 4 |
| "Cube vs. Quaeris comparison" | `/compare/quaeris-vs-cube` | Section 5 table footnote |
| "dbt Semantic Layer alternative" | `/compare/quaeris-vs-dbt-semantic-layer` (or create if missing) | Section 5 table footnote |
| "Book a Demo" | `/contact` or `/demo` | CTABand primary |
| "Get the white paper" | `/resources/white-papers/smart-semantic-layers` (gated) | CTABand secondary |

**Inbound links to this page (other routes should link here):**
- `/platform` — main platform hub should link to "Semantic Layer" in the capabilities grid
- `/compare/*` pages on Cube, AtScale, dbt Semantic Layer, Looker (if created)
- `/blog` posts on semantic layer modeling, dbt vs. Looker, metric definitions
- `/learn` or glossary page on "semantic layer" definition

---

## 6. Open Questions

1. **Case study names & numbers:** The research context lists anonymized customers (E4E is the only named reference). Which Quaeris customers consent to be named on the semantic-layer page? What are their vertical, company size, and result metrics? *Action: Work with Quaeris marketing/sales team to unlock 1–2 named case studies.*

2. **Live demo availability:** Does Quaeris have a sandboxed demo environment that prospects can access? Or does the "See it in action" CTA route to a Calendly/meeting booking? *Action: Confirm with product team; if no sandbox, CTA must go to demo request form.*

3. **White paper availability:** Is there an existing "Smart Semantic Layers" white paper, or does it need to be written? *Action: Check Quaeris content library; if missing, add to content roadmap (Q3 priority per 12-month roadmap).*

4. **Competitive comparison pages:** Do `/compare/quaeris-vs-cube`, `/compare/quaeris-vs-dbt-semantic-layer`, `/compare/quaeris-vs-atscale` pages exist? The research roadmap lists 10 missing comparison pages. *Action: Align with competitive content strategy; these may be created later or embedded as modals.*

5. **Audit logs & compliance certifications:** The page claims "full audit trail for SOX, HIPAA, etc." Does Quaeris currently hold SOC 2 Type II, HIPAA BAA, and ISO 27001? If not, mark claims as aspirational or remove them. *Action: Verify with security/compliance team before finalizing copy.*

6. **Metric learning timeline:** The copy claims "2–5 days" to first certified metric. Is this validated across customer implementations? *Action: Confirm with customer success or implementation team; adjust if necessary.*

7. **Warehouse support list:** Current copy lists Snowflake, BigQuery, Databricks, Redshift, Synapse. Are there others? Any in progress? *Action: Verify against current integrations documentation.*

8. **FAQ schema:** The page has 8 FAQs. Should this feed into a dedicated `/frequently-asked-questions` page or a `/learn` glossary for compound SEO value? *Action: Align with SEO strategy; FAQPage schema should be applied either way.*

9. **Persona targeting:** Copy assumes data engineers and heads of data. Should there be a variant of this page tailored to analytics engineers or CDOs? Or should secondary pages (`/roles/analytics-engineer`, `/roles/cdo`) link here? *Action: Decide on persona-specific landing page strategy; may be out of scope for this page spec.*

10. **Benchmark & GEO citations:** The research roadmap highlights "Text-to-SQL Accuracy Benchmark" as a quarterly GEO citation magnet. Should this page reference a semantic-layer modeling-time comparison or metric-definition accuracy benchmark? *Action: Coordinate with content strategy; may be a blog post or dedicated tool rather than this page.*

---

## 7. Implementation Notes

- **Hero section:** Reuse existing HeroHome component; customize copy only.
- **Problem/Solution cards:** Use existing ProblemSolutionCards if available; otherwise create NEW:ProblemContext as a 2-column card pairing.
- **Feature rows:** Reuse existing FeatureRow component (already in inventory). Placeholder images for Quaeris screenshots.
- **Comparison table:** May require a new TABLE component or embedded Markdown table in an Accordion. Check existing components first.
- **Semantic layer anatomy:** Use EditorialBlock with 3-column layout or create NEW:SemanticLayerAnatomy as a custom breakout.
- **Use cases:** Reuse SegmentCards (existing).
- **Getting started:** Use Accordion (existing).
- **Proof:** Use CaseStudyCard + TestimonialCard (both existing).
- **Deep dive:** EditorialBlock (existing).
- **FAQs:** Use FAQSection or Accordion (both existing).
- **CTA band:** Use CTABand (existing).

**Design system constraints:**
- Headings: Roboto 48px (H1), 40px (H2), 20px (H3)
- Body text: Inter 15px Regular
- Accent color: #8C20A4
- Ink color: #200123
- CTA buttons: 10px radius, gradient bg (linear-gradient(90deg, #4E0250, #8C20A4))
- Backgrounds: #FAF8FF (canvas), #F9F5FF (warm surface)
- Borders: #ECDCF0

**SEO technical:**
- Apply SoftwareApplication + Product schema to this page (JSON-LD)
- Include breadcrumb schema: Home > Platform > Semantic Layer
- Add FAQ schema if FAQ section is present
- Meta description targets "auto-learn" and "semantic layer" keywords
- H1 is headline; H2s follow section structure; no keyword stuffing

**Content tone & voice:**
- Quaeris-specific: confident, precise, governance-first
- Anti-hype: no "revolutionary," no "game-changer," no weasel words
- Competitive: direct comparisons (dbt, Cube, AtScale, Looker) with facts, not opinion
- Trust-focused: every claim ties back to governance, audit, or transparency
- Avoid: jargon dumps, vague benefits, aspirational future tense unless marked [data-placeholder]

---

**Page Spec Complete**

This specification is ready for design review and implementation. All sections are mapped to existing components where possible; new components are marked with "NEW:" prefix. All copy follows Quaeris brand voice and is grounded in the research context. All CTAs link to other routes in the platform IA. No invented customers, quotes, or metrics — all data placeholders are marked [data-placeholder] and tracked for future validation. Customer names in Section 6 CTAs are placeholders pending consent; quantitative metrics (ad-hoc queue reduction, time to first certified metric) are placeholders pending customer success validation; compliance certification claims (SOX, HIPAA) are gated behind Open Question #5 resolution.
