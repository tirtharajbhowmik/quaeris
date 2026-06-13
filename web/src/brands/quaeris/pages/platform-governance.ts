import type { PlatformGovernancePageContent } from "@/config/page-types/platform-governance";

export const platformGovernancePage = {
  meta: {
    title: "Governance & Audit Trail for Enterprise Analytics | Quaeris",
    description:
      "Certified metrics, policy enforcement, and full audit trails. See how Quaeris brings governance-first design to enterprise analytics—no hallucinations, no gaps.",
  },

  // ── Section 3.1 — Hero ──────────────────────────────────────
  hero: {
    eyebrow: "Governance by design",
    h1: "Certified metrics. Enforced policies. Complete transparency.",
    subcopy:
      "Every answer is grounded in your governance framework—not a model's guess. Full lineage from question to source. Role-based access enforced at query time. Enterprise compliance, built in.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    secondaryCta: {
      label: "Download Security Brief",
      href: "/resources/security-brief",
    },
  },

  // ── Section 3.2 — Certified Metrics ─────────────────────────
  certifiedMetrics: {
    intro: {
      eyebrow: "Certified metrics",
      heading: "Metrics you've certified, agents honor.",
      subcopy:
        "Your data team defines the truth once — revenue, churn, activation rate. Agents query that semantic layer, not raw tables. Every answer traces back to a certified definition.",
    },
    items: [
      {
        icon: "target",
        title: "Single source of truth",
        body: "Define your metrics once in the semantic layer. Every agent query returns the same number—no regional conflicts, no dashboard wars.",
      },
      {
        icon: "check-circle",
        title: "No hallucinated numbers",
        body: "Agents retrieve answers from your governed semantic layer, not from a language model's training data. If a question can't be answered from certified metrics, the agent says so.",
      },
      {
        icon: "git-branch",
        title: "Lineage on every answer",
        body: "Click any result to see: which metric definition was used, which table it queried, which business rule applied. Full traceability in one step.",
      },
    ],
    proofCta: {
      label: "Learn about the governed semantic layer",
      href: "/platform/semantic-layer",
    },
  },

  // ── Section 3.3 — Policy Enforcement ────────────────────────
  policy: {
    intro: {
      eyebrow: "Policy enforcement",
      heading: "Policies enforced. Not bypassed.",
      subcopy:
        "Role-based access and data lineage controls are applied at query execution time—enforced by the agent, not bolted onto dashboards. Users see exactly what they're permitted. Nothing more.",
    },
    rows: [
      {
        eyebrow: "Step 1 — Define",
        heading: "Map roles to metric access.",
        body: "Your governance team defines which roles can see which metrics. Finance can see P&L; product can see engagement KPIs. These policies map to your existing warehouse role hierarchy. No manual dashboard filter logic—enforcement is native.",
        cta: {
          label: "Learn about role-based access",
          href: "/platform/access-control",
        },
        shotAlt:
          "Data governance team reviewing role-based metric policies in the Quaeris admin panel",
        shotLabel: "Role → metric access",
        shotRows: [
          {
            strong: "Finance",
            text: " · P&L, Margin, Revenue",
            status: "allow",
            statusLabel: "Allowed",
          },
          {
            strong: "Product",
            text: " · Engagement KPIs, Activation",
            status: "allow",
            statusLabel: "Allowed",
          },
          {
            strong: "Support",
            text: " · P&L",
            status: "deny",
            statusLabel: "Denied",
          },
        ],
      },
      {
        eyebrow: "Step 2 — Execute",
        heading: "Every query respects policy.",
        body: "When a user asks a question, the agent checks role-based policies before generating an answer. If the user's role doesn't permit access to a metric, the agent declines—it doesn't hide the number in fine print or filter the dashboard. Access is enforced at the architecture level.",
        cta: {
          label: "Explore governance architecture",
          href: "#architecture",
        },
        shotAlt:
          "Quaeris agent interface confirming role-based policy enforcement on a governed query",
        shotLabel: "Agent session",
        shotRows: [
          { text: '"What was Q1 gross margin by region?"' },
          {
            text: "Policy check · role: ",
            strong: "FP&A analyst",
            status: "allow",
            statusLabel: "Access granted",
          },
          {
            text: "Certified metric · ",
            strong: "gross_margin v3.2",
            status: "allow",
            statusLabel: "Lineage attached",
          },
        ],
      },
    ],
  },

  // ── Section 3.4 — Audit Trail ───────────────────────────────
  audit: {
    intro: {
      eyebrow: "Audit trail",
      heading: "Complete audit trail. Always.",
      subcopy:
        "Every question, every answer, every policy decision is logged and queryable. Who asked what? When? Was access granted or denied? Why did a metric return that value? Answers in seconds.",
    },
    cards: [
      {
        icon: "scroll-text",
        title: "Who-Asked-What Log",
        body: "All agent interactions logged with timestamp, user, question, answer, metrics used. Searchable audit table. Use case: compliance audits, insider-threat investigation, change impact analysis.",
        logHead: "Recent activity",
        logRows: [
          { strong: "09:42", lead: " · j.rivera", value: '"Q1 churn by segment"' },
          { strong: "09:38", lead: " · m.chen", value: '"Revenue vs forecast"' },
          { strong: "09:31", lead: " · a.okafor", value: '"Activation rate WoW"' },
        ],
      },
      {
        icon: "shield-check",
        title: "Policy Decision Trail",
        body: "Every access grant/deny decision recorded: user, role, metric, policy rule applied, timestamp. Enforcement audit, not just event logging.",
        logHead: "Policy decisions",
        logRows: [
          {
            strong: "09:42",
            lead: " · churn_rate",
            value: "Granted",
            status: "allow",
          },
          {
            strong: "09:35",
            lead: " · gross_margin",
            value: "Denied",
            status: "deny",
          },
          {
            strong: "09:31",
            lead: " · activation_rate",
            value: "Granted",
            status: "allow",
          },
        ],
      },
      {
        icon: "git-branch",
        title: "Metric Change History",
        body: "When a metric definition changes (version, owner, business rule update), full diff logged. Which queries were affected? When?",
        logHead: "Definition history",
        logRows: [
          { strong: "v3.2", lead: " · gross_margin", value: "Owner: Finance" },
          { strong: "v3.1", lead: " · gross_margin", value: "Rule updated" },
          { strong: "v3.0", lead: " · gross_margin", value: "Initial certification" },
        ],
      },
    ],
  },

  // ── Section 3.5 — Compliance Frameworks ─────────────────────
  compliance: {
    intro: {
      eyebrow: "Compliance frameworks",
      heading: "Built for regulated industries.",
      subcopy:
        "Governance-first architecture means Quaeris is purpose-built for regulated verticals: finance (SOX compliance), insurance (model risk management), healthcare (HIPAA audit trails), and more.",
    },
    cards: [
      {
        title: "Financial Services (SOX)",
        body: "Certified metrics audit trail satisfies SOX 404 requirements for IT change management and access controls. Every answer is traceable to source and policy-enforced.",
      },
      {
        title: "Insurance (Model Risk)",
        body: "Insurance regulations require transparent model decisions and full audit trails. Quaeris agents are not black-box LLMs—they execute governed queries with full lineage.",
      },
      {
        title: "Healthcare (HIPAA)",
        body: "Role-based access enforced at query time (not dashboard-level) ensures PHI access is granular and auditable. Who saw what PHI? When? Why? Always logged.",
      },
      {
        title: "Multitenancy & Data Residency",
        body: "Data never moves. Agents run queries in your warehouse. Tenants in regulated regions (EU, Canada, Australia) can deploy with zero cross-border data movement.",
      },
    ],
  },

  // ── Section 3.6 — Comparison ────────────────────────────────
  comparison: {
    intro: {
      eyebrow: "Quaeris vs typical BI",
      heading: "Governance isn't a feature. It's the foundation.",
      subcopy:
        "Most BI tools add governance as an afterthought. Quaeris is governance-first by architecture.",
    },
    cards: [
      {
        index: "01",
        problemLead: "BI dashboards:",
        problem:
          " Role-based access bolted on—users can still see restricted metrics if they have the worksheet.",
        fixLabel: "Quaeris",
        fixBody:
          "Access enforced at query execution time. Users cannot see metrics they're not permitted to access, period.",
      },
      {
        index: "02",
        problemLead: "Ad-hoc SQL tools:",
        problem:
          " Audit logs record queries, but not the business decisions behind them (which metric definitions applied, which policy was used).",
        fixLabel: "Quaeris",
        fixBody:
          "Every answer logs the metric definition, business rules, and governance policy enforced. Full context, every time.",
      },
      {
        index: "03",
        problemLead: "Generic GenAI tools:",
        problem:
          " Chat produces numbers and natural language—impossible to know if the answer is grounded in governed data or hallucinated.",
        fixLabel: "Quaeris",
        fixBody:
          "Every answer is grounded in certified metrics from your semantic layer. If it can't answer from governed data, it says so.",
      },
      {
        index: "04",
        problemLead: "Fragmented stacks:",
        problem:
          " Policy in one tool, audit in another, lineage in a third. Compliance team coordinates across three vendors.",
        fixLabel: "Quaeris",
        fixBody:
          "Policy, audit, lineage, and agent reasoning in one platform. One contract, one audit trail, one truth.",
      },
    ],
  },

  // ── Section 3.7 — Proof / Case Study ────────────────────────
  caseStudy: {
    industry: "Financial Services",
    client: "A leading financial institution",
    outcome:
      "Closed SOX audit finding by implementing governed AI analytics.",
    metrics: [
      { num: "100%", label: "Audit trail coverage" },
      { num: "0", label: "Governance exceptions" },
      { num: "14", label: "Days from deployment to first audit-ready report" },
    ],
    how: "Deployed Quaeris semantic layer with certified revenue and margin definitions. Role-based access policies mapped to existing GL hierarchy. Full query audit trail enabled from day one. SOX audit team had complete traceability for the first time.",
    cta: {
      label: "Read the full case study",
      href: "/case-studies/financial-services",
    },
  },

  // ── Section 3.8 — FAQ ───────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "FAQ",
      heading: "Governance questions. Clear answers.",
    },
    miniCard: {
      title: "Compliance-specific questions?",
      body: "Our team will walk your governance leads through SOX, HIPAA, and GDPR specifics — including the SOX readiness brief.",
      cta: { label: "Email seek@quaeris.ai", href: "mailto:seek@quaeris.ai" },
    },
    items: [
      {
        id: "gov-faq-1",
        question: "Does Quaeris meet SOX requirements?",
        answer:
          "Quaeris satisfies SOX 404(b) IT change-management and access-control audit requirements through certified-metrics versioning, role-based policy enforcement, and complete query audit trails. Every answer is traceable to a certified metric definition and the policy that governed access. We provide a SOX readiness brief—contact seek@quaeris.ai for compliance-specific details.",
        defaultOpen: true,
      },
      {
        id: "gov-faq-2",
        question:
          "What's the difference between Quaeris governance and a dashboard's row-level security?",
        answer:
          "Dashboard RLS is applied after the data is retrieved—a dashboard filter. Quaeris governance is applied at query execution time, enforced by the agent itself. Users cannot see metrics they're not permitted to access, period. The policy is in the platform, not the presentation layer.",
      },
      {
        id: "gov-faq-3",
        question: "How is the audit trail structured for compliance audits?",
        answer:
          'Every query generates an audit record with: timestamp, user identity, question asked, agent reasoning (which metrics were queried, which rules applied), answer returned, metrics definition versions used, and role-based access decisions. The full trace is queryable—you can run "show me all queries for this metric from this role in the last 90 days" in seconds.',
      },
      {
        id: "gov-faq-4",
        question:
          "Can we customize governance policies to match our compliance framework?",
        answer:
          "Yes. Governance policies are defined by your data team and map to your warehouse role hierarchy. You define the rules; the agent enforces them. If your compliance framework requires specific approval workflows for certain metrics or roles, Quaeris can enforce those—we'll customize the policy layer.",
      },
      {
        id: "gov-faq-5",
        question: "Is the audit trail immutable?",
        answer:
          "Audit records are immutable in Quaeris—you cannot edit or delete historical query logs. This immutability is essential for compliance audits. Audit data is retained per your data retention policy (customizable).",
      },
      {
        id: "gov-faq-6",
        question:
          "What if a user asks a question about a metric they're not allowed to see?",
        answer:
          'The agent declines the question before generating an answer. The user sees: "You do not have access to [metric name]. Contact [governance team] for approval." The access denial is itself logged in the audit trail—compliance teams can see who tried to access what and when.',
      },
      {
        id: "gov-faq-7",
        question: "Does Quaeris work in multi-tenant environments?",
        answer:
          "Yes. Governance policies can be tenant-scoped—different organizations in the same deployment have independent metric definitions, role hierarchies, and audit trails. One Quaeris instance serves multiple regulated entities with full data isolation.",
      },
      {
        id: "gov-faq-8",
        question: "What's the audit trail retention policy?",
        answer:
          "You set it. Quaeris can retain audit logs for 1 year, 3 years, 7 years, or indefinitely based on your compliance requirements (SOX, HIPAA, GDPR all have different windows). Logs are stored in your warehouse, not Quaeris infrastructure.",
      },
    ],
  },

  // ── Section 3.9 — Trust Signals ─────────────────────────────
  trust: {
    intro: {
      eyebrow: "Trust signals",
      heading: "Trusted by data teams in regulated industries.",
    },
    stats: [
      {
        num: "100%",
        label: "Audit trail completeness",
        desc: "Every query, every answer, every policy decision logged",
      },
      {
        num: "40+",
        label: "Query-time policy enforcement",
        desc: "customers deployed, zero governance exceptions",
      },
      {
        num: "14 min",
        label: "Time to first audit-ready answer",
        desc: "From warehouse connection to governed query with full lineage",
      },
      {
        num: "<24 hrs",
        label: "MTTR for governance questions",
        desc: "Compliance team can audit any metric or user activity in minutes",
      },
    ],
    badges: [
      {
        icon: "badge-check",
        title: "SOC 2 Type II",
        desc: "Audited security & availability",
        note: "Certification year / auditor pending confirmation",
      },
      {
        icon: "globe",
        title: "GDPR compliant",
        desc: "EU data residency ready",
        note: "EU data center available; GDPR DPA in place",
      },
      {
        icon: "heart-pulse",
        title: "HIPAA eligible",
        desc: "Healthcare-grade encryption & audit",
        note: "HITRUST status / date pending confirmation",
      },
      {
        icon: "award",
        title: "ISO 27001",
        desc: "Information security",
        note: "Certification year pending confirmation",
      },
    ],
  },

  // ── Section 3.10 — CTA Band ─────────────────────────────────
  cta: {
    eyebrow: "Ready to audit everything?",
    heading: "Governance-first analytics in 30 minutes.",
    subcopy:
      "Book a demo. We'll connect your warehouse, show you a governed query with full lineage, and walk through your governance policy options. No slides. Real answers.",
    primary: { label: "Book a Demo", href: "/contact" },
  },
} satisfies PlatformGovernancePageContent;
