"use client";

import { useEffect, useRef, ReactNode, CSSProperties, ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ms stagger delay
  style?: CSSProperties;
  as?: ElementType;
  [key: string]: unknown; // allow passthrough aria-* etc
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  style,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion — CSS handles the no-motion case, but we
    // still need to add `visible` so the element is not permanently hidden.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const combinedStyle: CSSProperties = {
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
    ...style,
  };

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={combinedStyle}
    >
      {children}
    </Component>
  );
}
