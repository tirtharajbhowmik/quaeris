import type {
  NavItem,
  FooterColumn,
  SocialLink,
  TrustLogo,
  MarqueeLogo,
  Pillar,
  Stat,
  IconFeature,
  ValueProp,
  MetricTile,
  CaseStudy,
  ReviewBadge,
  Testimonial,
  FaqItem,
  MegaMenuItem,
  PlainNavItem,
  TopNavItem,
  FeatureRowItem,
  BrandMeta,
  AiCapability,
} from "@/config/types";

// ── Image asset map ─────────────────────────────────────────

export const images = {
  // Pillar card image tops
  pillarPaidSearch:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  pillarPaidSocial:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  pillarAnalytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",

  // Mega-menu featured cards
  megaMenuSolutions:
    "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80",
  megaMenuServices:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  megaMenuResources:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",

  // FeatureRow visuals
  featureRowStrategy:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  featureRowData:
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
} as const;

export const brand = {
  name: "Veris",
  tagline: "Secure, Governed Analytics. Powered by Trusted Agents.",
  url: "https://placeholder.veris.ai",
  email: "hello@veris.ai",
  meta: {
    description:
      "Veris is an agentic analytics platform: ask questions in plain language and get trusted, audited answers grounded in your governed semantic layer — directly on your data warehouse.",
    ogDescription:
      "Secure, governed analytics powered by trusted AI agents. Plain-language questions, certified metrics, zero hallucinations.",
  } satisfies BrandMeta,
  logoSrc: null as string | null,

  // ── CTA labels ─────────────────────────────────────────────
  cta: {
    primary: "Book a Demo",
    hero: "Book a Demo",
    viewCaseStudies: "View case studies",
    ctaBandPrimary: "Book a Demo",
    ctaBandSecondary: "See case studies",
    viewAllStories: "View all stories",
    bookACall: "Book a Demo",
    subscribe: "Subscribe",
  },

  // ── Navigation (desktop mega-menu + plain links) ────────────
  nav: {
    // Typed top-level items: 3 mega-menu + 3 plain
    topItems: [
      {
        label: "Platform",
        href: "/platform",
        hasDropdown: true,
        groups: [
          {
            heading: "Core Capabilities",
            links: [
              {
                label: "Agentic Query Engine",
                href: "/platform/agents",
                description: "Plain-language questions, governed answers",
              },
              {
                label: "Semantic Layer",
                href: "/platform/semantic-layer",
                description: "Single source of truth for every metric",
              },
              {
                label: "Governance & Lineage",
                href: "/platform/governance",
                description: "Full trace from question to source",
              },
            ],
          },
          {
            heading: "Security & Control",
            links: [
              {
                label: "Role-Based Access",
                href: "/platform/access-control",
                description: "Metrics scoped to who needs them",
              },
              {
                label: "Warehouse-Native",
                href: "/platform/warehouse",
                description: "Your data never leaves your environment",
              },
              {
                label: "Audit Logs",
                href: "/platform/audit",
                description: "Full trail of every query and answer",
              },
            ],
          },
        ],
        featured: {
          image: images.megaMenuSolutions,
          imageAlt: "Analytics query panel showing a governed answer with cited metrics",
          title: "See how Veris agents answer complex revenue questions in seconds — with sources cited",
          href: "/platform",
        },
      } as MegaMenuItem,
      {
        label: "Solutions",
        href: "/solutions",
        hasDropdown: true,
        groups: [
          {
            heading: "By Team",
            links: [
              {
                label: "Data Teams",
                href: "/solutions/data-teams",
                description: "Reduce the request backlog, stay in control",
              },
              {
                label: "Analysts",
                href: "/solutions/analysts",
                description: "Self-serve at speed without sacrificing trust",
              },
              {
                label: "Executives",
                href: "/solutions/executives",
                description: "Reliable answers without waiting on reports",
              },
            ],
          },
          {
            heading: "By Use Case",
            links: [
              {
                label: "Revenue & Operations",
                href: "/solutions/revenue-ops",
                description: "Governed pipeline and performance metrics",
              },
              {
                label: "Product Analytics",
                href: "/solutions/product",
                description: "Trusted engagement and retention signals",
              },
              {
                label: "Finance & Planning",
                href: "/solutions/finance",
                description: "Consistent numbers across every model",
              },
            ],
          },
        ],
        featured: {
          image: images.megaMenuServices,
          imageAlt: "Team reviewing a governed analytics dashboard on a large screen",
          title: "How Veris cut time-to-insight from days to minutes for a 400-person analytics org",
          href: "/case-studies",
        },
      } as MegaMenuItem,
      {
        label: "Resources",
        href: "/resources",
        hasDropdown: true,
        groups: [
          {
            heading: "Learn",
            links: [
              {
                label: "Blog",
                href: "/blog",
                description: "Practical guides on governed analytics",
              },
              {
                label: "Documentation",
                href: "/docs",
                description: "Setup guides and API reference",
              },
              {
                label: "Webinars",
                href: "/resources/webinars",
                description: "Live sessions with the Veris team",
              },
            ],
          },
          {
            heading: "Proof",
            links: [
              {
                label: "Case Studies",
                href: "/case-studies",
                description: "Real teams, real outcomes",
              },
              {
                label: "Customer Stories",
                href: "/customers",
                description: "How data leaders use Veris",
              },
              {
                label: "About Veris",
                href: "/about",
                description: "Our mission and how we work",
              },
            ],
          },
        ],
        featured: {
          image: images.megaMenuResources,
          imageAlt: "Data leader presenting governed analytics results to a leadership team",
          title: "The Governed Analytics Playbook — a practical guide for data teams moving to agentic AI",
          href: "/blog",
        },
      } as MegaMenuItem,
      { label: "Docs", href: "/docs" } as PlainNavItem,
      { label: "Pricing", href: "/pricing" } as PlainNavItem,
      { label: "About", href: "/about" } as PlainNavItem,
    ] as TopNavItem[],

    // Legacy flat list kept for mobile overlay (accordion built from topItems now)
    items: [
      { label: "Platform", href: "#", hasDropdown: true },
      { label: "Solutions", href: "#", hasDropdown: true },
      { label: "Docs", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
      { label: "About", href: "#" },
    ] satisfies NavItem[],
    mobileItems: [
      { label: "Platform", href: "#" },
      { label: "Solutions", href: "#" },
      { label: "Docs", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Contact", href: "#" },
    ] satisfies NavItem[],
    contactHref: "/contact",
  },

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    eyebrow: "Agentic AI for enterprise analytics",
    headline: "Ask questions. Get trusted answers.",
    subcopy:
      "Veris connects your data warehouse to a governed semantic layer and lets business users ask questions in plain language — returning accurate, source-cited answers your whole organisation can rely on.",
    trustLabel: "Trusted by data teams at",
    trustLogos: [
      { label: "Warehouse-native" },
      { label: "Role-based access" },
      { label: "Semantic layer" },
    ] satisfies TrustLogo[],
    // Partner / credential badges for the trust strip
    trustBadges: [
      { label: "Warehouse-native", title: "Runs directly against your existing data warehouse" },
      { label: "Zero hallucinations", title: "Every answer grounded in certified metrics" },
      { label: "Enterprise-grade security", title: "Role-based access; data never leaves your environment" },
    ],
  },

  // ── Logo marquee ───────────────────────────────────────────
  marquee: {
    label: "Trusted by data teams at",
    logos: [
      { label: "Vertex" },
      { label: "Lumio" },
      { label: "Orbit" },
      { label: "Northwind" },
      { label: "Cedar" },
      { label: "Halo" },
      { label: "Prism" },
      { label: "Solent" },
      { label: "Kova" },
      { label: "Elara" },
    ] satisfies MarqueeLogo[],
  },

  // ── Three Pillars ──────────────────────────────────────────
  pillars: {
    eyebrow: "What Veris does",
    headline: "Three layers that make analytics trustworthy.",
    subcopy:
      "From raw warehouse data to a governed answer — Veris handles the semantic layer, the agent reasoning, and the security controls so your team gets answers they can act on.",
    items: [
      {
        title: "Governed Semantic Layer",
        body: "Define your metrics once — revenue, activation rate, churn — and every agent answer traces back to those certified definitions. No more conflicting numbers across teams.",
        cta: "Learn more",
        ctaAriaLabel: "Learn about the Governed Semantic Layer",
        imgClass: "pillar-img-1",
        iconColor: "var(--brand-accent)",
        icon: "bar-chart",
      },
      {
        title: "Trusted AI Agents",
        body: "Business users ask questions in plain language. Agents reason over your semantic layer, cite their sources, and return answers — not hallucinations. Every number is traceable.",
        cta: "Learn more",
        ctaAriaLabel: "Learn about Trusted AI Agents",
        imgClass: "pillar-img-2",
        iconColor: "var(--success)",
        icon: "target",
      },
      {
        title: "Enterprise Security",
        body: "Role-based access controls enforce who sees what. Veris runs warehouse-native — your data never leaves your environment. Access is audited end-to-end.",
        cta: "Learn more",
        ctaAriaLabel: "Learn about Enterprise Security",
        imgClass: "pillar-img-3",
        iconColor: "var(--warning)",
        icon: "analytics",
      },
    ] satisfies Pillar[],
  },

  // ── Stats ──────────────────────────────────────────────────
  stats: {
    items: [
      {
        target: 14,
        suffix: "min",
        label: "Median time to first insight",
        delta: "From question to governed answer",
        ariaLabel: "14 minutes median time to first insight",
        isDecimal: false,
      },
      {
        target: 0,
        suffix: "",
        label: "Hallucinated numbers",
        delta: "Every answer cites its source metric",
        ariaLabel: "Zero hallucinated numbers",
        isDecimal: false,
      },
      {
        target: 87,
        suffix: "%",
        label: "Reduction in data-team ad-hoc requests",
        delta: "Across deployed orgs",
        ariaLabel: "87% reduction in ad-hoc data requests",
        isDecimal: false,
      },
      {
        target: 3,
        suffix: "×",
        label: "Faster time-to-insight",
        delta: "vs. traditional BI workflow",
        ariaLabel: "3× faster time-to-insight",
        isDecimal: false,
      },
    ] satisfies Stat[],
  },

  // ── How we work ────────────────────────────────────────────
  howWeWork: {
    eyebrow: "How Veris works",
    headline: "Governed answers in four steps.",
    subcopy:
      "A transparent pipeline from question to trusted answer — no black boxes, no unexplained numbers.",
    items: [
      {
        title: "Connect your warehouse",
        body: "Veris connects to your existing data warehouse — Snowflake, BigQuery, Redshift, and more. No data copying, no pipelines to rebuild. Your data stays exactly where it is.",
        icon: "audit",
      },
      {
        title: "Define governed metrics",
        body: "Your data team defines the semantic layer: certified metric definitions, business rules, and ownership. Every agent answer is locked to these definitions — consistency guaranteed.",
        icon: "sprint",
      },
      {
        title: "Ask in plain language",
        body: "Business users type questions as they would to a colleague. Agents interpret the question, query the semantic layer, and return a precise, source-cited answer — in seconds.",
        icon: "creative",
      },
      {
        title: "Trusted, audited answers",
        body: "Every answer shows its sources and the metric definitions it used. Role-based access ensures users only see data they're permitted to see. Full audit trail, always.",
        icon: "dashboard",
      },
    ] satisfies IconFeature[],
  },

  // ── How We Work — FeatureRows (methodology section) ────────
  methodology: {
    eyebrow: "How it works",
    headline: "From warehouse to trusted answer.",
    subcopy:
      "A clear, four-step process — not a black box. Here is exactly how Veris delivers governed analytics.",
    items: [
      {
        eyebrow: "Step 01 — Connect",
        heading: "Connect your warehouse. No data ever moves.",
        body: "Veris integrates directly with your existing data warehouse — Snowflake, BigQuery, Databricks, Redshift, and more. There are no pipelines to rebuild and no data copies to maintain. Your warehouse stays the system of record. Setup takes hours, not months, and your security posture stays intact from day one.",
        cta: "See supported warehouses",
        ctaHref: "/platform/warehouse",
        image: images.featureRowStrategy,
        imageAlt: "Data engineer connecting a warehouse integration in a modern dashboard",
      },
      {
        eyebrow: "Step 02 — Define",
        heading: "Define your metrics once. Use them everywhere.",
        body: "Your data team builds the semantic layer: certified metric definitions, business logic, ownership, and lineage. Revenue means the same thing in the CEO's question as it does in the analyst's model. Definitions are versioned, audited, and owned — so when a number changes, everyone knows why.",
        cta: "Explore the semantic layer",
        ctaHref: "/platform/semantic-layer",
        image: images.featureRowData,
        imageAlt: "Data analyst reviewing a semantic layer definition in the Veris platform",
      },
      {
        eyebrow: "Step 03 — Ask & Trust",
        heading: "Ask anything. Every answer cites its source.",
        body: "Business users ask questions in plain language. Veris agents reason over the semantic layer, generate a precise answer, and surface the exact metric definitions and data lineage behind it. Role-based access controls mean users only ever see what they're permitted to see. No hallucinations — every number is traceable.",
        cta: "See a live demo",
        ctaHref: "/contact",
        image: "",
        imageAlt: "",
      },
    ] satisfies FeatureRowItem[],
  },

  // ── Dark Feature Section ───────────────────────────────────
  darkFeature: {
    eyebrow: "Governed by design",
    headline: "Every answer is a source, not a guess.",
    subcopy:
      "Veris agents don't generate numbers — they retrieve governed ones. Every answer is grounded in your certified semantic layer, with full lineage back to the source data.",
    valueProps: [
      {
        num: "01",
        title: "Certified metrics — not model outputs",
        body: "Agents query your semantic layer, not raw tables. Every answer reflects the metric definitions your data team has certified — revenue, churn, activation — consistently, every time.",
      },
      {
        num: "02",
        title: "Full lineage — question to source",
        body: "Every answer surfaces its sources: which metric definition was used, which table it queried, and which business rule applied. Your analysts can audit any answer in one click.",
      },
      {
        num: "03",
        title: "Role-based access — enforced at query time",
        body: "Access policies are applied when the agent runs — not as a dashboard filter. Users see exactly the slice of data their role permits. Nothing more, nothing less.",
      },
    ] satisfies ValueProp[],
    dashboard: {
      title: "Governed query panel",
      period: "Live session",
      caption: "Illustrative data — for demonstration only",
      tiles: [
        { label: "Question answered", value: "Revenue vs. plan", delta: "↑ Cited 3 metrics", active: true },
        { label: "Avg. answer time", value: "14s", delta: "↓ 94% vs. ticket" },
        { label: "Metrics certified", value: "142", delta: "↑ 12 this month" },
        { label: "Access violations", value: "0", delta: "Role policy enforced" },
      ] satisfies MetricTile[],
    },
  },

  // ── Case Studies ───────────────────────────────────────────
  proof: {
    eyebrow: "Customer proof",
    headline: "Real outcomes. Real data teams.",
    subcopy:
      "Generic claims don't move data leaders. Here is what deploying Veris actually looks like after 90 days.",
    items: [
      {
        industry: "Financial Services",
        client: "Kova Finance",
        outcome:
          "Reduced ad-hoc analytics requests to the data team by 84% while expanding self-serve access to 600+ business users — without relaxing governance controls.",
        stats: [
          { num: "84%", label: "Fewer ad-hoc requests" },
          { num: "600+", label: "Self-serve users" },
          { num: "90", label: "Days to full rollout" },
        ],
        how: "Connected Veris to their Snowflake warehouse, migrated 120 certified metric definitions into the semantic layer, and opened the agent interface to all business teams — with row-level security enforced automatically.",
        cta: "Read the story",
      },
      {
        industry: "B2B SaaS",
        client: "Orbit Analytics",
        outcome:
          "Cut time-to-insight from an average of 3 days to under 20 minutes — eliminating the request backlog that had blocked four product launches.",
        stats: [
          { num: "20 min", label: "Avg. time-to-insight" },
          { num: "3×", label: "Faster than tickets" },
          { num: "0", label: "Hallucinated numbers" },
        ],
        how: "Deployed the Veris semantic layer across their product, revenue, and marketing metrics. Agents now answer product-usage and pipeline questions directly — with sources cited in every response.",
        cta: "Read the story",
      },
      {
        industry: "Retail & eCommerce",
        client: "Northwind Co.",
        outcome:
          "Unified conflicting metric definitions across 6 regional teams — giving executives a single, consistent view of performance for the first time.",
        stats: [
          { num: "6", label: "Regional teams aligned" },
          { num: "1", label: "Metric definition per KPI" },
          { num: "11×", label: "ROI on analytics time" },
        ],
        how: "Audited 300+ metric variants across legacy BI tools, consolidated to 80 certified definitions in the Veris semantic layer, and retired four dashboards that had been the source of conflicting board reports.",
        cta: "Read the story",
      },
    ] satisfies CaseStudy[],
  },

  // ── Testimonials ───────────────────────────────────────────
  testimonials: {
    eyebrow: "What data leaders say",
    headline: "Trust earned one answered question at a time.",
    reviewBadges: [
      { stars: "★★★★★", score: "4.9", platform: "on G2" },
      { stars: "★★★★★", score: "4.8", platform: "on Gartner Peer Insights" },
      { stars: "★★★★★", score: "4.9", platform: "on Capterra" },
    ] satisfies ReviewBadge[],
    row1: [
      {
        quote:
          "We'd been fighting over metric definitions for two years. Veris gave us a single place to certify them — and now every agent answer uses the same number. The board debates stopped.",
        initials: "JK",
        name: "J.K.",
        role: "Head of Data · Kova Finance",
      },
      {
        quote:
          "The lineage view alone justified the deployment. My team can click any answer and trace it back to the source table in one step. That transparency is what governance actually looks like.",
        initials: "SR",
        name: "S.R.",
        role: "VP Analytics · Orbit Analytics",
      },
      {
        quote:
          "Veris didn't just speed up our analysts — it let our ops team ask questions directly, without any training. The agents are careful: they cite metrics, not hunches.",
        initials: "MC",
        name: "M.C.",
        role: "Chief Data Officer · Halo Group",
      },
      {
        quote:
          "I was nervous about giving executives direct query access. Veris's role-based controls meant I didn't have to be. They only see what they should — enforced at the agent level.",
        initials: "AT",
        name: "A.T.",
        role: "Head of Data Platform · Vertex Health",
      },
      {
        quote:
          "Our data team was drowning in ad-hoc requests. Within six weeks of deploying Veris, the queue dropped by 80%. Business users stopped waiting and started asking.",
        initials: "PL",
        name: "P.L.",
        role: "Director of Analytics · Northwind Co.",
      },
    ] satisfies Testimonial[],
    row2: [
      {
        quote:
          "Every other analytics AI we evaluated made up numbers when it didn't know the answer. Veris is architecturally different — it can't hallucinate because it queries governed metrics, not a language model's memory.",
        initials: "DW",
        name: "D.W.",
        role: "CDO · Lumio Retail",
      },
      {
        quote:
          "We have strict data residency requirements. Veris being warehouse-native was the only way we could deploy agentic AI without legal signing off a data transfer. That architecture decision matters.",
        initials: "TM",
        name: "T.M.",
        role: "Head of Data Engineering · Prism Financial",
      },
      {
        quote:
          "The time-to-value was faster than any enterprise software I've deployed. Connected to Snowflake on day one. Semantic layer migrated in a week. First governed answers in production by week two.",
        initials: "EB",
        name: "E.B.",
        role: "VP Data · Solent Insurance",
      },
      {
        quote:
          "Metric consistency across regions used to require a two-week reconciliation process before every board meeting. With Veris, everyone queries the same certified definitions — the reconciliation just doesn't happen anymore.",
        initials: "RN",
        name: "R.N.",
        role: "Global Head of Analytics · Elara Tech",
      },
      {
        quote:
          "What separates Veris is the governance-first design. It's not a chatbot bolted onto a dashboard — it's a governed data layer with an agent interface on top. That architectural difference shows in every answer.",
        initials: "CJ",
        name: "C.J.",
        role: "Chief Analytics Officer · Cedar Group",
      },
    ] satisfies Testimonial[],
  },

  // ── AI-first capability cards ──────────────────────────────
  aiCapabilities: [
    {
      title: "Natural-Language Queries",
      desc: "Ask in plain English. Agents translate your question into governed queries against the semantic layer — no SQL, no waiting on the data team.",
      icon: "message-square",
    },
    {
      title: "Governed Answers",
      desc: "Every answer maps to certified metrics and definitions, so the number you see is the number everyone else sees.",
      icon: "shield-check",
    },
    {
      title: "Source Citations & Lineage",
      desc: "Each result cites the tables, metrics, and logic behind it. Trace any number back to its source in one click.",
      icon: "git-branch",
    },
    {
      title: "Anomaly Detection",
      desc: "Agents watch your KPIs and flag unexpected shifts — churn risk, spend spikes, pipeline drops — before they surface in a report.",
      icon: "activity",
    },
    {
      title: "Proactive Insights",
      desc: "Scheduled and triggered alerts surface what changed and why, delivered to your inbox or Slack without anyone asking.",
      icon: "bell",
    },
    {
      title: "AI Co-Pilot",
      desc: "A conversational analyst that turns questions into answers, charts, and next steps across your entire warehouse.",
      icon: "sparkles",
    },
  ] satisfies AiCapability[],

  // ── FAQ ────────────────────────────────────────────────────
  faq: {
    eyebrow: "Common questions",
    headline: "Clear answers, no fluff.",
    subcopy: "If your question isn't here, there's a human on the other end.",
    miniCard: {
      title: "Still have questions?",
      body: "Book a 30-minute demo with a Veris solutions engineer. We'll walk through your warehouse setup, your governance requirements, and show you a live governed answer — no slides.",
    },
    items: [
      {
        id: "faq-1",
        question: "Does Veris hallucinate numbers?",
        answer:
          "No. Veris agents query your governed semantic layer — they don't generate numbers from a language model's training data. Every answer is grounded in certified metric definitions your data team controls. If a question can't be answered from the semantic layer, the agent says so rather than guessing.",
        defaultOpen: true,
      },
      {
        id: "faq-2",
        question: "Where does my data live?",
        answer:
          "Your data never leaves your environment. Veris is warehouse-native — it connects directly to your existing Snowflake, BigQuery, Databricks, or Redshift instance and queries it in place. We don't copy, cache, or store your data on Veris infrastructure.",
      },
      {
        id: "faq-3",
        question: "How is access controlled?",
        answer:
          "Access is enforced at query time through role-based access controls that map to your existing warehouse permissions. Users only see the slice of data their role permits — enforced by the agent, not just by dashboard filters. Every query and answer is logged for audit.",
      },
      {
        id: "faq-4",
        question: "Does Veris replace our BI tool?",
        answer:
          "No — Veris complements your BI stack. It sits above your warehouse and semantic layer, giving business users a governed natural-language interface for exploratory questions. Your existing dashboards and reporting tools continue to serve structured, scheduled reporting. Veris handles the questions that don't fit a dashboard.",
      },
      {
        id: "faq-5",
        question: "How fast is deployment?",
        answer:
          "Most teams are connected to their warehouse and serving governed answers within two weeks. Week one is warehouse integration and semantic layer setup. Week two is user onboarding and access policy configuration. There is no data migration — your existing warehouse is the deployment target.",
      },
      {
        id: "faq-6",
        question: "What data warehouses does Veris support?",
        answer:
          "Veris supports Snowflake, Google BigQuery, AWS Redshift, Databricks, and Azure Synapse. Additional connectors are on the roadmap. If your warehouse isn't listed, contact us — we prioritise integrations based on customer demand.",
      },
    ] satisfies FaqItem[],
  },

  // ── CTA Band ───────────────────────────────────────────────
  ctaBand: {
    eyebrow: "Ready to deploy?",
    headline: "Stop waiting on data tickets. Start getting governed answers.",
    subcopy:
      "Book a demo. We'll connect to your warehouse, walk through the semantic layer setup, and show you a governed answer against your own data — in 30 minutes.",
  },

  // ── Newsletter ─────────────────────────────────────────────
  newsletter: {
    eyebrow: "The Governed Analytics Brief",
    headline: "Weekly insights on trustworthy enterprise analytics.",
    body: "No generic AI hype. One practical read on governed analytics, semantic layers, and agentic AI — every Thursday.",
    consentPrefix: "No spam. Unsubscribe any time. We handle your data per our",
    privacyLabel: "Privacy Policy",
    privacyHref: "#",
  },

  // ── Footer ─────────────────────────────────────────────────
  footer: {
    thesis: "Governed analytics your enterprise can trust.",
    brandDesc:
      "Veris is agentic AI for analytics — a secure, governed platform where business users ask questions and AI agents return accurate, source-cited answers grounded in your semantic layer.",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "How it works", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Press", href: "#" },
        ],
      },
      {
        heading: "Platform",
        links: [
          { label: "Agentic Engine", href: "#" },
          { label: "Semantic Layer", href: "#" },
          { label: "Governance", href: "#" },
          { label: "Security", href: "#" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Case studies", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Documentation", href: "#" },
          { label: "Webinars", href: "#" },
        ],
      },
      {
        heading: "Contact",
        links: [
          { label: "Book a Demo", href: "#" },
          { label: "hello@veris.ai", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "Twitter/X", href: "#" },
        ],
      },
    ] satisfies FooterColumn[],
    copyright: "© 2025 Veris. Placeholder brand.",
    legalLinks: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
    socials: [
      { label: "LinkedIn", href: "#", icon: "linkedin" },
      { label: "Twitter / X", href: "#", icon: "twitter" },
      { label: "Instagram", href: "#", icon: "instagram" },
    ] satisfies SocialLink[],
  },
} as const;
