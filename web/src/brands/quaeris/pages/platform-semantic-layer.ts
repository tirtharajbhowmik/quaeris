import type { PlatformSemanticLayerPageContent } from "@/config/page-types/platform-semantic-layer";

export const platformSemanticLayerPage = {
  meta: {
    title: "AI Semantic Layer for Enterprise Governance | Quaeris",
    description:
      "Auto-learn business metrics from usage. Define revenue, churn, and KPIs once — every agent answer cites certified definitions. No upfront modeling sprints.",
  },

  // ── Section 0 — Hero ────────────────────────────────────────
  hero: {
    eyebrow: "The Semantic Layer",
    h1: "Metrics your team can trust.",
    accentLine: "No upfront modeling.",
    subcopy:
      "Define revenue, churn, activation — once. Quaeris learns from usage patterns and agent questions, auto-building a certified semantic layer. Every answer traces back to those definitions. No LookML sprints. No manual metric catalog.",
    primaryCta: { label: "See it in action", href: "/contact" },
    secondaryCta: {
      label: "Read the white paper: Smart Semantic Layers",
      href: "/resources/white-papers/smart-semantic-layers",
    },
    trust: [
      {
        icon: "database",
        text: "Warehouse-native — scales to thousands of metrics",
      },
      {
        icon: "zap",
        text: "Auto-learned from prompts — no coding required",
      },
      {
        icon: "check",
        text: "Certified by your team — versioned & audited",
      },
    ],
  },

  // ── Section 1 — The Problem / The Quaeris Answer ────────────
  problem: {
    cards: [
      {
        eyebrow: "The problem",
        tone: "tertiary",
        heading: "Semantic layers are built, not born.",
        body: "Traditional semantic layers require upfront modeling: LookML in Looker, dbt YAML in dbt Semantic Layer, hand-written cube definitions in Cube. Your data team spends 3–6 months building before a single user asks their first question. Metric definitions live in code, buried in git history. When definitions change, documentation lags by weeks. Business teams end up with six conflicting 'revenue' definitions — one in Tableau, one in Sigma, one in a spreadsheet. Trust collapses.",
      },
      {
        eyebrow: "The Quaeris answer",
        tone: "accent",
        heading: "Learn from every question.",
        body: "Quaeris watches. As business users ask questions in natural language, the platform observes which tables they're asking about, which filters they apply, which metrics they care about. Over days and weeks, it learns the semantic structure of your warehouse — not from documentation, but from actual usage. Your data team certifies what it learns (marking 'revenue' as the authoritative definition, versioning it, scoping who sees it). From that moment on, every agent answer uses the same certified number.",
        emphasis: "actual usage",
      },
    ],
  },

  // ── Section 2 — How It Works (FeatureRow × 3) ───────────────
  howItWorks: {
    intro: {
      eyebrow: "",
      heading: "How it works",
    },
    steps: [
      {
        eyebrow: "Step 01 — Observe",
        heading: "Quaeris watches your usage. You certify what you learn.",
        body: "As users ask questions — 'What was Q2 revenue by region?' — Quaeris parses the natural language, maps it to your warehouse tables, and notes which metrics matter. It builds a probabilistic model of your semantic structure: revenue is typically SUM of orders.order_total WHERE orders.status = 'completed'. Region comes from the geography dimension. Over 100 questions, patterns emerge. No manual YAML, no config files, no sprint meetings. Just observation.",
        cta: { label: "Watch a live demo", href: "/contact" },
      },
      {
        eyebrow: "Step 02 — Certify",
        heading: "Your team owns the canonical definitions.",
        body: "Your data engineer reviews what Quaeris learned and certifies it: 'Yes, this is revenue. No, that variant is a one-off for the finance team. This churn definition is correct for product metrics but not for customer success.' Certification happens in the Quaeris UI — no code, no YAML, no friction. Once certified, a definition is locked, versioned, and owned. When it changes, every downstream agent answer updates automatically. The change is audited.",
        cta: {
          label: "Explore the certification flow",
          href: "/platform/governance",
        },
      },
      {
        eyebrow: "Step 03 — Trust",
        heading: "Every answer cites the certified metric.",
        body: "When a business user asks 'What's our Q3 churn?', the Quaeris agent returns not just a number, but the metric definition it used — owner, version, business logic, and the exact table lineage. Users see why the answer is what it is. If a different team has a different churn definition, both coexist in the semantic layer with clear ownership. The Quaeris governance dashboard shows metric usage, ownership, lineage, and change history. This is how trust scales.",
        cta: { label: "See the lineage view", href: "/platform/governance" },
      },
    ],
  },

  // ── Section 3 — Why Auto-Learning Wins ──────────────────────
  why: {
    intro: {
      eyebrow: "",
      heading: "Why auto-learning wins",
    },
    items: [
      {
        icon: "zap",
        title: "Weeks, not months",
        body: "Traditional semantic layers need 3–6 month modeling sprints. Quaeris learns from usage in days. Deploy on week one, [time to first certified metric] by week two.",
      },
      {
        icon: "code",
        title: "No code required",
        body: "Your data team certifies metrics in a UI, not YAML or MDX. Analytics engineers can stay focused on BI work, not semantic layer maintenance.",
      },
      {
        icon: "git-branch",
        title: "Versioned & audited",
        body: "Every metric definition change is logged with owner, timestamp, and rationale. Rollback or compare versions in one click. Full audit trail.",
      },
      {
        icon: "users",
        title: "Multiple authoritative definitions",
        body: "Finance's 'revenue' and Product's 'activation' coexist in one semantic layer. No forced reconciliation. Ownership and lineage make the difference clear.",
      },
      {
        icon: "bar-chart-3",
        title: "Scales to thousands",
        body: "Warehouse-native design handles thousands of metrics across hundreds of tables. No performance cliff as your semantic layer grows.",
      },
      {
        icon: "lock",
        title: "Governance by design",
        body: "Access controls, role-based metric visibility, and lineage enforcement are built in. Not added later. Security scales with adoption.",
      },
    ],
  },

  // ── Section 4 — Comparison Matrix ───────────────────────────
  comparison: {
    intro: {
      eyebrow: "Comparison",
      heading: "How Quaeris compares to other semantic layers",
    },
    table: {
      columns: [
        { label: "Feature / Capability" },
        { label: "Quaeris Smart Semantic Layer", highlight: true },
        { label: "dbt Semantic Layer" },
        { label: "Cube" },
        { label: "AtScale" },
        { label: "Looker LookML" },
      ],
      rows: [
        {
          feature: "Auto-learn from usage",
          cells: [
            { kind: "text", value: "Yes — learns from natural-language prompts" },
            { kind: "text", value: "No — requires YAML config" },
            { kind: "text", value: "Partial — requires code" },
            { kind: "text", value: "No — manual cube design" },
            { kind: "text", value: "No — requires LookML" },
          ],
        },
        {
          feature: "UI-based certification",
          cells: [
            { kind: "text", value: "Yes — zero code" },
            { kind: "text", value: "No" },
            { kind: "text", value: "No" },
            { kind: "text", value: "No" },
            { kind: "text", value: "No" },
          ],
        },
        {
          feature: "Warehouse-native",
          cells: [
            { kind: "text", value: "Yes — queries live data" },
            { kind: "text", value: "Yes — via dbt Cloud" },
            { kind: "text", value: "Partial — proxies queries" },
            { kind: "text", value: "Limited — requires data sync" },
            { kind: "text", value: "No — proprietary model" },
          ],
        },
        {
          feature: "Versioning & audit trail",
          cells: [
            { kind: "text", value: "Full history, owner tracking" },
            { kind: "text", value: "Via git only" },
            { kind: "text", value: "Via API only" },
            { kind: "text", value: "Limited" },
            { kind: "text", value: "Limited" },
          ],
        },
        {
          feature: "Role-based metric access",
          cells: [
            { kind: "text", value: "Yes — agent-level enforcement" },
            { kind: "text", value: "No" },
            { kind: "text", value: "Partial" },
            { kind: "text", value: "Partial" },
            { kind: "text", value: "Via Looker roles" },
          ],
        },
        {
          feature: "Time to first metric (starting from scratch)",
          cells: [
            { kind: "text", value: "[Time to first certified metric]" },
            {
              kind: "text",
              value:
                "[Estimated — dbt requires upfront YAML config sprints before queries can run]",
            },
            {
              kind: "text",
              value:
                "[Estimated — Cube requires developer setup and architecture work before first query]",
            },
            {
              kind: "text",
              value:
                "[Estimated — AtScale requires heavy upfront cube modeling per research]",
            },
            {
              kind: "text",
              value:
                "[Estimated — Looker requires LookML expertise and a modeling sprint]",
            },
          ],
        },
        {
          feature: "Supports multiple warehouse platforms",
          cells: [
            {
              kind: "text",
              value: "Yes — Snowflake, BigQuery, Databricks, Redshift, Synapse",
            },
            { kind: "text", value: "Yes — via adapters" },
            { kind: "text", value: "Yes — via drivers" },
            { kind: "text", value: "Yes" },
            { kind: "text", value: "Looker-only" },
          ],
        },
        {
          feature: "Learning curve for data teams",
          cells: [
            { kind: "text", value: "Low — watch & certify" },
            { kind: "text", value: "Medium — YAML + dbt modeling" },
            { kind: "text", value: "High — code + architecture" },
            { kind: "text", value: "High — cube design" },
            { kind: "text", value: "Very high — LookML + Looker concepts" },
          ],
        },
      ],
    },
    noteLinks: [
      { label: "Cube vs. Quaeris", href: "/compare/quaeris-vs-cube" },
      {
        label: "dbt Semantic Layer alternative",
        href: "/compare/quaeris-vs-dbt-semantic-layer",
      },
    ],
    cta: {
      label: "Download the full competitive analysis",
      href: "/resources/semantic-layer-comparison-guide",
    },
  },

  // ── Section 5 — Inside the Semantic Layer ───────────────────
  anatomy: {
    intro: {
      eyebrow: "Inside the semantic layer",
      heading: "What a certified metric looks like",
      subcopy:
        "Every metric definition in Quaeris contains the information your team needs to trust it.",
    },
    cards: [
      {
        eyebrow: "Definition",
        heading: "What is it?",
        specs: [
          { term: "Metric name", detail: "Revenue" },
          {
            term: "Description",
            detail: "Total order value excluding taxes and refunds",
          },
          { term: "Owner", detail: "Head of Finance (sarah@company.com)" },
          { term: "Version", detail: "2.3 (updated Jun 10, 2026)" },
        ],
      },
      {
        eyebrow: "Lineage",
        heading: "Where does it come from?",
        specs: [
          { term: "Source tables", detail: "orders, order_items, refunds" },
          { term: "Key filter", detail: "WHERE status = 'completed'", code: true },
          {
            term: "Calculation",
            detail: "SUM(order_items.price) - SUM(refunds.amount)",
            code: true,
          },
          { term: "Last updated", detail: "Jun 10, 2026 by sarah@company.com" },
        ],
      },
      {
        eyebrow: "Governance",
        heading: "Who can see it?",
        specs: [
          {
            term: "Visibility",
            detail: "Finance, Executive, Sales Leadership",
          },
          { term: "Restricted from", detail: "Customer Success, Product" },
          { term: "Change log", detail: "12 versions tracked" },
          { term: "Audit trail", detail: "340 queries this month" },
        ],
      },
    ],
  },

  // ── Section 6 — Use Cases ───────────────────────────────────
  useCases: {
    intro: {
      eyebrow: "Use cases",
      heading: "Where the Smart Semantic Layer delivers",
    },
    cards: [
      {
        icon: "users",
        label: "Finance + Product + Sales speak the same language",
        desc: "Each team has their own 'revenue' definition. Quaeris holds all of them in one semantic layer with clear ownership. No more reconciliation calls before the board meeting.",
        href: "/use-cases/financial-services-metric-alignment",
      },
      {
        icon: "zap",
        label: "Stop the ad-hoc request queue",
        desc: "Business teams no longer ask 'What's our revenue?' — they know the certified definition and ask confident follow-ups. Your data team shrinks the backlog by [% reduction in ad-hoc request queue].",
        href: "/use-cases/saas-time-to-insight",
      },
      {
        icon: "lock",
        label: "Audit every metric and every query",
        desc: "Regulated industries (finance, insurance, healthcare) need proof that metrics are certified and queries are governed. Quaeris's semantic layer IS the proof.",
        href: "/platform/audit",
      },
      {
        icon: "database",
        label: "Migrate off multiple BI tools",
        desc: "Teams running Tableau, Looker, and Sigma in parallel — each with different metric definitions. Quaeris's semantic layer becomes the single source of truth. Retire the legacy BI tool.",
        href: "/resources/bi-consolidation-roi",
      },
    ],
  },

  // ── Section 7 — Getting Started ─────────────────────────────
  gettingStarted: {
    intro: {
      eyebrow: "Getting started",
      heading: "Deploy in two weeks. Govern on day one.",
    },
    items: [
      {
        id: "gs-1",
        eyebrow: "Week 1 — Connect & Observe",
        question: "Connect your warehouse. Quaeris begins learning.",
        defaultOpen: true,
        paragraphs: [
          "Day 1–2: Connect to your Snowflake, BigQuery, Databricks, or Redshift instance (30 minutes). Quaeris scans your schema and begins observing user questions.",
          "Day 3–5: Your data team invites business users to ask pilot questions (10–20 exploratory queries). Quaeris infers metric patterns.",
          "Day 7: Review what Quaeris learned. Begin certification: 'Yes, that's our revenue. No, that's a one-off.'",
        ],
      },
      {
        id: "gs-2",
        eyebrow: "Week 2 — Certify & Govern",
        question: "Your team certifies metrics. Governance locks in.",
        paragraphs: [
          "Day 8–10: Data engineer certifies the top 20–30 metrics. Assigns owners, writes business rules, versions each one.",
          "Day 11–12: Configure role-based access. Decide which teams see which metrics. Test with a cohort of power users.",
          "Day 14: Go live. All agent answers cite certified metrics. Lineage is live. Audit logs are flowing.",
        ],
      },
      {
        id: "gs-3",
        eyebrow: "Week 3+ — Scale & Optimize",
        question: "Grow metrics. Refine governance.",
        paragraphs: [
          "Weeks 3–4: Monitor usage. Add new metrics as they emerge. Retire obsolete definitions.",
          "Month 2: Roll out to all business teams. Measure reduction in data-team ad-hoc requests.",
          "Ongoing: Quaeris learns new patterns. Your team certifies quarterly. Semantic layer stays current.",
        ],
      },
      {
        id: "gs-4",
        eyebrow: "Support & Training",
        question: "Quaeris runs alongside your existing BI stack.",
        paragraphs: [
          "Your data team gets: setup support, bi-weekly office hours, Slack channel with Quaeris experts.",
          "Business users get: 30-minute training on how to ask questions and read metric definitions.",
          "Documentation: API reference, SQL generator, lineage how-tos, governance playbooks.",
        ],
      },
    ],
  },

  // ── Section 8 — Proof ───────────────────────────────────────
  proof: {
    intro: {
      eyebrow: "Proof",
      heading: "Trusted by data leaders",
    },
    caseStudy: {
      industry: "[Customer industry]",
      name: "[Customer name]",
      statNum: "—%",
      statLabel: "Reduction in metric definition conflicts",
      quote: "[Quote from data leader on governance impact]",
      cta: { label: "Read the full story", href: "/case-studies" },
    },
    testimonial: {
      quote: "[Quote on auto-learning semantic layer]",
      name: "[Name, Title]",
      company: "[Company]",
    },
  },

  // ── Section 9 — Deep Dive ───────────────────────────────────
  deepDive: {
    eyebrow: "Why auto-learning matters",
    heading: "The semantic layer bottleneck — and why Quaeris solves it",
    paragraphs: [
      "Every semantic layer product asks your team to do the work upfront. Looker demands LookML expertise. dbt Semantic Layer requires weeks of YAML config writing. Cube and AtScale need architects to design cubes before a single question gets answered. The ROI math is brutal: you spend 3–6 months building before you get any benefit. Meanwhile, business teams have already found their own analytics solutions (spreadsheets, Sigma, Mode) and defined their own 'revenue.' Once that fragmentation sets in, unifying metrics later is a political problem, not a technical one.",
      "Quaeris flips the model. Metrics emerge from usage. Your team certifies what Quaeris learns, not the other way around. Governance happens at the point of observation, not at the end of a long modeling sprint. The ROI is immediate: in week two, every agent answer cites a certified metric. By month three, your data team's ad-hoc request queue has shrunk by [% reduction in ad-hoc request queue].",
    ],
    pullquote:
      "This is the only semantic layer that pays for itself before your team finishes configuring it.",
  },

  // ── Section 10 — FAQ ────────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "FAQ",
      heading: "Common questions about the Smart Semantic Layer",
    },
    miniCard: {
      title: "Still have questions?",
      body: "Talk to a Quaeris engineer about your warehouse, your metrics, and your governance requirements.",
      cta: { label: "Book a Demo", href: "/contact" },
    },
    items: [
      {
        id: "faq-sl-1",
        question:
          "Does Quaeris replace our existing BI tool's semantic layer (LookML, YAML, etc.)?",
        answer:
          "Quaeris complements, not replaces, your BI tool. If you're using Looker's LookML, Quaeris can coexist and serve natural-language queries while LookML continues to power structured dashboards. If you're looking to migrate off a legacy BI tool altogether, Quaeris's semantic layer becomes the source of truth — and you can retire LookML, YAML, or proprietary models.",
        defaultOpen: true,
      },
      {
        id: "faq-sl-2",
        question:
          "Can Quaeris learn metrics from a warehouse that already has a semantic layer?",
        answer:
          "Yes. If you have Looker, dbt Semantic Layer, or Cube already deployed, Quaeris can ingest those definitions and extend them. It learns from new questions, suggests new metrics, and lets your team version everything in one place. You're not forced to rebuild from scratch.",
      },
      {
        id: "faq-sl-3",
        question: "What if Quaeris learns a metric definition wrong?",
        answer:
          "Your data team reviews it during certification. If it's wrong, you reject it or correct it — mark the actual business rule. Quaeris won't use the rejected definition. It's not training on your corrections in a black-box way; your team's certification decision is explicit and versioned.",
      },
      {
        id: "faq-sl-4",
        question: "Who owns the metrics — Quaeris or our team?",
        answer:
          "100% your team. Metrics live in your warehouse. Definitions are certified by your data engineers. Quaeris is the platform that learns patterns and surfaces them for your approval. You control versioning, access, change history, everything.",
      },
      {
        id: "faq-sl-5",
        question: "Does the auto-learning happen in real time or in batch?",
        answer:
          "Quaeris observes questions in real time and incrementally updates its confidence in metric patterns. Certification happens on your schedule — daily, weekly, or monthly. No batch delays. No waiting.",
      },
      {
        id: "faq-sl-6",
        question:
          "What if we have conflicting metric definitions (Finance's revenue vs. Product's revenue)?",
        answer:
          "Both live in the semantic layer. Quaeris tracks which team owns which definition, tags them separately, and ensures agents use the correct one based on context or user role. No forced reconciliation. Transparency replaces conflict.",
      },
      {
        id: "faq-sl-7",
        question: "Can we audit which queries used which metric definition?",
        answer:
          "Yes. Every answer Quaeris returns is logged with: the metric definition version used, the date, the user who asked, the warehouse tables queried, and the exact lineage. This audit logging capability supports regulated-industry governance workflows. [Confirm held certifications (SOC 2, HIPAA BAA, ISO 27001) with security/compliance team before citing specific standards — see Open Question #5]",
      },
      {
        id: "faq-sl-8",
        question: "How does Quaeris handle new tables or schema changes?",
        answer:
          "Quaeris rescans your warehouse regularly. When a new table appears, it learns potential metrics from that table. When a schema changes, it updates its confidence estimates. Your team re-certifies as needed. Zero downtime.",
      },
    ],
  },

  // ── Section 11 — CTA Band ───────────────────────────────────
  cta: {
    eyebrow: "Ready to deploy?",
    heading: "See the Smart Semantic Layer in action.",
    subcopy:
      "Book a 30-minute demo. We'll connect to your warehouse, walk through a live metric certification, and show you an agent answer with full lineage — using your actual schema.",
    primary: { label: "Book a Demo", href: "/contact" },
    secondary: {
      label: "Get the white paper",
      href: "/resources/white-papers/smart-semantic-layers",
    },
  },
} satisfies PlatformSemanticLayerPageContent;
