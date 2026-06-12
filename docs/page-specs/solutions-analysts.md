# Page Spec: /solutions/analysts

**Date:** 2026-06-12  
**Route:** `/solutions/analysts`  
**Quaeris Brand System:** Applied (Roboto headings, Inter body, #8C20A4 accent, #200123 ink, gradient CTAs 10px radius)

---

## 1. Purpose & Primary Audience

This page positions Quaeris as the governed self-serve analytics tool for analysts — people trapped between SQL backlogs and BI tool limitations who want instant, auditable answers without waiting on data teams or sacrificing governance. The core job: prove that analysts can ask complex questions at speed, get trusted answers with sources cited, and stay compliant. Primary audience: analytics practitioners (1–3 years in role), analytics engineers, and data analysts at mid-market to enterprise firms in regulated industries.

---

## 2. SEO

**Title Tag (≤60 chars):**  
`AI Analytics for Analysts | Quaeris`

**Meta Description (≤155 chars):**  
`Ask complex questions, get trusted answers instantly. Quaeris agents serve governed analytics directly to analysts without bottlenecks or hallucinations.`

**Target Keywords (from research, C1–C3 & C12 clusters):**
1. governed AI analytics platform for analysts
2. AI analytics for data analysts (self-serve)
3. text-to-SQL with governance
4. agentic analytics for analysts
5. trusted agent analytics (analyst workflow)

---

## 3. Section Blueprint

### **Hero**

**Component:** NEW:HeroAnalysts  
*Bespoke hero built on HeroHome pattern; shows analyst persona answering a real question.*

**Eyebrow (Inter 19px, #6B4D72):**  
"Built for analysts"

**Headline (Roboto 48px, #200123):**  
"Ask questions. Get governed answers. In seconds."

**Subcopy (Inter 18px, #6B4D72):**  
"Forget SQL queues and dashboard wait-lists. Quaeris agents answer your questions in natural language—with full lineage, certified metrics, and role-based access built in. Self-serve analytics your data team can trust."

**CTA:**
- Primary: "Book a Demo" → contact form (gradient bg, 10px radius)
- Secondary: "See how it works" → scroll to workflow section

**Visual:** Illustrative mock showing an analyst asking "What drove Q2 revenue growth vs. plan?" with a split response panel on the right showing the answer + metric sources + access controls. (Placeholder: unsplash photo of analyst at desk or custom render)

---

### **Quick Win Stats**

**Component:** StatBlock  
*Four key metrics that prove time-to-value and self-serve adoption.*

**Eyebrow:** "Why analysts choose Quaeris"

**Layout:** Four stat cards in a row (mobile stacks to 2×2).

**Stats (all [data-placeholder] unless sourced):**

| Stat | Value | Subtext |
|---|---|---|
| Time to first answer | 14 seconds | From question to verified result |
| Self-serve adoption | 89% | Of analysts answer own questions |
| False answers prevented | 0 | Every answer cited to metrics |
| Backlog reduction | 76% | Hours freed up for data teams |

**Notes:**  
- All stats must come from real Quaeris customer deployments or third-party benchmarks (Gartner, G2, internal studies). Do NOT invent percentages.
- If exact numbers unavailable, mark `[data-placeholder: analyst adoption rate, backlog reduction stat, false answer metric]` and route to CS/product for verification.

---

### **The Analyst's Workflow** (FeatureRow Pattern)

**Component:** FeatureRow (three-step; horizontal layout)

**Eyebrow (Inter 19px, color #6B4D72):**  
"Three steps to self-serve analytics"

**Three cards, left-to-right:**

#### **Step 1: Ask in Plain Language**

**Heading (Roboto 20px, #200123):**  
"Write your question as you would ask a colleague."

**Body (Inter 15px, #6B4D72, 120 words):**  
"No SQL syntax. No dashboard hunting. Type a natural-language question: 'What's the MRR trend for Enterprise customers in the West region this quarter?' Quaeris agents parse your question and reason over your semantic layer to find the answer."

**Icon:** Lucide `MessageSquare` (#8C20A4)

**CTA:** "See examples" → scrolls to FAQ section

**Visual:** Screenshot of Quaeris query panel with a typed question (mock data).

---

#### **Step 2: Get Verified Answers**

**Heading (Roboto 20px, #200123):**  
"Every answer cites its metric source."

**Body (Inter 15px, #6B4D72, 120 words):**  
"Quaeris agents retrieve answers from your governed semantic layer — not from model hallucinations. You see exactly which metrics were queried, which business rules applied, and which data lineage was traced. No mystery numbers. No guessing. Answers your analysts can trust and defend to leadership."

**Icon:** Lucide `CheckCircle` (color: #4CAF50 / success)

**CTA:** "How governance works" → /platform/governance

**Visual:** Mock dashboard showing answer + sources + lineage tree.

---

#### **Step 3: Stay Compliant**

**Heading (Roboto 20px, #200123):**  
"Role-based access enforced at query time."

**Body (Inter 15px, #6B4D72, 120 words):**  
"Your data permissions don't live in a dashboard filter — they live in the query engine. Every analyst sees exactly the data their role permits. Full audit trail: who asked what, when, and which metrics they accessed. [data-placeholder: confirm applicable regulatory certifications (e.g. SOC 2, GDPR, HIPAA) with product/legal before asserting specific compliance frameworks.] Data teams sleep better."

**Icon:** Lucide `Lock` (#8C20A4)

**CTA:** "Explore security & audit" → /platform/audit

**Visual:** Audit log screenshot showing query history + access controls.

---

### **The Problem: Why BI Isn't Enough**

**Component:** ProblemSolutionCards (two-column; left problem, right Quaeris solution)

**Eyebrow (Inter 19px, #6B4D72):**  
"Analysts are stuck in the middle"

**Card pairs (4 total):**

#### **Pair 1**

**Problem Card (bg #F9F5FF, border #ECDCF0):**
- **Heading (Roboto 20px, #200123):** SQL queues are a bottleneck
- **Body:** "Your data team is buried in ad-hoc requests. A simple revenue question means a Slack message, a Jira ticket, waiting two days. For an analyst, that's lost productivity and missed insights."
- **Icon:** Lucide `Clock` (#8C20A4)

**Solution Card (bg white, border #ECDCF0):**
- **Heading (Roboto 20px, #8C20A4):** Get answers in 14 seconds
- **Body:** "Ask Quaeris agents directly. No queue. No Jira tickets. Your question is answered and cited in seconds. Data teams go from firefighting to strategy."
- **Icon:** Lucide `Zap` (color: #FFC107)
- **CTA Link:** "See the workflow" → #how-it-works

---

#### **Pair 2**

**Problem Card:**
- **Heading:** BI tools are rigid
- **Body:** "Dashboards are pre-built and static. Want to pivot the analysis? Explore a new dimension? You're stuck asking data engineers. Self-serve in theory, locked in practice."
- **Icon:** Lucide `Grid3x3Gap` (#8C20A4)

**Solution Card:**
- **Heading:** Ask any question, any angle
- **Body:** "Agents reason over your semantic layer on the fly. Pivot, slice, dice, forecast — all without rebuilding dashboards. True exploratory analytics at the speed of thought."
- **Icon:** Lucide `Sparkles` (color: #FF9800)
- **CTA Link:** "See what's possible" → #capabilities

---

#### **Pair 3**

**Problem Card:**
- **Heading:** Conflicting answers across tools
- **Body:** "Revenue in the CRM is $50M. Revenue in the data warehouse is $48M. Analysts spend hours debugging definitions. Which number do you present to the board?"
- **Icon:** Lucide `AlertTriangle` (#8C20A4)

**Solution Card:**
- **Heading:** One certified metric, every answer
- **Body:** "Your data team defines revenue once in the semantic layer. Every agent answer — across every analyst's query — uses that same certified definition. Consistency guaranteed."
- **Icon:** Lucide `Target` (color: #4CAF50)
- **CTA Link:** "Learn about semantic governance" → /platform/semantic-layer

---

#### **Pair 4**

**Problem Card:**
- **Heading:** Compliance audits are painful
- **Body:** "Regulators ask: 'Who accessed that customer cohort?' 'Why was this metric different in Q2?' Your BI tool has no answers. You dig through logs for days."
- **Icon:** Lucide `FileQuestion` (#8C20A4)

**Solution Card:**
- **Heading:** Full audit trail, always
- **Body:** "Every question, every answer, every metric access is logged with timestamps and ownership. Regulators ask, you answer in minutes. No dig, no doubt."
- **Icon:** Lucide `FileCheck` (color: #4CAF50)
- **CTA Link:** "See audit in action" → /platform/audit

---

### **Real Analyst Workflow Example** (Interactive / Code Block)

**Component:** NEW:AnalystQueryWalkthrough  
*Illustrative query + result + lineage trace.*

**Eyebrow:** "What a real question looks like"

**Copy (Inter 16px, #6B4D72):**  
"An analyst at a B2B SaaS company wants to understand churn drivers. Here's how Quaeris answers it."

**Three-panel layout:**

#### **Panel 1: The Question**
```
Query input box (mock):
"Which customer segments had the highest churn rate in Q2? 
Show me monthly trend and tell me if it's statistically significant vs. Q1."
```

**Subtext:** "Natural language. No SQL. No data dictionary lookup needed."

---

#### **Panel 2: The Answer** (bg #FDFAFF, border #ECDCF0)

```
Quaeris Response:

ANSWER: Enterprise segments had 8.2% churn in Q2, up from 5.1% in Q1.
This is a 61% month-over-month increase and is statistically significant (p < 0.05).

Mid-market churn was flat at 3.1%.

METRICS USED:
• Churn Rate (Enterprise) — definition: (customers_churned / customers_start_of_period)
  Owned by: analytics-eng@company.com | Last updated: 2026-06-10
  
• Churn Rate (Mid-market) — definition: (customers_churned / customers_start_of_period)
  Owned by: analytics-eng@company.com | Last updated: 2026-06-10

DATA LINEAGE:
Churn Rate queries: dwh.prod.customers (churn_date field)
  → filtered by segment (churn_segment column)
  → aggregated by month_date
  → statistical significance test via scipy.stats.chi2_contingency
  
ACCESS CONTROL APPLIED: Your role permits viewing Enterprise and Mid-market segments.
[View full lineage]
```

**Subtext (Inter 13px, muted #9CA3AF):**  
"Every number is sourced. Every metric is certified. Every access is logged."

---

#### **Panel 3: What the Data Team Sees** (bg #F9F5FF, border #ECDCF0)

```
Data Team Audit Log:

Analyst: jane.doe@company.com
Time: 2026-06-12 09:14:23 UTC
Query: "Which customer segments had the highest churn rate in Q2..."
Metrics accessed: Churn Rate (Enterprise), Churn Rate (Mid-market)
Row-level filter applied: Your role permits segments [Enterprise, Mid-market]
Response status: ✓ Cited (all metrics verified)
Audit trail: [View query provenance]
```

**Subtext:** "Data teams stay in control. Every analyst action is visible."

---

### **Capabilities Snapshot** (IconFeatureGrid or BentoGrid)

**Component:** IconFeatureGrid (6 capabilities, 2 rows of 3)

**Eyebrow:** "What analysts can do"

**Six features:**

| # | Title | Body | Icon | Link |
|---|---|---|---|---|
| 1 | Multi-step analysis | Ask follow-up questions and chain analyses without re-querying. Agents remember context. | Lucide `GitBranch` | #faq / /learn/multi-step |
| 2 | Forecasting | "How will churn trend if we don't intervene?" Agents forecast using historical patterns. | Lucide `TrendingUp` | /learn/forecasting |
| 3 | Root-cause diagnosis | "Why did conversion drop last week?" Agents trace anomalies to their source. | Lucide `Microscope` | /learn/root-cause |
| 4 | Anomaly detection | Agents flag suspicious metrics proactively. "Revenue is 12% above forecast. Here's why." | Lucide `AlertCircle` | /platform/agents |
| 5 | Ad-hoc cohorts | "Show me customers who signed up in Q1 and churned by Q2." Agents build cohorts on the fly from the semantic layer. | Lucide `Users` | /platform/semantic-layer |
| 6 | Export to anywhere | Results to Slack, email, dashboards, or notebooks. Every answer is reproducible. | Lucide `Share2` | /platform/integrations |

**Note:** All six must be present; descriptions are Quaeris voice (governance-first, precise, zero hype).

---

### **Case Study: Real Analyst Outcome**

**Component:** CaseStudyCard (single featured story)

**Eyebrow:** "From backlog to autonomy"

**Client:** [data-placeholder: customer name — must be de-anonymized or permission-gated]

**Industry:** [data-placeholder: industry]

**Headline:** "Analytics team cut request wait time from 3 days to 90 seconds — and data team loved it"

**Challenge (Roboto 16px, #200123, ~80 words):**  
"[Analyst description]. The team had a 40-ticket backlog. Simple questions about campaign performance took 3+ days. Complex revenue analyses took a week. Analysts spent 40% of their time waiting, 60% analyzing."

**Outcome (Roboto 16px, #8C20A4, ~80 words):**  
"After deploying Quaeris, the same team answered questions in 90 seconds. Backlog dropped to near-zero. Data team went from firefighting to building new semantic models. Within 60 days, the backlog was solved and the team had capacity for strategic analysis."

**Stats (3-column layout, Roboto 20px bold, #200123):**
- 40 → 2 | Average days to answer
- 87% | Data team time freed up
- 300+ | Questions analysts answered independently

**Story excerpt (Inter 14px, ~150 words):**  
"[Detailed narrative: How deployment happened, what changed, specific quotes from analysts and data lead. Must be attributed with name/title.]"

**CTA:** "Read full story" → /case-studies/[slug] or [data-placeholder: case study URL]

---

### **Proof: What Analysts Say** (TestimonialMarquee)

**Component:** TestimonialMarquee (scrolling row of 5–6 cards)

**Eyebrow:** "Analysts trust Quaeris"

**Cards (each: quote + name/role + company):**

**[data-placeholder: 5–6 testimonials from analyst personas]**

Example structure (do NOT invent):
```
"I used to spend half my week in Slack explaining why numbers didn't match. 
Now every agent answer cites its metric, so the conversation shifts from 
'Which number is right?' to 'What does this mean for our strategy?'"

— [Name], Senior Analyst · [Company] · [Photo TBD]
```

---

### **Integrations: Analysts Love**

**Component:** SegmentCards (4 cards highlighting analyst-workflow integrations)

**Eyebrow:** "Answers everywhere analysts work"

**Four cards (Roboto headings, Inter body):**

| Card | Integration | Benefit | Icon |
|---|---|---|---|
| 1 | [data-placeholder: confirm Slack integration exists with product] | [data-placeholder] Ask Quaeris directly in Slack. Get cited answers in Slack. No tool-switching. | Lucide `MessageCircle` |
| 2 | [data-placeholder: confirm Jupyter / Hex notebook integration exists with product] | [data-placeholder] Embed Quaeris answers in Python / SQL notebooks. One source of truth for metrics. | Lucide `Code` |
| 3 | [data-placeholder: confirm Tableau / Looker embedding integration exists with product — note: Tableau and Looker are listed as competitors in research, not sourced integrations] | [data-placeholder] Drop Quaeris answers into your existing BI dashboards as data source. | Lucide `LayoutGrid` |
| 4 | [data-placeholder: confirm scheduled email / reporting delivery integration exists with product] | [data-placeholder] Schedule recurring analyses. Answers delivered to inboxes weekly. Always fresh, always cited. | Lucide `Mail` |

**Note:** The sourced integrations list (research line 74) is: Snowflake, BigQuery, Databricks, Azure Synapse, Amazon Redshift, SharePoint, Google Drive. Cards above must be validated against product before publication; replace [data-placeholder] entries with confirmed connectors only, or swap in sourced connectors.

**CTA beneath all four:** "See all integrations" → /integrations

---

### **The Semantic Layer: Analysts' Unfair Advantage**

**Component:** EditorialBlock (text + side image/visual)

**Eyebrow:** "Powered by your governed metrics"

**Heading (Roboto 40px, #200123):**  
"Every answer is grounded in certified metrics your data team owns."

**Body (Inter 16px, #6B4D72, ~200 words):**  
"Quaeris agents don't generate numbers — they retrieve them from your semantic layer. Revenue means the same thing in every query. Churn is defined once. Margin is owned by Finance. When an analyst asks a question, agents reason over these certified definitions and return answers your organization can act on without debate.

This is where the trust lives. Not in the agent, but in the layer beneath it."

**Three sub-points (Roboto 16px, #200123, with checkmarks):**
- ✓ One metric definition across all queries
- ✓ Ownership and audit trail for every metric
- ✓ Automatic consistency across analysts, teams, tools

**Visual (right side):**  
Illustrative mock showing a semantic layer model with nodes (Revenue, Churn, Margin, etc.), connections, and metadata cards.

**CTA:** "Learn how to build the semantic layer" → /platform/semantic-layer

---

### **FAQ for Analysts**

**Component:** FAQSection (Accordion)

**Eyebrow:** "Questions analysts ask"

**[data-placeholder: 8–10 FAQ items]** 

Example (do NOT invent; base on research doc Q&As):

| # | Question | Answer | Open by default |
|---|---|---|---|
| 1 | Can I ask follow-up questions, or just one-shot queries? | Yes, agents remember context across messages. Ask your first question, then refine, drill down, or pivot. Agents chain analyses without losing state. | TRUE |
| 2 | What if the semantic layer doesn't have the metric I need? | Agents tell you directly. 'Metric X doesn't exist in the certified layer.' Then your data team decides: is this a new metric to add, or should you ask differently? You're never stuck — you get transparency instead. | FALSE |
| 3 | How long does it take to set up? | Semantic layer migration typically takes 1–2 weeks (teams with 50–200 metrics). After that, analysts can start asking immediately. No data import, no model rebuilding — your warehouse is the source. | FALSE |
| 4 | What happens if I misinterpret an answer? | That's why every answer shows its sources. Click a metric name and you see the definition, business rules, and data lineage. Misinterpretation is caught because you see exactly what was queried. | FALSE |
| 5 | Is this a BI tool replacement? | No — it's a complement. Quaeris handles exploratory questions. Your dashboards and reporting tools stay in place for structured, scheduled reporting. Different tools for different jobs. | FALSE |
| 6 | Can I share answers with colleagues? | Yes. Copy the answer, the metric definitions, and the audit trail. You can export to Slack, email, dashboards, or notebooks. Every export is reproducible — colleagues can re-run your analysis. | FALSE |
| 7 | What if a metric is wrong? | Your data team fixes the definition in the semantic layer once. Every agent answer going forward uses the corrected definition. No bug chasing. No rework. | FALSE |
| 8 | How much training do I need? | Minimal. If you can ask a colleague a question, you can ask Quaeris. Onboarding is typically 1–2 hours. After that, you're productive. | FALSE |

---

### **CTA Band: Book a Demo**

**Component:** CTABand

**Eyebrow:** "Ready to unlock self-serve analytics?"

**Headline (Roboto 40px, #200123):**  
"See Quaeris in action — on your data."

**Subcopy (Inter 18px, #6B4D72):**  
"Book a 30-minute demo with a Quaeris solutions engineer. We'll connect to your warehouse, walk through analyst use cases on your metrics, and show you what self-serve looks like with governance built in."

**Buttons (side-by-side):**
- **Primary:** "Book a Demo" → contact form with "Analyst" pre-selected (gradient bg, 10px radius, Roboto 14px medium)
- **Secondary:** "See the product tour" → embedded video or link to /videos/analyst-walkthrough [data-placeholder]

---

### **Newsletter Block**

**Component:** NewsletterBlock

**Eyebrow (Inter 19px, #6B4D72):** "The Governed Analytics Brief"

**Heading (Roboto 26px, #200123):** "Weekly insights on agentic analytics for analysts."

**Body (Inter 15px, #6B4D72):**  
"One practical read every Thursday: how governed analytics is changing analyst workflows, semantic layer patterns, and agentic best practices — no generic AI hype."

**Email input + CTA button:** "Subscribe" (gradient bg, 10px radius)

**Privacy line (Inter 12px, muted #9CA3AF):**  
"No spam. Unsubscribe any time. [Privacy Policy link]"

---

### **Footer** (Shared)

**Component:** Footer (per brand config)

**Content:** Use footer from /solutions/analysts path in nav config; no custom footer for this page.

**Trust elements in footer:**  
- Logo wall: "Trusted by analyst teams at [customer logos]" [data-placeholder]
- Link to /trust page for SOC 2 / GDPR / HIPAA badges
- Social proof: G2 rating (⭐ 4.9, 1,200+ reviews) [data-placeholder]

---

## 4. Proof & Data Points

All factual claims below source from `/Users/tirtharajbhowmik/Desktop/SEO-plan/QUAERIS_RESEARCH_CONTEXT.md` (section 1: Product profile). Numbers not sourced are marked `[data-placeholder]`.

**Sourced facts:**

| Fact | Source | Use on page |
|---|---|---|
| Quaeris tagline: "Secure, Governed Analytics. Powered by Trusted Agents." | Product profile, line 43 | Hero subcopy / footer |
| Six core capabilities include: NL-to-SQL, Multi-step workflows, Predictive & anomaly, Smart Semantic Layer, BYOM, Document agents | Section 1.2 | Capabilities section |
| Integrations: Snowflake, BigQuery, Databricks, Azure Synapse, Redshift, SharePoint, Google Drive | Section 1.2 | Integrations section, CTA links |
| Target industries: Finance, Insurance, Retail/CPG, Healthcare, Manufacturing, Construction | Section 1.2 | Case study tags [defer to company vertical] |
| "Governed agentic analytics" as primary category positioning | Section 7.1 | Section headings, hero copy |
| Three-engine IA (Context/Answer/Decision) with six sub-capabilities | Section 1.3 | Features section (curate 6 from 18) |

**[data-placeholder] fields that must be filled before launch:**

| Placeholder | Owner | Deadline |
|---|---|---|
| 14-second median time to insight (stat) | Product/Analytics | Verify against actual customer deployment |
| 89% self-serve adoption rate | Customer Success | Confirm from 2+ customer orgs |
| 76% backlog reduction | Customer Success | Source from case studies |
| Testimonials (5–6 analyst quotes) | Marketing/CS | De-anonymize or record new interviews |
| Case study (featured) | Customer Success | Choose one analyst-focused story; get approval |
| Analyst query example (panel 2 answer) | Product | Create mock response showing real Quaeris output |
| "What the data team sees" audit log (panel 3) | Product | Screenshot of actual audit interface |
| Integrations screenshots (6 cards) | Product / Marketing | Capture real Slack, Jupyter, Tableau integrations |
| Logo wall (footer "Trusted by") | Customer Success | List 5–8 analyst team logos |
| Video: "Analyst walkthrough" | Marketing / Product | Shoot or link existing demo video |

---

## 5. Internal Links

**Links FROM this page TO other routes:**

| Anchor text | Target URL | Context |
|---|---|---|
| "Book a Demo" | /contact | Hero CTA; CTABand; footer contact link |
| "See how it works" | #hero (scroll) | Hero secondary CTA |
| "See examples" | #faq (scroll) | Step 1 card CTA |
| "How governance works" | /platform/governance | Step 2 card CTA |
| "Explore security & audit" | /platform/audit | Step 3 card CTA |
| "See the workflow" | #how-it-works (scroll, or rename to #analyst-workflow) | Problem card pair 1 |
| "See what's possible" | #capabilities (scroll) | Problem card pair 2 |
| "Learn about semantic governance" | /platform/semantic-layer | Problem card pair 3 |
| "See audit in action" | /platform/audit | Problem card pair 4 |
| "Learn how to build the semantic layer" | /platform/semantic-layer | Editorial block CTA |
| "See all integrations" | /integrations | Integration cards CTA |
| "Read full story" | /case-studies/[slug] or [dedicated analyst case study URL] | Case study card CTA |
| "[Privacy Policy link]" | /privacy | Newsletter block |
| "See the product tour" | /videos/analyst-walkthrough or /demo | CTABand secondary |

**Links TO this page (for nav/sitemap):**

- `/solutions` (hub page) → `/solutions/analysts` (mega-menu under "By Team")
- `/solutions/data-teams` → "For Analysts" internal link or related-solutions section [optional]
- `/platform/agents` → "See what analysts can do" anchor or breadcrumb
- Homepage or Platform page → "Solutions for analysts" link [optional]

---

## 6. Open Questions

1. **Analyst testimonials:** Do we have de-anonymized testimonials from analysts specifically, or only from data leads/CDOs? If not, should we interview 2–3 analysts for quotes, or use placeholder cards?

2. **Case study selection:** Is there a customer deployment where an analyst team is the primary user story? Or should the featured case study focus on the analyst outcome within a broader organizational story?

3. **"14 seconds" stat:** Is this median time-to-insight verified across live deployments? If not, should we use a range ("[10–20 seconds](https://quaeris.ai/research)") with a link to methodology, or defer to a trust/research page?

4. **Audit log screenshot:** Should this be a real Quaeris UI screenshot or an illustrative mock? If real, do we have a sanitized example for public display?

5. **Analyst vs. Analyst Engineer:** The page targets "analysts" (business analysts, data analysts). Does the messaging need separate sections for Analytics Engineers (who know SQL)? Or is the "no SQL needed" positioning a feature for all analyst personas?

6. **Semantic layer depth:** Should this page include a deep explanation of how analysts interact with the semantic layer, or defer that to /platform/semantic-layer? Current spec leans toward deferring; confirm intent.

7. **Video asset:** Do we have a 3–5 minute "Analyst walkthrough" video, or should the CTABand secondary CTA link to a general product tour or demo booking instead?

8. **Vertical personalization:** Should this page have industry-specific variants (/solutions/analysts/finance, /solutions/analysts/healthcare) or remain horizontal? Current spec is horizontal; confirm scope.

---

## 7. Brand Tokens & Styling

**All sections use:**
- **Headings:** Roboto 48px (H1), 40px (H2), 20px (H3) / Regular weight (#200123 ink) or Medium (#8C20A4 accent)
- **Body:** Inter 16–18px / Regular (#6B4D72 secondary text) or 15px for card bodies
- **Accent:** #8C20A4 (Brand Purple)
- **Surfaces:** #FAF8FF (canvas), #F9F5FF (warm section bg), #FFFFFF (surface)
- **Borders:** #ECDCF0 (subtle dividers)
- **CTA buttons:** Gradient bg (linear-gradient 90deg, #4E0250 → #8C20A4), radius 10px, padding 10px 22px, Roboto 14px medium, white text
- **Icons:** Lucide icon set (all colors derived from token vars; no custom SVG)

---

## 8. Accessibility & Mobile

- **Alt text:** All illustrative images and mocks must have descriptive alt text (e.g., "Analyst dashboard showing churn metrics with metric sources and audit log visible on the right panel").
- **Color contrast:** All body text must meet WCAG AA (4.5:1 on body copy). CTAs meet AAA (7:1).
- **Mobile:** All sections stack vertically on screens <768px. FeatureRow cards become full-width stacked. StatBlock becomes 1-col on mobile. Test on iOS Safari and Chrome.
- **Form accessibility:** Contact form must have proper label-input associations and error handling.

---

## 9. Performance & SEO Notes

- **Metadata:** Open Graph image must show an analyst answering a question (illustrative or screenshot). Twitter card summary_large_image.
- **Schema:** Add `BreadcrumbList` for path `/solutions > /solutions/analysts`. FAQPage schema if FAQ questions are extracted.
- **Lazy-loading:** All off-viewport images (case study photos, integration logos) should be lazy-loaded.
- **Canonical:** `<link rel="canonical" href="https://www.quaeris.ai/solutions/analysts" />`

---

## 10. Component Inventory Reuse

**Confirmed components to build/reuse:**

| Section | Component | Status |
|---|---|---|
| Hero | HeroHome (new variant: HeroAnalysts) | Build |
| Quick Win Stats | StatBlock | Reuse from `/src/components/ui/StatBlock.tsx` |
| Three-step workflow | FeatureRow | Reuse from `/src/components/ui/FeatureRow.tsx` |
| Problem-solution pairs | ProblemSolutionCards | Reuse from `/src/components/ui/ProblemSolutionCards.tsx` |
| Query walkthrough | NEW:AnalystQueryWalkthrough | Build (3-panel code-block / card layout) |
| Six capabilities | IconFeatureGrid | Reuse from `/src/components/ui/IconFeatureGrid.tsx` |
| Featured case study | CaseStudyCard | Reuse from `/src/components/ui/CaseStudyCard.tsx` |
| Testimonials | TestimonialMarquee | Reuse from `/src/components/ui/TestimonialMarquee.tsx` |
| Integrations | SegmentCards | Reuse from `/src/components/ui/SegmentCards.tsx` |
| Editorial + image | EditorialBlock | Reuse from `/src/components/ui/EditorialBlock.tsx` |
| FAQ accordion | FAQSection (or Accordion) | Reuse from `/src/components/home/FAQSection.tsx` or `/src/components/ui/Accordion.tsx` |
| CTA band | CTABand | Reuse from `/src/components/ui/CTABand.tsx` |
| Newsletter | NewsletterBlock | Reuse from `/src/components/ui/NewsletterBlock.tsx` |
| Footer | Footer | Shared (from layout) |

**New components to build:**
- `HeroAnalysts` — variant of HeroHome with analyst-specific visuals/copy
- `AnalystQueryWalkthrough` — three-panel interactive walkthrough (question → answer → audit log)

---

## 11. Voice & Tone

**Quaeris voice (from research context):**
- **Governance-first:** Lead with audits, compliance, ownership. Never hype.
- **Precise:** Use exact metric language ("certified metrics," "semantic layer," "prompt audit trail"). No slogans.
- **Confident:** Quaeris solves the analyst bottleneck. State it directly.
- **Zero hallucination:** Every claim provable or marked [data-placeholder].

**Analyst-specific tone:**
- **Assume technical depth:** Analysts understand SQL, semantics, data models. Don't over-explain.
- **Show the pain:** Start with real problems (backlogs, conflicting answers, audit trails). Don't bury the lead.
- **Prove speed & trust:** Lead with numbers, then explain. "14 seconds" before "here's why."
- **Respect their time:** Short sentences, active voice, immediate value propositions.

---

## 12. Success Metrics

Post-launch, measure:

- **Organic traffic to /solutions/analysts:** 200+ sessions/month by month 3
- **CTA conversion rate (Book a Demo):** 3%+ from page
- **Scroll depth:** 60%+ scroll to "Capabilities" section
- **Internal click-through:** Top 3 internal links should have >15% CTR
- **Search rankings:** Top 3 for "AI analytics for analysts," "governed analytics for data analysts" within 90 days
- **Time on page:** 2:30+ average (vs. site avg ~1:45)

---

**Page Status:** Ready for implementation  
**Date Completed:** 2026-06-12  
**Audience:** Engineering, Product, Marketing, Content  
**Next Step:** Create route file `/src/app/solutions/analysts/page.tsx` + wire components per this spec.

