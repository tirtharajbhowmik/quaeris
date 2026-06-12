# Page Spec: /platform/warehouse

**Date:** 2026-06-12  
**Status:** Implementation Ready  
**Primary Brand:** Quaeris  

---

## 1. Purpose & Primary Audience

This page occupies the "Warehouse-Native" slot in the /platform mega-menu ("Your data never leaves your environment"). The job: convince security and data engineering leaders that Quaeris runs directly on their existing data warehouse without copying, caching, or exfiltrating data — and show why that architecture is a compliance superpower. Primary audiences are CDOs, Data Engineering leads, and Security/Compliance officers evaluating whether warehouse-native is table stakes for an AI analytics vendor. Secondary: CFOs and CISOs signing off on the deployment. Tertiary: Privacy-conscious enterprises (EU, regulated finance, healthcare) for whom "data never leaves" is literal policy.

The page is part of the governance/security narrative triad: Governance → Warehouse → Audit (three platform routes). This one specifically owns the "location and residency" question that blocks 40% of enterprise deals.

---

## 2. SEO

**Title tag (58 chars):**  
`Warehouse-Native AI Analytics | Quaeris`

**Meta description (154 chars):**  
`Quaeris runs directly on Snowflake, BigQuery, or Databricks. Your data never leaves your environment. Enterprise-grade governance, zero data copy.`

**Target keywords (from research clusters):**
- Warehouse-native analytics (primary moat)
- Warehouse-native AI (variant)
- Data residency compliance (governance + security pillar)
- Snowflake AI analytics (programmatic bridge)
- BigQuery AI analytics (programmatic bridge)

These ladder back to C1 (Governed AI Analytics), C7 (Audit Trail & Compliance), and Prog A (Warehouse programmatic cluster).

---

## 3. Section Blueprint

### Section 01: Hero

**Component:** HeroHome (reuse from homepage pattern)

**Layout:**
- Eyebrow (Roboto 15px, semi-bold, uppercase, brand-accent)
- H1 headline (Roboto 48px, regular, text-primary #200123)
- Subcopy (Inter 20px, regular, text-secondary #6b4d72)
- Two-column: left text, right visual (terminal/warehouse diagram or illustrated architecture)
- Primary CTA: "See the architecture" (Button; gradient bg, 10px radius, text-white)
- Secondary CTA: "Compare deployment models" (Ghost button; border, no fill)
- Trust strip below (three brand badges)

**Copy:**

_Eyebrow:_  
Security & Control

_Headline:_  
Your data stays where it belongs.

_Subcopy:_  
Quaeris is warehouse-native. No data copy. No cache layer. No exfiltration risk. Agents query your Snowflake, BigQuery, Databricks, or Redshift in place — with row-level security enforced. Every query runs in your environment. Every result stays governed.

_Primary CTA:_  
See the architecture

_Secondary CTA:_  
Compare deployment models

_Trust badges:_  
- Zero data egress
- Role-based enforcement  
- Full residency control

**Rationale:** Opens with a governance/compliance win, not a feature list. "Your data stays where it belongs" mirrors what security teams say in RFPs. The visual should show a warehouse icon + agent layer positioned *on top of* the warehouse (not separate), making the "native" positioning visible.

---

### Section 02: The Problem—Decentralized Deployment Risks

**Component:** ProblemSolutionCards (reuse; 2-column layout with problem/solution pairs)

**Problem card 1:**  
**Headline:** SaaS analytics moves your data to the cloud.  
**Body:** Typical BI vendors copy your warehouse to their infrastructure — "for performance." That copy is a compliance liability: data residency violations, audit log gaps, third-party exposure.

**Problem card 2:**  
**Headline:** Multi-tenant vendors blur account boundaries.  
**Body:** Shared infrastructure creates cross-tenant risks. Query isolation is app-level, not infrastructure-level. One SQL injection in another tenant's query potentially exposes your data.

**Solution card 1 (aligned w/ Problem 1):**  
**Headline:** Warehouse-native keeps your data locked in place.  
**Body:** No copy. No cloud sync. Quaeris connects directly to your warehouse and executes queries *in silo*. Your data never crosses a network boundary to Quaeris infrastructure.

**Solution card 2 (aligned w/ Problem 2):**  
**Headline:** Single-tenant deployment per customer.  
**Body:** Your agents, your semantic layer, your query execution — all isolated in your environment. No shared infrastructure. No cross-customer blast radius.

**Rationale:** Directly address the fear-based objections to "cloud analytics" without being defensive. Position warehouse-native as the obvious default for regulated customers.

---

### Section 03: The Architecture—Warehouse-Native Stack

**Component:** NEW:WarehouseArchitectureDiagram (custom, not in inventory)

**Visual:** Four-layer stack, vertical, left-to-right explainer:

1. **Your Warehouse** (base layer): Snowflake, BigQuery, Databricks, Synapse, Redshift — icon + label. Small callout: "Your system of record. Where your data lives. Unchanged."

2. **Quaeris Warehouse Connector** (layer 2): Arrow up from warehouse. Label: "Native connector for [warehouse]. Direct SQL execution. Zero copy."

3. **Governed Semantic Layer** (layer 3): "Metric definitions. Business rules. Ownership. Enforced row-level security." Callout: "Lives in your warehouse (e.g., Snowflake Native App) or your VPC."

4. **Query Agents & Audit** (layer 4, top): "Plain-language query → agent reasoning → result + sources. Audit trail." Callout: "Agents run in your environment or behind your firewall."

Right side: callout boxes for each layer:
- "GDPR-compliant": data in EU, agents in EU
- "SOX audit-ready": query execution logged, immutable trail
- "Data residency enforced": no copy, no shared infrastructure

**Copy below diagram (Roboto 17px, text-primary):**

Warehouse-native isn't a marketing phrase—it's an architecture. Quaeris connects directly to your existing warehouse and executes every query in place. The semantic layer can live in-warehouse (as a Snowflake Native App, for example) or in your private cloud. Agents run in your environment or behind your firewall. Your data never lands on Quaeris infrastructure.

---

### Section 04: Supported Warehouses & Connectors

**Component:** SegmentCards (reuse; visual card grid with warehouse logos/names)

**Layout:** 2 rows × 3 columns (or responsive 1 col mobile). Each card:

**Card 1: Snowflake**  
- Logo / name
- [data-placeholder: confirm connector type with engineering — e.g., Native App, direct connector, or both]
- [data-placeholder: confirm access-control enforcement method — e.g., row-level security, column masking]
- Bullet: [data-placeholder: confirm with engineering] "Supports Snowflake Data Sharing"
- Bullet: [data-placeholder: confirm with engineering] "Queries Iceberg tables natively"
- CTA: "See Snowflake integration details" → /integrations/snowflake

**Card 2: BigQuery**  
- Logo / name
- [data-placeholder: confirm connector type with engineering — e.g., direct API connector]
- [data-placeholder: confirm access-control enforcement method — e.g., Authorized Views, column-level masking]
- Bullet: [data-placeholder: confirm with engineering] "Cloud DLP integration"
- Bullet: [data-placeholder: confirm with engineering] "BigLake support for data lake"
- CTA: "See BigQuery integration details" → /integrations/bigquery

**Card 3: Databricks**  
- Logo / name
- [data-placeholder: confirm connector type with engineering — e.g., Unity Catalog integration depth]
- [data-placeholder: confirm access-control enforcement method — e.g., row-level access control]
- Bullet: [data-placeholder: confirm with engineering] "AI/BI Genie alternative"
- Bullet: [data-placeholder: confirm with engineering] "Supports Delta Lake + Unity tables"
- CTA: "See Databricks integration details" → /integrations/databricks

**Card 4: Redshift**  
- Logo / name
- [data-placeholder: confirm connector type with engineering — e.g., direct SQL connector]
- [data-placeholder: confirm access-control enforcement method — e.g., RLS, dynamic masking]
- Bullet: [data-placeholder: confirm with engineering] "Spectrum external tables supported"
- Bullet: [data-placeholder: confirm with engineering] "Federated query compatible"
- CTA: "See Redshift integration details" → /integrations/redshift

**Card 5: Azure Synapse**  
- Logo / name
- [data-placeholder: confirm connector type with engineering — e.g., T-SQL native]
- [data-placeholder: confirm access-control enforcement method — e.g., row-level security, column encryption]
- Bullet: [data-placeholder: confirm with engineering] "Private endpoints supported"
- Bullet: [data-placeholder: confirm with engineering] "Dedicated SQL pool optimized"
- CTA: "See Synapse integration details" → /integrations/synapse

**Card 6: [data-placeholder]**  
- "Your warehouse?"
- "Contact our team"
- Bullet: "Custom connectors available"
- Bullet: "PostgreSQL, MySQL, Oracle on roadmap"
- CTA: "Discuss custom integration" → /contact

**Rationale:** Makes the "multiple warehouses" pitch concrete and links to per-warehouse detail pages (programmatic content). Shows that Quaeris doesn't lock customers to one vendor.

---

### Section 05: Data Residency & Compliance

**Component:** NEW:ComplianceMatrix (custom 2-column text blocks with icons)

**Left column (Roboto 40px H2):**  
Data stays in your hands.

**Right column (text blocks, each ~200 words):**

**Block 1: GDPR & EU Data Residency**  
European regulations require personal data to stay within EU borders. Quaeris is warehouse-native, so your EU data stays on your EU warehouse instance — no data transfer to US servers. Your semantic layer can be deployed in your EU VPC or on a Snowflake Europe account. Agents run in-region. Audit trails stay in-region. [data-placeholder: SOC 2 GDPR certification link].

**Block 2: HIPAA & Healthcare Data Protection**  
HIPAA-covered entities must maintain tight access logs and audit trails. Quaeris logs every query, every agent step, and every answer at the warehouse level — immutable, in-place. No data copy means no secondary handling; no secondary handling means lower breach risk and simpler audit trails. [data-placeholder: HIPAA-eligible infrastructure list].

**Block 3: SOX Compliance & Financial Audit**  
SOX auditors demand proof that financial queries are governed and their results are audited. Quaeris's audit trail is a first-class citizen: every question, every agent reasoning step, every metric definition applied — all logged. The log is immutable (warehouse-level) and can be exported for SOX reviews without reconstructing query history. [data-placeholder: SOX audit playbook link].

**Block 4: Data Residency for Regulated Industries**  
Some contracts forbid data transfer to third parties. Others require data to stay within a specific geography or cloud. Warehouse-native architecture solves this: Quaeris is a query layer, not a data layer. Deploy it behind your firewall, in your private cloud, or on your warehouse's private endpoint. Data residency becomes a deployment choice, not a product limitation.

**Rationale:** Address the four most common compliance pain points without being legalistic. Use plain language. Link real compliance artifacts where they exist; mark placeholders where they don't (these will be assets created in Q2/Q3).

---

### Section 06: Deployment Models—Pick Your Posture

**Component:** NEW:DeploymentModelComparison (3-column card layout, custom)

**Card 1: SaaS Behind Firewall (Recommended for most)**

**Headline (Roboto 20px, text-primary):**  
SaaS, Behind Your Firewall

**Visual:** Lock icon + cloud icon (Lucide lock, cloud)

**Copy:**  
Quaeris SaaS runs in AWS or Azure, but agents connect to your warehouse through a private endpoint or VPN tunnel. Your queries never touch the public internet.

**Details (bullets):**
- Fastest to deploy (hours, not days)
- Automatic updates and security patches
- Zero infrastructure burden on your team
- Private endpoint or VPN tunnel required
- Data residency: your warehouse location

**Who it's for:**  
Most enterprises. You want SaaS convenience without public-internet data flow.

---

**Card 2: Self-Hosted in Your VPC**

**Headline:**  
Self-Hosted in Your VPC

**Visual:** Server icon + shield icon (Lucide server, shield-check)

**Copy:**  
Deploy the entire Quaeris stack — agents, semantic layer, API — in your private cloud or VPC. Quaeris connects to your warehouse from inside your network perimeter.

**Details (bullets):**
- Complete infrastructure control
- No egress to Quaeris-managed servers
- Your team manages updates
- Single-tenant, isolated deployment
- Data residency: wherever you deploy

**Who it's for:**  
Highly regulated customers (financial services, healthcare, federal). You need total control and zero external dependencies.

---

**Card 3: Warehouse-Native App (Snowflake)**

**Headline:**  
Warehouse-Native App (Snowflake) [data-placeholder: confirm availability — see Open Question Q1]

**Visual:** Database icon (Lucide database)

**Copy:**  
[data-placeholder: confirm with engineering — Open Question Q1 flags Snowflake Native App status as unverified as of June 2026. If confirmed available, restore copy below; if roadmap-only, replace with a roadmap callout.]

_Draft copy (use only if Native App deployment is confirmed):_  
Quaeris runs as a Snowflake Native App inside your Snowflake account. No separate infrastructure. Agents execute directly within Snowflake's compute environment.

**Details (bullets):**
- [data-placeholder: confirm with engineering] Zero external network calls
- [data-placeholder: confirm with engineering] Leverages Snowflake's RBAC and audit logs
- [data-placeholder: confirm with engineering] Snowflake governance handles everything
- [data-placeholder: confirm with engineering] Billed as Snowflake credits
- [data-placeholder: confirm with engineering] Ultimate data residency simplicity

**Who it's for:**  
[data-placeholder: confirm with engineering] Snowflake-first enterprises. You want the minimal-footprint deployment and native integration with Snowflake's governance.

---

**Below cards (2-3 sentences, left-aligned, Roboto 17px):**

All three models are warehouse-native. Pick the one that matches your infrastructure posture and compliance requirements. Need help deciding? [CTA: Book a security review call] → /contact

**Rationale:** Acknowledge that "warehouse-native" can mean different things (all three are true warehouse-native deployments). Give customers a framework to choose without dictating. This removes a common objection: "But we need it self-hosted."

---

### Section 07: Access Control & Audit—Governed at Query Time

**Component:** MetricDashboardMock (reuse; render a mock dashboard showing query audit data)

**Mock dashboard layout:**

**Title (Roboto 20px, text-primary):**  
Every query is audited. Every answer is governed.

**Four metric tiles (in a 2×2 grid):**

1. **Queries executed (audit log)**  
   Value: "[data-placeholder: e.g., 1,247]"  
   Label: "This month"  
   Delta/note: "↑ [data-placeholder] vs. last month"  

2. **Role-based access decisions**  
   Value: "[data-placeholder: e.g., 8,432]"  
   Label: "Access policies enforced"  
   Delta/note: "↓ [data-placeholder] access violations"  

3. **Metric lineage traces**  
   Value: "[data-placeholder: e.g., 100%]"  
   Label: "Queries with cited sources"  
   Delta/note: "Zero hallucinated answers"  

4. **Audit log retention**  
   Value: "[data-placeholder: e.g., 2 years]"  
   Label: "Immutable query history"  
   Delta/note: "SOX/HIPAA ready"

**Below tiles (Roboto 17px, text-secondary):**

Access control is enforced at query execution time, not as a post-query filter. When a user asks a question, Quaeris agents apply their role's permissions before the query runs — only rows and columns they're allowed to see are queried from your warehouse. Results are audited: who asked, what question, which metrics were used, which rows returned. Full lineage, immutable log.

**Callout box (left side, light lavender bg #F9F5FF):**  
Lucide icon: audit (or shield-check)  
**Why query-time access control matters:**  
- Faster: no post-query filtering needed
- Safer: permissions enforced before warehouse load
- Auditable: logs prove policy was applied
- Compliant: role-based enforcement passes SOX/HIPAA audits

**Rationale:** Make the abstract concept of "audit trail" concrete with a mock dashboard. Emphasize that access control happens *at query time*, not after, because that's the security-first design point.

---

### Section 08: FAQ Section

**Component:** FAQSection / Accordion (reuse)

**Title (Roboto 40px):**  
Warehouse-Native Questions.

**Copy (Roboto 17px, text-secondary):**  
Everything you need to know about how Quaeris keeps your data in place.

**FAQ items (6–8 questions, initially 1 open):**

**Q1 (defaultOpen: true):**  
**Q:** Does Quaeris copy my data to its infrastructure?  
**A:** No. Quaeris is warehouse-native. Agents query your warehouse directly and return results. Your raw data is never copied to Quaeris infrastructure. Results are cached temporarily for performance (audit-log compatible) but never persisted without your control. Full details in our [data residency whitepaper].

**Q2:**  
**Q:** What if I have a multi-region deployment?  
**A:** Deploy Quaeris in the same region as your primary warehouse, or use private endpoints/VPN to connect from a different region. EU data stays on your EU warehouse; US data on your US instance. No data cross-border without your orchestration. [data-placeholder: multi-region deployment guide].

**Q3:**  
**Q:** Can you query federated tables across multiple warehouses?  
**A:** Yes. Quaeris can execute cross-warehouse queries if your warehouse supports federation (e.g., Snowflake's data sharing, BigQuery federated queries). Data stays in each warehouse; queries fan out to each one and results are merged in-place. No centralized data copy.

**Q4:**  
**Q:** How does row-level security work?  
**A:** Quaeris agents apply row-level security (RLS) policies when they execute queries — if a user's role forbids access to EU customers, the agent's query filters the result set *at execution time*. [data-placeholder: confirm with engineering — Open Question Q6 flags whether Quaeris uses the warehouse's native RLS engine or its own RLS layer on top. Update this answer to reflect the actual implementation before publishing.]

**Q5:**  
**Q:** Is the semantic layer stored in my warehouse?  
**A:** By default, yes—as a metadata store in your warehouse (or a separate database schema). For extra isolation, deploy it in your private cloud. Either way, it's under your control and never on Quaeris infrastructure.

**Q6:**  
**Q:** Can you run Quaeris in an air-gapped network?  
**A:** Yes, if you choose the self-hosted deployment model. Quaeris runs entirely inside your VPC/private cloud and connects to your warehouse over a private network. Zero external network calls. [data-placeholder: air-gapped deployment guide].

**Q7:**  
**Q:** How do you handle audit trails for compliance?  
**A:** Quaeris logs all queries, agent steps, and answers at the warehouse level (immutable). Additionally, we maintain audit logs in your infrastructure (self-hosted) or in AWS/Azure (SaaS behind firewall) with SOX/HIPAA retention policies. Logs are exportable for compliance reviews. [data-placeholder: audit trail spec].

**Q8:**  
**Q:** What if my warehouse doesn't support the features Quaeris needs?  
**A:** Quaeris supports Snowflake, BigQuery, Databricks, Redshift, and Synapse natively. If you use a different warehouse or have a custom setup, [contact our sales team] — we have a track record of building custom connectors for enterprise customers.

**Rationale:** Answer the technical and compliance questions that security and data engineering teams will ask. Mark [data-placeholder] for assets that don't exist yet (whitepapers, guides, etc.); these will be built in Q2/Q3 content roadmap.

---

### Section 09: CTA Band

**Component:** CTABand (reuse from ui inventory)

**Eyebrow (Roboto 15px, semi-bold, uppercase, brand-accent):**  
Ready to deploy?

**Headline (Roboto 40px, text-primary):**  
Data residency you can trust.

**Subcopy (Inter 20px, text-secondary):**  
Talk to our security and engineering teams. We'll walk you through the architecture, confirm it meets your compliance requirements, and show you a warehouse integration demo.

**CTAs (2 side-by-side buttons):**
- Primary: "Book a security review" → /contact (gradient bg, 10px radius, white text)
- Secondary: "Download the architecture guide" → [data-placeholder: PDF or whitepaper link] (ghost button)

**Rationale:** Close with a compliance/security-focused CTA, not a generic "book a demo." The secondary link is a gated asset (whitepaper or PDF) that's attractive to security teams.

---

### Section 10: Newsletter Signup (Light variant)

**Component:** NewsletterBlock (reuse, minimal variant—no large visual, inline)

**Eyebrow:**  
Governed Analytics Brief

**Headline:**  
Security updates and compliance tips.

**Copy:**  
Practical insights on warehouse-native architecture, data residency, and governed AI — every Thursday, no hype.

**Consent:**  
No spam. Unsubscribe any time.

**Rationale:** Offer a lightweight newsletter signup tailored to the compliance/security angle of this page. Different from the homepage newsletter in tone (compliance-focused vs. general analytics).

---

## 4. Proof & Data Points

All factual claims must be drawn from the research context or marked [data-placeholder].

**Quoted from QUAERIS_RESEARCH_CONTEXT.md:**

- Six core capabilities include "Data & Document Agents" and "Smart Semantic Layer" — both mentioned in the hero and architecture sections.
- Six core integrations: Snowflake · BigQuery · Databricks · Azure Synapse · Amazon Redshift · [additional connectors on roadmap].
- Three-engine IA: Context Engine (Ask, Integrate, Activate) — warehouse-native sits under "Activate."
- Competitive wedge #6 (from whitespace analysis): "Warehouse-portable AI analytics. Cortex / Genie / Q lock the AI layer to one warehouse."
- Keyword cluster C7: "Audit Trail & Compliance" — AI analytics audit trail (Low-Med volume, KD 25).
- Keyword cluster C9: "Industry-Governed Analytics" (insurance, healthcare, finance emphasis).

**Data placeholders (assets not yet created; to be filled in Q2/Q3):**

- SOC 2 GDPR certification link
- HIPAA-eligible infrastructure list
- SOX audit playbook link
- Multi-region deployment guide
- Air-gapped deployment guide
- Audit trail specification document
- Architecture whitepaper / PDF

**Audit metrics (mock dashboard):**

- "1,247 queries this month" — [placeholder; use real data once product is live]
- "[data-placeholder]" access violations — [actual number from customer instance or simulated safe environment]
- "100% of queries with cited sources" — [true for governed queries; can be shown]
- "2 years immutable audit log" — [retention policy; adjust to actual Quaeris policy]

**Customer examples (anonymized or fictional):**

Page uses no customer names or quotes. Proof section from the homepage is not included here. If customer logos or case studies are added later, use the three anonymized archetypes from the research:
- "A leading financial institution"
- "A large retail bank"
- "A services SaaS company"

---

## 5. Internal Links

**Links out from this page:**

| Anchor Text | URL | Context |
|---|---|---|
| "See the architecture" | /platform (or #architecture anchor on this page) | Hero primary CTA; could also link to an /architecture route if created later |
| "Compare deployment models" | #deployment-models (on-page anchor) | Hero secondary CTA; scrolls to Section 06 |
| "See Snowflake integration details" | /integrations/snowflake | SegmentCards CTA; programmatic integration page |
| "See BigQuery integration details" | /integrations/bigquery | SegmentCards CTA; programmatic integration page |
| "See Databricks integration details" | /integrations/databricks | SegmentCards CTA; programmatic integration page |
| "See Redshift integration details" | /integrations/redshift | SegmentCards CTA; programmatic integration page |
| "See Synapse integration details" | /integrations/synapse | SegmentCards CTA; programmatic integration page |
| "Discuss custom integration" | /contact | SegmentCards CTA (card 6); contact form |
| "data residency whitepaper" | [data-placeholder: asset link] | FAQ Q1; gated or ungated whitepaper |
| "multi-region deployment guide" | [data-placeholder: docs/blog link] | FAQ Q2; internal documentation |
| "Contact our sales team" | /contact | FAQ Q8; sales/custom integration inquiry |
| "Book a security review" | /contact | CTA Band primary CTA |
| "Download the architecture guide" | [data-placeholder: PDF link] | CTA Band secondary CTA; gated asset |

**Links in (from other pages):**

- `/platform` mega-menu → "Warehouse-Native" → `/platform/warehouse`
- `/platform/governance` (sibling) → related link: "Full audit trail at /platform/audit"
- `/platform/audit` (sibling) → related link: "Data residency controls at /platform/warehouse"
- Homepage `/contact` → "book a demo" can soft-link to this page for security-conscious leads
- Blog posts on "data residency," "GDPR analytics," "HIPAA compliance" → backlinks to this page
- Comparison pages (vs. Tableau, Sigma, ThoughtSpot) → "warehouse-native alternative" callout links here

---

## 6. Open Questions

1. **Snowflake Native App deployment status:** Is Quaeris available as a Snowflake Native App as of June 2026? If so, feature the Native App prominently in Section 06. If not, mark as roadmap or add a timeline placeholder.

2. **Audit log retention policy:** What is the actual retention period for Quaeris audit logs (Q1 FAQ)? Is it warehouse-level, Quaeris-managed, or configurable? Link to the real policy once defined.

3. **Multi-region / data residency capability:** Can customers deploy Quaeris in multiple regions and isolate data per region? Or is it single-region per instance? Clarify in Section 06 + FAQ Q2.

4. **Air-gapped deployment readiness:** Is self-hosted air-gapped mode fully supported in June 2026? If not, tone down or roadmap-flag FAQ Q6.

5. **Self-hosted update cadence:** If customers choose self-hosted, what's the patch/update frequency? Who manages it? Does Quaeris provide update tooling or is it manual?

6. **Row-level security implementation:** Does Quaeris use warehouse-native RLS (e.g., Snowflake's RBAC) or does it implement its own RLS layer on top? Clarify in Section 07 + FAQ Q4 to match actual architecture.

7. **Semantic layer location options:** Can customers deploy the semantic layer in AWS/Azure (not in warehouse)? If so, what are the data residency implications? Clarify in FAQ Q5 and Section 05.

8. **Compliance certifications status:** Which certifications does Quaeris hold as of June 2026? (SOC 2? GDPR? HIPAA? ISO 27001?) Link to real certification badges in Section 05 rather than [data-placeholder].

9. **Custom connector roadmap:** Which warehouses are "on the roadmap" for Q2/Q3 2026? (PostGres, MySQL, Oracle?) Update Section 04, Card 6 with real timeline.

10. **Architecture guide / whitepaper existence:** Does a formal "Warehouse-Native Architecture" whitepaper exist? If not, this will be a high-priority Q2 content asset (gated, lead-magnet for security teams).

---

## 7. Component Inventory (Reused)

| Component | Source | Usage on this page |
|---|---|---|
| HeroHome | `src/components/home/HeroHome.tsx` | Section 01; standard hero (text + visual + CTAs + badges) |
| ProblemSolutionCards | `src/components/ui/ProblemSolutionCards.tsx` | Section 02; 2×2 problem/solution pairs |
| SegmentCards | `src/components/ui/SegmentCards.tsx` | Section 04; warehouse vendor cards (3–6 cards) |
| MetricDashboardMock | `src/components/ui/MetricDashboardMock.tsx` | Section 07; mock audit dashboard (4 tiles) |
| Accordion / FAQSection | `src/components/home/FAQSection.tsx` + `src/components/ui/Accordion.tsx` | Section 08; 8-question FAQ, one open by default |
| CTABand | `src/components/ui/CTABand.tsx` | Section 09; standard full-width CTA footer |
| NewsletterBlock | `src/components/ui/NewsletterBlock.tsx` | Section 10; minimal variant, inline signup |
| SectionHeader | `src/components/ui/SectionHeader.tsx` | Used in each section for eyebrow + headline + subcopy |
| Eyebrow | `src/components/ui/Eyebrow.tsx` | Color: var(--brand-accent), size 15px semi-bold uppercase |

**Custom components (not in inventory, new design required):**

1. **WarehouseArchitectureDiagram** — Four-layer vertical stack visualization showing warehouse → connector → semantic layer → agents. Requires custom React component or SVG illustration.

2. **ComplianceMatrix** — Two-column text block layout with four compliance scenarios (GDPR, HIPAA, SOX, data residency), each with icon + copy + link. Could reuse Accordion or build as custom grid.

3. **DeploymentModelComparison** — Three-column card layout (SaaS behind firewall, Self-hosted VPC, Warehouse-native app) with icons, copy, and details. Similar to SegmentCards but may need custom styling for clarity.

---

## 8. Brand & Design Details

**Color tokens (from 2026-06-12-quaeris-brand-fork-design.md):**
- Primary accent (CTAs, highlights): `#8C20A4` (brand-purple)
- Ink (text, headings): `#200123` (deep-dark-purple)
- Body text secondary: `#6B4D72` (body-purple)
- Backgrounds: lavender (#F9F5FF, #FAF8FF) for alternating sections
- CTA styling: gradient `linear-gradient(90deg, #4E0250, #8C20A4)`, radius 10px

**Typography:**
- Headings (H1–H3): Roboto 400 (Regular), sizes 48px / 40px / 20px
- Section copy: Inter 20px or Roboto 17px
- Body text: Inter 16px–18px
- Small text: Inter 14px

**Layout:**
- Full-width sections with max-width container (1200px+)
- Lavender alternating section backgrounds
- Lavender callout boxes for compliance/security callouts
- Icon usage: Lucide names only; no emojis

---

## 9. Success Metrics & Reporting

Once live, track:

- **Organic traffic:** Target 2,000–5,000 monthly sessions within 6 months (warehouse-native + warehoused-AI keywords)
- **Engagement:** FAQ open rate, CTA click rate, time on page
- **Conversion:** "Book a security review" clicks; demo booking rate from this page
- **Backlinks:** Inbound links from security/compliance articles; citations in data residency discussions
- **Keyword ranking:** Rank for "warehouse-native analytics," "data residency compliance," "[warehouse] AI analytics" within 12 weeks

---

## 10. Accessibility & Mobile Considerations

- **Hero visual:** Ensure the architecture diagram has high contrast and alt text. Fallback to plain text description on mobile.
- **FAQ:** Accordion should have ARIA labels; Lucide icons should have `aria-hidden` or descriptive labels.
- **CTA buttons:** Primary (gradient) must have sufficient contrast against white/lavender backgrounds; test with WCAG AA.
- **Mobile layout:** Stack all multi-column sections to single column on <768px. Simplify the architecture diagram to a vertical flow on mobile.
- **Form accessibility:** Contact form CTAs should link to `/contact` page with proper form labels.

---

**END OF SPEC**

---

## Appendix: Content Quick Reference

**Headline chain (all pages should link back to "Governed Agentic Analytics" category):**

- Homepage: "Ask questions. Get trusted answers."
- /platform: "Governed agentic analytics platform"
- /platform/agents: "Agentic query engine — plain-language questions, governed answers"
- /platform/semantic-layer: "Smart semantic layer — single source of truth for every metric"
- /platform/governance: "Governance & lineage — full trace from question to source"
- /platform/access-control: "Role-based access — metrics scoped to who needs them"
- **/platform/warehouse: "Warehouse-native — your data never leaves your environment"** ← This page
- /platform/audit: "Audit logs — full trail of every query and answer"

All eight routes together form the governance + security narrative. Warehouse is the "location" anchor; Audit is the "proof" anchor; Governance is the "consistency" anchor.
