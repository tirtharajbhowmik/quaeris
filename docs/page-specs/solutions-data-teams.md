# Page Specification: /solutions/data-teams

**Quaeris.ai — Solutions Hub**  
**Route:** `/solutions/data-teams`  
**Status:** Implementation-ready  
**Last updated:** 2026-06-12

---

## 1. Purpose & Primary Audience

This page positions Quaeris as the solution that transforms data teams from reactive (drowning in ad-hoc request backlogs) to proactive (enabling governed self-serve). The primary audience is **Head of Data, VP Analytics, Data Engineering Lead** — the people accountable for both delivery speed AND governance control. Secondary audience: individual analytics engineers and data analysts curious about how self-serve tools can reduce their workload without creating chaos. The page sits in the marketing funnel's **awareness-to-consideration** phase, laddering back to the broader "Governed Agentic Analytics" category claim while speaking directly to the data team's budget and pain points.

---

## 2. SEO

| Element | Value |
|---------|-------|
| **Title tag** (<=60 chars) | `AI Analytics for Data Teams — Reduce Request Backlog` |
| **Meta description** (<=155 chars) | `Give your data team breathing room. Quaeris enables governed self-serve analytics — shrink ad-hoc queues, empower the business, stay in control.` |
| **Target keywords** (5) | `AI analytics for data teams`, `governed self-serve analytics`, `reduce ad-hoc data requests`, `data team analytics platform`, `managed self-service BI` |
| **Keyword clusters** | C1 (Governed AI Analytics), C2 (Agentic BI), C5 (Smart Semantic Layer), C6 (Document + Warehouse), C12 (Role/Persona) |
| **Internal link anchors** | `/platform` (Core Capabilities), `/solutions/analysts` (downstream), `/solutions/executives` (upstream), `/solutions/finance` (use case), `/compare/*` (vs. competitors on self-serve) |

---

## 3. Section Blueprint

### 3.1 Hero Section
**Component:** `HeroHome.tsx` (reuse, adapted text)

**Copy:**

- **Eyebrow:** "For Data Teams"
- **Headline:** "Kill the ad-hoc request queue."
- **Subcopy:** "Business users ask their own questions. Your data team writes the rules, once. Quaeris handles the governance — so you can finally build instead of firefighting."
- **Primary CTA:** "Book a Demo"
- **Secondary visual:** Hero shows a split-screen motive: left side = chaos (stacks of Slack tickets, overflowing request queue), right side = calm (data team at whiteboard planning, self-serve dashboard in use). OR abstract: governed query panel showing an analyst hand-off. [data-placeholder: exact animation TBD]

**Type scale:** Roboto 48px H1, Inter 20px subheading, Roboto 17px body (from design spec). Gradient CTA at 10px radius.

**Note:** This is the team-specific variant of the homepage hero. The structure (eyebrow/headline/subcopy/CTA) reuses HeroHome; content is data-team-specific.

---

### 3.2 The Problem — Problem/Solution Cards
**Component:** `ProblemSolutionCards.tsx` (reuse)

**Copy:**

Three problem-solution pairs (left problem card, right solution card):

#### Problem 1: Request Backlog
- **Problem eyebrow:** "Today"
- **Problem title:** "Ad-hoc requests are drowning the team"
- **Problem body:** "Every Tuesday it's the same: revenue questions, cohort analyses, ad-hoc forecasts. Your data team is a ticket-processing machine. Strategy? Infrastructure? Hiring? There's no time."
- **Solution eyebrow:** "With Quaeris"
- **Solution title:** "Self-serve analytics shrinks the queue"
- **Solution body:** "Business users ask directly. The semantic layer gates the answers — no dangerous slicing, no mismatched metrics. Your team writes the rules once and scales from there."

#### Problem 2: Metric Chaos
- **Problem eyebrow:** "Today"
- **Problem title:** "Every team calculates revenue differently"
- **Problem body:** "Finance says one number, Product says another. Your data team has spent six months reconciling definitions across Tableau, Looker, and three homegrown dashboards. It's never consistent."
- **Solution eyebrow:** "With Quaeris"
- **Solution title:** "One semantic layer, one source of truth"
- **Solution body:** "Define revenue once in the semantic layer. Every self-serve query uses the same definition. When the metric changes, it changes everywhere — audited and visible."

#### Problem 3: Governance Risk
- **Problem eyebrow:** "Today"
- **Problem title:** "Self-serve means data leaks and wrong answers"
- **Problem body:** "You can't give business users direct access to your warehouse. There's no row-level security, no audit trail, and when someone exports sensitive data, you find out after the breach."
- **Solution eyebrow:** "With Quaeris"
- **Solution title:** "Governance enforced at query time"
- **Solution body:** "Role-based access controls are baked into the agent layer — users only see what they're permitted to see. Every query is logged. You maintain control while enabling access."

**Type scale:** Roboto 17px problem titles, Roboto 15px body text. Use `--text-secondary` (#6B4D72) for body, `--bg-accent-soft` (#FDFAFF) for card backgrounds.

---

### 3.3 Stats/Outcomes Band
**Component:** `StatsBand.tsx` (reuse)

**Copy and targets:**

| Stat | Value | Label | Delta/Context |
|------|-------|-------|---|
| Reduction in ad-hoc requests | 87% | Across deployed orgs | Median in first 90 days |
| Time to first insight | 14 min | From question to answer | vs. 2-3 day ticket queue |
| Metric definitions aligned | 100% | In the semantic layer | Single source of truth |
| Self-serve users enabled | 600+ | Without a single support ticket | Row-level security enforced |

**Source:** Research context homepages stat: "87% reduction in data-team ad-hoc requests, Across deployed orgs." All other stats are [data-placeholder] pending customer interviews or case study validation.

**Type scale:** Roboto 26px tagline (pull text), Inter 19px label, Roboto 15px delta.

---

### 3.4 How It Works — Four-Step Feature Grid
**Component:** `IconFeatureGrid.tsx` (reuse)

**Copy:**

**Section header:**
- Eyebrow: "How it works"
- Headline: "Governed self-serve in four steps"
- Subcopy: "Your data team sets the boundaries. Business users explore within them. No requests, no bottlenecks, no chaos."

**Four icons (Lucide):**

1. **Icon:** `lock` (or `shield`)  
   **Title:** "Write governance rules once"  
   **Body:** "Your data team defines the semantic layer: certified metrics, business logic, access policies. Role-based controls are baked in. When a metric changes, the whole organization sees the update."

2. **Icon:** `user-check`  
   **Title:** "Give business users direct access"  
   **Body:** "No more 'send me a query.' Business users open Quaeris and ask their questions in plain language. Agents reason over your governed semantic layer and return instant answers."

3. **Icon:** `search`  
   **Title:** "Every answer is auditable"  
   **Body:** "Users see the metric definitions and data lineage behind every answer. If the revenue number is wrong, you trace it back to the source in one click. Role-based access enforces permissions at query time — no breakglass moments."

4. **Icon:** `trending-up`  
   **Title:** "Your team scales without hiring"  
   **Body:** "Self-serve answers 80% of ad-hoc requests. Your data team shifts from ticket-processing to strategy: building forecasts, refining models, mentoring analysts. Finally, focus on the work that moves the business."

**Type scale:** Roboto 20px titles, Roboto 15px body. Icon color: `--brand-accent` (#8C20A4).

---

### 3.5 Feature Spotlight — FeatureRow (Dark/Elevated Section)
**Component:** `FeatureRow.tsx` (reuse, dark variant)

**Section layout:** Alternating text/image (text left, image right on desktop; stacked mobile).

**Copy:**

**Feature 1: Smart Semantic Layer (Left text, right image)**
- **Eyebrow:** "Core Capability 01"
- **Heading:** "The semantic layer learns as you use it."
- **Body:** "Quaeris watches how your team uses data. Business definitions, metric relationships, data lineage — the semantic layer auto-learns and surfaces suggestions. You don't have to pre-model everything in YAML. Your team approves, it learns."
- **CTA:** "Explore the semantic layer" → `/platform/semantic-layer`
- **Image:** [data-placeholder: screenshot of semantic layer interface showing metric suggestions, lineage, ownership badges]

**Feature 2: Governed Agents (Right text, left image)**
- **Eyebrow:** "Core Capability 02"
- **Heading:** "Agents that cite their sources."
- **Body:** "Business users ask natural-language questions. Agents translate to SQL, query the semantic layer, and return certified answers — not hallucinations. Every number shows its sources: which metric definition, which table, which business rule. Your team sleeps better."
- **CTA:** "See a live demo" → `/contact` (or `/demo`)
- **Image:** [data-placeholder: screenshot of agent conversation panel with citations/lineage UI]

**Feature 3: Access Control (Left text, right image)**
- **Eyebrow:** "Core Capability 03"
- **Heading:** "Security enforced at the agent layer."
- **Body:** "Role-based access policies are applied when the agent runs — not as a dashboard filter. A sales rep asking about customer lifetime value sees only their region's data. A controller asking about expenses sees only company-owned spend. Enforcement is automatic, audited, and consistent."
- **CTA:** "Read the governance blueprint" → `/blog/governed-analytics-blueprint` [data-placeholder]
- **Image:** [data-placeholder: diagram or screenshot showing role-scoped query results]

**Type scale:** Roboto 40px eyebrow and heading (section variant), Roboto 17px body, Inter 19px CTA.

---

### 3.6 Real Outcomes — Case Study Cards
**Component:** `CaseStudyCard.tsx` (reuse, or `ProofSection.tsx` for structured case studies)

**Copy:**

**Section header:**
- Eyebrow: "Real data teams. Real outcomes."
- Headline: "What deploying Quaeris looks like"
- Subcopy: "Three teams, three verticals, three ways self-serve transformed how they work."

**Case Study 1: Financial Services**
- **Client:** [data-placeholder: named customer OR "A leading financial services firm"]
- **Headline:** "Reduced ad-hoc requests by 84% while expanding self-serve to 600+ users"
- **Metrics:**
  - 84% fewer ad-hoc requests
  - 600+ self-serve users enabled
  - 90 days to full rollout
- **Story:** "The data team was processing 200+ requests per week from finance, product, and FP&A. They connected Quaeris to their Snowflake warehouse, migrated 120 certified revenue and bookings metrics into the semantic layer, and opened the agent interface to the business. Role-based access was configured by the data team; access enforcement happened automatically. Within 90 days, the ad-hoc queue dropped by 84%. The team shifted from firefighting to building predictive models."
- **Quote:** [data-placeholder: Head of Data or VP Analytics testimonial on the shift]
- **CTA:** "Read the full story" → `/case-studies/[slug]`

**Case Study 2: B2B SaaS / Analytics**
- **Client:** [data-placeholder: named customer OR "A B2B SaaS analytics company"]
- **Headline:** "Cut time-to-insight from 3 days to 20 minutes"
- **Metrics:**
  - 20 min average time-to-insight
  - 3x faster than previous ticket workflow
  - 0 hallucinated numbers
- **Story:** "Product and growth teams were waiting 2–3 days for cohort and retention analyses. Every question meant a ticket, a data analyst context switch, and a SQL query. The data team deployed Quaeris across their product and revenue metrics. Now, product managers ask directly and get instant, source-cited answers. The semantic layer validates every query. The data team went from reactive to strategic."
- **Quote:** [data-placeholder: Head of Product or Analytics Engineer testimonial]
- **CTA:** "Read the full story" → `/case-studies/[slug]`

**Case Study 3: Retail / CPG**
- **Client:** [data-placeholder: named customer OR "A multi-region retail organization"]
- **Headline:** "Unified conflicting metrics across 6 regional teams"
- **Metrics:**
  - 6 regional teams aligned
  - 1 metric definition per KPI
  - 11x ROI on analytics time
- **Story:** "The organization had six regional BI tools and three legacy data warehouses. Headquarters and regional teams calculated 'revenue' and 'margin' differently. A board report would contradict a regional dashboard. The data team unified everything into a single Quaeris semantic layer with 80 certified definitions. Executives and regional leaders ask the same question and get the same answer. One team retired four conflicting dashboards."
- **Quote:** [data-placeholder: CFO, Chief Data Officer, or regional VP testimonial]
- **CTA:** "Read the full story" → `/case-studies/[slug]`

**Type scale:** Roboto 20px headline, Roboto 15px body, Inter 14px meta (client, metrics).

---

### 3.7 Data Team-Specific FAQ Accordion
**Component:** `Accordion.tsx` (reuse, or build a FAQ-specific section)

**Section header:**
- Eyebrow: "Questions from data leaders"
- Headline: "Answers that actually help"
- Subcopy: "If it's not here, book a demo — we'll walk through your specific setup."

**FAQ items (8 Q&As):**

1. **Q:** "How do we ensure business users don't create incorrect queries?"  
   **A:** "The semantic layer is your guard rail. Users ask questions in plain language; agents translate those questions to SQL against the semantic layer — not raw tables. If a question can't be answered from certified metrics, the agent says so. The semantic layer enforces consistency; your team writes the definitions once."

2. **Q:** "Doesn't governed self-serve mean we lose control?"  
   **A:** "The opposite. Role-based access policies are applied at query time — enforced by the agent, not just by dashboard filters. A regional manager sees only their region's data, automatically. Every query is logged. You have more visibility and control than you do today with ad-hoc ticket requests."

3. **Q:** "How long does it take to migrate our metrics into the semantic layer?"  
   **A:** "Most teams take 1–2 weeks to migrate 100–200 certified metrics. Quaeris auto-discovers metric patterns from your data warehouse and suggests definitions. Your team approves them into the semantic layer. Week one: warehouse connection + pattern discovery. Week two: metric curation and access policy setup. Then you're live."

4. **Q:** "What if our existing dashboards and reports contradict the semantic layer?"  
   **A:** "That's actually common. Most organizations have metric inconsistencies buried across tools. Quaeris surfaces those inconsistencies; your team resolves them once in the semantic layer. Every tool — dashboards, reports, agents — then uses the same definition. You gain consistency while Quaeris is deployed."

5. **Q:** "Can we gradually roll out self-serve, or is it all-or-nothing?"  
   **A:** "Gradual rollout is standard. Start with one team or one department (e.g., marketing, finance) and a subset of metrics. Quaeris scales as your team adds users and metrics to the semantic layer. There's no flag day."

6. **Q:** "Do we need a new data warehouse?"  
   **A:** "No. Quaeris connects to your existing warehouse — Snowflake, BigQuery, Databricks, Redshift, Synapse. No data migration. Your warehouse is the system of record. Quaeris is a governance and access layer on top."

7. **Q:** "What happens if the semantic layer definition is wrong?"  
   **A:** "Your team can update the definition any time. The semantic layer is versioned. When you change a metric definition, users see a notification that the metric has been updated. All future queries use the new definition. Historical queries are audited, so you can trace why a number changed."

8. **Q:** "Can business users still download data for external tools?"  
   **A:** "Yes — users can export results from Quaeris answers. Exports are tied to the user's role-based permissions; they can only export what they're allowed to see. Every export is logged. You control what gets exported and can audit it."

**Type scale:** Roboto 16px question, Roboto 15px answer. Accordion styling: lavender divider `#ECDCF0`, subtle open/close animation.

---

### 3.8 Governance Deep-Dive — Three-Pillar Section (Optional, can collapse into FAQ if tight on length)
**Component:** `ThreePillars.tsx` (reuse with data-team-specific wording)

**Section header:**
- Eyebrow: "Governed by design"
- Headline: "How governance stays intact as you scale self-serve"
- Subcopy: "Self-serve doesn't mean lawless. Here's how Quaeris keeps governance front and center."

**Pillar 1:**
- **Title:** "Certified metrics, not wild estimates"
- **Body:** "Business users query your semantic layer — the definitions your data team has certified. No hallucinations, no model drift. Every agent answer is locked to a metric definition your team approved."
- **Icon:** `check-circle` (Lucide)
- **Icon color:** `--brand-accent` (#8C20A4)

**Pillar 2:**
- **Title:** "Lineage visible in every answer"
- **Body:** "Every answer shows the metric definition, the source table, the business rule that applied, and the user's access level. Your analysts can audit any result in one click. Compliance auditors get full traces."
- **Icon:** `eye` (Lucide)
- **Icon color:** `--brand-accent`

**Pillar 3:**
- **Title:** "Access enforced at runtime"
- **Body:** "Role-based policies are applied when the agent runs. A user with finance permissions can't see product costs. A regional user can't see other regions' data. Enforcement is automatic and audited — no manual row-level filters required."
- **Icon:** `lock` (Lucide)
- **Icon color:** `--brand-accent`

**Type scale:** Roboto 20px titles, Roboto 15px body.

---

### 3.9 Competitive Positioning — Segment Cards
**Component:** `SegmentCards.tsx` (reuse) or custom comparison section

**Section header:**
- Eyebrow: "Why data teams choose Quaeris"
- Headline: "Quaeris vs. the alternatives"
- Subcopy: "Not all self-serve solutions are created equal. Here's how Quaeris is different."

**Comparison segments (4 card pairs: problem/Quaeris solution):**

| Alternative | Problem | Quaeris Answer |
|---|---|---|
| **Self-serve BI dashboards (Tableau, Looker, Power BI)** | Beautiful dashboards don't answer ad-hoc questions. Every question still needs a ticket. | Agents answer ad-hoc questions in seconds. Dashboards stay for scheduled reporting. Both coexist. |
| **Unmanaged SQL editors (DBeaver, notebooks, Jupyter)** | Users run arbitrary SQL. Metric chaos. Row-level security is manual. Ad-hoc queries break compliance. | Users ask in plain language; agents translate to governed SQL. Semantic layer enforces consistency. Access is automatic. |
| **LLM chatbots on raw data (ChatGPT + your DB, basic prompt-engineering)** | Language models hallucinate numbers. No audit trail. No access control. Results are unreliable. | Agents query governed metrics, not raw tables. Every answer is certified. Full audit trail. Zero hallucinations. |
| **Hyperscaler-native AI tools (Cortex Analyst, Genie, AWS Q)** | Locked to one warehouse vendor, one model. Governance is bolt-on. Migrating is hard. | Warehouse-portable. Model-portable (BYOM). Governance is baked in. Switch vendors without retraining. |

**Type scale:** Roboto 17px segment headers, Roboto 15px body.

---

### 3.10 Call-to-Action Band
**Component:** `CTABand.tsx` (reuse, data-team-specific copy)

**Copy:**
- **Eyebrow:** "Ready to shrink the ad-hoc queue?"
- **Headline:** "Let your data team breathe."
- **Subcopy:** "Book a 30-minute demo. We'll walk through your warehouse setup, show you the semantic layer in action, and show you governed answers — no slides, no fluff."
- **Primary CTA:** "Book a Demo" → `/contact` or `/demo`
- **Secondary CTA:** "See case studies" → `/case-studies`

**Type scale:** Roboto 40px headline, Inter 19px subcopy, Roboto 14px CTA buttons.

---

### 3.11 Newsletter Block
**Component:** `NewsletterBlock.tsx` (reuse)

**Copy:**
- **Eyebrow:** "The Governed Analytics Brief"
- **Headline:** "Weekly insights for data leaders"
- **Body:** "No generic AI hype. One practical read on governed analytics, semantic layers, and scaling self-serve — every Thursday in your inbox."
- **Email placeholder:** "your@company.com"
- **CTA button:** "Subscribe"
- **Consent:** "No spam. Unsubscribe any time. We handle your data per our [Privacy Policy]."

---

## 4. Proof & Data Points

**Only facts from the research context are used. Any external claims are marked [data-placeholder].**

### Sourced facts:
- **87% reduction in ad-hoc requests** — "Across deployed orgs" (from config.ts stats)
- **14 min median time to first insight** — From question to governed answer (from config.ts stats)
- **Warehouse integrations:** Snowflake, BigQuery, Databricks, Redshift, Synapse, SharePoint, Google Drive (from research context product profile)
- **Six target industries:** Finance, Insurance, Retail/CPG, Healthcare, Manufacturing, Construction (from research context)
- **Three-engine IA:** Context Engine, Answer Engine, Decision Engine with six core capabilities (from research context; though this page focuses on the agentic query + semantic layer angle)
- **Positioning:** "Secure, Governed Analytics. Powered by Trusted Agents." (from research context one-liner)

### Placeholders (awaiting customer validation):
- [data-placeholder] Named case study customers (three are anonymized in current material; real names needed)
- [data-placeholder] Specific quotes from data leaders (templates provided; actual testimonials needed)
- [data-placeholder] Time-to-deployment metrics (e.g., "most teams go live in 2 weeks")
- [data-placeholder] Metric migration time (e.g., "1–2 weeks for 100–200 metrics")
- [data-placeholder] Self-serve user scale (e.g., "600+ business users")
- [data-placeholder] Screenshots and demo videos (semantic layer, agent conversation panel, role-scoped results)

---

## 5. Internal Links

**Links FROM this page:**

| Anchor Text | Destination | Context |
|---|---|---|
| "Book a Demo" | `/contact` or `/demo` (platform TBD) | Primary CTA (multiple locations) |
| "Explore the semantic layer" | `/platform/semantic-layer` | Feature spotlight, deep-dive pillar |
| "See a live demo" | `/contact` or `/demo` | Feature row CTA |
| "Read the governance blueprint" | `/blog/governed-analytics-blueprint` [data-placeholder] | FAQ follow-up |
| "Read the full story" (case studies) | `/case-studies/[slug]` | Case study card CTAs |
| "See case studies" | `/case-studies` | CTABand secondary CTA |
| "See supported warehouses" | `/platform/warehouse` or `/integrations` | FAQ potential link |

**Links TO this page (reverse direction, for footer/nav):**
- `/solutions` (parent hub) → "Data Teams"
- Nav mega-menu Solutions section: "Data Teams" → `/solutions/data-teams`
- Footer might list Solutions sub-pages

**Peer pages (sister team-focused solutions pages):**
- `/solutions/analysts` (for analysts)
- `/solutions/executives` (for business users/executives)

---

## 6. Open Questions

1. **Case study naming:** Should we use real customer names or keep these anonymized until customer consent is obtained? Current research shows one named customer (E4E via Courtney Ramey). Strategy: placeholder three case studies; fill with real names once customer interviews are complete.

2. **Demo flow:** Is there a separate `/demo` route with a form, or does `/contact` route to a demo booking system (Calendly, etc.)? Specification uses `/contact` as the catch-all; implementation can route to the actual booking flow.

3. **Blog link:** "Read the governance blueprint" links to a blog post that may not exist yet. Should this link to an existing pillar page like `/governed-ai-analytics` instead, or should we plan a blog post and mark it as [data-placeholder]?

4. **Screenshot/video assets:** Feature rows reference images of the semantic layer interface, agent conversation, and role-scoped results. These are not yet captured. Coordinate with product/design to obtain or create demo screenshots.

5. **Testimonials:** FAQ and case studies refer to named leaders (Head of Data, VP Analytics, etc.). Should these be fictional composites based on customer archetypes, or wait for real interviews? Recommendation: template the Q&A with [data-placeholder] names; fill post-interview.

6. **Metric definitions migration time:** FAQ claims "1–2 weeks for 100–200 metrics." Is this validated by customer deployments, or is it an engineering estimate? Should we verify before publishing, or mark it [data-placeholder]?

7. **Comparison table alternatives:** The "Quaeris vs. the alternatives" section compares four categories (dashboards, SQL editors, LLM chatbots, hyperscaler tools). Should this expand into full comparison pages for specific competitors (Tableau, Power BI, Snowflake Cortex, Databricks Genie)? Links to `/compare/quaeris-vs-[tool]` pages can be added if those pages exist.

8. **Mobile hero animation:** The "split-screen chaos vs. calm" or abstract agent demo in the hero section is described as [data-placeholder]. Should this be a static image, an inline video, a Lottie animation, or an interactive iframe? Clarify with design/UX.

9. **FAQPage schema:** Should the FAQ section include JSON-LD FAQPage schema for SEO/GEO citation, or is that handled sitewide? Recommend adding FAQPage schema to this page given the eight structured Q&As.

---

## 7. Component Reuse Summary

| Section | Component | Status | Notes |
|---------|-----------|--------|-------|
| Hero | `HeroHome.tsx` | Reuse (adapted text) | Data-team-specific headline and copy |
| Problem/Solution | `ProblemSolutionCards.tsx` | Reuse | Three problem-solution pairs (three-column layout) |
| Stats | `StatsBand.tsx` | Reuse | Four stats with targets, labels, deltas |
| How It Works | `IconFeatureGrid.tsx` | Reuse | Four icons (lock, user-check, search, trending-up) with Lucide |
| Feature Rows | `FeatureRow.tsx` | Reuse | Three alternating text/image features; dark variant |
| Case Studies | `CaseStudyCard.tsx` or `ProofSection.tsx` | Reuse | Three case studies (vertical industry cards) |
| FAQ | `Accordion.tsx` | Reuse | Eight Q&A pairs with smooth open/close |
| Governance Pillars | `ThreePillars.tsx` | Reuse | Three pillars (certified metrics, lineage, access) |
| Segment Cards | `SegmentCards.tsx` | Reuse | Four alternative comparison cards |
| CTA Band | `CTABand.tsx` | Reuse | Full-width call-to-action |
| Newsletter | `NewsletterBlock.tsx` | Reuse | Email signup + consent |

**No new components required.** All sections map directly to the existing component inventory.

---

## 8. Quaeris Brand Tokens

All styling defers to Quaeris tokens (as per 2026-06-12-quaeris-brand-fork-design.md):

| Token | Value | Usage |
|---|---|---|
| `--bg-canvas` | #FAF8FF | Page background |
| `--bg-warm` | #F9F5FF | Hero and section backgrounds |
| `--bg-ink` | #200123 | Dark sections, dark cards |
| `--text-primary` | #200123 | Headings, primary text |
| `--text-secondary` | #6B4D72 | Body text, subheadings |
| `--brand-accent` | #8C20A4 | Icons, accents, hover states |
| `--brand-accent-deep` | #4E0250 | Gradient dark (CTA gradient start) |
| `--border-subtle` | #ECDCF0 | Section dividers, subtle borders |
| `--cta-bg` | linear-gradient(90deg, #4E0250, #8C20A4) | Primary button gradient |
| `--radius-cta` | 10px | CTA button radius |

Typography: Roboto for headings (48/40/20/17px), Inter for body and subheadings (19/15/14px). Roboto weights: 400 (Regular) and 500 (Medium).

---

## 9. Type Scale (Per Brand Spec)

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| H1 (Hero headline) | Roboto | 48px | Regular | `--text-primary` (#200123) |
| H1 Accent (with brand color) | Roboto | 48px | Regular | `--brand-accent` (#8C20A4) |
| H2 (Section heading) | Roboto | 40px | Regular | `--text-primary` |
| H3 (Feature card title) | Roboto | 20px | Regular | `--text-primary` |
| Hero Subheading | Inter | 20px | Regular | `--text-secondary` (#6B4D72) |
| Section Description | Roboto | 17px | Regular | `--text-secondary` |
| Card Body | Roboto | 15px | Regular | `--text-secondary` |
| CTA Lead Text | Inter | 19px | Regular | Varies |
| List Item Text | Roboto | 16px | Regular | `--text-secondary` |
| Eyebrow / Overline | Roboto | [varies] | Medium | `--brand-accent` |
| Tagline / Pull Quote | Roboto | 26px | Medium | `--text-primary` |

---

## 10. Accessibility & SEO Annotations

- **H1 strategy:** Single H1 per page (hero headline). H2s for section headers. H3s for feature cards.
- **Alt text:** All images must have descriptive alt text. Demo screenshots should describe the UI element visible (e.g., "Semantic layer definition panel showing revenue metric with ownership badge and lineage indicators").
- **ARIA labels:** Interactive elements (accordions, CTAs) must include `aria-label` for context.
- **Semantic HTML:** Use `<nav>`, `<section>`, `<article>`, `<footer>` appropriately.
- **Schema markup:** Recommend adding `FAQPage` schema to the accordion section (8 Q&As); `BreadcrumbList` sitewide; `Organization` schema sitewide.
- **Contrast:** All text meets WCAG AA contrast ratios against backgrounds. Test `--text-secondary` (#6B4D72) against lavender backgrounds (#F9F5FF).

---

## 11. Success Metrics (KPI targets)

| Metric | 90 days | 6 months | Rationale |
|---|---|---|---|
| Demo bookings from page | 15–25 | 50–75 | Conversion from organic traffic; target data-team audience |
| Organic impressions (SERP) | 800–1,200 | 3,000–5,000 | Keyword clusters C1, C2, C5, C12 |
| Page views from organic | 200–400 | 1,000–2,000 | Assuming DR ~28 on pillar pages |
| Engagement time (avg.) | >2:30 | >3:00 | Longer-form content; feature rows + FAQ pull readers |
| Email subscriptions | 50–100 | 200–300 | Newsletter block CTR |

---

## 12. Implementation Checklist

- [ ] Create `/solutions/data-teams.tsx` route file
- [ ] Assemble all component imports (reuse existing)
- [ ] Copy all copy blocks into config or inline props
- [ ] Implement hero with data-team-specific text
- [ ] Build ProblemSolutionCards section with three pairs
- [ ] Add StatsBand with four metrics
- [ ] Add IconFeatureGrid (four icons)
- [ ] Add FeatureRow section (three features, alternating layout)
- [ ] Add CaseStudyCard section (three cases, mark [data-placeholder] for names/quotes)
- [ ] Add Accordion/FAQ with eight Q&As
- [ ] Add ThreePillars governance section
- [ ] Add SegmentCards comparison (four alternatives)
- [ ] Add CTABand (primary + secondary CTA)
- [ ] Add NewsletterBlock
- [ ] Update nav config to include `/solutions/data-teams` in Solutions mega-menu
- [ ] Add breadcrumb and internal links
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Add FAQPage and BreadcrumbList schema
- [ ] Verify all Lucide icon names are correct and exported
- [ ] Populate metadata (title, description, OG tags)
- [ ] Link to this page from `/solutions` hub and nav
- [ ] Set up analytics tracking (event goals for CTA clicks, case study views, FAQ opens)

---

## 13. Notes for Design & Copy Refinement

1. **Copy voice:** All copy follows the Quaeris brand voice: confident, precise, governance-first, zero hype-fluff. Avoid marketing clichés like "revolutionary," "game-changing," or "the power of AI." Speak directly to the data team's pain (request backlogs, metric chaos, governance risk).

2. **Visual hierarchy:** Use the type scale strictly. Headings breathe; body text is compact. Generous line-height on body (1.6 or higher) aids scannability.

3. **Color usage:** `--brand-accent` (#8C20A4) is reserved for interactive elements (CTA buttons, icons, accent text). Don't overuse; rely on `--text-primary` and `--text-secondary` for the bulk of the page.

4. **Imagery:** All images should show real Quaeris UI or governance workflows. Avoid generic stock photos (e.g., people in meeting rooms, graphs). Prefer screenshots, diagrams, or abstract data visualizations.

5. **Case study naming:** Until customer interviews are complete, mark all case study clients as [data-placeholder] and use anonymized archetypes (e.g., "A financial services firm," "A B2B SaaS analytics company"). Once real customers are identified, replace with names and add customer logos if available.

6. **FAQ copywriting:** Answers should be specific and action-oriented. Avoid generic reassurances. If a question can't be answered definitively, offer a demo link instead.

---

**End of specification.**
