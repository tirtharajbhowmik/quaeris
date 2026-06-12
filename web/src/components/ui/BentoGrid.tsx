import { Check } from "lucide-react";
import Reveal from "./Reveal";
import Badge from "./Badge";

function MiniChartSVG() {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "80px" }}
    >
      {/* Trend line */}
      <polyline
        points="0,70 30,55 60,45 90,32 120,22 150,14 180,8 200,4"
        fill="none"
        stroke="var(--brand-accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Area fill */}
      <polygon
        points="0,70 30,55 60,45 90,32 120,22 150,14 180,8 200,4 200,80 0,80"
        fill="var(--brand-accent)"
        opacity="0.08"
      />
      {/* Dots */}
      <circle cx="0" cy="70" r="3" fill="var(--brand-accent)" opacity="0.4" />
      <circle cx="90" cy="32" r="3" fill="var(--brand-accent)" opacity="0.6" />
      <circle cx="200" cy="4" r="4" fill="var(--brand-accent)" />
    </svg>
  );
}

const credentials = [
  "Warehouse-native — your data never moves",
  "Certified semantic layer — zero metric drift",
  "Role-based access enforced at query time",
];

export default function BentoGrid() {
  return (
    <section
      id="how-we-work"
      className="section-pad"
      aria-labelledby="bento-heading"
      style={{ background: "var(--bg-canvas)" }}
    >
      <div className="container">
        <Reveal>
          <div className="section-header center">
            <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
              Why teams choose Veris
            </span>
            <h2 id="bento-heading" className="display-lg">
              Why teams choose Veris.
            </h2>
            <p className="body-lg subcopy" style={{ color: "var(--text-secondary)" }}>
              A governed platform built around one principle: every analytics answer should be traceable, consistent, and secure.
            </p>
          </div>
        </Reveal>

        <div className="bento-grid" aria-label="Why Veris">
          {/* Large hero card — col-span-2 */}
          <Reveal className="bento-card bento-large" style={{ gridColumn: "span 2" }}>
            <div className="bento-large-gradient" aria-hidden="true" />
            <div className="bento-large-content">
              <Badge variant="accent">Governed semantic layer</Badge>
              <h3 className="display-md" style={{ marginTop: "var(--space-4)", color: "var(--text-primary)" }}>
                One definition per metric. Every agent answer grounded in your certified semantic layer — not a model&apos;s best guess.
              </h3>
              <p className="body-md" style={{ color: "var(--text-secondary)", marginTop: "var(--space-3)", maxWidth: "52ch" }}>
                Define revenue, churn, and activation once. Veris enforces those definitions on every query — so every team, every dashboard, and every agent answer reflects the same number.
              </p>
            </div>
            <div className="bento-large-visual" aria-hidden="true">
              <div className="bento-mini-chart">
                <div className="bento-chart-label body-sm" style={{ color: "var(--text-tertiary)", marginBottom: "var(--space-2)" }}>
                  Time-to-insight — 90-day Veris deployment
                </div>
                <MiniChartSVG />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-1)" }}>
                  <span className="body-sm" style={{ color: "var(--text-tertiary)", fontSize: "11px" }}>Day 1</span>
                  <span className="body-sm" style={{ color: "var(--text-tertiary)", fontSize: "11px" }}>Day 90</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stat tile — 87% fewer requests */}
          <Reveal className="bento-card bento-stat" delay={60}>
            <span className="stat-num bento-stat-num" style={{ color: "var(--brand-accent)" }}>87%</span>
            <span className="bento-stat-label body-sm" style={{ color: "var(--text-secondary)" }}>reduction in ad-hoc data requests</span>
            <span className="stat-delta" style={{ marginTop: "var(--space-2)" }}>Across deployed orgs</span>
          </Reveal>

          {/* Credential / badge tile */}
          <Reveal className="bento-card bento-cred" delay={120}>
            <span className="eyebrow" style={{ color: "var(--text-tertiary)", marginBottom: "var(--space-4)", display: "block" }}>
              Platform guarantees
            </span>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {credentials.map((c) => (
                <li key={c} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>
                  <span style={{ color: "var(--brand-accent)" }}><Check aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} /></span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Stat tile — 3x faster */}
          <Reveal className="bento-card bento-stat" delay={80}>
            <span className="stat-num bento-stat-num" style={{ color: "var(--brand-accent)" }}>3×</span>
            <span className="bento-stat-label body-sm" style={{ color: "var(--text-secondary)" }}>faster time-to-insight</span>
            <span className="stat-delta" style={{ marginTop: "var(--space-2)" }}>vs. traditional BI workflow</span>
          </Reveal>

          {/* Compact testimonial / quote tile */}
          <Reveal className="bento-card bento-quote" delay={160}>
            <svg viewBox="0 0 24 24" fill="var(--brand-accent-soft)" stroke="none" aria-hidden="true" style={{ width: 28, height: 28, marginBottom: "var(--space-3)", opacity: 0.8 }}>
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="var(--brand-accent)" opacity="0.2" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="var(--brand-accent)" opacity="0.2" />
            </svg>
            <blockquote>
              <p className="body-md" style={{ color: "var(--text-primary)", fontStyle: "italic", lineHeight: 1.55 }}>
                &ldquo;The lineage view alone justified the deployment. My team can trace any answer back to the source table in one click.&rdquo;
              </p>
              <footer style={{ marginTop: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--brand-accent-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "var(--brand-accent)", flexShrink: 0 }} aria-hidden="true">
                  SR
                </div>
                <div>
                  <div className="body-sm" style={{ fontWeight: 600, color: "var(--text-primary)" }}>S.R.</div>
                  <div className="body-sm" style={{ color: "var(--text-tertiary)", fontSize: "12px" }}>VP Analytics · Orbit Analytics</div>
                </div>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
