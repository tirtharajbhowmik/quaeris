import type { SolutionsAnalystsPageContent } from "@/config/page-types/solutions-analysts";

export const solutionsAnalystsPage = {
  meta: {
    title: "AI Analytics for Analysts | Quaeris",
    description:
      "Ask complex questions, get trusted answers instantly. Quaeris agents serve governed analytics directly to analysts without bottlenecks or hallucinations.",
  },

  // ── Section 01 — Hero ───────────────────────────────────────
  hero: {
    eyebrow: "Built for analysts",
    h1Lead: "Ask questions. ",
    h1Accent: "Get governed answers.",
    h1Tail: " In seconds.",
    subcopy:
      "Forget SQL queues and dashboard wait-lists. Quaeris agents answer your questions in natural language—with full lineage, certified metrics, and role-based access built in. Self-serve analytics your data team can trust.",
    primaryCta: { label: "Book a Demo", href: "/contact" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    panelLabel: "Quaeris · Query console",
    panelBadge: "Governed",
    question: "What drove Q2 revenue growth vs. plan?",
    answerLead: "Q2 revenue closed above plan",
    answerTail:
      ", driven by Enterprise expansion and improved win rates in the West region.",
    metaRows: [
      {
        icon: "check-circle",
        text: "Metrics used: Revenue (certified), Plan vs. Actuals — owned by Finance",
      },
      {
        icon: "git-branch",
        text: "Lineage traced: dwh.prod.revenue → segment → month",
      },
      {
        icon: "lock",
        text: "Access control applied: your role permits Enterprise & Mid-market",
        accent: true,
      },
    ],
    answerBadges: [
      { label: "Cited", accent: true },
      { label: "Audit logged" },
    ],
  },

  // ── Section 02 — Quick Win Stats ────────────────────────────
  stats: {
    eyebrow: "Why analysts choose Quaeris",
    items: [
      {
        num: "14 seconds",
        title: "Time to first answer",
        subtext: "From question to verified result",
      },
      {
        num: "89%",
        title: "Self-serve adoption",
        subtext: "Of analysts answer own questions",
      },
      {
        num: "0",
        title: "False answers prevented",
        subtext: "Every answer cited to metrics",
      },
      {
        num: "76%",
        title: "Backlog reduction",
        subtext: "Hours freed up for data teams",
      },
    ],
  },

  // ── Section 03 — The Analyst's Workflow ─────────────────────
  workflow: {
    intro: {
      eyebrow: "Three steps to self-serve analytics",
      heading: "The Analyst’s Workflow",
    },
    steps: [
      {
        eyebrow: "Step 1: Ask in Plain Language",
        heading: "Write your question as you would ask a colleague.",
        body: "No SQL syntax. No dashboard hunting. Type a natural-language question: “What’s the MRR trend for Enterprise customers in the West region this quarter?” Quaeris agents parse your question and reason over your semantic layer to find the answer.",
        cta: { label: "See examples", href: "#faq" },
        tone: "accent",
        shotLabel: "Query console",
        shotInput: {
          icon: "message-square",
          text: "What’s the MRR trend for Enterprise customers in the West region this quarter?",
        },
        shotRows: [
          {
            icon: "check",
            text: "Mapped to certified metric: MRR — owned by Finance",
          },
          {
            icon: "target",
            text: "Scope resolved: Enterprise · West region · this quarter",
            accent: true,
          },
        ],
      },
      {
        eyebrow: "Step 2: Get Verified Answers",
        heading: "Every answer cites its metric source.",
        body: "Quaeris agents retrieve answers from your governed semantic layer — not from model hallucinations. You see exactly which metrics were queried, which business rules applied, and which data lineage was traced. No mystery numbers. No guessing. Answers your analysts can trust and defend to leadership.",
        cta: { label: "How governance works", href: "/platform/governance" },
        tone: "success",
        shotLabel: "Answer · cited",
        shotInput: {
          icon: "trending-up",
          text: "Enterprise MRR grew quarter-over-quarter, led by the West region.",
        },
        shotRows: [
          {
            icon: "check",
            text: "Source: MRR (certified) — business rule: FX-normalized",
          },
          {
            icon: "git-branch",
            text: "Lineage: dwh.prod.subscriptions → mrr_monthly → segment",
            accent: true,
          },
        ],
      },
      {
        eyebrow: "Step 3: Stay Compliant",
        heading: "Role-based access enforced at query time.",
        body: "Your data permissions don’t live in a dashboard filter — they live in the query engine. Every analyst sees exactly the data their role permits. Full audit trail: who asked what, when, and which metrics they accessed. [Compliance certifications — confirm SOC 2 / GDPR / HIPAA with product/legal before asserting specific frameworks.] Data teams sleep better.",
        cta: { label: "Explore security & audit", href: "/platform/audit" },
        tone: "accent",
        shotLabel: "Audit log",
        shotRows: [
          {
            icon: "lock",
            text: "09:14 UTC — jane.doe asked “churn by segment” — role filter applied",
            accent: true,
          },
          {
            icon: "check",
            text: "09:14 UTC — metrics accessed: Churn Rate (Enterprise, Mid-market)",
          },
          {
            icon: "check",
            text: "09:15 UTC — response cited & logged — provenance available",
          },
        ],
      },
    ],
  },

  // ── Section 04 — The Problem ────────────────────────────────
  problem: {
    intro: {
      eyebrow: "Analysts are stuck in the middle",
      heading: "The Problem: Why BI Isn’t Enough",
    },
    cards: [
      {
        icon: "clock",
        problemHeading: "SQL queues are a bottleneck",
        problemBody:
          "Your data team is buried in ad-hoc requests. A simple revenue question means a Slack message, a Jira ticket, waiting two days. For an analyst, that’s lost productivity and missed insights.",
        fixIcon: "zap",
        fixTone: "warning",
        fixHeading: "Get answers in 14 seconds",
        fixBody:
          "Ask Quaeris agents directly. No queue. No Jira tickets. Your question is answered and cited in seconds. Data teams go from firefighting to strategy.",
        cta: { label: "See the workflow", href: "#how-it-works" },
      },
      {
        icon: "grid-3x3",
        problemHeading: "BI tools are rigid",
        problemBody:
          "Dashboards are pre-built and static. Want to pivot the analysis? Explore a new dimension? You’re stuck asking data engineers. Self-serve in theory, locked in practice.",
        fixIcon: "sparkles",
        fixTone: "warning",
        fixHeading: "Ask any question, any angle",
        fixBody:
          "Agents reason over your semantic layer on the fly. Pivot, slice, dice, forecast — all without rebuilding dashboards. True exploratory analytics at the speed of thought.",
        cta: { label: "See what’s possible", href: "#capabilities" },
      },
      {
        icon: "alert-triangle",
        problemHeading: "Conflicting answers across tools",
        problemBody:
          "Revenue in the CRM is $50M. Revenue in the data warehouse is $48M. Analysts spend hours debugging definitions. Which number do you present to the board?",
        fixIcon: "target",
        fixTone: "success",
        fixHeading: "One certified metric, every answer",
        fixBody:
          "Your data team defines revenue once in the semantic layer. Every agent answer — across every analyst’s query — uses that same certified definition. Consistency guaranteed.",
        cta: {
          label: "Learn about semantic governance",
          href: "/platform/semantic-layer",
        },
      },
      {
        icon: "file-question",
        problemHeading: "Compliance audits are painful",
        problemBody:
          "Regulators ask: “Who accessed that customer cohort?” “Why was this metric different in Q2?” Your BI tool has no answers. You dig through logs for days.",
        fixIcon: "file-check",
        fixTone: "success",
        fixHeading: "Full audit trail, always",
        fixBody:
          "Every question, every answer, every metric access is logged with timestamps and ownership. Regulators ask, you answer in minutes. No dig, no doubt.",
        cta: { label: "See audit in action", href: "/platform/audit" },
      },
    ],
  },

  // ── Section 05 — Real Analyst Workflow Example ──────────────
  walkthrough: {
    intro: {
      eyebrow: "What a real question looks like",
      heading: "Real Analyst Workflow Example",
      subcopy:
        "An analyst at a B2B SaaS company wants to understand churn drivers. Here’s how Quaeris answers it.",
    },
    panels: [
      {
        num: "01",
        title: "The Question",
        code: `"Which customer segments had the highest churn rate in Q2?
Show me monthly trend and tell me if it's statistically significant vs. Q1."`,
        subtext: "Natural language. No SQL. No data dictionary lookup needed.",
      },
      {
        num: "02",
        title: "The Answer",
        tone: "canvas",
        code: `Quaeris Response:

ANSWER: Enterprise segments had 8.2% churn in Q2, up from 5.1% in Q1.
This is a 61% month-over-month increase and is statistically significant (p < 0.05).

Mid-market churn was flat at 3.1%.

METRICS USED:
• Churn Rate (Enterprise) — definition: (customers_churned / customers_start_of_period)
  Owned by: analytics-eng@company.com | Last updated: 2026-06-10

• Churn Rate (Mid-market) — definition: (customers_churned / customers_start_of_period)
  Owned by: analytics-eng@company.com | Last updated: 2026-06-10

DATA LINEAGE:
Churn Rate queries: dwh.prod.customers (churn_date field)
  → filtered by segment (churn_segment column)
  → aggregated by month_date
  → statistical significance test via scipy.stats.chi2_contingency

ACCESS CONTROL APPLIED: Your role permits viewing Enterprise and Mid-market segments.
[View full lineage]`,
        subtext:
          "Every number is sourced. Every metric is certified. Every access is logged.",
      },
      {
        num: "03",
        title: "What the Data Team Sees",
        tone: "warm",
        code: `Data Team Audit Log:

Analyst: jane.doe@company.com
Time: 2026-06-12 09:14:23 UTC
Query: "Which customer segments had the highest churn rate in Q2..."
Metrics accessed: Churn Rate (Enterprise), Churn Rate (Mid-market)
Row-level filter applied: Your role permits segments [Enterprise, Mid-market]
Response status: ✓ Cited (all metrics verified)
Audit trail: [View query provenance]`,
        subtext: "Data teams stay in control. Every analyst action is visible.",
      },
    ],
  },

  // ── Section 06 — Capabilities Snapshot ──────────────────────
  capabilities: {
    intro: {
      eyebrow: "Capabilities snapshot",
      heading: "What analysts can do",
    },
    items: [
      {
        icon: "git-branch",
        title: "Multi-step analysis",
        body: "Ask follow-up questions and chain analyses without re-querying. Agents remember context.",
        cta: { label: "Learn more", href: "/learn/multi-step" },
      },
      {
        icon: "trending-up",
        title: "Forecasting",
        body: "“How will churn trend if we don’t intervene?” Agents forecast using historical patterns.",
        cta: { label: "Learn more", href: "/learn/forecasting" },
      },
      {
        icon: "microscope",
        title: "Root-cause diagnosis",
        body: "“Why did conversion drop last week?” Agents trace anomalies to their source.",
        cta: { label: "Learn more", href: "/learn/root-cause" },
      },
      {
        icon: "alert-circle",
        title: "Anomaly detection",
        body: "Agents flag suspicious metrics proactively. “Revenue is 12% above forecast. Here’s why.”",
        cta: { label: "Learn more", href: "/platform/agents" },
      },
      {
        icon: "users",
        title: "Ad-hoc cohorts",
        body: "“Show me customers who signed up in Q1 and churned by Q2.” Agents build cohorts on the fly from the semantic layer.",
        cta: { label: "Learn more", href: "/platform/semantic-layer" },
      },
      {
        icon: "share-2",
        title: "Export to anywhere",
        body: "Results to Slack, email, dashboards, or notebooks. Every answer is reproducible.",
        cta: { label: "Learn more", href: "/platform/integrations" },
      },
    ],
  },

  // ── Section 07 — Case Study ─────────────────────────────────
  caseStudy: {
    intro: {
      eyebrow: "From backlog to autonomy",
      heading:
        "Analytics team cut request wait time from 3 days to 90 seconds — and data team loved it",
    },
    tags: ["[Customer name — permission-gated]", "[Industry]"],
    challengeLabel: "Challenge",
    challengeBody:
      "[Analyst description]. The team had a 40-ticket backlog. Simple questions about campaign performance took 3+ days. Complex revenue analyses took a week. Analysts spent 40% of their time waiting, 60% analyzing.",
    outcomeLabel: "Outcome",
    outcomeBody:
      "After deploying Quaeris, the same team answered questions in 90 seconds. Backlog dropped to near-zero. Data team went from firefighting to building new semantic models. Within 60 days, the backlog was solved and the team had capacity for strategic analysis.",
    metrics: [
      { num: "40 → 2", label: "Average days to answer" },
      { num: "87%", label: "Data team time freed up" },
      { num: "300+", label: "Questions analysts answered independently" },
    ],
    story:
      "[Detailed narrative: How deployment happened, what changed, specific quotes from analysts and data lead. Must be attributed with name/title.]",
    cta: { label: "Read full story", href: "/case-studies/analyst-team" },
  },

  // ── Section 08 — Testimonials ───────────────────────────────
  testimonials: {
    intro: {
      eyebrow: "Analysts trust Quaeris",
      heading: "What Analysts Say",
    },
    items: [
      {
        avatar: "A",
        quote:
          "“I used to spend half my week in Slack explaining why numbers didn’t match. Now every agent answer cites its metric, so the conversation shifts from ‘Which number is right?’ to ‘What does this mean for our strategy?’”",
        name: "[Name]",
        role: "Senior Analyst · [Company]",
      },
      {
        avatar: "B",
        quote: "[Testimonial pending — analyst quote on time-to-answer]",
        name: "[Name]",
        role: "[Role] · [Company]",
      },
      {
        avatar: "C",
        quote:
          "[Testimonial pending — analyst quote on metric trust and certified definitions]",
        name: "[Name]",
        role: "[Role] · [Company]",
      },
      {
        avatar: "D",
        quote:
          "[Testimonial pending — analyst quote on audit readiness in a regulated industry]",
        name: "[Name]",
        role: "[Role] · [Company]",
      },
      {
        avatar: "E",
        quote:
          "[Testimonial pending — analyst quote on self-serve adoption across the team]",
        name: "[Name]",
        role: "[Role] · [Company]",
      },
      {
        avatar: "F",
        quote:
          "[Testimonial pending — data-lead quote on partnership with analysts]",
        name: "[Name]",
        role: "[Role] · [Company]",
      },
    ],
  },

  // ── Section 09 — Integrations ───────────────────────────────
  integrations: {
    intro: {
      eyebrow: "Integrations",
      heading: "Answers everywhere analysts work",
    },
    cards: [
      {
        icon: "message-circle",
        label: "[Slack — confirm with product]",
        desc: "Ask Quaeris directly in Slack. Get cited answers in Slack. No tool-switching.",
        href: "/integrations",
      },
      {
        icon: "code",
        label: "[Notebooks — confirm with product]",
        desc: "Embed Quaeris answers in Python / SQL notebooks. One source of truth for metrics.",
        href: "/integrations",
      },
      {
        icon: "layout-grid",
        label: "[BI embedding — confirm with product]",
        desc: "Drop Quaeris answers into your existing BI dashboards as data source.",
        href: "/integrations",
      },
      {
        icon: "mail",
        label: "[Scheduled email — confirm with product]",
        desc: "Schedule recurring analyses. Answers delivered to inboxes weekly. Always fresh, always cited.",
        href: "/integrations",
      },
    ],
    cta: { label: "See all integrations", href: "/integrations" },
  },

  // ── Section 10 — The Semantic Layer ─────────────────────────
  semanticLayer: {
    eyebrow: "Powered by your governed metrics",
    heading:
      "Every answer is grounded in certified metrics your data team owns.",
    body: [
      "Quaeris agents don’t generate numbers — they retrieve them from your semantic layer. Revenue means the same thing in every query. Churn is defined once. Margin is owned by Finance. When an analyst asks a question, agents reason over these certified definitions and return answers your organization can act on without debate.",
      "This is where the trust lives. Not in the agent, but in the layer beneath it.",
    ],
    checks: [
      "One metric definition across all queries",
      "Ownership and audit trail for every metric",
      "Automatic consistency across analysts, teams, tools",
    ],
    cta: {
      label: "Learn how to build the semantic layer",
      href: "/platform/semantic-layer",
    },
  },

  // ── Section 11 — FAQ ────────────────────────────────────────
  faq: {
    intro: {
      eyebrow: "Questions analysts ask",
      heading: "FAQ for Analysts",
    },
    miniCard: {
      title: "Still have questions?",
      body: "Book a 30-minute demo and ask them live, on your own metrics.",
      cta: { label: "Book a Demo", href: "/contact" },
    },
    items: [
      {
        id: "faq-a1",
        question: "Can I ask follow-up questions, or just one-shot queries?",
        answer:
          "Yes, agents remember context across messages. Ask your first question, then refine, drill down, or pivot. Agents chain analyses without losing state.",
        defaultOpen: true,
      },
      {
        id: "faq-a2",
        question: "What if the semantic layer doesn’t have the metric I need?",
        answer:
          "Agents tell you directly. “Metric X doesn’t exist in the certified layer.” Then your data team decides: is this a new metric to add, or should you ask differently? You’re never stuck — you get transparency instead.",
      },
      {
        id: "faq-a3",
        question: "How long does it take to set up?",
        answer:
          "Semantic layer migration typically takes 1–2 weeks (teams with 50–200 metrics). After that, analysts can start asking immediately. No data import, no model rebuilding — your warehouse is the source.",
      },
      {
        id: "faq-a4",
        question: "What happens if I misinterpret an answer?",
        answer:
          "That’s why every answer shows its sources. Click a metric name and you see the definition, business rules, and data lineage. Misinterpretation is caught because you see exactly what was queried.",
      },
      {
        id: "faq-a5",
        question: "Is this a BI tool replacement?",
        answer:
          "No — it’s a complement. Quaeris handles exploratory questions. Your dashboards and reporting tools stay in place for structured, scheduled reporting. Different tools for different jobs.",
      },
      {
        id: "faq-a6",
        question: "Can I share answers with colleagues?",
        answer:
          "Yes. Copy the answer, the metric definitions, and the audit trail. You can export to Slack, email, dashboards, or notebooks. Every export is reproducible — colleagues can re-run your analysis.",
      },
      {
        id: "faq-a7",
        question: "What if a metric is wrong?",
        answer:
          "Your data team fixes the definition in the semantic layer once. Every agent answer going forward uses the corrected definition. No bug chasing. No rework.",
      },
      {
        id: "faq-a8",
        question: "How much training do I need?",
        answer:
          "Minimal. If you can ask a colleague a question, you can ask Quaeris. Onboarding is typically 1–2 hours. After that, you’re productive.",
      },
    ],
  },

  // ── Section 12 — CTA Band ───────────────────────────────────
  cta: {
    eyebrow: "Ready to unlock self-serve analytics?",
    heading: "See Quaeris in action — on your data.",
    subcopy:
      "Book a 30-minute demo with a Quaeris solutions engineer. We’ll connect to your warehouse, walk through analyst use cases on your metrics, and show you what self-serve looks like with governance built in.",
    primary: { label: "Book a Demo", href: "/contact" },
    secondary: { label: "See the product tour", href: "/videos/analyst-walkthrough" },
  },

  // ── Section 13 — Newsletter ─────────────────────────────────
  newsletter: {
    eyebrow: "The Governed Analytics Brief",
    heading: "Weekly insights on agentic analytics for analysts.",
    body: "One practical read every Thursday: how governed analytics is changing analyst workflows, semantic layer patterns, and agentic best practices — no generic AI hype.",
    inputLabel: "Work email",
    inputPlaceholder: "you@company.com",
    submitLabel: "Subscribe",
    consentLead: "No spam. Unsubscribe any time. ",
    privacyLink: { label: "Privacy Policy", href: "/privacy" },
  },
} satisfies SolutionsAnalystsPageContent;
