import type { PlatformWarehousePageContent } from "@/config/page-types/platform-warehouse";

export const platformWarehousePage = {
  meta: {
    title: "Warehouse-Native AI Analytics | Quaeris",
    description:
      "Quaeris runs directly on Snowflake, BigQuery, or Databricks. Your data never leaves your environment. Enterprise-grade governance, zero data copy.",
  },

  // ── Section 01 — Hero ───────────────────────────────────────
  hero: {
    eyebrow: "Security & Control",
    h1: "Your data stays where it belongs.",
    subcopy:
      "Quaeris is warehouse-native. No data copy. No cache layer. No exfiltration risk. Agents query your Snowflake, BigQuery, Databricks, or Redshift in place — with row-level security enforced. Every query runs in your environment. Every result stays governed.",
    primaryCta: { label: "See the architecture", href: "#architecture" },
    secondaryCta: {
      label: "Compare deployment models",
      href: "#deployment-models",
    },
    trust: [
      { icon: "shield-check", text: "Zero data egress" },
      { icon: "lock", text: "Role-based enforcement" },
      { icon: "map-pin", text: "Full residency control" },
    ],
    agentLayer: {
      icon: "bot",
      title: "Quaeris query agents",
      desc: "Plain-language question → governed answer with sources and audit trail.",
    },
    flowLabel: "Queries run in place",
    warehouseLayer: {
      icon: "database",
      title: "Your warehouse",
      desc: "Row-level security enforced. Zero data egress.",
      chips: [
        { label: "Snowflake" },
        { label: "BigQuery" },
        { label: "Databricks" },
        { label: "Redshift" },
      ],
    },
  },

  // ── Section 02 — The Problem ────────────────────────────────
  problem: {
    intro: {
      eyebrow: "The problem",
      heading: "Most analytics vendors move your data. That’s the risk.",
    },
    cards: [
      {
        index: "01",
        problemHeading: "SaaS analytics moves your data to the cloud.",
        problemBody:
          "Typical BI vendors copy your warehouse to their infrastructure — “for performance.” That copy is a compliance liability: data residency violations, audit log gaps, third-party exposure.",
        fixLabel: "The fix",
        fixHeading: "Warehouse-native keeps your data locked in place.",
        fixBody:
          "No copy. No cloud sync. Quaeris connects directly to your warehouse and executes queries in silo. Your data never crosses a network boundary to Quaeris infrastructure.",
      },
      {
        index: "02",
        problemHeading: "Multi-tenant vendors blur account boundaries.",
        problemBody:
          "Shared infrastructure creates cross-tenant risks. Query isolation is app-level, not infrastructure-level. One SQL injection in another tenant’s query potentially exposes your data.",
        fixLabel: "The fix",
        fixHeading: "Single-tenant deployment per customer.",
        fixBody:
          "Your agents, your semantic layer, your query execution — all isolated in your environment. No shared infrastructure. No cross-customer blast radius.",
      },
    ],
  },

  // ── Section 03 — The Architecture ───────────────────────────
  architecture: {
    intro: {
      eyebrow: "The architecture",
      heading: "The warehouse-native stack.",
    },
    layers: [
      {
        num: "04",
        icon: "bot",
        title: "Query Agents & Audit",
        desc: "Plain-language query → agent reasoning → result + sources. Audit trail.",
        note: "Agents run in your environment or behind your firewall.",
        flowLabel: "Governed results up",
      },
      {
        num: "03",
        icon: "layers",
        title: "Governed Semantic Layer",
        desc: "Metric definitions. Business rules. Ownership. Enforced row-level security.",
        note: "Lives in your warehouse (e.g., Snowflake Native App) or your VPC.",
        flowLabel: "Direct SQL up",
      },
      {
        num: "02",
        icon: "plug",
        title: "Quaeris Warehouse Connector",
        desc: "Native connector for your warehouse. Direct SQL execution. Zero copy.",
        flowLabel: "Queries in place",
      },
      {
        num: "01",
        icon: "database",
        title: "Your Warehouse",
        desc: "Snowflake, BigQuery, Databricks, Synapse, Redshift.",
        note: "Your system of record. Where your data lives. Unchanged.",
      },
    ],
    callouts: [
      {
        icon: "globe",
        title: "GDPR-compliant",
        body: "Data in EU, agents in EU.",
      },
      {
        icon: "file-check",
        title: "SOX audit-ready",
        body: "Query execution logged, immutable trail.",
      },
      {
        icon: "map-pin",
        title: "Data residency enforced",
        body: "No copy, no shared infrastructure.",
      },
    ],
    footnote:
      "Warehouse-native isn’t a marketing phrase—it’s an architecture. Quaeris connects directly to your existing warehouse and executes every query in place. The semantic layer can live in-warehouse (as a Snowflake Native App, for example) or in your private cloud. Agents run in your environment or behind your firewall. Your data never lands on Quaeris infrastructure.",
  },

  // ── Section 04 — Supported warehouses & connectors ──────────
  connectors: {
    intro: {
      eyebrow: "Supported warehouses",
      heading: "Supported warehouses & connectors.",
      subcopy:
        "Quaeris doesn’t lock you to one warehouse vendor — connect to where your data already lives.",
    },
    cards: [
      {
        icon: "git-compare",
        label: "Snowflake",
        href: "/integrations/snowflake",
        ariaLabel: "Snowflake — see integration details",
        bullets: [
          "Native App or direct connector",
          "Row-level security & column masking",
          "Supports Snowflake Data Sharing",
          "Queries Iceberg tables natively",
        ],
        cta: "See Snowflake integration details",
      },
      {
        icon: "cloud",
        label: "BigQuery",
        href: "/integrations/bigquery",
        ariaLabel: "BigQuery — see integration details",
        bullets: [
          "Direct API connector",
          "Authorized Views & column-level masking",
          "Cloud DLP integration",
          "BigLake support for data lake",
        ],
        cta: "See BigQuery integration details",
      },
      {
        icon: "layers",
        label: "Databricks",
        href: "/integrations/databricks",
        ariaLabel: "Databricks — see integration details",
        bullets: [
          "Unity Catalog integration",
          "Row-level access control",
          "AI/BI Genie alternative",
          "Supports Delta Lake + Unity tables",
        ],
        cta: "See Databricks integration details",
      },
      {
        icon: "database",
        label: "Redshift",
        href: "/integrations/redshift",
        ariaLabel: "Redshift — see integration details",
        bullets: [
          "Direct SQL connector",
          "RLS & dynamic masking",
          "Spectrum external tables supported",
          "Federated query compatible",
        ],
        cta: "See Redshift integration details",
      },
      {
        icon: "server",
        label: "Azure Synapse",
        href: "/integrations/synapse",
        ariaLabel: "Azure Synapse — see integration details",
        bullets: [
          "T-SQL native connector",
          "Row-level security & column encryption",
          "Private endpoints supported",
          "Dedicated SQL pool optimized",
        ],
        cta: "See Synapse integration details",
      },
      {
        icon: "circle-plus",
        label: "Your warehouse?",
        href: "/contact",
        ariaLabel: "Your warehouse? Discuss custom integration",
        desc: "Contact our team",
        bullets: [
          "Custom connectors available",
          "PostgreSQL, MySQL, Oracle on roadmap",
        ],
        cta: "Discuss custom integration",
      },
    ],
  },

  // ── Section 05 — Data residency & compliance ────────────────
  compliance: {
    intro: {
      eyebrow: "Data residency & compliance",
      heading: "Data stays in your hands.",
    },
    items: [
      {
        icon: "globe",
        title: "GDPR & EU Data Residency",
        body: "European regulations require personal data to stay within EU borders. Quaeris is warehouse-native, so your EU data stays on your EU warehouse instance — no data transfer to US servers. Your semantic layer can be deployed in your EU VPC or on a Snowflake Europe account. Agents run in-region. Audit trails stay in-region.",
        link: { label: "SOC 2 & GDPR certification", href: "#" },
      },
      {
        icon: "heart-pulse",
        title: "HIPAA & Healthcare Data Protection",
        body: "HIPAA-covered entities must maintain tight access logs and audit trails. Quaeris logs every query, every agent step, and every answer at the warehouse level — immutable, in-place. No data copy means no secondary handling; no secondary handling means lower breach risk and simpler audit trails.",
        link: { label: "HIPAA-eligible infrastructure list", href: "#" },
      },
      {
        icon: "file-check",
        title: "SOX Compliance & Financial Audit",
        body: "SOX auditors demand proof that financial queries are governed and their results are audited. Quaeris’s audit trail is a first-class citizen: every question, every agent reasoning step, every metric definition applied — all logged. The log is immutable (warehouse-level) and can be exported for SOX reviews without reconstructing query history.",
        link: { label: "SOX audit playbook", href: "#" },
      },
      {
        icon: "map-pin",
        title: "Data Residency for Regulated Industries",
        body: "Some contracts forbid data transfer to third parties. Others require data to stay within a specific geography or cloud. Warehouse-native architecture solves this: Quaeris is a query layer, not a data layer. Deploy it behind your firewall, in your private cloud, or on your warehouse’s private endpoint. Data residency becomes a deployment choice, not a product limitation.",
      },
    ],
  },

  // ── Section 06 — Deployment models ──────────────────────────
  deployment: {
    intro: {
      eyebrow: "Deployment models",
      heading: "Pick your posture.",
    },
    cards: [
      {
        icons: ["lock", "cloud"],
        badge: "Recommended for most",
        badgeAccent: true,
        title: "SaaS, Behind Your Firewall",
        body: "Quaeris SaaS runs in AWS or Azure, but agents connect to your warehouse through a private endpoint or VPN tunnel. Your queries never touch the public internet.",
        bullets: [
          "Fastest to deploy (hours, not days)",
          "Automatic updates and security patches",
          "Zero infrastructure burden on your team",
          "Private endpoint or VPN tunnel required",
          "Data residency: your warehouse location",
        ],
        whoLabel: "Who it’s for",
        whoBody:
          "Most enterprises. You want SaaS convenience without public-internet data flow.",
      },
      {
        icons: ["server", "shield-check"],
        title: "Self-Hosted in Your VPC",
        body: "Deploy the entire Quaeris stack — agents, semantic layer, API — in your private cloud or VPC. Quaeris connects to your warehouse from inside your network perimeter.",
        bullets: [
          "Complete infrastructure control",
          "No egress to Quaeris-managed servers",
          "Your team manages updates",
          "Single-tenant, isolated deployment",
          "Data residency: wherever you deploy",
        ],
        whoLabel: "Who it’s for",
        whoBody:
          "Highly regulated customers (financial services, healthcare, federal). You need total control and zero external dependencies.",
      },
      {
        icons: ["database"],
        badge: "Confirm availability (Open Question Q1)",
        title: "Warehouse-Native App (Snowflake)",
        body: "Quaeris runs as a Snowflake Native App inside your Snowflake account. No separate infrastructure. Agents execute directly within Snowflake’s compute environment.",
        bullets: [
          "Zero external network calls",
          "Leverages Snowflake’s RBAC and audit logs",
          "Snowflake governance handles everything",
          "Billed as Snowflake credits",
          "Ultimate data residency simplicity",
        ],
        whoLabel: "Who it’s for",
        whoBody:
          "Snowflake-first enterprises. You want the minimal-footprint deployment and native integration with Snowflake’s governance.",
      },
    ],
    note: "All three models are warehouse-native. Pick the one that matches your infrastructure posture and compliance requirements. Need help deciding?",
    noteCta: { label: "Book a security review call", href: "/contact" },
  },

  // ── Section 07 — Access control & audit ─────────────────────
  audit: {
    intro: {
      eyebrow: "Access control & audit",
      heading: "Every query is audited. Every answer is governed.",
      subcopy:
        "Access control is enforced at query execution time, not as a post-query filter. When a user asks a question, Quaeris agents apply their role’s permissions before the query runs — only rows and columns they’re allowed to see are queried from your warehouse. Results are audited: who asked, what question, which metrics were used, which rows returned. Full lineage, immutable log.",
    },
    callout: {
      icon: "shield-check",
      title: "Why query-time access control matters:",
      bullets: [
        "Faster: no post-query filtering needed",
        "Safer: permissions enforced before warehouse load",
        "Auditable: logs prove policy was applied",
        "Compliant: role-based enforcement passes SOX/HIPAA audits",
      ],
    },
    dashboardTitle: "Query audit log",
    dashboardPeriod: "Last 30 days",
    tiles: [
      {
        label: "Queries executed (audit log)",
        value: "1,247",
        delta: "↑ 18% vs. last month",
      },
      {
        label: "Access policies enforced",
        value: "8,432",
        delta: "↓ 3 access violations",
      },
      {
        label: "Queries with cited sources",
        value: "100%",
        delta: "Zero hallucinated answers",
        active: true,
      },
      {
        label: "Immutable query history",
        value: "2 years",
        delta: "SOX/HIPAA ready",
      },
    ],
    chartCaption: "Audited queries — trailing 12 weeks",
  },

  // ── Section 08 — FAQ ────────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "FAQ",
      heading: "Warehouse-Native Questions.",
      subcopy:
        "Everything you need to know about how Quaeris keeps your data in place.",
    },
    miniCard: {
      title: "Still evaluating the security model?",
      body: "Bring your security and data engineering teams — we’ll walk through the architecture together.",
      cta: { label: "Book a security review", href: "/contact" },
    },
    items: [
      {
        id: "whse-faq-1",
        question: "Does Quaeris copy my data to its infrastructure?",
        answer:
          "No. Quaeris is warehouse-native. Agents query your warehouse directly and return results. Your raw data is never copied to Quaeris infrastructure. Results are cached temporarily for performance (audit-log compatible) but never persisted without your control. Full details in our data residency whitepaper.",
        defaultOpen: true,
      },
      {
        id: "whse-faq-2",
        question: "What if I have a multi-region deployment?",
        answer:
          "Deploy Quaeris in the same region as your primary warehouse, or use private endpoints/VPN to connect from a different region. EU data stays on your EU warehouse; US data on your US instance. No data cross-border without your orchestration. See the multi-region deployment guide.",
      },
      {
        id: "whse-faq-3",
        question: "Can you query federated tables across multiple warehouses?",
        answer:
          "Yes. Quaeris can execute cross-warehouse queries if your warehouse supports federation (e.g., Snowflake’s data sharing, BigQuery federated queries). Data stays in each warehouse; queries fan out to each one and results are merged in-place. No centralized data copy.",
      },
      {
        id: "whse-faq-4",
        question: "How does row-level security work?",
        answer:
          "Quaeris agents apply row-level security (RLS) policies when they execute queries — if a user’s role forbids access to EU customers, the agent’s query filters the result set at execution time.",
      },
      {
        id: "whse-faq-5",
        question: "Is the semantic layer stored in my warehouse?",
        answer:
          "By default, yes—as a metadata store in your warehouse (or a separate database schema). For extra isolation, deploy it in your private cloud. Either way, it’s under your control and never on Quaeris infrastructure.",
      },
      {
        id: "whse-faq-6",
        question: "Can you run Quaeris in an air-gapped network?",
        answer:
          "Yes, if you choose the self-hosted deployment model. Quaeris runs entirely inside your VPC/private cloud and connects to your warehouse over a private network. Zero external network calls. See the air-gapped deployment guide.",
      },
      {
        id: "whse-faq-7",
        question: "How do you handle audit trails for compliance?",
        answer:
          "Quaeris logs all queries, agent steps, and answers at the warehouse level (immutable). Additionally, we maintain audit logs in your infrastructure (self-hosted) or in AWS/Azure (SaaS behind firewall) with SOX/HIPAA retention policies. Logs are exportable for compliance reviews. See the audit trail specification.",
      },
      {
        id: "whse-faq-8",
        question: "What if my warehouse doesn’t support the features Quaeris needs?",
        answer:
          "Quaeris supports Snowflake, BigQuery, Databricks, Redshift, and Synapse natively. If you use a different warehouse or have a custom setup, contact our sales team — we have a track record of building custom connectors for enterprise customers.",
      },
    ],
  },

  // ── Section 09 — CTA Band ───────────────────────────────────
  cta: {
    eyebrow: "Ready to deploy?",
    heading: "Data residency you can trust.",
    subcopy:
      "Talk to our security and engineering teams. We’ll walk you through the architecture, confirm it meets your compliance requirements, and show you a warehouse integration demo.",
    primary: { label: "Book a security review", href: "/contact" },
    secondary: { label: "Download the architecture guide", href: "#" },
  },

  // ── Section 10 — Newsletter ─────────────────────────────────
  newsletter: {
    eyebrow: "Governed Analytics Brief",
    heading: "Security updates and compliance tips.",
    body: "Practical insights on warehouse-native architecture, data residency, and governed AI — every Thursday, no hype.",
    placeholder: "you@company.com",
    submitLabel: "Subscribe",
    consent: "No spam. Unsubscribe any time.",
  },
} satisfies PlatformWarehousePageContent;
