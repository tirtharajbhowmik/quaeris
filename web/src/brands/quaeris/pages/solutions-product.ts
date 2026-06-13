import type { SolutionsProductPageContent } from "@/config/page-types/solutions-product";

export const solutionsProductPage = {
  meta: {
    title: "AI Analytics for Product Teams | Quaeris",
    description:
      "Ask engagement and retention questions without SQL. Governed analytics for product teams—certified metrics, audit trails, zero hallucinations.",
  },

  // ── Section 3.1 — Hero ──────────────────────────────────────
  hero: {
    eyebrow: "Product Analytics",
    h1: "Understand your users.",
    h1Accent: "Without writing SQL.",
    subcopy:
      "Quaeris gives product teams instant access to engagement, retention, and cohort metrics—grounded in your governed semantic layer. Ask anything. Get sources cited.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    ghostCta: { label: "See analytics in action", href: "#use-cases" },
    card: {
      ariaLabel:
        "Illustration of a Quaeris governed answer: a plain-language retention question with a certified, source-cited result",
      question: "“What is retention for users acquired in Q1 2026?”",
      stat: {
        label: "Day-30 retention — Q1 2026 cohort",
        value: "38%",
      },
      badges: [
        { label: "Certified metric", accent: true },
        { label: "Sources cited", accent: true },
        { label: "Audited" },
      ],
      meta: [
        { text: "Definition: retention-rate" },
        { text: "Window: cohort-window" },
        { text: "Lineage traced to source" },
      ],
    },
  },

  // ── Section 3.2 — Problem / Solution ────────────────────────
  challenge: {
    intro: {
      eyebrow: "",
      heading: "The Product Analytics Challenge",
    },
    cards: [
      {
        index: "01",
        problemIcon: "clock",
        problemTitle: "Time-to-insight kills momentum",
        problem:
          "You ask a retention question on Monday. Your data team builds it Friday. By then, the window has passed and you’re on to the next issue. Product velocity gets crushed by analytics latency.",
        fixLabel: "Solution",
        fixIcon: "zap",
        fixTitle: "14-minute time-to-insight, not multi-day builds",
        fixBody:
          "Type your question once. Quaeris agents interpret it, query your semantic layer, and return a certified answer with sources cited—with a median time to first insight of 14 minutes, not days.",
      },
      {
        index: "02",
        problemIcon: "alert-triangle",
        problemTitle: "Conflicting definitions cause wrong calls",
        problem:
          "One team’s ‘active user’ is another’s ‘paid user.’ Your CEO’s board presentation uses different retention math than your product spec. These inconsistencies compound into misaligned decisions.",
        fixLabel: "Solution",
        fixIcon: "check-circle",
        fixTitle: "One definition per metric, always",
        fixBody:
          "Your data team owns the semantic layer. Every agent answer is locked to certified metric definitions—revenue, activation, churn, cohort size. Same definition, every time, every team.",
      },
      {
        index: "03",
        problemIcon: "lock",
        problemTitle: "Governance and speed feel like a tradeoff",
        problem:
          "Self-serve BI gives you speed but breaks compliance. Asking analysts gives you audit trails but kills productivity. You’re stuck choosing between velocity and control.",
        fixLabel: "Solution",
        fixIcon: "shield",
        fixTitle: "Governed speed. Role-based access enforced.",
        fixBody:
          "Quaeris is governance-first by design. Role-based access is enforced at the agent level, not at the dashboard filter. Every query and answer is audited. Speed and compliance, not either-or.",
      },
    ],
  },

  // ── Section 3.3 — How Product Teams Use Quaeris ─────────────
  howItWorks: {
    intro: {
      eyebrow: "Four-Step Flow",
      heading: "How Product Teams Get Governed Answers",
    },
    steps: [
      {
        icon: "database",
        title: "Connect your warehouse",
        body: "Link Quaeris to Snowflake, BigQuery, Databricks, or Redshift. Your event data, user tables, and subscription facts become queryable through one governed semantic layer.",
        visual: "Warehouse connection diagram",
      },
      {
        icon: "layers",
        title: "Define product metrics once",
        body: "Your data team defines activated-users, retention-rate, churn-definition, cohort-window. These live in the semantic layer. Every agent answer locks to these definitions.",
        visual: "Semantic layer edit UI",
      },
      {
        icon: "message-square",
        title: "Ask in plain language",
        body: "Type: “What is retention for users acquired in Q1 2026?” or “Cohort sizes by acquisition channel?” Quaeris interprets the question and queries the semantic layer, no SQL needed.",
        visual: "Agent chat interface",
      },
      {
        icon: "check-circle-2",
        title: "Get governed answers, every time",
        body: "The answer shows engagement, retention, or cohort breakdown—plus the metric definitions and data lineage behind it. Role-based access means your product managers only see data they’re allowed to see.",
        visual: "Answer card with sources cited",
      },
    ],
  },

  // ── Section 3.4 — Real Metrics & Use Cases ──────────────────
  useCases: {
    intro: {
      eyebrow: "Common Questions from Product Teams",
      heading: "Product Questions Quaeris Answers",
    },
    cards: [
      {
        icon: "trending-up",
        category: "Activation & Engagement",
        metric: "“What is day-1, day-7, day-30 activation by cohort?”",
        questions: [
          "“How many users activated within 24 hours of signup?”",
          "“Which onboarding path drives fastest feature adoption?”",
          "“What’s the engagement curve for mobile vs. web users?”",
        ],
        answer:
          "Quaeris returns activation rates by cohort, with the metric definitions and the warehouse tables queried, all audited.",
      },
      {
        icon: "user-check",
        category: "Retention & Churn Analysis",
        metric: "“What is day-30 retention for high-value cohorts?”",
        questions: [
          "“What’s our retention curve for power users in Q2 2026?”",
          "“Which features correlate with staying vs. churning?”",
          "“How does retention differ by subscription tier?”",
        ],
        answer:
          "Quaeris surfaces retention by segment with lineage back to the churn definition your team certified.",
      },
      {
        icon: "filter",
        category: "Cohort & Conversion Funnels",
        metric: "“How many users funnel through [event A] → [event B] → [event C]?”",
        questions: [
          "“What’s the conversion rate from trial signup to first paid month?”",
          "“How do users in different acquisition cohorts progress through our product?”",
          "“What’s the step-off point in our onboarding funnel?”",
        ],
        answer:
          "Quaeris builds funnels from your event schema and returns drop-off rates per step, all certified.",
      },
      {
        icon: "dollar-sign",
        category: "Product-Driven Revenue Metrics",
        metric: "“Does feature adoption correlate with lifetime value?”",
        questions: [
          "“What’s the LTV for users who adopted feature X in their first week?”",
          "“How does churn rate vary by usage intensity?”",
          "“Which segments are expanding vs. contracting?”",
        ],
        answer:
          "Quaeris correlates usage with ARR, churn, and expansion revenue—all audited, all linked to certified definitions.",
      },
    ],
  },

  // ── Section 3.5 — Proof: Case Studies ───────────────────────
  proof: {
    intro: {
      eyebrow: "Real Deployments",
      heading: "Product Teams Moving Faster",
    },
    cards: [
      {
        industry: "B2B SaaS",
        client: "Named Product SaaS",
        challengeLabel: "Challenge",
        challenge:
          "Product team was writing 5–10 analytics requests per week. Each took 2–3 days. Team velocity on features plummeted because half the time went to waiting for data.",
        solutionLabel: "Solution",
        solution:
          "Deployed Quaeris with a 120-metric semantic layer. Linked to Snowflake. Gave product team read-access to the agent interface.",
        outcomeLabel: "Outcome",
        outcomes: [
          "80% of analytics requests now answered in minutes, not days",
          "Product team unblocked 12 feature launches in Q2",
          "Data consistency: one definition of ‘active user’ across dashboards, decks, and conversations",
        ],
        quote:
          "“Before Quaeris, we were our own bottleneck. Now I ask a question and get a cited answer in 10 minutes. Everything we ship is grounded in the same metric.”",
      },
      {
        industry: "Retail / eCommerce",
        client: "Named Retail / eCommerce",
        challengeLabel: "Challenge",
        challenge:
          "Mobile, web, and in-store teams each had their own definition of ‘purchase’ and ‘repeat customer.’ Board meetings were debates about methodology, not insights.",
        solutionLabel: "Solution",
        solution:
          "Federated all event definitions into a Quaeris semantic layer. Taught product teams to ask cohort and retention questions in plain language.",
        outcomeLabel: "Outcome",
        outcomes: [
          "One definition per KPI across all channels",
          "Board consensus on metrics: first time in three years",
          "Product team now runs their own engagement analysis; no longer waiting on analytics",
        ],
        quote:
          "“Quaeris solved a problem we didn’t know how to name: the audit trail of who asked what and why the numbers matter.”",
      },
    ],
    cta: { label: "See Real Case Studies", href: "/case-studies" },
  },

  // ── Section 3.6 — Feature Spotlight: Governance & Audit ──────
  governance: {
    intro: {
      eyebrow: "Governance Built In, Not Bolted On",
      heading: "Why Product Teams Trust Quaeris",
    },
    valueProps: [
      {
        index: "01",
        icon: "check-square",
        title: "Certified Metrics, Not Model Outputs",
        body: "Quaeris agents query your semantic layer—they don’t generate numbers. Your data team owns the definitions. Every engagement metric, every retention curve, every cohort breakdown is locked to definitions your team certifies.",
      },
      {
        index: "02",
        icon: "git-branch",
        title: "Full Lineage: Question to Source",
        body: "Click any answer and trace it back: which metric definition was used, which warehouse table it queried, which business rule applied. Product managers can audit any number in one click. Executives see sources, not hunches.",
      },
      {
        index: "03",
        icon: "shield",
        title: "Role-Based Access, Enforced at Query Time",
        body: "Access policies aren’t dashboard filters—they’re enforced when the agent runs. Product managers in North America see US data only. Product managers in EMEA see EMEA data only. Nothing more. Nothing less. Every query is logged for audit.",
      },
    ],
    cta: { label: "Governance & Audit Trails", href: "/platform/governance" },
    dashboard: {
      header: "Product analytics — governed view",
      badge: "Audited",
      tiles: [
        {
          label: "Engagement questions answered",
          value: "142",
          delta: "this month",
        },
        { label: "Avg answer time", value: "14s" },
        { label: "Metrics certified", value: "87" },
        { label: "Access violations caught", value: "0", active: true },
      ],
      caption: "Cohort retention trend — trailing 6 months",
    },
  },

  // ── Section 3.7 — Competitive Context ───────────────────────
  comparison: {
    intro: {
      eyebrow: "",
      heading: "Why Product Teams Choose Quaeris Over Legacy Tools",
    },
    caption:
      "Comparison of legacy BI dashboards, ad-hoc SQL or analyst workflows, and Quaeris across six dimensions",
    table: {
      columns: [
        { label: "Dimension" },
        { label: "Legacy BI Dashboard" },
        { label: "Ad-Hoc SQL / Analyst" },
        { label: "Quaeris", highlight: true },
      ],
      rows: [
        {
          feature: "Speed to insight",
          cells: [
            { kind: "text", value: "Weeks to deploy, days to query" },
            { kind: "text", value: "2–5 days per request" },
            { kind: "text", value: "10–20 minutes, self-serve" },
          ],
        },
        {
          feature: "Metric consistency",
          cells: [
            { kind: "text", value: "Different definitions per dashboard" },
            { kind: "text", value: "Definitions live in analysts’ heads" },
            { kind: "text", value: "One semantic layer, always certified" },
          ],
        },
        {
          feature: "Governance",
          cells: [
            { kind: "text", value: "Dashboard filters only; not enforced" },
            { kind: "text", value: "Ad-hoc access; hard to audit" },
            { kind: "text", value: "Query-time access control; fully audited" },
          ],
        },
        {
          feature: "Who can ask questions",
          cells: [
            { kind: "text", value: "“Dashboard builders” only" },
            { kind: "text", value: "Analysts and data engineers" },
            { kind: "text", value: "Any product person; no SQL needed" },
          ],
        },
        {
          feature: "Audit trail",
          cells: [
            { kind: "text", value: "“What dashboard was viewed”" },
            {
              kind: "text",
              value: "Which analyst ran what; hard to trace sources",
            },
            {
              kind: "text",
              value: "Every question, answer, and source metric logged",
            },
          ],
        },
        {
          feature: "Compliance readiness",
          cells: [
            { kind: "text", value: "Weak; data may have escaped to Excel" },
            { kind: "text", value: "Manual audit logs" },
            { kind: "text", value: "Built-in lineage; EU AI Act ready" },
          ],
        },
      ],
    },
  },

  // ── Section 3.8 — Integration & Warehouse Compatibility ─────
  integrations: {
    intro: {
      eyebrow: "Connect in Minutes",
      heading: "Works with Your Warehouse",
    },
    warehouses: [
      "Snowflake",
      "BigQuery",
      "Databricks",
      "Redshift",
      "Azure Synapse",
      "SharePoint",
      "Google Drive",
    ],
    body: "Quaeris connects directly to your warehouse. No data migration. No ETL pipeline rebuilds. Your data stays exactly where it is—we query in place, enforce role-based access, and log every query.",
    cta: { label: "How Quaeris Works", href: "/platform" },
  },

  // ── Section 3.9 — FAQ ───────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "Common Questions from Product Leaders",
      heading: "Product Questions About Quaeris",
    },
    miniCard: {
      title: "Keep exploring",
      links: [
        { label: "Back to Solutions", href: "/solutions" },
        { label: "How Quaeris Works", href: "/platform" },
        {
          label: "Learn About the Smart Semantic Layer",
          href: "/platform/semantic-layer",
        },
        { label: "Governance & Audit Trails", href: "/platform/governance" },
      ],
    },
    items: [
      {
        id: "faq-a1",
        question: "Do we need to remodel our data to use Quaeris?",
        answer:
          "No. Quaeris works with your existing event and fact tables. Your data team defines the semantic layer (the certified metrics) on top of your warehouse schema. No new tables needed, no data remodeling required.",
        defaultOpen: true,
      },
      {
        id: "faq-a2",
        question:
          "Can we ask time-series questions—like ‘How does retention trend month-over-month?’",
        answer:
          "Yes. Quaeris agents can build trend analysis, cohort tracking, and time-series forecasts directly from your semantic layer. Ask “What is our cohort retention trend for the last 6 months?” and the agent retrieves and visualizes the data automatically.",
      },
      {
        id: "faq-a3",
        question: "What if a metric isn’t in our semantic layer yet?",
        answer:
          "Your data team can add new metric definitions to the semantic layer in a single session. Once defined, the agent can query it immediately. This usually takes minutes, not days or weeks.",
      },
      {
        id: "faq-a4",
        question:
          "How do we avoid different teams asking the same question in different ways?",
        answer:
          "The semantic layer is the source of truth. Every agent answer is locked to the same certified definitions. Over time, your team converges on the same language and methodology. Quaeris also surfaces how similar questions were answered before.",
      },
      {
        id: "faq-a5",
        question: "Can our external partners or consultants ask questions safely?",
        answer:
          "Yes, with role-based access control. You can grant partner accounts read-access to specific metrics and cohorts. Access is enforced at query time. Every partner query is logged. You maintain full audit control.",
      },
      {
        id: "faq-a6",
        question: "What about data residency and compliance?",
        answer:
          "Quaeris is warehouse-native—your data never leaves your environment. GDPR, HIPAA, SOC 2, and FedRAMP compliance depend on your warehouse’s certifications. Quaeris’s audit trail and role-based access help you meet regulatory requirements.",
      },
    ],
  },

  // ── Section 3.10 — CTA Band ─────────────────────────────────
  cta: {
    eyebrow: "Ready to Unblock Your Product Team?",
    heading: "Stop waiting for analysts. Start asking Quaeris.",
    subcopy:
      "Book a 30-minute demo. We’ll show you how to connect your warehouse, define metrics once, and unlock self-serve analytics for your entire product org.",
    primary: { label: "Book a Demo", href: "/contact" },
    secondary: { label: "Watch a 5-minute walkthrough", href: "/contact" },
  },

  // ── Section 3.11 — Newsletter ───────────────────────────────
  newsletter: {
    eyebrow: "The Governed Analytics Brief",
    heading: "Weekly insights for product leaders and analytics engineers.",
    body: "One practical read on retention metrics, engagement analysis, and product-driven growth—every Thursday. No hype. No sales emails. Just insights.",
    placeholder: "your@email.com",
    cta: "Subscribe",
    consent: "No spam. Unsubscribe any time. We handle your data per our",
    privacyLink: { label: "Privacy Policy", href: "/privacy" },
  },
} satisfies SolutionsProductPageContent;
