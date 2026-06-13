import type { Metadata } from "next";
import "./solutions-finance.css";
import { solutionsFinancePage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Shield,
  TrendingUp,
  TrendingDown,
  Zap,
  AlertCircle,
  Lock,
  Check,
  BookOpen,
  BarChart4,
  Brain,
  CheckSquare,
  LineChart,
  FileCheck,
  Globe,
  Users,
  FileText,
  Database,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: solutionsFinancePage.meta.title,
  description: solutionsFinancePage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  shield: Shield,
  "trending-up": TrendingUp,
  "trending-down": TrendingDown,
  zap: Zap,
  "alert-circle": AlertCircle,
  lock: Lock,
  "book-open": BookOpen,
  "bar-chart-4": BarChart4,
  brain: Brain,
  "check-square": CheckSquare,
  "line-chart": LineChart,
  "file-check": FileCheck,
  globe: Globe,
  users: Users,
  "file-text": FileText,
  database: Database,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: BreadcrumbList + WebPage + FAQPage (spec §6 — include this page in
// the FAQPage schema; BreadcrumbList sitewide per the mockup SEO note).
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
      name: "Finance",
      item: `${brand.url}/solutions/finance`,
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: solutionsFinancePage.meta.title,
  description: solutionsFinancePage.meta.description,
  url: `${brand.url}/solutions/finance`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: solutionsFinancePage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SolutionsFinancePage() {
  const {
    hero,
    problem,
    howItWorks,
    why,
    useCases,
    stats,
    compliance,
    testimonials,
    faq,
    cta,
    newsletter,
  } = solutionsFinancePage;

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
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
        {/* ============ Section 3.1 — Finance Hero ============ */}
        <section id="hero" aria-labelledby="hero-heading">
          <div className="hero-purple-wash" aria-hidden="true" />
          <div className="container section-pad">
            <div className="fin-hero-grid">
              <Reveal className="hero-inner">
                <span className="eyebrow">{hero.eyebrow}</span>
                <h1 id="hero-heading" className="hero-h1">
                  {hero.h1}{" "}
                  <span className="accent-line">{hero.h1Accent}</span>
                </h1>
                <p className="subcopy body-lg">{hero.subcopy}</p>
                <div className="hero-buttons">
                  <a href={hero.primaryCta.href} className="btn btn-primary">
                    {hero.primaryCta.label}
                  </a>
                  <a href={hero.secondaryCta.href} className="btn btn-secondary">
                    {hero.secondaryCta.label}
                  </a>
                </div>
                <ul className="fin-trust-strip" role="list">
                  {hero.trust.map((t) => (
                    <li key={t.title} className="fin-trust-item">
                      <Icon name={t.icon} />
                      <p>
                        <strong>{t.title}</strong> <span>{t.proof}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Spec 3.1 hero visual: placeholder financial KPI dashboard */}
              <Reveal>
                <div
                  className="fin-hero-dash"
                  role="img"
                  aria-label={hero.dashboard.ariaLabel}
                  data-placeholder
                >
                  <span className="eyebrow fin-hero-dash-eyebrow">
                    {hero.dashboard.label}
                  </span>
                  <div className="fin-kpi-grid" aria-hidden="true">
                    {hero.dashboard.kpis.map((kpi) => (
                      <div key={kpi.label} className="fin-kpi">
                        <span className="fin-kpi-label">{kpi.label}</span>
                        <span className="fin-kpi-value">{kpi.value}</span>
                        <span
                          className={`fin-kpi-delta${kpi.down ? " down" : ""}`}
                        >
                          {kpi.delta}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="fin-hero-chart" aria-hidden="true">
                    <svg viewBox="0 0 300 96" fill="none">
                      <g fill="currentColor">
                        <rect x="10" y="48" width="16" height="40" opacity="0.25" rx="2" />
                        <rect x="30" y="42" width="16" height="46" rx="2" />
                        <rect x="58" y="40" width="16" height="48" opacity="0.25" rx="2" />
                        <rect x="78" y="44" width="16" height="44" rx="2" />
                        <rect x="106" y="36" width="16" height="52" opacity="0.25" rx="2" />
                        <rect x="126" y="30" width="16" height="58" rx="2" />
                        <rect x="154" y="42" width="16" height="46" opacity="0.25" rx="2" />
                        <rect x="174" y="46" width="16" height="42" rx="2" />
                        <rect x="202" y="32" width="16" height="56" opacity="0.25" rx="2" />
                        <rect x="222" y="26" width="16" height="62" rx="2" />
                        <rect x="250" y="38" width="16" height="50" opacity="0.25" rx="2" />
                        <rect x="270" y="31" width="16" height="57" rx="2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 3.2 — The Problem ============ */}
        <section
          id="problem"
          className="section-pad"
          aria-labelledby="problem-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {problem.intro.eyebrow}
              </span>
              <h2 id="problem-heading" className="display-lg">
                {problem.intro.heading}
              </h2>
              <p className="subcopy body-lg">{problem.intro.subcopy}</p>
            </Reveal>

            <div className="ps-grid ps-grid--3">
              {problem.cards.map((card) => (
                <Reveal key={card.title} className="ps-card" as="article">
                  <span className="icon-box">
                    <Icon name={card.icon} />
                  </span>
                  <h3 className="heading-sm">{card.title}</h3>
                  <p className="ps-problem body-md">{card.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.3 — How Quaeris Solves It ============ */}
        <section
          id="how-it-works"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="how-it-works-heading"
        >
          <div className="container">
            <Reveal className="section-header center methodology-header">
              <span className="eyebrow" data-placeholder>
                {howItWorks.intro.eyebrow}
              </span>
              <h2 id="how-it-works-heading" className="display-lg">
                {howItWorks.intro.heading}
              </h2>
              <p className="subcopy body-lg">{howItWorks.intro.subcopy}</p>
            </Reveal>

            <div className="feature-rows-list">
              {howItWorks.steps.map((step, i) => {
                // Even rows: text left / visual right. Odd rows: flipped via
                // CSS `order` on the children (DOM order stays text→visual).
                const flip = i % 2 === 1;
                return (
                  <Reveal
                    key={step.heading}
                    className={`feature-row${flip ? " feature-row-flip" : ""}`}
                  >
                    <div className="feature-row-text">
                      <span className="eyebrow feature-row-eyebrow">
                        {step.eyebrow}
                      </span>
                      <h3 className="display-md feature-row-heading">
                        {step.heading}
                      </h3>
                      <p className="feature-row-body body-md">{step.body}</p>
                      <ul className="fin-bullets">
                        {step.bullets.map((b) => (
                          <li key={b}>
                            <Check aria-hidden="true" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={step.cta.href} className="btn btn-ghost">
                        {step.cta.label}
                      </a>
                    </div>
                    <div className="feature-row-visual">
                      <div className="feature-row-img-wrap">
                        <div
                          className="fin-shot"
                          role="img"
                          aria-label={step.shot.ariaLabel}
                          data-placeholder
                        >
                          <span className="eyebrow product-shot-label">
                            {step.shot.label}
                          </span>
                          {step.shot.query && (
                            <p className="query-user">{step.shot.query}</p>
                          )}
                          {step.shot.rows.map((row) => (
                            <div key={row.term} className="product-shot-row">
                              <span>
                                <strong>{row.term}</strong>
                                {row.rest}
                              </span>
                              <span className="status-pill status-pill-allow">
                                {row.ok}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ Section 3.4 — Why Finance Teams Choose Quaeris ============ */}
        <section
          id="why-quaeris"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="why-quaeris-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {why.intro.eyebrow}
              </span>
              <h2 id="why-quaeris-heading" className="display-lg">
                {why.intro.heading}
              </h2>
              <p className="subcopy body-lg">{why.intro.subcopy}</p>
            </Reveal>

            <div className="icon-feature-grid">
              {why.items.map((item, i) => (
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

        {/* ============ Section 3.5 — Vertical Proof: Finance Use Cases ============ */}
        <section
          id="use-cases"
          className="section-pad"
          aria-labelledby="use-cases-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {useCases.intro.eyebrow}
              </span>
              <h2 id="use-cases-heading" className="display-lg">
                {useCases.intro.heading}
              </h2>
              <p className="subcopy body-lg">{useCases.intro.subcopy}</p>
            </Reveal>

            <div className="segment-cards-grid segment-cards-grid--6">
              {useCases.cards.map((card) => (
                <Reveal key={card.title} className="segment-card" as="article">
                  <span className="segment-icon-box">
                    <Icon name={card.icon} />
                  </span>
                  <h3 className="heading-sm segment-label">{card.title}</h3>
                  <span className="eyebrow fin-uc-meta">
                    {card.scenarioLabel}
                  </span>
                  <p className="body-sm segment-desc fin-uc-scenario">
                    {card.scenario}
                  </p>
                  <span className="eyebrow fin-uc-meta">{card.howLabel}</span>
                  <p className="body-sm fin-uc-how">{card.how}</p>
                  <div className="fin-uc-outcome">
                    <span className="eyebrow fin-uc-outcome-label">
                      {card.outcomeLabel}
                    </span>
                    <p className="body-sm fin-uc-outcome-text">
                      {card.outcome}
                    </p>
                  </div>
                  <a href={card.cta.href} className="btn btn-ghost" data-placeholder>
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.6 — Numbers That Matter ============ */}
        <section
          id="stats-band"
          className="section-pad"
          aria-labelledby="stats-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {stats.intro.eyebrow}
              </span>
              <h2 id="stats-heading" className="display-lg">
                {stats.intro.heading}
              </h2>
            </Reveal>

            <Reveal className="stats-grid" style={{ marginTop: "var(--space-8)" }}>
              {stats.items.map((stat) => (
                <div key={stat.label} className="stat-block" data-placeholder>
                  <span className="stat-num stat-number">{stat.num}</span>
                  <span className="stat-label">{stat.label}</span>
                  <p className="body-sm fin-stat-context">{stat.desc}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ Section 3.7 — Technical Proof: Compliance ============ */}
        <section
          id="compliance"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="compliance-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {compliance.intro.eyebrow}
              </span>
              <h2 id="compliance-heading" className="display-lg">
                {compliance.intro.heading}
              </h2>
              <p className="subcopy body-lg">{compliance.intro.subcopy}</p>
            </Reveal>

            <div className="fin-trustblock-grid">
              {compliance.cards.map((card) => (
                <Reveal
                  key={card.title}
                  className="card fin-trust-badge"
                  as="article"
                  {...(card.placeholder ? { "data-placeholder": true } : {})}
                  {...(card.placeholderVerify
                    ? { "data-placeholder-verify": true }
                    : {})}
                >
                  <span className="icon-box">
                    <Icon name={card.icon} />
                  </span>
                  <h3 className="heading-sm">{card.title}</h3>
                  <p className="body-sm">{card.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.8 — Customer Voices ============ */}
        <section
          id="testimonials"
          className="section-pad"
          aria-labelledby="testimonials-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {testimonials.intro.eyebrow}
              </span>
              <h2 id="testimonials-heading" className="display-lg">
                {testimonials.intro.heading}
              </h2>
              <p className="subcopy body-lg">{testimonials.intro.subcopy}</p>
            </Reveal>

            <div className="fin-testimonial-grid">
              {testimonials.cards.map((card) => (
                <Reveal
                  key={card.title}
                  className="testimonial-card"
                  as="article"
                >
                  <h3 className="heading-sm testimonial-title">{card.title}</h3>
                  <p className="testimonial-quote">{card.quote}</p>
                  <div className="testimonial-author" data-placeholder>
                    <span className="author-avatar" aria-hidden="true">
                      {card.initials}
                    </span>
                    <div>
                      <p className="author-name">{card.name}</p>
                      <p className="author-role">{card.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 3.9 — FAQ ============ */}
        <section id="faq" className="section-pad" aria-labelledby="faq-heading">
          <div className="container">
            <div className="faq-grid">
              <Reveal className="section-header">
                <span className="eyebrow" data-placeholder>
                  {faq.intro.eyebrow}
                </span>
                <h2 id="faq-heading" className="display-lg">
                  {faq.intro.heading}
                </h2>
                <p className="subcopy body-lg">{faq.intro.subcopy}</p>
              </Reveal>

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
                  {newsletter.inputLabel}
                </label>
                <input
                  className="newsletter-input"
                  id="newsletter-email"
                  type="email"
                  name="email"
                  placeholder={newsletter.placeholder}
                  autoComplete="email"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  {newsletter.cta}
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
