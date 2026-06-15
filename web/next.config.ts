import type { NextConfig } from "next";
import path from "node:path";

/**
 * Redirects for paths that are linked across the site but map cleanly to an
 * existing page (so we send the user somewhere real instead of 404ing).
 * Content that has no real equivalent yet is handled as a "coming soon" stub
 * in the [...slug] route instead (see lib/mockup.ts STUB_ROUTES).
 * All are temporary (307) — several of these may become real pages later.
 */
const REDIRECTS: { source: string; destination: string }[] = [
  // Use-cases → solutions overview
  { source: "/use-cases", destination: "/solutions" },
  { source: "/use-cases/:path*", destination: "/solutions" },
  // Industries → solutions (finance has a dedicated page)
  { source: "/industries", destination: "/solutions" },
  { source: "/industries/finance-governed-analytics", destination: "/solutions/finance" },
  { source: "/industries/:path*", destination: "/solutions" },
  // Learn / feature pages → the agent engine that powers them
  { source: "/learn", destination: "/platform/agents" },
  { source: "/learn/:path*", destination: "/platform/agents" },
  { source: "/conversational-queries", destination: "/platform/agents" },
  // Product surfaces with no dedicated page yet → platform
  { source: "/pinboards", destination: "/platform" },
  { source: "/embedded-analytics", destination: "/platform" },
  { source: "/platform/embedded-analytics", destination: "/platform" },
  { source: "/platform/integrations", destination: "/integrations" },
  // Connectors → the integrations index
  { source: "/integrations/snowflake", destination: "/integrations" },
  { source: "/integrations/bigquery", destination: "/integrations" },
  { source: "/integrations/databricks", destination: "/integrations" },
  { source: "/integrations/redshift", destination: "/integrations" },
  { source: "/integrations/synapse", destination: "/integrations" },
  // No video yet → talk to us
  { source: "/videos/:path*", destination: "/contact" },
  // Auth / app entry points (no app to link to) → talk to us
  { source: "/login", destination: "/contact" },
  { source: "/signup", destination: "/contact" },
  { source: "/app", destination: "/contact" },
  { source: "/dashboard", destination: "/contact" },
  { source: "/support", destination: "/contact" },
  // Security → trust center
  { source: "/security", destination: "/trust" },
  // Community → resources
  { source: "/community", destination: "/resources" },
  { source: "/communities", destination: "/resources" },
  // No search backend → home
  { source: "/search", destination: "/" },
  // Stray/author-error slugs → platform
  { source: "/accelerate", destination: "/platform" },
  { source: "/activate", destination: "/platform" },
  { source: "/resonate", destination: "/platform" },
];

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't pick up a stray
  // lockfile elsewhere on the machine.
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return REDIRECTS.map((r) => ({ ...r, permanent: false }));
  },
};

export default nextConfig;
