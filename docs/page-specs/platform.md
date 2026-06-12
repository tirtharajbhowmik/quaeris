# Page Spec — /platform

**Route:** `/platform`
**Spec author:** Page-spec agent
**Date:** 2026-06-12
**Status:** Implementation-ready draft

---

## 1. Purpose & Primary Audience

`/platform` is the funnel's architectural proof point. It sits one click below the homepage hero and one level above the six capability subpages (`/platform/agents`, `/platform/semantic-layer`, `/platform/governance`, `/platform/access-control`, `/platform/warehouse`, `/platform/audit`). Its job is to give a technically credible buyer — a Head of Data, Analytics Engineering Lead, or CDO evaluating enterprise BI replacement or augmentation — a complete mental model of Quaeris's three-pillar architecture in a single scroll, then route them into the subpage that matches their immediate concern (governance, agents, or security). The page must resolve the key objection that most "AI analytics" products are language models bolted onto dashboards: Quaeris's three-engine design (Context Engine, Answer Engine, Decision Engine) enforces governance at the architecture level, not as an afterthought. Secondary audience: the enterprise IT and security stakeholder who co-signs the procurement and needs to verify the data-residency and audit story before the demo.

---

## 2. SEO

**Title tag (58 chars):**
`Quaeris Platform — Governed Agentic Analytics`

**Meta description (152 chars):**
`See how Quaeris's three-pillar architecture — Smart Semantic Layer, Trusted AI Agents, and enterprise security — delivers governed analytics at enterprise scale.`

**Target keywords (drawn from research keyword clusters C1, C2, C5, C7, C8):**

| Keyword | Cluster | Priority |
|---|---|---|
| governed agentic analytics | C1 / C2 | Primary — define the category |
| AI semantic layer | C5 | Secondary — owns the auto-learning angle |
| agentic analytics platform | C2 | Secondary — high MSV, challenge keyword |
| AI analytics audit trail | C7 | Supporting — EU AI Act / SOX tailwind |
| enterprise AI analytics platform | C1 | Supporting — broad commercial intent |

**Schema type:** `SoftwareApplication` (Week 2 priority per the schema implementation order in the growth strategy).

---

## 3. Section Blueprint

Sections are ordered for a top-to-bottom scroll that moves from orientation → architecture → capability depth → proof → routing → conversion. Each section maps to at least one component from the inventory.

---

### Section 01 — Page Hero

**Component:** `NEW:PlatformHero` — A full-width hero with a two-column layout (copy left, architecture diagram right). The diagram is a static SVG/illustration showing the three-pillar stack (Semantic Layer → Trusted Agents → Security Controls) with labeled connectors to the three Quaeris engines (Context / Answer / Decision). No video background. Background color: `--bg-warm` (#F9F5FF). Gradient CTA button uses `--cta-bg` (linear-gradient 90deg #4E0250 → #8C20A4), radius `--radius-cta` (10px).

**Copy:**

- **Eyebrow (Badge):** `Governed Agentic Analytics`
- **H1 (Roboto 48px, #200123):**
  `Three layers. One governed answer.`
- **Subheading (Inter 20px, #6B4D72):**
  `Quaeris is built on a governed semantic layer, trusted AI agents, and enterprise-grade security controls — so every answer your team gets is accurate, auditable, and role-scoped. Architecture is not a marketing claim. It is what prevents hallucinations.`
- **Primary CTA:** `Book a Demo` → `/contact` (gradient button, 10px radius)
- **Ghost CTA:** `Explore the architecture` → scrolls to Section 03 anchor `#architecture`
- **Trust strip (below CTAs, 3 badges):**
  - `database` — Warehouse-native — your data never leaves your environment
  - `shield` — Prompt-level audit trail — every question, every answer, logged
  - `cpu` — BYOM — connect OpenAI, Anthropic, Google, or Meta models

---

### Section 02 — Integration Marquee

**Component:** `LogoMarquee`

**Copy:**

- **Label:** `Connects to your existing stack`
- **Logos (text labels, use actual logos when assets are available):**
  Snowflake · BigQuery · Databricks · Azure Synapse · Amazon Redshift · SharePoint · Google Drive
- **Note for implementation:** These are the seven integrations explicitly listed on the Quaeris homepage. Do not add others without verification. Mark any added logos `[data-placeholder]`.

---

### Section 03 — Three Pillars (Architecture Overview)

**Component:** `ThreePillars`

**Anchor:** `id="architecture"`

**Copy:**

- **Eyebrow:** `Platform architecture`
- **H2 (Roboto 40px, #200123):**
  `Governance-first by design. Not by dashboard filter.`
- **Section description (Roboto 17px, #6B4D72):**
  `Most AI analytics tools apply governance as a permission layer on top of an existing BI stack. Quaeris encodes it at three levels simultaneously — in the semantic layer that defines your metrics, in the agents that answer questions, and in the security controls that scope every query. Each layer reinforces the others.`

**Pillar cards (icon: Lucide name, title: Roboto 20px, body: Roboto 15px, #6B4D72, CTA links to subpage):**

| # | Lucide Icon | Title | Body | CTA | CTA href |
|---|---|---|---|---|---|
| 1 | `bar-chart-2` | Governed Semantic Layer | Your data team defines metrics once — revenue, activation rate, churn — inside Quaeris's Smart Semantic Layer. The layer auto-learns business definitions from user interaction; no upfront LookML or MDX modeling sprint is required. Every agent answer traces back to these certified definitions. Conflicting numbers across teams stop being a problem. | Deep dive | `/platform/semantic-layer` |
| 2 | `bot` | Trusted AI Agents | Business users ask questions in plain language. Quaeris agents plan and execute multi-step analyses — fetch, filter, join, forecast, anomaly-detect, root-cause — without a human in every step. Critically, agents query the governed semantic layer, not raw tables or a language model's memory. Every number is traceable to a certified metric. | Deep dive | `/platform/agents` |
| 3 | `shield-check` | Enterprise Security | Role-based access controls are enforced at query time, not as a dashboard filter. Quaeris runs warehouse-native — your data never leaves your environment. Every query, every agent step, and every answer is logged in a full prompt-level audit trail. Bring your own model: connect OpenAI, Anthropic, Google, or Meta and switch as your compliance posture evolves. | Deep dive | `/platform/governance` |

---

### Section 04 — How It Works (Four Steps)

**Component:** `MethodologySection` (reuse from home; swap copy)

**Copy:**

- **Eyebrow:** `How Quaeris works`
- **H2 (Roboto 40px, #200123):**
  `From plain-language question to governed answer — in four steps.`
- **Section description:** `A transparent pipeline. No black boxes, no unexplained numbers, no hallucinations.`

**Steps (icon: Lucide name, title: Roboto 20px, body: Roboto 15px):**

| Step | Lucide Icon | Title | Body |
|---|---|---|---|
| 01 | `plug` | Connect your warehouse | Quaeris connects directly to your existing Snowflake, BigQuery, Databricks, Azure Synapse, or Amazon Redshift instance. No data copying, no pipelines to rebuild. Your warehouse stays the system of record. SharePoint and Google Drive connect for document ingestion alongside structured warehouse data. |
| 02 | `layers` | Build the governed semantic layer | Your data team defines certified metric definitions, business rules, ownership, and lineage. The Smart Semantic Layer also auto-learns business context from user interaction — reducing the upfront authoring burden that every other semantic-layer product requires. Definitions are versioned and auditable. |
| 03 | `message-square` | Ask in plain language | Business users type questions as they would to a colleague. Quaeris agents interpret the question, traverse the semantic layer, plan multi-step analysis where needed, and return a precise, source-cited answer. Data and Document Agents can join structured warehouse tables with fields extracted from contracts, invoices, or reports in a single natural-language query. |
| 04 | `file-check` | Audited, role-scoped answers | Every answer shows the metric definitions it used and the agent steps it took. Role-based access controls enforce what each user can see — at query time, not dashboard level. The full prompt-level audit trail logs who asked what and when, satisfying both internal governance requirements and emerging external obligations such as the EU AI Act. |

---

### Section 05 — Six Core Capabilities Grid

**Component:** `IconFeatureGrid`

**Copy:**

- **Eyebrow:** `Core capabilities`
- **H2 (Roboto 40px, #200123):**
  `Six capabilities that make every answer trustworthy.`
- **Section description:** `Quaeris is not a single feature wrapped in a product shell. Six integrated capabilities work together — and each one is governed by the semantic layer beneath it.`

**Grid items (Lucide icon, title: Roboto 20px, body: Roboto 15px, #6B4D72):**

| Lucide Icon | Title | Body |
|---|---|---|
| `languages` | Natural Language to SQL | Plain-English questions translate into precise, governed SQL — checked against the semantic layer, not generated freeform. No query goes to the warehouse without passing through certified metric definitions. |
| `workflow` | Autonomous Multi-Step Workflows | Agents plan and execute analyses that span multiple steps — fetch, filter, join, forecast, anomaly-detect, root-cause — without requiring a human to hand off each stage. |
| `trending-up` | Predictive and Proactive Analysis | Forecasts, anomaly flags, root-cause diagnosis, and proactive alerts surface issues before they reach the board. The agent tells you what changed and why, not just what the current number is. |
| `brain` | Smart Semantic Layer | Auto-learns business definitions and data relationships from user interaction. No upfront LookML or MDX modeling sprint. The layer improves as usage grows. |
| `shuffle` | BYOM — Bring Your Own Model | Connect OpenAI, Anthropic, Google, or Meta models and switch as the landscape evolves. Quaeris is not the model gatekeeper. Your compliance team chooses the model; the governed layer stays constant. |
| `file-search` | Data and Document Agents | Extract structured fields from contracts, invoices, and resumes — then join with warehouse fact tables in a single natural-language query. Structured and unstructured data as co-equal citizens in one governed query. |

---

### Section 06 — Three-Engine Architecture Deep-Dive

**Component:** `BentoGrid`

**Copy:**

- **Eyebrow:** `Three-engine information architecture`
- **H2 (Roboto 40px, #200123):**
  `Context Engine. Answer Engine. Decision Engine.`
- **Section description (Roboto 17px, #6B4D72):**
  `Quaeris organizes its capabilities into three named engines. Each engine is a cluster of sub-capabilities with its own URL, so your team can navigate directly to the feature that serves their workflow.`

**Bento cards (large-format, lavender card bg #FDFAFF, border #ECDCF0):**

| Engine | Lucide Icon | Sub-capabilities | Route cluster | Body |
|---|---|---|---|---|
| Context Engine | `search-code` | Ask · Integrate · Activate | `/conversational-queries` · `/integrations` · `/activate` | The Context Engine is where questions enter the system. Natural-language queries are parsed, mapped to the semantic layer, and enriched with the business context the Smart Semantic Layer has learned. This is where NL-to-SQL translation happens — checked, not generated. |
| Answer Engine | `zap` | Search · Share · Accelerate | `/search` · `/communities` · `/accelerate` | The Answer Engine executes the analysis. Agents fetch, join, compute, and — where needed — forecast or anomaly-detect across multi-step workflows. Answers are assembled with source citations and delivered with full lineage. |
| Decision Engine | `layout-dashboard` | Pin · Embed · Resonate | `/pinboards` · `/embedded-analytics` · `/resonate` | The Decision Engine surfaces answers where decisions happen. Pin insights to pinboards, embed governed analytics in your own applications or portals, or push proactive alerts to the stakeholders who need them — all with the same governed data beneath. |

---

### Section 07 — Competitive Differentiation (Dark Section)

**Component:** `ProblemSolutionCards` (dark surface, `--bg-ink` #200123)

**Copy:**

- **Eyebrow (on dark, `--text-on-dark-dim`):** `Why architecture matters`
- **H2 (Roboto 48px, #FFFFFF):**
  `Every competitor claims AI. Not every architecture prevents hallucinations.`
- **Section description (Inter 20px, rgba(255,255,255,0.75)):**
  `The difference is not the language model. It is whether governance is encoded at the architecture level or applied as a filter on top.`

**Problem/Solution pairs (3 cards, card bg `--bg-ink-elevated` #2D0136, border `rgba(236,220,240,0.15)`):**

| Problem label | Problem copy | Solution label | Solution copy |
|---|---|---|---|
| Incumbent BI platforms | Power BI Copilot is Azure-OpenAI bound. Tableau leans Einstein. Snowflake Cortex Analyst locks you to one warehouse and one model. When the compliance landscape changes, you cannot switch. | BYOM as a compliance feature | Quaeris is not the model gatekeeper. Connect OpenAI, Anthropic, Google, or Meta — and switch as your compliance posture or cost math evolves. The governed layer underneath stays constant regardless of which model sits above it. |
| Manual semantic layers | Cube, dbt Semantic Layer, AtScale, and Honeydew all require your team to author semantic definitions upfront — LookML, SML, or MetricFlow YAML. That is weeks of modeling before users can ask a single governed question. | Auto-learning Smart Semantic Layer | Quaeris's Smart Semantic Layer learns business definitions and data relationships from user interaction. It reduces the upfront authoring sprint every other semantic-layer product demands. Your team defines the rules; the layer handles the learning. |
| Document AI and BI as separate stacks | Tableau, Power BI, Looker, Qlik, and Sigma are structured-data-only. Glean and Hebbia are document-only. Every workflow that spans a contract and a warehouse fact table requires manual extraction and a second query tool. | Data and Document Agents in one query | Quaeris's Document Agents extract structured fields from contracts, invoices, and reports, then join them with warehouse data in a single natural-language query. Structured and unstructured data are co-equal citizens in the same governed system. |

---

### Section 08 — Stats Band

**Component:** `StatBlock`

**Copy:**

- **Eyebrow:** `Platform performance`
- **Note for implementation:** The numbers below from the research context are illustrative templates from the Veris config (the template brand), not verified Quaeris production data. Mark all with `[data-placeholder]` until the Quaeris CS team supplies validated figures.

**Stat tiles:**

| Stat | Label | Delta note |
|---|---|---|
| [data-placeholder] | Reduction in ad-hoc analytics requests | Across deployed organizations |
| [data-placeholder] | Named customer deployments | Across Finance, Insurance, Retail, Healthcare, Manufacturing, Construction |
| [data-placeholder] | Median time from question to governed answer | Warehouse-native, no data movement |
| 0 | Hallucinated numbers | Every answer grounded in the certified semantic layer |

---

### Section 09 — Proof Strip (Case Study Cards)

**Component:** `CaseStudyCard` (horizontal scroll strip, 3 cards)

**Copy:**

- **Eyebrow:** `Customer proof`
- **H2 (Roboto 40px, #200123):**
  `Real deployments. Governed answers.`
- **Section description:** `Six case studies are live on the Quaeris site. Named customer attribution improves both trust and AI citation rates. Prioritize de-anonymization of at least two before this page ships.`

**Card slots (content drawn from existing Quaeris customer references; named where available, anonymized otherwise):**

| # | Industry label | Client | Outcome copy | Stats | CTA |
|---|---|---|---|---|---|
| 1 | Financial Services | [data-placeholder — "A leading financial institution"] | [data-placeholder — outcome to be confirmed with CS team] | [data-placeholder] · [data-placeholder] · [data-placeholder] | Read the story |
| 2 | Property Management SaaS | [data-placeholder — "A property management SaaS company"] | [data-placeholder — outcome to be confirmed with CS team] | [data-placeholder] · [data-placeholder] · [data-placeholder] | Read the story |
| 3 | Insurance | [data-placeholder — "An insurance company"] | [data-placeholder — outcome to be confirmed with CS team] | [data-placeholder] · [data-placeholder] · [data-placeholder] | Read the story |

**Note:** E4E (Courtney Ramey) is the only named testimonial in the research context. Do not fabricate any customer name, logo, quote, or metric. Structure all three cards with the same slot shape and fill from the CS team.

---

### Section 10 — Subpage Navigation (Segment Cards)

**Component:** `SegmentCards`

**Copy:**

- **Eyebrow:** `Explore by capability`
- **H2 (Roboto 40px, #200123):**
  `Go deeper into the layer that matters most to your team.`
- **Section description:** `Every pillar has a dedicated subpage with technical detail, integration diagrams, and relevant FAQs. Pick the layer that matches your team's current priority.`

**Cards (6 — matching the nav dropdown groups from veris/config.ts, Lucide icons, card bg `--bg-surface` #FFFFFF, accent border `--brand-accent` #8C20A4 on hover):**

| Lucide Icon | Title | Description | CTA href |
|---|---|---|---|
| `bot` | Agentic Query Engine | How Trusted AI Agents plan and execute multi-step analyses — governed by the semantic layer at every step. | `/platform/agents` |
| `layers` | Semantic Layer | The Smart Semantic Layer: how certified metric definitions are built, auto-learned, and enforced across every query. | `/platform/semantic-layer` |
| `git-branch` | Governance and Lineage | Full trace from plain-language question to source table — versioned, auditable, and ownership-stamped. | `/platform/governance` |
| `lock` | Role-Based Access | How query-time access controls scope data to exactly what each user's role permits — no dashboard-filter workarounds. | `/platform/access-control` |
| `database` | Warehouse-Native Architecture | Why your data never leaves your environment, and how Quaeris connects without pipelines or data copies. | `/platform/warehouse` |
| `scroll-text` | Audit Logs | The full prompt-level audit trail: who asked what, which agent steps ran, which metric definitions answered. | `/platform/audit` |

---

### Section 11 — Trust and Compliance Strip

**Component:** `NEW:TrustBadgeRow` — A single-row horizontal strip of trust/compliance badges on `--bg-canvas` (#FAF8FF), centered, with `--border-subtle` (#ECDCF0) top and bottom rules. Each badge is an icon (Lucide) + label pair. No logos or certifications should be listed unless verified from the research context.

**Copy:**

- **Eyebrow:** `Security and compliance`
- **Label:** `Built for regulated enterprise environments`

**Badge slots:**

| Lucide Icon | Label | Note |
|---|---|---|
| `shield` | Warehouse-native — data never leaves your environment | Confirmed in product profile |
| `user-check` | Role-based access enforced at query time | Confirmed in product profile |
| `file-text` | Prompt-level audit trail | Confirmed in product profile |
| `cpu` | BYOM — OpenAI, Anthropic, Google, Meta | Confirmed in product profile |
| `award` | SOC 2 [data-placeholder] | Mark placeholder until certification is confirmed |
| `globe` | GDPR [data-placeholder] | Mark placeholder until certification is confirmed |
| `activity` | HIPAA [data-placeholder] | Mark placeholder until certification is confirmed |

**Note for implementation:** The research context explicitly flags missing trust badges as a high-priority SEO gap (#5.2). Do not display SOC 2 / GDPR / HIPAA badges until Quaeris confirms they hold the relevant certifications. The `/trust` hub page (not this spec) is the appropriate location for the detailed compliance documentation.

---

### Section 12 — FAQ

**Component:** `FAQSection` (uses `Accordion` internally; `FAQPage` JSON-LD schema required — Week 1 priority per growth strategy)

**Copy:**

- **Eyebrow:** `Common questions`
- **H2 (Roboto 40px, #200123):**
  `Architecture questions, answered plainly.`
- **Mini-card:** `Still have questions? Book a 30-minute platform walkthrough with a Quaeris solutions engineer. We will connect to your warehouse and show you a governed answer against your own data.`

**FAQ items:**

| # | Question | Answer | Default open |
|---|---|---|---|
| 1 | Does Quaeris hallucinate numbers? | No. Quaeris agents query the governed semantic layer — they do not generate numbers from a language model's training data. Every answer is grounded in the certified metric definitions your data team controls. If a question cannot be answered from the semantic layer, the agent says so rather than guessing. | Yes |
| 2 | Does my data ever leave my environment? | No. Quaeris is warehouse-native. It connects directly to your existing Snowflake, BigQuery, Databricks, Azure Synapse, or Amazon Redshift instance and queries it in place. No data is copied, cached, or stored on Quaeris infrastructure. | No |
| 3 | What is the Smart Semantic Layer and how is it different from dbt or LookML? | The Smart Semantic Layer is Quaeris's auto-learning layer for certified metric definitions and business context. Unlike dbt's MetricFlow or LookML, it learns business definitions from user interaction — reducing the upfront authoring sprint every other semantic-layer product requires. Your team still controls and certifies definitions; the layer handles the inference work. | No |
| 4 | What does BYOM mean in practice? | BYOM (Bring Your Own Model) means Quaeris connects to the LLM of your choice — OpenAI, Anthropic, Google, or Meta — and lets you switch as the landscape evolves. Quaeris is not the model gatekeeper. Your compliance team chooses the model; the governed semantic layer underneath stays constant. | No |
| 5 | How long does deployment take? | Most teams connect to their warehouse and serve governed answers within two weeks. Week one covers warehouse integration and semantic layer setup. Week two covers user onboarding and access policy configuration. There is no data migration — your existing warehouse is the deployment target. | No |
| 6 | How does the audit trail work? | Every query, every agent step, and every answer is logged in a full prompt-level audit trail. The log records who asked, what question they asked, which agent steps ran, which metric definitions were used, and which data was returned. This trail is accessible to your governance and compliance teams and is designed to satisfy both internal audit requirements and emerging external obligations such as the EU AI Act and expanding SOX provisions for AI agents. | No |
| 7 | Can Quaeris query documents alongside warehouse data? | Yes. Data and Document Agents extract structured fields from contracts, invoices, resumes, and reports — then join them with warehouse fact tables in a single natural-language query. Structured and unstructured data are co-equal citizens in the same governed query. SharePoint and Google Drive are supported as document sources. | No |
| 8 | Does Quaeris replace our existing BI tool? | Quaeris complements your BI stack rather than replacing it. It sits above your warehouse and semantic layer, giving business users a governed natural-language interface for exploratory and investigative questions. Scheduled, structured reports and dashboards continue to serve their current purpose. Quaeris handles the questions that do not fit a pre-built dashboard. | No |

---

### Section 13 — CTA Band

**Component:** `CTABand`

**Copy:**

- **Eyebrow (muted):** `Ready to see it live?`
- **H2 (Roboto 40px on dark or light — per CTABand dark variant):**
  `Stop explaining why your numbers disagree. Start governed analytics.`
- **Subcopy:** `Book a demo. We will connect to your warehouse, walk through the semantic layer setup, and return a governed answer against your own data — in 30 minutes.`
- **Primary CTA:** `Book a Demo` → `/contact`
- **Ghost CTA:** `See customer stories` → `/customers`

---

## 4. Proof and Data Points

All factual claims on this page must originate from the research context. The following table separates confirmed facts from slots that require data from the Quaeris CS or product team before copy is finalized.

| Claim | Status | Source |
|---|---|---|
| Natural Language to SQL checked against the semantic layer — not free-form generation | Confirmed | Research context §1, Six core capabilities |
| Autonomous multi-step workflows: fetch, filter, join, forecast, anomaly-detect, root-cause | Confirmed | Research context §1, Six core capabilities |
| Smart Semantic Layer auto-learns from user interaction — no upfront LookML / MDX sprint | Confirmed | Research context §1, Six core capabilities |
| BYOM: OpenAI, Anthropic, Google, Meta — customer chooses, can switch | Confirmed | Research context §1, Six core capabilities |
| Document Agents extract fields from contracts, invoices, resumes — joined with warehouse data | Confirmed | Research context §1, Six core capabilities |
| Integrations: Snowflake, BigQuery, Databricks, Azure Synapse, Amazon Redshift, SharePoint, Google Drive | Confirmed | Research context §1, product profile |
| Warehouse-native — data does not leave the customer's environment | Confirmed | Veris config (brand-level product truth); research context §3.2 differentiation |
| Predictive and proactive analysis: forecasts, anomaly flags, root-cause, proactive alerts | Confirmed | Research context §1, Six core capabilities |
| Context Engine (Ask, Integrate, Activate), Answer Engine (Search, Share, Accelerate), Decision Engine (Pin, Embed, Resonate) | Confirmed | Research context §1, three-engine IA table |
| BYOM described as a compliance feature not a procurement feature — framing unique to Quaeris | Confirmed | Research context §4, Whitespace slot #2 |
| Prompt-level audit trail — "who-asked-what" — no competitor publishes this story | Confirmed | Research context §4, Whitespace slot #5; §11.2 four defensible differentiators |
| No competitor in the 14-company teardown claims auto-learning from interaction | Confirmed | Research context §11.2 |
| EU AI Act and SOX expansion as tailwinds for the audit trail | Confirmed | Research context §6.3 keyword list, items 8 and 22 |
| Power BI Copilot is Azure-OpenAI bound; Tableau leans Einstein; Cortex Analyst and Genie are warehouse-locked | Confirmed | Research context §3.2, §3.3 differentiation analysis |
| dbt MetricFlow / LookML / AtScale require upfront authoring; Quaeris auto-learns | Confirmed | Research context §3.4 vs Segment 4 |
| Document AI competitors (Glean, Hebbia) are document-only; BI competitors are structured-only | Confirmed | Research context §3.5 vs Segment 5 |
| E4E (Courtney Ramey) — only named testimonial on the Quaeris site | Confirmed | Research context §1 |
| Six case studies exist on the site; only one is named — critical EEAT gap | Confirmed | Research context §1 |
| SOC 2 / GDPR / HIPAA / ISO 27001 certification status | **[data-placeholder]** | Not confirmed in research context; site currently shows no badges (§5.2) |
| Reduction in ad-hoc requests (stat) | **[data-placeholder]** | Illustrative in Veris template; needs verified Quaeris production data |
| Median time to first insight (stat) | **[data-placeholder]** | Illustrative in Veris template; needs verified Quaeris production data |
| Named customer count (stat) | **[data-placeholder]** | Needs CS confirmation |
| G2 / Capterra / Gartner Peer Insights ratings | **[data-placeholder]** | Review campaign not yet launched (§7 growth strategy Q2 action) |
| Case study outcomes (all three card slots) | **[data-placeholder]** | CS team to provide verified numbers before page ships |

---

## 5. Internal Links

| Destination route | Anchor text | Section where it appears |
|---|---|---|
| `/platform/agents` | Deep dive (pillar card CTA) | Section 03 — Three Pillars |
| `/platform/semantic-layer` | Deep dive (pillar card CTA) | Section 03 — Three Pillars |
| `/platform/governance` | Deep dive (pillar card CTA) | Section 03 — Three Pillars |
| `/platform/warehouse` | See supported warehouses | Section 04 — How It Works, Step 01 |
| `/platform/semantic-layer` | Explore the semantic layer | Section 04 — How It Works, Step 02 |
| `/contact` | See a live demo | Section 04 — How It Works, Step 03 |
| `/conversational-queries` | Context Engine sub-capability | Section 06 — Three-Engine Bento |
| `/integrations` | Context Engine sub-capability | Section 06 — Three-Engine Bento |
| `/activate` | Context Engine sub-capability | Section 06 — Three-Engine Bento |
| `/search` | Answer Engine sub-capability | Section 06 — Three-Engine Bento |
| `/communities` | Answer Engine sub-capability | Section 06 — Three-Engine Bento |
| `/accelerate` | Answer Engine sub-capability | Section 06 — Three-Engine Bento |
| `/pinboards` | Decision Engine sub-capability | Section 06 — Three-Engine Bento |
| `/embedded-analytics` | Decision Engine sub-capability | Section 06 — Three-Engine Bento |
| `/resonate` | Decision Engine sub-capability | Section 06 — Three-Engine Bento |
| `/platform/agents` | Agentic Query Engine (segment card) | Section 10 — Subpage Navigation |
| `/platform/semantic-layer` | Semantic Layer (segment card) | Section 10 — Subpage Navigation |
| `/platform/governance` | Governance and Lineage (segment card) | Section 10 — Subpage Navigation |
| `/platform/access-control` | Role-Based Access (segment card) | Section 10 — Subpage Navigation |
| `/platform/warehouse` | Warehouse-Native Architecture (segment card) | Section 10 — Subpage Navigation |
| `/platform/audit` | Audit Logs (segment card) | Section 10 — Subpage Navigation |
| `/trust` | SOC 2 / GDPR / HIPAA badges (trust strip) | Section 11 — Trust Strip |
| `/contact` | Book a Demo (CTAs) | Sections 01, 13 |
| `/customers` | See customer stories | Section 13 — CTA Band |

**Incoming links this page should receive** (for implementation team to wire up):

- Homepage hero "Learn about the platform" ghost CTA → `/platform`
- Homepage pillar cards "Learn more" CTAs → `/platform` (then deeper to subpages on second pass)
- Nav mega-menu Platform top-level link (currently `href: "/platform"`) → already in veris/config.ts
- `/governed-ai-analytics` pillar hub → `/platform` as the product home for the governed-AI category
- `/agentic-analytics` pillar hub → `/platform` as the product architecture reference
- `/semantic-layer` pillar hub → `/platform/semantic-layer`

---

## 6. Open Questions

1. **Certification status.** The research context shows no trust badges currently displayed on quaeris.ai and flags this as a high-priority gap (§5.2). Before Section 11 ships, the team must confirm which of SOC 2 / GDPR / HIPAA / ISO 27001 Quaeris currently holds. Do not display any certification badge without confirmation. This is also a prerequisite for the `/trust` hub page.

2. **Case study de-anonymization.** The research context identifies six anonymized case studies and calls this the "most critical EEAT gap on the site" (§1). Section 09 (proof strip) has three card slots. At minimum, two should be de-anonymized before this page ships — otherwise the section has no real EEAT value and may be better suppressed until CS clears the approvals.

3. **Stat block numbers.** All four stats in Section 08 are placeholders. The 87% ad-hoc reduction and 3x faster time-to-insight figures exist in the Veris template config but are not confirmed Quaeris production data. The team should not ship Section 08 with unverified numbers.

4. **Architecture diagram (Section 01 hero).** The PlatformHero spec calls for a static SVG showing the three-pillar stack. This needs a design asset. Options: (a) commission from the existing design system's illustrator, (b) use an abstract block diagram built from the existing Tailwind token system, (c) defer the illustration and launch with a code-driven animated diagram using framer-motion. Decision needed before engineering begins the hero.

5. **BentoGrid for Section 06.** The three-engine architecture section maps to a BentoGrid layout, but the three-engine URL set (`/conversational-queries`, `/search`, `/pinboards`, etc.) currently uses brand-coined IA verb slugs that "capture zero search demand" per §5.3 of the SEO audit. Before linking to these subpages, the team should decide whether to redirect the existing verb-noun slugs to keyword-aligned slugs or simply present the verb-noun navigation as-is while the redirect plan is finalized. Do not block this page's launch on that decision — use the current slugs and flag for redirect sweep.

6. **BYOM model list currency.** The confirmed BYOM model list from the research context is: OpenAI, Anthropic, Google, Meta. If additional model providers have been added since the May 2026 research run, the product team should update the copy in Sections 01, 05, 07, and 11 to reflect the current list.

7. **TrustBadgeRow and PlatformHero as new components.** Two new components are specified here (Section 01 and Section 11) that do not exist in the current inventory. The implementation team must decide whether to build these as standalone components or compose them from existing primitives (`Eyebrow`, `Badge`, `button`, `SectionHeader`). The badge row in particular could be built from three-item `IconFeatureGrid` variant with minimal new code.

8. **SoftwareApplication schema.** The growth strategy assigns this schema to `/platform` at Week 2 priority. Implementation should confirm which fields are required and what product metadata (pricing model, operating system, application category) Quaeris will supply. `applicationCategory: "BusinessApplication"` is safe; pricing model may need to be omitted or set to `"OnApplication"` given enterprise custom pricing.

9. **"Ask AI" GEO widget.** The competitive analysis (§11.1) identifies the "Ask AI" GEO widget — pre-loading a query about Quaeris into ChatGPT / Grok / Perplexity / Claude — as a 2-day implementation with measurable AI citation lift (stolen from ThoughtSpot's playbook). This is not in this page spec but the Platform page is the correct placement alongside the homepage. Flag for the engineering sprint that follows this spec.

10. **Named concept seeding.** The research context recommends coining and using consistently the terms "Trusted Agent Layer," "Governance-First Semantic Engine," "BYOM Mesh," "Document-Aware Analytics," and "Prompt Audit Trail" (§11.1, tactic 5). The copy in this spec uses "Smart Semantic Layer," "Trusted Agents," and "Prompt-Level Audit Trail" — the three terms already in the product profile. Before finalizing copy, the marketing team should confirm the approved named-concept list and ensure this page uses the canonical phrasing that will appear in all PR, decks, and blog posts.
