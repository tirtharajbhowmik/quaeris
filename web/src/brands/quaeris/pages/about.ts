import type { AboutPageContent } from "@/config/page-types/about";

export const aboutPage = {
  meta: {
    title: "About Quaeris — Governed Agentic Analytics, San Francisco",
    description:
      "Quaeris Inc. builds secure, governed analytics powered by trusted agents — a San Francisco company on a mission to make enterprise AI data access auditable.",
  },

  // ── Section 01 — Page Hero (Mission Statement) ──────────────
  hero: {
    eyebrow: "Founded in San Francisco · seek@quaeris.ai",
    h1: "Secure, Governed Analytics. Powered by Trusted Agents.",
    subcopy:
      "Quaeris exists because the enterprise deserved an analytics platform where AI answers are audited, where the model is your choice, and where data governance is a design principle — not a checkbox bolted on at the end.",
  },

  // ── Section 02 — Company Identity Strip ─────────────────────
  identity: {
    ariaLabel: "Company identity",
    items: [
      {
        icon: "map-pin",
        label: "Headquarters",
        value: "Mission & 3rd, San Francisco, CA 94103",
      },
      {
        icon: "mail",
        label: "General inquiries",
        value: "seek@quaeris.ai",
        href: "mailto:seek@quaeris.ai",
      },
      {
        icon: "shield-check",
        label: "Mission",
        value: "Governed Agentic Analytics",
      },
    ],
  },

  // ── Section 03 — Why Quaeris Exists (Problem Framing) ───────
  why: {
    intro: {
      eyebrow: "The problem we set out to solve",
      heading: "Enterprise AI analytics had a governance deficit.",
      subcopy:
        "Every major analytics vendor was racing to add AI. Almost none of them asked: who audits the answers? Who chooses the model? How does a regulated company trust a response it cannot trace?",
    },
    cards: [
      {
        icon: "lock-open",
        title: "Ungoverned answers",
        problem:
          "AI answers generated from language model weights rather than from certified, auditable metric definitions. No traceability. No compliance story.",
        fixLabel: "The fix",
        fixIcon: "shield-check",
        fixTitle: "Governed answers from day one",
        fixBody:
          "Every Quaeris answer is grounded in the Smart Semantic Layer — auto-learned, auditable metric definitions that your team controls, not the model.",
      },
      {
        icon: "link",
        title: "Model lock-in",
        problem:
          "Every hyperscaler and incumbent tied the AI layer to their own model. Snowflake to Cortex. Microsoft to Azure OpenAI. Salesforce to Einstein. Procurement choice became compliance risk.",
        fixLabel: "The fix",
        fixIcon: "sliders-horizontal",
        fixTitle: "BYOM: your model, your compliance team’s choice",
        fixBody:
          "Connect OpenAI, Anthropic, Google, or Meta models and switch as the landscape evolves. The model is your procurement decision, not ours.",
      },
      {
        icon: "file-x",
        title: "Structured-only blindspot",
        problem:
          "Documents and data warehouses lived in entirely separate stacks. No product unified a SharePoint contract with a Snowflake fact table in a single governed query.",
        fixLabel: "The fix",
        fixIcon: "layers",
        fixTitle: "Documents and warehouse data in one governed query",
        fixBody:
          "Data Agents unify structured warehouse tables and unstructured documents — contracts, invoices, reports — in a single natural-language query with a single audit trail.",
      },
    ],
  },

  // ── Section 04 — The Three-Engine Architecture ─────────────
  architecture: {
    intro: {
      eyebrow: "How the platform is built",
      heading: "Three engines. One governed system.",
      subcopy:
        "The Quaeris platform is not a chatbot placed in front of a BI tool. It is a purpose-built three-engine information architecture where governance is enforced at every layer.",
    },
    engines: [
      {
        icon: "cpu",
        eyebrow: "Ask · Integrate · Activate",
        title: "Context Engine",
        body: "Interprets natural-language questions, integrates with your data warehouses and document sources, and activates the governed semantic layer — so the right data is in scope before any answer is generated.",
      },
      {
        icon: "search",
        eyebrow: "Search · Share · Accelerate",
        title: "Answer Engine",
        body: "Executes governed queries, surfaces search-ready insights, and delivers answers that can be shared across teams — all traceable to the certified metric definitions in the Smart Semantic Layer.",
      },
      {
        icon: "bar-chart-2",
        eyebrow: "Pin · Embed · Resonate",
        title: "Decision Engine",
        body: "Pins insights to pinboards, embeds governed analytics in external applications, and delivers resonant data experiences — keeping every number anchored to a verified source.",
      },
    ],
    cta: { label: "Agentic Query Engine", href: "/platform/agents" },
  },

  // ── Section 05 — Six Core Capabilities ─────────────────────
  capabilities: {
    intro: {
      eyebrow: "Platform capabilities",
      heading: "The six capabilities that make analytics trustworthy.",
      subcopy:
        "Each capability is a deliberate response to a gap in the market — not a feature added to hit a checklist.",
    },
    cards: [
      {
        wide: true,
        icon: "brain",
        title: "Smart Semantic Layer",
        link: { label: "Smart Semantic Layer", href: "/platform/semantic-layer" },
        body: "Automatically learns business definitions and data relationships from user interaction — no upfront LookML or MDX modeling sprint required. Every metric is defined once and applied consistently.",
      },
      {
        icon: "message-square",
        title: "Natural Language to SQL",
        body: "Plain-English questions translated into precise, governed SQL — checked against the semantic layer rather than free-form generation. Accuracy is structural, not probabilistic.",
      },
      {
        icon: "workflow",
        title: "Autonomous Multi-Step Workflows",
        body: "Agents plan and execute analyses — fetch, filter, join, forecast, anomaly-detect, root-cause — without a human checkpoint at every step. The audit trail captures each step.",
      },
      {
        icon: "trending-up",
        title: "Predictive & Proactive Analysis",
        body: "Forecasts, anomaly flags, root-cause diagnosis, and proactive alerts so issues surface before they affect business outcomes.",
      },
      {
        icon: "plug",
        title: "BYOM — Bring Your Own Model",
        body: "Connect OpenAI, Anthropic, Google, or Meta models and switch as the landscape evolves. Quaeris is not the model gatekeeper — your compliance team is.",
      },
      {
        wide: true,
        icon: "file-search",
        title: "Data & Document Agents",
        body: "Extract structured fields from contracts, invoices, and documents — then join with warehouse fact tables in one natural-language, governed query.",
      },
    ],
  },

  // ── Section 06 — Target Industries ─────────────────────────
  industries: {
    intro: {
      eyebrow: "Where Quaeris is deployed",
      heading: "Built for industries where governance is not optional.",
      subcopy:
        "Regulated, complex, data-intensive industries were the design target — not an afterthought.",
    },
    cards: [
      {
        index: "01",
        icon: "landmark",
        label: "Finance",
        desc: "Auditable answers on revenue, risk, and compliance metrics — with prompt-level audit trails for SOX and internal controls.",
      },
      {
        index: "02",
        icon: "shield",
        label: "Insurance",
        desc: "Governed queries across claims, actuarial, and underwriting data — unified with policy documents in a single agent workflow.",
      },
      {
        index: "03",
        icon: "shopping-cart",
        label: "Retail & CPG",
        desc: "Merchandising, inventory, and customer analytics from a semantic layer that speaks the language of the business, not the warehouse schema.",
      },
      {
        index: "04",
        icon: "activity",
        label: "Healthcare",
        desc: "Clinical, operational, and financial queries under HIPAA-aligned access controls — every answer scoped to the role that asked.",
      },
      {
        index: "05",
        icon: "settings-2",
        label: "Manufacturing",
        desc: "Quality, throughput, and supply-chain analytics driven by agents that can join machine logs with ERP fact tables.",
      },
      {
        index: "06",
        icon: "hard-hat",
        label: "Construction",
        desc: "Project margin, subcontractor, and procurement analytics — governed and auditable from field data to executive dashboard.",
      },
    ],
  },

  // ── Section 07 — Integrations (Data Sources We Connect) ────
  integrations: {
    intro: {
      eyebrow: "Warehouse-native by design",
      heading: "Your data stays in your environment.",
      subcopy:
        "Quaeris connects directly to your existing data infrastructure — no data copies, no pipelines to rebuild. Your warehouse is the system of record. Always.",
    },
    groups: [
      {
        icon: "server",
        label: "Warehouses",
        logos: [
          "Snowflake",
          "Google BigQuery",
          "Databricks",
          "Azure Synapse",
          "Amazon Redshift",
        ],
      },
      {
        icon: "file-text",
        label: "Document sources",
        logos: ["Microsoft SharePoint", "Google Drive"],
      },
    ],
    links: [
      { label: "See all integrations", href: "/integrations" },
      { label: "Warehouse-native", href: "/platform/warehouse" },
    ],
  },

  // ── Section 08 — Proof Signals ─────────────────────────────
  proof: {
    srHeading: "Proof signals",
    ariaLabel: "Review platform scores — pending",
    stats: [
      { num: "—", label: "Named enterprise customers" },
      { num: "—", label: "Industries served" },
      { num: "—", label: "Integrations available" },
    ],
    footnote: { label: "Security & compliance details", href: "/trust" },
    testimonial: {
      quote:
        "Approved customer quote pending — pull the exact E4E quote from /use-cases or the customer success team before launch.",
      initials: "CR",
      name: "Courtney Ramey",
      role: "E4E",
      cta: { label: "See customer outcomes", href: "/use-cases" },
    },
    reviewBadgesLabel: "Review platform scores — pending",
    reviewBadges: [
      { score: "—", platform: "G2" },
      { score: "—", platform: "Gartner Peer Insights" },
      { score: "—", platform: "Capterra" },
    ],
  },

  // ── Section 09 — Team Section (Structured Placeholder Only) ─
  team: {
    intro: {
      eyebrow: "The team",
      heading: "Built by people who understand enterprise data.",
      subcopy:
        "The Quaeris team combines deep experience in analytics infrastructure, enterprise security, and applied AI — focused on one problem: making data answers trustworthy at scale.",
    },
    members: [
      {
        name: "Name — pending content ops",
        role: "Title — pending content ops",
        linkLabel: "LinkedIn",
        linkAriaLabel: "LinkedIn profile — pending",
        href: "#",
      },
      {
        name: "Name — pending content ops",
        role: "Title — pending content ops",
        linkLabel: "LinkedIn",
        linkAriaLabel: "LinkedIn profile — pending",
        href: "#",
      },
      {
        name: "Name — pending content ops",
        role: "Title — pending content ops",
        linkLabel: "LinkedIn",
        linkAriaLabel: "LinkedIn profile — pending",
        href: "#",
      },
      {
        name: "Name — pending content ops",
        role: "Title — pending content ops",
        linkLabel: "LinkedIn",
        linkAriaLabel: "LinkedIn profile — pending",
        href: "#",
      },
    ],
  },

  // ── Section 10 — Mission & Values (Company Principles) ─────
  values: {
    intro: {
      eyebrow: "What we stand for",
      heading: "Governance is a design principle, not a feature flag.",
    },
    items: [
      {
        icon: "shield-check",
        title: "Governance-first architecture",
        body: "We do not bolt governance onto an existing product. The Smart Semantic Layer, the audit trail, and the role-based access controls are load-bearing structures — removing any one of them changes what the product is.",
        cta: { label: "Governance & Lineage", href: "/platform/governance" },
      },
      {
        icon: "sliders-horizontal",
        title: "Model neutrality",
        body: "An enterprise’s choice of AI model is a procurement and compliance decision, not a vendor’s revenue strategy. BYOM is not a selling point — it is a principle.",
      },
      {
        icon: "eye",
        title: "Full auditability",
        body: "Every question asked, every agent step taken, every answer returned is logged. Prompt-level audit trails are not an enterprise edition feature. They are the default.",
        cta: { label: "Audit Logs", href: "/platform/audit" },
      },
      {
        icon: "globe",
        title: "Customer data stays with customers",
        body: "Quaeris is warehouse-native. Your data never travels to Quaeris infrastructure. This is an architectural commitment, not a contractual promise.",
      },
    ],
  },

  // ── Section 11 — Closing CTA Band ──────────────────────────
  cta: {
    eyebrow: "Ready to evaluate Quaeris?",
    heading: "See a governed answer against your own data.",
    subcopy:
      "Book a 30-minute demo. We connect to your warehouse, walk through the semantic layer, and show you an auditable answer — no slides, no fabricated data.",
    primary: { label: "Book a Demo", href: "/contact" },
    secondary: { label: "See how the platform works", href: "/platform" },
  },
} satisfies AboutPageContent;
