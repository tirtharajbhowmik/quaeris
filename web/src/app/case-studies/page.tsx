import type { Metadata } from "next";
import "./case-studies.css";
import { caseStudiesPage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import { Flag, Key, TrendingUp, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: caseStudiesPage.meta.title,
  description: caseStudiesPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  flag: Flag,
  key: Key,
  "trending-up": TrendingUp,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: WebPage describing the case-studies proof asset.
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: caseStudiesPage.meta.title,
  description: caseStudiesPage.meta.description,
  url: `${brand.url}/case-studies`,
};

export default function CaseStudiesPage() {
  const { hero, grid, details, stats, cta } = caseStudiesPage;

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Skip to content */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main">
        {/* ============ Section 3.1 — Hero + Intro ============ */}
        <section
          id="customer-proof"
          className="section-pad cstud-hero"
          aria-label={hero.eyebrow}
        >
          <div className="container">
            <Reveal className="hero-inner">
              <div className="cstud-hero-bar" aria-hidden="true" />
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1 className="hero-h1">{hero.h1}</h1>
              <p className="subcopy body-lg">{hero.subcopy}</p>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 3.2 — Case Studies Grid ============ */}
        <section
          id="stories"
          className="section-pad"
          aria-labelledby="stories-heading"
        >
          <div className="container">
            <h2 id="stories-heading" className="sr-only">
              {grid.heading}
            </h2>
            <ul className="case-study-grid cstud-stories-grid" role="list">
              {grid.cards.map((card) => (
                <Reveal
                  key={card.name}
                  as="li"
                  className="case-study-card"
                  role="listitem"
                >
                  <div className="cstud-card-head">
                    <span className="industry-chip">{card.industry}</span>
                    {card.logo && (
                      <span className="trust-logo" data-placeholder>
                        {card.logo}
                      </span>
                    )}
                  </div>
                  <h3 className="heading-sm">{card.name}</h3>
                  <p className="cs-outcome" data-placeholder>
                    {card.outcome}
                  </p>
                  <dl className="cs-stats">
                    {card.stats.map((stat) => (
                      <div key={stat.label} className="cs-stat cstud-stat" data-placeholder>
                        <dt className="cs-stat-label">{stat.label}</dt>
                        <dd className="cs-stat-num">{stat.num}</dd>
                      </div>
                    ))}
                  </dl>
                  <a
                    href={card.cta.href}
                    className="btn btn-ghost"
                    aria-label={card.cta.ariaLabel}
                  >
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Section 3.3 — Case Study Detail (×3) ============ */}
        {details.map((detail) => (
          <section
            key={detail.id}
            id={detail.id}
            className={`section-pad cstud-detail${detail.alt ? " cstud-detail-alt" : ""}`}
            aria-labelledby={detail.headingId}
          >
            <div className="container">
              <Reveal className="cstud-detail-head" as="header">
                <div className="cstud-detail-meta">
                  <span className="industry-chip">{detail.industry}</span>
                  {detail.logo && (
                    <span className="trust-logo" data-placeholder>
                      {detail.logo}
                    </span>
                  )}
                  <span className="cstud-detail-name">{detail.name}</span>
                </div>
                <h2
                  id={detail.headingId}
                  className="display-lg cstud-detail-headline"
                  data-placeholder
                >
                  {detail.headline}
                </h2>
              </Reveal>

              <div className="cstud-detail-grid">
                {detail.subs.map((sub) => (
                  <Reveal key={sub.title} className="cstud-detail-sub">
                    <h3 className="heading-sm">
                      <Icon name={sub.icon} width={20} height={20} />
                      {sub.title}
                    </h3>
                    <p className="body-md" data-placeholder>
                      {sub.body}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <dl className="cstud-detail-stats" aria-label={detail.statsLabel}>
                  {detail.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="cstud-detail-stat"
                      data-placeholder
                    >
                      <dt className="stat-label">{stat.label}</dt>
                      <dd className="stat-num stat-number">{stat.num}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal as="figure" className="cstud-quote">
                <blockquote>
                  <p data-placeholder>{detail.quote.text}</p>
                </blockquote>
                <figcaption className="testimonial-author">
                  <span className="author-avatar" aria-hidden="true">
                    {detail.quote.initials}
                  </span>
                  <span className="cstud-quote-meta">
                    <span className="author-name" data-placeholder>
                      {detail.quote.name}
                    </span>
                    <span className="author-role" data-placeholder>
                      {detail.quote.role}
                    </span>
                  </span>
                </figcaption>
              </Reveal>
            </div>
          </section>
        ))}

        {/* ============ Section 3.4 — Stats Summary ============ */}
        <section
          id="stats-band"
          className="section-pad"
          aria-labelledby="stats-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <h2 id="stats-heading" className="display-lg" data-placeholder>
                {stats.intro.heading}
              </h2>
              <p className="subcopy body-lg">{stats.intro.subcopy}</p>
            </Reveal>
            <Reveal
              className="stats-band-gradient"
              style={{ marginTop: "var(--space-8)" }}
            >
              <dl className="stats-grid-gradient cstud-aggregate">
                {stats.items.map((stat) => (
                  <div key={stat.label} className="stat-block" data-placeholder>
                    <dt className="stat-label">{stat.label}</dt>
                    <dd className="stat-num stat-number">{stat.num}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 3.5 — CTA Band ============ */}
        <section id="cta-band" className="section-pad">
          <div className="cta-band-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="cta-inner">
              <span className="eyebrow">{cta.eyebrow}</span>
              <h2 className="display-lg">{cta.heading}</h2>
              <p className="subcopy body-lg">{cta.subcopy}</p>
              <div className="cta-buttons">
                <a href={cta.primary.href} className="btn btn-primary">
                  {cta.primary.label}
                </a>
                <a href={cta.secondary.href} className="btn btn-secondary-dark">
                  {cta.secondary.label}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
