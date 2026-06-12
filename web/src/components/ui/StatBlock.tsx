"use client";

import { useEffect, useRef } from "react";
import { Stat } from "@/config/brand.config";

interface StatBlockProps {
  stat: Stat;
  delay?: number;
  /** When inside a gradient container, suppress the ::before divider via a data-attr */
  inGradient?: boolean;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export default function StatBlock({ stat, delay = 0, inGradient = false }: StatBlockProps) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.textContent = stat.target + stat.suffix;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          const duration = 1200;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            const current = stat.target * eased;
            if (el) {
              el.textContent =
                (stat.isDecimal
                  ? current.toFixed(1)
                  : Math.round(current).toString()) + stat.suffix;
            }
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stat]);

  return (
    <div
      className="stat-block"
      data-in-gradient={inGradient ? "true" : undefined}
    >
      <span
        ref={numRef}
        className="stat-num stat-number"
        data-target={stat.target}
        data-suffix={stat.suffix}
        aria-label={stat.ariaLabel}
      >
        0
      </span>
      <span className="stat-label body-sm">{stat.label}</span>
      <span className="stat-delta">{stat.delta}</span>
    </div>
  );
}
