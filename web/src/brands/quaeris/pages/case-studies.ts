import type { CaseStudiesPageContent } from "@/config/page-types/case-studies";

export const caseStudiesPage = {
  meta: {
    title: "Quaeris AI Case Studies | Real Outcomes, Real Data",
    description:
      "See how data leaders at financial, insurance, and healthcare companies reduced ad-hoc requests, unified metrics, and deployed governed AI in weeks.",
  },

  // ── Section 3.1 — Hero + Intro ──────────────────────────────
  hero: {
    eyebrow: "Customer proof",
    h1: "Real outcomes. Real data teams.",
    subcopy:
      "Generic claims don't move data leaders. Here is what deploying Quaeris actually looks like — outcomes from financial services, insurance, healthcare, and manufacturing teams who unified their metrics and answered questions faster.",
  },

  // ── Section 3.2 — Case Studies Grid ─────────────────────────
  grid: {
    heading: "Customer stories",
    cards: [
      {
        industry: "Financial Services",
        logo: "E4E",
        name: "E4E",
        outcome:
          "Reduced ad-hoc analytics requests by 84% in 90 days — without relaxing governance controls.",
        stats: [
          { num: "84%", label: "Fewer requests" },
          { num: "600+", label: "Self-serve users" },
          { num: "90", label: "Days to rollout" },
        ],
        cta: {
          label: "Read the story",
          href: "#e4e-metric-unification",
          ariaLabel: "Read the story for E4E",
        },
      },
      {
        industry: "Financial Services",
        name: "A leading financial institution",
        outcome:
          "Certified one set of metric definitions across six regional teams — and ended conflicting board reports.",
        stats: [
          { num: "40+", label: "Certified metrics" },
          { num: "6", label: "Teams unified" },
          { num: "3", label: "Weeks to deploy" },
        ],
        cta: {
          label: "Read the story",
          href: "#financial-institution",
          ariaLabel: "Read the story for a leading financial institution",
        },
      },
      {
        industry: "Property Management",
        name: "A property management SaaS company",
        outcome:
          "Rolled out governed self-serve answers to 600+ property managers in three weeks.",
        stats: [
          { num: "600+", label: "Self-serve users" },
          { num: "3", label: "Weeks to rollout" },
          { num: "0", label: "Data copies" },
        ],
        cta: {
          label: "Read the story",
          href: "#property-management-saas",
          ariaLabel: "Read the story for a property management SaaS company",
        },
      },
      {
        industry: "Retail Banking",
        name: "A large retail bank",
        outcome:
          "Cut time-to-insight from days to minutes while keeping role-based access intact.",
        stats: [
          { num: "85%", label: "Faster answers" },
          { num: "1,200", label: "Governed users" },
          { num: "4", label: "Weeks to deploy" },
        ],
        cta: {
          label: "Read the story",
          href: "/case-studies/retail-bank-time-to-insight",
          ariaLabel: "Read the story for a large retail bank",
        },
      },
      {
        industry: "Higher Education",
        name: "A higher education company",
        outcome:
          "Unified enrollment and finance reporting across campuses on one semantic layer.",
        stats: [
          { num: "3", label: "Campuses unified" },
          { num: "50+", label: "Certified metrics" },
          { num: "5", label: "Weeks to deploy" },
        ],
        cta: {
          label: "Read the story",
          href: "/case-studies/higher-education-reporting",
          ariaLabel: "Read the story for a higher education company",
        },
      },
      {
        industry: "Services SaaS",
        name: "A services SaaS company",
        outcome:
          "Replaced a dashboard backlog with governed natural-language answers for every team.",
        stats: [
          { num: "70%", label: "Fewer dashboard requests" },
          { num: "200+", label: "Weekly questions" },
          { num: "2", label: "Weeks to deploy" },
        ],
        cta: {
          label: "Read the story",
          href: "/case-studies/services-saas-self-serve",
          ariaLabel: "Read the story for a services SaaS company",
        },
      },
    ],
  },

  // ── Section 3.3 — Case Study Detail (×3 expanded) ───────────
  details: [
    {
      id: "e4e-metric-unification",
      headingId: "e4e-heading",
      industry: "Financial Services",
      logo: "E4E",
      name: "E4E",
      headline:
        "Reduced ad-hoc analytics requests by 84% in 90 days — without relaxing governance controls.",
      subs: [
        {
          icon: "flag",
          title: "The Challenge",
          body: "Every executive question became a ticket for the data team. The analytics backlog grew faster than the team could hire, and ad-hoc requests crowded out the roadmap.",
        },
        {
          icon: "key",
          title: "How Quaeris Helped",
          body: "Quaeris connected to E4E's Snowflake warehouse with no data movement. The team certified 120 metrics in the Smart Semantic Layer across six business teams, and Natural Language to SQL went live for 600+ users under role-based access — rolled out in 90 days.",
        },
        {
          icon: "trending-up",
          title: "The Result",
          body: "Ad-hoc requests fell 84% in 90 days. The data team kept full governance control — certified metrics, lineage, and role-based access — while business users self-served.",
        },
      ],
      statsLabel: "E4E results",
      stats: [
        { num: "84%", label: "Fewer ad-hoc requests" },
        { num: "600+", label: "Self-serve users" },
        { num: "90", label: "Days to rollout" },
      ],
      quote: {
        text: "“Our analysts were drowning in one-off requests. With Quaeris, the questions still get asked — they just get answered by the agent, against the same certified metrics we govern centrally.”",
        initials: "CR",
        name: "Courtney Ramey",
        role: "[Role], E4E",
      },
    },
    {
      id: "financial-institution",
      headingId: "fin-heading",
      industry: "Financial Services",
      name: "A leading financial institution",
      alt: true,
      headline:
        "Certified one set of metric definitions across six regional teams — and ended conflicting board reports.",
      subs: [
        {
          icon: "flag",
          title: "The Challenge",
          body: "Six regional teams using different metric definitions; board reports conflicted monthly. Each month closed with a debate about whose number was right rather than what to do about it.",
        },
        {
          icon: "key",
          title: "How Quaeris Helped",
          body: "Quaeris connected to the institution's BigQuery environment and moved metric logic into the Smart Semantic Layer — 40+ certified metrics shared across all six regional teams. Role-based access mapped to existing entitlements for 1,000+ users, and the first governed answers shipped in three weeks.",
        },
        {
          icon: "trending-up",
          title: "The Result",
          body: "Unified metric definitions eliminated conflicts. Role-based access let the ops team ask questions directly without data-team escalation.",
        },
      ],
      statsLabel: "Financial institution results",
      stats: [
        { num: "40+", label: "Certified metrics" },
        { num: "6", label: "Regional teams unified" },
        { num: "3", label: "Weeks to deploy" },
      ],
      quote: {
        text: "“We'd been fighting over metric definitions for two years. Quaeris gave us a single place to certify them — and now every agent answer uses the same number. The board debates stopped.”",
        initials: "JK",
        name: "J.K.",
        role: "Head of Data, Kova Finance",
      },
    },
    {
      id: "property-management-saas",
      headingId: "pm-heading",
      industry: "Property Management",
      name: "A property management SaaS company",
      headline:
        "Governed self-serve answers for 600+ property managers — live in three weeks.",
      subs: [
        {
          icon: "flag",
          title: "The Challenge",
          body: "Customers wanted answers about their own portfolios, but every report ran through a two-person analytics team. Dashboards multiplied; trust in the numbers didn't.",
        },
        {
          icon: "key",
          title: "How Quaeris Helped",
          body: "Quaeris connected to the company's Databricks lakehouse alongside its document stores, using Data & Document Agents to answer questions that span both. The Smart Semantic Layer certified 30+ portfolio metrics for 600+ property managers, with role-based access scoped per customer account — live in three weeks.",
        },
        {
          icon: "trending-up",
          title: "The Result",
          body: "Property managers now ask questions in plain English and get governed answers scoped to their own accounts. The analytics team ships product features instead of reports.",
        },
      ],
      statsLabel: "Property management SaaS results",
      stats: [
        { num: "600+", label: "Self-serve users" },
        { num: "3", label: "Weeks to rollout" },
        { num: "0", label: "Data copies created" },
      ],
      quote: {
        text: "“We shipped governed answers inside our product in three weeks. Our customers ask in plain English; the semantic layer makes sure the numbers are ours.”",
        initials: "MT",
        name: "M.T.",
        role: "VP of Product",
      },
    },
  ],

  // ── Section 3.4 — Stats Summary ─────────────────────────────
  stats: {
    intro: {
      eyebrow: "",
      heading: "Consistent results across industries",
      subcopy:
        "Deployed across regulated and high-growth industries, Quaeris consistently delivers governed analytics in weeks, not months — and cuts the data-team request backlog by 80+%.",
    },
    items: [
      { num: "6+", label: "Customer companies" },
      { num: "5", label: "Industries served" },
      { num: "3 wks", label: "Avg. deployment time" },
      { num: "82%", label: "Avg. reduction in ad-hoc requests" },
    ],
  },

  // ── Section 3.5 — CTA Band ──────────────────────────────────
  cta: {
    eyebrow: "Ready to deploy?",
    heading: "See how Quaeris unified metrics and cut time-to-insight.",
    subcopy:
      "Talk to a Quaeris solutions engineer. We'll walk through your warehouse setup, your governance requirements, and show you a live governed answer — against your own data schema if possible.",
    primary: { label: "Book a Demo", href: "/contact" },
    secondary: { label: "See all capabilities", href: "/platform" },
  },
} satisfies CaseStudiesPageContent;
