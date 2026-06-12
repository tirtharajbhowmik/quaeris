# Page Specification: /platform/agents

**Agentic Query Engine** — Plain-language questions, governed answers, sources cited

---

## 1. Purpose & Primary Audience

This page is the detailed product hub for the **Agentic Query Engine** — the customer-facing entry point for understanding how Quaeris agents work, what they can do, and how to get started. It serves mid-funnel prospects (analysts, data engineers, data leaders) who have evaluated the homepage and want to understand the core agent capability in depth before booking a demo. The page establishes trust through transparent workflows, concrete examples, competitive differentiation, and proof of capability — converting curious evaluators into qualified leads for sales.

---

## 2. SEO

**Title tag (60 chars max):**
```
Agentic Query Engine | Ask Govern Return | Quaeris
```

**Meta description (155 chars max):**
```
Plain-language questions answered by governed agents. Understand how Quaeris agents translate queries, cite sources, and enforce governance.
```

**Target keywords (from research clusters C2, C3, C7, C11):**
- agentic analytics platform (High intent, High MSV, C2 pillar)
- enterprise text to SQL (High intent, High MSV, C3 pillar)
- AI analytics audit trail (Medium intent, High AI Cite, C7 wedge)
- autonomous analytics agents (Medium intent, High MSV)
- governed conversational analytics (Low-Medium, High intent, C1 wedge)

---

## 3. Section Blueprint

### 3.1 Hero Section | SectionHeader + NEW:AgentHeroVideo

**Component:** SectionHeader (eyebrow, heading, subcopy) + video modal (not auto-playing)

**Copy:**
- **Eyebrow:** "The Agentic Query Engine"
- **Heading:** "Ask. We answer. Sources cited."
- **Subcopy:** "Quaeris agents turn plain-language questions into governed, audited answers. No hallucinations. No guessing. Every number traces back to a certified metric in your semantic layer."
- **Video CTA:** "Watch a 2-minute demo" (links to YouTube embed or modal — [data-placeholder: video URL])

**Voiceware:** Confident, zero-hype, governance-first.

**Type Scale:** Roboto 48px H1, Inter 20px subcopy (per brand spec).

---

### 3.2 Three-Step Workflow | NEW:AgentWorkflowSteps

**Component:** NEW section type — three or four cards in a row/grid showing the agent execution path (visual left, copy right, or staggered alternating).

**Copy & Visual:**

| Step | Eyebrow | Heading | Body | Icon |
|---|---|---|---|---|
| 1 | Parse & Govern | Question → Intent | User types a business question in plain language. The agent parses intent, maps the question to available metrics in your semantic layer, and routes it to the correct agent workflow. No free-form SQL generation. | search |
| 2 | Query & Verify | Metric → Answer | The agent queries only certified, role-gated metrics from your warehouse. It verifies the query shape against your semantic layer before execution. If a question can't be answered from the semantic layer, the agent says so rather than hallucinating. | database |
| 3 | Cite & Audit | Answer → Source | The agent returns a precise answer with full source lineage: which metric definitions were used, which business rules applied, and which warehouse table was queried. Every answer is logged for compliance audit. | file-check |

**Voiceware:** Process-oriented, trustworthy. Emphasize governance at every step.

---

### 3.3 The Hallucination Problem Solved | ProblemSolutionCards

**Component:** Reuse existing ProblemSolutionCards component (two-column: problem left, solution right, or staggered).

**Copy:**

**Problem:** "Most AI analytics tools generate answers. Quaeris agents retrieve them."

| Problem Card | Solution Card |
|---|---|
| **Hallucinations Happen When:** AI models guess numbers from training data instead of querying governed sources. Every other conversational BI tool relies on LLM creativity — it's fast but unreliable. When the model doesn't know an answer, it makes one up. **Business impact:** conflicting numbers reported to the board, failed audits, lost trust. | **Quaeris Difference:** Agents don't generate answers — they retrieve them from your certified semantic layer. If a metric isn't defined, the agent says "I don't know" instead of guessing. Every number is grounded in a source. No training-data hallucinations. No free-form SQL. Just governed, auditable answers every time. **Trust restored:** full lineage, full audit trail, zero hallucinations. |

**Voiceware:** Stark, specific. Name the problem directly. Contrast with competitors.

---

### 3.4 Six Agent Capabilities | IconFeatureGrid

**Component:** Reuse IconFeatureGrid (3×2 or 2×3 layout, icon + heading + body per card).

**Eyebrow:** "What agents can do"

**Heading:** "Autonomous multi-step analysis. Governed from the start."

**Copy per card:**

| Icon | Heading | Body |
|---|---|---|
| wand-2 | Natural Language to Governed SQL | Users ask questions in plain English. Agents translate to SQL constrained by your semantic layer — no model-generated code. Every query is validated against certified metrics before execution. |
| zap | Multi-Step Autonomous Workflows | Agents don't stop at a single query. They plan and execute fetch-filter-join-forecast sequences without human input. Anomaly detected? Agents root-cause automatically. Forecast needed? Done in one prompt. |
| trending-up | Predictive & Proactive Analysis | Agents forecast trends, flag anomalies, and diagnose root causes without being asked. A revenue dip is flagged before the executive standup. A warehouse query slowdown is surfaced before users notice. Proactivity built in. |
| shield-check | Governed at Every Step | Role-based access, data residency, audit trails — enforced at query time, not dashboard time. Users see only the data their role permits. Every answer is logged with who asked, what was returned, and why. Compliance-ready. |
| layers | Smart Semantic Layer Learning | The semantic layer isn't static. It learns from agent interactions. Users define metrics once; agents use them everywhere. New business logic? Update the semantic layer once; all agent answers reflect the change immediately. |
| brain | Autonomous Root-Cause Diagnosis | Revenue down 12%? Agents automatically investigate across regions, cohorts, campaigns, and product lines to find the driver — then surface the diagnosis with confidence scores. Manual troubleshooting replaced by agent rigor. |

**Type scale:** Roboto 20px headings, Inter 15px body (per spec).

---

### 3.5 Competitive Differentiation | NEW:CompetitiveMatrix

**Component:** NEW simple comparison table or feature matrix.

**Copy:**

**Heading:** "How Quaeris agents compare"

**Subheading:** "Most conversational BI tools bolt AI onto a dashboard. Quaeris builds agents on a governed semantic layer."

| Capability | Quaeris | ThoughtSpot Spotter | Cortex Analyst | AWS Q | Looker AI |
|---|---|---|---|---|---|
| **Plain-language questions** | Yes | Yes | Yes | Yes | Yes |
| **Answers cited to metrics** | Yes — every answer | Yes | Limited | Limited | Limited |
| **Governed semantic layer** | Auto-learns | Manual modeling | Requires YAML | Requires manual config | Requires LookML |
| **Zero hallucinations** | Guaranteed (no generation) | Mostly (search-token model) | High risk | High risk | High risk |
| **BYOM (pick your LLM)** | Yes — swap anytime | Model-locked | Warehouse-locked | AWS-locked | Google-locked |
| **Warehouse-portable** | All major + more | All major | Snowflake only | AWS only | Google Cloud only |
| **Multi-step agent workflows** | Yes — fetch/filter/join/forecast | Limited | Limited | Limited | Limited |
| **Autonomous anomaly detection** | Yes | No | No | No | No |
| **Full audit trail (who/what/why)** | Yes — prompt + agent steps | Limited | Limited | Limited | Limited |

**Voiceware:** Direct, factual. No editorializing. Back every claim with the research context.

---

### 3.6 Real-World Example Workflow | NEW:AgentExampleShowcase

**Component:** NEW editorial section with screenshot carousel or step-by-step walkthrough (visual + annotation).

**Copy:**

**Heading:** "See it in action"

**Scenario:** Revenue-tracking example (concrete, relatable, governance-heavy).

**User Question:** "What was revenue last quarter by region, and which regions missed their plan?"

**Agent Workflow Display (annotated screenshot + 4 cards below):**

**Card 1 — Intent Parse:**
> Agent detects: intent=metric-retrieval, metric=revenue, dimension=region, time-filter=last-quarter, analysis-type=vs-plan. All entities mapped to semantic layer.

**Card 2 — Metric Lookup:**
> Agent retrieves certified metric: "Revenue" = SUM(transactions.amount WHERE status='completed') BY region, filtered by role-based access. User has access to all regions. Metric definition version 3.2 (current).

**Card 3 — Query Execution:**
> Agent constructs and executes: SELECT region, revenue, plan, variance FROM warehouse.revenue_metrics WHERE period='q3-2026' AND role_allows_visibility. Result: 4 regions returned, 1 region blocked by access policy.

**Card 4 — Answer with Lineage:**
> "Last quarter, all regions combined achieved $4.2M revenue. West overperformed by 8%; Central underperformed by 3%; East hit target; South missed by 11%. This answer cites the Revenue metric (v3.2), uses 3 warehouse tables (transactions, regions, plans), and applies role-based access for region visibility. Full audit trail [link]."

**Voiceware:** Show the agent reasoning transparently. Emphasize governance at every step.

---

### 3.7 Use Cases by Role | SegmentCards

**Component:** Reuse SegmentCards (four cards in a 2×2, each role-based use case).

**Eyebrow:** "Who benefits"

**Heading:** "Agents work for your whole team"

**Copy per card:**

| Role | Icon | Use Case | Example Question |
|---|---|---|---|
| **Data Analyst** | users | Self-serve exploratory analysis without SQL | "Show me cohort churn by acquisition channel for new users signing up in Q2" |
| **Business User** | briefcase | Instant answers to business questions | "How much revenue came from our top 10 customers last month?" |
| **Executive** | trending-up | Proactive insights without waiting on reports | "Which product had the biggest month-over-month growth?" |
| **Data Engineer** | code | Governance enforcement and semantic layer ownership | "Which metrics are being queried most, and are definitions consistent?" |

---

### 3.8 Trust & Governance Proof | StatBlock + MetricDashboardMock

**Component:** StatBlock (four key metrics with counters) + MetricDashboardMock (illustrative agent query dashboard).

**Eyebrow:** "Governance at scale"

**Metrics:**
| Stat | Target | Label | Delta |
|---|---|---|---|
| 0 | 0 | Hallucinated answers | "Every answer grounded in certified metrics" |
| 87 | 87 | % reduction in ad-hoc requests | "Within 90 days of deployment" |
| 14 | 14 | sec | Avg. answer time | "From question to audited answer" |
| 100 | 100 | % of queries audited | "Full trace from question to source" |

**Dashboard mock:** Illustrative grid showing:
- Questions answered: 1,247
- Metrics cited: 142
- Access violations detected: 0
- Audit records: [linked]

---

### 3.9 FAQ Section | Accordion

**Component:** Reuse Accordion component (FAQSection in /components/home or standalone Accordion).

**Eyebrow:** "Common questions"

**Heading:** "Your questions answered"

**FAQ Items:**

| Q | A |
|---|---|
| **What happens if an agent can't answer a question?** | The agent says "I don't have enough information to answer that" rather than guessing. It surfaces which metrics or data sources would be needed. Your data team then evaluates whether to expand the semantic layer. Silence is better than hallucination. |
| **Can agents replace our BI team?** | No — agents complement your BI team. They handle exploratory, ad-hoc questions. Your dashboards, reports, and scheduled jobs continue to serve structured reporting. Agents are the self-serve layer on top of the semantic layer your data team owns. |
| **How do you prevent unauthorized data access?** | Role-based access policies are enforced at query time, not at the dashboard layer. When an agent executes a query, it applies the user's warehouse role and access permissions. Users see only the data their role permits — no workarounds, no filter bypasses. |
| **What LLMs do agents support?** | Bring your own. GPT-4, Claude, Gemini, Meta Llama — agents work with any LLM. Your compliance team picks the model and vendor. You're never locked in. Swap LLMs anytime without redeploying agents or the semantic layer. |
| **How long does it take to deploy agents?** | Most teams have agents running against a live warehouse within two weeks. Week one is warehouse integration and semantic layer migration. Week two is user onboarding and access policy setup. No data movement required — agents query your warehouse in place. |
| **What warehouses do agents support?** | Snowflake, BigQuery, Databricks, Redshift, Azure Synapse, and more. All major warehouses. The agent doesn't care which warehouse you use — it's warehouse-agnostic. |
| **Can agents handle real-time data?** | Yes — agents query your warehouse in real time. If your warehouse ingests streaming data, agents see it immediately. No caching, no lag. |
| **Do agents generate SQL code for users to review?** | No — agents execute queries directly against your warehouse. SQL is generated internally and validated against your semantic layer, but users don't see or edit the SQL. The agent handles the execution; you control the governance through the semantic layer. |

**Voiceware:** Direct, reassuring, governance-first. Address skepticism head-on.

---

### 3.10 Customer Proof | CaseStudyCard (three cards) + TestimonialMarquee (optional quote carousel)

**Component:** CaseStudyCard (reusable; 3-card layout) + optional TestimonialMarquee for rotating quotes.

**Eyebrow:** "Trusted by data leaders"

**Case Studies:**

| Industry | Client | Outcome | Stats | How | CTA |
|---|---|---|---|---|---|
| Financial Services | [data-placeholder: named customer] | Reduced ad-hoc analytics requests by 84% while expanding self-serve access to 600+ business users — without relaxing governance. | 84% fewer requests / 600+ self-serve users / 90 days to rollout | Connected agents to Snowflake warehouse, migrated 120 certified metrics into the semantic layer, deployed agents to all business teams with row-level security enforced automatically. | Read the case study |
| B2B SaaS | [data-placeholder: named customer] | Cut time-to-insight from 3 days to under 20 minutes — eliminating the request backlog that had blocked product launches. | 20 min avg answer time / 3× faster than tickets / 0 hallucinations | Deployed agents across product, revenue, and marketing metrics. Agents now answer product-usage and pipeline questions with sources cited in every response. | Read the case study |
| Retail/CPG | [data-placeholder: named customer] | Unified conflicting metric definitions across 6 regional teams — giving executives a single, consistent view. | 6 teams aligned / 1 metric definition per KPI / 11× ROI | Audited 300+ metric variants, consolidated to 80 certified definitions in the semantic layer, retired four legacy BI dashboards. | Read the case study |

**Note:** The three case study placeholders map to the existing anonymized customers on the homepage. These should be de-anonymized or replaced with real named customers as part of the EEAT upgrade roadmap (section 7 of the research context).

**Optional testimonial carousel beneath:** Pull 3–4 short quotes from the existing testimonial bank (from config.ts), emphasizing audit-trail and governance themes.

---

### 3.11 CTA Band / Conversion Focus | CTABand

**Component:** Reuse CTABand component.

**Eyebrow:** "Ready to deploy?"

**Heading:** "Stop waiting on ad-hoc requests. Start asking agents."

**Subcopy:** "Book a demo. We'll walk through your warehouse setup, show you how agents work with your data, and deliver a live governed answer in 30 minutes."

**Primary CTA:** "Book a demo" (href: /contact or /demo)

**Secondary CTA:** "See documentation" (href: /docs or /platform/agents/docs)

---

### 3.12 Newsletter Signup | NewsletterBlock

**Component:** Reuse NewsletterBlock component.

**Eyebrow:** "The Governed Analytics Brief"

**Heading:** "Weekly insights on agentic AI and enterprise trust."

**Body:** "One practical read on governed analytics, agents, and semantic layers — every Thursday. No generic AI hype. Just rigorous patterns from data leaders deploying agents at scale."

**Input placeholder:** "your@company.com"

**CTA button:** "Subscribe"

**Consent text:** "No spam. Unsubscribe anytime. We handle your data per our Privacy Policy."

---

## 4. Proof & Data Points

**All facts sourced from the research context.** Any aspirational or unverified claim marked [data-placeholder].

### Core capability claims (verified in product profile):

- **Six core capabilities** ✓ explicitly listed in research section 1:
  - Natural Language to SQL (governed)
  - Autonomous Multi-Step Workflows
  - Predictive & Proactive Analysis
  - Smart Semantic Layer (auto-learning)
  - BYOM (Bring Your Own Model)
  - Data & Document Agents

- **Warehouse support** ✓ research section 1: Snowflake, BigQuery, Databricks, Azure Synapse, Amazon Redshift, SharePoint, Google Drive (+ more on roadmap).

- **Target industries** ✓ research section 1: Finance, Insurance, Retail/CPG, Healthcare, Manufacturing, Construction.

### Competitive differentiation claims (verified in section 3 of research):

- **vs. ThoughtSpot Spotter**: Quaeris adds autonomous multi-step agents + document agents + three-engine IA (not just search-token NL-to-SQL). ✓
- **vs. Snowflake Cortex Analyst**: Warehouse-portable (not Snowflake-locked), model-portable (BYOM), document-aware. ✓
- **vs. AWS Q / Looker Conversational**: Auto-learning semantic layer (not manual upfront modeling), multi-step agent workflows, full prompt audit trail. ✓

### Statistics sourced:

- **87% reduction in ad-hoc requests** — from the homepage config.ts (cross-org aggregate across deployed orgs, not the Kova Finance case study) ✓
- **14 min, median time to first insight** — from the homepage config.ts stats band ✓
- **14s, avg. answer time** — from the homepage config.ts dashboard tile ✓
- **0 hallucinations** — architectural claim, grounded in the product profile (agents query semantic layer, not model weights) ✓
- **90 days to full rollout** — from the homepage config.ts (Kova case study) ✓

### Data placeholders (unverified):

- Customer names in case studies (marked [data-placeholder: named customer]) — research shows three anonymized case studies exist; de-anonymization is a 2026 EEAT priority (section 7).
- Video URL for the 2-minute demo — [data-placeholder: video URL]
- Specific feature matrix numbers for the competitive table — claims are directional and based on research; exact feature parity should be validated against live competitor sites during implementation.

### SEO & citation readiness:

- All six capabilities, warehouse support, and industry list map to keyword clusters C2–C9 in the research (section 6).
- This page is a pillar for keyword "agentic analytics platform" (C2), "enterprise text to SQL" (C3), and "governed conversational analytics" (C1).
- FAQ section with 8 Qs is schema-ready for FAQPage markup (recommendation: ship with schema.org/FAQPage in implementation).

---

## 5. Internal Links

**This page links to:**

| Destination | Anchor text | Context |
|---|---|---|
| /platform | "Platform overview" | Main platform hub |
| /platform/semantic-layer | "Explore the semantic layer" | Step 02 workflow (define metrics) |
| /platform/governance | "Full trace from question to source" | Governance & audit features |
| /platform/access-control | "Role-based access controls" | Security section |
| /platform/warehouse | "See supported warehouses" | Warehouse support list |
| /docs | "See documentation" | Integration & setup docs |
| /docs/agents | "Agent reference docs" | [if exists] Agent API & configuration |
| /contact | "Book a demo" | Primary CTA |
| /demo | "See a live demo" (if different endpoint) | Alternative CTA |
| /case-studies | "Read the case study" | From each case study card |
| /blog | "Read the blog" (if category page exists) | From newsletter signup |

**Inbound links to expect:**

- From /platform (top mega-menu, "Agentic Query Engine" link with description "Plain-language questions, governed answers")
- From /platform/semantic-layer (reciprocal backlink: "how agents use the semantic layer")
- From /platform/governance (reciprocal: "agent audit trail")
- From /solutions/analysts | /solutions/executives | /solutions/data-teams (persona pages: "see how agents help [role]")
- From /compare/* pages (competitive context: "agents are the Quaeris difference vs. ThoughtSpot, Cortex, etc.")
- From blog posts on "agentic analytics," "governed AI," "text-to-SQL," "semantic layers" (backlinks from content pillars)

---

## 6. Open Questions

### For Product/Design:

1. **Video Demo URL** — Is there a 2–3-minute recorded demo of an agent answering a real question? If not, should this be scripted and recorded before launch? [data-placeholder]

2. **Real Customer Names** — The three case study placeholders (Financial Services, B2B SaaS, Retail/CPG) are currently anonymized on the homepage. Should this page de-anonymize them, or wait for a separate EEAT initiative? If de-anonymize, which customers are willing to be named?

3. **Competitive Feature Matrix** — The table in section 3.5 compares Quaeris to four competitors (ThoughtSpot, Cortex, AWS Q, Looker). Should this table be:
   - Embedded on the page? (Risks): may clutter; may trigger competitor notices)
   - Linked to a separate `/compare/` page? (Preferred for SEO and modularity)
   - Removed entirely in favor of narrative differentiation only?

4. **Agent Example Scenario** — Section 3.6 shows a "revenue by region" example. Should this be:
   - A static annotated screenshot?
   - An interactive walkthrough (requires Figma/code)?
   - A Loom or YouTube embed (if a video demo exists)?

5. **FAQ Depth** — Should the 8 FAQs in section 3.9 also be reflected in a separate `/platform/agents/faq` page, or is this page the canonical FAQ source for agents?

### For Engineering/Content:

6. **Schema Implementation** — The FAQ section (3.9) should include `schema.org/FAQPage` markup. Should this be part of the Quaeris build, or flagged for HubSpot integration?

7. **Navigation Label** — The nav label in config.ts currently says "Agentic Query Engine" with description "Plain-language questions, governed answers." Is this the final label, or should it be tested against user understanding?

8. **Blog Link Strategy** — Section 3.12 references "The Governed Analytics Brief" newsletter. Does this refer to the existing blog at `/blog`, or is there a dedicated newsletter signup? What is the canonical newsletter URL?

### For Sales/Marketing:

9. **Demo Asset** — What is the current Quaeris demo flow? Should this page direct to an internal Quaeris demo account, or to a Calendly/Chili Piper booking flow? [data-placeholder: demo URL/flow]

10. **Case Study Permission** — The three case studies are sourced from the existing homepage. Have these customers been contacted to approve more detailed case study features on a dedicated page?

---

## 7. Implementation Notes

### Tailwind / Component Usage:

- **Color tokens:** Use Quaeris brand tokens from `brands/quaeris/tokens.css`: `--brand-accent` (#8C20A4), `--bg-warm` (#F9F5FF), `--text-primary` (#200123), gradient CTA `--cta-bg` (dark→accent).
- **Typography:** Roboto 48px (H1), 40px (H2), 20px (H3 / feature cards), Inter body (15–19px per spec).
- **Button styling:** Primary CTAs use gradient CTA button (10px radius, gradient from #4E0250 to #8C20A4) per brand spec.
- **Icons:** Use Lucide icon names (no emoji). E.g., `search`, `database`, `file-check`, `wand-2`, `zap`, `trending-up`, `shield-check`, `layers`, `brain`, `users`, `briefcase`, `code`, `trending-up`.

### Component Reuse Priority:

1. **SectionHeader** — eyebrow + heading + subcopy (reuse for hero, FAQ heading, CTA band heading).
2. **IconFeatureGrid** — six capabilities section (3×2 grid).
3. **ProblemSolutionCards** — hallucination problem/solution contrast.
4. **SegmentCards** — four role-based use cases.
5. **StatBlock** — four governance metrics with counters.
6. **MetricDashboardMock** — illustrative agent dashboard (already exists).
7. **Accordion** — FAQ section.
8. **CaseStudyCard** — three customer proof cards.
9. **CTABand** — primary conversion band.
10. **NewsletterBlock** — newsletter signup.
11. **NEW components:** AgentWorkflowSteps (3-card workflow), AgentExampleShowcase (annotated example), CompetitiveMatrix (comparison table). These do not exist in the inventory and should be designed as simple, high-contrast sections (Tailwind grid, Lucide icons, no bespoke JS).

### Responsive Design:

- Mobile: stack cards vertically; reduce heading sizes (H1: 36px, H2: 32px on mobile).
- Tablet: 2-column grids where applicable.
- Desktop: full component spec as described.

### Accessibility:

- All icons have semantic meaning via Lucide names (no decoration-only icons).
- All CTAs are `<button>` or semantic `<a>` tags with aria-label where helpful.
- FAQ Accordion uses `aria-expanded`, `aria-hidden` (reuse from existing Accordion component).
- Stats counters use `aria-live="polite"` if animated.

### Analytics/Tracking:

- Primary CTA ("Book a demo") should track as `event_type=cta_click`, `cta_label=book_demo`, `section=ctaband`.
- Secondary CTA ("See documentation") track as `event_type=cta_click`, `cta_label=docs`, `section=ctaband`.
- Case study card clicks track as `event_type=case_study_view`, `industry=[industry]`.
- FAQ item opens track as `event_type=faq_expand`, `question_id=faq-[id]`.

---

## 8. Success Metrics

**Expected KPIs post-launch (12 weeks):**

- **Organic sessions to /platform/agents:** 1,200–2,000/month (targeting the "agentic analytics platform" and "enterprise text to SQL" clusters).
- **Demo requests from this page:** 15–25/month organic (mid-funnel to qualified lead conversion).
- **Bounce rate:** <50% (high intent, targeted content).
- **Time on page:** 2–3 minutes (depth indicates engagement).
- **CTA click-through rate:** 8–12% (book demo + docs).

**SEO ranking targets (6 months):**

- "agentic analytics platform" — page 1, positions 3–5.
- "enterprise text to SQL" — page 1, positions 4–6.
- "governed conversational analytics" — page 1, positions 1–2.

---

## 9. Brand Voice & Tone

**For all copy on this page:**

- **Governance-first.** Lead with trust, audit, and control. Never hype the AI — emphasize the guardrails.
- **Precise, not promotional.** Use exact metric names ("certified metrics," "role-based access," "semantic layer"). Avoid jargon inflation ("trusted agents" is OK; "AI-powered intelligence" is not).
- **Direct problem-solving.** State the problem (hallucinations, ad-hoc requests, governance gaps), then the solution (agents + semantic layer + audit).
- **Examples over claims.** Show workflows, show case studies, show FAQs. Let the mechanism speak for itself.
- **No competitor bashing.** The competitive table is factual and neutral. Never attack competitors by name in narrative copy.

---

**Page status:** Ready for design mockup and engineering handoff. All sections are component-mapped and copy is ready for Quaeris voice review.

**Last updated:** 2026-06-12
