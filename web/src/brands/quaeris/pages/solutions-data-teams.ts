import type { SolutionsDataTeamsPageContent } from "@/config/page-types/solutions-data-teams";

export const solutionsDataTeamsPage = {
  meta: {
    title: "AI Analytics for Data Teams — Reduce Request Backlog",
    description:
      "Give your data team breathing room. Quaeris enables governed self-serve analytics — shrink ad-hoc queues, empower the business, stay in control.",
  },

  // ── Section 3.1 — Hero ──────────────────────────────────────
  hero: {
    eyebrow: "For Data Teams",
    h1: "Kill the ad-hoc request queue.",
    subcopy:
      "Business users ask their own questions. Your data team writes the rules, once. Quaeris handles the governance — so you can finally build instead of firefighting.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    panel: {
      eyebrow: "Quaeris · governed session",
      question: '"Why did EMEA pipeline dip last quarter?"',
      ariaLabel:
        "Governed query panel showing a business user's question answered from certified metrics, with policy check and source citations",
      rows: [
        {
          label: "Policy check · role:",
          strong: "RevOps analyst",
          ok: "Access granted",
        },
        {
          label: "Certified metric ·",
          strong: "pipeline_value v2.3",
          ok: "Lineage attached",
        },
      ],
      chips: [
        "Source: fact_opportunities",
        "Definition: pipeline_value",
        "Rule: fiscal_quarter",
      ],
    },
  },

  // ── Section 3.2 — The Problem ───────────────────────────────
  problem: {
    intro: {
      eyebrow: "The problem",
      heading: "Sound familiar?",
    },
    cards: [
      {
        problemEyebrow: "Today",
        problemTitle: "Ad-hoc requests are drowning the team",
        problemBody:
          "Every Tuesday it's the same: revenue questions, cohort analyses, ad-hoc forecasts. Your data team is a ticket-processing machine. Strategy? Infrastructure? Hiring? There's no time.",
        fixLabel: "With Quaeris",
        fixTitle: "Self-serve analytics shrinks the queue",
        fixBody:
          "Business users ask directly. The semantic layer gates the answers — no dangerous slicing, no mismatched metrics. Your team writes the rules once and scales from there.",
      },
      {
        problemEyebrow: "Today",
        problemTitle: "Every team calculates revenue differently",
        problemBody:
          "Finance says one number, Product says another. Your data team has spent six months reconciling definitions across Tableau, Looker, and three homegrown dashboards. It's never consistent.",
        fixLabel: "With Quaeris",
        fixTitle: "One semantic layer, one source of truth",
        fixBody:
          "Define revenue once in the semantic layer. Every self-serve query uses the same definition. When the metric changes, it changes everywhere — audited and visible.",
      },
      {
        problemEyebrow: "Today",
        problemTitle: "Self-serve means data leaks and wrong answers",
        problemBody:
          "You can't give business users direct access to your warehouse. There's no row-level security, no audit trail, and when someone exports sensitive data, you find out after the breach.",
        fixLabel: "With Quaeris",
        fixTitle: "Governance enforced at query time",
        fixBody:
          "Role-based access controls are baked into the agent layer — users only see what they're permitted to see. Every query is logged. You maintain control while enabling access.",
      },
    ],
  },

  // ── Section 3.3 — Stats / Outcomes Band ─────────────────────
  stats: {
    label: "Outcomes across deployed organizations",
    items: [
      {
        num: "87%",
        label: "Reduction in ad-hoc requests",
        context: "Across deployed orgs",
        delta: "Median in first 90 days",
      },
      {
        num: "14 min",
        label: "Time to first insight",
        context: "From question to answer",
        delta: "vs. 2-3 day ticket queue",
      },
      {
        num: "100%",
        label: "Metric definitions aligned",
        context: "In the semantic layer",
        delta: "Single source of truth",
      },
      {
        num: "600+",
        label: "Self-serve users enabled",
        context: "Without a single support ticket",
        delta: "Row-level security enforced",
      },
    ],
  },

  // ── Section 3.4 — How It Works ──────────────────────────────
  howItWorks: {
    intro: {
      eyebrow: "How it works",
      heading: "Governed self-serve in four steps",
      subcopy:
        "Your data team sets the boundaries. Business users explore within them. No requests, no bottlenecks, no chaos.",
    },
    items: [
      {
        icon: "lock",
        title: "Write governance rules once",
        body: "Your data team defines the semantic layer: certified metrics, business logic, access policies. Role-based controls are baked in. When a metric changes, the whole organization sees the update.",
      },
      {
        icon: "user-check",
        title: "Give business users direct access",
        body: "No more \"send me a query.\" Business users open Quaeris and ask their questions in plain language. Agents reason over your governed semantic layer and return instant answers.",
      },
      {
        icon: "search",
        title: "Every answer is auditable",
        body: "Users see the metric definitions and data lineage behind every answer. If the revenue number is wrong, you trace it back to the source in one click. Role-based access enforces permissions at query time — no breakglass moments.",
      },
      {
        icon: "trending-up",
        title: "Your team scales without hiring",
        body: "Self-serve answers 80% of ad-hoc requests. Your data team shifts from ticket-processing to strategy: building forecasts, refining models, mentoring analysts. Finally, focus on the work that moves the business.",
      },
    ],
  },

  // ── Section 3.5 — Feature Spotlight (dark) ──────────────────
  features: {
    intro: {
      eyebrow: "Core capabilities",
      heading: "Core capabilities",
    },
    rows: [
      {
        step: {
          eyebrow: "Core Capability 01",
          heading: "The semantic layer learns as you use it.",
          body: "Quaeris watches how your team uses data. Business definitions, metric relationships, data lineage — the semantic layer auto-learns and surfaces suggestions. You don't have to pre-model everything in YAML. Your team approves, it learns.",
          cta: {
            label: "Explore the semantic layer",
            href: "/platform/semantic-layer",
          },
        },
        shot: {
          label: "Semantic layer · suggestions",
          ariaLabel:
            "Semantic layer definition panel showing metric suggestions, lineage, and ownership badges",
          rows: [
            {
              strong: "net_revenue",
              text: "· suggested from 412 queries",
              ok: "Approve",
            },
            {
              strong: "churn_rate",
              text: "· lineage: fact_subscriptions",
              ok: "Certified",
            },
            {
              strong: "arr",
              text: "· owner: Data Platform",
              ok: "Certified",
            },
          ],
        },
      },
      {
        step: {
          eyebrow: "Core Capability 02",
          heading: "Agents that cite their sources.",
          body: "Business users ask natural-language questions. Agents translate to SQL, query the semantic layer, and return certified answers — not hallucinations. Every number shows its sources: which metric definition, which table, which business rule. Your team sleeps better.",
          cta: { label: "See a live demo", href: "/contact" },
        },
        shot: {
          label: "Agent session · citations",
          ariaLabel:
            "Agent conversation panel showing a natural-language question answered with metric citations and lineage",
          rows: [
            {
              text: '"What was net revenue retention last quarter?"',
            },
            {
              strong: "nrr v2.1",
              text: "Certified metric ·",
              ok: "Definition cited",
            },
            {
              strong: "fact_subscriptions",
              text: "Source ·",
              ok: "Lineage attached",
            },
          ],
        },
      },
      {
        step: {
          eyebrow: "Core Capability 03",
          heading: "Security enforced at the agent layer.",
          body: "Role-based access policies are applied when the agent runs — not as a dashboard filter. A sales rep asking about customer lifetime value sees only their region's data. A controller asking about expenses sees only company-owned spend. Enforcement is automatic, audited, and consistent.",
          cta: {
            label: "Read the governance blueprint",
            href: "/blog/governed-analytics-blueprint",
          },
        },
        shot: {
          label: "Same question · role-scoped answers",
          ariaLabel:
            "Diagram of role-scoped query results: two users asking the same question receive differently scoped answers",
          rows: [
            {
              strong: "Sales rep (EMEA)",
              text: "· customer lifetime value",
              ok: "EMEA rows only",
            },
            {
              strong: "Controller",
              text: "· expense detail",
              ok: "Company-owned spend",
            },
            {
              strong: "Every query",
              text: "· audit trail",
              ok: "Logged",
            },
          ],
        },
      },
    ],
  },

  // ── Section 3.6 — Real Outcomes / Case Studies ──────────────
  caseStudies: {
    intro: {
      eyebrow: "Real data teams. Real outcomes.",
      heading: "What deploying Quaeris looks like",
      subcopy:
        "Three teams, three verticals, three ways self-serve transformed how they work.",
    },
    cards: [
      {
        industry: "Financial Services",
        client: "A leading financial services firm",
        headline:
          "Reduced ad-hoc requests by 84% while expanding self-serve to 600+ users",
        metrics: [
          { num: "84%", label: "fewer ad-hoc requests" },
          { num: "600+", label: "self-serve users enabled" },
          { num: "90", label: "days to full rollout" },
        ],
        story:
          "The data team was processing 200+ requests per week from finance, product, and FP&A. They connected Quaeris to their Snowflake warehouse, migrated 120 certified revenue and bookings metrics into the semantic layer, and opened the agent interface to the business. Role-based access was configured by the data team; access enforcement happened automatically. Within 90 days, the ad-hoc queue dropped by 84%. The team shifted from firefighting to building predictive models.",
        quote:
          "[Quote pending — Head of Data or VP Analytics testimonial on the shift]",
        cta: { label: "Read the full story", href: "/case-studies/financial-services" },
      },
      {
        industry: "B2B SaaS / Analytics",
        client: "A B2B SaaS analytics company",
        headline: "Cut time-to-insight from 3 days to 20 minutes",
        metrics: [
          { num: "20 min", label: "average time-to-insight" },
          { num: "3x", label: "faster than previous ticket workflow" },
          { num: "0", label: "hallucinated numbers" },
        ],
        story:
          "Product and growth teams were waiting 2–3 days for cohort and retention analyses. Every question meant a ticket, a data analyst context switch, and a SQL query. The data team deployed Quaeris across their product and revenue metrics. Now, product managers ask directly and get instant, source-cited answers. The semantic layer validates every query. The data team went from reactive to strategic.",
        quote:
          "[Quote pending — Head of Product or Analytics Engineer testimonial]",
        cta: { label: "Read the full story", href: "/case-studies/b2b-saas-analytics" },
      },
      {
        industry: "Retail / CPG",
        client: "A multi-region retail organization",
        headline: "Unified conflicting metrics across 6 regional teams",
        metrics: [
          { num: "6", label: "regional teams aligned" },
          { num: "1", label: "metric definition per KPI" },
          { num: "11x", label: "ROI on analytics time" },
        ],
        story:
          "The organization had six regional BI tools and three legacy data warehouses. Headquarters and regional teams calculated 'revenue' and 'margin' differently. A board report would contradict a regional dashboard. The data team unified everything into a single Quaeris semantic layer with 80 certified definitions. Executives and regional leaders ask the same question and get the same answer. One team retired four conflicting dashboards.",
        quote:
          "[Quote pending — CFO, Chief Data Officer, or regional VP testimonial]",
        cta: { label: "Read the full story", href: "/case-studies/retail-cpg" },
      },
    ],
  },

  // ── Section 3.7 — FAQ ───────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "Questions from data leaders",
      heading: "Answers that actually help",
      subcopy:
        "If it's not here, book a demo — we'll walk through your specific setup.",
    },
    miniCard: {
      title: "Something specific to your stack?",
      body: "Bring your warehouse, your metrics, and your rollout questions — we'll answer them live, on your data.",
      cta: { label: "Book a Demo", href: "/contact" },
    },
    items: [
      {
        id: "faq-dt-1",
        question:
          "How do we ensure business users don't create incorrect queries?",
        answer:
          "The semantic layer is your guard rail. Users ask questions in plain language; agents translate those questions to SQL against the semantic layer — not raw tables. If a question can't be answered from certified metrics, the agent says so. The semantic layer enforces consistency; your team writes the definitions once.",
        defaultOpen: true,
      },
      {
        id: "faq-dt-2",
        question: "Doesn't governed self-serve mean we lose control?",
        answer:
          "The opposite. Role-based access policies are applied at query time — enforced by the agent, not just by dashboard filters. A regional manager sees only their region's data, automatically. Every query is logged. You have more visibility and control than you do today with ad-hoc ticket requests.",
      },
      {
        id: "faq-dt-3",
        question:
          "How long does it take to migrate our metrics into the semantic layer?",
        answer:
          "Most teams take 1–2 weeks to migrate 100–200 certified metrics. Quaeris auto-discovers metric patterns from your data warehouse and suggests definitions. Your team approves them into the semantic layer. Week one: warehouse connection + pattern discovery. Week two: metric curation and access policy setup. Then you're live.",
      },
      {
        id: "faq-dt-4",
        question:
          "What if our existing dashboards and reports contradict the semantic layer?",
        answer:
          "That's actually common. Most organizations have metric inconsistencies buried across tools. Quaeris surfaces those inconsistencies; your team resolves them once in the semantic layer. Every tool — dashboards, reports, agents — then uses the same definition. You gain consistency while Quaeris is deployed.",
      },
      {
        id: "faq-dt-5",
        question: "Can we gradually roll out self-serve, or is it all-or-nothing?",
        answer:
          "Gradual rollout is standard. Start with one team or one department (e.g., marketing, finance) and a subset of metrics. Quaeris scales as your team adds users and metrics to the semantic layer. There's no flag day.",
      },
      {
        id: "faq-dt-6",
        question: "Do we need a new data warehouse?",
        answer:
          "No. Quaeris connects to your existing warehouse — Snowflake, BigQuery, Databricks, Redshift, Synapse. No data migration. Your warehouse is the system of record. Quaeris is a governance and access layer on top.",
      },
      {
        id: "faq-dt-7",
        question: "What happens if the semantic layer definition is wrong?",
        answer:
          "Your team can update the definition any time. The semantic layer is versioned. When you change a metric definition, users see a notification that the metric has been updated. All future queries use the new definition. Historical queries are audited, so you can trace why a number changed.",
      },
      {
        id: "faq-dt-8",
        question: "Can business users still download data for external tools?",
        answer:
          "Yes — users can export results from Quaeris answers. Exports are tied to the user's role-based permissions; they can only export what they're allowed to see. Every export is logged. You control what gets exported and can audit it.",
      },
    ],
  },

  // ── Section 3.8 — Governance Deep-Dive (pillars) ────────────
  governance: {
    intro: {
      eyebrow: "Governed by design",
      heading: "How governance stays intact as you scale self-serve",
      subcopy:
        "Self-serve doesn't mean lawless. Here's how Quaeris keeps governance front and center.",
    },
    pillars: [
      {
        icon: "check-circle",
        title: "Certified metrics, not wild estimates",
        body: "Business users query your semantic layer — the definitions your data team has certified. No hallucinations, no model drift. Every agent answer is locked to a metric definition your team approved.",
      },
      {
        icon: "eye",
        title: "Lineage visible in every answer",
        body: "Every answer shows the metric definition, the source table, the business rule that applied, and the user's access level. Your analysts can audit any result in one click. Compliance auditors get full traces.",
      },
      {
        icon: "lock",
        title: "Access enforced at runtime",
        body: "Role-based policies are applied when the agent runs. A user with finance permissions can't see product costs. A regional user can't see other regions' data. Enforcement is automatic and audited — no manual row-level filters required.",
      },
    ],
  },

  // ── Section 3.9 — Competitive Positioning ───────────────────
  comparison: {
    intro: {
      eyebrow: "Why data teams choose Quaeris",
      heading: "Quaeris vs. the alternatives",
      subcopy:
        "Not all self-serve solutions are created equal. Here's how Quaeris is different.",
    },
    cards: [
      {
        index: "01",
        kicker: "Self-serve BI dashboards (Tableau, Looker, Power BI)",
        problem:
          "Beautiful dashboards don't answer ad-hoc questions. Every question still needs a ticket.",
        fixLabel: "Quaeris answer",
        fixBody:
          "Agents answer ad-hoc questions in seconds. Dashboards stay for scheduled reporting. Both coexist.",
      },
      {
        index: "02",
        kicker: "Unmanaged SQL editors (DBeaver, notebooks, Jupyter)",
        problem:
          "Users run arbitrary SQL. Metric chaos. Row-level security is manual. Ad-hoc queries break compliance.",
        fixLabel: "Quaeris answer",
        fixBody:
          "Users ask in plain language; agents translate to governed SQL. Semantic layer enforces consistency. Access is automatic.",
      },
      {
        index: "03",
        kicker:
          "LLM chatbots on raw data (ChatGPT + your DB, basic prompt-engineering)",
        problem:
          "Language models hallucinate numbers. No audit trail. No access control. Results are unreliable.",
        fixLabel: "Quaeris answer",
        fixBody:
          "Agents query governed metrics, not raw tables. Every answer is certified. Full audit trail. Zero hallucinations.",
      },
      {
        index: "04",
        kicker: "Hyperscaler-native AI tools (Cortex Analyst, Genie, AWS Q)",
        problem:
          "Locked to one warehouse vendor, one model. Governance is bolt-on. Migrating is hard.",
        fixLabel: "Quaeris answer",
        fixBody:
          "Warehouse-portable. Model-portable (BYOM). Governance is baked in. Switch vendors without retraining.",
      },
    ],
  },

  // ── Section 3.10 — CTA Band ─────────────────────────────────
  cta: {
    eyebrow: "Ready to shrink the ad-hoc queue?",
    heading: "Let your data team breathe.",
    subcopy:
      "Book a 30-minute demo. We'll walk through your warehouse setup, show you the semantic layer in action, and show you governed answers — no slides, no fluff.",
    primary: { label: "Book a Demo", href: "/contact" },
    secondary: { label: "See case studies", href: "/case-studies" },
  },

  // ── Section 3.11 — Newsletter Block ─────────────────────────
  newsletter: {
    eyebrow: "The Governed Analytics Brief",
    heading: "Weekly insights for data leaders",
    body: "No generic AI hype. One practical read on governed analytics, semantic layers, and scaling self-serve — every Thursday in your inbox.",
    emailLabel: "Work email",
    emailPlaceholder: "your@company.com",
    submitLabel: "Subscribe",
    consentLead:
      "No spam. Unsubscribe any time. We handle your data per our ",
    privacy: { label: "Privacy Policy", href: "/privacy" },
  },
} satisfies SolutionsDataTeamsPageContent;
