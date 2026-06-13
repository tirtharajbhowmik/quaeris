import type { PricingPageContent } from "@/config/page-types/pricing";

export const pricingPage = {
  meta: {
    title: "Quaeris Pricing — Governed Analytics, Built to Scale",
    description:
      "Quaeris pricing scales with your data team — from a governed pilot to enterprise-wide agentic analytics. Contact sales for a configuration built around your stack.",
  },

  // ── Section 01 — Page Hero ──────────────────────────────────
  hero: {
    badge: "Governed Agentic Analytics — Pricing",
    h1: "Pricing that matches how enterprise data actually works.",
    subcopy:
      "Quaeris deployments are scoped to your warehouse configuration, your governance requirements, and the number of engines you activate — not an arbitrary seat count. Every tier runs warehouse-native. Your data never leaves your environment.",
    toggle: {
      groupLabel: "Billing period",
      annual: "Annual",
      monthly: "Monthly",
    },
    trust: [
      { icon: "shield-check", text: "SOC 2 Type II" },
      { icon: "lock", text: "Warehouse-native. Data never copied." },
      { icon: "cpu", text: "BYOM — OpenAI, Anthropic, Google, Meta" },
    ],
  },

  // ── Section 02 — Tier Cards ─────────────────────────────────
  tiers: {
    tiers: [
      {
        name: "Team",
        positioning:
          "For a single data team deploying governed natural-language analytics on one warehouse.",
        price: {
          annual: {
            lead: "From",
            num: "—",
            suffix: "/ month",
            note: "· billed annually",
          },
          monthly: {
            lead: "From",
            num: "—",
            suffix: "/ month",
            note: "· billed monthly",
          },
          sublabel: "Up to — active users",
        },
        features: [
          { text: "Context Engine — Ask, Integrate, Activate" },
          {
            text: "Smart Semantic Layer (auto-learning, up to — certified metrics)",
          },
          { text: "Natural Language to SQL with governed prompt routing" },
          {
            text: "Single warehouse connection (Snowflake, BigQuery, Databricks, Redshift, or Azure Synapse)",
          },
          { text: "Role-based access controls — enforced at query time" },
          { text: "Prompt-level audit log — — days retention" },
          { text: "— AI model connection (BYOM — one provider slot)" },
          { text: "Community support + documentation" },
          { text: "Standard SLA" },
        ],
        primaryCta: { label: "Start a pilot", href: "/contact?plan=team" },
        ghostCta: { label: "See what's included", href: "#whats-included" },
      },
      {
        name: "Professional",
        positioning:
          "For cross-functional analytics teams that need multi-engine workflows, document agents, and full audit readiness.",
        badge: "Most chosen",
        featured: true,
        price: {
          annual: {
            lead: "From",
            num: "—",
            suffix: "/ month",
            note: "· billed annually",
          },
          monthly: {
            lead: "From",
            num: "—",
            suffix: "/ month",
            note: "· billed monthly",
          },
          sublabel: "Up to — active users",
        },
        features: [
          { text: "Everything in Team, plus:", lead: true },
          { text: "Answer Engine — Search, Share, Accelerate" },
          { text: "Decision Engine — Pin, Embed, Resonate" },
          { text: "Autonomous Multi-Step Agentic Workflows" },
          {
            text: "Data and Document Agents (SharePoint, Google Drive ingestion)",
          },
          {
            text: "Predictive and Proactive Analysis (forecasts, anomaly flags, root-cause)",
          },
          { text: "Up to — warehouse connections" },
          { text: "Extended prompt-level audit log — — days retention" },
          { text: "— BYOM model provider slots" },
          { text: "Embedded analytics (pinboards and embeds)" },
          { text: "Priority support + dedicated onboarding" },
          { text: "Enhanced SLA" },
        ],
        primaryCta: {
          label: "Book a Demo",
          href: "/contact?plan=professional",
        },
        ghostCta: { label: "See what's included", href: "#whats-included" },
      },
      {
        name: "Enterprise",
        positioning:
          "For regulated organizations that require multi-warehouse deployments, compliance controls, and a named success team.",
        price: {
          custom: {
            label: "Custom pricing",
            note: "— contact sales for a configuration scoped to your environment.",
          },
          sublabel: "Unlimited users · Custom SLA",
        },
        features: [
          { text: "Everything in Professional, plus:", lead: true },
          { text: "Unlimited warehouse connections" },
          {
            text: "Unlimited BYOM model provider slots — switch models without re-configuration",
          },
          { text: "Multi-tenant and embedded OEM deployment options" },
          {
            text: "HIPAA, SOC 2 Type II, GDPR, ISO 27001 compliance controls",
          },
          { text: "Custom data residency configuration" },
          { text: "Advanced role and attribute-based access controls" },
          { text: "Extended prompt-level audit log — custom retention" },
          { text: "SSO / SAML 2.0 / SCIM provisioning" },
          { text: "Named Customer Success Manager" },
          { text: "Dedicated SLA with — uptime guarantee" },
          { text: "Security review and procurement support" },
        ],
        primaryCta: { label: "Contact Sales", href: "/contact?plan=enterprise" },
        ghostCta: {
          label: "Download the Enterprise brief",
          href: "/resources/enterprise-brief",
        },
      },
    ],
  },

  // ── Section 03 — Stat Band (dark) ───────────────────────────
  stats: {
    eyebrow: "Deployment efficiency",
    items: [
      {
        num: "— weeks",
        label: "Median time to first governed answer in production",
        desc: "From warehouse connection to live queries",
      },
      {
        num: "— min",
        label: "Median time-to-insight per question",
        desc: "From plain-English question to audited answer",
      },
      {
        num: "—",
        label: "Warehouse and document sources supported",
        desc: "Snowflake, BigQuery, Databricks, Redshift, Synapse, SharePoint, Drive",
      },
      {
        num: "6",
        label: "Industries deployed",
        desc: "Finance · Insurance · Retail · Healthcare · Manufacturing · Construction",
      },
    ],
  },

  // ── Section 04 — Capability Depth by Tier (feature matrix) ──
  matrix: {
    intro: {
      eyebrow: "Feature matrix",
      heading: "Capability depth by tier.",
    },
    caption:
      "Capability comparison across the Team, Professional, and Enterprise tiers.",
    columns: ["Capability", "Team", "Professional", "Enterprise"],
    groups: [
      {
        label: "Context Engine",
        rows: [
          {
            feature:
              "Natural Language to SQL (governed, semantic-layer grounded)",
            cells: [{ kind: "check" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature:
              "Smart Semantic Layer — auto-learning metric definitions",
            link: "/platform/semantic-layer",
            linkText: "Smart Semantic Layer",
            cells: [{ kind: "check" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Warehouse-native connection (data never copied)",
            link: "/platform/warehouse",
            linkText: "Warehouse-native",
            cells: [{ kind: "check" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "BYOM model provider slots",
            placeholder: true,
            cells: [
              { kind: "text", value: "1" },
              { kind: "text", value: "—" },
              { kind: "text", value: "Unlimited" },
            ],
          },
          {
            feature: "Warehouse connections",
            cells: [
              { kind: "text", value: "1" },
              { kind: "text", value: "—" },
              { kind: "text", value: "Unlimited" },
            ],
          },
          {
            feature: "SharePoint and Google Drive document ingestion",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
        ],
      },
      {
        label: "Answer Engine",
        rows: [
          {
            feature: "Conversational search across governed metrics",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Autonomous Multi-Step Agentic Workflows",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Predictive analysis (forecasts, anomaly detection)",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Proactive alerts (surface issues before they impact)",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Root-cause diagnosis",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature:
              "Data and Document Agents (structured + unstructured unified query)",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
        ],
      },
      {
        label: "Decision Engine",
        rows: [
          {
            feature: "Pinboards (governed metric snapshots)",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Embedded analytics (iframe / SDK embed)",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Multi-tenant embedded / OEM deployment",
            cells: [{ kind: "minus" }, { kind: "minus" }, { kind: "check" }],
          },
          {
            feature: "Communities and shared insight distribution",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
        ],
      },
      {
        label: "Governance and Security",
        rows: [
          {
            feature: "Role-based access controls — enforced at query time",
            link: "/platform/access-control",
            linkText: "Role-based access controls",
            cells: [{ kind: "check" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Prompt-level audit log — retention",
            link: "/platform/audit",
            linkText: "Prompt-level audit log",
            placeholder: true,
            cells: [
              { kind: "text", value: "— days" },
              { kind: "text", value: "— days" },
              { kind: "text", value: "Custom" },
            ],
          },
          {
            feature: "Attribute-based access controls",
            cells: [{ kind: "minus" }, { kind: "minus" }, { kind: "check" }],
          },
          {
            feature: "SSO / SAML 2.0 / SCIM provisioning",
            cells: [{ kind: "minus" }, { kind: "minus" }, { kind: "check" }],
          },
          {
            feature: "HIPAA controls",
            cells: [
              { kind: "minus" },
              { kind: "minus" },
              { kind: "check" },
            ],
          },
          {
            feature: "SOC 2 Type II",
            cells: [
              { kind: "minus" },
              { kind: "minus" },
              { kind: "check" },
            ],
          },
          {
            feature: "GDPR data processing controls",
            cells: [
              { kind: "minus" },
              { kind: "minus" },
              { kind: "check" },
            ],
          },
          {
            feature: "ISO 27001",
            featurePlaceholder: true,
            cells: [
              { kind: "minus" },
              { kind: "minus" },
              { kind: "check" },
            ],
          },
          {
            feature: "Custom data residency configuration",
            cells: [{ kind: "minus" }, { kind: "minus" }, { kind: "check" }],
          },
          {
            feature: "Security review and procurement support",
            cells: [{ kind: "minus" }, { kind: "minus" }, { kind: "check" }],
          },
        ],
      },
      {
        label: "Support and Success",
        rows: [
          {
            feature: "Documentation and community support",
            cells: [{ kind: "check" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Priority support",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Dedicated onboarding",
            cells: [{ kind: "minus" }, { kind: "check" }, { kind: "check" }],
          },
          {
            feature: "Named Customer Success Manager",
            cells: [{ kind: "minus" }, { kind: "minus" }, { kind: "check" }],
          },
          {
            feature: "Custom SLA",
            cells: [{ kind: "minus" }, { kind: "minus" }, { kind: "check" }],
          },
          {
            feature: "Uptime SLA",
            cells: [
              { kind: "text", value: "Standard" },
              { kind: "text", value: "Enhanced" },
              { kind: "text", value: "—%" },
            ],
          },
        ],
      },
    ],
    cta: { label: "See platform capabilities", href: "/platform" },
  },

  // ── Section 05 — Deployment Use Cases (3-up warm) ───────────
  useCases: {
    cards: [
      {
        icon: "shield-check",
        label: "Governance-first deployments for regulated industries.",
        desc: "Finance, Insurance, Healthcare, and Manufacturing organizations use the Enterprise tier for its HIPAA controls, extended audit log, and custom data residency configuration. The platform's BYOM architecture means your compliance team — not Quaeris — selects and certifies the AI model in your environment.",
        href: "/industries",
        linkLabel: "See regulated industry deployments",
      },
      {
        icon: "layers",
        label: "A governed semantic layer your data team owns.",
        desc: "Data and analytics engineering teams deploy the Team or Professional tier to eliminate ad-hoc request backlogs. The Smart Semantic Layer auto-learns metric definitions from user interaction — no upfront LookML or MDX modeling sprint required. Your data team certifies; business users ask.",
        href: "/platform",
        linkLabel: "See platform capabilities",
      },
      {
        icon: "layout-dashboard",
        label: "Governed AI analytics embedded in your product.",
        desc: "SaaS companies and platform builders use the Enterprise tier's embedded analytics and multi-tenant deployment to ship governed natural-language analytics to their own customers — with full audit trails and role-scoped access enforced at the query layer.",
        href: "/platform/embedded-analytics",
        linkLabel: "See embedded analytics",
      },
    ],
  },

  // ── Section 06 — Trust and Compliance Strip ─────────────────
  trustStrip: {
    badges: [
      {
        icon: "shield-check",
        label: "SOC 2 Type II",
        sublabel: "Certification in progress",
        pending: true,
      },
      {
        icon: "lock",
        label: "HIPAA Controls",
        sublabel: "Available on Enterprise",
        href: "/trust",
      },
      {
        icon: "globe",
        label: "GDPR",
        sublabel: "Data processing controls",
        href: "/trust",
      },
      {
        icon: "award",
        label: "ISO 27001",
        sublabel: "Certification in progress",
        pending: true,
      },
      {
        icon: "database",
        label: "Warehouse-native",
        sublabel: "Your data never leaves your environment",
      },
      {
        icon: "cpu",
        label: "BYOM",
        sublabel: "OpenAI · Anthropic · Google · Meta",
      },
      {
        icon: "eye-off",
        label: "Zero data copying",
        sublabel: "No pipelines to rebuild",
      },
      {
        icon: "file-text",
        label: "Prompt-level audit trail",
        sublabel: "Every question, every answer, logged",
        href: "/platform/governance",
      },
    ],
  },

  // ── Section 07 — Customer Proof (abbreviated) ───────────────
  proof: {
    cards: [
      {
        industry: "Financial Services",
        client: "A leading financial institution",
        outcome:
          "A leading financial institution reduced analytics query response time and eliminated conflicting metric definitions across regional teams by deploying Quaeris on their existing Snowflake warehouse with role-scoped access enforced at the query layer.",
        stats: [
          { num: "—", label: "Reduction in ad-hoc requests" },
          { num: "—", label: "Certified metric definitions" },
          { num: "—", label: "Days to production" },
        ],
        cta: { label: "Read the case study", href: "/use-cases" },
      },
      {
        industry: "Insurance",
        client: "An insurance company",
        outcome:
          "An insurance company deployed Quaeris's Document Agents to query claims documents and warehouse fact tables in a single natural-language prompt — eliminating the manual extract-transform-load cycle between their document store and their BI layer.",
        stats: [
          { num: "—", label: "Faster claims insight" },
          { num: "—", label: "Document sources unified" },
          { num: "—", label: "Weeks to full deployment" },
        ],
        cta: { label: "Read the case study", href: "/use-cases" },
      },
    ],
  },

  // ── Section 08 — Pricing FAQ ────────────────────────────────
  faq: {
    intro: {
      eyebrow: "Common pricing questions",
      heading: "Clear answers before the sales conversation.",
      subcopy:
        "If your question isn't below, there is a solutions engineer on the other end of the contact form.",
    },
    items: [
      {
        id: "pricing-faq-a1",
        question: "How is Quaeris priced?",
        answer:
          "Quaeris pricing is based on your deployment configuration: the number of warehouse connections, the engines you activate (Context / Answer / Decision), and the governance and compliance controls your organization requires. There is no per-seat fee for business users who ask questions through the platform. Contact sales for a configuration scoped to your environment.",
        defaultOpen: true,
      },
      {
        id: "pricing-faq-a2",
        question: "Do you charge per query or per user?",
        answer:
          "No. Quaeris does not charge per query or per seat for business users who consume governed answers. Pricing is structured around your deployment scope — warehouse connections, active engines, and support tier — so the cost scales with your infrastructure, not with how many people ask questions.",
      },
      {
        id: "pricing-faq-a3",
        question: "Is there a free trial or pilot program?",
        answer:
          "Yes. Quaeris offers a structured pilot program for qualified enterprise teams. A pilot connects to your existing warehouse, activates the Context Engine, and delivers governed answers against your real data within — weeks. Contact sales to scope a pilot for your organization.",
      },
      {
        id: "pricing-faq-a4",
        question: "Can we start with one warehouse and expand later?",
        answer:
          "Yes. The Team tier starts with a single warehouse connection. Professional and Enterprise tiers support multiple connections. You can upgrade tiers at any time — your semantic layer definitions, audit logs, and access policies migrate without reconfiguration.",
      },
      {
        id: "pricing-faq-a5",
        question: "Which AI models does Quaeris support?",
        answer:
          "Quaeris is built on a Bring Your Own Model (BYOM) architecture. You can connect OpenAI, Anthropic, Google, or Meta models and switch providers without re-configuring your deployment. Your compliance team selects and certifies the model — Quaeris is not the model gatekeeper. The Team tier includes — provider slot; Professional and Enterprise tiers include — slots and unlimited respectively.",
      },
      {
        id: "pricing-faq-a6",
        question: "Does Quaeris comply with HIPAA, SOC 2, and GDPR?",
        answer:
          "Enterprise tier deployments include controls for HIPAA, GDPR, and SOC 2 Type II [update as certifications are obtained]. All tiers run warehouse-native — your data is never copied to Quaeris infrastructure, which simplifies your data processing agreements. For a detailed compliance brief, contact sales.",
      },
      {
        id: "pricing-faq-a7",
        question: "How long does deployment take?",
        answer:
          "Most teams connect their warehouse and serve governed answers in production within — weeks. Week one covers warehouse integration and Smart Semantic Layer setup. Week two covers user onboarding and access policy configuration. There is no data migration — your existing warehouse is the deployment target.",
      },
    ],
  },

  // ── Section 09 — CTA Band ───────────────────────────────────
  cta: {
    eyebrow: "Ready to scope a deployment?",
    heading: "Talk to a solutions engineer. Not a form processor.",
    subcopy:
      "Book a 30-minute call. We will connect to your warehouse, show you a governed answer against your actual data, and scope a configuration that matches your governance requirements — before you commit to anything.",
    primary: { label: "Book a Demo", href: "/contact?plan=enterprise" },
    secondary: {
      label: "Download the Enterprise Brief",
      href: "/resources/enterprise-brief",
    },
  },
} satisfies PricingPageContent;
