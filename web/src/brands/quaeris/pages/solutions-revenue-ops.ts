import type { SolutionsRevenueOpsPageContent } from "@/config/page-types/solutions-revenue-ops";

export const solutionsRevenueOpsPage = {
  meta: {
    title: "Governed Revenue Analytics for RevOps | Quaeris",
    description:
      "Unified pipeline and forecast metrics across CRM + warehouse. Query revenue KPIs in natural language with governed agents. No conflicting numbers.",
  },

  // ── Section 3.1 — Hero ──────────────────────────────────────
  hero: {
    eyebrow: "Revenue & Operations",
    h1: "Unified revenue pipeline. One source of truth.",
    subcopy:
      "Stop managing conflicting revenue numbers across your CRM and data warehouse. Quaeris agents query governed pipeline metrics in natural language — giving your entire RevOps team the same answer, every time.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    trust: [
      {
        icon: "check-circle",
        text: "Works with Snowflake, BigQuery, Redshift, and your data warehouse",
      },
      {
        icon: "check-circle",
        text: "Role-based access enforced at query time",
      },
      {
        icon: "check-circle",
        text: "Zero hallucinated forecast numbers",
      },
    ],
  },

  // ── Section 3.2 — Problem Statement ─────────────────────────
  problem: {
    intro: {
      eyebrow: "The RevOps Problem",
      heading: "Three numbers, three teams, zero alignment.",
      subcopy:
        "Your revenue team drowns in conflicting pipeline views. CRM says $8M in forecast, the warehouse says $7.2M, and finance says it's $9.1M. Without a single governed pipeline metric, your team burns cycles reconciling spreadsheets instead of closing deals.",
    },
    cards: [
      {
        icon: "alert-circle",
        title: "Conflicting Pipeline Views",
        body: "Different teams query the same pipeline from different sources — CRM lag, warehouse definitions, cached BI tools. No way to know which number is the source of truth.",
      },
      {
        icon: "trending-down",
        title: "Forecast Accuracy Unknown",
        body: "Sales pulls forecasts from the CRM, finance from the warehouse, ops from a legacy dashboard. Reconciliation happens in spreadsheets, days before board meetings.",
      },
      {
        icon: "zap",
        title: "Data Team Bottleneck",
        body: "Every ad-hoc pipeline question escalates to data. RevOps can't self-serve metrics without governance controls, so the request queue grows while forecast deadlines shrink.",
      },
    ],
  },

  // ── Section 3.3 — How Quaeris Solves RevOps ─────────────────
  howItWorks: {
    intro: {
      eyebrow: "Governed RevOps Agents",
      heading: "Ask pipeline questions. Get audited answers.",
      subcopy:
        "Quaeris connects your CRM and warehouse into a single semantic layer where agents answer revenue questions in natural language — with every metric certified and every answer traceable.",
    },
    steps: [
      {
        eyebrow: "Step 01 — Connect",
        heading: "Connect your CRM and your warehouse",
        body: "Quaeris joins your CRM's pipeline and forecast data with historical warehouse metrics. No batch syncs, no data duplication — agents query the single source of truth. Setup takes hours, not weeks.",
        cta: { label: "See supported integrations", href: "/integrations" },
      },
      {
        eyebrow: "Step 02 — Define",
        heading: "Certify pipeline and quota metrics",
        body: "Your RevOps team owns the semantic layer: define what 'pipeline' means (bookings only? includes opps? which forecast category?), when 'quota' is attainment vs. plan, how to calculate year-over-year growth. One definition. Used by every agent. No spreadsheet conflicts.",
        cta: {
          label: "Learn about the Smart Semantic Layer",
          href: "/platform/semantic-layer",
        },
      },
      {
        eyebrow: "Step 03 — Query",
        heading: "Ask questions in plain language",
        body: "Sales ops ask: 'What's our total forecast versus quota, by region, for Q3?' The agent queries the governed semantic layer and returns an answer in seconds — with sources cited, metric definitions shown, and lineage traceable back to the source CRM records. No hallucinations.",
        cta: { label: "View a demo", href: "/contact" },
      },
    ],
  },

  // ── Section 3.4 — Key Capabilities ──────────────────────────
  capabilities: {
    intro: {
      eyebrow: "What Governed RevOps Agents Enable",
      heading: "Pipeline questions answered, your way.",
    },
    items: [
      {
        icon: "git-merge",
        title: "Multi-source Pipeline Unification",
        body: "Your CRM and warehouse data merge into one semantic layer. Agents query across all connected sources and answer forecast/pipeline questions with a single number.",
      },
      {
        icon: "target",
        title: "Governed Forecast Accuracy",
        body: "Define forecast accuracy rules in the semantic layer. Agents calculate attainment, track vs. plan, and flag discrepancies — all auditable, all governed, zero ad-hoc.",
      },
      {
        icon: "link",
        title: "Revenue Lineage & Traceability",
        body: "Every pipeline metric, every forecast number flows back to certified definitions. Click any agent answer and trace it: which CRM record? which business rule? which warehouse table?",
      },
      {
        icon: "lock",
        title: "Role-Based Revenue Access",
        body: "Define who sees which pipeline: sales sees their regions, finance sees the consolidated forecast, execs see company-wide. Access enforced at agent query time, not dashboard filter.",
      },
    ],
  },

  // ── Section 3.5 — Use Cases ─────────────────────────────────
  useCases: {
    intro: {
      eyebrow: "Revenue Questions RevOps Asks",
      heading: "The questions your agents answer daily.",
    },
    cards: [
      {
        icon: "trending-up",
        title: "Pipeline Forecast vs. Quota",
        body: "Compare forecast to quota by territory, rep, and product line. Identify underforecast regions before the deal review and route support proactively.",
      },
      {
        icon: "bar-chart-3",
        title: "Bookings Attainment & Run Rate",
        body: "Query actual bookings, attach to plan by region, and calculate YTD attainment. No spreadsheet pulls — agents answer in real time, showing sources and business rules.",
      },
      {
        icon: "clock",
        title: "Opp Age & Velocity Analysis",
        body: "How long do deals sit in each stage? Which stages are bottlenecks? Agents pull aging and velocity from CRM, join with warehouse win/loss history, and surface trends.",
      },
      {
        icon: "boxes",
        title: "Upsell & Cross-Sell Pipeline",
        body: "Surface expansion pipeline by account tier and product line. Agents join CRM opportunity data with warehouse usage history to flag accounts ready for an upsell conversation.",
        placeholder: true,
      },
      {
        icon: "tag",
        title: "Pricing & Discount Tracking",
        body: "Track discount depth by rep, segment, and quarter against certified pricing rules. Agents flag deals that exceed approval thresholds before they hit the forecast.",
        placeholder: true,
      },
      {
        icon: "users",
        title: "Territory & Rep Performance",
        body: "Compare rep attainment, win rates, and pipeline coverage across territories. Agents answer from certified definitions, so every leaderboard uses the same math.",
        placeholder: true,
      },
    ],
  },

  // ── Section 3.6 — Proof: Customer Outcomes ──────────────────
  proof: {
    intro: {
      eyebrow: "Customer Proof",
      heading: "How revenue teams improved with Quaeris.",
    },
    cards: [
      {
        industry: "B2B SaaS",
        client: "RevOps team at a B2B SaaS scale-up",
        outcome:
          "Unified forecast reporting across EMEA, APAC, and Americas — one certified pipeline number for every region.",
        metrics: [
          { num: "1", label: "Source of truth" },
          { num: "+22%", label: "Forecast accuracy" },
          { num: "9 hrs/wk", label: "Reconciliation saved" },
        ],
        how: "Connected their CRM to Snowflake in the semantic layer, certified 15 pipeline metrics, and trained the ops team on natural-language queries.",
        cta: {
          label: "Read the full story",
          href: "/case-studies/revops-b2b-saas",
        },
      },
      {
        industry: "Enterprise SaaS",
        client: "Global RevOps org at an enterprise SaaS company",
        outcome:
          "Cut ad-hoc pipeline requests to the data team and moved RevOps to governed self-serve queries.",
        metrics: [
          { num: "−71%", label: "Ad-hoc requests" },
          { num: "1,400", label: "Self-serve queries/mo" },
          { num: "2 FTE", label: "Refocused on strategy" },
        ],
        how: "Deployed the semantic layer in two weeks, certified 24 revenue metrics, and rolled out role-based access mapped to territory roles.",
        cta: {
          label: "Read the full story",
          href: "/case-studies/revops-enterprise-saas",
        },
      },
      {
        industry: "Fintech",
        client: "Revenue operations group at a fintech firm",
        outcome:
          "Went live with governed forecast queries in three weeks — every number auditable for compliance review.",
        metrics: [
          { num: "3 wks", label: "To go live" },
          { num: "100%", label: "Queries logged" },
          { num: "5", label: "Regions unified" },
        ],
        how: "Connected BigQuery and the CRM, certified forecast accuracy rules, and enabled prompt + agent audit logs for the compliance team.",
        cta: {
          label: "Read the full story",
          href: "/case-studies/revops-fintech",
        },
      },
    ],
  },

  // ── Section 3.7 — Comparison ────────────────────────────────
  comparison: {
    intro: {
      eyebrow: "",
      heading: "Why Quaeris is built for RevOps.",
    },
    caption:
      "Capability comparison: Traditional BI vs. ThoughtSpot Spotter vs. Quaeris",
    table: {
      columns: [
        { label: "Capability" },
        { label: "Traditional BI" },
        { label: "ThoughtSpot Spotter" },
        { label: "Quaeris", highlight: true },
      ],
      rows: [
        {
          feature: "Query CRM + Warehouse together",
          cells: [
            { kind: "text", value: "Requires manual data sync" },
            { kind: "text", value: "Requires ThoughtSpot modeling" },
            { kind: "text", value: "Native, live join" },
          ],
        },
        {
          feature: "Governed semantic layer",
          cells: [
            { kind: "text", value: "Manual modeling, weeks to deploy" },
            { kind: "text", value: "Search-token architecture, fixed" },
            { kind: "text", value: "Auto-learns from prompts, auditable" },
          ],
        },
        {
          feature: "Natural-language pipeline questions",
          cells: [
            { kind: "text", value: "No" },
            { kind: "text", value: "Search-first, limited multi-step" },
            { kind: "text", value: "Full agent reasoning, multi-step" },
          ],
        },
        {
          feature: "Forecast accuracy rules",
          cells: [
            { kind: "text", value: "Excel formulas" },
            { kind: "text", value: "Pre-built only" },
            { kind: "text", value: "Customizable, certified per org" },
          ],
        },
        {
          feature: "Role-based access at query time",
          cells: [
            { kind: "text", value: "Dashboard-level only" },
            { kind: "text", value: "Platform role-based" },
            { kind: "text", value: "Agent enforces at query execution" },
          ],
        },
        {
          feature: "Audit trail for compliance",
          cells: [
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Full prompt + agent step audit logs" },
          ],
        },
        {
          feature: "BYOM (bring your own model)",
          cells: [
            { kind: "text", value: "No" },
            { kind: "text", value: "No" },
            {
              kind: "text",
              value: "Yes — connect OpenAI, Anthropic, Google, or Meta",
            },
          ],
        },
      ],
      note: "Quaeris doesn't replace your CRM or warehouse — it unifies them. Agents query a governed semantic layer that merges CRM and warehouse data, and every answer is traceable to a certified metric definition. That's why RevOps teams get answers in seconds, not days, and why every number is auditable.",
    },
  },

  // ── Section 3.8 — Dark Feature: Governance & Lineage ────────
  governance: {
    intro: {
      eyebrow: "Governed by Design",
      heading: "Every pipeline metric is auditable.",
      subcopy:
        "In regulated industries and large enterprises, revenue reporting carries compliance weight. Quaeris traces every forecast number — which metric definition was used, which CRM record was the source, which business rule applied, and who ran the query. That's real governance.",
    },
    valueProps: [
      {
        num: "01",
        title: "Certified Metric Definitions",
        body: "Your RevOps team certifies what 'pipeline' and 'forecast' mean. Agents never generate alternative definitions — they query only the certified ones. Consistency guaranteed, compliance-ready.",
      },
      {
        num: "02",
        title: "Full Query Lineage",
        body: "Trace any forecast number: metric definition → CRM query → warehouse join → agent reasoning step → final answer. Auditors see the chain. Finance can verify the math.",
      },
      {
        num: "03",
        title: "Prompt & Agent Audit Logs",
        body: "Every question asked, every agent step taken, every metric queried is logged. Who asked what, when, from which CRM record. Compliance reporting is built in.",
      },
    ],
    dashboard: {
      header: "Governed Revenue Query — Live Session",
      statusLabel: "Live",
      tiles: [
        {
          label: "Question answered",
          value: "Forecast vs. quota, Q3",
          delta: "↑ Cites 5 metrics",
          active: true,
        },
        {
          label: "Avg. answer time",
          value: "8.4s",
          delta: "−63% vs. ticket queue",
          placeholder: true,
        },
        {
          label: "Metrics certified",
          value: "142",
          delta: "+18 this quarter",
          placeholder: true,
        },
        {
          label: "Access enforced",
          value: "By territory role",
          delta: "All queries logged",
        },
      ],
      chartCaption: "Forecast accuracy trend — illustrative data",
    },
  },

  // ── Section 3.9 — FAQ ───────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "Common Questions",
      heading: "Answers for RevOps leaders.",
      subcopy:
        "If your question isn't here, book a demo — we'll walk through your CRM and warehouse setup.",
    },
    miniCard: {
      title: "Talk to a RevOps specialist",
      body: "We'll map your CRM and warehouse setup, then run a live governed forecast query on a 30-minute call.",
      cta: { label: "Book a Demo", href: "/contact" },
    },
    items: [
      {
        id: "faq-a1",
        question: "Can agents hallucinate revenue numbers?",
        answer:
          "No. Quaeris agents don't generate forecast numbers — they retrieve certified ones from your semantic layer. If a question can't be answered from your governance policies, the agent says so. No hallucinations, no guesses. Every forecast is traceable to a certified metric definition and a source CRM record.",
        defaultOpen: true,
      },
      {
        id: "faq-a2",
        question: "How do we define our forecast metrics?",
        answer:
          "Your RevOps team owns the semantic layer. You define: what qualifies as 'pipeline' (bookings-only? includes opps?), how to calculate 'forecast' (last-forecast-date field? weighted by probability?), which CRM fields map to which business metrics. Definitions are versioned and audited. Once certified, agents use that definition everywhere.",
      },
      {
        id: "faq-a3",
        question: "Does Quaeris work with our CRM?",
        answer:
          "Confirmed warehouse integrations include Snowflake, BigQuery, Redshift, Databricks, and Azure Synapse — agents can query across all connected sources in a single natural-language question. Ask us about your specific CRM on a demo call.",
      },
      {
        id: "faq-a4",
        question: "Can we enforce row-level access on pipeline data?",
        answer:
          "Absolutely. Role-based access is enforced at query time, not at the dashboard level. A regional VP sees only deals in their region. A sales rep sees only their own forecast. A CFO sees the consolidated view. Access rules map to your existing warehouse or IdP roles.",
      },
      {
        id: "faq-a5",
        question:
          "What happens if there's a conflict between CRM and warehouse forecast numbers?",
        answer:
          "Your semantic layer defines the single source of truth. You choose: does forecast come from the CRM field, the warehouse historical record, or a calculation across both? Once chosen, agents use that rule consistently. Conflicts don't happen — they're architected out.",
      },
      {
        id: "faq-a6",
        question: "How long does deployment take?",
        answer:
          "Most RevOps teams are answering pipeline questions in 2–3 weeks. Week 1: connect your CRM and warehouse, define 10–15 key metrics. Week 2: test agent queries, set up access rules, train ops team. Week 3: go live with broader teams. No data migration needed — agents query your live systems.",
      },
    ],
  },

  // ── Section 3.10 — CTA Band ─────────────────────────────────
  cta: {
    eyebrow: "Ready to unify your revenue metrics?",
    heading:
      "Stop managing conflicting numbers. Start using one source of truth.",
    subcopy:
      "Book a 30-minute demo. We'll connect to your data warehouse, show you a live governed forecast query, and answer your governance questions.",
    primary: { label: "Book a Demo", href: "/contact" },
    secondary: { label: "Explore the platform", href: "/platform" },
  },
} satisfies SolutionsRevenueOpsPageContent;
