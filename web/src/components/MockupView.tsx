"use client";

import { useEffect } from "react";
import type { SplitMockup } from "@/lib/mockup";

/**
 * Renders an approved mockup faithfully inside the app:
 *  - its scoped CSS via a <style> tag,
 *  - its section markup via dangerouslySetInnerHTML (so it ships in the
 *    server-rendered HTML — good for SEO),
 *  - its interactive scripts, executed client-side after mount.
 *
 * The mockup scripts are self-contained IIFEs that query the document and
 * wire interactions (tabs, count-ups, IntersectionObserver reveals, the
 * Motion One hero). Running them after the markup is in the DOM reproduces
 * the exact behavior we QA'd in the standalone mockups.
 *
 * Parent passes a unique `key` (the route) so this fully remounts on
 * navigation, re-running scripts against fresh markup.
 */
export default function MockupView({ css, html, scripts }: SplitMockup) {
  useEffect(() => {
    // Run each script in its own function scope, after the markup is mounted.
    const timers: number[] = [];
    const run = () => {
      for (const code of scripts) {
        try {
          // eslint-disable-next-line no-new-func
          new Function(code)();
        } catch (err) {
          console.error("[MockupView] script error:", err);
        }
      }
    };
    // rAF ensures layout is committed before scripts measure/observe.
    const id = window.requestAnimationFrame(run);
    return () => {
      window.cancelAnimationFrame(id);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [scripts]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
