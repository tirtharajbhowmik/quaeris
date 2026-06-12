import { ShoppingBag, Server, Users, ShoppingCart, Building2 } from "lucide-react";
import Reveal from "./Reveal";
import { brand } from "@/config/brand.config";

interface Segment {
  index: string;
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const segments: Segment[] = [
  {
    index: "01",
    label: "Data Teams",
    description: "Eliminate the ad-hoc request backlog — empower business users to self-serve within governed guardrails.",
    href: "/solutions/data-teams",
    icon: <ShoppingBag aria-hidden="true" />,
  },
  {
    index: "02",
    label: "Analysts",
    description: "Answer complex questions in minutes without tickets — backed by certified metric definitions and full lineage.",
    href: "/solutions/analysts",
    icon: <Server aria-hidden="true" />,
  },
  {
    index: "03",
    label: "Executives",
    description: "Ask in plain language and get a trusted answer instantly — no waiting on reports, no conflicting numbers.",
    href: "/solutions/executives",
    icon: <Users aria-hidden="true" />,
  },
  {
    index: "04",
    label: "Revenue & Ops",
    description: "Pipeline, churn, and performance metrics — governed, consistent, and available to every team that needs them.",
    href: "/solutions/revenue-ops",
    icon: <ShoppingCart aria-hidden="true" />,
  },
  {
    index: "05",
    label: "Product Teams",
    description: "Trusted engagement and retention signals, self-served by PMs — without waiting on a data pull.",
    href: "/solutions/product",
    icon: <Building2 aria-hidden="true" />,
  },
];

export default function SegmentCards() {
  return (
    <section
      id="segments"
      className="section-pad"
      aria-labelledby="segments-heading"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container">
        <Reveal>
          <div className="section-header center">
            <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
              Who it&apos;s for
            </span>
            <h2 id="segments-heading" className="display-lg">
              Built for every team that lives by data.
            </h2>
            <p className="body-lg subcopy" style={{ color: "var(--text-secondary)" }}>
              {brand.name} serves the whole organisation — from the data engineers who define the metrics to the executives who need answers right now.
            </p>
          </div>
        </Reveal>

        <div className="segment-cards-grid" role="list">
          {segments.map((seg, i) => (
            <Reveal key={seg.index} delay={i * 60}>
              <a
                href={seg.href}
                className="segment-card"
                role="listitem"
                aria-label={seg.label}
              >
                <span className="segment-index" aria-hidden="true">
                  {seg.index}
                </span>
                <div className="segment-icon-box" aria-hidden="true">
                  {seg.icon}
                </div>
                <h3 className="heading-sm segment-label">{seg.label}</h3>
                <p className="body-sm segment-desc">{seg.description}</p>
                <span className="segment-arrow" aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
