# Page Spec — /pricing

**Route:** `/pricing`
**Spec author:** Page-spec agent
**Date:** 2026-06-12
**Status:** Implementation-ready draft

---

## 1. Purpose & Primary Audience

`/pricing` sits at the bottom of the evaluation funnel — the last organic page a serious buyer reads before requesting a demo or opening a procurement conversation. Its job is not to close a sale with a credit card; it is to (a) establish that Quaeris prices by deployment configuration rather than per-seat commodity tiers, (b) signal that the platform scales from a single data team to enterprise-wide governed agentic analytics, and (c) route every visitor — whether they are a data leader, a finance evaluator, or an IT stakeholder — to a demo request or a direct sales conversation with minimum friction.

Because Quaeris sells into regulated enterprise environments (Finance, Insurance, Healthcare, Manufacturing), price transparency is a trust signal, not a liability. The page must communicate structural seriousness: tiers that correspond to real deployment architectures, a contact-sales CTA that feels like engagement rather than deflection, and enough specificity about what is included at each level that a procurement team can prepare an internal business case without waiting for a call. Actual monetary figures are not published on this page; all numeric placeholders are marked `[data-placeholder]` for the sales and product teams to fill in.

Primary audience: Head of Data, CDO, VP Analytics, or Analytics Engineering Lead conducting formal vendor evaluation. Co-signer: Enterprise IT / Security (needs to see governance features mapped per tier). Secondary: Finance / Procurement (needs to justify budget against a tier structure with clear scope).

---

## 2. SEO

**Title tag (54 chars):**
`Quaeris Pricing — Governed Analytics, Built to Scale`

**Meta description (153 chars):**
`Quaeris pricing scales with your data team — from a governed pilot to enterprise-wide agentic analytics. Contact sales for a configuration built around your stack.`

**Target keywords (drawn from research keyword clusters C1, C2, C7, C9):**

| Keyword | Cluster | Priority |
|---|---|---|
| governed AI analytics pricing | C1 | Primary — high-intent, near-zero competition |
| agentic analytics platform pricing | C2 | Secondary — captures vendor-eval searches |
| HIPAA compliant analytics platform | C9 | Supporting — regulated-vertical BOFU |
| AI analytics audit trail | C7 | Supporting — EU AI Act tailwind |
| enterprise text to SQL pricing | C3 | Supporting — purchase-intent modifier |

**Schema type:** `SoftwareApplication` with `offers` property (array of `Offer` objects, one per tier). `priceSpecification` uses `priceType: "https://schema.org/InvoicePrice"` with no numeric `price` on the Enterprise tier; the Team tier `price` value is `[data-placeholder]`. Implement alongside the Week 2 schema push per the growth strategy.

---

## 3. Section Blueprint

Sections are ordered for a top-to-bottom evaluation scroll: orientation → tier comparison → capability-depth proof → trust/compliance → social proof → FAQ → conversion. Each section maps to a named component or a documented new component.

---

### Section 01 — Page Hero

**Component:** `SectionHeader`

Render as a centered hero block. Background: `--bg-warm` (#F9F5FF). No image or video. Maximum width 720px copy column, centered. Below the heading, render a binary toggle — "Annual / Monthly" — that switches the pricing callout text in Section 02 (no page reload; JS toggle, CSS class swap). Default state: Annual.

**Copy:**

- **Eyebrow (Badge, `--brand-accent` #8C20A4):** `Governed Agentic Analytics — Pricing`
- **H1 (Roboto 48px, #200123):**
  `Pricing that matches how enterprise data actually works.`
- **Subheading (Inter 20px, #6B4D72):**
  `Quaeris deployments are scoped to your warehouse configuration, your governance requirements, and the number of engines you activate — not an arbitrary seat count. Every tier runs warehouse-native. Your data never leaves your environment.`
- **Annual/Monthly toggle:** small pill toggle, `--bg-surface` / `--brand-accent` active state, placed 24px below subheading.
- **Trust strip (3 inline badges, `lucide` icons):**
  - `shield-check` — SOC 2 Type II [data-placeholder: badge when certified]
  - `lock` — Warehouse-native. Data never copied.
  - `cpu` — BYOM — OpenAI, Anthropic, Google, Meta

---

### Section 02 — Tier Cards (Pricing Grid)

**Component:** `NEW:PricingTierGrid` — A three-column card grid (stacks to single column on mobile). Each card is a structured container on `--bg-surface` (#FFFFFF) with `--border-subtle` (#ECDCF0) border and `border-radius: 12px`. The recommended / most popular tier receives an elevated treatment: `--brand-accent` (#8C20A4) top border stripe (4px), `--bg-warm` (#F9F5FF) card background, and a "Most chosen" badge (Eyebrow component, accent fill). All monetary figures are `[data-placeholder]`. The primary CTA button on each card uses `var(--cta-bg)` (gradient) and `var(--radius-cta)` (10px radius). Each card includes: tier name, one-line positioning statement, pricing callout (structure + placeholder), a feature list (Lucide `check` icon, `--brand-accent` color, #4E3953 text), and a CTA.

**Card 1 — Team**

- **Tier name (Roboto 20px, #200123):** `Team`
- **Positioning (Inter 15px, #6B4D72):** For a single data team deploying governed natural-language analytics on one warehouse.
- **Pricing callout:**
  - Annual: `From [data-placeholder] / month` · billed annually
  - Monthly: `From [data-placeholder] / month` · billed monthly
  - Sub-label: `Up to [data-placeholder] active users`
- **Feature list (Lucide `check`):**
  - Context Engine — Ask, Integrate, Activate
  - Smart Semantic Layer (auto-learning, up to [data-placeholder] certified metrics)
  - Natural Language to SQL with governed prompt routing
  - Single warehouse connection (Snowflake, BigQuery, Databricks, Redshift, or Azure Synapse)
  - Role-based access controls — enforced at query time
  - Prompt-level audit log — [data-placeholder] days retention
  - [data-placeholder] AI model connection (BYOM — one provider slot)
  - Community support + documentation
  - Standard SLA
- **CTA:** `Start a pilot` → `/contact?plan=team` (gradient button, 10px radius)
- **Ghost link below CTA:** `See what's included →` → scrolls to Section 04 (capability detail)

**Card 2 — Professional** _(Most chosen — elevated treatment)_

- **Tier name (Roboto 20px, #200123):** `Professional`
- **Badge:** `Most chosen` (Eyebrow, `--brand-accent` fill, white text)
- **Positioning (Inter 15px, #6B4D72):** For cross-functional analytics teams that need multi-engine workflows, document agents, and full audit readiness.
- **Pricing callout:**
  - Annual: `From [data-placeholder] / month` · billed annually
  - Monthly: `From [data-placeholder] / month` · billed monthly
  - Sub-label: `Up to [data-placeholder] active users`
- **Feature list (Lucide `check`, `--brand-accent`):**
  - Everything in Team, plus:
  - Answer Engine — Search, Share, Accelerate
  - Decision Engine — Pin, Embed, Resonate
  - Autonomous Multi-Step Agentic Workflows
  - Data and Document Agents (SharePoint, Google Drive ingestion)
  - Predictive and Proactive Analysis (forecasts, anomaly flags, root-cause)
  - Up to [data-placeholder] warehouse connections
  - Extended prompt-level audit log — [data-placeholder] days retention
  - [data-placeholder] BYOM model provider slots
  - Embedded analytics (pinboards and embeds)
  - Priority support + dedicated onboarding
  - Enhanced SLA
- **CTA:** `Book a Demo` → `/contact?plan=professional` (gradient button, 10px radius)
- **Ghost link below CTA:** `See what's included →` → scrolls to Section 04

**Card 3 — Enterprise**

- **Tier name (Roboto 20px, #200123):** `Enterprise`
- **Positioning (Inter 15px, #6B4D72):** For regulated organizations that require multi-warehouse deployments, compliance controls, and a named success team.
- **Pricing callout:**
  - `Custom pricing` — contact sales for a configuration scoped to your environment.
  - Sub-label: `Unlimited users · Custom SLA`
- **Feature list (Lucide `check`, `--brand-accent`):**
  - Everything in Professional, plus:
  - Unlimited warehouse connections
  - Unlimited BYOM model provider slots — switch models without re-configuration
  - Multi-tenant and embedded OEM deployment options
  - HIPAA, SOC 2 Type II, GDPR, ISO 27001 compliance controls [data-placeholder: certifications as obtained]
  - Custom data residency configuration
  - Advanced role and attribute-based access controls
  - Extended prompt-level audit log — custom retention
  - SSO / SAML 2.0 / SCIM provisioning
  - Named Customer Success Manager
  - Dedicated SLA with [data-placeholder] uptime guarantee
  - Security review and procurement support
- **CTA:** `Contact Sales` → `/contact?plan=enterprise` (gradient button, 10px radius)
- **Ghost link below CTA:** `Download the Enterprise brief →` → `/resources/enterprise-brief` [data-placeholder: asset]

**Implementation notes:**
- Do not hardcode any monetary figures. Every price string is injected from a CMS or config field marked `[data-placeholder]` so the sales team can update without a deploy.
- The annual/monthly toggle from Section 01 should swap the pricing callout strings only — feature lists and CTAs do not change.
- On mobile, render cards in order: Professional (top), Team, Enterprise.

---

### Section 03 — Stat Band (Proof of Deployment Efficiency)

**Component:** `StatBlock`

Four stat tiles in a horizontal band, `--bg-ink` (#200123) background, white text. These are the only numbers on the page and must match figures sourced from the research context or be marked `[data-placeholder]`. Each tile: large numeral (Roboto 48px, #FFFFFF or #8C20A4 accent), label (Inter 15px, rgba(255,255,255,0.75)), delta line (Inter 14px, rgba(255,255,255,0.55)).

**Stat tiles:**

| Numeral | Label | Delta |
|---|---|---|
| [data-placeholder] weeks | Median time to first governed answer in production | From warehouse connection to live queries |
| [data-placeholder] min | Median time-to-insight per question | From plain-English question to audited answer |
| [data-placeholder] | Warehouse and document sources supported | Snowflake, BigQuery, Databricks, Redshift, Synapse, SharePoint, Drive |
| [data-placeholder] | Industries deployed | Finance · Insurance · Retail · Healthcare · Manufacturing · Construction |

**Note:** The last stat (industries) is factual from the Quaeris homepage. The numeric figures for the first three are `[data-placeholder]` — populate with validated customer data before publishing. Do not use the Veris config stat values (14 min, 87%, 3×) without Quaeris-specific verification.

---

### Section 04 — Capability Depth by Tier (Feature Matrix)

**Component:** `NEW:PricingFeatureMatrix` — A full-width table with sticky first column. Rows are grouped capabilities; columns are the three tiers (Team / Professional / Enterprise). Cell values: Lucide `check` (included, `--brand-accent`), `minus` (not included, `--text-tertiary`), or a short text qualifier (e.g., "1 connection", "Unlimited"). Alternating row background: `--bg-canvas` (#FAF8FF) / `--bg-surface` (#FFFFFF). Group headings use `--bg-warm` (#F9F5FF) full-width row, Roboto 15px uppercase, #200123, letter-spacing 0.06em. Border: `--border-subtle` (#ECDCF0).

This section exists to serve procurement and IT co-signers who need a structured proof-of-scope — and to capture featured snippet eligibility for queries like "quaeris pricing features comparison."

**Capability groups and rows:**

**Context Engine**

| Feature | Team | Professional | Enterprise |
|---|---|---|---|
| Natural Language to SQL (governed, semantic-layer grounded) | check | check | check |
| Smart Semantic Layer — auto-learning metric definitions | check | check | check |
| Warehouse-native connection (data never copied) | check | check | check |
| BYOM model provider slots | 1 [data-placeholder] | [data-placeholder] | Unlimited |
| Warehouse connections | 1 | [data-placeholder] | Unlimited |
| SharePoint and Google Drive document ingestion | minus | check | check |

**Answer Engine**

| Feature | Team | Professional | Enterprise |
|---|---|---|---|
| Conversational search across governed metrics | minus | check | check |
| Autonomous Multi-Step Agentic Workflows | minus | check | check |
| Predictive analysis (forecasts, anomaly detection) | minus | check | check |
| Proactive alerts (surface issues before they impact) | minus | check | check |
| Root-cause diagnosis | minus | check | check |
| Data and Document Agents (structured + unstructured unified query) | minus | check | check |

**Decision Engine**

| Feature | Team | Professional | Enterprise |
|---|---|---|---|
| Pinboards (governed metric snapshots) | minus | check | check |
| Embedded analytics (iframe / SDK embed) | minus | check | check |
| Multi-tenant embedded / OEM deployment | minus | minus | check |
| Communities and shared insight distribution | minus | check | check |

**Governance and Security**

| Feature | Team | Professional | Enterprise |
|---|---|---|---|
| Role-based access controls — enforced at query time | check | check | check |
| Prompt-level audit log — retention | [data-placeholder] days | [data-placeholder] days | Custom |
| Attribute-based access controls | minus | minus | check |
| SSO / SAML 2.0 / SCIM provisioning | minus | minus | check |
| HIPAA controls | minus | minus | check [data-placeholder] |
| SOC 2 Type II | minus | minus | check [data-placeholder] |
| GDPR data processing controls | minus | minus | check [data-placeholder] |
| ISO 27001 [data-placeholder] | minus | minus | check [data-placeholder] |
| Custom data residency configuration | minus | minus | check |
| Security review and procurement support | minus | minus | check |

**Support and Success**

| Feature | Team | Professional | Enterprise |
|---|---|---|---|
| Documentation and community support | check | check | check |
| Priority support | minus | check | check |
| Dedicated onboarding | minus | check | check |
| Named Customer Success Manager | minus | minus | check |
| Custom SLA | minus | minus | check |
| Uptime SLA | Standard | Enhanced | [data-placeholder]% |

**Implementation note:** All `[data-placeholder]` cells in this table must be resolved before the page goes live. The matrix is the most likely element to be cited in procurement RFP responses and AI Overview results — accuracy is critical.

---

### Section 05 — Deployment Use Cases (Contextual Routing)

**Component:** `SegmentCards`

Three cards, horizontal row on desktop, stacked on mobile. Card background: `--bg-warm` (#F9F5FF), border `--border-subtle`, radius 12px. Each card: Lucide icon (32px, `--brand-accent`), heading (Roboto 20px, #200123), one-paragraph body (Inter 15px, #6B4D72), inline link to the relevant industry or solution page.

**Card 1 — Regulated Industry Deployment**

- **Icon:** `shield-check`
- **Heading:** Governance-first deployments for regulated industries.
- **Body:** Finance, Insurance, Healthcare, and Manufacturing organizations use the Enterprise tier for its HIPAA controls, extended audit log, and custom data residency configuration. The platform's BYOM architecture means your compliance team — not Quaeris — selects and certifies the AI model in your environment.
- **Link:** `See regulated industry deployments →` → `/industries` [data-placeholder: route when live]

**Card 2 — Analytics Engineering Teams**

- **Icon:** `layers`
- **Heading:** A governed semantic layer your data team owns.
- **Body:** Data and analytics engineering teams deploy the Team or Professional tier to eliminate ad-hoc request backlogs. The Smart Semantic Layer auto-learns metric definitions from user interaction — no upfront LookML or MDX modeling sprint required. Your data team certifies; business users ask.
- **Link:** `See platform capabilities →` → `/platform`

**Card 3 — Embedded and OEM Analytics**

- **Icon:** `layout-dashboard`
- **Heading:** Governed AI analytics embedded in your product.
- **Body:** SaaS companies and platform builders use the Enterprise tier's embedded analytics and multi-tenant deployment to ship governed natural-language analytics to their own customers — with full audit trails and role-scoped access enforced at the query layer.
- **Link:** `See embedded analytics →` → `/platform/embedded-analytics` [data-placeholder: route when live]

---

### Section 06 — Trust and Compliance Strip

**Component:** `NEW:TrustBadgeStrip` — A full-width horizontal strip, `--bg-surface` background, `--border-subtle` top and bottom borders. Eight badge cells in a row (wraps to two rows on mobile), each: Lucide icon (24px, `--brand-accent`), short label (Roboto 14px, #200123), sub-label (Inter 13px, #6B4D72). This section exists because the research identifies missing trust signals as a critical EEAT gap.

**Badges:**

| Icon | Label | Sub-label |
|---|---|---|
| `shield-check` | SOC 2 Type II | [data-placeholder — mark when certified] |
| `lock` | HIPAA Controls | Available on Enterprise |
| `globe` | GDPR | Data processing controls |
| `award` | ISO 27001 | [data-placeholder — mark when certified] |
| `database` | Warehouse-native | Your data never leaves your environment |
| `cpu` | BYOM | OpenAI · Anthropic · Google · Meta |
| `eye-off` | Zero data copying | No pipelines to rebuild |
| `file-text` | Prompt-level audit trail | Every question, every answer, logged |

**Note:** Do not display certification badges that have not been obtained. Each `[data-placeholder]` badge should be rendered in a visually muted state (opacity 0.45, strikethrough sub-label "Certification in progress") until the certification is confirmed, then activated by a CMS flag.

---

### Section 07 — Customer Proof (Abbreviated)

**Component:** `CaseStudyCard`

Two cards in a horizontal row, `--bg-surface`, `--border-subtle` border, radius 12px. Each card: industry label (Badge / Eyebrow), outcome headline (Roboto 20px, #200123), one-line how (Inter 15px, #6B4D72), up to three stat tiles (numeral + label), CTA link.

**Card 1 — Financial Services**

- **Industry badge:** Financial Services
- **Headline:** [data-placeholder — replace with named customer outcome when de-anonymized]
- **Outcome:** A leading financial institution reduced analytics query response time and eliminated conflicting metric definitions across regional teams by deploying Quaeris on their existing Snowflake warehouse with role-scoped access enforced at the query layer.
- **Stats:** `[data-placeholder]` reduction in ad-hoc requests · `[data-placeholder]` certified metric definitions · `[data-placeholder]` days to production
- **CTA:** `Read the case study →` → `/use-cases` [data-placeholder: direct link when case study is published]

**Card 2 — Insurance**

- **Industry badge:** Insurance
- **Headline:** [data-placeholder — replace with named customer outcome when de-anonymized]
- **Outcome:** An insurance company deployed Quaeris's Document Agents to query claims documents and warehouse fact tables in a single natural-language prompt — eliminating the manual extract-transform-load cycle between their document store and their BI layer.
- **Stats:** `[data-placeholder]` faster claims insight · `[data-placeholder]` document sources unified · `[data-placeholder]` weeks to full deployment
- **CTA:** `Read the case study →` → `/use-cases` [data-placeholder: direct link when case study is published]

**Implementation note:** The research context confirms that all six existing Quaeris case studies are anonymized (only E4E / Courtney Ramey is named). These cards must use the anonymized framing until the sales/CS team obtains named consent. Replace the anonymized body copy and stats as soon as even two named customer stories are available — named proof on a pricing page converts significantly better than anonymized proof.

---

### Section 08 — Pricing FAQ

**Component:** `Accordion` (from `ui/Accordion.tsx`) wrapped in `SectionHeader`

Centered `SectionHeader` above the accordion. Background: `--bg-canvas` (#FAF8FF). Seven questions. First question open by default (`defaultOpen: true`). Implement `FAQPage` JSON-LD schema on this section — it is the highest-priority schema upgrade for this page per the research audit.

**SectionHeader copy:**

- **Eyebrow:** `Common pricing questions`
- **H2 (Roboto 40px, #200123):** `Clear answers before the sales conversation.`
- **Subcopy (Inter 17px, #6B4D72):** If your question isn't below, there is a solutions engineer on the other end of the contact form.

**FAQ items:**

**Q1 — How is Quaeris priced?** _(defaultOpen)_
Quaeris pricing is based on your deployment configuration: the number of warehouse connections, the engines you activate (Context / Answer / Decision), and the governance and compliance controls your organization requires. There is no per-seat fee for business users who ask questions through the platform. Contact sales for a configuration scoped to your environment.

**Q2 — Do you charge per query or per user?**
No. Quaeris does not charge per query or per seat for business users who consume governed answers. Pricing is structured around your deployment scope — warehouse connections, active engines, and support tier — so the cost scales with your infrastructure, not with how many people ask questions.

**Q3 — Is there a free trial or pilot program?**
Yes. Quaeris offers a structured pilot program for qualified enterprise teams. A pilot connects to your existing warehouse, activates the Context Engine, and delivers governed answers against your real data within [data-placeholder] weeks. Contact sales to scope a pilot for your organization.

**Q4 — Can we start with one warehouse and expand later?**
Yes. The Team tier starts with a single warehouse connection. Professional and Enterprise tiers support multiple connections. You can upgrade tiers at any time — your semantic layer definitions, audit logs, and access policies migrate without reconfiguration.

**Q5 — Which AI models does Quaeris support?**
Quaeris is built on a Bring Your Own Model (BYOM) architecture. You can connect OpenAI, Anthropic, Google, or Meta models and switch providers without re-configuring your deployment. Your compliance team selects and certifies the model — Quaeris is not the model gatekeeper. The Team tier includes [data-placeholder] provider slot; Professional and Enterprise tiers include [data-placeholder] slots and unlimited respectively.

**Q6 — Does Quaeris comply with HIPAA, SOC 2, and GDPR?**
Enterprise tier deployments include controls for HIPAA, GDPR, and SOC 2 Type II [data-placeholder: update as certifications are obtained]. All tiers run warehouse-native — your data is never copied to Quaeris infrastructure, which simplifies your data processing agreements. For a detailed compliance brief, contact sales.

**Q7 — How long does deployment take?**
Most teams connect their warehouse and serve governed answers in production within [data-placeholder] weeks. Week one covers warehouse integration and Smart Semantic Layer setup. Week two covers user onboarding and access policy configuration. There is no data migration — your existing warehouse is the deployment target.

---

### Section 09 — CTA Band (Primary Conversion)

**Component:** `CTABand`

Full-width band, `--bg-ink` (#200123) background, white text. Two CTAs side by side: primary (gradient button, `var(--cta-bg)`, 10px radius) and secondary (ghost/outline button, white border, white text). Eyebrow above heading in `--brand-accent` (#8C20A4).

**Copy:**

- **Eyebrow:** `Ready to scope a deployment?`
- **H2 (Roboto 40px, #FFFFFF):** `Talk to a solutions engineer. Not a form processor.`
- **Subcopy (Inter 19px, rgba(255,255,255,0.75)):** Book a 30-minute call. We will connect to your warehouse, show you a governed answer against your actual data, and scope a configuration that matches your governance requirements — before you commit to anything.
- **Primary CTA:** `Book a Demo` → `/contact?plan=enterprise` (gradient button)
- **Secondary CTA:** `Download the Enterprise Brief` → `/resources/enterprise-brief` [data-placeholder: asset when published]

---

## 4. Proof & Data Points

The following factual claims are permissible on this page because they are present in the Quaeris research context. Everything else is `[data-placeholder]`.

**Verified factual claims (from research context):**

- Quaeris supports six warehouse integrations explicitly listed on the homepage: Snowflake, BigQuery, Databricks, Azure Synapse, Amazon Redshift, SharePoint, Google Drive. (Seven sources, confirmed.)
- Quaeris targets six industries explicitly listed on the homepage: Finance, Insurance, Retail/CPG, Healthcare, Manufacturing, Construction. (Confirmed.)
- BYOM supports OpenAI, Anthropic, Google, and Meta models. (Confirmed from product profile.)
- The three-engine architecture is: Context Engine (Ask, Integrate, Activate), Answer Engine (Search, Share, Accelerate), Decision Engine (Pin, Embed, Resonate). (Confirmed from three-engine IA table.)
- Six case studies exist on the site; five are anonymized; one named reference is E4E (Courtney Ramey). (Confirmed — research context section 1.)
- The Smart Semantic Layer auto-learns business definitions and data relationships from user interaction — no upfront LookML or MDX modeling sprint required. (Confirmed from six core capabilities.)
- Data and Document Agents extract structured fields from contracts, invoices, and resumes, then join with warehouse fact tables in a single natural-language query. (Confirmed from six core capabilities.)

**Do not claim on this page without verification:**

- Any specific uptime percentage (e.g., 99.9%) — `[data-placeholder]`
- Any specific time-to-value metric (e.g., "governed answers in 2 weeks") — `[data-placeholder]`
- Any certification badge (SOC 2, HIPAA, GDPR, ISO 27001) — `[data-placeholder]` until confirmed
- Any G2 / Capterra / Gartner Peer Insights scores — `[data-placeholder]` (review campaign not yet launched per research roadmap)
- Any named pricing figure — `[data-placeholder]`
- Any customer ROI statistics beyond the anonymized case studies listed in the research context

---

## 5. Internal Links

| Destination route | Anchor text | Section it appears in | Rationale |
|---|---|---|---|
| `/contact?plan=team` | Start a pilot | Section 02, Card 1 CTA | Direct conversion path for Team tier |
| `/contact?plan=professional` | Book a Demo | Section 02, Card 2 CTA | Primary conversion path (most chosen tier) |
| `/contact?plan=enterprise` | Contact Sales | Section 02, Card 3 CTA; Section 09 primary CTA | Enterprise contact path |
| `/platform` | See platform capabilities | Section 04 ghost link; Section 05 Card 2 link | Routes to architecture detail |
| `/platform/semantic-layer` | Smart Semantic Layer | Section 04 capability rows (implied) | Semantic layer capability detail |
| `/platform/governance` | Prompt-level audit trail | Section 04 capability rows (implied) | Governance capability detail |
| `/platform/audit` | Audit Logs | Section 04 capability rows (implied) | Audit log detail |
| `/platform/access-control` | Role-based access controls | Section 04 capability rows (implied) | Security detail |
| `/platform/warehouse` | Warehouse-native | Section 06 trust strip; Section 04 | Warehouse architecture detail |
| `/industries` | See regulated industry deployments | Section 05, Card 1 link | Routes to industry pages |
| `/use-cases` | Read the case study | Section 07, Cards 1 and 2 | Routes to case study hub |
| `/resources/enterprise-brief` | Download the Enterprise Brief | Section 02 Card 3 ghost link; Section 09 secondary CTA | [data-placeholder: asset not yet published] |
| `/trust` | SOC 2 / HIPAA / GDPR controls | Section 06 trust strip, sub-labels | Trust page (planned per site architecture) |
| `/compare` | See how Quaeris compares | Footer — not a section CTA; add to footer column | Routes evaluation-stage visitors to comparison hub |

**Note:** `/industries`, `/trust`, `/compare`, and `/resources/enterprise-brief` are listed in the planned site architecture but are not yet live. Internal links to these routes should be added to the page as placeholders and activated when the routes are published.

---

## 6. Open Questions

The following items are genuinely unresolved and require input from product, sales, or legal before this page can go live.

1. **Pricing structure confirmation.** Is pricing by warehouse connection, by engine activation, by user count, or a combination? The spec assumes a configuration-based model (not per-seat) based on the enterprise positioning, but the sales team must confirm the actual billing axis before Section 02 copy is finalized.

2. **Tier names.** "Team / Professional / Enterprise" are working names for the spec. Confirm whether these match the internal commercial tier names, or supply the correct labels.

3. **Monetary figures.** All `[data-placeholder]` price strings in Section 02 require sales-team input. Confirm whether to show a price floor ("From $X / month"), a range, or "Contact sales" for all tiers.

4. **Pilot program terms.** Section 08 FAQ Q3 references a structured pilot. Confirm whether a formal pilot program exists, its duration, and whether it is self-serve or sales-assisted.

5. **Certification status.** SOC 2 Type II, HIPAA, GDPR, and ISO 27001 are listed as `[data-placeholder]` throughout. Legal/compliance must confirm which certifications are current, in-progress, or planned, so the trust strip badges render in the correct state (active vs. muted).

6. **BYOM slot count per tier.** Section 02 and FAQ Q5 reference `[data-placeholder]` BYOM provider slots for Team and Professional. The product team must supply the actual limits.

7. **Audit log retention per tier.** Section 02 and the feature matrix reference `[data-placeholder]` days of prompt-level audit log retention per tier. The product team must supply the actual retention figures.

8. **Case study de-anonymization.** Section 07 relies on anonymized proof. The research context identifies de-anonymizing at least two case studies as the #11 highest-priority action in the 30-day roadmap. This page's conversion effectiveness improves materially once even one named financial services or insurance customer can be cited.

9. **Enterprise Brief asset.** Section 02 Card 3 and Section 09 secondary CTA link to `/resources/enterprise-brief`. Confirm whether this PDF exists or needs to be created; if it does not exist, the ghost CTA should be removed or replaced with a "Request an Enterprise Brief" form submission CTA until the asset is published.

10. **Annual vs. monthly pricing toggle.** Confirm whether Quaeris offers a published monthly billing option or whether all contracts are annual. If annual-only, remove the toggle from Section 01 and show only annual pricing callouts with the note "Annual contract · Billed upfront."
