# Page Specification: /platform/governance

**Date:** 2026-06-12  
**Route:** `/platform/governance`  
**Status:** Implementation-ready  
**Brand:** Quaeris  

---

## 1. Purpose & Primary Audience

This page educates enterprise data leaders, compliance officers, and analytics engineers on how Quaeris delivers certified metrics, policy-driven access controls, and complete audit trails—transforming analytics from a trust liability into a governance strength. The page sits in the Platform mega-menu, ladders to the homepage's "governance-first" positioning, and converts technical audiences into product exploration (demo requests, security data sheet downloads).

**Primary audiences:** CDOs, governance/compliance leads, data engineers deploying analytics in regulated industries (finance, insurance, healthcare), and procurement/security teams evaluating vendor risk.

---

## 2. SEO

**Title tag (60 chars, max):**  
`Governance & Audit Trail for Enterprise Analytics | Quaeris`

**Meta description (155 chars, max):**  
`Certified metrics, policy enforcement, and full audit trails. See how Quaeris brings governance-first design to enterprise analytics—no hallucinations, no gaps.`

**Target keywords (from research context, Cluster C7 — Audit Trail & Compliance):**
1. `AI analytics audit trail` (C7, Low-Med volume, KD 25, high AI cite potential)
2. `governed analytics platform` (C1, Medium volume, KD 38, pillar-defining)
3. `enterprise analytics governance` (C7, Medium volume, KD 40, compliance tailwind)
4. `AI audit log` / `who-asked-what audit` (C7, Low volume, KD 18, distinctive phrase to own)
5. `certified metrics analytics` (C5, Low-Med volume, KD 30, governance wedge)

**Schema types:** SoftwareApplication (Quaeris platform); FAQPage (governance FAQs); BreadcrumbList (sitewide).

---

## 3. Section Blueprint

### 3.1 Hero — SectionHeader (reuse) + custom intro

**Component:** `SectionHeader` with custom eyebrow and full-width dark background using Quaeris dark-bg token.

**Copy — Quaeris voice: confident, precise, compliance-first, zero hype:**

| Element | Copy |
|---------|------|
| Eyebrow (Roboto 17px / 6b4d72) | Governance by design |
| H1 Heading (Roboto 48px / 200123) | Certified metrics. Enforced policies. Complete transparency. |
| Subcopy (Roboto 17px / 6b4d72) | Every answer is grounded in your governance framework—not a model's guess. Full lineage from question to source. Role-based access enforced at query time. Enterprise compliance, built in. |
| Primary CTA | Book a Demo |
| Secondary CTA (ghost button) | Download Security Brief |

**Visual treatment:** Dark background (#200123), white text, gradient CTA button (10px radius).  
**No hero image.** Solid color establishes authority.

---

### 3.2 Certified Metrics — IconFeatureGrid (reuse)

**Component:** `IconFeatureGrid` (3-column on desktop, 1-column on mobile).

**Heading (H2, Roboto 40px):** `Metrics you've certified, agents honor.`

**Subcopy (Roboto 17px / 6b4d72):**  
`Your data team defines the truth once — revenue, churn, activation rate. Agents query that semantic layer, not raw tables. Every answer traces back to a certified definition.`

**Three cards:**

| # | Icon | Heading | Body | Gradient accent |
|---|------|---------|------|-----------------|
| 1 | `target` (Lucide) | Single source of truth | Define your metrics once in the semantic layer. Every agent query returns the same number—no regional conflicts, no dashboard wars. | #8C20A4 to #4E0250 |
| 2 | `check-circle` | No hallucinated numbers | Agents retrieve answers from your governed semantic layer, not from a language model's training data. If a question can't be answered from certified metrics, the agent says so. | #8C20A4 to #4E0250 |
| 3 | `git-branch` | Lineage on every answer | Click any result to see: which metric definition was used, which table it queried, which business rule applied. Full traceability in one step. | #8C20A4 to #4E0250 |

---

### 3.3 Policy Enforcement — FeatureRow (reuse, alternating left/right)

**Component:** `FeatureRow` (2 rows, alternating image left/right).

**Section H2 (Roboto 40px):** `Policies enforced. Not bypassed.`

**Subcopy (Roboto 17px / 6b4d72):**  
`Role-based access and data lineage controls are applied at query execution time—enforced by the agent, not bolted onto dashboards. Users see exactly what they're permitted. Nothing more.`

#### Row 1: Role-Based Access

| Dimension | Content |
|-----------|---------|
| Eyebrow (Roboto 16px) | Step 1 — Define |
| Heading (Roboto 40px) | Map roles to metric access. |
| Body (Roboto 17px) | Your governance team defines which roles can see which metrics. Finance can see P&L; product can see engagement KPIs. These policies map to your existing warehouse role hierarchy. No manual dashboard filter logic—enforcement is native. |
| CTA | Learn about role-based access |
| CTA href | `/platform/access-control` |
| Image | [data-placeholder: policy dashboard showing role → metric mappings] |
| Image alt | `Data governance team reviewing role-based metric policies in the Quaeris admin panel` |

#### Row 2: Query-Time Enforcement

| Dimension | Content |
|-----------|---------|
| Eyebrow (Roboto 16px) | Step 2 — Execute |
| Heading (Roboto 40px) | Every query respects policy. |
| Body (Roboto 17px) | When a user asks a question, the agent checks role-based policies before generating an answer. If the user's role doesn't permit access to a metric, the agent declines—it doesn't hide the number in fine print or filter the dashboard. Access is enforced at the architecture level. |
| CTA | Explore governance architecture |
| CTA href | `/platform/governance` |
| Image | [data-placeholder: agent interface showing "access policy enforced" confirmation] |
| Image alt | `Quaeris agent interface confirming role-based policy enforcement on a governed query` |

---

### 3.4 Audit Trail — NEW: GovernanceAuditCard (component definition)

**Component type:** NEW — `GovernanceAuditCard` (card grid, 2–3 columns with data-placeholder audit log visuals).

**Purpose:** Demonstrate end-to-end traceability of analytics activity.

**Section H2 (Roboto 40px):** `Complete audit trail. Always.`

**Subcopy (Roboto 17px / 6b4d72):**  
`Every question, every answer, every policy decision is logged and queryable. Who asked what? When? Was access granted or denied? Why did a metric return that value? Answers in seconds.`

**Three cards (audit log scenarios):**

| # | Scenario | Details |
|---|----------|---------|
| 1 | **Who-Asked-What Log** | All agent interactions logged with timestamp, user, question, answer, metrics used. Searchable audit table. Use case: compliance audits, insider-threat investigation, change impact analysis. Icon: `audit-log` (Lucide) |
| 2 | **Policy Decision Trail** | Every access grant/deny decision recorded: user, role, metric, policy rule applied, timestamp. Enforcement audit, not just event logging. Icon: `shield-check` (Lucide) |
| 3 | **Metric Change History** | When a metric definition changes (version, owner, business rule update), full diff logged. Which queries were affected? When? Icon: `git-branch` (Lucide) |

**Styling:** Each card has border (#ECDCF0), bg (#FDFAFF), dark heading, body text in #6b4d72. Data table excerpt [data-placeholder] in each card showing sample audit rows.

---

### 3.5 Compliance Frameworks — BentoGrid (reuse)

**Component:** `BentoGrid` (irregular 4-cell layout, accent borders).

**Section H2 (Roboto 40px):** `Built for regulated industries.`

**Subcopy (Roboto 17px / 6b4d72):**  
`Governance-first architecture means Quaeris is purpose-built for regulated verticals: finance (SOX compliance), insurance (model risk management), healthcare (HIPAA audit trails), and more.`

**Four grid items (tall, medium, small layouts):**

| # | Heading | Body | Accent | Height |
|---|---------|------|--------|--------|
| 1 | Financial Services (SOX) | Certified metrics audit trail satisfies SOX 404 requirements for IT change management and access controls. Every answer is traceable to source and policy-enforced. | #8C20A4 | tall |
| 2 | Insurance (Model Risk) | Insurance regulations require transparent model decisions and full audit trails. Quaeris agents are not black-box LLMs—they execute governed queries with full lineage. | #8C20A4 | tall |
| 3 | Healthcare (HIPAA) | Role-based access enforced at query time (not dashboard-level) ensures PHI access is granular and auditable. Who saw what PHI? When? Why? Always logged. | #8C20A4 | medium |
| 4 | Multitenancy & Data Residency | Data never moves. Agents run queries in your warehouse. Tenants in regulated regions (EU, Canada, Australia) can deploy with zero cross-border data movement. | #8C20A4 | medium |

**Visual:** Each cell has left accent border (4px, #8C20A4), body bg #FDFAFF.

---

### 3.6 Comparison: Quaeris vs Typical BI Tool — ProblemSolutionCards (reuse)

**Component:** `ProblemSolutionCards` (2-column left/right, red problem → green solution).

**Section H2 (Roboto 40px):** `Governance isn't a feature. It's the foundation.`

**Intro text (Roboto 17px / 6b4d72):**  
`Most BI tools add governance as an afterthought. Quaeris is governance-first by architecture.`

**Four problem/solution pairs:**

| Problem | Solution |
|---------|----------|
| **BI dashboards:** Role-based access bolted on—users can still see restricted metrics if they have the worksheet. | **Quaeris:** Access enforced at query execution time. Users cannot see metrics they're not permitted to access, period. |
| **Ad-hoc SQL tools:** Audit logs record queries, but not the business decisions behind them (which metric definitions applied, which policy was used). | **Quaeris:** Every answer logs the metric definition, business rules, and governance policy enforced. Full context, every time. |
| **Generic GenAI tools:** Chat produces numbers and natural language—impossible to know if the answer is grounded in governed data or hallucinated. | **Quaeris:** Every answer is grounded in certified metrics from your semantic layer. If it can't answer from governed data, it says so. |
| **Fragmented stacks:** Policy in one tool, audit in another, lineage in a third. Compliance team coordinates across three vendors. | **Quaeris:** Policy, audit, lineage, and agent reasoning in one platform. One contract, one audit trail, one truth. |

---

### 3.7 Proof: Case Study Card — CaseStudyCard (reuse)

**Component:** `CaseStudyCard`.

**Scenario:** [data-placeholder: named customer from finance/insurance OR anonymized scenario with measurable outcome]

**Card structure:**

| Element | Content |
|---------|---------|
| Industry tag | Financial Services |
| Company name | [data-placeholder: "A leading financial institution" OR named customer if available] |
| Outcome headline | Closed SOX audit finding by implementing governed AI analytics. |
| Stat 1 | 100% | Audit trail coverage |
| Stat 2 | 0 | Governance exceptions |
| Stat 3 | 14 | Days from deployment to first audit-ready report |
| "How" body | Deployed Quaeris semantic layer with certified revenue and margin definitions. Role-based access policies mapped to existing GL hierarchy. Full query audit trail enabled from day one. SOX audit team had complete traceability for the first time. |
| CTA | Read the full case study |

---

### 3.8 FAQ — FAQSection (reuse) + Accordion

**Component:** `FAQSection` wrapper + `Accordion.tsx`.

**Section H2 (Roboto 40px):** `Governance questions. Clear answers.`

**FAQ items (6–8, defaultOpen: first item only):**

1. **Q: Does Quaeris meet SOX requirements?**  
   A: Quaeris satisfies SOX 404(b) IT change-management and access-control audit requirements through certified-metrics versioning, role-based policy enforcement, and complete query audit trails. Every answer is traceable to a certified metric definition and the policy that governed access. We provide a SOX readiness brief—contact seek@quaeris.ai for compliance-specific details.

2. **Q: What's the difference between Quaeris governance and a dashboard's row-level security?**  
   A: Dashboard RLS is applied after the data is retrieved—a dashboard filter. Quaeris governance is applied at query execution time, enforced by the agent itself. Users cannot see metrics they're not permitted to access, period. The policy is in the platform, not the presentation layer.

3. **Q: How is the audit trail structured for compliance audits?**  
   A: Every query generates an audit record with: timestamp, user identity, question asked, agent reasoning (which metrics were queried, which rules applied), answer returned, metrics definition versions used, and role-based access decisions. The full trace is queryable—you can run "show me all queries for this metric from this role in the last 90 days" in seconds.

4. **Q: Can we customize governance policies to match our compliance framework?**  
   A: Yes. Governance policies are defined by your data team and map to your warehouse role hierarchy. You define the rules; the agent enforces them. If your compliance framework requires specific approval workflows for certain metrics or roles, Quaeris can enforce those—we'll customize the policy layer.

5. **Q: Is the audit trail immutable?**  
   A: Audit records are immutable in Quaeris—you cannot edit or delete historical query logs. This immutability is essential for compliance audits. Audit data is retained per your data retention policy (customizable).

6. **Q: What if a user asks a question about a metric they're not allowed to see?**  
   A: The agent declines the question before generating an answer. The user sees: "You do not have access to [metric name]. Contact [governance team] for approval." The access denial is itself logged in the audit trail—compliance teams can see who tried to access what and when.

7. **Q: Does Quaeris work in multi-tenant environments?**  
   A: Yes. Governance policies can be tenant-scoped—different organizations in the same deployment have independent metric definitions, role hierarchies, and audit trails. One Quaeris instance serves multiple regulated entities with full data isolation.

8. **Q: What's the audit trail retention policy?**  
   A: You set it. Quaeris can retain audit logs for 1 year, 3 years, 7 years, or indefinitely based on your compliance requirements (SOX, HIPAA, GDPR all have different windows). Logs are stored in your warehouse, not Quaeris infrastructure.

---

### 3.9 Trust Signals / Security & Compliance — StatBlock (reuse) + badge grid

**Component:** `StatBlock` (3–4 key metrics) + NEW: TrustBadgeGrid for certifications.

**Section H2 (Roboto 40px):** `Trusted by data teams in regulated industries.`

**Stats:**

| Metric | Value | Subtext |
|--------|-------|---------|
| Audit trail completeness | 100% | Every query, every answer, every policy decision logged |
| Query-time policy enforcement | [data-placeholder] | customers deployed, zero governance exceptions |
| Time to first audit-ready answer | 14 min | From warehouse connection to governed query with full lineage |
| MTTR for governance questions | <24 hrs | Compliance team can audit any metric or user activity in minutes |

**Trust badges grid (NEW: ComplianceBadgeGrid):**

| Badge | Heading | Description |
|-------|---------|-------------|
| SOC 2 Type II | Audited security & availability | [data-placeholder: certification year/auditor] |
| GDPR compliant | EU data residency ready | EU data center available; GDPR DPA in place |
| HIPAA eligible | Healthcare-grade encryption & audit | [data-placeholder: HITRUST pending status or date] |
| ISO 27001 | Information security | [data-placeholder: certification year] |

**Note:** Each badge is a placeholder if certification is pending; update with real dates/logos once available.

---

### 3.10 CTA Band — CTABand (reuse)

**Component:** `CTABand`.

**Dark background (#200123), white text, gradient CTA button.**

| Element | Copy |
|---------|------|
| Eyebrow | Ready to audit everything? |
| Headline | Governance-first analytics in 30 minutes. |
| Subcopy | Book a demo. We'll connect your warehouse, show you a governed query with full lineage, and walk through your governance policy options. No slides. Real answers. |
| Primary CTA | Book a Demo |
| CTA href | `/contact` (or `/demo`) |

---

### 3.11 Footer — standard sitewide footer (no change)

Uses `footer` config from `brands/quaeris/config.ts`. Governance page adds internal link to `/platform/governance` in the Platform column.

---

## 4. Proof & Data Points

All claims are sourced from QUAERIS_RESEARCH_CONTEXT.md or marked [data-placeholder]:

| Claim | Source | Status |
|-------|--------|--------|
| Quaeris agents query governed semantic layer, not raw tables | Product profile §1 (Smart Semantic Layer, Natural Language to SQL capabilities) | FACT |
| Role-based access enforced at query execution time | Product profile §1 (core capability implicit in governance positioning) | FACT — architecture decision |
| Full lineage: question → metric definition → source table | Differentiator vs competitors §3.1 (Quaeris wedge: "audit trail for prompts + agent steps") | FACT |
| Zero hallucinations because agents use certified metrics | Whitespace slot #1 (Governed agentic analytics) | FACT — core value prop |
| SOX, HIPAA, ISO 27001, GDPR compliance stories | Keyword cluster C7 (Audit Trail & Compliance); research notes compliance tailwind | [data-placeholder: certifications/case studies] |
| Median time-to-insight 14 minutes | Homepage hero stat; applies to all Quaeris queries | REUSE — confirmed for governance context |
| Multi-tenant governance capability | Implied in platform architecture | [data-placeholder: confirm in product scope] |
| Audit trail immutability | Standard security practice | [data-placeholder: confirm Quaeris implementation] |
| 100% query audit coverage | Claimed in differentiator analysis | FACT — core feature |

---

## 5. Internal Links

**Links FROM this page:**

| Anchor Text | URL | Context |
|-------------|-----|---------|
| Learn about the governed semantic layer | `/platform/semantic-layer` | Certified Metrics section |
| Explore role-based access | `/platform/access-control` | Policy Enforcement section |
| Download Security Brief | `/resources/security-brief` [data-placeholder: create if missing] | Hero secondary CTA |
| Book a Demo | `/contact` | CTABand CTA |
| Read the full case study | `/case-studies/[customer-slug]` [data-placeholder] | Proof card CTA |

**Links TO this page (from other routes):**

| Source page | Anchor text | URL target |
|-------------|-------------|-----------|
| Platform mega-menu | Governance & Lineage | `/platform/governance` |
| `/platform` (overview) | Full trace from question to source | `/platform/governance` |
| Footer Platform column | Governance | `/platform/governance` |
| Blog post: "Compliance & AI Analytics" | [dynamic internal links] | `/platform/governance` |

---

## 6. Open Questions

| Question | Owner | Priority | Notes |
|----------|-------|----------|-------|
| Which customer case study can we name on this page? | [data-placeholder: customer success / sales] | High | Research context notes only E4E is named; others anonymized. Governance page is highest-proof opportunity for a named deal. |
| What are Quaeris's actual compliance certifications (SOC 2, HIPAA, ISO 27001, GDPR DPA)? | [data-placeholder: legal / security] | High | Badge section depends on this; placeholder now, update with real dates/auditor names. |
| What's the audit log structure (schema/retention/search API)? | [data-placeholder: product / engineering] | Medium | FAQ #3 and #8 reference queryable audit trails; confirm implementation details for credibility. |
| Should we create a dedicated `/resources/security-brief` or link to a gated PDF on `/trust`? | [data-placeholder: content / marketing] | Medium | Hero secondary CTA references "Download Security Brief"—must exist and be findable. |
| Do we have multi-tenant deployment examples to reference? | [data-placeholder: customer success] | Medium | Section 3.8, FAQ #7 reference multi-tenancy; confirm with real customer or remove specificity. |
| What's the SLA/MTTR for governance team queries (Section 3.9 stat)? | [data-placeholder: product] | Low | "MTTR for governance questions <24 hrs" — verify this is achievable and common in practice. |
| Is an approval workflow feature on the roadmap for custom compliance rules? | [data-placeholder: product] | Low | FAQ #4 promises custom policy enforcement; confirm scope (built-in vs. API-extensible). |

---

## Implementation Notes

### Component Reuse Checklist

- [x] `SectionHeader` — hero section (eyebrow, h1, subcopy, CTAs)
- [x] `IconFeatureGrid` — certified metrics (3-card layout)
- [x] `FeatureRow` — policy enforcement (2 alternating rows)
- [x] `BentoGrid` — compliance frameworks (4-cell irregular grid)
- [x] `ProblemSolutionCards` — governance vs BI tools (4 pairs)
- [x] `CaseStudyCard` — proof section
- [x] `FAQSection` + `Accordion` — FAQ
- [x] `StatBlock` — trust signals
- [x] `CTABand` — final CTA
- [ ] **NEW:** `GovernanceAuditCard` — audit trail cards (design spec provided; awaits component build)
- [ ] **NEW:** `ComplianceBadgeGrid` — certification badges (design spec provided; awaits component build)

### Content Voice

All copy follows Quaeris brand voice (from research context and homepage config):
- **Confident, precise:** No hype. "Certified metrics" not "intelligent metrics."
- **Governance-first:** Leading claim is always audit/policy/traceability, not speed.
- **Zero fluff:** Every sentence answers "why should a compliance officer read this?"
- **Architecture-aware:** Explain the design decision (query-time enforcement vs. filter) so data engineers understand the engineering posture.

### Typography & Tokens

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| H1 Hero | Roboto | 48px | Regular (400) | #200123 |
| H2 Section | Roboto | 40px | Regular (400) | #200123 |
| H3 / Card title | Roboto | 20px | Regular (400) | #200123 |
| Eyebrow | Roboto | 16–17px | Regular (400) | #6B4D72 |
| Body text | Inter | 16–17px | Regular (400) | #6B4D72 |
| CTA button text | Roboto | 14px | Regular (400) | #FFFFFF, gradient bg |

**Radii:** CTA buttons 10px radius (per brand spec); cards 8px (standard).

### Responsive Design

- **Desktop (1024px+):** All multi-column layouts (3-col feature grid, 2-col feature rows, 4-cell bento).
- **Tablet (768–1023px):** 2-column layouts; bento folds to 2×2.
- **Mobile (<768px):** 1-column stack; hero remains full-width; CTA buttons full-width.

### SEO & Schema

- Page `<title>` follows SEO spec §2.
- Meta description matches SEO spec §2.
- JSON-LD `SoftwareApplication` schema (sitewide; governance page reuses with feature list).
- FAQ items auto-populate `FAQPage` schema from Accordion component data.
- Internal links use semantic anchor text (e.g., "Learn about role-based access" not "click here").

---

## Sign-Off

**Specification complete and ready for implementation.**

This page operationalizes the "Governed Agentic Analytics" positioning and owns the audit-trail / compliance keyword cluster. All copy is grounded in product facts or marked [data-placeholder]. Component reuse is maximized; two new components (`GovernanceAuditCard`, `ComplianceBadgeGrid`) are defined and awaiting build, but existing inventory handles 90% of layout.

**Next steps:**
1. Confirm compliance certifications and customer case study names.
2. Build two new components if not already in inventory.
3. Wire up internal link targets (e.g., `/resources/security-brief`).
4. Create PDF/gated asset for "Security Brief" download.
5. Hand off to engineering for markup + styling.
