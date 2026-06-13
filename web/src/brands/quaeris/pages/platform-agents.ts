import type { PlatformAgentsPageContent } from "@/config/page-types/platform-agents";

export const platformAgentsPage = {
  meta: {
    title: "Agentic Query Engine | Ask Govern Return | Quaeris",
    description:
      "Plain-language questions answered by governed agents. Understand how Quaeris agents translate queries, cite sources, and enforce governance.",
  },

  // ── 3.1 Hero ────────────────────────────────────────────────
  hero: {
    eyebrow: "The Agentic Query Engine",
    h1: "Ask. We answer. Sources cited.",
    subcopy:
      "Quaeris agents turn plain-language questions into governed, audited answers. No hallucinations. No guessing. Every number traces back to a certified metric in your semantic layer.",
    ghostCta: { label: "Platform overview", href: "/platform" },
    video: {
      ariaLabel:
        "Watch a 2-minute demo of the Agentic Query Engine (opens video)",
      label: "Watch a 2-minute demo",
      duration: "2:04 · Governed answer, live warehouse",
    },
  },

  // ── 3.2 Three-Step Workflow ─────────────────────────────────
  workflow: {
    intro: {
      eyebrow: "How it works",
      heading: "Three steps from question to audited answer.",
    },
    steps: [
      {
        index: "01",
        icon: "search",
        eyebrow: "Parse & Govern",
        heading: "Question → Intent",
        body: "User types a business question in plain language. The agent parses intent, maps the question to available metrics in your semantic layer, and routes it to the correct agent workflow. No free-form SQL generation.",
      },
      {
        index: "02",
        icon: "database",
        eyebrow: "Query & Verify",
        heading: "Metric → Answer",
        body: "The agent queries only certified, role-gated metrics from your warehouse. It verifies the query shape against your semantic layer before execution. If a question can’t be answered from the semantic layer, the agent says so rather than hallucinating.",
      },
      {
        index: "03",
        icon: "file-check",
        eyebrow: "Cite & Audit",
        heading: "Answer → Source",
        body: "The agent returns a precise answer with full source lineage: which metric definitions were used, which business rules applied, and which warehouse table was queried. Every answer is logged for compliance audit.",
      },
    ],
  },

  // ── 3.3 The Hallucination Problem, Solved ───────────────────
  hallucination: {
    intro: {
      eyebrow: "The hallucination problem, solved",
      heading:
        "Most AI analytics tools generate answers. Quaeris agents retrieve them.",
    },
    cards: [
      {
        icon: "alert-triangle",
        tone: "error",
        heading: "Hallucinations Happen When:",
        body: "AI models guess numbers from training data instead of querying governed sources. Every other conversational BI tool relies on LLM creativity — it’s fast but unreliable. When the model doesn’t know an answer, it makes one up.",
        callout: {
          label: "Business impact",
          body: "Conflicting numbers reported to the board, failed audits, lost trust.",
        },
      },
      {
        icon: "shield-check",
        tone: "accent",
        heading: "Quaeris Difference:",
        body: "Agents don’t generate answers — they retrieve them from your certified semantic layer. If a metric isn’t defined, the agent says “I don’t know” instead of guessing. Every number is grounded in a source. No training-data hallucinations. No free-form SQL. Just governed, auditable answers every time.",
        callout: {
          label: "Trust restored",
          body: "Full lineage, full audit trail, zero hallucinations.",
        },
      },
    ],
  },

  // ── 3.4 Six Agent Capabilities ──────────────────────────────
  capabilities: {
    intro: {
      eyebrow: "What agents can do",
      heading: "Autonomous multi-step analysis. Governed from the start.",
    },
    items: [
      {
        icon: "wand-2",
        title: "Natural Language to Governed SQL",
        body: "Users ask questions in plain English. Agents translate to SQL constrained by your semantic layer — no model-generated code. Every query is validated against certified metrics before execution.",
      },
      {
        icon: "zap",
        title: "Multi-Step Autonomous Workflows",
        body: "Agents don’t stop at a single query. They plan and execute fetch-filter-join-forecast sequences without human input. Anomaly detected? Agents root-cause automatically. Forecast needed? Done in one prompt.",
      },
      {
        icon: "trending-up",
        title: "Predictive & Proactive Analysis",
        body: "Agents forecast trends, flag anomalies, and diagnose root causes without being asked. A revenue dip is flagged before the executive standup. A warehouse query slowdown is surfaced before users notice. Proactivity built in.",
      },
      {
        icon: "shield-check",
        title: "Governed at Every Step",
        body: "Role-based access, data residency, audit trails — enforced at query time, not dashboard time. Users see only the data their role permits. Every answer is logged with who asked, what was returned, and why. Compliance-ready.",
      },
      {
        icon: "layers",
        title: "Smart Semantic Layer Learning",
        body: "The semantic layer isn’t static. It learns from agent interactions. Users define metrics once; agents use them everywhere. New business logic? Update the semantic layer once; all agent answers reflect the change immediately.",
      },
      {
        icon: "brain",
        title: "Autonomous Root-Cause Diagnosis",
        body: "Revenue down 12%? Agents automatically investigate across regions, cohorts, campaigns, and product lines to find the driver — then surface the diagnosis with confidence scores. Manual troubleshooting replaced by agent rigor.",
      },
    ],
    cta: { label: "Explore the semantic layer", href: "/platform/semantic-layer" },
  },

  // ── 3.5 Competitive Differentiation ─────────────────────────
  compare: {
    intro: {
      eyebrow: "Competitive differentiation",
      heading: "How Quaeris agents compare",
      subcopy:
        "Most conversational BI tools bolt AI onto a dashboard. Quaeris builds agents on a governed semantic layer.",
    },
    caption:
      "Feature comparison of Quaeris agents against ThoughtSpot Spotter, Cortex Analyst, AWS Q, and Looker AI",
    table: {
      columns: [
        { label: "Capability" },
        { label: "Quaeris", highlight: true },
        { label: "ThoughtSpot Spotter" },
        { label: "Cortex Analyst" },
        { label: "AWS Q" },
        { label: "Looker AI" },
      ],
      rows: [
        {
          feature: "Plain-language questions",
          cells: [
            { kind: "text", value: "Yes" },
            { kind: "text", value: "Yes" },
            { kind: "text", value: "Yes" },
            { kind: "text", value: "Yes" },
            { kind: "text", value: "Yes" },
          ],
        },
        {
          feature: "Answers cited to metrics",
          cells: [
            { kind: "text", value: "Yes — every answer" },
            { kind: "text", value: "Yes" },
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Limited" },
          ],
        },
        {
          feature: "Governed semantic layer",
          cells: [
            { kind: "text", value: "Auto-learns" },
            { kind: "text", value: "Manual modeling" },
            { kind: "text", value: "Requires YAML" },
            { kind: "text", value: "Requires manual config" },
            { kind: "text", value: "Requires LookML" },
          ],
        },
        {
          feature: "Zero hallucinations",
          cells: [
            { kind: "text", value: "Guaranteed (no generation)" },
            { kind: "text", value: "Mostly (search-token model)" },
            { kind: "text", value: "High risk" },
            { kind: "text", value: "High risk" },
            { kind: "text", value: "High risk" },
          ],
        },
        {
          feature: "BYOM (pick your LLM)",
          cells: [
            { kind: "text", value: "Yes — swap anytime" },
            { kind: "text", value: "Model-locked" },
            { kind: "text", value: "Warehouse-locked" },
            { kind: "text", value: "AWS-locked" },
            { kind: "text", value: "Google-locked" },
          ],
        },
        {
          feature: "Warehouse-portable",
          cells: [
            { kind: "text", value: "All major + more" },
            { kind: "text", value: "All major" },
            { kind: "text", value: "Snowflake only" },
            { kind: "text", value: "AWS only" },
            { kind: "text", value: "Google Cloud only" },
          ],
        },
        {
          feature: "Multi-step agent workflows",
          cells: [
            { kind: "text", value: "Yes — fetch/filter/join/forecast" },
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Limited" },
          ],
        },
        {
          feature: "Autonomous anomaly detection",
          cells: [
            { kind: "text", value: "Yes" },
            { kind: "text", value: "No" },
            { kind: "text", value: "No" },
            { kind: "text", value: "No" },
            { kind: "text", value: "No" },
          ],
        },
        {
          feature: "Full audit trail (who/what/why)",
          cells: [
            { kind: "text", value: "Yes — prompt + agent steps" },
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Limited" },
          ],
        },
      ],
      note: "Comparison is directional, based on public product documentation — validate against live competitor docs before publish.",
    },
    cta: { label: "See supported warehouses", href: "/platform/warehouse" },
  },

  // ── 3.6 Real-World Example Workflow ─────────────────────────
  example: {
    intro: {
      eyebrow: "Revenue-tracking example",
      heading: "See it in action",
    },
    console: {
      header: { title: "Quaeris Agent Console", status: "Audit log: recording" },
      userQuestion:
        "What was revenue last quarter by region, and which regions missed their plan?",
      trace: ["Intent parsed", "Metric retrieved", "Query executed", "Answer cited"],
      agentAnswer:
        "Last quarter, all regions combined achieved $4.2M revenue. West overperformed by 8%; Central underperformed by 3%; East hit target; South missed by 11%.",
    },
    steps: [
      {
        kicker: "Card 1",
        heading: "Intent Parse",
        body: "Agent detects: intent=metric-retrieval, metric=revenue, dimension=region, time-filter=last-quarter, analysis-type=vs-plan. All entities mapped to semantic layer.",
      },
      {
        kicker: "Card 2",
        heading: "Metric Lookup",
        body: "Agent retrieves certified metric: “Revenue” = <code>SUM(transactions.amount WHERE status='completed') BY region</code>, filtered by role-based access. User has access to all regions. Metric definition version 3.2 (current).",
      },
      {
        kicker: "Card 3",
        heading: "Query Execution",
        body: "Agent constructs and executes: <code>SELECT region, revenue, plan, variance FROM warehouse.revenue_metrics WHERE period='q3-2026' AND role_allows_visibility</code>. Result: 4 regions returned, 1 region blocked by access policy.",
      },
      {
        kicker: "Card 4",
        heading: "Answer with Lineage",
        body: "“Last quarter, all regions combined achieved $4.2M revenue. West overperformed by 8%; Central underperformed by 3%; East hit target; South missed by 11%. This answer cites the Revenue metric (v3.2), uses 3 warehouse tables (transactions, regions, plans), and applies role-based access for region visibility. <a href=\"/platform/governance\">Full audit trail</a>.”",
      },
    ],
  },

  // ── 3.7 Use Cases by Role ───────────────────────────────────
  useCases: {
    intro: {
      eyebrow: "Who benefits",
      heading: "Agents work for your whole team",
    },
    cards: [
      {
        icon: "users",
        label: "Data Analyst",
        desc: "Self-serve exploratory analysis without SQL",
        href: "/solutions/analysts",
        exampleLabel: "Example question",
        exampleQuestion:
          "“Show me cohort churn by acquisition channel for new users signing up in Q2”",
      },
      {
        icon: "briefcase",
        label: "Business User",
        desc: "Instant answers to business questions",
        href: "/solutions/executives",
        exampleLabel: "Example question",
        exampleQuestion:
          "“How much revenue came from our top 10 customers last month?”",
      },
      {
        icon: "trending-up",
        label: "Executive",
        desc: "Proactive insights without waiting on reports",
        href: "/solutions/executives",
        exampleLabel: "Example question",
        exampleQuestion:
          "“Which product had the biggest month-over-month growth?”",
      },
      {
        icon: "code",
        label: "Data Engineer",
        desc: "Governance enforcement and semantic layer ownership",
        href: "/solutions/data-teams",
        exampleLabel: "Example question",
        exampleQuestion:
          "“Which metrics are being queried most, and are definitions consistent?”",
      },
    ],
  },

  // ── 3.8 Trust & Governance Proof ────────────────────────────
  governance: {
    intro: {
      eyebrow: "Governance at scale",
      heading: "Trust you can audit.",
    },
    stats: [
      {
        num: "0",
        label: "Hallucinated answers",
        desc: "Every answer grounded in certified metrics",
      },
      {
        num: "87",
        label: "% reduction in ad-hoc requests",
        desc: "Within 90 days of deployment",
      },
      {
        num: "14 sec",
        label: "Avg. answer time",
        desc: "From question to audited answer",
      },
      {
        num: "100",
        label: "% of queries audited",
        desc: "Full trace from question to source",
      },
    ],
    dashboard: {
      title: "Agent activity",
      range: "Last 30 days",
      tiles: [
        { label: "Questions answered", value: "1,247" },
        { label: "Metrics cited", value: "142" },
        { label: "Access violations detected", value: "0", active: true },
        {
          label: "Audit records",
          value: "100% logged",
          href: "/platform/governance",
          delta: "View audit records →",
        },
      ],
      chartCaption: "Questions answered per week",
    },
  },

  // ── 3.9 FAQ ─────────────────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "Common questions",
      heading: "Your questions answered",
    },
    miniCard: {
      title: "Still have questions?",
      body: "Talk to an engineer about your warehouse, your governance model, and a two-week rollout plan.",
      cta: { label: "Book a demo", href: "/contact" },
    },
    items: [
      {
        id: "faq-1",
        question: "What happens if an agent can’t answer a question?",
        answer:
          "The agent says “I don’t have enough information to answer that” rather than guessing. It surfaces which metrics or data sources would be needed. Your data team then evaluates whether to expand the semantic layer. Silence is better than hallucination.",
        defaultOpen: true,
      },
      {
        id: "faq-2",
        question: "Can agents replace our BI team?",
        answer:
          "No — agents complement your BI team. They handle exploratory, ad-hoc questions. Your dashboards, reports, and scheduled jobs continue to serve structured reporting. Agents are the self-serve layer on top of the semantic layer your data team owns.",
      },
      {
        id: "faq-3",
        question: "How do you prevent unauthorized data access?",
        answer:
          "Role-based access policies are enforced at query time, not at the dashboard layer. When an agent executes a query, it applies the user’s warehouse role and access permissions. Users see only the data their role permits — no workarounds, no filter bypasses.",
      },
      {
        id: "faq-4",
        question: "What LLMs do agents support?",
        answer:
          "Bring your own. GPT-4, Claude, Gemini, Meta Llama — agents work with any LLM. Your compliance team picks the model and vendor. You’re never locked in. Swap LLMs anytime without redeploying agents or the semantic layer.",
      },
      {
        id: "faq-5",
        question: "How long does it take to deploy agents?",
        answer:
          "Most teams have agents running against a live warehouse within two weeks. Week one is warehouse integration and semantic layer migration. Week two is user onboarding and access policy setup. No data movement required — agents query your warehouse in place.",
      },
      {
        id: "faq-6",
        question: "What warehouses do agents support?",
        answer:
          "Snowflake, BigQuery, Databricks, Redshift, Azure Synapse, and more. All major warehouses. The agent doesn’t care which warehouse you use — it’s warehouse-agnostic.",
      },
      {
        id: "faq-7",
        question: "Can agents handle real-time data?",
        answer:
          "Yes — agents query your warehouse in real time. If your warehouse ingests streaming data, agents see it immediately. No caching, no lag.",
      },
      {
        id: "faq-8",
        question: "Do agents generate SQL code for users to review?",
        answer:
          "No — agents execute queries directly against your warehouse. SQL is generated internally and validated against your semantic layer, but users don’t see or edit the SQL. The agent handles the execution; you control the governance through the semantic layer.",
      },
    ],
  },

  // ── 3.10 Customer Proof ─────────────────────────────────────
  proof: {
    intro: {
      eyebrow: "Trusted by data leaders",
      heading: "Results from governed deployments.",
    },
    cards: [
      {
        industry: "Financial Services",
        client: "Kova Finance",
        outcome:
          "Reduced ad-hoc analytics requests by 84% while expanding self-serve access to 600+ business users — without relaxing governance.",
        metrics: [
          { num: "84%", label: "fewer requests" },
          { num: "600+", label: "self-serve users" },
          { num: "90", label: "days to rollout" },
        ],
        how: "Connected agents to Snowflake warehouse, migrated 120 certified metrics into the semantic layer, deployed agents to all business teams with row-level security enforced automatically.",
        cta: { label: "Read the case study", href: "/case-studies" },
      },
      {
        industry: "B2B SaaS",
        client: "Orbit Analytics",
        outcome:
          "Cut time-to-insight from 3 days to under 20 minutes — eliminating the request backlog that had blocked product launches.",
        metrics: [
          { num: "20 min", label: "avg answer time" },
          { num: "3×", label: "faster than tickets" },
          { num: "0", label: "hallucinations" },
        ],
        how: "Deployed agents across product, revenue, and marketing metrics. Agents now answer product-usage and pipeline questions with sources cited in every response.",
        cta: { label: "Read the case study", href: "/case-studies" },
      },
      {
        industry: "Retail/CPG",
        client: "Northwind Co.",
        outcome:
          "Unified conflicting metric definitions across 6 regional teams — giving executives a single, consistent view.",
        metrics: [
          { num: "6", label: "teams aligned" },
          { num: "1", label: "metric definition per KPI" },
          { num: "11×", label: "ROI" },
        ],
        how: "Audited 300+ metric variants, consolidated to 80 certified definitions in the semantic layer, retired four legacy BI dashboards.",
        cta: { label: "Read the case study", href: "/case-studies" },
      },
    ],
    testimonials: [
      {
        quote:
          "“The lineage view alone justified the deployment. My team can click any answer and trace it back to the source table in one step. That transparency is what governance actually looks like.”",
        initials: "SR",
        name: "S.R.",
        role: "VP Analytics · Orbit Analytics",
      },
      {
        quote:
          "“I was nervous about giving executives direct query access. Quaeris’s role-based controls meant I didn’t have to be. They only see what they should — enforced at the agent level.”",
        initials: "AT",
        name: "A.T.",
        role: "Head of Data Platform · Vertex Health",
      },
      {
        quote:
          "“Every other analytics AI we evaluated made up numbers when it didn’t know the answer. Quaeris is architecturally different — it can’t hallucinate because it queries governed metrics, not a language model’s memory.”",
        initials: "DW",
        name: "D.W.",
        role: "CDO · Lumio Retail",
      },
      {
        quote:
          "“What separates Quaeris is the governance-first design. It’s not a chatbot bolted onto a dashboard — it’s a governed data layer with an agent interface on top. That architectural difference shows in every answer.”",
        initials: "CJ",
        name: "C.J.",
        role: "Chief Analytics Officer · Cedar Group",
      },
    ],
  },

  // ── 3.11 CTA Band ───────────────────────────────────────────
  cta: {
    eyebrow: "Ready to deploy?",
    heading: "Stop waiting on ad-hoc requests. Start asking agents.",
    subcopy:
      "Book a demo. We’ll walk through your warehouse setup, show you how agents work with your data, and deliver a live governed answer in 30 minutes.",
    primary: { label: "Book a demo", href: "/contact" },
    secondary: { label: "See documentation", href: "/docs" },
  },

  // ── 3.12 Newsletter Signup ──────────────────────────────────
  newsletter: {
    eyebrow: "The Governed Analytics Brief",
    heading: "Weekly insights on agentic AI and enterprise trust.",
    body: "One practical read on governed analytics, agents, and semantic layers — every Thursday. No generic AI hype. Just rigorous patterns from data leaders deploying agents at scale.",
    emailPlaceholder: "your@company.com",
    submitLabel: "Subscribe",
    consentPrefix:
      "No spam. Unsubscribe anytime. We handle your data per our ",
    privacyLink: { label: "Privacy Policy", href: "/privacy" },
  },
} satisfies PlatformAgentsPageContent;
