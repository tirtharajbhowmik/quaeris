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
