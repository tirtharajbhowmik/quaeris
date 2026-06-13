import type { SolutionsExecutivesPageContent } from "@/config/page-types/solutions-executives";

export const solutionsExecutivesPage = {
  meta: {
    title: "AI Analytics for Executives | Trusted Metrics On Demand",
    description:
      "Skip the data tickets. Get governed answers in seconds. Quaeris delivers trusted business metrics and executive insights on any device, audited end-to-end.",
  },

  // ── Section 02 — Hero ───────────────────────────────────────
  hero: {
    eyebrow: "For Executives",
    h1: "Answers in seconds. Numbers you can trust.",
    subcopy:
      "Stop waiting on data tickets. Quaeris delivers governed business metrics on demand—audited, sourced, and accurate. Ask questions in plain language. Get the answers you need before the next meeting.",
    primaryCta: {
      label: "See a live demo",
      href: "/contact?role=executive",
      ariaLabel: "See a live demo for executives",
    },
    ghostCta: {
      label: "Explore how it works",
      href: "#how-it-works",
      ariaLabel: "Explore how Quaeris works for executives",
    },
    trust: [
      { icon: "shield-check", text: "Audit trail on every query" },
      { icon: "lock", text: "Role-based access enforced" },
      { icon: "database", text: "Warehouse-native (zero data copy)" },
    ],
  },

  // ── Section 03 — Problem/Solution Cards ─────────────────────
  problem: {
    intro: {
      eyebrow: "The Executive Data Problem",
      heading: "Metrics used to be a conversation. Now they're a process.",
      subcopy:
        "Three patterns break executive decision-making in governed enterprises.",
    },
    cards: [
      {
        index: "01",
        title: "Metric Definition Drift",
        problem:
          "Finance says revenue is $X; sales says $Y. Two teams, two numbers, one angry board.",
        fixLabel: "Single Governed Definition",
        fixBody:
          "Every query uses the certified metric your data team owns. When definitions change, the audit trail shows who changed it and why. No more conflicting numbers.",
      },
      {
        index: "02",
        title: "Analytics Request Backlog",
        problem:
          "\"I need Q3 performance by region.\" You email analytics. They add it to the queue. You get the answer Thursday, but you needed it Monday.",
        fixLabel: "Instant Self-Service",
        fixBody:
          "Ask in plain language. Quaeris executes against your governed metrics in 14 minutes. No queue, no waiting, no \"I'll get back to you.\"",
      },
      {
        index: "03",
        title: "Hidden Query Logic",
        problem:
          "You see a number in a dashboard but can't trace where it came from. Did someone change a filter? Is this old data? You don't know.",
        fixLabel: "Full Lineage & Audit Trail",
        fixBody:
          "Click any metric. See the exact query, the data source, the business rules applied, and who asked the question. Traceability by design.",
      },
    ],
  },

  // ── Section 04 — Three Value Drivers ────────────────────────
  valueDrivers: {
    intro: {
      eyebrow: "Why Executives Trust Quaeris",
      heading: "Three layers of oversight, zero hallucinations.",
      subcopy:
        "Governed agentic analytics means every answer is grounded in certified metrics, fully audited, and tied to the semantic layer your data team controls.",
    },
    items: [
      {
        icon: "shield-check",
        title: "No Hallucinations",
        body: "Quaeris agents query governed metrics, not language model memory. Every number is certified and traceable. If the answer can't be sourced, the agent says so.",
      },
      {
        icon: "link",
        title: "Complete Lineage",
        body: "From question to source data. Executives click any metric and see the exact query, business rules applied, and who asked. Governance by design.",
      },
      {
        icon: "lock",
        title: "Enforced Access Control",
        body: "Role-based permissions apply at query time, not as a dashboard filter. Executive sees only the slice of data their role permits—automatically, consistently.",
      },
    ],
  },

  // ── Section 05 — Executive Use Cases ────────────────────────
  useCases: {
    intro: {
      eyebrow: "How Executives Use Quaeris",
      heading: "Real questions, real answers, real outcomes.",
      subcopy:
        "Across finance, operations, and strategy—executives skip the queue and get governed answers in seconds.",
    },
    note: "Example — illustrative data. These tiles show sample questions and outputs for UI demonstration only.",
    cards: [
      {
        icon: "trending-up",
        title: "CFO — Revenue Variance",
        question:
          "\"What drove the $2M revenue miss in EMEA last quarter?\"",
        answerLabel: "Answer",
        answer:
          "Volume down 8% + ASP flat vs. plan. Sourced from billing + contracts tables. Audit: Q3 query, role CFO, timestamp.",
      },
      {
        icon: "bar-chart-3",
        title: "CEO — Board Dashboard",
        question:
          "\"What's our ARR, churn rate, and new customer acquisition this month?\"",
        answerLabel: "Answer",
        answer:
          "Three certified metrics, updated hourly. One click shows lineage for each. Board sees the same numbers as finance.",
      },
      {
        icon: "clipboard-check",
        title: "CDO — Governance Audit",
        question:
          "\"Who queried customer margin data in the last 90 days?\"",
        answerLabel: "Answer",
        answer:
          "Complete query audit log. 47 queries, 8 roles, all within policy. Full lineage for flagged anomalies.",
      },
      {
        icon: "alert-triangle",
        title: "VP Operations — Anomaly Alert",
        question:
          "\"Why did our operational cost jump 15% week-over-week?\"",
        answerLabel: "Answer",
        answer:
          "Manual cost allocation on Tuesday + seasonal contractor surge. Quaeris highlights the root cause automatically.",
      },
      {
        icon: "calculator",
        title: "Head of Finance Planning — Budget vs. Actual",
        question:
          "\"Are we tracking to full-year guidance on payroll spend?\"",
        answerLabel: "Answer",
        answer:
          "On track. 94% of full-year budget consumed by month 9. Variance by department. No surprises.",
      },
      {
        icon: "file-text",
        title: "Investor Relations — Metric Definition Proof",
        question:
          "\"Can we prove to auditors that our ARR and logo retention metrics match the definitions in our S-1?\"",
        answerLabel: "Answer",
        answer:
          "Yes. Audit trail for every query. Metric definitions versioned and signed off by the CFO. Certified.",
      },
    ],
  },

  // ── Section 06 — The Speed Advantage ────────────────────────
  speed: {
    eyebrow: "How Quaeris Works for Executives",
    heading: "From question to trusted answer in 14 minutes.",
    body: "No data team bottleneck. No waiting for the report. Ask a question in plain language. Quaeris returns a governed answer—sourced, audited, and ready to act on. Every answer shows its metrics, its lineage, and who asked. Compliance built in.",
    cta: {
      label: "Explore the platform",
      href: "/platform",
      ariaLabel: "Explore the Quaeris platform",
    },
    panel: {
      query: "What is our Q3 revenue by region and segment?",
      metrics: [
        { label: "EMEA Revenue", value: "$4.8M", badge: "Certified" },
        { label: "AMER Revenue", value: "$11.2M", badge: "Certified" },
        { label: "APAC Revenue", value: "$2.6M", badge: "Certified" },
      ],
      meta: [
        {
          icon: "git-branch",
          text: "Sources: billing.revenue, contracts.segment, geo.region",
        },
        {
          icon: "scroll-text",
          text: "Audit trail: Query by CFO at 2026-06-12 14:47 UTC",
        },
      ],
      caption: "Example—illustrative data for demonstration only",
    },
  },

  // ── Section 07 — Proof: Customer Outcome Cards ──────────────
  proof: {
    intro: {
      eyebrow: "Proven with Real Leaders",
      heading: "Executives cutting insight time by 3×.",
      subcopy:
        "From deployment to board-ready answers—here's what it looks like in the first 90 days.",
    },
    cards: [
      {
        industry: "Financial Services",
        role: "Chief Financial Officer",
        outcome:
          "\"We stopped debating whose number was right. The board pack now builds itself from certified metrics—and every figure can show its work.\"",
        stats: [
          { num: "62%", label: "Fewer data-team tickets" },
          { num: "14 min", label: "Median time to answer" },
          { num: "5×", label: "Self-serve queries by month 3" },
        ],
        logoNote: "Customer logo — pending opt-in",
        cta: {
          label: "Read the story",
          href: "/case-studies",
          ariaLabel: "Read the financial services case study",
        },
      },
      {
        industry: "Healthcare / Insurance",
        role: "Chief Data Officer",
        outcome:
          "\"Compliance signed off because every metric traces to source. Our audit reviews got shorter, not longer, after we added AI.\"",
        stats: [
          { num: "100%", label: "Metrics traced to source" },
          { num: "40%", label: "Shorter compliance reviews" },
          { num: "9 mo", label: "Hallucination-free deployment" },
        ],
        logoNote: "Customer logo — pending opt-in",
        cta: {
          label: "Read the story",
          href: "/case-studies",
          ariaLabel: "Read the healthcare and insurance case study",
        },
      },
      {
        industry: "Technology / SaaS",
        role: "CEO + CFO Joint Deployment",
        outcome:
          "\"Finance and the board now read from the same semantic layer. Reconciliation meetings simply stopped happening.\"",
        stats: [
          { num: "92%", label: "Semantic layer adoption" },
          { num: "2 wks", label: "To aligned metric definitions" },
          { num: "0", label: "Board reconciliation disputes" },
        ],
        logoNote: "Customer logo — pending opt-in",
        cta: {
          label: "Read the story",
          href: "/case-studies",
          ariaLabel: "Read the technology and SaaS case study",
        },
      },
    ],
  },

  // ── Section 08 — Governance & Compliance Assurance ──────────
  governance: {
    intro: {
      eyebrow: "Built for Governed Enterprises",
      heading: "Compliance, not an afterthought.",
      subcopy:
        "Quaeris is designed for regulated industries and governance-first organizations. Audit trails, role-based access, warehouse-native deployment, and BYOM as a compliance feature—not a sales pitch.",
    },
    cards: [
      {
        icon: "scroll-text",
        title: "Complete Audit Trail",
        body: "Every query and answer logged. Who asked the question, when, what metrics were used, and the exact business rules applied. Queryable, downloadable, SOX/HIPAA ready.",
      },
      {
        icon: "lock",
        title: "Role-Based Access at Query Time",
        body: "Permissions enforced when the agent executes, not as a dashboard filter. Users see exactly the slice of data their role permits. Role changes propagate instantly.",
      },
      {
        icon: "server",
        title: "Warehouse-Native Deployment",
        body: "Your data never leaves your environment. Quaeris queries your Snowflake, BigQuery, Databricks, or Redshift in place. Zero data residency risk.",
      },
      {
        icon: "cpu",
        title: "BYOM: Your Compliance, Your Model",
        body: "Connect OpenAI, Anthropic, Google, or Meta models. Your compliance team chooses the LLM vendor. Quaeris is not the model gatekeeper.",
      },
      {
        icon: "shield-alert",
        title: "SOC 2 Type II · GDPR · HIPAA Ready",
        body: "Enterprise security posture, audit-ready architecture. Full infrastructure details available under NDA.",
        placeholder: true,
      },
    ],
  },

  // ── Section 09 — FAQ ────────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "Common Questions",
      heading: "Clear answers, no fluff.",
    },
    miniCard: {
      title: "Still have questions?",
      body: "Book a 30-minute executive briefing with a Quaeris solutions architect. We'll walk through your governance model and show you a live answer against your own data.",
      cta: {
        label: "Book a Demo",
        href: "/contact?role=executive",
        ariaLabel: "Book an executive briefing demo",
      },
    },
    items: [
      {
        id: "faq-a1",
        question: "Does Quaeris hallucinate numbers like ChatGPT does?",
        answer:
          "No. Quaeris agents query your governed semantic layer—they don't generate numbers from training data. Every answer is grounded in certified metric definitions your data team controls and maintains. If an answer can't be sourced from the semantic layer, the agent explicitly says so rather than guessing. This is a fundamental architectural difference from generic AI chatbots.",
        defaultOpen: true,
      },
      {
        id: "faq-a2",
        question:
          "How is access controlled? Can an executive see data outside their permission scope?",
        answer:
          "Role-based access controls apply at query time, when the agent executes the query. Access is enforced at the database level—not as a dashboard filter that can be circumvented. If an executive's role doesn't permit visibility into APAC revenue, the query will reject that filter and return only the data their role permits. Every access decision is audited.",
      },
      {
        id: "faq-a3",
        question:
          "What's the deployment timeline? How long until I get my first answered question?",
        answer:
          "Most teams deploy in 2–3 weeks. Week 1: warehouse integration and semantic layer setup. Week 2: executive access configuration and user onboarding. You get your first governed answer by week 2. There is no data migration—your existing warehouse becomes the query target.",
      },
      {
        id: "faq-a4",
        question: "Do you replace our BI tool?",
        answer:
          "No. Quaeris complements your BI stack. Your dashboards and reports stay—they're still the system of record for structured, scheduled reporting. Quaeris answers the questions that don't fit a dashboard: 'What happened to gross margin in Q3?' 'Why did churn spike?' 'Are we tracking to plan?' Exploratory, ad-hoc, governed questions.",
      },
      {
        id: "faq-a5",
        question: "Where does our data live? Is there a data copy in the cloud?",
        answer:
          "Your data stays in your warehouse. Quaeris is warehouse-native—it connects directly to your Snowflake, BigQuery, Databricks, or Redshift instance and queries it in place. We don't copy, cache, or replicate your data to Quaeris infrastructure. Your data residency and compliance posture remain unchanged.",
      },
      {
        id: "faq-a6",
        question: "Can auditors verify that metrics are consistent and auditable?",
        answer:
          "Yes. Every metric is versioned, owned, and traced to source. The audit trail shows when metric definitions changed, who changed them, and why. You can download the full audit log for any query and present it to regulators. This is what audit trail by design actually looks like.",
      },
      {
        id: "faq-a7",
        question:
          "What if we use multiple data warehouses (Snowflake + BigQuery)?",
        answer:
          "Quaeris can query across multiple warehouses in a single semantic layer. The semantic layer is warehouse-agnostic, so you can define once and query everywhere.",
      },
    ],
  },

  // ── Section 10 — CTA Band ───────────────────────────────────
  cta: {
    eyebrow: "Ready to stop waiting on data?",
    heading: "Start getting governed answers in 14 minutes.",
    subcopy:
      "Book a personalized 30-minute executive briefing. We'll show you how Quaeris delivers trusted metrics on any device, audited end-to-end. No generic demo. We'll bring the conversation to your warehouse.",
    primary: {
      label: "Book a Demo",
      href: "/contact?role=executive",
      ariaLabel: "Book a demo for executives",
    },
    secondary: {
      label: "See case studies",
      href: "#customer-proof",
      ariaLabel: "See executive case studies",
    },
  },
} satisfies SolutionsExecutivesPageContent;
