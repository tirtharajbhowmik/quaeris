import type { SolutionsFinancePageContent } from "@/config/page-types/solutions-finance";

export const solutionsFinancePage = {
  meta: {
    title: "AI Analytics for Finance · Certified, Audited Metrics",
    description:
      "Single source of truth for audited metrics. Answer variance, forecast, and reporting questions instantly with full audit trail and compliance controls.",
  },

  // ── Section 3.1 — Finance Hero ──────────────────────────────
  hero: {
    eyebrow: "For Finance Teams and CFOs",
    h1: "One metric definition.",
    h1Accent: "Every report agrees.",
    subcopy:
      "Finance teams waste weeks reconciling numbers before board meetings. Quaeris locks metrics to a governed semantic layer — so every variance report, forecast, and ledger reconciliation queries the same certified definition. Auditable. Instant. True.",
    primaryCta: { label: "Book a Finance Demo", href: "/contact" },
    secondaryCta: { label: "See a live variance query", href: "/contact" },
    trust: [
      {
        icon: "shield",
        title: "Audit-grade lineage",
        proof: "Question to source in one click",
      },
      {
        icon: "trending-up",
        title: "Certified metrics only",
        proof: "No hallucinated numbers in any report",
      },
      {
        icon: "zap",
        title: "Role-based access",
        proof: "Controllers see actuals; managers see budget only",
      },
    ],
    dashboard: {
      label: "Quaeris · finance overview",
      ariaLabel:
        "Placeholder financial dashboard with three KPI cards — Revenue vs Plan, Forecast vs Actual, and Variance percent — above a budget-versus-actual bar chart",
      kpis: [
        { label: "Revenue vs Plan", value: "$24.8M", delta: "+3.2% vs plan" },
        {
          label: "Forecast vs Actual",
          value: "$23.9M",
          delta: "−1.8% vs forecast",
          down: true,
        },
        { label: "Variance %", value: "+1.4%", delta: "Within threshold" },
      ],
    },
  },

  // ── Section 3.2 — The Problem ───────────────────────────────
  problem: {
    intro: {
      eyebrow: "The problem",
      heading: "Finance teams trust numbers that don't match.",
      subcopy:
        "The problem isn't speed—it's consistency. Controllers define revenue one way in the GL, FP&A another in their model, and the CEO sees a third number in the BI tool. When the audit questions numbers, everyone panics.",
    },
    cards: [
      {
        icon: "alert-circle",
        title: "Metric Definition Chaos",
        body: "Finance teams maintain 80+ revenue definitions across the GL, ERPs, BI tools, and spreadsheets. Reconciling them before board meetings takes 40+ hours. Every definition change breaks something.",
      },
      {
        icon: "lock",
        title: "Audit Trail Gaps",
        body: "Ad-hoc analytics have no lineage. An analyst answers 'what was Q3 revenue?' — but the CFO can't trace the number back to the GL or see who ran the query. Audit findings pile up.",
      },
      {
        icon: "trending-down",
        title: "Variance Questions Kill Days",
        body: "A manager asks 'why did sales miss forecast?' and the answer requires a data team ticket, a 2-day SQL sprint, and a manual reconciliation. By then, the answer is stale.",
      },
    ],
  },

  // ── Section 3.3 — How Quaeris Solves It ─────────────────────
  howItWorks: {
    intro: {
      eyebrow: "How it works",
      heading: "Define once. Answer instantly. Audit always.",
      subcopy:
        "Quaeris combines three layers: a governed semantic layer that locks metric definitions, autonomous agents that answer finance questions in seconds, and an audit trail that captures every query and derivation.",
    },
    steps: [
      {
        eyebrow: "Step 01 — Governance",
        heading:
          "Certify metrics at the GL. Every report uses the same number.",
        body: "Your data team builds a governed semantic layer: revenue = GL account [X] filtered by [conditions], gross margin = revenue minus COGS, variance = actual vs budget. These definitions are versioned, owned, and audited. Once certified, every agent query and every report—from the GL module to the CFO's variance sheet—queries the same definition.",
        bullets: [
          "Revenue, cost structure, headcount metrics — all certified once",
          "Definitions tied to GL accounts with full lineage",
          "Changes tracked; previous versions preserved for audit restate",
          "Access: controllers certify, managers can't override",
        ],
        cta: { label: "Explore semantic governance", href: "/platform" },
        shot: {
          ariaLabel:
            "Placeholder screenshot of the Quaeris metric-definition interface showing GL account mapping, ownership, and version history",
          label: "Semantic layer · certified definitions",
          rows: [
            {
              term: "revenue",
              rest: " · GL 4000–4099, excl. intercompany",
              ok: "Certified v3.1",
            },
            {
              term: "gross_margin",
              rest: " · revenue − COGS",
              ok: "Owner: Controller",
            },
            {
              term: "variance",
              rest: " · actual vs budget",
              ok: "Version history",
            },
          ],
        },
      },
      {
        eyebrow: "Step 02 — Agents",
        heading: "Why did we miss forecast? Answered in 20 seconds.",
        body: "Finance users ask questions in plain language: 'Show me Q3 actual vs budget for EMEA,' or 'Why did commission expense jump?' Agents interpret the question against the governed semantic layer and return an instant answer—with the exact metric definitions, filters, and GL accounts that went into the calculation. No data team ticket. No spreadsheet. No guessing.",
        bullets: [
          "Plain-language variance and forecast queries, answered in 20 seconds",
          "Agents cite the metric definitions, GL accounts, and business rules used",
          "Multi-step questions: 'Compare Q3 budget vs actual, then show the variance drivers by region'",
          "Results exportable to Excel for board deck inclusion",
        ],
        cta: { label: "See a live variance query", href: "/contact" },
        shot: {
          ariaLabel:
            "Placeholder chat interface showing the finance question 'Why did OPEX exceed budget by 8 percent?' and the agent response with metric sources and GL references",
          label: "Agent session · variance query",
          query: '"Why did OPEX exceed budget by 8%?"',
          rows: [
            {
              term: "commission expense",
              rest: " +5.1%",
              ok: "GL 6210",
            },
            { term: "cloud spend", rest: " +2.3%", ok: "GL 6480" },
            {
              term: "opex_variance v2.0",
              rest: "",
              ok: "Definition cited",
            },
          ],
        },
      },
      {
        eyebrow: "Step 03 — Trust",
        heading: "Full lineage. Full compliance. Full transparency.",
        body: "Every answer shows its audit trail: the metric definition used, the GL accounts queried, the role-based filters applied, and the user who asked. When the auditor asks 'how did you calculate tax provision variance?', the CFO opens Quaeris, clicks one button, and shows the full lineage back to the GL. Role-based access ensures controllers see actuals, managers see budget-only views, and executives see consolidated rollups.",
        bullets: [
          "Prompt-to-GL lineage in one click — every number traceable",
          "Role-based access enforced at query time (not dashboard level)",
          "Full audit log: who asked, what was asked, when, and what was answered",
          "Exported reports carry the lineage metadata for audit compliance",
        ],
        cta: { label: "Review audit and compliance", href: "/platform/audit" },
        shot: {
          ariaLabel:
            "Placeholder audit-trail panel showing a variance query, the metric definitions cited, the GL references, and the user and timestamp metadata",
          label: "Audit trail · query lineage",
          rows: [
            {
              term: 'Query · "tax provision variance, Q3"',
              rest: "",
              ok: "Logged",
            },
            {
              term: "tax_provision v1.4",
              rest: " · GL 2310",
              ok: "Lineage attached",
            },
            {
              term: "Controller",
              rest: " · 2026-06-12 09:14",
              ok: "Role enforced",
            },
          ],
        },
      },
    ],
  },

  // ── Section 3.4 — Why Finance Teams Choose Quaeris ──────────
  why: {
    intro: {
      eyebrow: "Why Quaeris",
      heading: "Built for the way finance actually works.",
      subcopy:
        "Every feature is designed for the audit, compliance, and reporting workflows that keep CFOs and controllers up at night.",
    },
    items: [
      {
        icon: "book-open",
        title: "Certified Metrics Library",
        body: "Revenue, COGS, SG&A, EBT, tax provision, headcount — all certified once. No more spreadsheet variants.",
      },
      {
        icon: "bar-chart-4",
        title: "Multi-Dimensional Variance",
        body: "Compare actual vs budget vs forecast vs prior year by GL account, cost center, region, or custom hierarchy.",
      },
      {
        icon: "brain",
        title: "Instant Budget Questions",
        body: "Ask 'which departments exceeded budget by more than 10%?' and get an instant list with GL roots.",
      },
      {
        icon: "shield",
        title: "EU AI Act & SOX Ready",
        body: "Full audit trail for every query. Role-based access. Query-level lineage for regulated industries.",
      },
    ],
  },

  // ── Section 3.5 — Vertical Proof: Finance Use Cases ─────────
  useCases: {
    intro: {
      eyebrow: "Finance workflows",
      heading: "From board reporting to month-end close.",
      subcopy: "Three finance workflows. Three instant answers.",
    },
    cards: [
      {
        icon: "check-square",
        title: "Month-End Close Reconciliation",
        scenarioLabel: "Scenario",
        scenario:
          "Controller needs to reconcile budget vs actual across 12 GL accounts, 5 departments, in 3 currencies by EOD.",
        howLabel: "How",
        how: "Uses Quaeris to query: 'Show me actual YTD spending by GL account, rolled to budget structure.' Gets an instant drill-down with GL posting dates, reversal journals, and accrual adjustments. Sources are cited.",
        outcomeLabel: "Outcome",
        outcome:
          "Close completed in 2 hours instead of a 1-week ticket cycle.",
        cta: { label: "Read the story", href: "/case-studies" },
      },
      {
        icon: "trending-up",
        title: "Board Variance Analysis",
        scenarioLabel: "Scenario",
        scenario:
          "CFO is presenting Q3 results to the board. Director asks: 'Why did gross margin compress 150 bps?' Needs an answer in the meeting.",
        howLabel: "How",
        how: "CFO pulls up Quaeris. Asks: 'Show me gross margin variance drivers: COGS vs revenue.' Agent returns a breakdown: 60% from unfavorable COGS, 40% from mix shift. Each number cites the certified metric definition and GL reference.",
        outcomeLabel: "Outcome",
        outcome:
          "Answer delivered in 60 seconds. Board gains confidence in the numbers.",
        cta: { label: "Read the story", href: "/case-studies" },
      },
      {
        icon: "line-chart",
        title: "FP&A Forecast Variance Tracking",
        scenarioLabel: "Scenario",
        scenario:
          "FP&A manager needs to track forecast accuracy. Did July close match the June forecast? What drove the variances?",
        howLabel: "How",
        how: "Asks Quaeris: 'Compare July actual vs June forecast by product line, show variance in dollars and %.' Gets instant rollup with drill-down by segment. Can export to Excel for monthly management pack.",
        outcomeLabel: "Outcome",
        outcome:
          "Monthly forecast variance review automated. FP&A team can focus on drivers instead of data collection.",
        cta: { label: "Read the story", href: "/case-studies" },
      },
    ],
  },

  // ── Section 3.6 — Numbers That Matter ───────────────────────
  stats: {
    intro: {
      eyebrow: "Outcomes",
      heading: "The impact of instant, governed answers.",
    },
    items: [
      {
        num: "40",
        label: "Hours saved per month-end close",
        desc: "From manual reconciliation to instant query",
      },
      {
        num: "0",
        label: "Hallucinated numbers in compliance reports",
        desc: "Every answer cites certified metrics",
      },
      {
        num: "3",
        label: "Days faster to board-ready variance analysis",
        desc: "vs. traditional ad-hoc query cycle",
      },
      {
        num: "100%",
        label: "Audit-trail coverage on every financial query",
        desc: "GL lineage, user, timestamp, role enforced",
      },
    ],
  },

  // ── Section 3.7 — Technical Proof: Compliance ───────────────
  compliance: {
    intro: {
      eyebrow: "Compliance",
      heading: "Built for audited environments.",
      subcopy:
        "Quaeris was architected from day one for regulated financial services. These certifications and capabilities prove it.",
    },
    cards: [
      {
        icon: "shield",
        title: "SOC 2 Type II",
        body: "Annual audit of security, availability, and integrity controls.",
        placeholder: true,
      },
      {
        icon: "file-check",
        title: "HIPAA Ready",
        body: "BAA available; supports healthcare finance and insurance operations.",
        placeholder: true,
      },
      {
        icon: "globe",
        title: "GDPR Compliant",
        body: "EU AI Act compliance roadmap published; data residency controls enforced.",
        placeholder: true,
      },
      {
        icon: "users",
        title: "Role-Based Access Control (RBAC)",
        body: "Access policies mapped to GL account hierarchies; enforced at query time, not dashboard level.",
      },
      {
        icon: "file-text",
        title: "Full Audit Trail",
        body: "Full audit log: who asked, what was asked, when, and what role — every query captured for compliance investigations.",
        placeholderVerify: true,
      },
      {
        icon: "database",
        title: "Warehouse-Native Architecture",
        body: "Your data never leaves your environment. Queries run directly on your Snowflake, BigQuery, or Redshift.",
      },
    ],
  },

  // ── Section 3.8 — Customer Voices ───────────────────────────
  testimonials: {
    intro: {
      eyebrow: "Customer voices",
      heading: "Finance leaders who trust Quaeris.",
      subcopy: "From controllers to CFOs, from regional finance to global FP&A.",
    },
    cards: [
      {
        title: "Metric Definition Consolidation",
        quote:
          "\"We had 15 definitions of 'revenue' across our GL, BI tool, and spreadsheets. Consolidating them into Quaeris's semantic layer was the first time everyone agreed. The board now sees the same number every time we report.\"",
        initials: "CP",
        name: "C.P., Head of FP&A",
        role: "[Company Name]",
      },
      {
        title: "Audit Confidence",
        quote:
          '"Our auditors grilled us on revenue calculation variance between reports. Quaeris let us trace every number back to the GL in one click. Audit finding closed in the next meeting. That\'s never happened before."',
        initials: "TM",
        name: "T.M., VP Controller",
        role: "[Company Name]",
      },
      {
        title: "Board-Ready Speed",
        quote:
          "\"Month-end close used to take a week because we'd manually reconcile variance reports. Now, the CFO runs a single Quaeris query and has the full variance breakdown with GL lineage. Took 20 seconds.\"",
        initials: "RK",
        name: "R.K., Director of Finance",
        role: "[Company Name]",
      },
      {
        title: "Forecast Accuracy Tracking",
        quote:
          "\"We set monthly forecasts in June, and I'd spend 3 days analyzing why July didn't match. Quaeris automated that. Now I can spot trends and forecast misses in real time. My FP&A role changed from data janitor to strategist.\"",
        initials: "AL",
        name: "A.L., Senior FP&A Analyst",
        role: "[Company Name]",
      },
      {
        title: "Role-Based Governance",
        quote:
          '"Giving business users analytics access always scared me—compliance risk. Quaeris\'s role-based controls mean an accounting manager only sees their GL accounts. Gives them speed without giving me heartburn."',
        initials: "JD",
        name: "J.D., Chief Financial Officer",
        role: "[Company Name]",
      },
      {
        title: "Multi-Currency Reconciliation",
        quote:
          '"Global consolidation was always error-prone. Different entities would use different FX rates. Locked the rates into the semantic layer, and now every rollup uses the same conversion. Month-end reconciliation headache—solved."',
        initials: "SN",
        name: "S.N., Global Finance Director",
        role: "[Company Name]",
      },
    ],
  },

  // ── Section 3.9 — FAQ ───────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "FAQ",
      heading: "Questions finance teams ask.",
      subcopy: "(And the governance-first answers.)",
    },
    items: [
      {
        id: "faq-fin-1",
        question: "Will your platform break our audit?",
        answer:
          "No. Quaeris is architected to strengthen audits. Every metric definition is versioned and owned. Every query is logged with timestamp, user, role, and lineage. When the auditor asks 'how did you calculate that number?', you open Quaeris and show the full GL-to-answer lineage. The audit trail lives in your environment—Quaeris doesn't store your financial data.",
        defaultOpen: true,
      },
      {
        id: "faq-fin-2",
        question: "Can we map metrics to GL accounts directly?",
        answer:
          "Yes. The semantic layer lets your data team define revenue as 'GL accounts 4000-4099 excluding inter-company' and COGS as 'GL 5000-5299 adjusted for standard cost variance.' These definitions are stored in your warehouse and versioned for audit compliance.",
      },
      {
        id: "faq-fin-3",
        question: "What if our GL structure changes mid-year?",
        answer:
          "Metric definitions are versioned. If you add a GL account to the revenue definition in Q3, both the old and new definitions are preserved. Historical reports use the historical definition; forward reports use the new one. Audit-ready.",
      },
      {
        id: "faq-fin-4",
        question: "Does Quaeris handle multi-currency consolidation?",
        answer:
          "Yes. Define FX rates and consolidation rules in the semantic layer. Every agent answer applies the same consolidation logic. Queries like 'Show me revenue in USD, GBP, and EUR with Q2 FX rates' work instantly.",
      },
      {
        id: "faq-fin-5",
        question: "Can we enforce role-based access at the GL account level?",
        answer:
          "Yes. Define roles that map to GL account hierarchies: 'Accounting Manager sees GL 1000-1999 only.' Access is enforced at query time, not at the dashboard level. An accounting manager can't query GL 4000 even if they somehow find the right question to ask.",
      },
      {
        id: "faq-fin-6",
        question: "How do we handle month-end cut-off dates?",
        answer:
          "Define cutoff logic in the semantic layer: 'Revenue for month-end close = GL account 4000 filtered by posting date <= [month-end date].' Every agent query uses the same cutoff. No more 'which revenue number?' debates.",
      },
      {
        id: "faq-fin-7",
        question:
          "Does Quaeris integrate with our GL system (NetSuite, SAP, etc.)?",
        answer:
          "Quaeris connects to your data warehouse (Snowflake, BigQuery, etc.), where your GL data already lives via ERP connectors. We don't pull data out of your ERP—we query the synced GL data in your warehouse. Your audit controls remain intact.",
      },
    ],
  },

  // ── Section 3.10 — CTA Band ─────────────────────────────────
  cta: {
    eyebrow: "Ready to trust your numbers?",
    heading: "Stop reconciling. Start governing.",
    subcopy:
      "Book a 30-minute finance demo. We'll connect to your GL (anonymized data OK), show you a live variance query with full audit trail, and discuss how Quaeris integrates into your close calendar. No slides. Just a governed answer against real finance questions.",
    primary: { label: "Book a Finance Demo", href: "/contact" },
    secondary: { label: "See the platform overview", href: "/platform" },
  },

  // ── Section 3.11 — Newsletter ───────────────────────────────
  newsletter: {
    eyebrow: "The Governed Analytics Brief",
    heading:
      "Weekly insights for finance leaders moving to AI-powered analytics.",
    body: "Practical reads on metric governance, audit compliance, and agentic AI in financial reporting. Thursdays. No sales pitch.",
    inputLabel: "Work email",
    placeholder: "Work email",
    cta: "Subscribe",
  },
} satisfies SolutionsFinancePageContent;
