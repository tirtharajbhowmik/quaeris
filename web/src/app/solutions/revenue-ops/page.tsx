import type { Metadata } from "next";
import "./solutions-revenue-ops.css";
import { solutionsRevenueOpsPage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  CheckCircle,
  AlertCircle,
  TrendingDown,
  Zap,
  GitMerge,
  Target,
  Link as LinkIcon,
  Lock,
  TrendingUp,
  BarChart3,
  Clock,
  Boxes,
  Tag,
  Users,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: solutionsRevenueOpsPage.meta.title,
  description: solutionsRevenueOpsPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  "check-circle": CheckCircle,
  "alert-circle": AlertCircle,
  "trending-down": TrendingDown,
  zap: Zap,
  "git-merge": GitMerge,
  target: Target,
  link: LinkIcon,
  lock: Lock,
  "trending-up": TrendingUp,
  "bar-chart-3": BarChart3,
  clock: Clock,
  boxes: Boxes,
  tag: Tag,
  users: Users,
};

function Icon({
  name,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: SoftwareApplication (Product schema for /solutions/*) + FAQPage
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: solutionsRevenueOpsPage.meta.description,
  url: `${brand.url}/solutions/revenue-ops`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: solutionsRevenueOpsPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SolutionsRevenueOpsPage() {
  const {
    hero,
    problem,
    howItWorks,
    capabilities,
    useCases,
    proof,
    comparison,
    governance,
    faq,
    cta,
  } = solutionsRevenueOpsPage;

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Skip to content */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main">
        {/* ============ Section 3.1 — Hero ============ */}
        <section
          id="rops-hero"
          className="rops-hero section-pad"
          aria-labelledby="rops-hero-h1"
        >
          <div className="hero-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="hero-inner">
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1 id="rops-hero-h1" className="hero-h1">
                {hero.h1}
              </h1>
              <p className="subcopy body-lg">{hero.subcopy}</p>
              <div className="hero-buttons btn-stack">
                <a href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </a>
                <a href={hero.secondaryCta.href} className="btn btn-secondary">
                  {hero.secondaryCta.label}
                </a>
              </div>
              <ul className="hero-trust" role="list">
                {hero.trust.map((t) => (
                  <li key={t.text} className="hero-trust-item">
                    <Icon name={t.icon} />
                    <span>{t.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 3.2 — Problem Statement ============ */}
        <section
          id="problem"
          className="section-pad"
          aria-labelledby="problem-h2"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{problem.intro.eyebrow}</span>
              <h2 id="problem-h2" className="display-lg">
                {problem.intro.heading}
              </h2>
              <p className="subcopy body-lg">{problem.intro.subcopy}</p>
            </Reveal>
            <div className="rops-problem-grid">
              {problem.cards.map((card) => (
                <Reveal
                  key={card.title}
                  className="card rops-problem-card"
                  as="article"
                >
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="heading-sm">{card.title}</h3>
                  <p className="body-md">{card.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.3 — How Quaeris Solves RevOps ============ */}
        <section
          id="how-it-works"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="how-h2"
        >
          <div className="container">
            <Reveal className="section-header methodology-header">
              <span className="eyebrow">{howItWorks.intro.eyebrow}</span>
              <h2 id="how-h2" className="display-lg">
                {howItWorks.intro.heading}
              </h2>
              <p className="subcopy body-lg">{howItWorks.intro.subcopy}</p>
            </Reveal>

            <div className="feature-rows-list">
              {howItWorks.steps.map((step, i) => {
                const flip = i % 2 === 1;
                const visual = (
                  <Reveal className="feature-row-visual">
                    <div
                      className="feature-row-img-wrap feature-row-img-fallback"
                      style={{ color: "var(--brand-accent)" }}
                      aria-hidden="true"
                      data-placeholder
                    >
                      {stepVisuals[i]}
                    </div>
                  </Reveal>
                );
                const text = (
                  <Reveal className="feature-row-text">
                    <span className="eyebrow feature-row-eyebrow">
                      {step.eyebrow}
                    </span>
                    <h3 className="heading-sm feature-row-heading">
                      {step.heading}
                    </h3>
                    <p className="feature-row-body body-md">{step.body}</p>
                    {step.cta && (
                      <a href={step.cta.href} className="btn-ghost">
                        {step.cta.label}
                      </a>
                    )}
                  </Reveal>
                );
                return (
                  <div
                    key={step.heading}
                    className={`feature-row${flip ? " feature-row-flip" : ""}`}
                  >
                    {flip ? (
                      <>
                        {visual}
                        {text}
                      </>
                    ) : (
                      <>
                        {text}
                        {visual}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ Section 3.4 — Key Capabilities ============ */}
        <section
          id="capabilities"
          className="section-pad"
          aria-labelledby="capabilities-h2"
        >
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow">{capabilities.intro.eyebrow}</span>
              <h2 id="capabilities-h2" className="display-lg">
                {capabilities.intro.heading}
              </h2>
            </Reveal>
            <div className="icon-feature-grid">
              {capabilities.items.map((item) => (
                <Reveal key={item.title} className="icon-feature">
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="heading-sm">{item.title}</h3>
                  <p>{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.5 — Use Cases ============ */}
        <section
          id="use-cases"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="use-cases-h2"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{useCases.intro.eyebrow}</span>
              <h2 id="use-cases-h2" className="display-lg">
                {useCases.intro.heading}
              </h2>
            </Reveal>
            <div className="bento-grid">
              {useCases.cards.map((card) => (
                <Reveal
                  key={card.title}
                  className="bento-card rops-usecase-card"
                  as="article"
                  {...(card.placeholder ? { "data-placeholder": true } : {})}
                >
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="heading-sm">{card.title}</h3>
                  <p>{card.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.6 — Proof: Customer Outcomes ============ */}
        <section id="proof" className="section-pad" aria-labelledby="proof-h2">
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow">{proof.intro.eyebrow}</span>
              <h2 id="proof-h2" className="display-lg">
                {proof.intro.heading}
              </h2>
            </Reveal>
            <div className="case-study-grid">
              {proof.cards.map((card) => (
                <Reveal
                  key={card.client}
                  className="case-study-card"
                  as="article"
                >
                  <span className="industry-chip">{card.industry}</span>
                  <h3 className="heading-sm" data-placeholder>
                    {card.client}
                  </h3>
                  <p className="cs-outcome" data-placeholder>
                    {card.outcome}
                  </p>
                  <div className="cs-stats" aria-label="Key metrics" data-placeholder>
                    {card.metrics.map((m, mi) => (
                      <div key={mi} className="cs-stat">
                        <span className="cs-stat-num">{m.num}</span>
                        <span className="cs-stat-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="cs-how" data-placeholder>
                    {card.how}
                  </p>
                  <a href={card.cta.href} className="btn-ghost" data-placeholder>
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.7 — Comparison ============ */}
        <section
          id="comparison"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="comparison-h2"
        >
          <div className="container">
            <Reveal className="section-header center">
              <h2 id="comparison-h2" className="display-lg">
                {comparison.intro.heading}
              </h2>
            </Reveal>
            <Reveal className="compare-table-wrap">
              <table className="compare-table">
                <caption className="sr-only">{comparison.caption}</caption>
                <thead>
                  <tr>
                    {comparison.table.columns.map((col) => (
                      <th
                        key={col.label}
                        scope="col"
                        className={
                          col.highlight ? "compare-col-quaeris" : undefined
                        }
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.table.rows.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      {row.cells.map((cell, ci) => {
                        const highlight =
                          comparison.table.columns[ci + 1]?.highlight;
                        return (
                          <td
                            key={ci}
                            className={
                              highlight ? "compare-col-quaeris" : undefined
                            }
                          >
                            {cell.value}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            {comparison.table.note && (
              <Reveal className="compare-note body-md">
                {comparison.table.note}
              </Reveal>
            )}
          </div>
        </section>

        {/* ============ Section 3.8 — Dark Feature: Governance & Lineage ============ */}
        <section
          id="dark-feature"
          className="section-pad"
          aria-labelledby="governance-h2"
        >
          <div className="dark-feature-glow" aria-hidden="true" />
          <div className="container">
            <div className="dark-feature-grid">
              <Reveal>
                <div className="section-header section-header-dark">
                  <span className="eyebrow">{governance.intro.eyebrow}</span>
                  <h2 id="governance-h2" className="display-lg">
                    {governance.intro.heading}
                  </h2>
                  <p className="subcopy body-lg">{governance.intro.subcopy}</p>
                </div>
                <div className="value-prop-list">
                  {governance.valueProps.map((vp) => (
                    <div key={vp.num} className="value-prop-row">
                      <span className="value-prop-num">{vp.num}</span>
                      <div className="value-prop-text">
                        <h3>{vp.title}</h3>
                        <p>{vp.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* MetricDashboardMock — illustrative data only. */}
              <Reveal className="metric-dashboard" data-placeholder>
                <div className="metric-dashboard-header">
                  <span>{governance.dashboard.header}</span>
                  <span className="badge badge-accent">
                    {governance.dashboard.statusLabel}
                  </span>
                </div>
                <div className="metric-tiles">
                  {governance.dashboard.tiles.map((tile) => (
                    <div
                      key={tile.label}
                      className={`metric-tile${tile.active ? " active" : ""}`}
                      {...(tile.placeholder
                        ? { "data-placeholder": true }
                        : {})}
                    >
                      <div className="metric-tile-label">{tile.label}</div>
                      <div className="metric-tile-value">{tile.value}</div>
                      <div className="metric-tile-delta">{tile.delta}</div>
                    </div>
                  ))}
                </div>
                <div
                  className="mini-chart"
                  style={{ color: "var(--brand-accent)" }}
                  data-placeholder
                >
                  <svg
                    viewBox="0 0 320 80"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    fill="none"
                  >
                    <polyline
                      points="0,64 40,58 80,50 120,54 160,42 200,36 240,28 280,24 320,16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="0,70 40,68 80,64 120,66 160,60 200,58 240,54 280,52 320,48"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.35"
                    />
                  </svg>
                </div>
                <p className="chart-caption" data-placeholder>
                  {governance.dashboard.chartCaption}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 3.9 — FAQ ============ */}
        <section id="faq" className="section-pad" aria-labelledby="faq-h2">
          <div className="container">
            <div className="faq-grid">
              <Reveal>
                <div className="section-header">
                  <span className="eyebrow">{faq.intro.eyebrow}</span>
                  <h2 id="faq-h2" className="display-lg">
                    {faq.intro.heading}
                  </h2>
                  <p className="subcopy body-lg">{faq.intro.subcopy}</p>
                </div>
                <div className="faq-mini-card" data-placeholder>
                  <h3>{faq.miniCard.title}</h3>
                  <p>{faq.miniCard.body}</p>
                  <a href={faq.miniCard.cta.href} className="btn btn-primary">
                    {faq.miniCard.cta.label}
                  </a>
                </div>
              </Reveal>

              <Reveal>
                <Accordion items={faq.items} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 3.10 — CTA Band ============ */}
        <section id="cta-band" className="section-pad" aria-labelledby="cta-h2">
          <div className="cta-band-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="cta-inner">
              <span className="eyebrow">{cta.eyebrow}</span>
              <h2 id="cta-h2" className="display-lg">
                {cta.heading}
              </h2>
              <p className="subcopy body-lg">{cta.subcopy}</p>
              <div className="cta-buttons">
                <a href={cta.primary.href} className="btn btn-on-dark">
                  {cta.primary.label}
                </a>
                {cta.secondary && (
                  <a
                    href={cta.secondary.href}
                    className="btn btn-secondary-dark"
                  >
                    {cta.secondary.label}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

// Decorative how-it-works step visuals (presentation only — kept inline per the
// mockup; not content). Token-driven SVGs, one per step.
const stepVisuals: React.ReactNode[] = [
  <svg
    key="g1"
    viewBox="0 0 600 400"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect width="600" height="400" fill="currentColor" opacity="0.05" />
    <rect x="60" y="70" width="160" height="92" rx="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
    <line x1="86" y1="102" x2="194" y2="102" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    <line x1="86" y1="124" x2="164" y2="124" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    <rect x="60" y="238" width="160" height="92" rx="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
    <line x1="86" y1="270" x2="194" y2="270" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    <line x1="86" y1="292" x2="164" y2="292" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    <path d="M220 116 C 310 116, 310 200, 372 200" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.55" />
    <path d="M220 284 C 310 284, 310 200, 372 200" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.55" />
    <circle cx="438" cy="200" r="62" fill="currentColor" opacity="0.12" />
    <circle cx="438" cy="200" r="62" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
    <path d="M414 200 l16 16 32-32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
  </svg>,
  <svg
    key="g2"
    viewBox="0 0 600 400"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect width="600" height="400" fill="currentColor" opacity="0.05" />
    <rect x="90" y="56" width="420" height="288" rx="16" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
    <line x1="90" y1="116" x2="510" y2="116" stroke="currentColor" strokeWidth="2" opacity="0.35" />
    <line x1="120" y1="86" x2="300" y2="86" stroke="currentColor" strokeWidth="3" opacity="0.6" />
    <line x1="120" y1="152" x2="380" y2="152" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    <circle cx="466" cy="152" r="10" fill="currentColor" opacity="0.45" />
    <line x1="120" y1="196" x2="340" y2="196" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    <circle cx="466" cy="196" r="10" fill="currentColor" opacity="0.45" />
    <line x1="120" y1="240" x2="400" y2="240" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    <circle cx="466" cy="240" r="10" fill="currentColor" opacity="0.45" />
    <rect x="120" y="282" width="150" height="36" rx="10" fill="currentColor" opacity="0.18" />
    <path d="M139 300 l8 8 16-16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
  </svg>,
  <svg
    key="g3"
    viewBox="0 0 600 400"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect width="600" height="400" fill="currentColor" opacity="0.05" />
    <rect x="310" y="52" width="230" height="64" rx="16" fill="currentColor" opacity="0.14" />
    <line x1="334" y1="76" x2="514" y2="76" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <line x1="334" y1="94" x2="470" y2="94" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <rect x="60" y="148" width="320" height="196" rx="16" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
    <rect x="92" y="240" width="36" height="72" rx="6" fill="currentColor" opacity="0.3" />
    <rect x="146" y="216" width="36" height="96" rx="6" fill="currentColor" opacity="0.45" />
    <rect x="200" y="188" width="36" height="124" rx="6" fill="currentColor" opacity="0.6" />
    <rect x="254" y="170" width="36" height="142" rx="6" fill="currentColor" opacity="0.8" />
    <line x1="92" y1="328" x2="290" y2="328" stroke="currentColor" strokeWidth="2" opacity="0.35" />
    <circle cx="430" cy="300" r="34" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    <path d="M416 300 l10 10 20-20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
  </svg>,
];
