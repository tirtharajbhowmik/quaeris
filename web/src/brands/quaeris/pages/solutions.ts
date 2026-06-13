import type { SolutionsPageContent } from "@/config/page-types/solutions";

export const solutionsPage = {
  meta: {
    title: "AI Analytics Solutions for Teams & Industries | Quaeris",
    description:
      "Governed agentic analytics built for data teams, analysts, and executives across finance, insurance, healthcare, retail, manufacturing, and construction.",
  },

  // ── Section 01 — Page Hero ──────────────────────────────────
  hero: {
    eyebrow: "Solutions",
    h1: "Governed analytics built for your team. Trusted in your industry.",
    subcopy:
      "Quaeris connects your data warehouse to a governed semantic layer and surfaces trusted, auditable answers — whether you run a data platform, lead analysis, or make decisions. Built for regulated industries where getting the number wrong has consequences.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    ghostCta: { label: "See how it works", href: "/platform" },
    cardsLabel: "Who Quaeris is built for",
    cards: [
      {
        icon: "database",
        label: "Data Teams",
        desc: "Control access, cut the ticket queue",
      },
      {
        icon: "bar-chart-2",
        label: "Analysts",
        desc: "Self-serve at speed, with full audit",
      },
      {
        icon: "briefcase",
        label: "Executives",
        desc: "Reliable answers without waiting on reports",
      },
      {
        icon: "landmark",
        label: "Finance & Insurance",
        desc: "Governed analytics for audit-ready decisions",
      },
      {
        icon: "heart-pulse",
        label: "Healthcare",
        desc: "HIPAA-compliant insight at the point of need",
      },
      {
        icon: "factory",
        label: "Manufacturing & Construction",
        desc: "Margin and quality analytics from your own data",
      },
    ],
  },

  // ── Section 02 — Problem Strip ──────────────────────────────
  problems: {
    intro: {
      eyebrow: "Why teams choose Quaeris",
      heading: "The three breakdowns that governed agentic analytics fixes.",
    },
    cards: [
      {
        icon: "triangle-alert",
        heading: "Conflicting numbers across teams",
        body: "Every team has its own definition of revenue, activation rate, or churn. Quaeris's Smart Semantic Layer certifies one definition and enforces it across every agent answer — so the board debate stops.",
      },
      {
        icon: "clock",
        heading: "Analysts buried in ad-hoc requests",
        body: "Business users wait days for answers that take minutes to retrieve. Quaeris gives any user a governed natural-language interface to their own data — agents answer; analysts focus on work that compounds.",
      },
      {
        icon: "shield-off",
        heading: "AI that can't be audited or trusted",
        body: "Most AI analytics tools are model-locked and produce outputs with no traceable lineage. Quaeris maintains a prompt-level audit trail and supports BYOM — so your compliance team can verify every answer and swap models as standards evolve.",
      },
    ],
  },

  // ── Section 03 — By Team ────────────────────────────────────
  byTeam: {
    intro: {
      eyebrow: "By team",
      heading: "Built for every person who touches your data.",
      subcopy:
        "Quaeris adapts to where you sit in the analytics workflow — not the other way around.",
    },
    cards: [
      {
        eyebrow: "For data teams",
        heading: "Reduce the request backlog. Stay in control.",
        body: "Your data team defines the governed semantic layer once. From that point, business users get answers without filing a ticket — while you retain full visibility into every query, every access decision, and every answer produced.",
        bullets: [
          "Role-based access enforced at query time, not dashboard filter",
          "Full prompt-level audit trail for every agent interaction",
          "Auto-learning Smart Semantic Layer grows without upfront LookML or MDX sprints",
        ],
        cta: { label: "Explore Data Teams", href: "/solutions/data-teams" },
      },
      {
        eyebrow: "For analysts",
        heading: "Self-serve at speed. Without sacrificing trust.",
        body: "Stop acting as a translation layer between business users and the warehouse. Ask complex, multi-step questions in plain language and receive source-cited answers. Quaeris agents chain forecasts, anomaly detection, and root-cause steps — so your analysis runs further, faster.",
        bullets: [
          "Autonomous multi-step workflows: fetch, filter, forecast, root-cause — one query",
          "Every answer cites the metric definitions and tables it used",
          "Connect structured warehouse data and unstructured documents in a single query",
        ],
        cta: { label: "Explore Analysts", href: "/solutions/analysts" },
      },
      {
        eyebrow: "For executives",
        heading: "Reliable answers. Without waiting on reports.",
        body: "Ask the question you actually have — not the question a dashboard was pre-built to answer. Quaeris agents retrieve governed answers from your certified semantic layer with role-based access enforced. No hallucinations, no stale exports, no ticket.",
        bullets: [
          "Questions answered in seconds against live warehouse data",
          "Proactive alerts flag anomalies before they reach your inbox as problems",
          "Every answer is auditable — traceable to its source metric definition",
        ],
        cta: { label: "Explore Executives", href: "/solutions/executives" },
      },
    ],
  },

  // ── Section 04 — Stat Band ──────────────────────────────────
  stats: {
    ariaLabel: "Outcomes across Quaeris deployments",
    items: [
      {
        num: "XX%",
        desc: "reduction in ad-hoc requests",
        label: "Across deployed teams",
      },
      {
        num: "XX min",
        label: "Median time from question to governed answer",
      },
      {
        num: "0",
        label: "Hallucinated numbers — every answer cites its source",
      },
      {
        num: "XX weeks",
        label: "Typical time to first governed answer in production",
      },
    ],
    note: "Outcomes across Quaeris-deployed organizations. [data-placeholder: verify stats with CS team before publish]",
  },

  // ── Section 05 — By Industry ────────────────────────────────
  byIndustry: {
    intro: {
      eyebrow: "By industry",
      heading: "Governed analytics for regulated industries.",
      subcopy:
        "Generic AI BI tools avoid regulated verticals. Quaeris is built precisely for industries where the number has to be right, auditable, and traceable.",
    },
    cards: [
      {
        icon: "landmark",
        heading: "Finance",
        body: "Conflicting KPIs across desks, portfolios, and legal entities create audit exposure.",
        bullets: [
          "Single certified metric definition per KPI across every reporting entity",
          "Prompt-level audit trail maps to SOX agent-control requirements [data-placeholder: confirm SOX applicability with legal]",
        ],
        cta: {
          label: "Finance analytics",
          href: "/industries/finance-governed-analytics",
        },
      },
      {
        icon: "file-check",
        heading: "Insurance",
        body: "Claims, underwriting, and actuarial teams work from different extracts of the same data.",
        bullets: [
          "Unified governed query across structured warehouse and unstructured policy documents",
          "HIPAA-compliant deployment posture for health lines [data-placeholder: confirm HIPAA certification status]",
        ],
        cta: {
          label: "Insurance analytics",
          href: "/industries/insurance-governed-analytics",
        },
      },
      {
        icon: "shopping-cart",
        heading: "Retail & CPG",
        body: "Merchandising, supply chain, and marketing report different revenue numbers to the same executive.",
        bullets: [
          "Smart Semantic Layer certifies revenue, margin, and sell-through across all regional teams",
          "Autonomous multi-step agents connect POS, inventory, and promo data in one query",
        ],
        cta: {
          label: "Retail analytics",
          href: "/industries/retail-cpg-governed-analytics",
        },
      },
      {
        icon: "heart-pulse",
        heading: "Healthcare",
        body: "Patient, claims, and operational data live in separate systems — and governance requirements make ad-hoc joins risky.",
        bullets: [
          "Data & Document Agents unify structured EHR warehouse data with unstructured clinical notes in one governed query",
          "Role-based access and full audit trail aligned to data privacy requirements [data-placeholder: confirm HIPAA certification status]",
        ],
        cta: {
          label: "Healthcare analytics",
          href: "/industries/healthcare-governed-analytics",
        },
      },
      {
        icon: "factory",
        heading: "Manufacturing",
        body: "Quality, OEE, and margin metrics are scattered across PLCs, ERPs, and line-level exports.",
        bullets: [
          "Conversational queries against Snowflake / Azure Synapse / Databricks without moving data",
          "Proactive anomaly detection flags quality issues before they propagate to downstream lines",
        ],
        cta: {
          label: "Manufacturing analytics",
          href: "/industries/manufacturing-governed-analytics",
        },
      },
      {
        icon: "hard-hat",
        heading: "Construction",
        body: "Project margin, subcontractor spend, and schedule data are manually reconciled in spreadsheets long after the window to act.",
        bullets: [
          "Natural-language queries across project, financial, and document data in one governed interface",
          "Autonomous agents surface margin erosion signals as they occur, not at month-end",
        ],
        cta: {
          label: "Construction analytics",
          href: "/industries/construction-governed-analytics",
        },
      },
    ],
  },

  // ── Section 06 — Differentiator Feature Rows ────────────────
  differentiators: {
    intro: {
      eyebrow: "",
      heading:
        "Four things Quaeris does that no other platform does together.",
      subcopy: "These are the structural differences — not feature checkboxes.",
    },
    rows: [
      {
        eyebrow: "Model independence",
        heading:
          "Bring Your Own Model. Your compliance team controls which AI runs on your data.",
        body: "Quaeris connects to OpenAI, Anthropic, Google, and Meta models. You choose which model processes your data — and you switch as the landscape evolves. No vendor lock-in means your AI governance policy isn't hostage to a single provider's roadmap. This is BYOM framed as a compliance feature, not a procurement one.",
        cta: { label: "Learn about BYOM", href: "/platform#byom" },
        ctaIcon: "key",
        imagePlaceholder: "UI screenshot — model selection panel",
      },
      {
        eyebrow: "Smart Semantic Layer",
        heading:
          "A semantic layer that learns your business — without a modeling sprint.",
        body: "Every other semantic layer requires your team to write LookML, dbt metrics, or MDX cube definitions before the first query runs. Quaeris's Smart Semantic Layer learns business definitions and data relationships from user interaction. Setup takes weeks, not quarters — and the layer keeps improving as teams use it.",
        cta: {
          label: "Explore the semantic layer",
          href: "/platform/semantic-layer",
        },
        ctaIcon: "brain",
        imagePlaceholder: "UI screenshot — semantic layer definition panel",
      },
      {
        eyebrow: "Governance by design",
        heading:
          "Every question, every agent step, every answer — logged and traceable.",
        body: "Quaeris maintains a full prompt-level audit trail: who asked what, which agent steps ran, which metric definitions were used, which data was returned. This is the audit story compliance teams need when regulators ask about AI-generated outputs — and it maps directly to EU AI Act obligations and the SOX expansion to AI agents. No other analytics platform publishes this story.",
        cta: { label: "See governance controls", href: "/platform/governance" },
        ctaIcon: "scroll-text",
        imagePlaceholder: "UI screenshot — audit log view",
      },
      {
        eyebrow: "Data & Document Agents",
        heading:
          "Ask questions that span contracts, invoices, and your warehouse — in one query.",
        body: "Document AI tools don't execute SQL. BI platforms don't read PDFs. Quaeris's Data & Document Agents extract structured fields from contracts, invoices, and reports and join them with warehouse fact tables in a single natural-language query. This is the only governed, unified query capability available across both structured and unstructured enterprise data.",
        cta: { label: "Explore document agents", href: "/platform/agents" },
        ctaIcon: "files",
        imagePlaceholder:
          "UI screenshot — document + SQL unified query result",
      },
    ],
  },

  // ── Section 07 — Social Proof Anchor ────────────────────────
  proof: {
    intro: {
      eyebrow: "Customer proof",
      heading: "Real outcomes. Governed answers.",
      subcopy:
        "Six case studies are published on the site. Five are anonymized — only one is named today (E4E / Courtney Ramey). Name each customer before this page launches — unnamed case studies are the primary EEAT gap on quaeris.ai today.",
    },
    cards: [
      {
        industry: "Financial Services",
        client: "[Customer name — cleared by CS, not anonymized]",
        outcome:
          "Reduced ad-hoc requests by X% while opening self-serve to Y business users",
        metrics: [
          { num: "XX%", label: "Metric 1" },
          { num: "XX", label: "Metric 2" },
          { num: "XX", label: "Metric 3" },
        ],
        cta: { label: "Read the story", href: "/use-cases/" },
      },
      {
        industry: "Insurance",
        client: "[Customer name — cleared by CS, not anonymized]",
        outcome: "Specific quantified outcome",
        metrics: [
          { num: "XX%", label: "Metric 1" },
          { num: "XX", label: "Metric 2" },
          { num: "XX", label: "Metric 3" },
        ],
        cta: { label: "Read the story", href: "/use-cases/" },
      },
    ],
  },

  // ── Section 08 — Integrations Strip ─────────────────────────
  integrations: {
    ariaLabel: "Integrations",
    label: "Works with your existing warehouse and data sources",
    badges: [
      "Snowflake",
      "BigQuery",
      "Databricks",
      "Azure Synapse",
      "Amazon Redshift",
      "SharePoint",
      "Google Drive",
    ],
    cta: { label: "See all integrations", href: "/integrations" },
  },

  // ── Section 09 — FAQ ────────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "Common questions",
      heading: "Questions about solutions and fit.",
    },
    items: [
      {
        id: "faq-a1",
        question:
          "Is Quaeris one product or separate products for each team and industry?",
        answer:
          "One platform. The team and industry pages describe how the same governed agentic analytics platform — Context Engine, Answer Engine, Decision Engine — maps to the specific workflows and pain points of each audience. The semantic layer, BYOM model choice, prompt-level audit trail, and Data & Document Agents are available across all deployments. Industry-specific content reflects the compliance posture and data patterns common to that sector.",
        defaultOpen: true,
      },
      {
        id: "faq-a2",
        question: "Does Quaeris require a data migration or new data warehouse?",
        answer:
          "No. Quaeris is warehouse-native. It connects directly to your existing Snowflake, BigQuery, Databricks, Azure Synapse, or Amazon Redshift instance. Your data never leaves your environment. The Smart Semantic Layer is built on top of your existing tables — there is nothing to migrate and no new infrastructure to stand up.",
      },
      {
        id: "faq-a3",
        question: "How does BYOM work in a regulated industry context?",
        answer:
          "BYOM (Bring Your Own Model) means your organization connects and governs which AI model processes your prompts and data — OpenAI, Anthropic, Google, or Meta. You are not locked to Quaeris's choice of model vendor. In regulated industries this matters because your compliance team can evaluate each model against your data-processing agreements and switch as regulatory standards evolve. The prompt-level audit trail captures model identity alongside every answer, so the audit record is complete regardless of which model ran. [data-placeholder: confirm specific model certification posture with product team before publish]",
      },
    ],
  },

  // ── Section 10 — CTA Band ───────────────────────────────────
  cta: {
    eyebrow: "Ready to see it in your environment?",
    heading:
      "Governed analytics built for the way your team actually works.",
    subcopy:
      "Book a 30-minute demo. We'll connect to your warehouse, configure a governed semantic layer against your data, and show you a live answered query — no slides, no placeholder data.",
    primary: { label: "Book a Demo", href: "/contact" },
    secondary: { label: "Explore the platform", href: "/platform" },
  },
} satisfies SolutionsPageContent;
