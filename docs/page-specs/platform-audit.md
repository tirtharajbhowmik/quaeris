# Page Spec: /platform/audit — Audit Trail & Governance

**Route:** `/platform/audit`  
**Parent:** `/platform` (Governance & Lineage cluster)  
**Status:** Ready for implementation  
**Last updated:** 2026-06-12

---

## 1. Purpose & primary audience

This page demonstrates the **complete audit trail** capability of the Quaeris platform — the full history of every question asked, every query executed, every answer returned, and every governance rule applied. Primary audience: data governance leaders, compliance officers, and CFOs/audit teams evaluating AI analytics platforms in regulated industries (finance, insurance, healthcare). Secondary audience: data architects and security leaders vetting the "who-asked-what, when, and what-metrics-were-used" proof required for SOX, HIPAA, and EU AI Act compliance. The page shows both the necessity of governed query audit (why competitors lack it) and Quaeris's specific architecture that captures it automatically.

---

## 2. SEO

**Title tag (60 chars):**  
`AI Analytics Audit Trail | Quaeris Platform`

**Meta description (155 chars):**  
`Track every question, query, and answer. Full audit trail from user to metric to warehouse—governance by design. Quaeris makes AI analytics auditable.`

**Target keywords (5):**
1. `AI analytics audit trail` — C7 cluster, Medium volume, 25 KD, commando intent, EU AI Act tailwind
2. `governed analytics platform` — C1 cluster, Medium volume, 38 KD, governance-first buyer signal
3. `audit log AI analytics` — C7 cluster, Low-Medium, 18 KD, governance narrative
4. `who-asked-what audit trail` — C7 cluster, Low volume, 18 KD, distinctive Quaeris phrase
5. `SOX compliance AI analytics` — C7 cluster, Low-Medium, 30 KD, regulated-industry wedge

---

## 3. Section blueprint

### 3.1 — Hero (SectionHeader)
**Component:** SectionHeader (eyebrow + heading + subcopy)

**Copy:**
- **Eyebrow:** "Governance by design"
- **Heading:** "Every question. Every answer. Full audit trail."
- **Subcopy:** "Business users ask in plain language. Agents query the semantic layer. Role-based access is enforced. And every step — from question to metric to warehouse — is logged, traceable, and auditable. Quaeris makes AI analytics transparent."
- **CTA:** "Schedule an audit demo" (secondary CTA: "See how it works")

**Notes:**
- Positioning is governance-first, compliance-ready, zero-fluff.
- No brand hype; emphasis on "every step" and "traceable."
- Type scale: H1 48px Roboto (Quaeris), subcopy Inter 16px.

---

### 3.2 — The problem: Why audit trails matter (NEW: ProblemSolutionCards)
**Component:** Reuse `ProblemSolutionCards` (two-column problem/solution blocks)

**Copy:**

**Problem 1 — AI Black Box**
- **Problem:** "Most AI analytics platforms treat agents as black boxes. You see an answer — but not the reasoning, not which metrics were queried, not whether the user had access to that data."
- **Solution:** "Quaeris logs every agent step. The system records which business rules were applied, which semantic layer definitions were used, and whether row-level access controls permitted the result. No hidden reasoning."

**Problem 2 — Orphaned Metrics**
- **Problem:** "Compliance teams need proof of which numbers came from which tables, which business rules generated them, and who approved those rules. Standard BI tools show a dashboard — not the provenance."
- **Solution:** "Every Quaeris answer surface the exact metric definitions it used. Traces back to the semantic layer version, the data table, the transformation rules, and the owner approval. Click any number and see the full chain."

**Problem 3 — Access Control Theater**
- **Problem:** "Role-based access on dashboards is a filter — a UI layer. Executives can screenshot restricted data or pivot on unintended dimensions. Governance theater doesn't satisfy auditors."
- **Solution:** "Quaeris enforces access at query time. Role policies are applied when the agent executes — not when the user views the result. Users cannot see data their role forbids, period. And every query attempt is logged."

**Problem 4 — Who Asked What?**
- **Problem:** "When a number in the boardroom turns out to be wrong, compliance needs to know: who asked? when? with what intent? which model assumptions did they use? Standard analytics tools have no answer history."
- **Solution:** "Quaeris maintains a complete audit log of every question asked — by whom, when, which data they accessed, which metrics were returned, whether they're supposed to see it. Searchable, timestamped, exportable for compliance workflows."

---

### 3.3 — The audit trail architecture (FeatureRow)
**Component:** Reuse `FeatureRow` (alternating text-right / image-left layout)

**Copy:**

**Step 1 — Question Capture**
- **Eyebrow:** "Step 01 — Question Capture"
- **Heading:** "Every question logged, exactly as asked."
- **Body:** "When a user types 'Revenue vs. plan by region,' Quaeris records: the exact text, the user's identity, the timestamp, their role/team, and the warehouse they're querying. The question enters the audit log immediately — before the agent even processes it. No guessing what was asked. No reconstructing intent from logs."
- **CTA:** "Learn about prompt audit"
- **CTA Href:** `/platform/governance` (internal)

**Step 2 — Query & Lineage**
- **Eyebrow:** "Step 02 — Query Translation & Lineage"
- **Heading:** "AI-to-SQL translation is visible and auditable."
- **Body:** "The agent translates the plain-language question into SQL against the semantic layer. Quaeris logs: the generated SQL, which semantic layer definitions were consulted, which business rules were applied, and the query execution time. If the agent needed to make assumptions (e.g., 'revenue' → the Booked Revenue metric, not Pipeline Revenue), those assumptions are logged and surfaced."
- **CTA:** "Explore the semantic layer"
- **CTA Href:** `/platform/semantic-layer` (internal)

**Step 3 — Data Access & Access Control**
- **Eyebrow:** "Step 03 — Access Control Enforcement"
- **Heading:** "Role policies enforced at query execution."
- **Body:** "Before the query runs, Quaeris evaluates the user's row-level security policies against the warehouse. The system logs: which rows the user requested, which rows their role permits, and whether the query was allowed or denied. If allowed, which row-level filters were applied. Every access decision is auditable — and compliant auditors can verify that a director-level user never saw frontline-employee data."
- **CTA:** "See access control in action"
- **CTA Href:** `/platform/access-control` (internal)

**Step 4 — Answer & Provenance**
- **Eyebrow:** "Step 04 — Answer Delivery & Provenance"
- **Heading:** "Results returned with full source citation."
- **Body:** "The agent returns the answer to the user. Quaeris logs: the result set, the execution time, the user's response (did they refine the query?), and a complete chain of custody. Every number in the answer is clickable — users can trace 'Revenue = $2.4M' back to the exact metric definition, the table query, the transformation rules, and the owner certification. Auditors can download the full provenance report for any answer."
- **CTA:** "View an audit report"
- **CTA Href:** `/resources/sample-audit-report` (data-placeholder)

---

### 3.4 — Live audit dashboard mockup (NEW: MetricDashboardMock)
**Component:** Reuse `MetricDashboardMock` (or variant) — an illustrative live audit log display

**Context:**
A full-width section showing an **audit log table/stream** with the following columns:
- **Timestamp** (2026-06-12T14:32:18Z)
- **User** (Sarah Chen · Head of Analytics)
- **Question** (Revenue vs. plan by region)
- **Status** ✓ Allowed / ✗ Denied
- **Metrics Used** (Booked Revenue, Plan Amount, Regional Sales Org)
- **Data Access** (Row filtering applied: Region IN ['US', 'EMEA'])
- **Time** (1.4s)

**Sample rows (real Quaeris voice, no made-up names):**
| Timestamp | User | Question | Status | Metrics | Data Access | Time |
|---|---|---|---|---|---|---|
| 2026-06-12 14:32:18 | [user-title-placeholder] | Revenue vs. plan by region | ✓ | Booked Revenue, Plan Amount, Regional Sales Org | Region IN ['US', 'EMEA'] | 1.4s |
| 2026-06-12 14:28:03 | [user-title-placeholder] | Commission accrual forecast | ✓ | Accrual Rate, Headcount Forecast | Department = 'Sales' | 2.1s |
| 2026-06-12 14:15:44 | [user-title-placeholder] | Churn by contract value | ✗ Denied | N/A | Access denied: Strategic Contracts restricted | — |
| 2026-06-12 14:12:09 | [user-title-placeholder] | Pipeline by stage and manager | ✓ | Pipeline Weighted, Stage Duration | Manager IN [own team] | 0.9s |
| 2026-06-12 14:09:55 | [user-title-placeholder] | Explain why MRR dropped YoY | ✓ | MRR, Expansion, Churn, Discount Rate | Warehouse filtering per role | 3.2s |

**Caption:** "Illustrative live audit log — for demonstration only. Real deployments log millions of interactions per month, all queryable and exportable."

**Interactive note:** (No functional interactivity on static page; this is a mockup showing Quaeris users what the internal audit log UI looks like.)

---

### 3.5 — Key audit capabilities (IconFeatureGrid)
**Component:** Reuse `IconFeatureGrid` (4–6 icon cards, 2-column on desktop)

**Copy:**

**Icon: Shield / Lock**  
**Title:** "Role-based access control"  
**Body:** "Every query enforces the user's role policies. Access decisions are logged. Users cannot see data their role forbids—enforced at query execution, not just the UI."

**Icon: Clock / History**  
**Title:** "Complete question history"  
**Body:** "Every question asked is logged with timestamp, user, intent, and outcome. Searchable audit log—compliance teams can answer 'Who asked about customer churn?' in seconds."

**Icon: Link / Chain**  
**Title:** "Metric-to-table lineage"  
**Body:** "Every answer traces back to metric definitions, business rules, source tables, and transformations. One click: see the full chain of custody for any number."

**Icon: CheckCircle / Verify**  
**Title:** "Proof of data access"  
**Body:** "Quaeris logs which specific rows each user accessed, which rows were filtered out, and why. Row-level security is auditable—not just a dashboard filter."

**Icon: FileText / Document**  
**Title:** "Exportable audit reports"  
**Body:** "Generate timestamped, signed audit reports for compliance workflows. SOX, HIPAA, EU AI Act—format the report to match your audit requirements."

**Icon: AlertCircle / Violation**  
**Title:** "Access denial logs"  
**Body:** "Denied queries are logged as thoroughly as allowed ones. Compliance teams see every attempt to access restricted data—and proof it was blocked."

---

### 3.6 — Use cases: Who needs audit trails (SegmentCards or new: UseCaseCards)
**Component:** Reuse `SegmentCards` (3–4 colored cards with icon, title, body, CTA)

**Copy:**

**Card 1 — Finance & Audit Teams**
- **Title:** "SOX Compliance & Financial Audits"
- **Body:** "Auditors need to trace every number in board materials back to source data. Quaeris gives you: question, assumption, metric, table, owner certification, access control. Satisfy auditors without blocking analytics velocity."
- **Icon:** `bar-chart`
- **CTA:** "Read the SOX guide" (href: `/resources/sox-ai-analytics-checklist` [data-placeholder])

**Card 2 — Data Governance Leaders**
- **Title:** "Metric Governance & Lineage"
- **Body:** "Data leaders own the semantic layer. Quaeris audit logs show you which metrics each question used, which business rules applied, and which users accessed sensitive metrics. Governance becomes visible, not theoretical."
- **Icon:** `git-branch`
- **CTA:** "Learn about semantic lineage" (href: `/platform/semantic-layer`)

**Card 3 — Chief Data Officers / Privacy Teams**
- **Title:** "Data Privacy & EU AI Act"
- **Body:** "EU AI Act requires audit trails for high-risk AI. GDPR requires data-access logging. Quaeris logs every query at the row level. Prove compliance with automated audit exports."
- **Icon:** `globe`
- **CTA:** "See the EU AI Act checklist" (href: `/resources/eu-ai-act-analytics-assessment` [data-placeholder])

**Card 4 — Healthcare & Insurance Compliance**
- **Title:** "HIPAA & Regulated Industry AI"
- **Body:** "Sensitive industries need to prove that AI agents respect access controls. Quaeris enforces role-based access at query time and logs every access attempt. Healthcare and insurance teams can deploy agentic AI without audit risk."
- **Icon:** `shield-check`
- **CTA:** "View the HIPAA readiness guide" (href: `/resources/hipaa-ai-analytics-guide` [data-placeholder])

---

### 3.7 — Comparison: Audit trail across BI platforms (NEW: ComparisonTable)
**Component:** NEW table component (or large EditorialBlock with inline markdown table)

**Context:** Show how Quaeris's audit trail compares to incumbent BI (Tableau, Power BI, Looker) and direct competitors (ThoughtSpot, Sigma, Domo).

**Table structure:**
| Capability | Quaeris | Tableau | Power BI | Looker | ThoughtSpot | Sigma | Domo |
|---|---|---|---|---|---|---|---|
| **Question logging** | Per-user, full text, timestamped | Dashboard usage only | Per-user, limited | Query audit limited | Search token logging | Basic activity log | Basic activity log |
| **Metric-to-table lineage** | ✓ Auto-surfaced per answer | Dashboard-level lineage | Model-level, not answer-level | LookML dependencies | Worksheet-level | Basic lineage | Basic lineage |
| **Row-level access enforcement** | ✓ Query-time enforcement | Filter-based (UI layer) | Model & RLS | LookML RLS | Search-token scoped | Dashboard-level | Access model-scoped |
| **AI reasoning logged** | ✓ SQL, assumptions, rules | N/A (no AI) | Copilot actions hidden | Conversational logs limited | Spotter reasoning opaque | Agent steps hidden | Domo.AI opaque |
| **Access denial audit trail** | ✓ Full logging | Not logged | Logged, limited | Not clearly logged | Not transparent | Not transparent | Not transparent |
| **Exportable compliance reports** | ✓ SOX/HIPAA/EU AI ready | Manual export only | Manual export only | Manual export only | Manual export only | Manual export only | Manual export only |
| **Warehouse-native logging** | ✓ Warehouse-native queries logged | Cloud-based, query-hidden | Cloud-based, hidden | Cloud-based, hidden | Elastic-based | Cloud-based, hidden | Cloud-based, hidden |

**Footnote:** "Comparison based on public documentation as of Q2 2026. Actual capabilities vary by version and deployment model. [data-placeholder: to be verified against current competitor docs]"

---

### 3.8 — FAQ: Audit trail specifics (FAQSection)
**Component:** Reuse `FAQSection` (Accordion component, 5–6 Q&As)

**Copy:**

**Q1: "How granular is the audit trail?"**  
A: "Every user action is logged: the exact question text, the user's identity, the timestamp down to milliseconds, their role/team context, which warehouse they queried, the generated SQL, which metrics were accessed, and the result. If access was denied, that's logged too. Logs are immutable and timestamped."

**Q2: "Can I export audit logs for my SOX auditor?"**  
A: "Yes. Quaeris provides an audit export tool that generates compliance-ready reports: full query history, access decisions, metric lineage, denied attempts, and user identity. Export as PDF, CSV, or in formats your auditor specifies. Reports are timestamped and signed."

**Q3: "How long are audit logs retained?"**  
A: "Audit retention policies are configurable. Enterprise deployments typically retain 1–2 years online; older logs can be archived to cold storage per your compliance requirements. [data-placeholder: verify retention policy details with product team]"

**Q4: "Can users delete their questions from the audit log?"**  
A: "No. Audit logs are immutable once written. Users cannot delete or modify their questions or access history. Only admins with explicit audit-log governance permissions can export or filter logs—and those administrative actions are themselves logged."

**Q5: "Does Quaeris log if someone tried to access data they're not permitted to see?"**  
A: "Yes. Every access denial is logged with the same level of detail as allowed queries: who tried, what they asked for, when, and why the request was denied (which role policy blocked it). This is essential for security audits and detecting attempted access violations."

**Q6: "How is the audit log connected to the semantic layer?"**  
A: "When a query runs, Quaeris logs: the plain-language question, the semantic layer version used (with version timestamp), which metrics were queried, which business rules were applied. Auditors can trace any answer back to the exact semantic-layer snapshot that produced it—useful if metric definitions change."

---

### 3.9 — CTA Band (CTABand)
**Component:** Reuse `CTABand`

**Copy:**
- **Eyebrow:** "Demonstrate to your auditors"
- **Heading:** "See your audit trail in action."
- **Subcopy:** "Book a 20-minute demo. We'll walk through a sample audit log, show you how a compliant query flows through access control, lineage, and retention—then answer your governance questions. No fluff, all answers."
- **Primary CTA:** "Schedule audit demo"
- **Secondary CTA:** "Download the audit guide" (href: `/resources/quaeris-audit-trail-guide` [data-placeholder])

---

### 3.10 — Newsletter signup (NewsletterBlock)
**Component:** Reuse `NewsletterBlock`

**Copy:**
- **Eyebrow:** "Stay updated on governance"
- **Headline:** "Weekly insights on governed AI analytics."
- **Body:** "Every Thursday: practical tips on audit-ready AI, semantic governance, and compliance-first analytics architectures. No hype, no fluff—just what works."
- **Consent prefix:** "No spam. Unsubscribe any time. We handle your data per our"
- **Privacy label:** "Privacy Policy"

---

## 4. Proof & data points

All claims in this spec are grounded in the research context or marked [data-placeholder].

### Founded claims (from research context):
- **Category ownership:** "Audit trail for prompts + agent steps — No vendor publishes a prompt-level audit story" (Whitespace slot #5, research context §4).
- **Competitive wedge:** Governed agentic analytics requires "auditable" + "agentic" + "governed" — separate vendors own 2 out of 3; Quaeris is positioned to own all three (research context §3.1–3.5).
- **Keyword strength:** "AI analytics audit trail" is Medium volume, 25 KD, high AI Cite signal. "SOX compliance AI analytics" is low-Med volume, 30 KD, strong regulatory tailwind (research context §6.1).
- **Compliant industries:** Finance, Insurance, Healthcare, Regulated Manufacturing are six core target industries with explicit compliance obligations (research context §1, target industries).

### Data placeholders (must be filled pre-launch):
- Sample audit report download URL and format
- SOX AI Analytics Checklist URL
- EU AI Act Analytics Assessment tool URL
- HIPAA AI Analytics Readiness Guide URL
- Audit log retention policy details (product team to confirm: 1–2 years online, archival terms)
- Competitive audit-trail comparison table — verify against current Tableau, Power BI, Looker, ThoughtSpot, Sigma, Domo docs
- Case studies showing actual audit trail deployment (currently anonymized; research context §1 notes six case studies exist; one company (E4E, Courtney Ramey) is named)

---

## 5. Internal links

**Links from this page to other routes:**

| Anchor text | Destination | Context |
|---|---|---|
| "Book a Demo" | `/contact` | Primary CTA (x3: hero, CTA band, FAQ mini-card) |
| "See how it works" | `/platform/governance` | Hero secondary CTA — broader governance context |
| "Learn about prompt audit" | `/platform/governance` | Step 1 feature row |
| "Explore the semantic layer" | `/platform/semantic-layer` | Step 2 feature row |
| "See access control in action" | `/platform/access-control` | Step 3 feature row |
| "View an audit report" | `/resources/sample-audit-report` | Step 4 feature row [data-placeholder] |
| "Read the SOX guide" | `/resources/sox-ai-analytics-checklist` | Use case card 1 [data-placeholder] |
| "Learn about semantic lineage" | `/platform/semantic-layer` | Use case card 2 |
| "See the EU AI Act checklist" | `/resources/eu-ai-act-analytics-assessment` | Use case card 3 [data-placeholder] |
| "View the HIPAA readiness guide" | `/resources/hipaa-ai-analytics-guide` | Use case card 4 [data-placeholder] |
| "Download the audit guide" | `/resources/quaeris-audit-trail-guide` | CTA band secondary [data-placeholder] |

**Inbound links to this page (from other routes):**
- `/platform` nav: "Audit Logs" link (already in config.ts Platform mega-menu, "Security & Control" group, `href: "/platform/audit"`)
- `/compare/*` pages: comparison table row "Exportable audit reports" links to `/platform/audit`
- Blog posts on SOX, HIPAA, EU AI Act governance: link to this page as proof of audit capability
- `/resources` hub: link from "Trust" section

---

## 6. Open questions

**For product / compliance:**
1. **Audit log retention policy** — How many months/years are logs retained online vs. archived? Does the policy differ by customer SLA? [data-placeholder]
2. **Compliance-ready export formats** — Does Quaeris export audit reports in SOX-audit-approved formats? HIPAA? EU AI Act? What signature/validation methods are supported? [data-placeholder]
3. **Row-level access logging granularity** — When a query is denied due to RLS, what exactly is logged? The full query? Just the intent? Metadata only? [data-placeholder]
4. **Semantic layer versioning in audit** — If the semantic layer is updated (metric definition changes), does the audit trail show which version was active when each query ran? [data-placeholder]
5. **Real case study availability** — Can we de-anonymize at least one case study that shows audit trail deployment in a regulated industry? (Research context §1 notes E4E / Courtney Ramey as the only named customer.)

**For design / content:**
1. **Audit dashboard mockup fidelity** — Should the sample audit log table be fully interactive (filterable, sortable)? Or static mockup? Recommend: static mockup with hover states.
2. **Competitor comparison depth** — Table shows 7 competitors. Should we add footnotes/citations for each row, or keep it clean and simple? Recommend: clean table, add footnote linking to full audit methodology doc.
3. **Use case cards ordering** — Should SOX/Finance lead (most regulated, fastest adopter), or should we lead with governance/CDO (broader appeal)? Current order: Finance → Governance → Privacy → Healthcare. Consider reordering to: Governance → Finance → Privacy → Healthcare (broader to niche).

---

## 7. Implementation notes

### Component mapping:
- Hero: `SectionHeader` (existing)
- Problems: `ProblemSolutionCards` (existing — verify Quaeris styling)
- Four-step architecture: `FeatureRow` (existing — x4 blocks, alternating layout)
- Live audit mockup: `MetricDashboardMock` or custom variant
- Capabilities grid: `IconFeatureGrid` (existing)
- Use case cards: `SegmentCards` (existing) or new `UseCaseCards` if styling differs
- Comparison table: NEW table component or markdown table in `EditorialBlock`
- FAQ: `FAQSection` wrapping `Accordion` (existing)
- CTA: `CTABand` (existing)
- Newsletter: `NewsletterBlock` (existing)

### Route structure:
- Page file: `/web/src/app/(main)/platform/audit/page.tsx` (follows existing pattern)
- Uses `@brand/config` for copy, CTAs, and brand metadata
- Exports `metadata` for title/meta desc (pulled from research context SEO section)
- Imports all reused components from `@/components/ui` and `@/components/home`

### Styling notes:
- Quaeris tokens: accent `#8C20A4`, ink `#200123`, soft lavender surfaces `#FAF8FF`, body text Inter 16px, headings Roboto 400/500/800
- CTA buttons: gradient bg, 10px radius (tokens: `--cta-bg`, `--radius-cta`)
- Section spacing: 64px between major blocks (existing pattern)
- Table styling: subtle border `#ECDCF0`, hover on rows
- No custom animations required; scroll reveals and subtle transitions per existing site motion

### SEO implementation:
- Title, meta desc from research context §2 above
- H1: "Every question. Every answer. Full audit trail." (hero heading)
- H2s: "The problem: Why audit trails matter" → four H3s (problem titles)  
         "The audit trail architecture" → four H3s (step titles)  
         "Key audit capabilities"  
         "Use cases: Who needs audit trails"  
         "Comparison: Audit trail across BI platforms"  
         "FAQ: Audit trail specifics"
- Schema: FAQPage (for FAQ section), SoftwareApplication (for platform-wide schema), Product (for comparison table if it's a structured list)
- Internal links: use descriptive anchor text matching keyword intent
- Image alts: required for all illustrations (mockup captions, feature row images)

---

## 8. Copy voice & tone

**Quaeris voice (per research context §1):** Confident, precise, governance-first, zero hype-fluff. No "magic," no "revolutionary," no "transform your business." Instead: "every step," "auditable," "traceable," "enforced," "logged."

**Examples:**
- ✓ "Every step — from question to metric to warehouse — is logged, traceable, and auditable."
- ✗ "Magical AI that transforms your governance posture."
- ✓ "Role policies are applied when the agent executes — not when the user views the result."
- ✗ "Unlock the power of governance."
- ✓ "Click any number and see the full chain."
- ✗ "Revolutionary transparency."

All copy in this spec adheres to this voice.

---

## 9. Visual reference

Refer to the Quaeris Brand Fork Design Spec (2026-06-12):
- Palette: `#8C20A4` accent, `#200123` ink, `#FAF8FF` canvas bg, `#F9F5FF` warm/section bg, `#ECDCF0` borders
- Type: Roboto 48/40/20 (headings), Inter 16/14 (body)
- Buttons: gradient CTAs with 10px radius
- Spacing: 64px between sections, 24px between subsections
- No custom visual treatments; inherit from existing site patterns

---

## 10. Success metrics

Once live, measure:
- **Organic traffic to /platform/audit:** Baseline month 1, target 15% of total `/platform/*` traffic by month 3
- **Keyword rankings:** Track "AI analytics audit trail," "governed analytics platform," "SOX compliance AI analytics" — target page 1–2 ranking within 90 days (currently unranked as route doesn't exist)
- **Demo requests from this page:** Tag inbound demo form submissions with `/platform/audit` source; target 10+ per month by month 2
- **Compliance buyer engagement:** In CRM, tag inbound leads from compliance/audit/governance roles; track conversion funnel
- **Internal linking clicks:** Monitor which CTA receives highest click-through (audit guide vs. demo vs. semantic layer link) to inform future copy updates
- **Blog link-backs:** Expect audit-trail page to be cited in SOX, HIPAA, EU AI Act blog posts — monitor backlinks
- **FAQ schema impressions:** Once FAQPage schema is live, monitor Google Search Console for "People also ask" card impressions

---

**Spec complete. Ready for handoff to implementation team.**
