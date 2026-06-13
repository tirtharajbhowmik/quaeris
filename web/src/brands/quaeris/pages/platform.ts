import type { PlatformPageContent } from "@/config/page-types/platform";

export const platformPage = {
  meta: {
    title: "Quaeris Platform — Governed Agentic Analytics",
    description:
      "See how Quaeris's three-pillar architecture — Smart Semantic Layer, Trusted AI Agents, and enterprise security — delivers governed analytics at enterprise scale.",
  },

  // ── Section 01 — Page Hero ──────────────────────────────────
  hero: {
    badge: "Governed Agentic Analytics",
    h1: "Three layers. One governed answer.",
    subcopy:
      "Quaeris is built on a governed semantic layer, trusted AI agents, and enterprise-grade security controls — so every answer your team gets is accurate, auditable, and role-scoped. Architecture is not a marketing claim. It is what prevents hallucinations.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    ghostCta: { label: "Explore the architecture", href: "#architecture" },
    trust: [
      {
        icon: "database",
        text: "Warehouse-native — your data never leaves your environment",
      },
      {
        icon: "shield",
        text: "Prompt-level audit trail — every question, every answer, logged",
      },
      {
        icon: "cpu",
        text: "BYOM — connect OpenAI, Anthropic, Google, or Meta models",
      },
    ],
    layers: [
      {
        icon: "box",
        name: "Smart Semantic Layer",
        desc: "Certified, auto-learned metric definitions",
      },
      {
        icon: "bot",
        name: "Trusted AI Agents",
        desc: "Multi-step analysis, grounded in the layer below",
      },
      {
        icon: "shield-check",
        name: "Enterprise Security Controls",
        desc: "Role-scoped queries, full prompt-level audit trail",
      },
    ],
    engines: [
      { icon: "search-code", label: "Context Engine" },
      { icon: "zap", label: "Answer Engine" },
      { icon: "layout-dashboard", label: "Decision Engine" },
    ],
  },

  // ── Section 02 — Integration Marquee ────────────────────────
  marquee: {
    label: "Connects to your existing stack",
    logos: [
      "Snowflake",
      "BigQuery",
      "Databricks",
      "Azure Synapse",
      "Amazon Redshift",
      "SharePoint",
      "Google Drive",
    ],
  },

  // ── Section 03 — Three Pillars ──────────────────────────────
  architecture: {
    intro: {
      eyebrow: "Platform architecture",
      heading: "Governance-first by design. Not by dashboard filter.",
      subcopy:
        "Most AI analytics tools apply governance as a permission layer on top of an existing BI stack. Quaeris encodes it at three levels simultaneously — in the semantic layer that defines your metrics, in the agents that answer questions, and in the security controls that scope every query. Each layer reinforces the others.",
    },
    pillars: [
      {
        icon: "bar-chart-2",
        title: "Governed Semantic Layer",
        body: "Your data team defines metrics once — revenue, activation rate, churn — inside Quaeris's Smart Semantic Layer. The layer auto-learns business definitions from user interaction; no upfront LookML or MDX modeling sprint is required. Every agent answer traces back to these certified definitions. Conflicting numbers across teams stop being a problem.",
        cta: {
          label: "Deep dive",
          href: "/platform/semantic-layer",
          ariaLabel: "Deep dive into the Governed Semantic Layer",
        },
        tone: "accent",
      },
      {
        icon: "bot",
        title: "Trusted AI Agents",
        body: "Business users ask questions in plain language. Quaeris agents plan and execute multi-step analyses — fetch, filter, join, forecast, anomaly-detect, root-cause — without a human in every step. Critically, agents query the governed semantic layer, not raw tables or a language model's memory. Every number is traceable to a certified metric.",
        cta: {
          label: "Deep dive",
          href: "/platform/agents",
          ariaLabel: "Deep dive into Trusted AI Agents",
        },
        tone: "success",
      },
      {
        icon: "shield-check",
        title: "Enterprise Security",
        body: "Role-based access controls are enforced at query time, not as a dashboard filter. Quaeris runs warehouse-native — your data never leaves your environment. Every query, every agent step, and every answer is logged in a full prompt-level audit trail. Bring your own model: connect OpenAI, Anthropic, Google, or Meta and switch as your compliance posture evolves.",
        cta: {
          label: "Deep dive",
          href: "/platform/governance",
          ariaLabel: "Deep dive into Enterprise Security",
        },
        tone: "warning",
      },
    ],
  },

  // ── Section 04 — How It Works ───────────────────────────────
  methodology: {
    intro: {
      eyebrow: "How Quaeris works",
      heading:
        "From plain-language question to governed answer — in four steps.",
      subcopy:
        "A transparent pipeline. No black boxes, no unexplained numbers, no hallucinations.",
    },
    steps: [
      {
        eyebrow: "Step 01",
        heading: "Connect your warehouse",
        body: "Quaeris connects directly to your existing Snowflake, BigQuery, Databricks, Azure Synapse, or Amazon Redshift instance. No data copying, no pipelines to rebuild. Your warehouse stays the system of record. SharePoint and Google Drive connect for document ingestion alongside structured warehouse data.",
        cta: { label: "See supported warehouses", href: "/platform/warehouse" },
      },
      {
        eyebrow: "Step 02",
        heading: "Build the governed semantic layer",
        body: "Your data team defines certified metric definitions, business rules, ownership, and lineage. The Smart Semantic Layer also auto-learns business context from user interaction — reducing the upfront authoring burden that every other semantic-layer product requires. Definitions are versioned and auditable.",
        cta: {
          label: "Explore the semantic layer",
          href: "/platform/semantic-layer",
        },
      },
      {
        eyebrow: "Step 03",
        heading: "Ask in plain language",
        body: "Business users type questions as they would to a colleague. Quaeris agents interpret the question, traverse the semantic layer, plan multi-step analysis where needed, and return a precise, source-cited answer. Data and Document Agents can join structured warehouse tables with fields extracted from contracts, invoices, or reports in a single natural-language query.",
        cta: { label: "See a live demo", href: "/contact" },
      },
      {
        eyebrow: "Step 04",
        heading: "Audited, role-scoped answers",
        body: "Every answer shows the metric definitions it used and the agent steps it took. Role-based access controls enforce what each user can see — at query time, not dashboard level. The full prompt-level audit trail logs who asked what and when, satisfying both internal governance requirements and emerging external obligations such as the EU AI Act.",
      },
    ],
  },

  // ── Section 05 — Six Core Capabilities ──────────────────────
  capabilities: {
    intro: {
      eyebrow: "Core capabilities",
      heading: "Six capabilities that make every answer trustworthy.",
      subcopy:
        "Quaeris is not a single feature wrapped in a product shell. Six integrated capabilities work together — and each one is governed by the semantic layer beneath it.",
    },
    items: [
      {
        icon: "languages",
        title: "Natural Language to SQL",
        body: "Plain-English questions translate into precise, governed SQL — checked against the semantic layer, not generated freeform. No query goes to the warehouse without passing through certified metric definitions.",
      },
      {
        icon: "workflow",
        title: "Autonomous Multi-Step Workflows",
        body: "Agents plan and execute analyses that span multiple steps — fetch, filter, join, forecast, anomaly-detect, root-cause — without requiring a human to hand off each stage.",
      },
      {
        icon: "trending-up",
        title: "Predictive and Proactive Analysis",
        body: "Forecasts, anomaly flags, root-cause diagnosis, and proactive alerts surface issues before they reach the board. The agent tells you what changed and why, not just what the current number is.",
      },
      {
        icon: "brain",
        title: "Smart Semantic Layer",
        body: "Auto-learns business definitions and data relationships from user interaction. No upfront LookML or MDX modeling sprint. The layer improves as usage grows.",
      },
      {
        icon: "shuffle",
        title: "BYOM — Bring Your Own Model",
        body: "Connect OpenAI, Anthropic, Google, or Meta models and switch as the landscape evolves. Quaeris is not the model gatekeeper. Your compliance team chooses the model; the governed layer stays constant.",
      },
      {
        icon: "file-search",
        title: "Data and Document Agents",
        body: "Extract structured fields from contracts, invoices, and resumes — then join with warehouse fact tables in a single natural-language query. Structured and unstructured data as co-equal citizens in one governed query.",
      },
    ],
  },

  // ── Section 06 — Three-Engine Bento ─────────────────────────
  engines: {
    intro: {
      eyebrow: "Three-engine information architecture",
      heading: "Context Engine. Answer Engine. Decision Engine.",
      subcopy:
        "Quaeris organizes its capabilities into three named engines. Each engine is a cluster of sub-capabilities with its own URL, so your team can navigate directly to the feature that serves their workflow.",
    },
    cards: [
      {
        icon: "search-code",
        title: "Context Engine",
        links: [
          { label: "Ask", href: "/conversational-queries" },
          { label: "Integrate", href: "/integrations" },
          { label: "Activate", href: "/activate" },
        ],
        body: "The Context Engine is where questions enter the system. Natural-language queries are parsed, mapped to the semantic layer, and enriched with the business context the Smart Semantic Layer has learned. This is where NL-to-SQL translation happens — checked, not generated.",
      },
      {
        icon: "zap",
        title: "Answer Engine",
        links: [
          { label: "Search", href: "/search" },
          { label: "Share", href: "/communities" },
          { label: "Accelerate", href: "/accelerate" },
        ],
        body: "The Answer Engine executes the analysis. Agents fetch, join, compute, and — where needed — forecast or anomaly-detect across multi-step workflows. Answers are assembled with source citations and delivered with full lineage.",
      },
      {
        icon: "layout-dashboard",
        title: "Decision Engine",
        links: [
          { label: "Pin", href: "/pinboards" },
          { label: "Embed", href: "/embedded-analytics" },
          { label: "Resonate", href: "/resonate" },
        ],
        body: "The Decision Engine surfaces answers where decisions happen. Pin insights to pinboards, embed governed analytics in your own applications or portals, or push proactive alerts to the stakeholders who need them — all with the same governed data beneath.",
      },
    ],
  },

  // ── Section 07 — Competitive Differentiation (dark) ─────────
  differentiation: {
    intro: {
      eyebrow: "Why architecture matters",
      heading:
        "Every competitor claims AI. Not every architecture prevents hallucinations.",
      subcopy:
        "The difference is not the language model. It is whether governance is encoded at the architecture level or applied as a filter on top.",
    },
    cards: [
      {
        index: "01",
        kicker: "Incumbent BI platforms",
        problem:
          "Power BI Copilot is Azure-OpenAI bound. Tableau leans Einstein. Snowflake Cortex Analyst locks you to one warehouse and one model. When the compliance landscape changes, you cannot switch.",
        fixLabel: "BYOM as a compliance feature",
        fixBody:
          "Quaeris is not the model gatekeeper. Connect OpenAI, Anthropic, Google, or Meta — and switch as your compliance posture or cost math evolves. The governed layer underneath stays constant regardless of which model sits above it.",
      },
      {
        index: "02",
        kicker: "Manual semantic layers",
        problem:
          "Cube, dbt Semantic Layer, AtScale, and Honeydew all require your team to author semantic definitions upfront — LookML, SML, or MetricFlow YAML. That is weeks of modeling before users can ask a single governed question.",
        fixLabel: "Auto-learning Smart Semantic Layer",
        fixBody:
          "Quaeris's Smart Semantic Layer learns business definitions and data relationships from user interaction. It reduces the upfront authoring sprint every other semantic-layer product demands. Your team defines the rules; the layer handles the learning.",
      },
      {
        index: "03",
        kicker: "Document AI and BI as separate stacks",
        problem:
          "Tableau, Power BI, Looker, Qlik, and Sigma are structured-data-only. Glean and Hebbia are document-only. Every workflow that spans a contract and a warehouse fact table requires manual extraction and a second query tool.",
        fixLabel: "Data and Document Agents in one query",
        fixBody:
          "Quaeris's Document Agents extract structured fields from contracts, invoices, and reports, then join them with warehouse data in a single natural-language query. Structured and unstructured data are co-equal citizens in the same governed system.",
      },
    ],
  },

  // ── Section 08 — Stats Band ─────────────────────────────────
  stats: {
    intro: {
      eyebrow: "Platform performance",
      heading: "",
    },
    items: [
      {
        num: "—",
        label: "Reduction in ad-hoc analytics requests",
        desc: "Across deployed organizations",
      },
      {
        num: "—",
        label: "Named customer deployments",
        desc: "Across Finance, Insurance, Retail, Healthcare, Manufacturing, Construction",
      },
      {
        num: "—",
        label: "Median time from question to governed answer",
        desc: "Warehouse-native, no data movement",
      },
      {
        num: "0",
        label: "Hallucinated numbers",
        desc: "Every answer grounded in the certified semantic layer",
      },
    ],
  },

  // ── Section 09 — Customer Proof ─────────────────────────────
  proof: {
    intro: {
      eyebrow: "Customer proof",
      heading: "Real deployments. Governed answers.",
      subcopy:
        "Six case studies are live on the Quaeris site. Named customer attribution improves both trust and AI citation rates. Prioritize de-anonymization of at least two before this page ships.",
    },
    cards: [
      {
        industry: "Financial Services",
        client: "A leading financial institution",
        outcome: "Outcome to be confirmed with the CS team.",
        metrics: [
          { num: "—", label: "Metric TBD" },
          { num: "—", label: "Metric TBD" },
          { num: "—", label: "Metric TBD" },
        ],
        cta: { label: "Read the story", href: "/customers" },
      },
      {
        industry: "Property Management SaaS",
        client: "A property management SaaS company",
        outcome: "Outcome to be confirmed with the CS team.",
        metrics: [
          { num: "—", label: "Metric TBD" },
          { num: "—", label: "Metric TBD" },
          { num: "—", label: "Metric TBD" },
        ],
        cta: { label: "Read the story", href: "/customers" },
      },
      {
        industry: "Insurance",
        client: "An insurance company",
        outcome: "Outcome to be confirmed with the CS team.",
        metrics: [
          { num: "—", label: "Metric TBD" },
          { num: "—", label: "Metric TBD" },
          { num: "—", label: "Metric TBD" },
        ],
        cta: { label: "Read the story", href: "/customers" },
      },
    ],
  },

  // ── Section 10 — Subpage Navigation ─────────────────────────
  subpages: {
    intro: {
      eyebrow: "Explore by capability",
      heading: "Go deeper into the layer that matters most to your team.",
      subcopy:
        "Every pillar has a dedicated subpage with technical detail, integration diagrams, and relevant FAQs. Pick the layer that matches your team's current priority.",
    },
    cards: [
      {
        icon: "bot",
        label: "Agentic Query Engine",
        desc: "How Trusted AI Agents plan and execute multi-step analyses — governed by the semantic layer at every step.",
        href: "/platform/agents",
      },
      {
        icon: "layers",
        label: "Semantic Layer",
        desc: "The Smart Semantic Layer: how certified metric definitions are built, auto-learned, and enforced across every query.",
        href: "/platform/semantic-layer",
      },
      {
        icon: "git-branch",
        label: "Governance and Lineage",
        desc: "Full trace from plain-language question to source table — versioned, auditable, and ownership-stamped.",
        href: "/platform/governance",
      },
      {
        icon: "lock",
        label: "Role-Based Access",
        desc: "How query-time access controls scope data to exactly what each user's role permits — no dashboard-filter workarounds.",
        href: "/platform/access-control",
      },
      {
        icon: "database",
        label: "Warehouse-Native Architecture",
        desc: "Why your data never leaves your environment, and how Quaeris connects without pipelines or data copies.",
        href: "/platform/warehouse",
      },
      {
        icon: "scroll-text",
        label: "Audit Logs",
        desc: "The full prompt-level audit trail: who asked what, which agent steps ran, which metric definitions answered.",
        href: "/platform/audit",
      },
    ],
  },

  // ── Section 11 — Trust and Compliance Strip ─────────────────
  trustRow: {
    eyebrow: "Security and compliance",
    heading: "Built for regulated enterprise environments",
    badges: [
      {
        icon: "shield",
        label: "Warehouse-native — data never leaves your environment",
      },
      {
        icon: "user-check",
        label: "Role-based access enforced at query time",
      },
      {
        icon: "file-text",
        label: "Prompt-level audit trail",
      },
      {
        icon: "cpu",
        label: "BYOM — OpenAI, Anthropic, Google, Meta",
      },
      { icon: "award", label: "SOC 2", href: "/trust" },
      { icon: "globe", label: "GDPR", href: "/trust" },
      { icon: "activity", label: "HIPAA", href: "/trust" },
    ],
  },

  // ── Section 12 — FAQ ────────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "Common questions",
      heading: "Architecture questions, answered plainly.",
    },
    miniCard: {
      title: "Still have questions?",
      body: "Book a 30-minute platform walkthrough with a Quaeris solutions engineer. We will connect to your warehouse and show you a governed answer against your own data.",
      cta: { label: "Book a Demo", href: "/contact" },
    },
    items: [
      {
        id: "faq-a1",
        question: "Does Quaeris hallucinate numbers?",
        answer:
          "No. Quaeris agents query the governed semantic layer — they do not generate numbers from a language model's training data. Every answer is grounded in the certified metric definitions your data team controls. If a question cannot be answered from the semantic layer, the agent says so rather than guessing.",
        defaultOpen: true,
      },
      {
        id: "faq-a2",
        question: "Does my data ever leave my environment?",
        answer:
          "No. Quaeris is warehouse-native. It connects directly to your existing Snowflake, BigQuery, Databricks, Azure Synapse, or Amazon Redshift instance and queries it in place. No data is copied, cached, or stored on Quaeris infrastructure.",
      },
      {
        id: "faq-a3",
        question:
          "What is the Smart Semantic Layer and how is it different from dbt or LookML?",
        answer:
          "The Smart Semantic Layer is Quaeris's auto-learning layer for certified metric definitions and business context. Unlike dbt's MetricFlow or LookML, it learns business definitions from user interaction — reducing the upfront authoring sprint every other semantic-layer product requires. Your team still controls and certifies definitions; the layer handles the inference work.",
      },
      {
        id: "faq-a4",
        question: "What does BYOM mean in practice?",
        answer:
          "BYOM (Bring Your Own Model) means Quaeris connects to the LLM of your choice — OpenAI, Anthropic, Google, or Meta — and lets you switch as the landscape evolves. Quaeris is not the model gatekeeper. Your compliance team chooses the model; the governed semantic layer underneath stays constant.",
      },
      {
        id: "faq-a5",
        question: "How long does deployment take?",
        answer:
          "Most teams connect to their warehouse and serve governed answers within two weeks. Week one covers warehouse integration and semantic layer setup. Week two covers user onboarding and access policy configuration. There is no data migration — your existing warehouse is the deployment target.",
      },
      {
        id: "faq-a6",
        question: "How does the audit trail work?",
        answer:
          "Every query, every agent step, and every answer is logged in a full prompt-level audit trail. The log records who asked, what question they asked, which agent steps ran, which metric definitions were used, and which data was returned. This trail is accessible to your governance and compliance teams and is designed to satisfy both internal audit requirements and emerging external obligations such as the EU AI Act and expanding SOX provisions for AI agents.",
      },
      {
        id: "faq-a7",
        question: "Can Quaeris query documents alongside warehouse data?",
        answer:
          "Yes. Data and Document Agents extract structured fields from contracts, invoices, resumes, and reports — then join them with warehouse fact tables in a single natural-language query. Structured and unstructured data are co-equal citizens in the same governed query. SharePoint and Google Drive are supported as document sources.",
      },
      {
        id: "faq-a8",
        question: "Does Quaeris replace our existing BI tool?",
        answer:
          "Quaeris complements your BI stack rather than replacing it. It sits above your warehouse and semantic layer, giving business users a governed natural-language interface for exploratory and investigative questions. Scheduled, structured reports and dashboards continue to serve their current purpose. Quaeris handles the questions that do not fit a pre-built dashboard.",
      },
    ],
  },

  // ── Section 13 — CTA Band ───────────────────────────────────
  cta: {
    eyebrow: "Ready to see it live?",
    heading:
      "Stop explaining why your numbers disagree. Start governed analytics.",
    subcopy:
      "Book a demo. We will connect to your warehouse, walk through the semantic layer setup, and return a governed answer against your own data — in 30 minutes.",
    primary: { label: "Book a Demo", href: "/contact" },
    secondary: { label: "See customer stories", href: "/customers" },
  },
} satisfies PlatformPageContent;
