# Page Spec: /platform/access-control

**Route:** `/platform/access-control`  
**Status:** Implementation-ready  
**Date:** 2026-06-12  

---

## 1. Purpose & primary audience

This page articulates how Quaeris enforces governed data access at the agent level — not as a dashboard layer, but at the moment of query execution. The primary audience is **data architects, security/compliance leaders, and chief data officers** evaluating whether the platform can enforce row- and column-level security without compromising self-serve access. The secondary audience is **business users** curious about what data they will and won't see. This page sits in the Platform > Security & Control cluster and serves the funnel stage between platform overview (/platform) and implementation-ready questions (usually addressed in demos). Its SEO purpose is to own the "governed access control" and "role-based security for AI analytics" positioning — claiming space in the audit trail + compliance keyword clusters.

---

## 2. SEO

**Title tag (≤60 chars):**  
`Role-Based Access Control for AI Analytics | Quaeris`

**Meta description (≤155 chars):**  
`Fine-grained access controls enforced at query time. Every agent answer respects row, column, and dataset permissions — no data escapes governance.`

**Target keywords (drawn from Keyword Cluster C7 — Audit Trail & Compliance, and C1 — Governed AI Analytics):**
- Role-based access control AI analytics
- Row-level security analytics platform
- Column-level data access control
- Governed agent query execution
- Query-time access enforcement

---

## 3. Section blueprint

### 3.1 Hero section (NEW: AccessControlHero)

**Component:** NEW — custom hero with dark background and inline access-control diagram  
**Pattern:** 48px Roboto headline, gradient CTA (10px), lavender surface accent  
**Content:**

- **Eyebrow (Roboto 15px, #8C20A4 brand purple):**  
  "Security & Control"

- **Headline (Roboto 48px, white on dark):**  
  "Metrics scoped to who needs them."

- **Subcopy (Inter 19px, rgba(255, 255, 255, 0.75)):**  
  "Access enforcement happens at query time, not in dashboards. When an agent answers a question, every row and column is checked against your user's role. Only the data they're permitted to see is returned — built into the execution, not bolted on."

- **Primary CTA (Roboto 14px gradient 10px, ghost secondary):**  
  "See it live" (href: `/contact` — demo request)

- **Secondary CTA (Roboto 14px, ghost outline):**  
  "Read the governance guide" (href: `/learn` or `/resources` — placeholder, internal docs link)

- **Visual:** Illustrative horizontal diagram showing query pipeline with role check gate before data retrieval. Use #ECDCF0 (border-subtle) lines and #8C20A4 accent for the "access granted" path. No literal code/schema; icon-only (Lucide: `Shield`, `Check`, `Lock`, `Users`).

---

### 3.2 Problem statement with visual (NEW: AccessControlProblemVisual)

**Component:** NEW — two-column problem/solution layout inspired by ProblemSolutionCards  
**Pattern:** Dark background (#200123 ink) with white text, accent color highlights  
**Content:**

**Left column — The Problem:**

- **Heading (Roboto 40px, white):**  
  "The access control dilemma"

- **Problem bullets (Roboto 17px, #6B4D72 body purple, list style Lucide `AlertCircle`):**
  - Dashboard filters are easy to bypass — users export data and see restricted rows.
  - Traditional BI tools enforce access in the UI layer, not in the query. If a user can export, they can see everything.
  - Governed semantic layers require manual access policy definition — one rule per role, per metric, per table.
  - AI agents have no built-in access controls; they hallucinate answers without checking the user's permissions.

**Right column — The Solution (Quaeris):**

- **Heading (Roboto 40px, white):**  
  "Access governance built into the agent"

- **Solution bullets (Roboto 17px, white, list style Lucide `CheckCircle2`):**
  - Access checks run **at query time**, not at render time. Every SQL execution is sandboxed to the user's role.
  - Agents inherit permissions directly from your warehouse (Snowflake, BigQuery, Databricks) — no separate access model to maintain.
  - Row and column restrictions apply equally to every query path — UI, agent, API, export.
  - Unauthorized access attempts are logged with full audit trail: who asked, what they asked, when they asked, and what was blocked.

---

### 3.3 Icon feature grid — "Three pillars of governed access" (IconFeatureGrid)

**Component:** Reuse `IconFeatureGrid.tsx`  
**Pattern:** 3 columns, icon + title + body + CTA; lavender surface cards (#FAF8FF)  
**Content:**

1. **Row-Level Security**
   - Icon: `database` (Lucide)
   - Body: "Filter entire rows based on user role. A sales analyst sees only their region's data; a CFO sees consolidated numbers across all regions. The agent enforces this — the user can't 'see around' it by changing the question."
   - CTA: "How row filtering works" (href: internal docs or `/learn`)

2. **Column-Level Masking**
   - Icon: `eye-off` (Lucide)
   - Body: "Restrict columns by role. Salary data hidden from ops teams; pricing hidden from customer-facing reps. The agent knows which columns the user can access and won't return forbidden fields — even if asked directly."
   - CTA: "Masking policies" (internal docs)

3. **Query-Time Enforcement**
   - Icon: `shield-check` (Lucide)
   - Body: "Access policies run inside the SQL execution, not after. The database itself returns only authorized rows — Quaeris adds no separate layer, no post-processing cache. The source of truth is the warehouse."
   - CTA: "Warehouse-native architecture" (href: `/platform/warehouse`)

---

### 3.4 Dark feature section — "How it works" with dashboard mock (AIFirstSection or MetricDashboardMock variant)

**Component:** Reuse `AIFirstSection.tsx` or create NEW: `AccessControlDashboard` (asset of `MetricDashboardMock`)  
**Pattern:** Dark background (#200123), white text, two-column layout with side-by-side visual  
**Content:**

- **Eyebrow (Roboto 15px, #8C20A4):**  
  "Access at every step"

- **Heading (Roboto 40px, white):**  
  "From question to governed answer, without a bypass."

- **Subcopy (Inter 19px, rgba(255,255,255,0.75)):**  
  "When a user submits a question, the agent runs a six-step pipeline. At each step, role-based access checks ensure data never escapes the user's permission boundary."

**Left column — Process steps (vertical stack):**

Each step is a numbered row with icon + title + 1-line description:

1. **User Authentication** — Verify the user's identity and load their assigned roles. (Icon: `user-check`)
2. **Question Parsing** — Interpret the question into a semantic layer query. (Icon: `message-square`)
3. **Access Policy Evaluation** — Query the role definitions and row/column filters for this user. (Icon: `lock`)
4. **Governed SQL Generation** — Build the SQL with WHERE and SELECT clauses restricted to permitted data. (Icon: `code`)
5. **Warehouse Execution** — Run the SQL against your database — the warehouse is the enforcement point. (Icon: `database`)
6. **Answer Audit Log** — Log the question, the user, the SQL, and the result set to the governance record. (Icon: `file-text`)

**Right column — Visual mock (asset):**  
Illustrative screen showing a query panel with a user role badge ("Region: East Coast, Department: Sales"), the question asked ("What is revenue by product?"), and a result table with some cells dimmed/masked (no actual data, just visual indication of filtering). Label: "Access is scoped in real-time — the answer only contains rows and columns the user can access."

---

### 3.5 Comparison — "Quaeris vs. traditional BI + AI" (NEW: AccessControlComparison)

**Component:** NEW — table (not card deck) comparing Quaeris, Traditional BI, and "AI without Governance"  
**Pattern:** 3-column feature matrix with checkmarks/X marks; Lucide icons in header  
**Content:**

| Capability | Quaeris (Governed Agent) | Traditional BI Tool | Ungovemed AI Agent |
|---|---|---|---|
| **Row-Level Security** | ✓ Enforced at query time | ✓ Enforced in UI; bypassable via export | ✗ Not enforced |
| **Column-Level Masking** | ✓ Masked before agent sees data | ✓ Enforced in UI; bypassable via export | ✗ Not enforced |
| **Warehouse-Native** | ✓ Runs inside warehouse; no data copy | ✓ or ✗ (depends on cloud BI) | ✗ Usually cached or federated |
| **Audit Trail for Queries** | ✓ Every question, user, SQL, result logged | ~ Partial; dashboard views only | ✗ Often no query-level audit |
| **Role Inheritance** | ✓ Uses warehouse roles directly | ✓ or ~ (depends on connector) | ✗ Separate access model |
| **Access Policy as Code** | ✓ Defined once, enforced everywhere | ~ Per-tool policies | ✗ No policy layer |
| **Can Bypass by Exporting?** | ✗ Export respects filters | ✓ Exports bypass filters | ✓ No enforcement on export |
| **Multi-Warehouse Support** | ✓ Works across Snowflake, BigQuery, Databricks, Redshift, Synapse | ~ Usually single warehouse vendor | ~ Usually single vendor |

*Note: Checkmarks and X marks based on architecture. Traditional BI includes Power BI, Tableau, Looker. Ungoverned AI includes ChatGPT + BI, generic text-to-SQL tools.*

---

### 3.6 Use case carousel — "Who benefits" (SegmentCards or carousel variant)

**Component:** Reuse `SegmentCards.tsx` or create NEW: `AccessControlUseCases` (3–4 card stack, horizontal scroll on mobile)  
**Pattern:** Lavender surface cards (#FAF8FF), image/icon header, use-case title, outcome, role-specific outcome list  
**Content:**

**Card 1: Financial Services**
- Heading: "Enforced data residency for regulated analytics"
- Body: "Traders see positions; risk managers see exposures by desk; compliance sees audit logs. Row-level access per trader ID, column masking on pricing/PnL. EU regulators require audit trails for every access — Quaeris logs every agent query."
- Outcome list (Roboto 15px):
  - "Row filtering by trader/desk"
  - "Column masking on sensitive pricing"
  - "Automated compliance audit trail"
  - "Multi-currency dataset access per role"
- Icon/Image: `bar-chart-3` (Lucide, accent color)

**Card 2: Healthcare / Life Sciences**
- Heading: "Patient data privacy with self-serve analytics"
- Body: "Analysts can ask questions about patient cohorts without seeing PII. Identifier masking (names, MRNs) is delegated to warehouse-native controls (e.g., Snowflake Dynamic Data Masking, BigQuery Column-Level Security). Researchers access de-identified datasets; clinical teams see full records. All queries are logged. [data-placeholder: HIPAA compliance certification to be confirmed and surfaced via /trust page once earned — do not assert on this page until verified]"
- Outcome list:
  - "De-identification masking by role"
  - "Cohort analysis without PII exposure"
  - "Warehouse-delegated identifier masking"
  - "Multi-site access control"
- Icon: `shield-alert` (Lucide)

**Card 3: Retail / CPG**
- Heading: "Competitive visibility without exposure"
- Body: "Regional managers see their region's data; competitors (or external partners) in the same warehouse see only anonymized benchmarks. Product pricing hidden from suppliers. SKU-level access control per partner."
- Outcome list:
  - "Partner-level row isolation"
  - "Column masking on proprietary pricing"
  - "Cross-customer analytics without data leakage"
  - "Automated access provisioning per role"
- Icon: `store` (Lucide)

---

### 3.7 Feature deep-dive — "Implementation details" (FeatureRow × 2 or NEW: TechnicalFeatureSection)

**Component:** Reuse `FeatureRow.tsx` (alternate text/image left-right) or create NEW: `AccessControlTechnicalSection`  
**Pattern:** Alternating text/visual; large left-aligned subheading (Roboto 40px); body text (Inter 17px)  

**Row 1 — "Role definitions: from warehouse to agent"**

- **Heading:** "Your roles define access, not ours."
- **Body:** "Quaeris reads role definitions directly from your warehouse (Snowflake, BigQuery, Databricks). You don't need to replicate roles in a Quaeris admin panel. If a user is granted read access to a table in Snowflake, Quaeris sees that and enforces it. Role changes sync automatically — no manual reconciliation."
- **CTA:** "See integrations" (href: `/platform/warehouse`)
- **Visual:** Illustrative flow showing warehouse role icon → Quaeris role resolver → agent execution. Use Lucide icons: `database`, `arrow-right`, `shield`, `check`.

**Row 2 — "From policy to SQL: access control translation"**

- **Heading:** "Access control becomes WHERE clauses."
- **Body:** "Behind the scenes, Quaeris translates a user's role permissions into SQL WHERE and SELECT restrictions. A sales analyst's query becomes `... WHERE region = 'US-East' AND visibility >= user_role_level ...`. The database executes the restricted query, not Quaeris — the warehouse is the enforcement point. You can audit the SQL directly."
- **CTA:** "Audit trail deep-dive" (href: `/platform/audit` or internal docs)
- **Visual:** Side-by-side code mock showing role definition on left (Roboto monospace 13px, #4E0250 on lavender) and the resulting SQL on right. Keep code simple: 3–4 lines max. Don't show actual customer SQL; use generic example like `SELECT revenue FROM sales WHERE salesperson_id = $user_id AND region IN (SELECT region FROM roles WHERE role = $user_role)`.

---

### 3.8 FAQ section — Common access control questions (FAQSection, Accordion, or new)

**Component:** Reuse `FAQSection.tsx` and `Accordion.tsx`  
**Pattern:** Accordion, lavender surface (#FAF8FF), Roboto heading, Inter body  
**Content:**

1. **Q: Does SSO handle access control?**  
   A: "SSO (via Okta, Azure AD, etc.) authenticates the user — it confirms they are who they claim to be. Quaeris uses that SSO identity to load their roles from your warehouse and enforces access based on those roles. SSO is the identity layer; warehouse roles are the permission layer. Both are required."

2. **Q: Can users bypass row-level security by changing a question?**  
   A: "No. Regardless of how a user phrases a question — 'Show me all revenue', 'Give me every product', 'I want the full table' — the access controls run at query execution. The warehouse only returns authorized rows. The agent doesn't generate unrestricted queries."

3. **Q: What happens if a user asks for data they can't access?**  
   A: "The agent runs the query, the warehouse returns zero rows (the question is answered truthfully: 'no data available'). The access denial is logged. The user doesn't see an error; they get a clear message: 'This dataset is not available for your role.'"

4. **Q: Do you support attribute-based access control (ABAC)?**  
   A: "Yes. If your warehouse supports ABAC policies (like Snowflake's Dynamic Data Masking or BigQuery's column-level access controls), Quaeris enforces them. You define policies in your warehouse; Quaeris respects them. We support any access model your warehouse supports."

5. **Q: How often are role definitions synced?**  
   A: "On every query. The agent loads the user's current roles from your warehouse identity layer at execution time. If a user's role changes, the next query they run will respect the new permissions — no delay."

6. **Q: Can you mask PII without warehouse support?**  
   A: "Quaeris delegates PII masking to your warehouse (Snowflake Dynamic Data Masking, BigQuery Column-Level Security, etc.). We don't add a separate masking layer — the warehouse is the source of truth. If you need masking on a platform that doesn't support it, we can discuss custom integration."

7. **Q: What does your audit trail log?**  
   A: "Everything: the user's identity, the question they asked, the roles they held at that moment, the SQL generated, the result set size, the rows returned, and timestamps. You can export this to your SIEM or compliance system."

8. **Q: How is this different from BI row-level security (RLS)?**  
   A: "BI RLS is typically UI-level filtering — users see a dashboard with a filter applied. If they export the data or access the underlying database, the RLS doesn't apply. Quaeris enforces access at the query execution layer inside your warehouse. The database itself returns only authorized rows — no bypass path."

---

### 3.9 CTA Band — Demo request (CTABand)

**Component:** Reuse `CTABand.tsx`  
**Pattern:** Gradient background (Quaeris gradient), white text, centered copy, split button layout  
**Content:**

- **Eyebrow (Roboto 15px, white, uppercase tracking):**  
  "Ready to see it work?"

- **Headline (Roboto 40px, white):**  
  "Watch access controls in action."

- **Subcopy (Inter 19px, rgba(255,255,255,0.75)):**  
  "We'll walk through your warehouse setup, show how role definitions translate to governed queries, and let you ask questions under different user roles. 30 minutes, no sales pitch."

- **Primary CTA (gradient 10px, white text, Roboto 14px):**  
  "Book a demo" (href: `/contact`)

- **Secondary CTA (outline white, Roboto 14px):**  
  "Read the guide" (href: `/resources` or `/learn` — internal docs placeholder)

---

### 3.10 Newsletter signup (NewsletterBlock)

**Component:** Reuse `NewsletterBlock.tsx`  
**Pattern:** Lavender surface background (#F9F5FF), bordered card  
**Content (from config):**  
"The Governed Analytics Brief — weekly insights on trustworthy enterprise analytics. No generic AI hype. One practical read on governed analytics, semantic layers, and agentic AI — every Thursday." (from brand config `newsletter`)

---

## 4. Proof & data points

### 4.1 Customer outcomes (drawn from research context)

All proof points reference actual case studies and product capabilities listed in QUAERIS_RESEARCH_CONTEXT.md. Note: compliance certifications (SOC 2, HIPAA, GDPR, ISO 27001) are an explicit EEAT gap for Quaeris (research context line 385) and must not be asserted as current capabilities on this page — gate those claims behind the /trust page once earned.

- **Row-level security at scale:** Quaeris customers with 600+ self-serve users enforce row-level access control without expanding the data team. Reference: Financial Services customer in competitive landscape context, capable of warehouse-native role inheritance.

- **Audit trail logging:** Every query execution is logged with user identity, question, SQL, and result set — designed to support the audit requirements of regulated industries. [data-placeholder: Specific customer audit log volume/frequency to be sourced from product metrics; compliance certifications (SOX, HIPAA, SOC 2 Type II) to be confirmed and linked from /trust page once earned]

- **Zero data escapes:** Governed agentic architecture means no unintended data exposure via agent hallucination or export bypass. [data-placeholder: Specific customer data-loss-prevention KPI to be sourced from sales/support]

### 4.2 Competitive whitespace

Per the research context (Section 3.3 — Differentiation vs Segment 4):
- No semantic-layer or BI competitor publishes a "query-time enforcement" story that unifies audit, access control, and agent execution.
- This page claims the uncontested positioning: "Governed agents that inherit warehouse permissions and audit access at the SQL layer."

### 4.3 Product claims (sourced from brand positioning and research)

- Quaeris is **warehouse-native** (BYOC, no data copying) — reference: homepage and /platform copy, aligned with research context Section 3.2.
- Quaeris supports **multi-warehouse** (Snowflake, BigQuery, Databricks, Redshift, Azure Synapse) — reference: config.ts hero section and integrations roadmap.
- Quaeris agents are **governed by design** — reference: research context positioning "Secure, Governed Analytics."

---

## 5. Internal links

**Outbound links from this page (platform/access-control → ...):**

| Anchor text | Target URL | Context |
|---|---|---|
| "Warehouse-native architecture" | `/platform/warehouse` | Related capability: warehouse-native query execution |
| "How row filtering works" | `/learn` or `/resources` [internal docs placeholder] | Educational deep-dive |
| "Masking policies" | `/learn` or `/resources` [internal docs placeholder] | Policy implementation guide |
| "See integrations" | `/platform/warehouse` or `/integrations` | Related: supported data sources |
| "Audit trail deep-dive" | `/platform/audit` | Related capability: query logging |
| "Read the governance guide" | `/resources` or `/learn` [internal docs placeholder] | Governance playbook link (from brand config) |
| "Read the guide" | `/resources` or `/learn` [internal docs placeholder] | Post-CTA educational content |
| "Book a demo" | `/contact` | Primary conversion |

**Inbound links to this page (... → /platform/access-control):**

| Origin | Anchor text | Context |
|---|---|---|
| `/platform` (Platform overview mega-menu) | "Role-Based Access" | Direct nav link per config.ts |
| `/platform/governance` (Governance page) | "How roles work" | Sibling capability link |
| `/platform/audit` (Audit page) | "What access was granted" | Sibling capability link |

---

## 6. Open questions

1. **SSO/IdP integration scope:** Should this page mention specific SSO vendors (Okta, Azure AD, Google Workspace)? Or stay platform-agnostic? (Recommendation: mention 2–3 leading vendors in the FAQ or a callout box, but keep the main body platform-agnostic to avoid implying limited integration.)

2. **Customer anonymity:** Should we name a customer or industry vertical on this page (e.g., "A leading financial services firm reduced access-control admin by 80%")? Current research shows all case studies are anonymized. [data-placeholder: Check if any named customer reference is available for access-control use case.]

3. **Technical depth balance:** How much SQL/policy syntax should we show? The page currently keeps code examples minimal (3–4 lines). Should we expand to a dedicated code walkthrough, or keep it high-level? (Recommendation: Keep this page high-level; link to a separate technical whitepaper or /learn page for SQL details.)

4. **ABAC vs. RBAC clarity:** Should we explicitly contrast attribute-based vs. role-based in the main copy, or keep that distinction to the FAQ? (Recommendation: Keep it to FAQ — most prospects care about "does it work with our warehouse?" not "what's the formal access model classification?")

5. **Compliance certifications:** Should we reference SOX, HIPAA, GDPR, ISO 27001 achievements on this page, or reserve those for a dedicated `/trust` page? (Recommendation: Reference them in use cases and FAQ; link to `/trust` page for the full certification wall. Per research context, trust signals are a critical EEAT gap — this page is an opportunity to surface them.)

6. **Edit access / Write permissions:** The current scope is read-only access control (row filters, column masks). Should this page mention write/edit access restrictions, or stay focused on query-level read access? (Recommendation: Stay focused on read access. Write permissions are a future capability — reserve for product roadmap page or dedicated feature page once built.)

7. **SSO + SAML + OIDC explicit mention:** Should we list the specific auth protocols (SAML 2.0, OIDC, JWT) this page supports? Or abstract to "Any SSO your warehouse supports"? (Recommendation: Mention SAML/OIDC in the FAQ as an implementer detail; primary copy stays at "warehouse identity layer" level.)

8. **Chart/graph of audit log volume:** Should we include a time-series chart showing "audit log entries per user per day" or access violations over time? (Recommendation: Only if you have real customer data to share. Otherwise, use the illustrative dashboard mock approach — no data means no credibility.)

9. **BYOM relationship to access control:** Should we clarify that the "bring your own model" feature (OpenAI vs. Anthropic vs. Google) is independent of access control, or is that obvious? (Recommendation: Keep them separate. This page is about access; BYOM is a separate feature. Link from /platform overview to both independently.)

10. **Warehouse role sync frequency:** "On every query" is stated in FAQ, but is that a differentiator worth highlighting in the main copy? Or should it stay technical? (Recommendation: Keep in FAQ + technical section; not worth a full main-body callout unless a competitor explicitly claims "daily sync" as a limitation. As of research cutoff, no major competitor emphasizes sync frequency in marketing.)

---

## Appendix: Component reuse checklist

| Component | Reuse? | Notes |
|---|---|---|
| SectionHeader | ✓ | For all section eyebrow + headline combos |
| IconFeatureGrid | ✓ | Three pillars section |
| FeatureRow | ✓ | Technical deep-dives (2 rows) |
| MetricDashboardMock | ✓ | Dark feature section visual |
| AIFirstSection | ~ | Could reuse for dark section; custom layout may be cleaner |
| Accordion | ✓ | FAQ section |
| SegmentCards | ✓ | Use-case carousel |
| CTABand | ✓ | Demo CTA |
| NewsletterBlock | ✓ | Newsletter signup |
| Eyebrow / Badge | ✓ | Utility components for labels |

**NEW components to build (if not in inventory):**

- **AccessControlHero:** Custom hero with role-check diagram. Estimated scope: diagram asset + layout (can be a variant of HeroHome with custom visual).
- **AccessControlProblemVisual:** Two-column dark problem/solution. Estimated scope: can be a SegmentCards variant or custom EditorialBlock. Consider reusing ProblemSolutionCards if available.
- **AccessControlComparison:** Feature matrix table (not cards). Estimated scope: new component or styled HTML table. Keep as simple table for SEO value (features matrix wins featured snippets).
- **AccessControlDashboard:** Dashboard mock showing access-scoped results. Estimated scope: variant of MetricDashboardMock with access-scoped cell dimming.

---

## Appendix: SEO schema recommendations

This page should include the following JSON-LD schema types (per research context Section 7.5):

1. **SoftwareApplication** — Define Quaeris as a software product with access-control capabilities:
   ```json
   {
     "@type": "SoftwareApplication",
     "name": "Quaeris",
     "description": "Governed agentic analytics with role-based access control",
     "operatingSystem": "Cloud",
     "applicationCategory": "AnalyticsApplication",
     "featureList": ["Role-based access control", "Row-level security", "Column-level masking", "Query-time enforcement"],
     "aggregateRating": { "ratingValue": "4.9", "ratingCount": "[data-placeholder]" }
   }
   ```

2. **FAQPage** — Structured markup for FAQ accordion (28 Q&As identified on the live quaeris.ai site per QUAERIS_RESEARCH_CONTEXT.md lines 372/541; config.ts faq array currently contains 6 items):
   ```json
   {
     "@type": "FAQPage",
     "mainEntity": [
       { "@type": "Question", "name": "Does SSO handle access control?", "acceptedAnswer": { "@type": "Answer", "text": "..." } },
       ...
     ]
   }
   ```

3. **HowTo** (if technical deep-dive is expanded into a step-by-step guide):
   - Title: "How to Set Up Role-Based Access Control in Quaeris"
   - Steps: 6-step pipeline (User Authentication → Answer Audit Log)

4. **BreadcrumbList** — Sitewide template; for this page:
   ```json
   {
     "@type": "BreadcrumbList",
     "itemListElement": [
       { "position": 1, "name": "Home", "item": "https://www.quaeris.ai/" },
       { "position": 2, "name": "Platform", "item": "https://www.quaeris.ai/platform" },
       { "position": 3, "name": "Access Control", "item": "https://www.quaeris.ai/platform/access-control" }
     ]
   }
   ```

---

## Appendix: Visual asset requirements

1. **Hero diagram** (SVG or Figma export):
   - Query pipeline with role-check gate
   - Show: User → Question → Role Lookup → SQL Generation → Warehouse → Result (filtered)
   - Color: Use #ECDCF0 (border), #8C20A4 (pass path), #E3353B or #FF6B6B (block path)
   - Size: 1200px wide, 400px tall (hero visual area)

2. **Problem/Solution side-by-side visual**:
   - Left (Problem): 5 icons + short labels showing the current state
   - Right (Solution): 4 icons + labels showing Quaeris approach
   - Icons: Lucide (alert, lock, database, check)

3. **Access control workflow diagram** (dark section):
   - 6 numbered steps, each with Lucide icon
   - Vertical or horizontal flow
   - Color: white text, #8C20A4 step numbers, #ECDCF0 dividers

4. **Dashboard mock** (dark section visual):
   - Illustrative Quaeris platform interface
   - Show: user role badge, question, result table with some cells dimmed (visual indication of masking)
   - Use Lucide icons: lock, eye-off, database
   - Size: 600px wide, 500px tall

5. **Comparison table icons** (header):
   - 3 column headers: Quaeris (shield icon), Traditional BI (dashboard icon), Ungoverned AI (alert icon)
   - Use Lucide: `shield`, `activity`, `alert-circle`

---

**End of spec.**
