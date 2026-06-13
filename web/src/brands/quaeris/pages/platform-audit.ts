import type { PlatformAuditPageContent } from "@/config/page-types/platform-audit";

export const platformAuditPage = {
  meta: {
    title: "AI Analytics Audit Trail | Quaeris Platform",
    description:
      "Track every question, query, and answer. Full audit trail from user to metric to warehouse—governance by design. Quaeris makes AI analytics auditable.",
  },

  // ── 3.1 — Hero ──────────────────────────────────────────────
  hero: {
    eyebrow: "Governance by design",
    h1: "Every question. Every answer. Full audit trail.",
    subcopy:
      "Business users ask in plain language. Agents query the semantic layer. Role-based access is enforced. And every step — from question to metric to warehouse — is logged, traceable, and auditable. Quaeris makes AI analytics transparent.",
    primaryCta: { label: "Schedule an audit demo", href: "/contact" },
    secondaryCta: { label: "See how it works", href: "/platform/governance" },
  },

  // ── 3.2 — The problem: Why audit trails matter ──────────────
  problems: {
    intro: {
      eyebrow: "The problem",
      heading: "The problem: Why audit trails matter",
    },
    cards: [
      {
        index: "01",
        title: "AI Black Box",
        problem:
          "Most AI analytics platforms treat agents as black boxes. You see an answer — but not the reasoning, not which metrics were queried, not whether the user had access to that data.",
        fixLabel: "Quaeris",
        fixBody:
          "Quaeris logs every agent step. The system records which business rules were applied, which semantic layer definitions were used, and whether row-level access controls permitted the result. No hidden reasoning.",
      },
      {
        index: "02",
        title: "Orphaned Metrics",
        problem:
          "Compliance teams need proof of which numbers came from which tables, which business rules generated them, and who approved those rules. Standard BI tools show a dashboard — not the provenance.",
        fixLabel: "Quaeris",
        fixBody:
          "Every Quaeris answer surface the exact metric definitions it used. Traces back to the semantic layer version, the data table, the transformation rules, and the owner approval. Click any number and see the full chain.",
      },
      {
        index: "03",
        title: "Access Control Theater",
        problem:
          "Role-based access on dashboards is a filter — a UI layer. Executives can screenshot restricted data or pivot on unintended dimensions. Governance theater doesn't satisfy auditors.",
        fixLabel: "Quaeris",
        fixBody:
          "Quaeris enforces access at query time. Role policies are applied when the agent executes — not when the user views the result. Users cannot see data their role forbids, period. And every query attempt is logged.",
      },
      {
        index: "04",
        title: "Who Asked What?",
        problem:
          "When a number in the boardroom turns out to be wrong, compliance needs to know: who asked? when? with what intent? which model assumptions did they use? Standard analytics tools have no answer history.",
        fixLabel: "Quaeris",
        fixBody:
          "Quaeris maintains a complete audit log of every question asked — by whom, when, which data they accessed, which metrics were returned, whether they're supposed to see it. Searchable, timestamped, exportable for compliance workflows.",
      },
    ],
  },

  // ── 3.3 — The audit trail architecture (FeatureRow ×4) ──────
  architecture: {
    intro: {
      eyebrow: "How it works",
      heading: "The audit trail architecture",
    },
    steps: [
      {
        eyebrow: "Step 01 — Question Capture",
        heading: "Every question logged, exactly as asked.",
        body: "When a user types 'Revenue vs. plan by region,' Quaeris records: the exact text, the user's identity, the timestamp, their role/team, and the warehouse they're querying. The question enters the audit log immediately — before the agent even processes it. No guessing what was asked. No reconstructing intent from logs.",
        cta: { label: "Learn about prompt audit", href: "/platform/governance" },
        shot: {
          ariaLabel:
            "Quaeris audit log entry capturing a question with user identity, timestamp, role, and warehouse",
          label: "Question captured",
          rows: [
            {
              text: '"Revenue vs. plan by region"',
              pill: { label: "Logged", tone: "allow" },
            },
            {
              text: "User · ",
              strong: "S. Chen",
              textAfter: " · Head of Analytics",
              rightText: "2026-06-12 14:32:18",
            },
            {
              text: "Role · ",
              strong: "Analytics leadership",
              rightText: "Warehouse · ",
              rightStrong: "Snowflake prod",
            },
          ],
        },
      },
      {
        eyebrow: "Step 02 — Query Translation & Lineage",
        heading: "AI-to-SQL translation is visible and auditable.",
        body: "The agent translates the plain-language question into SQL against the semantic layer. Quaeris logs: the generated SQL, which semantic layer definitions were consulted, which business rules were applied, and the query execution time. If the agent needed to make assumptions (e.g., 'revenue' → the Booked Revenue metric, not Pipeline Revenue), those assumptions are logged and surfaced.",
        cta: { label: "Explore the semantic layer", href: "/platform/semantic-layer" },
        shot: {
          ariaLabel:
            "Quaeris lineage log showing generated SQL, semantic layer definitions consulted, and a logged assumption",
          label: "Translation & lineage",
          rows: [
            {
              text: "Generated SQL · ",
              strong: "SELECT region, booked_revenue …",
              pill: { label: "Logged", tone: "allow" },
            },
            {
              text: "Definitions · ",
              strong: "Booked Revenue v4.1, Plan Amount v2.3",
            },
            {
              text: 'Assumption · "revenue" → ',
              strong: "Booked Revenue",
              textAfter: ", not Pipeline Revenue",
              pill: { label: "Surfaced", tone: "allow" },
            },
          ],
        },
      },
      {
        eyebrow: "Step 03 — Access Control Enforcement",
        heading: "Role policies enforced at query execution.",
        body: "Before the query runs, Quaeris evaluates the user's row-level security policies against the warehouse. The system logs: which rows the user requested, which rows their role permits, and whether the query was allowed or denied. If allowed, which row-level filters were applied. Every access decision is auditable — and compliant auditors can verify that a director-level user never saw frontline-employee data.",
        cta: { label: "See access control in action", href: "/platform/access-control" },
        shot: {
          ariaLabel:
            "Quaeris access control log showing a row-level policy evaluation with applied filters and a denied attempt",
          label: "Policy evaluation",
          rows: [
            {
              text: "Requested · ",
              strong: "All regions",
              rightText: "Permitted · ",
              rightStrong: "Region IN ['US', 'EMEA']",
            },
            {
              text: "Row-level filter applied at execution",
              pill: { label: "Allowed", tone: "allow" },
            },
            {
              text: '14:15:44 · "Churn by contract value" · ',
              strong: "Strategic Contracts",
              pill: { label: "Denied", tone: "deny" },
            },
          ],
        },
      },
      {
        eyebrow: "Step 04 — Answer Delivery & Provenance",
        heading: "Results returned with full source citation.",
        body: "The agent returns the answer to the user. Quaeris logs: the result set, the execution time, the user's response (did they refine the query?), and a complete chain of custody. Every number in the answer is clickable — users can trace 'Revenue = $2.4M' back to the exact metric definition, the table query, the transformation rules, and the owner certification. Auditors can download the full provenance report for any answer.",
        cta: { label: "View an audit report", href: "/resources/sample-audit-report" },
        shot: {
          ariaLabel:
            "Quaeris provenance chain tracing an answer back to metric definition, source table, transformation rules, and owner certification",
          label: "Chain of custody",
          rows: [
            {
              text: "Answer · ",
              strong: "Revenue = $2.4M",
              rightText: "1.4s",
            },
            {
              text: "Metric · ",
              strong: "Booked Revenue v4.1",
              textAfter: " → Table · ",
              strongAfter: "fct_revenue",
            },
            {
              text: "Rules · FX normalization · Owner · ",
              strong: "Finance",
              pill: { label: "Certified", tone: "allow" },
            },
          ],
        },
      },
    ],
  },

  // ── 3.4 — Live audit dashboard (AuditLogMock) ───────────────
  auditLog: {
    intro: {
      eyebrow: "Inside the platform",
      heading: "The audit log, live.",
    },
    panelLabel: "Quaeris · Audit log",
    panelMeta: "Live stream · last 30 minutes",
    columns: [
      "Timestamp",
      "User",
      "Question",
      "Status",
      "Metrics Used",
      "Data Access",
      "Time",
    ],
    rows: [
      {
        timestamp: "2026-06-12 14:32:18",
        user: "S. Chen · Head of Analytics",
        question: "Revenue vs. plan by region",
        status: { label: "✓ Allowed", tone: "allow" },
        metrics: "Booked Revenue, Plan Amount, Regional Sales Org",
        access: "Region IN ['US', 'EMEA']",
        time: "1.4s",
      },
      {
        timestamp: "2026-06-12 14:28:03",
        user: "M. Okafor · FP&A Director",
        question: "Commission accrual forecast",
        status: { label: "✓ Allowed", tone: "allow" },
        metrics: "Accrual Rate, Headcount Forecast",
        access: "Department = 'Sales'",
        time: "2.1s",
      },
      {
        timestamp: "2026-06-12 14:15:44",
        user: "J. Rivera · Account Executive",
        question: "Churn by contract value",
        status: { label: "✗ Denied", tone: "deny" },
        metrics: "N/A",
        access: "Access denied: Strategic Contracts restricted",
        time: "—",
      },
      {
        timestamp: "2026-06-12 14:12:09",
        user: "P. Natarajan · Sales Manager",
        question: "Pipeline by stage and manager",
        status: { label: "✓ Allowed", tone: "allow" },
        metrics: "Pipeline Weighted, Stage Duration",
        access: "Manager IN [own team]",
        time: "0.9s",
      },
      {
        timestamp: "2026-06-12 14:09:55",
        user: "L. Dubois · Chief of Staff",
        question: "Explain why MRR dropped YoY",
        status: { label: "✓ Allowed", tone: "allow" },
        metrics: "MRR, Expansion, Churn, Discount Rate",
        access: "Warehouse filtering per role",
        time: "3.2s",
      },
    ],
    caption:
      "Illustrative live audit log — for demonstration only. Real deployments log millions of interactions per month, all queryable and exportable.",
  },

  // ── 3.5 — Key audit capabilities (IconFeatureGrid, 2-up) ────
  capabilities: {
    intro: {
      eyebrow: "Capabilities",
      heading: "Key audit capabilities",
    },
    items: [
      {
        icon: "lock",
        title: "Role-based access control",
        body: "Every query enforces the user's role policies. Access decisions are logged. Users cannot see data their role forbids—enforced at query execution, not just the UI.",
      },
      {
        icon: "history",
        title: "Complete question history",
        body: "Every question asked is logged with timestamp, user, intent, and outcome. Searchable audit log—compliance teams can answer 'Who asked about customer churn?' in seconds.",
      },
      {
        icon: "link",
        title: "Metric-to-table lineage",
        body: "Every answer traces back to metric definitions, business rules, source tables, and transformations. One click: see the full chain of custody for any number.",
      },
      {
        icon: "circle-check",
        title: "Proof of data access",
        body: "Quaeris logs which specific rows each user accessed, which rows were filtered out, and why. Row-level security is auditable—not just a dashboard filter.",
      },
      {
        icon: "file-text",
        title: "Exportable audit reports",
        body: "Generate timestamped, signed audit reports for compliance workflows. SOX, HIPAA, EU AI Act—format the report to match your audit requirements.",
      },
      {
        icon: "circle-alert",
        title: "Access denial logs",
        body: "Denied queries are logged as thoroughly as allowed ones. Compliance teams see every attempt to access restricted data—and proof it was blocked.",
      },
    ],
  },

  // ── 3.6 — Use cases: Who needs audit trails (SegmentCards, 4-up) ──
  useCases: {
    intro: {
      eyebrow: "Use cases",
      heading: "Use cases: Who needs audit trails",
    },
    cards: [
      {
        icon: "bar-chart-3",
        label: "SOX Compliance & Financial Audits",
        desc: "Auditors need to trace every number in board materials back to source data. Quaeris gives you: question, assumption, metric, table, owner certification, access control. Satisfy auditors without blocking analytics velocity.",
        href: "/resources/sox-ai-analytics-checklist",
        ctaLabel: "Read the SOX guide",
      },
      {
        icon: "git-branch",
        label: "Metric Governance & Lineage",
        desc: "Data leaders own the semantic layer. Quaeris audit logs show you which metrics each question used, which business rules applied, and which users accessed sensitive metrics. Governance becomes visible, not theoretical.",
        href: "/platform/semantic-layer",
        ctaLabel: "Learn about semantic lineage",
      },
      {
        icon: "globe",
        label: "Data Privacy & EU AI Act",
        desc: "EU AI Act requires audit trails for high-risk AI. GDPR requires data-access logging. Quaeris logs every query at the row level. Prove compliance with automated audit exports.",
        href: "/resources/eu-ai-act-analytics-assessment",
        ctaLabel: "See the EU AI Act checklist",
      },
      {
        icon: "shield-check",
        label: "HIPAA & Regulated Industry AI",
        desc: "Sensitive industries need to prove that AI agents respect access controls. Quaeris enforces role-based access at query time and logs every access attempt. Healthcare and insurance teams can deploy agentic AI without audit risk.",
        href: "/resources/hipaa-ai-analytics-guide",
        ctaLabel: "View the HIPAA readiness guide",
      },
    ],
  },

  // ── 3.7 — Comparison: Audit trail across BI platforms ───────
  comparison: {
    intro: {
      eyebrow: "Quaeris vs the field",
      heading: "Comparison: Audit trail across BI platforms",
    },
    table: {
      columns: [
        { label: "Capability" },
        { label: "Quaeris", highlight: true },
        { label: "Tableau" },
        { label: "Power BI" },
        { label: "Looker" },
        { label: "ThoughtSpot" },
        { label: "Sigma" },
        { label: "Domo" },
      ],
      rows: [
        {
          feature: "Question logging",
          cells: [
            { kind: "text", value: "Per-user, full text, timestamped" },
            { kind: "text", value: "Dashboard usage only" },
            { kind: "text", value: "Per-user, limited" },
            { kind: "text", value: "Query audit limited" },
            { kind: "text", value: "Search token logging" },
            { kind: "text", value: "Basic activity log" },
            { kind: "text", value: "Basic activity log" },
          ],
        },
        {
          feature: "Metric-to-table lineage",
          cells: [
            { kind: "text", value: "✓ Auto-surfaced per answer" },
            { kind: "text", value: "Dashboard-level lineage" },
            { kind: "text", value: "Model-level, not answer-level" },
            { kind: "text", value: "LookML dependencies" },
            { kind: "text", value: "Worksheet-level" },
            { kind: "text", value: "Basic lineage" },
            { kind: "text", value: "Basic lineage" },
          ],
        },
        {
          feature: "Row-level access enforcement",
          cells: [
            { kind: "text", value: "✓ Query-time enforcement" },
            { kind: "text", value: "Filter-based (UI layer)" },
            { kind: "text", value: "Model & RLS" },
            { kind: "text", value: "LookML RLS" },
            { kind: "text", value: "Search-token scoped" },
            { kind: "text", value: "Dashboard-level" },
            { kind: "text", value: "Access model-scoped" },
          ],
        },
        {
          feature: "AI reasoning logged",
          cells: [
            { kind: "text", value: "✓ SQL, assumptions, rules" },
            { kind: "text", value: "N/A (no AI)" },
            { kind: "text", value: "Copilot actions hidden" },
            { kind: "text", value: "Conversational logs limited" },
            { kind: "text", value: "Spotter reasoning opaque" },
            { kind: "text", value: "Agent steps hidden" },
            { kind: "text", value: "Domo.AI opaque" },
          ],
        },
        {
          feature: "Access denial audit trail",
          cells: [
            { kind: "text", value: "✓ Full logging" },
            { kind: "text", value: "Not logged" },
            { kind: "text", value: "Logged, limited" },
            { kind: "text", value: "Not clearly logged" },
            { kind: "text", value: "Not transparent" },
            { kind: "text", value: "Not transparent" },
            { kind: "text", value: "Not transparent" },
          ],
        },
        {
          feature: "Exportable compliance reports",
          cells: [
            { kind: "text", value: "✓ SOX/HIPAA/EU AI ready" },
            { kind: "text", value: "Manual export only" },
            { kind: "text", value: "Manual export only" },
            { kind: "text", value: "Manual export only" },
            { kind: "text", value: "Manual export only" },
            { kind: "text", value: "Manual export only" },
            { kind: "text", value: "Manual export only" },
          ],
        },
        {
          feature: "Warehouse-native logging",
          cells: [
            { kind: "text", value: "✓ Warehouse-native queries logged" },
            { kind: "text", value: "Cloud-based, query-hidden" },
            { kind: "text", value: "Cloud-based, hidden" },
            { kind: "text", value: "Cloud-based, hidden" },
            { kind: "text", value: "Elastic-based" },
            { kind: "text", value: "Cloud-based, hidden" },
            { kind: "text", value: "Cloud-based, hidden" },
          ],
        },
      ],
      note: "Comparison based on public documentation as of Q2 2026. Actual capabilities vary by version and deployment model.",
    },
  },

  // ── 3.8 — FAQ: Audit trail specifics ────────────────────────
  faq: {
    intro: {
      eyebrow: "FAQ",
      heading: "FAQ: Audit trail specifics",
    },
    miniCard: {
      title: "Auditor in the room?",
      body: "Bring your compliance team to a live session — we'll trace a real query end to end through access control, lineage, and retention, and answer governance questions on the spot.",
      cta: { label: "Book a Demo", href: "/contact" },
    },
    items: [
      {
        id: "audit-faq-1",
        question: "How granular is the audit trail?",
        answer:
          "Every user action is logged: the exact question text, the user's identity, the timestamp down to milliseconds, their role/team context, which warehouse they queried, the generated SQL, which metrics were accessed, and the result. If access was denied, that's logged too. Logs are immutable and timestamped.",
        defaultOpen: true,
      },
      {
        id: "audit-faq-2",
        question: "Can I export audit logs for my SOX auditor?",
        answer:
          "Yes. Quaeris provides an audit export tool that generates compliance-ready reports: full query history, access decisions, metric lineage, denied attempts, and user identity. Export as PDF, CSV, or in formats your auditor specifies. Reports are timestamped and signed.",
      },
      {
        id: "audit-faq-3",
        question: "How long are audit logs retained?",
        answer:
          "Audit retention policies are configurable. Enterprise deployments typically retain 1–2 years online; older logs can be archived to cold storage per your compliance requirements.",
      },
      {
        id: "audit-faq-4",
        question: "Can users delete their questions from the audit log?",
        answer:
          "No. Audit logs are immutable once written. Users cannot delete or modify their questions or access history. Only admins with explicit audit-log governance permissions can export or filter logs—and those administrative actions are themselves logged.",
      },
      {
        id: "audit-faq-5",
        question:
          "Does Quaeris log if someone tried to access data they're not permitted to see?",
        answer:
          "Yes. Every access denial is logged with the same level of detail as allowed queries: who tried, what they asked for, when, and why the request was denied (which role policy blocked it). This is essential for security audits and detecting attempted access violations.",
      },
      {
        id: "audit-faq-6",
        question: "How is the audit log connected to the semantic layer?",
        answer:
          "When a query runs, Quaeris logs: the plain-language question, the semantic layer version used (with version timestamp), which metrics were queried, which business rules were applied. Auditors can trace any answer back to the exact semantic-layer snapshot that produced it—useful if metric definitions change.",
      },
    ],
  },

  // ── 3.9 — CTA Band ──────────────────────────────────────────
  cta: {
    eyebrow: "Demonstrate to your auditors",
    heading: "See your audit trail in action.",
    subcopy:
      "Book a 20-minute demo. We'll walk through a sample audit log, show you how a compliant query flows through access control, lineage, and retention—then answer your governance questions. No fluff, all answers.",
    primary: { label: "Schedule audit demo", href: "/contact" },
    secondary: {
      label: "Download the audit guide",
      href: "/resources/quaeris-audit-trail-guide",
    },
  },

  // ── 3.10 — Newsletter ───────────────────────────────────────
  newsletter: {
    eyebrow: "Stay updated on governance",
    heading: "Weekly insights on governed AI analytics.",
    body: "Every Thursday: practical tips on audit-ready AI, semantic governance, and compliance-first analytics architectures. No hype, no fluff—just what works.",
    emailLabel: "Work email",
    emailPlaceholder: "Work email",
    submitLabel: "Subscribe",
    consentPrefix:
      "No spam. Unsubscribe any time. We handle your data per our",
    privacyLabel: "Privacy Policy",
    privacyHref: "/privacy",
  },
} satisfies PlatformAuditPageContent;
