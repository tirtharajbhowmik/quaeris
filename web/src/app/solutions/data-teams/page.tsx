import type { Metadata } from "next";
import "./solutions-data-teams.css";
import { solutionsDataTeamsPage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Lock,
  UserCheck,
  Search,
  TrendingUp,
  CheckCircle,
  Eye,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: solutionsDataTeamsPage.meta.title,
  description: solutionsDataTeamsPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  lock: Lock,
  "user-check": UserCheck,
  search: Search,
  "trending-up": TrendingUp,
  "check-circle": CheckCircle,
  eye: Eye,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: WebPage + SoftwareApplication + FAQPage (8 Q&As)
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: solutionsDataTeamsPage.meta.title,
  description: solutionsDataTeamsPage.meta.description,
  url: `${brand.url}/solutions/data-teams`,
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: solutionsDataTeamsPage.meta.description,
  url: `${brand.url}/solutions/data-teams`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: solutionsDataTeamsPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SolutionsDataTeamsPage() {
  const {
    hero,
    problem,
    stats,
    howItWorks,
    features,
    caseStudies,
    faq,
    governance,
    comparison,
    cta,
    newsletter,
  } = solutionsDataTeamsPage;

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
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
        <section id="hero" aria-labelledby="hero-heading">
          <div className="hero-purple-wash" aria-hidden="true" />
          <div className="container section-pad">
            <div className="dt-hero-grid">
              <Reveal className="hero-inner">
                <span className="eyebrow">{hero.eyebrow}</span>
                <h1 id="hero-heading" className="hero-h1">
                  {hero.h1}
                </h1>
                <p className="subcopy body-lg">{hero.subcopy}</p>
                <div className="hero-buttons" style={{ marginBottom: 0 }}>
                  <a href={hero.primaryCta.href} className="btn btn-primary">
                    {hero.primaryCta.label}
                  </a>
                </div>
              </Reveal>

              <Reveal>
                <div
                  className="dt-query-panel"
                  role="img"
                  aria-label={hero.panel.ariaLabel}
                  data-placeholder
                >
                  <span
                    className="eyebrow"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {hero.panel.eyebrow}
                  </span>
                  <p className="dt-query-q">{hero.panel.question}</p>
                  {hero.panel.rows.map((row) => (
                    <div key={row.strong} className="dt-query-row">
                      <span>
                        {row.label} <strong>{row.strong}</strong>
                      </span>
                      <span className="dt-query-ok">{row.ok}</span>
                    </div>
                  ))}
                  <div className="dt-chip-row" aria-hidden="true">
                    {hero.panel.chips.map((chip) => (
                      <span key={chip} className="dt-chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 3.2 — The Problem ============ */}
        <section
          id="problem-solution"
          className="section-pad"
          aria-labelledby="problem-solution-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {problem.intro.eyebrow}
              </span>
              <h2
                id="problem-solution-heading"
                className="display-lg"
                data-placeholder
              >
                {problem.intro.heading}
              </h2>
            </Reveal>

            <div className="ps-grid ps-grid--3">
              {problem.cards.map((card) => (
                <Reveal key={card.problemTitle} className="ps-card" as="article">
                  <span
                    className="eyebrow"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {card.problemEyebrow}
                  </span>
                  <h3 className="heading-sm">{card.problemTitle}</h3>
                  <p className="ps-problem body-md">{card.problemBody}</p>
                  <div className="ps-fix-box">
                    <span className="ps-fix-label eyebrow">{card.fixLabel}</span>
                    <h4 className="heading-sm">{card.fixTitle}</h4>
                    <p className="ps-fix-body body-md">{card.fixBody}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.3 — Stats / Outcomes Band ============ */}
        <section id="stats-band" className="section-pad" aria-label={stats.label}>
          <div className="container">
            <Reveal className="stats-grid">
              {stats.items.map((stat) => (
                <div key={stat.label} className="stat-block">
                  <span className="stat-num stat-number">{stat.num}</span>
                  <span className="stat-label">{stat.label}</span>
                  <p
                    className="body-sm"
                    style={{
                      color: "var(--text-tertiary)",
                      marginTop: "var(--space-2)",
                    }}
                  >
                    {stat.context}
                  </p>
                  <span className="stat-delta">{stat.delta}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ Section 3.4 — How It Works ============ */}
        <section
          id="how-it-works"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="how-it-works-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{howItWorks.intro.eyebrow}</span>
              <h2 id="how-it-works-heading" className="display-lg">
                {howItWorks.intro.heading}
              </h2>
              <p className="subcopy body-lg">{howItWorks.intro.subcopy}</p>
            </Reveal>

            <div className="icon-feature-grid">
              {howItWorks.items.map((item, i) => (
                <Reveal key={item.title} className="icon-feature" delay={i * 60}>
                  <span className="icon-box" aria-hidden="true">
                    <Icon name={item.icon} />
                  </span>
                  <h3 className="heading-sm">{item.title}</h3>
                  <p>{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.5 — Feature Spotlight (dark) ============ */}
        <section
          id="capabilities"
          className="dt-feature-dark section-pad"
          aria-label={features.intro.heading}
        >
          <div className="dark-feature-glow" aria-hidden="true" />
          <div
            className="container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="feature-rows-list">
              {features.rows.map((row, i) => {
                const flip = i % 2 === 1;
                const text = (
                  <Reveal className="feature-row-text">
                    <span className="eyebrow feature-row-eyebrow">
                      {row.step.eyebrow}
                    </span>
                    <h2 className="display-md feature-row-heading">
                      {row.step.heading}
                    </h2>
                    <p className="feature-row-body body-md">{row.step.body}</p>
                    {row.step.cta && (
                      <a href={row.step.cta.href} className="btn btn-ghost">
                        {row.step.cta.label}
                      </a>
                    )}
                  </Reveal>
                );
                const visual = (
                  <Reveal className="feature-row-visual">
                    <div className="feature-row-img-wrap">
                      <div
                        className="dt-shot"
                        role="img"
                        aria-label={row.shot.ariaLabel}
                        data-placeholder
                      >
                        <span className="eyebrow dt-shot-label">
                          {row.shot.label}
                        </span>
                        {row.shot.rows.map((shotRow, ri) => (
                          <div key={ri} className="dt-shot-row">
                            <span>
                              {shotRow.strong ? (
                                <>
                                  <strong>{shotRow.strong}</strong> {shotRow.text}
                                </>
                              ) : (
                                shotRow.text
                              )}
                            </span>
                            {shotRow.ok && (
                              <span className="dt-shot-ok">{shotRow.ok}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                );
                return (
                  <div
                    key={row.step.heading}
                    className={`feature-row${flip ? " feature-row-flip" : ""}`}
                  >
                    {text}
                    {visual}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ Section 3.6 — Real Outcomes / Case Studies ============ */}
        <section
          id="case-studies"
          className="section-pad"
          aria-labelledby="case-studies-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{caseStudies.intro.eyebrow}</span>
              <h2 id="case-studies-heading" className="display-lg">
                {caseStudies.intro.heading}
              </h2>
              <p className="subcopy body-lg">{caseStudies.intro.subcopy}</p>
            </Reveal>

            <div className="case-study-grid">
              {caseStudies.cards.map((card) => (
                <Reveal
                  key={card.industry}
                  className="case-study-card"
                  as="article"
                >
                  <span className="industry-chip">{card.industry}</span>
                  <p
                    className="body-sm"
                    style={{ color: "var(--text-tertiary)" }}
                    data-placeholder
                  >
                    {card.client}
                  </p>
                  <h3 className="display-md">{card.headline}</h3>
                  <div className="cs-stats" aria-label="Key metrics">
                    {card.metrics.map((m, mi) => (
                      <div key={mi} className="cs-stat">
                        <span className="cs-stat-num">{m.num}</span>
                        <span className="cs-stat-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="cs-how">{card.story}</p>
                  <p className="dt-cs-quote" data-placeholder>
                    {card.quote}
                  </p>
                  <a href={card.cta.href} className="btn btn-ghost" data-placeholder>
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.7 — FAQ ============ */}
        <section
          id="faq"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="faq-heading"
        >
          <div className="container">
            <div className="faq-grid">
              <div>
                <Reveal className="section-header">
                  <span className="eyebrow">{faq.intro.eyebrow}</span>
                  <h2 id="faq-heading" className="display-lg">
                    {faq.intro.heading}
                  </h2>
                  <p className="subcopy body-lg">{faq.intro.subcopy}</p>
                </Reveal>
                <Reveal className="faq-mini-card" data-placeholder>
                  <h3
                    className="heading-sm"
                    style={{ marginBottom: "var(--space-3)" }}
                  >
                    {faq.miniCard.title}
                  </h3>
                  <p>{faq.miniCard.body}</p>
                  <a href={faq.miniCard.cta.href} className="btn btn-ghost">
                    {faq.miniCard.cta.label}
                  </a>
                </Reveal>
              </div>

              <Reveal>
                <Accordion items={faq.items} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 3.8 — Governance Deep-Dive ============ */}
        <section
          id="governance"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="governance-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{governance.intro.eyebrow}</span>
              <h2 id="governance-heading" className="display-lg">
                {governance.intro.heading}
              </h2>
              <p className="subcopy body-lg">{governance.intro.subcopy}</p>
            </Reveal>

            <div className="pillars-grid">
              {governance.pillars.map((pillar) => (
                <Reveal key={pillar.title} className="pillar-card" as="article">
                  <div className="pillar-img pillar-img-1">
                    <Icon
                      name={pillar.icon}
                      style={{ color: "var(--brand-accent)" }}
                    />
                  </div>
                  <div className="pillar-body">
                    <h3 className="display-md">{pillar.title}</h3>
                    <p className="body-md">{pillar.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.9 — Competitive Positioning ============ */}
        <section
          id="comparison"
          className="section-pad"
          aria-labelledby="comparison-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{comparison.intro.eyebrow}</span>
              <h2 id="comparison-heading" className="display-lg">
                {comparison.intro.heading}
              </h2>
              <p className="subcopy body-lg">{comparison.intro.subcopy}</p>
            </Reveal>

            <div className="ps-grid">
              {comparison.cards.map((card) => (
                <Reveal key={card.index} className="ps-card" as="article">
                  <span className="ps-index" aria-hidden="true">
                    {card.index}
                  </span>
                  <h3 className="heading-sm">{card.kicker}</h3>
                  <p className="ps-problem body-md">{card.problem}</p>
                  <div className="ps-fix-box">
                    <span className="ps-fix-label eyebrow">{card.fixLabel}</span>
                    <p className="ps-fix-body body-md">{card.fixBody}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.10 — CTA Band ============ */}
        <section
          id="cta-band"
          className="section-pad"
          aria-labelledby="cta-band-heading"
        >
          <div className="cta-band-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="cta-inner">
              <span className="eyebrow">{cta.eyebrow}</span>
              <h2 id="cta-band-heading" className="display-lg">
                {cta.heading}
              </h2>
              <p className="subcopy body-lg">{cta.subcopy}</p>
              <div className="cta-buttons">
                <a href={cta.primary.href} className="btn btn-primary">
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

        {/* ============ Section 3.11 — Newsletter Block ============ */}
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
                  {newsletter.emailLabel}
                </label>
                <input
                  className="newsletter-input"
                  id="newsletter-email"
                  type="email"
                  name="email"
                  placeholder={newsletter.emailPlaceholder}
                  autoComplete="email"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  {newsletter.submitLabel}
                </button>
              </form>
              <p className="newsletter-consent">
                {newsletter.consentLead}
                <a
                  href={newsletter.privacy.href}
                  style={{ textDecoration: "underline", color: "inherit" }}
                >
                  {newsletter.privacy.label}
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
