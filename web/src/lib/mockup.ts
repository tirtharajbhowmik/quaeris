// ============================================================
// Mockup-embed helpers — render the approved standalone HTML
// mockups (mockup/pages, mockup/sections) inside the Next.js app
// as real routes. Faithful first-pass port: the mockup's section
// markup + its scoped CSS + interactive scripts are injected as-is,
// inside the app layout (SiteHeader/SiteFooter). tokens.css and
// globals.css are already loaded globally by the root layout.
// ============================================================
import fs from "fs";
import path from "path";

/** Canonical site routes that map to an approved mockup file. */
export const MOCKUP_ROUTES: string[] = [
  "home-redesign",
  "home-redesign-v2",
  "solutions-variations",
  "capabilities-rollout",
  "about",
  "blog",
  "blog/sample-post",
  "case-studies",
  "customers",
  "docs",
  "platform",
  "platform/access-control",
  "platform/agents",
  "platform/audit",
  "platform/governance",
  "platform/semantic-layer",
  "platform/warehouse",
  "pricing",
  "resources",
  "resources/webinars",
  "solutions",
  "solutions/analysts",
  "solutions/data-teams",
  "solutions/executives",
  "solutions/finance",
  "solutions/product",
  "solutions/revenue-ops",
];

/** Map a route to its mockup file path (relative to the repo root). */
export function fileForRoute(route: string): string | null {
  if (!MOCKUP_ROUTES.includes(route)) return null;
  if (route === "home-redesign")
    return "mockup/pages/2026-06-16-homepage-redesign.html";
  if (route === "home-redesign-v2")
    return "mockup/pages/2026-06-16-homepage-redesign-v2.html";
  if (route === "solutions-variations")
    return "mockup/pages/2026-06-16-solutions-variations.html";
  if (route === "capabilities-rollout")
    return "mockup/sections/2026-06-16-capabilities-rollout.html";
  if (route === "solutions/finance")
    return "mockup/sections/2026-06-13-solutions-finance-v3.html";
  if (route === "blog/sample-post")
    return "mockup/pages/2026-06-14-blog-article.html";
  return `mockup/pages/2026-06-14-${route.split("/").join("-")}.html`;
}

/** Repo root is one level above the Next.js `web/` working dir. */
function repoRoot(): string {
  return path.resolve(process.cwd(), "..");
}

export function readMockup(route: string): string | null {
  const rel = fileForRoute(route);
  if (!rel) return null;
  try {
    return fs.readFileSync(path.join(repoRoot(), rel), "utf8");
  } catch {
    return null;
  }
}

export interface SplitMockup {
  css: string;
  html: string;
  scripts: string[];
}

/**
 * Split a standalone mockup HTML document into:
 *  - css: the inner CSS of every <style> block (font-variable overrides
 *    stripped so the app's optimized next/font vars win), and the `.reveal`
 *    force-visible shim preserved so non-scripted sections are visible.
 *  - html: the <body> inner markup with <style>/<script> removed.
 *  - scripts: each <script> block's source (run client-side after mount).
 */
export function splitMockup(raw: string): SplitMockup {
  const styles = Array.from(raw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g))
    .map((m) => m[1])
    .join("\n");
  // Don't let the mockup's literal --font-* override the app's next/font vars.
  const css = styles.replace(/--font-(roboto|fraunces|inter)\s*:[^;]+;/g, "");

  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  const body = bodyMatch ? bodyMatch[1] : raw;

  const scripts = Array.from(body.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)).map(
    (m) => m[1]
  );
  const html = body
    .replace(/<script[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/g, "");

  return { css, html, scripts };
}

/** Human title for a route, e.g. "platform/access-control" → "Access Control". */
export function prettyTitle(route: string): string {
  const last = route.split("/").pop() || route;
  return last
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Per-route SEO overrides drawn from each page's actual content. */
export interface RouteMeta {
  /** Page title (Title Case, no brand suffix — the route's `<title>` adds it). */
  title: string;
  /** ~150-char meta description. */
  description: string;
  /** Punchier social-share (Open Graph) description. */
  ogDescription: string;
}

/**
 * SEO metadata per canonical route. Routes absent here fall back to
 * prettyTitle() + the brand default description in generateMetadata.
 * Copy is drawn from each page's actual content (eyebrow/H1/value props).
 */
export const ROUTE_META: Record<string, RouteMeta> = {
  about: {
    title: "Secure, Governed Analytics",
    description:
      "Quaeris builds governed agentic analytics where every AI answer is auditable, traces to a certified metric definition, and your data stays warehouse-native — governance by design, not by checkbox.",
    ogDescription:
      "Secure, governed analytics powered by trusted agents. Audit-first, warehouse-native, BYOM — built for regulated enterprises.",
  },
  blog: {
    title: "Governed Analytics Insights",
    description:
      "Deep dives on semantic layers, agentic AI, and finance-grade governance from Quaeris — every article traces analytics decisions your auditors can trust.",
    ogDescription:
      "Insights on governed, agentic analytics — semantic layers, audit lineage, and enterprise data from Quaeris.",
  },
  "blog/sample-post": {
    title: "What Is a Governed Semantic Layer",
    description:
      "Learn what a governed semantic layer is and why enterprise analytics stacks need one — Quaeris delivers warehouse-native, certified metrics with full audit lineage and no hallucinated numbers.",
    ogDescription:
      "A misaligned metric definition can derail a board presentation. See how a governed, warehouse-native semantic layer keeps every number traceable and trustworthy.",
  },
  "case-studies": {
    title: "Customer Stories",
    description:
      "See how financial services, insurance, healthcare, and SaaS teams use Quaeris to unify metric definitions, self-serve governed answers, and eliminate conflicting board reports.",
    ogDescription:
      "Real outcomes from real data teams — six deployments, one certified metric layer, governed analytics in every one.",
  },
  customers: {
    title: "Customer Stories",
    description:
      "See how enterprise data leaders in finance, insurance, retail, and healthcare deployed governed AI analytics with Quaeris — certified metrics, role-gated access, zero hallucinations, results in weeks.",
    ogDescription:
      "Trusted by enterprise data leaders. Six industries, six decisive deployments — governed answers from a certified semantic layer, in 2–4 weeks.",
  },
  docs: {
    title: "Documentation",
    description:
      "Quaeris documentation covers everything from first warehouse connection to production MCP integrations — certified metrics, governed queries, audit lineage, and role-gated security in one place.",
    ogDescription:
      "Connect, govern, and query your data with Quaeris. From quick start to MCP integrations — all docs in one place.",
  },
  platform: {
    title: "Governed Agentic Analytics Platform",
    description:
      "Quaeris delivers governed agentic analytics on three layers — a certified semantic layer, trusted AI agents, and enterprise security — so every answer is accurate, auditable, and role-scoped with zero hallucinations.",
    ogDescription:
      "Three layers. One governed answer. Quaeris turns plain-language questions into auditable, warehouse-native analytics — architecture that prevents hallucinations.",
  },
  "platform/access-control": {
    title: "Access Control",
    description:
      "Quaeris enforces row-level security and column masking at query time — not in dashboards — so every governed answer is scoped to the user's role with a full audit trail.",
    ogDescription:
      "Metrics scoped to who needs them. Query-time enforcement, warehouse-native roles, zero bypass paths.",
  },
  "platform/agents": {
    title: "Agentic Analytics Engine",
    description:
      "Quaeris agents answer plain-language questions with zero hallucinations — every number traces to a certified metric in your semantic layer, role-gated and fully audited.",
    ogDescription:
      "Ask in plain language. Get governed, audited answers — sources cited, hallucinations impossible.",
  },
  "platform/audit": {
    title: "Full Audit Trail",
    description:
      "Quaeris logs every question, metric, and access decision — from plain-language query to warehouse result — giving compliance, finance, and data teams a fully traceable, exportable audit trail.",
    ogDescription:
      "Every question. Every answer. Every access decision. Quaeris makes AI analytics auditable — SOX, HIPAA, and EU AI Act ready.",
  },
  "platform/governance": {
    title: "Analytics Governance",
    description:
      "Quaeris enforces certified metrics, role-based access at query time, and a complete immutable audit trail — so every enterprise analytics answer is traceable, policy-governed, and hallucination-free.",
    ogDescription:
      "Certified metrics. Enforced policies. Complete audit trail. Quaeris makes enterprise analytics governance the foundation, not an afterthought.",
  },
  "platform/semantic-layer": {
    title: "Semantic Layer",
    description:
      "Quaeris auto-builds a certified semantic layer from usage — define revenue, churn, and KPIs once, role-gate access, and trace every agent answer to a versioned, audited metric definition. No LookML sprints required.",
    ogDescription:
      "Metrics your team can trust — auto-learned, certified, and warehouse-native. Every Quaeris answer cites a governed metric definition.",
  },
  "platform/warehouse": {
    title: "Warehouse-Native Security",
    description:
      "Quaeris is warehouse-native: agents query Snowflake, BigQuery, Databricks, Redshift, or Synapse in place — zero data copy, row-level security enforced at query time, full audit trail in your environment.",
    ogDescription:
      "Your data stays where it belongs. Quaeris queries your warehouse in place — no copy, no egress, every answer governed and audited.",
  },
  pricing: {
    title: "Enterprise Analytics Pricing",
    description:
      "Quaeris pricing scales with your warehouse connections and governance requirements — not seat counts. Every tier runs warehouse-native with a governed semantic layer and prompt-level audit log.",
    ogDescription:
      "Warehouse-native agentic analytics priced to your deployment — not arbitrary seats. Governed answers, full audit trail, BYOM.",
  },
  resources: {
    title: "Governed Analytics Resources",
    description:
      "Learn how governed agentic analytics works with Quaeris — guides, webinars, research reports, and customer stories grounded in warehouse-native, audit-ready architecture.",
    ogDescription:
      "Guides, webinars, and reports on governed agentic analytics — every answer traces to a certified metric, no data leaves your perimeter.",
  },
  "resources/webinars": {
    title: "Webinars & Live Sessions",
    description:
      "Watch Quaeris experts demonstrate governed agentic analytics live — semantic layer design, certified metrics, audit trail, and warehouse-native AI. Register for upcoming sessions or watch on demand.",
    ogDescription:
      "Live and on-demand: learn governed analytics, semantic layer design, and warehouse-native AI from Quaeris experts.",
  },
  solutions: {
    title: "AI Analytics Solutions",
    description:
      "Quaeris delivers governed agentic analytics for data teams, analysts, and executives in regulated industries — every answer is auditable, warehouse-native, and traced to a certified metric definition.",
    ogDescription:
      "Governed analytics built for your team. Trusted in your industry. Quaeris surfaces auditable answers across Finance, Healthcare, and more.",
  },
  "solutions/analysts": {
    title: "Analytics for Analysts",
    description:
      "Quaeris lets analysts ask plain-language questions and get governed, audited answers — backed by certified metrics, role-based access, and full data lineage. No SQL required.",
    ogDescription:
      "Ask questions. Get governed answers in seconds. Certified metrics, zero hallucinations, full audit trail — no SQL needed.",
  },
  "solutions/data-teams": {
    title: "Governed Self-Serve for Data Teams",
    description:
      "Quaeris lets data teams define metrics once in a governed semantic layer — business users self-serve, role-based access enforces itself at query time, and every answer is fully auditable.",
    ogDescription:
      "Kill the ad-hoc request queue. Quaeris governed self-serve: one semantic layer, zero hallucinations, automatic role enforcement.",
  },
  "solutions/executives": {
    title: "Analytics for Executives",
    description:
      "Quaeris gives executives governed business metrics on demand — ask in plain language, get audited answers in seconds with full lineage, role-based access, and zero hallucinations.",
    ogDescription:
      "Stop waiting on data tickets. Quaeris delivers certified, warehouse-native answers before your next meeting — no hallucinations, full audit trail.",
  },
  "solutions/finance": {
    title: "Finance Analytics for CFOs",
    description:
      "Quaeris gives finance teams and CFOs one certified metric definition across every variance report, ledger reconciliation, and board deck — governed, audit-ready, and warehouse-native.",
    ogDescription:
      "One metric definition. Every report agrees. Quaeris delivers governed, audit-trail analytics for finance teams — no reconciliation, no SQL, no hallucinations.",
  },
  "solutions/product": {
    title: "Product Analytics",
    description:
      "Quaeris gives product teams instant access to engagement, retention, and cohort metrics grounded in a governed semantic layer — certified answers with full audit lineage, no SQL required.",
    ogDescription:
      "Understand your users without writing SQL. Quaeris delivers governed product analytics — retention, cohort, and engagement answers in minutes, not days.",
  },
  "solutions/revenue-ops": {
    title: "Revenue Operations Analytics",
    description:
      "Quaeris unifies CRM and warehouse pipeline data into a governed semantic layer — so RevOps teams query forecast and quota metrics in plain language with certified, auditable answers and zero conflicting numbers.",
    ogDescription:
      "One governed source of truth for pipeline and forecast — ask revenue questions in plain language, get audited answers instantly.",
  },
};

// ============================================================
// "Coming soon" stubs — content pages linked from the site that
// aren't written yet. They render a branded placeholder (HTTP 200)
// instead of a 404, so no CTA dead-ends. Routes that map cleanly to
// an existing page are redirected in next.config.ts instead.
// ============================================================

export interface StubCategory {
  /** Short kind label, e.g. "Customer story". */
  label: string;
  /** One-line explanation shown on the stub. */
  blurb: string;
  /** Where the "browse all" link points. */
  backHref: string;
  backLabel: string;
}

const STUB_CATEGORIES = {
  blog: {
    label: "Article",
    blurb: "This article is being written and will be published soon.",
    backHref: "/blog",
    backLabel: "the blog",
  },
  caseStudy: {
    label: "Customer story",
    blurb: "This customer story is being prepared for publication.",
    backHref: "/case-studies",
    backLabel: "all customer stories",
  },
  compare: {
    label: "Comparison",
    blurb: "This side-by-side comparison is on the way.",
    backHref: "/platform",
    backLabel: "the platform",
  },
  webinar: {
    label: "Webinar",
    blurb: "Registration and recordings for this session are coming soon.",
    backHref: "/resources/webinars",
    backLabel: "all webinars",
  },
  resource: {
    label: "Resource",
    blurb: "This guide is being finalized.",
    backHref: "/resources",
    backLabel: "the resource library",
  },
  careers: {
    label: "Careers",
    blurb:
      "We're putting our open roles together. In the meantime, we'd still love to hear from you.",
    backHref: "/about",
    backLabel: "about Quaeris",
  },
} satisfies Record<string, StubCategory>;

/** Known stub routes → their category. */
export const STUB_ROUTES: Record<string, StubCategory> = {};
const addStubs = (routes: string[], cat: StubCategory) =>
  routes.forEach((r) => {
    STUB_ROUTES[r] = cat;
  });

addStubs(
  [
    "blog/semantic-layer-cfo-guide",
    "blog/governed-analytics-blueprint",
    "blog/warehouse-native-analytics-architecture",
    "blog/audit-lineage-enterprise-analytics",
    "blog/semantic-layer-vs-bi-tool-metrics",
  ],
  STUB_CATEGORIES.blog,
);
addStubs(
  [
    "case-studies/finance-metric-unification",
    "case-studies/retail-bank-governance",
    "case-studies/property-saas-self-serve",
    "case-studies/services-saas-migration",
    "case-studies/higher-ed-analytics",
    "case-studies/e4e-metric-unification",
  ],
  STUB_CATEGORIES.caseStudy,
);
addStubs(
  [
    "compare",
    "compare/quaeris-vs-cube",
    "compare/quaeris-vs-dbt-semantic-layer",
    "compare/quaerisai-vs-looker",
    "compare/quaerisai-vs-power-bi",
    "compare/quaerisai-vs-tableau",
  ],
  STUB_CATEGORIES.compare,
);
addStubs(
  [
    "webinars/watch",
    "webinars/watch/agentic-architecture",
    "webinars/watch/certified-metrics-definition",
    "webinars/watch/eu-ai-act-sox",
    "webinars/watch/semantic-layer-primer",
    "webinars/watch/snowflake-deployment",
    "webinars/watch/variance-analysis-demo",
    "webinars/register/finance-governed",
    "webinars/register/govern-audit-semantic",
    "webinars/register/lineage-tracking",
    "webinars/register/mcp-integration",
    "webinars/register/rbac-enterprise",
    "webinars/register/warehouse-semantic",
  ],
  STUB_CATEGORIES.webinar,
);
addStubs(
  [
    "resources/guide",
    "resources/report",
    "resources/story",
    "resources/webinar",
    "resources/security-brief",
    "resources/enterprise-brief",
    "resources/sox-ai-analytics-checklist",
    "resources/hipaa-ai-analytics-guide",
    "resources/semantic-layer-comparison-guide",
    "resources/sample-audit-report",
    "resources/quaeris-audit-trail-guide",
    "resources/bi-consolidation-roi",
    "resources/eu-ai-act-analytics-assessment",
    "resources/white-papers/smart-semantic-layers",
  ],
  STUB_CATEGORIES.resource,
);
addStubs(["careers"], STUB_CATEGORIES.careers);

/** Stub category for a route, or null if it isn't a known stub. */
export function stubFor(route: string): StubCategory | null {
  return STUB_ROUTES[route] ?? null;
}

/** "audit-lineage-enterprise-analytics" → "Audit Lineage Enterprise Analytics". */
export function humanizeSlug(route: string): string {
  const last = route.split("/").pop() || route;
  return last
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
