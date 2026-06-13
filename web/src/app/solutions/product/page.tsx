import type { Metadata } from "next";
import "./solutions-product.css";
import { solutionsProductPage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Clock,
  AlertTriangle,
  Lock,
  Zap,
  CheckCircle,
  Shield,
  Database,
  Layers,
  MessageSquare,
  CheckCircle2,
  TrendingUp,
  UserCheck,
  Filter,
  DollarSign,
  CheckSquare,
  GitBranch,
  Check,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: solutionsProductPage.meta.title,
  description: solutionsProductPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  clock: Clock,
  "alert-triangle": AlertTriangle,
  lock: Lock,
  zap: Zap,
  "check-circle": CheckCircle,
  shield: Shield,
  database: Database,
  layers: Layers,
  "message-square": MessageSquare,
  "check-circle-2": CheckCircle2,
  "trending-up": TrendingUp,
  "user-check": UserCheck,
  filter: Filter,
  "dollar-sign": DollarSign,
  "check-square": CheckSquare,
  "git-branch": GitBranch,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: BreadcrumbList + SoftwareApplication + FAQPage
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: brand.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: `${brand.url}/solutions`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Product",
      item: `${brand.url}/solutions/product`,
    },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: solutionsProductPage.meta.description,
  url: `${brand.url}/solutions/product`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: solutionsProductPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SolutionsProductPage() {
  const {
    hero,
    challenge,
    howItWorks,
    useCases,
    proof,
    governance,
    comparison,
    integrations,
    faq,
    cta,
    newsletter,
  } = solutionsProductPage;

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
          id="product-hero"
          className="prod-hero section-pad"
          aria-labelledby="product-hero-heading"
        >
          <div className="hero-glow" aria-hidden="true" />
          <div className="container prod-hero-grid">
            <Reveal className="prod-hero-copy">
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1 id="product-hero-heading" className="hero-h1">
                {hero.h1} <span className="accent-line">{hero.h1Accent}</span>
              </h1>
              <p className="prod-hero-sub body-lg">{hero.subcopy}</p>
              <div className="hero-buttons">
                <a href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </a>
                <a href={hero.ghostCta.href} className="btn btn-secondary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  {hero.ghostCta.label}
                </a>
              </div>
            </Reveal>

            {/* Visual: illustrative governed-answer card. */}
            <Reveal className="prod-hero-visual" data-placeholder>
              <figure
                className="prod-answer-card"
                role="img"
                aria-label={hero.card.ariaLabel}
              >
                <div className="prod-answer-q">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>{hero.card.question}</span>
                </div>
                <div className="prod-answer-stat">
                  <span className="prod-answer-stat-label">
                    {hero.card.stat.label}
                  </span>
                  <span className="bento-stat-num">{hero.card.stat.value}</span>
                </div>
                <div className="prod-answer-chart" aria-hidden="true">
                  <svg viewBox="0 0 320 110" focusable="false">
                    <line x1="8" y1="96" x2="312" y2="96" stroke="currentColor" strokeWidth="1" opacity="0.25" />
                    <rect x="16" y="26" width="26" height="70" rx="4" fill="currentColor" opacity="0.9" />
                    <rect x="54" y="38" width="26" height="58" rx="4" fill="currentColor" opacity="0.75" />
                    <rect x="92" y="46" width="26" height="50" rx="4" fill="currentColor" opacity="0.65" />
                    <rect x="130" y="52" width="26" height="44" rx="4" fill="currentColor" opacity="0.55" />
                    <rect x="168" y="56" width="26" height="40" rx="4" fill="currentColor" opacity="0.5" />
                    <rect x="206" y="58" width="26" height="38" rx="4" fill="currentColor" opacity="0.45" />
                    <rect x="244" y="60" width="26" height="36" rx="4" fill="currentColor" opacity="0.4" />
                    <rect x="282" y="61" width="26" height="35" rx="4" fill="currentColor" opacity="0.35" />
                  </svg>
                </div>
                <div className="trust-badges">
                  {hero.card.badges.map((badge) => (
                    <span
                      key={badge.label}
                      className={badge.accent ? "badge badge-accent" : "badge"}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
                <figcaption className="prod-answer-meta">
                  {hero.card.meta.map((m) => (
                    <span key={m.text}>{m.text}</span>
                  ))}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 3.2 — Problem / Solution ============ */}
        <section
          id="challenge"
          className="section-pad"
          aria-labelledby="challenge-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <h2 id="challenge-heading" className="display-lg">
                {challenge.intro.heading}
              </h2>
            </Reveal>

            <div className="ps-grid ps-grid--3" role="list">
              {challenge.cards.map((card) => (
                <Reveal
                  key={card.index}
                  className="ps-card"
                  as="article"
                  role="listitem"
                >
                  <div className="prod-ps-top">
                    <div className="icon-box" aria-hidden="true">
                      <Icon name={card.problemIcon} />
                    </div>
                    <span className="ps-index" aria-hidden="true">
                      {card.index}
                    </span>
                  </div>
                  <h3 className="heading-sm">{card.problemTitle}</h3>
                  <p className="ps-problem body-md">{card.problem}</p>
                  <div className="ps-fix-box">
                    <span className="ps-fix-label eyebrow">{card.fixLabel}</span>
                    <div className="prod-fix-head">
                      <Icon name={card.fixIcon} />
                      <h4>{card.fixTitle}</h4>
                    </div>
                    <p className="ps-fix-body body-md">{card.fixBody}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.3 — How Product Teams Use Quaeris ============ */}
        <section
          id="how-we-work"
          className="section-pad"
          aria-labelledby="how-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{howItWorks.intro.eyebrow}</span>
              <h2 id="how-heading" className="display-lg">
                {howItWorks.intro.heading}
              </h2>
            </Reveal>

            <div className="icon-feature-grid">
              {howItWorks.steps.map((step, i) => (
                <Reveal key={step.title} className="icon-feature" delay={i * 60}>
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={step.icon} />
                  </div>
                  <h3 className="heading-sm">{step.title}</h3>
                  <p>{step.body}</p>
                  <div className="prod-step-visual" data-placeholder>
                    {step.visual}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.4 — Real Metrics & Use Cases ============ */}
        <section
          id="use-cases"
          className="section-pad"
          aria-labelledby="use-cases-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{useCases.intro.eyebrow}</span>
              <h2 id="use-cases-heading" className="display-lg">
                {useCases.intro.heading}
              </h2>
            </Reveal>

            <div className="segment-cards-grid segment-cards-grid--4" role="list">
              {useCases.cards.map((card) => (
                <Reveal
                  key={card.category}
                  className="segment-card"
                  as="article"
                  role="listitem"
                >
                  <div className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <span className="eyebrow prod-usecase-eyebrow">
                    {card.category}
                  </span>
                  <h3 className="segment-label heading-sm">{card.metric}</h3>
                  <ul className="prod-usecase-questions">
                    {card.questions.map((q) => (
                      <li key={q}>
                        <Check aria-hidden="true" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="prod-usecase-answer">{card.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.5 — Proof: Case Studies ============ */}
        <section
          id="proof"
          className="section-pad"
          aria-labelledby="proof-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{proof.intro.eyebrow}</span>
              <h2 id="proof-heading" className="display-lg">
                {proof.intro.heading}
              </h2>
            </Reveal>

            <div className="prod-case-grid">
              {proof.cards.map((card) => (
                <Reveal
                  key={card.industry}
                  className="case-study-card"
                  as="article"
                >
                  <span className="industry-chip">{card.industry}</span>
                  <h3 className="heading-sm" data-placeholder>
                    {card.client}
                  </h3>
                  <span className="eyebrow prod-case-label">
                    {card.challengeLabel}
                  </span>
                  <p className="cs-outcome">{card.challenge}</p>
                  <span className="eyebrow prod-case-label">
                    {card.solutionLabel}
                  </span>
                  <p className="cs-outcome">{card.solution}</p>
                  <span className="eyebrow prod-case-label">
                    {card.outcomeLabel}
                  </span>
                  <ul className="prod-outcome-list">
                    {card.outcomes.map((o) => (
                      <li key={o}>
                        <Check aria-hidden="true" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="cs-how" data-placeholder>
                    {card.quote}
                  </blockquote>
                </Reveal>
              ))}
            </div>

            <Reveal className="proof-cta">
              <a href={proof.cta.href} className="btn btn-secondary">
                {proof.cta.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 3.6 — Feature Spotlight: Governance & Audit ============ */}
        <section
          id="dark-feature"
          className="section-pad"
          aria-labelledby="governance-heading"
        >
          <div className="dark-feature-glow" aria-hidden="true" />
          <div className="container">
            <div className="dark-feature-grid">
              <Reveal>
                <div className="section-header section-header-dark">
                  <span className="eyebrow">{governance.intro.eyebrow}</span>
                  <h2 id="governance-heading" className="display-lg">
                    {governance.intro.heading}
                  </h2>
                </div>

                <div className="value-prop-list">
                  {governance.valueProps.map((vp) => (
                    <div key={vp.index} className="value-prop-row">
                      <span className="value-prop-num" aria-hidden="true">
                        {vp.index}
                      </span>
                      <div className="value-prop-text">
                        <h3>
                          <Icon name={vp.icon} />
                          {vp.title}
                        </h3>
                        <p>{vp.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={governance.cta.href}
                  className="btn btn-secondary-dark"
                  style={{ marginTop: "var(--space-7)" }}
                >
                  {governance.cta.label}
                </a>
              </Reveal>

              {/* Visual: MetricDashboardMock */}
              <Reveal>
                <div className="metric-dashboard">
                  <div className="metric-dashboard-header">
                    <span data-placeholder>{governance.dashboard.header}</span>
                    <span className="badge badge-accent">
                      {governance.dashboard.badge}
                    </span>
                  </div>
                  <div className="metric-tiles">
                    {governance.dashboard.tiles.map((tile) => (
                      <div
                        key={tile.label}
                        className={tile.active ? "metric-tile active" : "metric-tile"}
                      >
                        <div className="metric-tile-label">{tile.label}</div>
                        <div className="metric-tile-value">{tile.value}</div>
                        {tile.delta && (
                          <div className="metric-tile-delta">{tile.delta}</div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mini-chart" data-placeholder aria-hidden="true">
                    <svg
                      viewBox="0 0 280 80"
                      focusable="false"
                      style={{ color: "var(--brand-accent)" }}
                    >
                      <line x1="6" y1="70" x2="274" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.25" />
                      <polyline
                        points="6,58 46,52 86,55 126,44 166,40 206,33 246,28 274,24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="chart-caption">
                    {governance.dashboard.caption}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 3.7 — Competitive Comparison ============ */}
        <section
          id="comparison"
          className="section-pad"
          aria-labelledby="comparison-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <h2 id="comparison-heading" className="display-lg">
                {comparison.intro.heading}
              </h2>
            </Reveal>

            <Reveal>
              <div
                className="compare-table-wrap"
                role="region"
                aria-labelledby="comparison-heading"
                tabIndex={0}
              >
                <table className="compare-table">
                <caption className="sr-only">{comparison.caption}</caption>
                <thead>
                  <tr>
                    {comparison.table.columns.map((col) => (
                      <th
                        key={col.label}
                        scope="col"
                        className={col.highlight ? "compare-col-quaeris" : undefined}
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
                        const col = comparison.table.columns[ci + 1];
                        return (
                          <td
                            key={ci}
                            className={
                              col?.highlight ? "compare-col-quaeris" : undefined
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
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 3.8 — Integration & Warehouse Compatibility ============ */}
        <section
          id="integrations"
          className="section-pad"
          aria-labelledby="integrations-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{integrations.intro.eyebrow}</span>
              <h2 id="integrations-heading" className="display-lg">
                {integrations.intro.heading}
              </h2>
            </Reveal>

            <Reveal>
              <ul
                className="prod-warehouse-grid"
                aria-label="Supported warehouses and sources"
              >
                {integrations.warehouses.map((w) => (
                  <li key={w} className="marquee-logo" data-placeholder>
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="p" className="prod-integrations-copy body-md">
              {integrations.body}
            </Reveal>

            <Reveal style={{ textAlign: "center", marginTop: "var(--space-6)" }}>
              <a href={integrations.cta.href} className="btn btn-ghost">
                {integrations.cta.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 3.9 — FAQ ============ */}
        <section id="faq" className="section-pad" aria-labelledby="faq-heading">
          <div className="container">
            <div className="faq-grid">
              <div>
                <Reveal className="section-header">
                  <span className="eyebrow">{faq.intro.eyebrow}</span>
                  <h2 id="faq-heading" className="display-lg">
                    {faq.intro.heading}
                  </h2>
                </Reveal>
                <Reveal className="faq-mini-card">
                  <p
                    className="heading-sm"
                    style={{
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-2)",
                    }}
                    data-placeholder
                  >
                    {faq.miniCard.title}
                  </p>
                  <ul>
                    {faq.miniCard.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="btn btn-ghost">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal>
                <Accordion items={faq.items} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 3.10 — CTA Band ============ */}
        <section
          id="cta-band"
          className="section-pad"
          aria-labelledby="cta-heading"
        >
          <div className="cta-band-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="cta-inner">
              <span className="eyebrow">{cta.eyebrow}</span>
              <h2 id="cta-heading" className="display-lg">
                {cta.heading}
              </h2>
              <p className="subcopy body-lg">{cta.subcopy}</p>
              <div className="cta-buttons">
                <a href={cta.primary.href} className="btn btn-on-dark">
                  {cta.primary.label}
                </a>
                {cta.secondary && (
                  <a href={cta.secondary.href} className="btn btn-secondary-dark">
                    {cta.secondary.label}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 3.11 — Newsletter ============ */}
        <section
          id="newsletter"
          className="newsletter-block"
          aria-labelledby="newsletter-heading"
        >
          <div className="container">
            <Reveal className="newsletter-inner">
              <span className="eyebrow">{newsletter.eyebrow}</span>
              <h3 id="newsletter-heading">{newsletter.heading}</h3>
              <p>{newsletter.body}</p>
              <form className="newsletter-form" action="#" method="post">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  className="newsletter-input"
                  type="email"
                  id="newsletter-email"
                  name="email"
                  placeholder={newsletter.placeholder}
                  autoComplete="email"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  {newsletter.cta}
                </button>
              </form>
              <p className="newsletter-consent">
                {newsletter.consent}{" "}
                <a
                  href={newsletter.privacyLink.href}
                  style={{ textDecoration: "underline" }}
                >
                  {newsletter.privacyLink.label}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
