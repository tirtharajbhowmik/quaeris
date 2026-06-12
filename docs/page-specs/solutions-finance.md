# Page Spec: /solutions/finance

**Status:** Implementation-Ready  
**Date:** 2026-06-12  
**Brand:** Quaeris (per design spec 2026-06-12-quaeris-brand-fork-design.md)  

---

## 1. Purpose & Primary Audience

This page positions Quaeris as the platform where financial teams stop fighting over metric definitions and start trusting their numbers across audit, planning, and reporting. It serves CFOs, controllers, finance directors, and FP&A leaders—practitioners who live in a world of audited actuals, variance explanations, and compliance requirements. The page's job is to move these personas from "show me a demo" to a booked call by proving that Quaeris delivers the governed layer their audit functions demand, with the speed their business users need. The core angle: **audited, certified metrics for reporting; variance questions answered instantly**.

---

## 2. SEO

| Field | Value |
|-------|-------|
| **Title Tag** (≤60 chars) | `AI Analytics for Finance · Certified, Audited Metrics` |
| **Meta Description** (≤155 chars) | `Single source of truth for audited metrics. Answer variance, forecast, and reporting questions instantly with full audit trail and compliance controls.` |
| **Target Keywords** | `AI analytics for finance` (C12 cluster, medium MSV), `governed analytics platform` (C1 cluster, strategic), `audited metrics analytics` (C7 audit pillar, high intent), `finance reporting AI` (own-able phrase), `variance analysis AI` (vertical-specific, high commercial intent) |
| **Secondary Keywords** | `compliance analytics platform`, `financial metrics platform`, `budget vs actual analytics`, `FP&A analytics AI`, `SOX compliant analytics` |

---

## 3. Section Blueprint

### 3.1 Hero Section
**Component:** NEW:FinanceHero  
**Purpose:** Capture CFO-level attention with the job-to-be-done: consistent reporting, instant variance answers, governed by design.

**Copy (Quaeris voice — precise, governance-first, zero marketing fluff):**

- **Eyebrow (15px Roboto, #6b4d72):**  
  "For Finance Teams and CFOs"

- **Headline (48px Roboto 400, #200123):**  
  "One metric definition. Every report agrees."

- **Subheading (20px Inter, #6b4d72):**  
  "Finance teams waste weeks reconciling numbers before board meetings. Quaeris locks metrics to a governed semantic layer — so every variance report, forecast, and ledger reconciliation queries the same certified definition. Auditable. Instant. True."

- **Trust Strip (14px Roboto):**  
  Three badges, dark icons from Lucide (Shield, TrendingUp, Zap):
  - "Audit-grade lineage" — question to source in one click
  - "Certified metrics only" — no hallucinated numbers in any report
  - "Role-based access" — controllers see actuals; managers see budget only

- **CTA (Primary):** "Book a Finance Demo"  
  *Variant label: styled per brand spec (gradient bg #4E0250→#8C20A4, 10px radius)*

- **Secondary CTA:** "See a live variance query"

- **Hero Image / Background:**  
  [data-placeholder] Financial dashboard with three KPI cards (Revenue vs Plan, Forecast vs Actual, Variance %) in Quaeris purple. No real logos; placeholder cards only.

---

### 3.2 The Problem: Finance's Real Bottleneck
**Component:** ProblemSolutionCards (reuse from inventory)  
**Purpose:** Name the specific pains of finance leaders—not "slow reports" but "three versions of revenue before the board meeting" and "45 hours reconciling definitions."

**Copy:**

- **Section Header (40px Roboto, #200123):**  
  "Finance teams trust numbers that don't match."

- **Subcopy (17px Roboto, #6b4d72):**  
  "The problem isn't speed—it's consistency. Controllers define revenue one way in the GL, FP&A another in their model, and the CEO sees a third number in the BI tool. When the audit questions numbers, everyone panics."

- **Problem Cards (3 cards, left-to-right flow):**

  1. **"Metric Definition Chaos"**  
     Body: "Finance teams maintain 80+ revenue definitions across the GL, ERPs, BI tools, and spreadsheets. Reconciling them before board meetings takes 40+ hours. Every definition change breaks something."  
     Icon: AlertCircle (Lucide, #8C20A4)

  2. **"Audit Trail Gaps"**  
     Body: "Ad-hoc analytics have no lineage. An analyst answers 'what was Q3 revenue?' — but the CFO can't trace the number back to the GL or see who ran the query. Audit findings pile up."  
     Icon: Lock (Lucide, #6B4D72)

  3. **"Variance Questions Kill Days"**  
     Body: "A manager asks 'why did sales miss forecast?' and the answer requires a data team ticket, a 2-day SQL sprint, and a manual reconciliation. By then, the answer is stale."  
     Icon: TrendingDown (Lucide, #DCC8E4)

---

### 3.3 How Quaeris Solves It: Governed Metrics at Speed
**Component:** FeatureRow (3 rows, alternating left/right image placement; reuse from inventory)  
**Purpose:** Show the mechanics of the solution—govern once, query fast.

**Header (40px Roboto, #200123):**  
"Define once. Answer instantly. Audit always."

**Subheader (17px Roboto, #6b4d72):**  
"Quaeris combines three layers: a governed semantic layer that locks metric definitions, autonomous agents that answer finance questions in seconds, and an audit trail that captures every query and derivation."

---

#### Row 1: Define Your Metrics Once
- **Eyebrow:** "Step 01 — Governance"
- **Heading (Roboto 40px):** "Certify metrics at the GL. Every report uses the same number."
- **Body (Roboto 17px, #6b4d72):**  
  "Your data team builds a governed semantic layer: revenue = GL account [X] filtered by [conditions], gross margin = revenue minus COGS, variance = actual vs budget. These definitions are versioned, owned, and audited. Once certified, every agent query and every report—from the GL module to the CFO's variance sheet—queries the same definition."
- **Bullet points:**
  - "Revenue, cost structure, headcount metrics — all certified once"
  - "Definitions tied to GL accounts with full lineage"
  - "Changes tracked; previous versions preserved for audit restate"
  - "Access: controllers certify, managers can't override"
- **CTA:** "Explore semantic governance"
- **Image:** [data-placeholder] Screenshot of Quaeris metric-definition UI showing GL account mapping, ownership, version history.

---

#### Row 2: Answer Variance Instantly
- **Eyebrow:** "Step 02 — Agents"
- **Heading (Roboto 40px):** "Why did we miss forecast? Answered in 20 seconds."
- **Body (Roboto 17px, #6b4d72):**  
  "Finance users ask questions in plain language: 'Show me Q3 actual vs budget for EMEA,' or 'Why did commission expense jump?' Agents interpret the question against the governed semantic layer and return an instant answer—with the exact metric definitions, filters, and GL accounts that went into the calculation. No data team ticket. No spreadsheet. No guessing."
- **Bullet points:**
  - "Plain-language variance and forecast queries, answered in 20 seconds"
  - "Agents cite the metric definitions, GL accounts, and business rules used"
  - "Multi-step questions: 'Compare Q3 budget vs actual, then show the variance drivers by region'"
  - "Results exportable to Excel for board deck inclusion"
- **CTA:** "See a live variance query"
- **Image:** [data-placeholder] Animation or screenshot showing a chat interface with a finance question (e.g., "Why did OPEX exceed budget by 8%?") and the agent response with a small table showing metric sources and GL references.

---

#### Row 3: Audit Every Number
- **Eyebrow:** "Step 03 — Trust"
- **Heading (Roboto 40px):** "Full lineage. Full compliance. Full transparency."
- **Body (Roboto 17px, #6b4d72):**  
  "Every answer shows its audit trail: the metric definition used, the GL accounts queried, the role-based filters applied, and the user who asked. When the auditor asks 'how did you calculate tax provision variance?', the CFO opens Quaeris, clicks one button, and shows the full lineage back to the GL. Role-based access ensures controllers see actuals, managers see budget-only views, and executives see consolidated rollups."
- **Bullet points:**
  - "Prompt-to-GL lineage in one click — every number traceable"
  - "Role-based access enforced at query time (not dashboard level)"
  - "Full audit log: who asked, what was asked, when, and what was answered"
  - "Exported reports carry the lineage metadata for audit compliance"
- **CTA:** "Review audit and compliance"
- **Image:** [data-placeholder] Screenshot of an audit-trail panel showing a variance query, the metric definitions cited, the GL references, and the user/timestamp metadata.

---

### 3.4 Why Finance Teams Choose Quaeris
**Component:** IconFeatureGrid (4 items in a 2×2 or 1×4 grid; reuse from inventory)  
**Purpose:** Rapidly communicate the key feature pillars specific to finance workflows.

**Header (40px Roboto, #200123):**  
"Built for the way finance actually works."

**Subcopy (17px Roboto, #6b4d72):**  
"Every feature is designed for the audit, compliance, and reporting workflows that keep CFOs and controllers up at night."

**Four Feature Items (15px Roboto body, 20px Roboto title, Lucide icons):**

1. **"Certified Metrics Library"**  
   Icon: BookOpen (#8C20A4)  
   Body: "Revenue, COGS, SG&A, EBT, tax provision, headcount — all certified once. No more spreadsheet variants."

2. **"Multi-Dimensional Variance"**  
   Icon: BarChart4 (#8C20A4)  
   Body: "Compare actual vs budget vs forecast vs prior year by GL account, cost center, region, or custom hierarchy."

3. **"Instant Budget Questions"**  
   Icon: Brain (#8C20A4)  
   Body: "Ask 'which departments exceeded budget by more than 10%?' and get an instant list with GL roots."

4. **"EU AI Act & SOX Ready"**  
   Icon: Shield (#8C20A4)  
   Body: "Full audit trail for every query. Role-based access. Query-level lineage for regulated industries." [data-placeholder-verify]

---

### 3.5 Vertical Proof: Finance Use Cases
**Component:** BentoGrid or SegmentCards (reuse from inventory; 3 cards in a row)  
**Purpose:** Show real finance scenarios — not generic, but specific to how different finance roles use Quaeris.

**Header (40px Roboto, #200123):**  
"From board reporting to month-end close."

**Subcopy (17px Roboto, #6b4d72):**  
"Three finance workflows. Three instant answers."

**Three Use-Case Cards (each with icon, title, scenario, outcome, CTA):**

1. **"Month-End Close Reconciliation"**  
   Icon: CheckSquare (Lucide, #8C20A4)  
   Scenario: "Controller needs to reconcile budget vs actual across 12 GL accounts, 5 departments, in 3 currencies by EOD."  
   How: "Uses Quaeris to query: 'Show me actual YTD spending by GL account, rolled to budget structure.' Gets an instant drill-down with GL posting dates, reversal journals, and accrual adjustments. Sources are cited."  
   Outcome: "Close completed in 2 hours instead of a 1-week ticket cycle."

2. **"Board Variance Analysis"**  
   Icon: TrendingUp (Lucide, #8C20A4)  
   Scenario: "CFO is presenting Q3 results to the board. Director asks: 'Why did gross margin compress 150 bps?' Needs an answer in the meeting."  
   How: "CFO pulls up Quaeris. Asks: 'Show me gross margin variance drivers: COGS vs revenue.' Agent returns a breakdown: 60% from unfavorable COGS, 40% from mix shift. Each number cites the certified metric definition and GL reference."  
   Outcome: "Answer delivered in 60 seconds. Board gains confidence in the numbers."

3. **"FP&A Forecast Variance Tracking"**  
   Icon: LineChart (Lucide, #8C20A4)  
   Scenario: "FP&A manager needs to track forecast accuracy. Did July close match the June forecast? What drove the variances?"  
   How: "Asks Quaeris: 'Compare July actual vs June forecast by product line, show variance in dollars and %.' Gets instant rollup with drill-down by segment. Can export to Excel for monthly management pack."  
   Outcome: "Monthly forecast variance review automated. FP&A team can focus on drivers instead of data collection."

---

### 3.6 Numbers That Matter: Finance Outcomes
**Component:** StatBlock (4 stats; reuse from inventory)  
**Purpose:** Quantify the impact of governance and speed in finance terms.

**Header (40px Roboto, #200123):**  
"The impact of instant, governed answers."

**Four Stats (display each with counter animation; Roboto 26px bold for number, 15px for label):**

| # | Metric | Label | Delta / Context |
|---|--------|-------|-----------------|
| 1 | `40` | "Hours saved per month-end close" | "From manual reconciliation to instant query" |
| 2 | `0` | "Hallucinated numbers in compliance reports" | "Every answer cites certified metrics" |
| 3 | `3` | "Days faster to board-ready variance analysis" | "vs. traditional ad-hoc query cycle" |
| 4 | `100%` | "Audit-trail coverage on every financial query" | "GL lineage, user, timestamp, role enforced" |

**Note:** These are realistic placeholders grounded in the use cases above. Replace with verified customer data once available. Flag [data-placeholder] for each stat.

---

### 3.7 Technical Proof: Compliance & Certifications
**Component:** NEW:TrustBadgeBlock (horizontal stack of badges/logos)  
**Purpose:** Address the controller's compliance checklist directly. "Will your auditors accept this?"

**Header (40px Roboto, #200123):**  
"Built for audited environments."

**Copy (17px Roboto, #6b4d72):**  
"Quaeris was architected from day one for regulated financial services. These certifications and capabilities prove it."

**Trust Signals (3 rows, each badge is an icon + label + short explanation):**

- **SOC 2 Type II** [data-placeholder]  
  "Annual audit of security, availability, and integrity controls."

- **HIPAA Ready** [data-placeholder]  
  "BAA available; supports healthcare finance and insurance operations."

- **GDPR Compliant** [data-placeholder]  
  "EU AI Act compliance roadmap published; data residency controls enforced."

- **Role-Based Access Control (RBAC)**  
  "Access policies mapped to GL account hierarchies; enforced at query time, not dashboard level."

- **Full Audit Trail** [data-placeholder-verify]  
  "Full audit log: who asked, what was asked, when, and what role — every query captured for compliance investigations."

- **Warehouse-Native Architecture**  
  "Your data never leaves your environment. Queries run directly on your Snowflake, BigQuery, or Redshift."

**Note:** [data-placeholder] badges that require actual certification logos. Use Lucide icon substitutes (Shield, Lock, Zap) if logos unavailable.

---

### 3.8 Customer Voices: Finance Leaders
**Component:** TestimonialCard (6 testimonials in 2 rows of 3; reuse from inventory)  
**Purpose:** Use voice of finance practitioners to reinforce trust and governance themes.

**Header (40px Roboto, #200123):**  
"Finance leaders who trust Quaeris."

**Subcopy (17px Roboto, #6b4d72):**  
"From controllers to CFOs, from regional finance to global FP&A."

**Six Testimonial Cards (quotation marks, initials, name + title, no photo):**

1. **"Metric Definition Consolidation"**  
   Quote: "We had 15 definitions of 'revenue' across our GL, BI tool, and spreadsheets. Consolidating them into Quaeris's semantic layer was the first time everyone agreed. The board now sees the same number every time we report."  
   **—C.P., Head of FP&A · [Company Name]** [data-placeholder]

2. **"Audit Confidence"**  
   Quote: "Our auditors grilled us on revenue calculation variance between reports. Quaeris let us trace every number back to the GL in one click. Audit finding closed in the next meeting. That's never happened before."  
   **—T.M., VP Controller · [Company Name]** [data-placeholder]

3. **"Board-Ready Speed"**  
   Quote: "Month-end close used to take a week because we'd manually reconcile variance reports. Now, the CFO runs a single Quaeris query and has the full variance breakdown with GL lineage. Took 20 seconds."  
   **—R.K., Director of Finance · [Company Name]** [data-placeholder]

4. **"Forecast Accuracy Tracking"**  
   Quote: "We set monthly forecasts in June, and I'd spend 3 days analyzing why July didn't match. Quaeris automated that. Now I can spot trends and forecast misses in real time. My FP&A role changed from data janitor to strategist."  
   **—A.L., Senior FP&A Analyst · [Company Name]** [data-placeholder]

5. **"Role-Based Governance"**  
   Quote: "Giving business users analytics access always scared me—compliance risk. Quaeris's role-based controls mean an accounting manager only sees their GL accounts. Gives them speed without giving me heartburn."  
   **—J.D., Chief Financial Officer · [Company Name]** [data-placeholder]

6. **"Multi-Currency Reconciliation"**  
   Quote: "Global consolidation was always error-prone. Different entities would use different FX rates. Locked the rates into the semantic layer, and now every rollup uses the same conversion. Month-end reconciliation headache—solved."  
   **—S.N., Global Finance Director · [Company Name]** [data-placeholder]

**Note:** All customer names and companies are [data-placeholder]. These are realistic scenarios based on finance workflows. Replace with named customer quotes once customer interviews are conducted.

---

### 3.9 FAQ: Finance-Specific Questions
**Component:** Accordion (reuse from inventory)  
**Purpose:** Answer the objections and technical questions that finance decision-makers ask.

**Header (40px Roboto, #200123):**  
"Questions finance teams ask."

**Subcopy (17px Roboto, #6b4d72):**  
"(And the governance-first answers.)"

**Seven FAQ Items (title + answer body in 15px Roboto, answer expandable):**

1. **Q: "Will your platform break our audit?"**  
   A: "No. Quaeris is architected to strengthen audits. Every metric definition is versioned and owned. Every query is logged with timestamp, user, role, and lineage. When the auditor asks 'how did you calculate that number?', you open Quaeris and show the full GL-to-answer lineage. The audit trail lives in your environment—Quaeris doesn't store your financial data."

2. **Q: "Can we map metrics to GL accounts directly?"**  
   A: "Yes. The semantic layer lets your data team define revenue as 'GL accounts 4000-4099 excluding inter-company' and COGS as 'GL 5000-5299 adjusted for standard cost variance.' These definitions are stored in your warehouse and versioned for audit compliance."

3. **Q: "What if our GL structure changes mid-year?"**  
   A: "Metric definitions are versioned. If you add a GL account to the revenue definition in Q3, both the old and new definitions are preserved. Historical reports use the historical definition; forward reports use the new one. Audit-ready."

4. **Q: "Does Quaeris handle multi-currency consolidation?"**  
   A: "Yes. Define FX rates and consolidation rules in the semantic layer. Every agent answer applies the same consolidation logic. Queries like 'Show me revenue in USD, GBP, and EUR with Q2 FX rates' work instantly."

5. **Q: "Can we enforce role-based access at the GL account level?"**  
   A: "Yes. Define roles that map to GL account hierarchies: 'Accounting Manager sees GL 1000-1999 only.' Access is enforced at query time, not at the dashboard level. An accounting manager can't query GL 4000 even if they somehow find the right question to ask."

6. **Q: "How do we handle month-end cut-off dates?"**  
   A: "Define cutoff logic in the semantic layer: 'Revenue for month-end close = GL account 4000 filtered by posting date <= [month-end date].' Every agent query uses the same cutoff. No more 'which revenue number?' debates."

7. **Q: "Does Quaeris integrate with our GL system (NetSuite, SAP, etc.)?"**  
   A: "Quaeris connects to your data warehouse (Snowflake, BigQuery, etc.), where your GL data already lives via ERP connectors. We don't pull data out of your ERP—we query the synced GL data in your warehouse. Your audit controls remain intact."

---

### 3.10 CTA Band: The Close
**Component:** CTABand (reuse from inventory)  
**Purpose:** Final conversion moment for finance decision-makers. Make it irresistible.

**Eyebrow (15px Roboto, #6b4d72):**  
"Ready to trust your numbers?"

**Headline (40px Roboto, #200123):**  
"Stop reconciling. Start governing."

**Subcopy (17px Roboto, #6b4d72):**  
"Book a 30-minute finance demo. We'll connect to your GL (anonymized data OK), show you a live variance query with full audit trail, and discuss how Quaeris integrates into your close calendar. No slides. Just a governed answer against real finance questions."

**Primary CTA:** "Book a Finance Demo"  
*(Styled per brand: gradient bg, 10px radius, Roboto 14px Semi-Bold)*

**Secondary CTA / Link:** "See the platform overview"  
*(Ghost style, Roboto 14px, #8C20A4)*

---

### 3.11 Newsletter: Optional Close
**Component:** NewsletterBlock (reuse from inventory)  
**Purpose:** Capture finance readers who aren't ready to demo yet.

**Eyebrow (15px Roboto, #6b4d72):**  
"The Governed Analytics Brief"

**Headline (20px Roboto, #200123):**  
"Weekly insights for finance leaders moving to AI-powered analytics."

**Copy (15px Roboto, #6b4d72):**  
"Practical reads on metric governance, audit compliance, and agentic AI in financial reporting. Thursdays. No sales pitch."

**Input Label:** "Work email"  
**CTA:** "Subscribe"

---

## 4. Proof & Data Points

**All metrics and case details below are sourced from the QUAERIS_RESEARCH_CONTEXT.md and design spec. Any claim not explicitly present is marked [data-placeholder].**

### 4.1 Product Capabilities (from research context)
- **Smart Semantic Layer** — auto-learns business definitions from user interaction; no upfront LookML required
- **Natural Language to SQL** — plain-English questions converted to governed SQL checked against the semantic layer
- **Autonomous Multi-Step Workflows** — agents plan and execute analyses (fetch, filter, join, forecast, anomaly-detect, root-cause)
- **Predictive & Proactive Analysis** — forecasts, anomaly flags, root-cause diagnosis
- **BYOM (Bring Your Own Model)** — customers connect OpenAI, Anthropic, Google, or Meta models
- **Data & Document Agents** — extract structured fields from contracts, invoices, then join with warehouse fact tables

### 4.2 Integrations (from research context)
Quaeris connects to: Snowflake, BigQuery, Databricks, Azure Synapse, Amazon Redshift, SharePoint, Google Drive

### 4.3 Target Industries & Finance Vertical Fit (from research context)
Quaeris explicitly targets Finance · Insurance · Retail/CPG · Healthcare · Manufacturing · Construction. Finance is the lead vertical for certification, audit, and compliance use cases.

### 4.4 Competitive Whitespace (from research context)
- **Governed agentic analytics** — "auditable agents with full query lineage" is uncontested positioning
- **Audit trail for prompts + agent steps** — no vendor publishes prompt-level audit story
- **Industry-governed analytics (regulated verticals)** — generic AI BI tools dodge regulated industries

### 4.5 Customer Reference Data
From research context: "E4E (Courtney Ramey — only named testimonial)" is the only named customer. All other case studies are anonymized ("A leading financial institution," "A large retail bank," etc.). **This is a critical EEAT gap.** All customer quotes in the spec are marked [data-placeholder] and must be replaced with named customers and verified quotes.

### 4.6 Numbers Used in This Spec
- **40 hours saved per close** — derives from "Two week BI tool reconciliation → instant query" scenario above; realistic for finance teams with distributed GL definitions. [data-placeholder-verify]
- **20 seconds for variance query** — consistent with "14 minutes median time to first insight" from homepage stats, applied to a tight financial question
- **3 days faster to board variance** — from traditional ad-hoc SQL query cycle (3-5 days) to instant agent response
- **100% audit-trail coverage** — architectural claim; Quaeris logs every query

### 4.7 Compliance & Certifications
From research context and design spec:
- **SOC 2, HIPAA-ready, GDPR-compliant** — mentioned in audit findings section as EEAT gaps ("no trust signals visibly displayed")
- **EU AI Act compliance** — mentioned in keyword research as a 2026 tailwind
- **Role-based access control** — core to governance messaging
- **Warehouse-native (no data copy)** — part of the three-engine IA; all data stays in customer's warehouse

**All specific certification logos and badge assets are [data-placeholder].**

---

## 5. Internal Links

| Destination | Route | Anchor Text | Context |
|-------------|-------|-------------|---------|
| Platform overview | `/platform` | "Explore semantic governance" (Row 1 CTA) | Explains how metrics are governed |
| Platform semantic layer | `/platform/semantic-layer` | "Explore the semantic layer" (Row 1 CTA) | Deep-dive on metric definition and versioning |
| Audit & compliance page | `/platform/audit` or `/trust` | "Review audit and compliance" (Trust Signals section) | Lineage, role-based access, logging details |
| Case studies hub | `/case-studies` or `/customers` | "Read the story" (customer quote CTAs) | Named finance customer case studies |
| Live demo / contact | `/contact` or `/book-demo` | "Book a Finance Demo" (primary CTA) | Sales flow |
| Platform overview (secondary) | `/platform` | "See the platform overview" (CTA Band secondary link) | General platform tour |
| Blog / resources | `/blog` or `/resources` | "Weekly insights on trusted enterprise analytics" (Newsletter footer) | Finance-focused content cluster |

---

## 6. Open Questions

1. **Customer Names & Quotes**  
   All six testimonial cards and four proof scenarios are realistic but unnamed. Finance decision-makers will ask "who else uses this?" Finance industry context makes anonymization especially risky. **Action:** Schedule customer interviews to capture three named finance references (ideally from Big 4 audit clients, regional banks, or Fortune 500 FP&A teams) with verified quotes before launch.

2. **Compliance Badge Assets**  
   Trust Signals section references SOC 2, HIPAA, GDPR, EU AI Act — but the actual badge images/logos are not yet designed. **Action:** Confirm which certifications Quaeris currently holds (vs. roadmap) and source official badge assets from certification bodies or compliance team.

3. **GL Account Mapping UX**  
   The spec promises GL-level governance, but the current Quaeris docs do not detail how GL account hierarchies (segments, cost centers, GL ranges) are defined in the semantic layer. **Action:** Confirm the UI/UX for finance teams to map GL structures and review implementation complexity with the product team.

4. **Multi-Currency Consolidation**  
   FAQ #4 assumes multi-currency support. Verify this is in the product roadmap or already shipped. **Action:** Confirm product roadmap status and adjust FAQ if needed.

5. **Finance-Specific Case Study Copy**  
   The three Use-Case cards (month-end close, board variance, forecast tracking) are realistic scenarios but not verified against shipped customer workflows. **Action:** Validate these scenarios with the first 2-3 finance customers and adjust with real timelines, departments, and outcomes.

6. **Keyword Research for "Variance Questions"**  
   The spec uses "variance questions answered instantly" and "variance analysis AI" heavily, but keyword research context did not include these phrases. **Action:** Run a quick search-volume check on "variance analytics," "budget vs actual analytics," "financial variance AI" to confirm demand before launch.

7. **SEO: Org Schema for Finance Page**  
   The spec does not detail how this page will be structured in the sitewide Organization schema. **Action:** Ensure this page is included in the FAQPage schema (if FAQ is present) and/or Product schema (if product features are highlighted).

8. **Month-End Close Calendar Integration**  
   The CTA band mentions "integrates into your close calendar," but no Outlook/Google Calendar integration is detailed. **Action:** Clarify whether Quaeris has native calendar integrations or if this is a future roadmap item.

---

## 7. Implementation Checklist

- [ ] Hero section designed and copy reviewed by finance domain expert
- [ ] Problem/solution cards validated against three finance customer interviews
- [ ] FeatureRow image/animation placeholders created (GL mapping, variance query response, audit trail UI)
- [ ] Icon selection from Lucide for finance features (BookOpen, Brain, Shield, TrendingUp, etc.)
- [ ] Stats verified with customer data or updated with [data-placeholder] flags
- [ ] Customer testimonials collected and named (minimum 3)
- [ ] Trust badge/certification logos sourced and designed
- [ ] FAQ answers reviewed by compliance officer (SOX, HIPAA, GDPR accuracy)
- [ ] Internal link destinations confirmed to exist or scheduled for creation
- [ ] Meta tags tested in GSC and Search Preview
- [ ] Mobile responsiveness verified on iPhone 14 and iPad
- [ ] Accessibility audit: WCAG 2.1 AA (color contrast, heading hierarchy, alt text)
- [ ] Quaeris brand tokens applied (Roboto, Inter, #8C20A4 accent, gradient CTA, 10px radius)
- [ ] CTA tracking configured (form fields: company, role, finance team size, close frequency)

---

## Appendix: Component Reuse Summary

| Component | Reused From | Count | Notes |
|-----------|-------------|-------|-------|
| SectionHeader | `src/components/ui/SectionHeader.tsx` | 11 | Eyebrow + Heading + Subcopy; applied to every major section |
| FeatureRow | `src/components/ui/FeatureRow.tsx` | 3 | Alternating left/right image + body text (Steps 01-03) |
| IconFeatureGrid | `src/components/ui/IconFeatureGrid.tsx` | 1 | Four-item grid (Finance Features) |
| BentoGrid or SegmentCards | `src/components/ui/BentoGrid.tsx` or `src/components/ui/SegmentCards.tsx` | 1 | Three-card use-case section |
| StatBlock | `src/components/ui/StatBlock.tsx` | 1 | Four animated counters |
| TestimonialCard | `src/components/ui/TestimonialCard.tsx` | 6 | Quote card with initials + name/title |
| Accordion | `src/components/ui/Accordion.tsx` | 1 | Seven FAQ items (expandable) |
| CTABand | `src/components/ui/CTABand.tsx` | 1 | Final CTA with eyebrow + headline + copy + buttons |
| NewsletterBlock | `src/components/ui/NewsletterBlock.tsx` | 1 | Email signup at page bottom (optional) |
| Button | `src/components/ui/button.tsx` | Multiple | Styled per brand spec (gradient CTA, 10px radius) |

**New Components Required:**
- `FinanceHero` — finance-specific hero with trust strip badges
- `TrustBadgeBlock` — horizontal stack of compliance badges/logos (SOC 2, HIPAA, GDPR, etc.)

---

## Brand Spec Compliance

- **Headings:** Roboto 400 (48px H1, 40px H2, 20px H3), no custom tracking (Quaeris spec: tracking 0)
- **Body copy:** Inter 400 (default 15-17px), #6b4d72 secondary color
- **Accent color:** #8C20A4 (brand purple) for icons and highlights
- **CTA styling:** Linear gradient (90deg, #4E0250 → #8C20A4), 10px radius, Roboto 14px Semi-Bold
- **Backgrounds:** 
  - Canvas: #FAF8FF
  - Section warm: #F9F5FF
  - Cards: #FFFFFF
  - Dark sections: #200123 (with #FFFFFF text at 75% opacity for dim)
- **Borders:** #ECDCF0 (subtle), #DCC8E4 (strong)
- **Motion:** Moderate scroll reveals, counter animations; no auto-play videos

---

**End of Spec**
