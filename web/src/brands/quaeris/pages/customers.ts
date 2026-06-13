import type { CustomersPageContent } from "@/config/page-types/customers";

export const customersPage = {
  meta: {
    title: "Trusted by data leaders | Quaeris AI Analytics Platform",
    description:
      "See how enterprises reduced analytics requests by 80%, unified metrics across teams, and deployed governed AI in weeks. Real outcomes, real companies.",
  },

  // ── Section 01 — Hero ───────────────────────────────────────
  hero: {
    eyebrow: "Real proof",
    h1: "Trusted by enterprise data leaders.",
    subcopy:
      "See how companies in finance, insurance, healthcare, and retail deployed governed AI analytics — and got results in weeks, not months.",
    primaryCta: {
      label: "Book a Demo",
      href: "/contact",
      ariaLabel: "Book a demo — opens contact form",
    },
  },

  // ── Section 02 — Customer Logo Marquee ──────────────────────
  marquee: {
    labelLead: "How data leaders at ",
    labelIndustry: "[industry]",
    labelTail: " companies use Quaeris to answer faster.",
    logos: [
      { label: "E4E" },
      { label: "[Financial institution]", placeholder: true },
      { label: "[Property management SaaS]", placeholder: true },
      { label: "[Large retail bank]", placeholder: true },
      { label: "[Higher education institution]", placeholder: true },
      { label: "[Insurance company]", placeholder: true },
      { label: "[Services SaaS]", placeholder: true },
      { label: "[Manufacturing enterprise]", placeholder: true },
      { label: "[Healthcare system]", placeholder: true },
      { label: "[Construction group]", placeholder: true },
    ],
  },

  // ── Section 03 — How They Won ───────────────────────────────
  wins: {
    intro: {
      eyebrow: "How they won",
      heading: "Three wins every data leader is after.",
      subcopy:
        "Metric conflicts, slow answers, access bottlenecks — here is how Quaeris customers solved all three.",
    },
    rows: [
      {
        eyebrow: "Step 01 — Align teams",
        heading: "Unified metric definitions across 6+ regions.",
        body: "Before: conflicting revenue definitions in Tableau, Excel, and dbt. After: one Quaeris semantic layer, one number everywhere. Board no longer debates reconciliation.",
        stats: [
          { num: "1", label: "source of truth" },
          { num: "—", label: "certified metrics", placeholder: true },
          { num: "—", label: "ROI multiple", placeholder: true },
        ],
        cta: { label: "See the case study", href: "#case-studies" },
      },
      {
        eyebrow: "Step 02 — Answer faster",
        heading: "Cut data-request backlog by 87% in [timeframe].",
        body: "Before: analysts drowning in ad-hoc requests, 3-day turnaround on simple questions. After: business users ask directly via Quaeris agents. Data team freed to focus on strategy.",
        stats: [
          { num: "20 min", label: "avg time-to-insight" },
          { num: "3×", label: "faster than tickets" },
          { num: "0%", label: "hallucinations" },
        ],
        cta: { label: "See the case study", href: "#case-studies" },
        flip: true,
      },
      {
        eyebrow: "Step 03 — Trust direct access",
        heading:
          "[user count] business users with self-serve, zero governance violations.",
        body: "Before: only analysts could query; executives waited on reports. After: Quaeris role-based access enforced at query time, not dashboard filters. Every user sees exactly the slice of data they should.",
        stats: [
          { num: "—", label: "self-serve users", placeholder: true },
          { num: "0", label: "access violations" },
          { num: "—", label: "rollout duration", placeholder: true },
        ],
        cta: { label: "See the case study", href: "#case-studies" },
      },
    ],
  },

  // ── Section 04 — Case Study Grid ────────────────────────────
  caseStudies: {
    intro: {
      eyebrow: "Case studies",
      heading: "Six stories from six industries.",
    },
    cards: [
      {
        logoAbbr: "FS",
        company: "[Company name to confirm]",
        industry: "Financial Services",
        headline:
          "Reduced ad-hoc requests by [80–87%] while scaling self-serve access",
        stats: [
          { num: "—", label: "↓ requests", placeholder: true },
          { num: "—", label: "certified metrics", placeholder: true },
          { num: "—", label: "rollout time", placeholder: true },
        ],
        cta: { label: "Read the story", href: "#" },
      },
      {
        logoAbbr: "RS",
        company: "[Company name to confirm]",
        industry: "B2B SaaS / RevOps",
        headline:
          "Cut time-to-insight from [baseline duration] to under 20 minutes",
        stats: [
          { num: "14 min", label: "avg time-to-first-answer" },
          { num: "—", label: "↓ backlog", placeholder: true },
        ],
        cta: { label: "Read the story", href: "#" },
      },
      {
        logoAbbr: "RE",
        company: "[Company name to confirm]",
        industry: "Retail & eCommerce",
        headline: "Unified [number] regional teams on one metric definition",
        stats: [
          { num: "1", label: "source of truth" },
          { num: "—", label: "regional teams", placeholder: true },
        ],
        cta: { label: "Read the story", href: "#" },
      },
      {
        logoAbbr: "IN",
        company: "[Company name to confirm]",
        industry: "Insurance",
        headline:
          "Built governed AI agent for compliance-sensitive claims analytics",
        stats: [
          { num: "0%", label: "hallucinations" },
          { num: "—", label: "audited queries", placeholder: true },
        ],
        cta: { label: "Read the story", href: "#" },
      },
      {
        logoAbbr: "MF",
        company: "[Company name to confirm]",
        industry: "Manufacturing",
        headline:
          "Connected Snowflake to Document Agents for quality rootcause + warehouse data",
        stats: [
          { num: "1", label: "governed query layer" },
          { num: "—", label: "doc sources joined", placeholder: true },
        ],
        cta: { label: "Read the story", href: "#" },
      },
      {
        logoAbbr: "HC",
        company: "[Company name to confirm]",
        industry: "Healthcare / Higher Ed",
        headline:
          "Deployed HIPAA-compliant, warehouse-native analytics in [timeframe]",
        stats: [
          { num: "2–4", label: "weeks to deploy" },
          { num: "—", label: "self-serve users", placeholder: true },
        ],
        cta: { label: "Read the story", href: "#" },
      },
    ],
    footnote:
      "Each story shows how governed agentic analytics solved a real pain point — metric conflicts, slow answers, access bottlenecks — and freed data teams to focus on strategy, not tickets.",
  },

  // ── Section 05 — Stat / Proof Band ──────────────────────────
  proofBand: {
    intro: {
      eyebrow: "",
      heading: "Governed agentic analytics by the numbers.",
    },
    items: [
      {
        num: "87%",
        label:
          "reduction in ad-hoc data requests — median across 4+ customers",
      },
      {
        num: "2–4",
        label: "weeks to governance-ready deployment",
      },
      {
        num: "0%",
        label:
          "hallucinated numbers — 100% of answers grounded in the governed semantic layer",
      },
      {
        num: "5–6",
        label:
          "industries actively deploying — finance, insurance, retail, healthcare, manufacturing, construction",
      },
    ],
  },

  // ── Section 06 — What Customers Say ─────────────────────────
  testimonials: {
    intro: {
      eyebrow: "",
      heading: "What Customers Say",
    },
    rowOne: [
      {
        quote:
          "“We’d been fighting over metric definitions for two years. Quaeris gave us a single place to certify them — and now every agent answer uses the same number. The board debates stopped.”",
        avatar: "JK",
        name: "J.K.",
        role: "Head of Data · [Company name to confirm]",
      },
      {
        quote:
          "“Everyone queries the same definition now. The ‘which number is right?’ meetings simply stopped happening.”",
        avatar: "A",
        name: "[Name]",
        role: "[Role] · [Company]",
        placeholder: true,
      },
      {
        quote:
          "“The lineage view alone justified deployment. Our governance team can trace every answer back to the source table.”",
        avatar: "B",
        name: "[Name]",
        role: "[Role] · [Company]",
        placeholder: true,
      },
      {
        quote:
          "“From 3-day turnaround to 14 minutes. Business users ask directly, and my analysts finally do analysis.”",
        avatar: "C",
        name: "[Name]",
        role: "[Role] · [Company]",
        placeholder: true,
      },
      {
        quote:
          "“My team can see exactly what they should, nothing more — enforced at query time, not in a dashboard filter.”",
        avatar: "D",
        name: "[Name]",
        role: "[Role] · [Company]",
        placeholder: true,
      },
    ],
    rowTwo: [
      {
        quote:
          "“No data moved, no pipeline redesign. Quaeris queries the warehouse we already trust, in place.”",
        avatar: "E",
        name: "[Name]",
        role: "[Role] · [Company]",
        placeholder: true,
      },
      {
        quote:
          "“Connected on day one, answers in week two. I have never seen an enterprise analytics rollout move that fast.”",
        avatar: "F",
        name: "[Name]",
        role: "[Role] · [Company]",
        placeholder: true,
      },
      {
        quote:
          "“We evaluated ThoughtSpot, Databricks Genie, and Snowflake Cortex. Quaeris was the only one that grounded every answer in our certified metrics.”",
        avatar: "G",
        name: "[Name]",
        role: "[Role] · [Company]",
        placeholder: true,
      },
      {
        quote:
          "“Zero hallucinated numbers in production. Every answer cites the certified metric it came from.”",
        avatar: "H",
        name: "[Name]",
        role: "[Role] · [Company]",
        placeholder: true,
      },
      {
        quote:
          "“Self-serve finally works here because governance is built in, not bolted on after the fact.”",
        avatar: "I",
        name: "[Name]",
        role: "[Role] · [Company]",
        placeholder: true,
      },
    ],
  },

  // ── Section 07 — The Deployment Path ────────────────────────
  deployment: {
    intro: {
      eyebrow: "How customers deploy",
      heading: "From warehouse to governed answers in 4 steps.",
      subcopy:
        "Every customer follows the same proven path. Here’s what the first 30 days looks like.",
    },
    steps: [
      {
        icon: "plug-2",
        eyebrow: "Week 1 — Connect",
        heading: "Connect your warehouse",
        body: "Quaeris integrates directly with Snowflake, BigQuery, Databricks, Redshift, or Azure. No data moves. Setup takes hours.",
        note: "Typical connection time: 4–8 hours",
      },
      {
        icon: "layers",
        eyebrow: "Week 1–2 — Define",
        heading: "Build the semantic layer",
        body: "Your data team migrates certified metric definitions into Quaeris. Typical engagement: 120–300 metrics across revenue, product, finance, ops.",
        note: "Median semantic-layer migration: 3–5 days",
      },
      {
        icon: "message-square-text",
        eyebrow: "Week 2–3 — Launch",
        heading: "Activate agent interfaces",
        body: "Roll out to business users and analysts. Access policies enforced automatically. First governed answers in production by day 14.",
        note: "Median first-user cohort: 50–100 users",
      },
      {
        icon: "trending-up",
        eyebrow: "Weeks 3–4 — Expand",
        heading: "Scale across teams",
        body: "Iterative expansion to finance, product, operations, marketing. Feedback loop accelerates metric refinement. Typical run-rate: [user count] by month 3.",
        note: "Median user growth: 20%/month",
      },
    ],
  },

  // ── Section 08 — Industry-Specific Outcomes ─────────────────
  industries: {
    intro: {
      eyebrow: "By industry",
      heading: "Industry-specific outcomes.",
    },
    cards: [
      {
        icon: "briefcase",
        eyebrow: "For CFOs & Controllers",
        label: "Unified numbers across regional teams & business units.",
        desc: "Single source of truth for revenue, bookings, margin. Every forecast uses certified metrics. Board reports reconcile in minutes, not weeks.",
        cta: {
          label: "See finance use cases",
          href: "/industries/finance-governed-analytics",
        },
      },
      {
        icon: "shield-alert",
        eyebrow: "For Actuaries & Claims Teams",
        label: "Governed agent for compliance-first analytics.",
        desc: "Document + warehouse unified query. Claims data, policy terms, regulatory changes — all in one natural-language question. Full audit trail for SOX/Gramm-Leach-Bliley.",
        cta: {
          label: "See insurance use cases",
          href: "/industries/insurance-governed-analytics",
        },
      },
      {
        icon: "shopping-cart",
        eyebrow: "For Merchandisers & Finance",
        label: "Real-time margin & inventory signals across regions.",
        desc: "Merchandisers ask questions directly — no analyst middleman. Agents surface anomalies before promotions go live. Inventory aligned with demand.",
        cta: {
          label: "See retail use cases",
          href: "/industries/retail-cpg-governed-analytics",
        },
      },
      {
        icon: "activity",
        eyebrow: "For Chief Medical Officers & CFOs",
        label: "HIPAA-compliant, warehouse-native analytics.",
        desc: "Readmission rates, care quality, revenue cycle — governed agents answer at scale. Warehouse-native means data never leaves your environment.",
        cta: {
          label: "See healthcare use cases",
          href: "/industries/healthcare-governed-analytics",
        },
      },
      {
        icon: "hammer",
        eyebrow: "For Plant Managers & Quality Teams",
        label: "Root-cause detection across machines, materials, methods.",
        desc: "Connect warehouse data (production logs) with supplier documents and quality reports. Agents flag anomalies autonomously. Margins protected.",
        cta: {
          label: "See manufacturing use cases",
          href: "/industries/manufacturing-governed-analytics",
        },
      },
      {
        icon: "hard-hat",
        eyebrow: "For Project Managers & Finance",
        label: "Margin & schedule insights per project, per subcontractor.",
        desc: "Connect project financials, budget variance, and procurement docs. Agents surface margin erosion before it impacts bottom line. Field teams stay in sync.",
        cta: {
          label: "See construction use cases",
          href: "/industries/construction-governed-analytics",
        },
      },
    ],
  },

  // ── Section 09 — Social Proof Band ──────────────────────────
  reviews: {
    heading: "Trusted by thousands of data professionals.",
    badges: [
      {
        stars: "★★★★★",
        text: "4.9 / 5 on G2",
        platform: "100+ verified reviews",
      },
      {
        stars: "★★★★★",
        text: "4.8 / 5 on Gartner Peer Insights",
        platform: "30+ verified reviews",
      },
      {
        stars: "★★★★★",
        text: "4.9 / 5 on Capterra",
        platform: "50+ verified reviews",
      },
    ],
  },

  // ── Section 10 — FAQ ────────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "Customer questions",
      heading: "Questions our customers ask.",
    },
    miniCard: {
      title: "Still have questions?",
      body: "Book a 30-minute demo with a solutions engineer — see governed answers against your own data.",
      cta: {
        label: "Book a Demo",
        href: "/contact",
        ariaLabel: "Book a demo — opens contact form",
      },
    },
    items: [
      {
        id: "faq-a1",
        question: "How long does deployment take?",
        answer:
          "Most customers are live with governed answers in 2–4 weeks. Week 1 is warehouse integration and semantic-layer setup. Week 2–3 is user onboarding and access policy configuration. There is no data migration — your warehouse is the target.",
        defaultOpen: true,
      },
      {
        id: "faq-a2",
        question: "Do you work with our specific warehouse?",
        answer:
          "Quaeris supports Snowflake, Google BigQuery, AWS Redshift, Databricks, and Azure Synapse natively. [Additional connectors in roadmap.] If your warehouse isn’t listed, contact us — we prioritize integrations based on customer demand.",
      },
      {
        id: "faq-a3",
        question: "What’s involved in setting up the semantic layer?",
        answer:
          "Your data team works with our team to migrate certified metric definitions from your existing BI tool, dbt, or Looker. Typical scope: 120–300 metrics. The semantic layer auto-learns from prompts over time — you don’t have to write every definition upfront. Typical effort: 3–5 days.",
      },
      {
        id: "faq-a4",
        question: "How is access controlled?",
        answer:
          "Quaeris enforces role-based access at query time (not just dashboard filters). Access policies map to your warehouse roles or user directories. Every query and answer is logged for audit. Users see exactly the slice of data their role permits — nothing more.",
      },
      {
        id: "faq-a5",
        question: "What if we already have ThoughtSpot / Power BI / Looker?",
        answer:
          "Quaeris complements your BI stack. It’s a natural-language agent layer on top of your warehouse and semantic layer. Your existing dashboards and reports continue to serve structured, scheduled reporting. Quaeris handles exploratory questions and ad-hoc analysis that doesn’t fit a dashboard. Many customers run both in parallel during a transition.",
      },
    ],
  },

  // ── Section 11 — CTA Band ───────────────────────────────────
  cta: {
    eyebrow: "Ready to deploy?",
    heading: "Join the data leaders deploying governed AI.",
    subcopy:
      "See your team’s time-to-insight drop by 80%. In weeks, not months. Book a 30-minute demo with a solutions engineer.",
    primary: {
      label: "Book a Demo",
      href: "/contact",
      ariaLabel: "Book a demo — opens contact form",
    },
    secondary: { label: "Download our customer playbook", href: "#" },
  },
} satisfies CustomersPageContent;
