# Page Spec — /about

**Status:** Ready for implementation  
**Route:** `/about`  
**Last updated:** 2026-06-12

---

## 1. Purpose & Primary Audience

The `/about` page performs a single funnel job: converting a prospect who already understands the problem — analytics that lacks governance, model lock-in, or auditability — into a buyer who trusts the company behind the platform. It is the trust-anchor for enterprise evaluation committees who search a vendor's About page specifically to answer: "Who built this, why do they exist, and can I trust them with our data?" The page must justify why Quaeris (a San Francisco company at Mission & 3rd) is building Governed Agentic Analytics, articulate the mission as a principled design choice rather than a marketing phrase, and give security-conscious buyers the governance and contact signals they need before reaching out to `seek@quaeris.ai`. Secondary audiences are press and analyst contacts who need a concise company narrative, and candidates drawn in by recruiting.

---

## 2. SEO

**Title tag (57 chars):**  
`About Quaeris — Governed Agentic Analytics, San Francisco`

**Meta description (152 chars):**  
`Quaeris Inc. builds secure, governed analytics powered by trusted agents — a San Francisco company on a mission to make enterprise AI data access auditable.`

**Target keywords (from research keyword clusters):**

| Keyword | Cluster | Rationale |
|---|---|---|
| governed agentic analytics | C1 — Governed AI Analytics | Category-defining term Quaeris should own; no competitor uses it today |
| trusted analytics agents | C2 — Agentic / Autonomous BI | Maps directly to the company's positioning line; GEO citation potential |
| AI analytics audit trail | C7 — Audit Trail & Compliance | EU AI Act tailwind; unique Quaeris whitespace position |
| governed AI analytics platform | C1 — Governed AI Analytics | Pillar cluster; enterprise buy-side search intent |
| bring your own LLM analytics | C4 — BYOM / Model Choice | Fastest moat keyword at current domain authority; owned in <90 days |

---

## 3. Section Blueprint

Sections are ordered for a top-to-bottom trust arc: mission → company identity → the problem they exist to solve → the architecture that reflects that mission → proof signals → team/culture (structured placeholder only) → contact.

---

### Section 01 — Page Hero (Mission Statement)

**Component:** `SectionHeader` (from `/components/ui/SectionHeader.tsx`)  
**Background:** `--bg-warm` (`#F9F5FF`) lavender surface  
**Layout:** Centered, full-width, constrained to max-w-3xl

| Copy element | Draft |
|---|---|
| Eyebrow | `Founded in San Francisco · seek@quaeris.ai` |
| Heading (H1, Roboto 48px, `--text-primary` `#200123`) | `Secure, Governed Analytics. Powered by Trusted Agents.` |
| Subcopy (Inter 20px, `--text-secondary` `#6B4D72`) | `Quaeris exists because the enterprise deserved an analytics platform where AI answers are audited, where the model is your choice, and where data governance is a design principle — not a checkbox bolted on at the end.` |

**No CTA button in this hero.** Scroll-reveal via existing `Reveal` component.

---

### Section 02 — Company Identity Strip

**Component:** NEW:`CompanyIdentityStrip`  
A single-row horizontal band (white surface, `--border-subtle` bottom rule) displaying three factual identity signals side by side. Each signal has a Lucide icon, a label, and a value. On mobile stacks to 3 rows.

| Signal | Lucide icon | Label | Value |
|---|---|---|---|
| Location | `map-pin` | Headquarters | Mission & 3rd, San Francisco, CA 94103 |
| Contact | `mail` | General inquiries | seek@quaeris.ai |
| Focus | `shield-check` | Mission | Governed Agentic Analytics |

**Design notes:** icon color `--brand-accent` (`#8C20A4`); value text Roboto 16px `--text-primary`; label Inter 13px `--text-secondary`. No gradient CTA here.

---

### Section 03 — Why Quaeris Exists (Problem Framing)

**Component:** `ProblemSolutionCards` (from `/components/ui/ProblemSolutionCards.tsx`)  
**Background:** `--bg-canvas` (`#FAF8FF`)

| Copy element | Draft |
|---|---|
| Eyebrow | `The problem we set out to solve` |
| Heading (H2, Roboto 40px) | `Enterprise AI analytics had a governance deficit.` |
| Subcopy | `Every major analytics vendor was racing to add AI. Almost none of them asked: who audits the answers? Who chooses the model? How does a regulated company trust a response it cannot trace?` |

**Problem cards (left column, 3 cards):**

| Icon | Title | Body |
|---|---|---|
| `lock-open` | Ungoverned answers | AI answers generated from language model weights rather than from certified, auditable metric definitions. No traceability. No compliance story. |
| `link` | Model lock-in | Every hyperscaler and incumbent tied the AI layer to their own model. Snowflake to Cortex. Microsoft to Azure OpenAI. Salesforce to Einstein. Procurement choice became compliance risk. |
| `file-x` | Structured-only blindspot | Documents and data warehouses lived in entirely separate stacks. No product unified a SharePoint contract with a Snowflake fact table in a single governed query. |

**Solution cards (right column, 3 cards):**

| Icon | Title | Body |
|---|---|---|
| `shield-check` | Governed answers from day one | Every Quaeris answer is grounded in the Smart Semantic Layer — auto-learned, auditable metric definitions that your team controls, not the model. |
| `sliders-horizontal` | BYOM: your model, your compliance team's choice | Connect OpenAI, Anthropic, Google, or Meta models and switch as the landscape evolves. The model is your procurement decision, not ours. |
| `layers` | Documents and warehouse data in one governed query | Data Agents unify structured warehouse tables and unstructured documents — contracts, invoices, reports — in a single natural-language query with a single audit trail. |

---

### Section 04 — The Three-Engine Architecture

**Component:** `IconFeatureGrid` (from `/components/ui/IconFeatureGrid.tsx`)  
**Background:** `--bg-warm` (`#F9F5FF`)  
**Layout:** 3-column grid, one column per engine

| Copy element | Draft |
|---|---|
| Eyebrow | `How the platform is built` |
| Heading (H2, Roboto 40px) | `Three engines. One governed system.` |
| Subcopy | `The Quaeris platform is not a chatbot placed in front of a BI tool. It is a purpose-built three-engine information architecture where governance is enforced at every layer.` |

**Grid cards (3 items):**

| Icon | Engine | Eyebrow | Title (Roboto 20px) | Body |
|---|---|---|---|---|
| `cpu` | Context Engine | Ask · Integrate · Activate | Context Engine | Interprets natural-language questions, integrates with your data warehouses and document sources, and activates the governed semantic layer — so the right data is in scope before any answer is generated. |
| `search` | Answer Engine | Search · Share · Accelerate | Answer Engine | Executes governed queries, surfaces search-ready insights, and delivers answers that can be shared across teams — all traceable to the certified metric definitions in the Smart Semantic Layer. |
| `bar-chart-2` | Decision Engine | Pin · Embed · Resonate | Decision Engine | Pins insights to pinboards, embeds governed analytics in external applications, and delivers resonant data experiences — keeping every number anchored to a verified source. |

---

### Section 05 — Six Core Capabilities (What Makes the Architecture Real)

**Component:** `BentoGrid` (from `/components/ui/BentoGrid.tsx`)  
**Background:** `--bg-surface` (white)  
**Layout:** 2-column bento with 2 wide cards (rows 1, 3) and 4 standard cards

| Copy element | Draft |
|---|---|
| Eyebrow | `Platform capabilities` |
| Heading (H2, Roboto 40px) | `The six capabilities that make analytics trustworthy.` |
| Subcopy | `Each capability is a deliberate response to a gap in the market — not a feature added to hit a checklist.` |

**Bento items (6 total, in priority order):**

| Size | Icon | Title | Body |
|---|---|---|---|
| Wide | `brain` | Smart Semantic Layer | Automatically learns business definitions and data relationships from user interaction — no upfront LookML or MDX modeling sprint required. Every metric is defined once and applied consistently. |
| Standard | `message-square` | Natural Language to SQL | Plain-English questions translated into precise, governed SQL — checked against the semantic layer rather than free-form generation. Accuracy is structural, not probabilistic. |
| Standard | `workflow` | Autonomous Multi-Step Workflows | Agents plan and execute analyses — fetch, filter, join, forecast, anomaly-detect, root-cause — without a human checkpoint at every step. The audit trail captures each step. |
| Standard | `trending-up` | Predictive & Proactive Analysis | Forecasts, anomaly flags, root-cause diagnosis, and proactive alerts so issues surface before they affect business outcomes. |
| Standard | `plug` | BYOM — Bring Your Own Model | Connect OpenAI, Anthropic, Google, or Meta models and switch as the landscape evolves. Quaeris is not the model gatekeeper — your compliance team is. |
| Wide | `file-search` | Data & Document Agents | Extract structured fields from contracts, invoices, and documents — then join with warehouse fact tables in one natural-language, governed query. |

---

### Section 06 — Target Industries

**Component:** `SegmentCards` (from `/components/ui/SegmentCards.tsx`)  
**Background:** `--bg-warm` (`#F9F5FF`)

| Copy element | Draft |
|---|---|
| Eyebrow | `Where Quaeris is deployed` |
| Heading (H2, Roboto 40px) | `Built for industries where governance is not optional.` |
| Subcopy | `Regulated, complex, data-intensive industries were the design target — not an afterthought.` |

**Segment cards (6):**

| Icon | Industry | One-liner |
|---|---|---|
| `landmark` | Finance | Auditable answers on revenue, risk, and compliance metrics — with prompt-level audit trails for SOX and internal controls. |
| `shield` | Insurance | Governed queries across claims, actuarial, and underwriting data — unified with policy documents in a single agent workflow. |
| `shopping-cart` | Retail & CPG | Merchandising, inventory, and customer analytics from a semantic layer that speaks the language of the business, not the warehouse schema. |
| `activity` | Healthcare | Clinical, operational, and financial queries under HIPAA-aligned access controls — every answer scoped to the role that asked. |
| `settings-2` | Manufacturing | Quality, throughput, and supply-chain analytics driven by agents that can join machine logs with ERP fact tables. |
| `hard-hat` | Construction | Project margin, subcontractor, and procurement analytics — governed and auditable from field data to executive dashboard. |

---

### Section 07 — Integrations (Data Sources We Connect)

**Component:** NEW:`IntegrationLogoGrid`  
A clean logo grid (white surface, `--border-subtle` border on a rounded container) displaying warehouse and document-source integrations. No individual integration page links from this component on the About page — that linking pattern lives on `/integrations`. This section anchors buyer trust by showing the warehouse-native posture.

| Copy element | Draft |
|---|---|
| Eyebrow | `Warehouse-native by design` |
| Heading (H2, Roboto 40px) | `Your data stays in your environment.` |
| Subcopy | `Quaeris connects directly to your existing data infrastructure — no data copies, no pipelines to rebuild. Your warehouse is the system of record. Always.` |

**Integration logos (from research context, homepage-verified):**

Warehouses: Snowflake · Google BigQuery · Databricks · Azure Synapse · Amazon Redshift  
Document sources: Microsoft SharePoint · Google Drive

**Design notes:** Logo tiles on `--bg-surface` white cards with `--border-subtle` `#ECDCF0` border, 8px radius. Lucide `server` icon above the warehouse group label; `file-text` above document sources. No customer logos, partner badges, or certifications displayed here — those are `[data-placeholder]` pending confirmation (see Section 8).

---

### Section 08 — Proof Signals (Customer & Review Placeholder)

**Component:** `StatBlock` (from `/components/ui/StatBlock.tsx`) + `TestimonialCard` (from `/components/ui/TestimonialCard.tsx`)  
**Background:** `--bg-ink` (`#200123`) dark surface  
**Text:** `--text-on-dark` white and `rgba(255,255,255,.75)` dim

**StatBlock — 3 stats:**

| Stat | Label | Note |
|---|---|---|
| `[data-placeholder]` | Named enterprise customers | Replace when legal clearance is obtained for named references |
| `[data-placeholder]` | Industries served | Count of distinct regulated industries in production deployments |
| `[data-placeholder]` | Integrations available | Count from live integrations page |

**Single featured testimonial:**

> "Courtney Ramey, E4E" — the only named customer reference verified in the research context. Full quote text is `[data-placeholder]` — pull the exact approved quote from the existing site `/use-cases` or customer success team. Do not invent a quote.

Structure: `TestimonialCard` with `initials`, `name`, `role`, `quote` fields. If E4E quote cannot be used on this page, replace the entire block with a `[data-placeholder]` TestimonialCard and note in implementation tickets.

**Review badges (3, all `[data-placeholder]`):**

| Platform | Status |
|---|---|
| G2 | `[data-placeholder]` — pending review seed campaign (see SEO roadmap Q2) |
| Gartner Peer Insights | `[data-placeholder]` |
| Capterra | `[data-placeholder]` |

Once scores are live, render badges using the pattern established in the Veris config `testimonials.reviewBadges` array.

---

### Section 09 — Team Section (Structured Placeholder Only)

**Component:** NEW:`TeamGrid`  
A 3–4 column grid of person cards. Each card: headshot image slot (`[data-placeholder]`), name (`[data-placeholder]`), title (`[data-placeholder]`), LinkedIn link icon (`linkedin`, Lucide).

**Hard rule:** No names, titles, bios, or photos may be written into this spec or the implementation. The TeamGrid component must render entirely from a CMS-driven data array. Ship the component with empty slots and a content-ops handoff note. If the team opts not to publish individual bios, replace with a culture/values layout (see fallback below).

| Copy element | Draft |
|---|---|
| Eyebrow | `The team` |
| Heading (H2, Roboto 40px) | `Built by people who understand enterprise data.` |
| Subcopy | `The Quaeris team combines deep experience in analytics infrastructure, enterprise security, and applied AI — focused on one problem: making data answers trustworthy at scale.` |

**Fallback (if team bios are not approved for publication):** Replace `TeamGrid` with a single `EditorialBlock` (from `/components/ui/EditorialBlock.tsx`) containing the subcopy above and a "We're hiring" ghost CTA linking to `/careers`. Background remains `--bg-canvas`.

---

### Section 10 — Mission & Values (Company Principles)

**Component:** `IconFeatureGrid` (from `/components/ui/IconFeatureGrid.tsx`)  
**Background:** `--bg-warm` (`#F9F5FF`)  
**Layout:** 2-column grid, 4 items

| Copy element | Draft |
|---|---|
| Eyebrow | `What we stand for` |
| Heading (H2, Roboto 40px) | `Governance is a design principle, not a feature flag.` |

**Principle cards (4):**

| Icon | Title | Body |
|---|---|---|
| `shield-check` | Governance-first architecture | We do not bolt governance onto an existing product. The Smart Semantic Layer, the audit trail, and the role-based access controls are load-bearing structures — removing any one of them changes what the product is. |
| `sliders-horizontal` | Model neutrality | An enterprise's choice of AI model is a procurement and compliance decision, not a vendor's revenue strategy. BYOM is not a selling point — it is a principle. |
| `eye` | Full auditability | Every question asked, every agent step taken, every answer returned is logged. Prompt-level audit trails are not an enterprise edition feature. They are the default. |
| `globe` | Customer data stays with customers | Quaeris is warehouse-native. Your data never travels to Quaeris infrastructure. This is an architectural commitment, not a contractual promise. |

---

### Section 11 — Closing CTA Band

**Component:** `CTABand` (from `/components/ui/CTABand.tsx`)  
**Background:** gradient `linear-gradient(90deg, #4E0250, #8C20A4)` (per PDF `--cta-bg` token)  
**Text:** `--text-on-dark` white

| Copy element | Draft |
|---|---|
| Eyebrow | `Ready to evaluate Quaeris?` |
| Heading (Roboto 40px, white) | `See a governed answer against your own data.` |
| Subcopy (Inter, `rgba(255,255,255,.75)`) | `Book a 30-minute demo. We connect to your warehouse, walk through the semantic layer, and show you an auditable answer — no slides, no fabricated data.` |
| Primary CTA | `Book a Demo` → `/contact` (gradient button, 10px radius per PDF `--radius-cta`) |
| Secondary CTA | `See how the platform works` → `/platform` (ghost button, white border) |

---

## 4. Proof & Data Points

Only facts drawn from `QUAERIS_RESEARCH_CONTEXT.md`. All uncertain or pending items marked.

| Claim | Status | Source |
|---|---|---|
| Company: Quaeris, Inc. | Verified | Research context §1 |
| Address: 95 Third Street, 2nd Floor, San Francisco, CA 94103 | Verified | Research context §1 |
| Contact: seek@quaeris.ai | Verified | Research context §1 |
| Phone: +1-980-476-3737 | Verified | Research context §1 — include in footer schema, not on-page prose |
| Positioning: "Secure, Governed Analytics. Powered by Trusted Agents." | Verified | Research context §1 |
| Three-engine IA: Context / Answer / Decision | Verified | Research context §1 |
| Six core capabilities (NL-to-SQL, Multi-step Agents, Predictive, Smart Semantic Layer, BYOM, Document Agents) | Verified | Research context §1 |
| Target industries (Finance, Insurance, Retail/CPG, Healthcare, Manufacturing, Construction) | Verified | Research context §1 (homepage explicit) |
| Integrations (Snowflake, BigQuery, Databricks, Azure Synapse, Redshift, SharePoint, Google Drive) | Verified | Research context §1 (homepage explicit) |
| BYOM: OpenAI, Anthropic, Google, Meta | Verified | Research context §1 |
| Named customer: E4E (Courtney Ramey) | Verified | Research context §1 |
| Stat: 6 existing case studies, only 1 named | Verified | Research context §1 — this is a known EEAT gap |
| Testimonial quotes from named E4E contact | `[data-placeholder]` — pull approved quote from CS team |
| G2 / Capterra / Gartner Peer Insights scores | `[data-placeholder]` — pending review seed campaign |
| Team member names, titles, bios | `[data-placeholder]` — must come from company; zero invented |
| Certifications: SOC 2, GDPR, HIPAA, ISO 27001 | `[data-placeholder]` — research context flags these as absent from the current site; confirm with legal before displaying |
| Founding year | `[data-placeholder]` — not found in research context; do not guess |
| Funding stage / investors | `[data-placeholder]` — not in research context; do not state |
| Total customers / ARR / NRR | `[data-placeholder]` — not in research context |
| PR / media coverage logos | `[data-placeholder]` — research context recommends a press wall (pattern §11.2); populate from verified press hits only |

---

## 5. Internal Links

| Destination route | Anchor text | Section it appears in |
|---|---|---|
| `/platform` | "See how the platform works" | Section 11 CTA Band (secondary CTA) |
| `/platform/agents` | "Agentic Query Engine" | Section 04 (Three Engines copy reference, inline link) |
| `/platform/semantic-layer` | "Smart Semantic Layer" | Section 05 (Bento card inline link) |
| `/platform/governance` | "Governance & Lineage" | Section 10 (Principles, inline on audit card) |
| `/platform/audit` | "Audit Logs" | Section 10 (Principles, inline on auditability card) |
| `/platform/warehouse` | "Warehouse-native" | Section 07 (Integration section inline) |
| `/integrations` | "See all integrations" | Section 07 (ghost link below the integration logo grid) |
| `/use-cases` | "See customer outcomes" | Section 08 (below the testimonial block) |
| `/contact` | "Book a Demo" | Section 11 (primary CTA) |
| `/trust` | "Security & compliance details" | Section 08 (footnote below the stat block — `[data-placeholder]` until `/trust` page exists) |
| `/careers` | "We're hiring" | Section 09 fallback only |

---

## 6. Open Questions for Implementation

1. **Team section content:** Are individual team member bios approved for publication? If yes, what CMS structure will supply them (HubSpot CMS Hub fields or a JSON/Sanity collection)? If no, ship the fallback `EditorialBlock` with the culture copy and "We're hiring" CTA.

2. **E4E testimonial clearance:** Is the Courtney Ramey / E4E quote approved for use on `/about` specifically, or only on `/use-cases`? The research context shows it as the only named reference on the site. Confirm with CS before implementation.

3. **Certifications status:** The SEO audit flags the absence of SOC 2, GDPR, HIPAA, and ISO 27001 badges sitewide. Legal must confirm which certifications are currently held before any badge or mention appears on the About page. The Section 08 stat block currently omits this. If certs are confirmed, add a `trust-badges` row above the review badges.

4. **Press / media coverage:** Research context recommends a homepage press wall (pattern from iGenius/Domyn playbook). Should the press wall live on `/about` or only on the homepage? If About gets a press wall, it requires a verified list of media placements. This spec does not assume press coverage exists; the `IntegrationLogoGrid` section (Section 07) reserves no space for press logos.

5. **Founding year:** Not present in the research context. If the team wants to display "Founded in [year]" in the `CompanyIdentityStrip` (Section 02), supply the year through the content ops handoff.

6. **`/trust` page dependency:** Section 08 references `/trust` in a footnote link. That page does not yet exist in the current site architecture (it is on the recommended new architecture in the research context §7.2). Either create a stub `/trust` page before shipping `/about`, or omit the link from the initial release and add it when `/trust` is ready.

7. **Schema markup:** The `/about` page should carry `Organization` JSON-LD (name, url, address, email, sameAs for social profiles). The research context flags the complete absence of JSON-LD sitewide as a critical gap (SEO audit §5.1). The Organization schema block must be included in the `<head>` of this page at launch. Schema fields: `name`, `url`, `address` (streetAddress, addressLocality, addressRegion, postalCode, addressCountry), `email`, `contactPoint`. `sameAs` is `[data-placeholder]` pending confirmed social profile URLs.

8. **`NewPageSection` naming convention:** The two new components specified here — `CompanyIdentityStrip` (Section 02) and `IntegrationLogoGrid` (Section 07) — are lightweight layout shells. Both can be built as local page components in `/app/about/` rather than promoted to the shared `/components/ui/` inventory unless the design system team decides they are reusable across other routes.
