# Page Spec — /solutions

**Route:** `/solutions`
**Status:** Ready for implementation
**Date:** 2026-06-12
**Author:** Page-spec team

---

## 1. Purpose & Primary Audience

The `/solutions` page is a mid-funnel routing hub. Its job is to receive visitors who already understand that Quaeris is an analytics platform and need to confirm that it solves *their specific* problem — before they commit to a product deep-dive or demo request. The page makes two parallel arguments: (a) Quaeris is built for the team you belong to — data teams, analysts, or executives — each with distinct pain points and workflow implications; and (b) Quaeris is built for the regulated, data-intensive industry you operate in — finance, insurance, retail/CPG, healthcare, manufacturing, or construction. The page does not describe features in depth; it names the specific friction each audience faces, positions Quaeris's governed-agentic approach as the structural answer, and routes visitors to the six audience-specific child pages where the detailed argument lives. Secondary functions: establish that Quaeris is production-deployed across multiple industries (social proof anchor), and surface the governance-first differentiators (BYOM, prompt-level audit trail, auto-learning semantic layer) in enough context that a compliance-minded buyer sees the signal before clicking through.

---

## 2. SEO

**Title tag (58 chars):**
`AI Analytics Solutions for Teams & Industries | Quaeris`

**Meta description (152 chars):**
`Governed agentic analytics built for data teams, analysts, and executives across finance, insurance, healthcare, retail, manufacturing, and construction.`

**Target keywords (drawn from research keyword clusters C1, C2, C9, C12):**

| Keyword | Cluster | Rationale |
|---|---|---|
| governed AI analytics | C1 | Pillar / category-defining; medium volume, KD 38 |
| agentic analytics platform | C2 | High-intent commercial; high volume, KD 52 |
| industry AI analytics platform | C9 | Direct match for the industry routing angle |
| AI analytics for CFO | C12 | Persona conversion path; medium volume, KD 42 |
| HIPAA compliant analytics platform | C9 | Regulated-industry BOFU signal; medium volume, KD 40 |

**Schema to implement on this page:**
- `BreadcrumbList` (Home > Solutions)
- `FAQPage` — pull the two FAQs from Section 9 below
- `WebPage` with `about` pointing to the Governed Agentic Analytics pillar hub `/governed-ai-analytics`

---

## 3. Section Blueprint

Sections are ordered. Each entry names the component to reuse (exact filename from inventory) or flags `NEW:<name>` with a description. Copy is in Quaeris voice: confident, precise, governance-first, zero hype-fluff. Type scale follows PDF: H1 48px Roboto, H2 40px Roboto (section headings), H3 20px Roboto (card titles), body Inter 16px, eyebrow Roboto 14px uppercase letter-spaced `#8C20A4`.

---

### Section 1 — Page Hero

**Component:** `NEW:SolutionsHero`
Two-column layout. Left: eyebrow + H1 + subcopy + two CTAs. Right: a 2×3 card grid (six cards — three team, three industry — with Lucide icon, label, and one-line description). Background: `#F9F5FF` (token `--bg-warm`). No full-bleed image. CTA buttons use gradient `linear-gradient(90deg, #4E0250, #8C20A4)`, radius `10px`.

**Copy:**

Eyebrow: `Solutions`

H1 (48px Roboto, color `#200123`):
> Governed analytics built for your team. Trusted in your industry.

Subcopy (Inter 20px, color `#6B4D72`):
> Quaeris connects your data warehouse to a governed semantic layer and surfaces trusted, auditable answers — whether you run a data platform, lead analysis, or make decisions. Built for regulated industries where getting the number wrong has consequences.

CTA primary: **Book a Demo** → `/contact`
CTA secondary (ghost): **See how it works** → `/platform`

Right-side 2×3 card grid (icon, label, one-liner — not full audience copy):

| Icon (Lucide) | Label | One-liner |
|---|---|---|
| `database` | Data Teams | Control access, cut the ticket queue |
| `bar-chart-2` | Analysts | Self-serve at speed, with full audit |
| `briefcase` | Executives | Reliable answers without waiting on reports |
| `landmark` | Finance & Insurance | Governed analytics for audit-ready decisions |
| `heart-pulse` | Healthcare | HIPAA-compliant insight at the point of need |
| `factory` | Manufacturing & Construction | Margin and quality analytics from your own data |

---

### Section 2 — Problem Strip (light lavender band)

**Component:** `ProblemSolutionCards`
Full-width lavender band (`#FAF8FF`), border `#ECDCF0`. Three problem cards side by side. Each card: problem statement headline + one-sentence elaboration. No images. Cards use `#FDFAFF` card bg per PDF.

**Copy:**

Eyebrow: `Why teams choose Quaeris`

H2 (40px Roboto, `#200123`):
> The three breakdowns that governed agentic analytics fixes.

Card 1 — icon `triangle-alert` (Lucide)
**H3:** Conflicting numbers across teams
Body: Every team has its own definition of revenue, activation rate, or churn. Quaeris's Smart Semantic Layer certifies one definition and enforces it across every agent answer — so the board debate stops.

Card 2 — icon `clock` (Lucide)
**H3:** Analysts buried in ad-hoc requests
Body: Business users wait days for answers that take minutes to retrieve. Quaeris gives any user a governed natural-language interface to their own data — agents answer; analysts focus on work that compounds.

Card 3 — icon `shield-off` (Lucide)
**H3:** AI that can't be audited or trusted
Body: Most AI analytics tools are model-locked and produce outputs with no traceable lineage. Quaeris maintains a prompt-level audit trail and supports BYOM — so your compliance team can verify every answer and swap models as standards evolve.

---

### Section 3 — By Team (primary routing block)

**Component:** `SegmentCards`
Three cards in a row on `#FFFFFF` surface. Each card: eyebrow label, H3 heading, 2–3 sentence body, a three-item bullet list of what this audience gets, and a ghost CTA linking to the child page. Cards use `#FDFAFF` card bg, border `#ECDCF0`.

**Copy:**

Eyebrow: `By team`

H2 (40px Roboto, `#200123`):
> Built for every person who touches your data.

Subcopy (Roboto 17px, `#6B4D72`):
> Quaeris adapts to where you sit in the analytics workflow — not the other way around.

---

**Card A — Data Teams**
Eyebrow: `For data teams`
H3: Reduce the request backlog. Stay in control.
Body: Your data team defines the governed semantic layer once. From that point, business users get answers without filing a ticket — while you retain full visibility into every query, every access decision, and every answer produced.
Bullets (Lucide `check` icons, color `#8C20A4`):
- Role-based access enforced at query time, not dashboard filter
- Full prompt-level audit trail for every agent interaction
- Auto-learning Smart Semantic Layer grows without upfront LookML or MDX sprints

CTA (ghost): Explore Data Teams → `/solutions/data-teams`

---

**Card B — Analysts**
Eyebrow: `For analysts`
H3: Self-serve at speed. Without sacrificing trust.
Body: Stop acting as a translation layer between business users and the warehouse. Ask complex, multi-step questions in plain language and receive source-cited answers. Quaeris agents chain forecasts, anomaly detection, and root-cause steps — so your analysis runs further, faster.
Bullets:
- Autonomous multi-step workflows: fetch, filter, forecast, root-cause — one query
- Every answer cites the metric definitions and tables it used
- Connect structured warehouse data and unstructured documents in a single query

CTA (ghost): Explore Analysts → `/solutions/analysts`

---

**Card C — Executives**
Eyebrow: `For executives`
H3: Reliable answers. Without waiting on reports.
Body: Ask the question you actually have — not the question a dashboard was pre-built to answer. Quaeris agents retrieve governed answers from your certified semantic layer with role-based access enforced. No hallucinations, no stale exports, no ticket.
Bullets:
- Questions answered in seconds against live warehouse data
- Proactive alerts flag anomalies before they reach your inbox as problems
- Every answer is auditable — traceable to its source metric definition

CTA (ghost): Explore Executives → `/solutions/executives`

---

### Section 4 — Stat Band

**Component:** `StatBlock`
Four-stat horizontal band on dark background (`#200123`). Stats in white. Source note beneath band: "Outcomes across Quaeris-deployed organizations. [data-placeholder: verify stats with CS team before publish]"

**Stats (use the values carried over from brand config — these are the only verified figures in the system):**

| Stat | Label |
|---|---|
| [data-placeholder] % reduction in ad-hoc requests | Across deployed teams |
| [data-placeholder] min | Median time from question to governed answer |
| 0 | Hallucinated numbers — every answer cites its source |
| [data-placeholder] weeks | Typical time to first governed answer in production |

Design note: the existing `StatBlock` component renders animated counters. The `0` hallucinations stat should display as a large "0" with a descriptor — this is the only stat a compliance buyer needs to see to keep reading.

---

### Section 5 — By Industry (secondary routing block)

**Component:** `SegmentCards`
Reuse component. Six cards in a 3×2 grid. Surface: `#FAF8FF`. Each card: industry icon (Lucide), industry name as H3, one sentence on the acute pain this industry faces, a two-item bullet list of what Quaeris specifically addresses, CTA ghost link.

**Copy:**

Eyebrow: `By industry`

H2 (40px Roboto, `#200123`):
> Governed analytics for regulated industries.

Subcopy:
> Generic AI BI tools avoid regulated verticals. Quaeris is built precisely for industries where the number has to be right, auditable, and traceable.

---

**Card 1 — Finance**
Icon: `landmark`
H3: Finance
Pain: Conflicting KPIs across desks, portfolios, and legal entities create audit exposure.
Bullets:
- Single certified metric definition per KPI across every reporting entity
- Prompt-level audit trail maps to SOX agent-control requirements [data-placeholder: confirm SOX applicability with legal]

CTA: Finance analytics → `/solutions/finance` or `/industries/finance-governed-analytics`

---

**Card 2 — Insurance**
Icon: `file-check`
H3: Insurance
Pain: Claims, underwriting, and actuarial teams work from different extracts of the same data.
Bullets:
- Unified governed query across structured warehouse and unstructured policy documents
- HIPAA-compliant deployment posture for health lines [data-placeholder: confirm HIPAA certification status]

CTA: Insurance analytics → `/solutions/insurance` or `/industries/insurance-governed-analytics`

---

**Card 3 — Retail & CPG**
Icon: `shopping-cart`
H3: Retail & CPG
Pain: Merchandising, supply chain, and marketing report different revenue numbers to the same executive.
Bullets:
- Smart Semantic Layer certifies revenue, margin, and sell-through across all regional teams
- Autonomous multi-step agents connect POS, inventory, and promo data in one query

CTA: Retail analytics → `/solutions/retail` or `/industries/retail-cpg-governed-analytics`

---

**Card 4 — Healthcare**
Icon: `heart-pulse`
H3: Healthcare
Pain: Patient, claims, and operational data live in separate systems — and governance requirements make ad-hoc joins risky.
Bullets:
- Data & Document Agents unify structured EHR warehouse data with unstructured clinical notes in one governed query
- Role-based access and full audit trail aligned to data privacy requirements [data-placeholder: confirm HIPAA certification status]

CTA: Healthcare analytics → `/solutions/healthcare` or `/industries/healthcare-governed-analytics`

---

**Card 5 — Manufacturing**
Icon: `factory`
H3: Manufacturing
Pain: Quality, OEE, and margin metrics are scattered across PLCs, ERPs, and line-level exports.
Bullets:
- Conversational queries against Snowflake / Azure Synapse / Databricks without moving data
- Proactive anomaly detection flags quality issues before they propagate to downstream lines

CTA: Manufacturing analytics → `/solutions/manufacturing` or `/industries/manufacturing-governed-analytics`

---

**Card 6 — Construction**
Icon: `hard-hat`
H3: Construction
Pain: Project margin, subcontractor spend, and schedule data are manually reconciled in spreadsheets long after the window to act.
Bullets:
- Natural-language queries across project, financial, and document data in one governed interface
- Autonomous agents surface margin erosion signals as they occur, not at month-end

CTA: Construction analytics → `/solutions/construction` or `/industries/construction-governed-analytics`

---

### Section 6 — Differentiator Feature Row

**Component:** `FeatureRow`
Two alternating feature rows on white. Each: eyebrow, H3 heading (20px), body copy (3–4 sentences), one-line call-to-action with icon. No product screenshots required for spec; image slots marked `[data-placeholder: UI screenshot]`.

**Copy:**

H2 (40px Roboto, section intro, center-aligned):
> Four things Quaeris does that no other platform does together.

Subcopy (center-aligned):
> These are the structural differences — not feature checkboxes.

---

**Row 1 — BYOM (left image, right text)**
Eyebrow: `Model independence`
H3: Bring Your Own Model. Your compliance team controls which AI runs on your data.
Body: Quaeris connects to OpenAI, Anthropic, Google, and Meta models. You choose which model processes your data — and you switch as the landscape evolves. No vendor lock-in means your AI governance policy isn't hostage to a single provider's roadmap. This is BYOM framed as a compliance feature, not a procurement one.
Lucide icon inline: `key`
CTA text: Learn about BYOM → `/platform` (anchor to BYOM section)
Image slot: `[data-placeholder: UI screenshot showing model selection panel]`

---

**Row 2 — Auto-learning Semantic Layer (right image, left text)**
Eyebrow: `Smart Semantic Layer`
H3: A semantic layer that learns your business — without a modeling sprint.
Body: Every other semantic layer requires your team to write LookML, dbt metrics, or MDX cube definitions before the first query runs. Quaeris's Smart Semantic Layer learns business definitions and data relationships from user interaction. Setup takes weeks, not quarters — and the layer keeps improving as teams use it.
Lucide icon inline: `brain`
CTA text: Explore the semantic layer → `/platform/semantic-layer`
Image slot: `[data-placeholder: UI screenshot showing semantic layer definition panel]`

---

**Row 3 — Prompt-Level Audit Trail (left image, right text)**
Eyebrow: `Governance by design`
H3: Every question, every agent step, every answer — logged and traceable.
Body: Quaeris maintains a full prompt-level audit trail: who asked what, which agent steps ran, which metric definitions were used, which data was returned. This is the audit story compliance teams need when regulators ask about AI-generated outputs — and it maps directly to EU AI Act obligations and the SOX expansion to AI agents. No other analytics platform publishes this story.
Lucide icon inline: `scroll-text`
CTA text: See governance controls → `/platform/governance`
Image slot: `[data-placeholder: UI screenshot showing audit log view]`

---

**Row 4 — Document + Warehouse Unified Query (right image, left text)**
Eyebrow: `Data & Document Agents`
H3: Ask questions that span contracts, invoices, and your warehouse — in one query.
Body: Document AI tools don't execute SQL. BI platforms don't read PDFs. Quaeris's Data & Document Agents extract structured fields from contracts, invoices, and reports and join them with warehouse fact tables in a single natural-language query. This is the only governed, unified query capability available across both structured and unstructured enterprise data.
Lucide icon inline: `files`
CTA text: Explore document agents → `/platform/agents`
Image slot: `[data-placeholder: UI screenshot showing document + SQL unified query result]`

---

### Section 7 — Social Proof Anchor

**Component:** `CaseStudyCard`
Two cards side by side on `#FAF8FF` surface. Each card: industry label, client identifier, outcome headline, three stat chips, and a "Read the story" link. All client names and stats are `[data-placeholder]` — do not invent. Structure the slot now; populate on publish.

**Copy:**

Eyebrow: `Customer proof`

H2 (40px Roboto, `#200123`):
> Real outcomes. Governed answers.

Subcopy:
> Six case studies are published on the site. Five are anonymized — only one is named today (E4E / Courtney Ramey). Name each customer before this page launches — unnamed case studies are the primary EEAT gap on quaeris.ai today.

---

**Card 1**
Industry label: [data-placeholder: e.g., "Financial Services"]
Client: [data-placeholder: customer name — do not use "A leading financial institution"]
Outcome headline: [data-placeholder: specific quantified outcome — e.g., "Reduced ad-hoc requests by X% while opening self-serve to Y business users"]
Stat chips: [data-placeholder: three metrics]
CTA: Read the story → `/use-cases/[slug]` or `/case-studies/[slug]`

**Card 2**
Industry label: [data-placeholder: e.g., "Insurance"]
Client: [data-placeholder: customer name]
Outcome headline: [data-placeholder: specific quantified outcome]
Stat chips: [data-placeholder: three metrics]
CTA: Read the story → `/use-cases/[slug]`

Note to content team: E4E / Courtney Ramey is the only named testimonial on the site today. Priority is to de-anonymize the financial institution and insurance customer cases before this page goes live. Unnamed cards should not appear on launch — use one named card + a "See all stories" CTA if only one is cleared.

---

### Section 8 — Integrations Strip

**Component:** `NEW:IntegrationsBadgeStrip`
Single-row horizontal strip on white surface. Centered label + a row of integration name badges (pill shape, `#8C20A4` text, `rgba(140,32,164,.10)` bg per PDF category-pill spec). Overflow scrolls on mobile. No images — text pills only until per-connector SVG assets are available.

**Copy:**

Label (Roboto 14px uppercase, `#8C20A4`):
`Works with your existing warehouse and data sources`

Badge list (from verified integrations on homepage and research context):
Snowflake · BigQuery · Databricks · Azure Synapse · Amazon Redshift · SharePoint · Google Drive

Note: Do not list connectors that are not confirmed on the quaeris.ai homepage or in the research context. Additional connectors go on `/integrations` and child pages only.

CTA link below strip (text link, `#8C20A4`): See all integrations → `/integrations`

---

### Section 9 — FAQ

**Component:** `Accordion` (from `ui/Accordion.tsx`)
Surface: `#FAF8FF`. Three questions. Implement `FAQPage` JSON-LD on this section.

**Copy:**

Eyebrow: `Common questions`

H2 (40px Roboto, `#200123`):
> Questions about solutions and fit.

---

**Q1:** Is Quaeris one product or separate products for each team and industry?
**A1:** One platform. The team and industry pages describe how the same governed agentic analytics platform — Context Engine, Answer Engine, Decision Engine — maps to the specific workflows and pain points of each audience. The semantic layer, BYOM model choice, prompt-level audit trail, and Data & Document Agents are available across all deployments. Industry-specific content reflects the compliance posture and data patterns common to that sector.

**Q2:** Does Quaeris require a data migration or new data warehouse?
**A2:** No. Quaeris is warehouse-native. It connects directly to your existing Snowflake, BigQuery, Databricks, Azure Synapse, or Amazon Redshift instance. Your data never leaves your environment. The Smart Semantic Layer is built on top of your existing tables — there is nothing to migrate and no new infrastructure to stand up.

**Q3:** How does BYOM work in a regulated industry context?
**A3:** BYOM (Bring Your Own Model) means your organization connects and governs which AI model processes your prompts and data — OpenAI, Anthropic, Google, or Meta. You are not locked to Quaeris's choice of model vendor. In regulated industries this matters because your compliance team can evaluate each model against your data-processing agreements and switch as regulatory standards evolve. The prompt-level audit trail captures model identity alongside every answer, so the audit record is complete regardless of which model ran. [data-placeholder: confirm specific model certification posture with product team before publish]

---

### Section 10 — CTA Band

**Component:** `CTABand`
Full-width dark band, background `#200123`. Two CTAs: primary gradient button + ghost button.

**Copy:**

Eyebrow (Roboto 14px, `rgba(255,255,255,.75)`): `Ready to see it in your environment?`

H2 (48px Roboto on dark per PDF "Built for Industries" spec, color `#FFFFFF`):
> Governed analytics built for the way your team actually works.

Subcopy (Inter 19px, `rgba(255,255,255,.75)` per PDF CTA Lead Text):
> Book a 30-minute demo. We'll connect to your warehouse, configure a governed semantic layer against your data, and show you a live answered query — no slides, no placeholder data.

CTA primary (gradient, radius 10px): **Book a Demo** → `/contact`
CTA secondary (ghost, color `#8C20A4` border, white text): **Explore the platform** → `/platform`

---

## 4. Proof & Data Points

The following data points appear in the research context and may be used verbatim on the page. Anything marked `[data-placeholder]` must be sourced before publication — do not estimate or invent.

| Claim | Status | Source |
|---|---|---|
| Six core capabilities: NL-to-SQL, Autonomous Multi-Step Workflows, Predictive & Proactive Analysis, Smart Semantic Layer, BYOM, Data & Document Agents | Verified | Product profile §1 |
| Six target industries: Finance, Insurance, Retail/CPG, Healthcare, Manufacturing, Construction | Verified | Homepage explicit, product profile §1 |
| Supported warehouses: Snowflake, BigQuery, Databricks, Azure Synapse, Amazon Redshift | Verified | Homepage explicit |
| Document sources: SharePoint, Google Drive | Verified | Homepage explicit |
| BYOM model support: OpenAI, Anthropic, Google, Meta | Verified | Product profile §1 |
| Smart Semantic Layer auto-learns from user interaction — no upfront LookML/MDX sprint required | Verified | Product profile §1, competitive analysis §3.4 |
| No competitor publishes a "who-asked-what" audit story — uncontested positioning slot | Verified | Whitespace map §4, competitor teardown §11.2 |
| EU AI Act tailwind for audit trail positioning | Verified | Keyword research §6.3 (rank 2 and rank 8) |
| 16 acquisitions in 18 months — Quaeris independence is increasingly rare | Verified | §13 |
| One named customer on site: E4E / Courtney Ramey | Verified | Product profile §1 |
| Six case studies published, only one named — critical EEAT gap | Verified | SEO audit §5.1 |
| Prompt-level audit trail maps to SOX expansion to AI agents | Verified | Keyword research §6.3 (rank 22) |
| Stat: % reduction in ad-hoc requests | [data-placeholder] | Carry verified figure from CS team |
| Stat: median time to first governed answer | [data-placeholder] | Carry verified figure from CS team |
| Stat: typical weeks to production | [data-placeholder] | Carry verified figure from CS team |
| HIPAA certification status | [data-placeholder] | Confirm with legal/compliance team |
| SOX applicability of audit trail | [data-placeholder] | Confirm with legal/compliance team |

**Do not use:** any statistic, customer name, certification badge, G2/Capterra score, funding figure, or analyst ranking that is not in this table or explicitly cleared by the CS or legal team.

---

## 5. Internal Links

| Destination route | Anchor text | Section where it appears |
|---|---|---|
| `/platform` | "See how it works" | Hero CTA secondary |
| `/platform` | "Explore the platform" | CTA Band secondary |
| `/platform/semantic-layer` | "Explore the semantic layer" | Feature Row 2 CTA |
| `/platform/governance` | "See governance controls" | Feature Row 3 CTA |
| `/platform/agents` | "Explore document agents" | Feature Row 4 CTA |
| `/contact` | "Book a Demo" | Hero CTA primary, CTA Band primary |
| `/solutions/data-teams` | "Explore Data Teams" | Section 3 Card A |
| `/solutions/analysts` | "Explore Analysts" | Section 3 Card B |
| `/solutions/executives` | "Explore Executives" | Section 3 Card C |
| `/industries/finance-governed-analytics` | "Finance analytics" | Section 5 Card 1 |
| `/industries/insurance-governed-analytics` | "Insurance analytics" | Section 5 Card 2 |
| `/industries/retail-cpg-governed-analytics` | "Retail analytics" | Section 5 Card 3 |
| `/industries/healthcare-governed-analytics` | "Healthcare analytics" | Section 5 Card 4 |
| `/industries/manufacturing-governed-analytics` | "Manufacturing analytics" | Section 5 Card 5 |
| `/industries/construction-governed-analytics` | "Construction analytics" | Section 5 Card 6 |
| `/integrations` | "See all integrations" | Section 8 |
| `/use-cases/[slug]` | "Read the story" | Section 7 cards |
| `/governed-ai-analytics` | (via breadcrumb schema) | JSON-LD WebPage.about |

---

## 6. Open Questions

1. **URL convention for industry child pages:** The research context proposes `/industries/[industry]-governed-analytics` (Template B). The nav config uses `/solutions/finance` etc. These must be reconciled before the six industry cards link correctly. Recommendation: adopt `/industries/[industry]-governed-analytics` for programmatic SEO value and 301 any shorter routes — but requires a decision from the SEO/engineering owner.

2. **`/solutions/data-teams`, `/solutions/analysts`, `/solutions/executives` — do these pages exist?** The nav config defines them but no specs are written. This `/solutions` hub page is blocked from linking correctly until those three child specs and routes exist. They should be commissioned immediately after this spec is approved.

3. **Case study de-anonymization:** Section 7 explicitly holds placeholder slots. This page should not launch with anonymous case study cards. The content team needs a timeline from Customer Success on clearing at least two named customers. If launch is blocked on this, ship one named card (E4E / Courtney Ramey) + a "View all stories" CTA to `/use-cases`.

4. **Stat verification:** The `StatBlock` in Section 4 carries `[data-placeholder]` on three of four stats. The Veris brand config carries illustrative figures (87% reduction, 14 min median time-to-insight, 3× faster) — these are placeholder copy from the template and cannot be used as Quaeris-verified claims. CS team must supply verified equivalents before this section goes live.

5. **BYOM model list confirmation:** The research context lists OpenAI, Anthropic, Google, and Meta as BYOM-supported models (product profile §1). This should be confirmed as current with the product team before publication — model support may have expanded or changed since the May 2026 research run.

6. **HIPAA / SOC 2 / ISO 27001 certification status:** Certifications are referenced obliquely in the industry cards but no badge display is specified here, because certification status was not confirmed in the research context. Once confirmed, certification badges should be added to the industry cards and to the `/trust` page (a separate spec). The SEO audit flags the absence of trust badges as a high-priority gap.

7. **`SolutionsHero` component:** Flagged as `NEW`. Implementation requires a two-column layout with a 2×3 card grid on the right. Assess whether `BentoGrid` from the component inventory can serve this role with minimal adaptation before building new. If `BentoGrid` supports arbitrary 2×3 layouts with icon + label + one-liner slots, prefer it to avoid new component debt.

8. **`IntegrationsBadgeStrip` component:** Flagged as `NEW`. This is a simple pill-row component. Assess whether `LogoMarquee` can be adapted to render text pills instead of SVG logos at reduced complexity. If so, prefer the adaptation.

9. **Analytics tracking:** Each of the six industry cards and three team cards should fire a distinct analytics event on CTA click (e.g., `solutions_card_click` with `{ audience: "data-teams" }` or `{ industry: "finance" }`). This lets the team measure which audience pathways convert to demo requests — informing which child pages to prioritize next.

10. **Mobile layout — industry 3×2 grid:** On mobile (<768px), the six industry cards should collapse to a single-column scroll rather than a 2×1 or 3×2 compressed layout. Confirm with the engineering lead which responsive pattern the existing `SegmentCards` component uses before implementation.
