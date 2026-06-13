import type { Metadata } from "next";
import "./solutions-executives.css";
import { solutionsExecutivesPage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  ShieldCheck,
  ShieldAlert,
  Lock,
  Database,
  Link as LinkIcon,
  TrendingUp,
  BarChart3,
  ClipboardCheck,
  AlertTriangle,
  Calculator,
  FileText,
  GitBranch,
  ScrollText,
  Server,
  Cpu,
  Search,
  Check,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: solutionsExecutivesPage.meta.title,
  description: solutionsExecutivesPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "shield-alert": ShieldAlert,
  lock: Lock,
  database: Database,
  link: LinkIcon,
  "trending-up": TrendingUp,
  "bar-chart-3": BarChart3,
  "clipboard-check": ClipboardCheck,
  "alert-triangle": AlertTriangle,
  calculator: Calculator,
  "file-text": FileText,
  "git-branch": GitBranch,
  "scroll-text": ScrollText,
  server: Server,
  cpu: Cpu,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: BreadcrumbList + SoftwareApplication + FAQPage (spec §9.5)
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
      name: "Executives",
      item: `${brand.url}/solutions/executives`,
    },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: solutionsExecutivesPage.meta.description,
  url: `${brand.url}/solutions/executives`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: solutionsExecutivesPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SolutionsExecutivesPage() {
  const { hero, problem, valueDrivers, useCases, speed, proof, governance, faq, cta } =
    solutionsExecutivesPage;

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
        {/* ============ Section 02 — Hero ============ */}
        <section
          id="exec-hero"
          className="exec-hero section-pad"
          aria-labelledby="exec-hero-heading"
        >
          <div className="exec-hero-line" aria-hidden="true" />
          <div className="container">
            <Reveal className="hero-inner">
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1 id="exec-hero-heading" className="hero-h1">
                {hero.h1}
              </h1>
              <p className="body-lg subcopy">{hero.subcopy}</p>
              <div className="hero-buttons">
                <a
                  href={hero.primaryCta.href}
                  className="btn btn-primary"
                  aria-label={hero.primaryCta.ariaLabel}
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.ghostCta.href}
                  className="btn btn-ghost"
                  aria-label={hero.ghostCta.ariaLabel}
                >
                  {hero.ghostCta.label}
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

        {/* ============ Section 03 — Problem/Solution Cards ============ */}
        <section
          id="problem"
          className="section-pad"
          aria-labelledby="problem-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{problem.intro.eyebrow}</span>
              <h2 id="problem-heading" className="display-lg">
                {problem.intro.heading}
              </h2>
              <p className="body-lg subcopy">{problem.intro.subcopy}</p>
            </Reveal>

            <div className="ps-grid ps-grid--3" role="list">
              {problem.cards.map((card) => (
                <Reveal
                  key={card.index}
                  className="ps-card"
                  as="article"
                  role="listitem"
                >
                  <span className="ps-index" aria-hidden="true">
                    {card.index}
                  </span>
                  <h3 className="heading-sm">{card.title}</h3>
                  <p className="body-md ps-problem">{card.problem}</p>
                  <div className="ps-fix-box">
                    <span className="ps-fix-label eyebrow">{card.fixLabel}</span>
                    <p className="body-md ps-fix-body">{card.fixBody}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 04 — Three Value Drivers ============ */}
        <section
          id="value-drivers"
          className="section-pad"
          aria-labelledby="value-drivers-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{valueDrivers.intro.eyebrow}</span>
              <h2 id="value-drivers-heading" className="display-lg">
                {valueDrivers.intro.heading}
              </h2>
              <p className="body-lg subcopy">{valueDrivers.intro.subcopy}</p>
            </Reveal>

            <div className="icon-feature-grid icon-feature-grid--3" role="list">
              {valueDrivers.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  className="icon-feature"
                  delay={i * 60}
                  role="listitem"
                >
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

        {/* ============ Section 05 — Executive Use Cases ============ */}
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
              <p className="body-lg subcopy">{useCases.intro.subcopy}</p>
              <p className="body-sm exec-usecase-note">{useCases.note}</p>
            </Reveal>

            <div className="bento-grid" role="list">
              {useCases.cards.map((card) => (
                <Reveal
                  key={card.title}
                  className="bento-card exec-usecase-card"
                  as="article"
                  role="listitem"
                >
                  <div className="exec-usecase-head">
                    <div className="icon-box" aria-hidden="true">
                      <Icon name={card.icon} />
                    </div>
                    <h3 className="heading-sm">{card.title}</h3>
                  </div>
                  <p className="exec-usecase-q">{card.question}</p>
                  <div className="exec-usecase-a" data-placeholder>
                    <span className="exec-usecase-a-label">{card.answerLabel}</span>
                    <p>{card.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 06 — The Speed Advantage ============ */}
        <section
          id="how-it-works"
          className="section-pad"
          aria-labelledby="how-it-works-heading"
          style={{ background: "var(--bg-warm)" }}
        >
          <div className="container">
            <div className="feature-row">
              <Reveal className="feature-row-text">
                <span className="eyebrow feature-row-eyebrow">
                  {speed.eyebrow}
                </span>
                <h2
                  id="how-it-works-heading"
                  className="display-lg feature-row-heading"
                >
                  {speed.heading}
                </h2>
                <p className="body-md feature-row-body">{speed.body}</p>
                <div>
                  <a
                    href={speed.cta.href}
                    className="btn btn-secondary"
                    aria-label={speed.cta.ariaLabel}
                  >
                    {speed.cta.label}
                  </a>
                </div>
              </Reveal>

              <Reveal className="feature-row-visual">
                <div className="exec-query-panel" data-placeholder>
                  <div className="exec-query-input">
                    <Search aria-hidden="true" />
                    <span>{speed.panel.query}</span>
                  </div>
                  <div className="exec-query-metrics">
                    {speed.panel.metrics.map((metric) => (
                      <div key={metric.label} className="exec-query-metric">
                        <span className="exec-query-metric-label">
                          {metric.label}
                        </span>
                        <span className="exec-query-metric-value">
                          {metric.value}
                        </span>
                        <span className="exec-query-metric-badge">
                          <Check aria-hidden="true" />
                          {metric.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="exec-query-meta">
                    {speed.panel.meta.map((row) => (
                      <div key={row.text} className="exec-query-meta-row">
                        <Icon name={row.icon} />
                        <span>{row.text}</span>
                      </div>
                    ))}
                  </div>
                  <p className="exec-query-caption">{speed.panel.caption}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 07 — Proof: Customer Outcome Cards ============ */}
        <section
          id="customer-proof"
          className="section-pad"
          aria-labelledby="customer-proof-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{proof.intro.eyebrow}</span>
              <h2 id="customer-proof-heading" className="display-lg">
                {proof.intro.heading}
              </h2>
              <p className="body-lg subcopy">{proof.intro.subcopy}</p>
            </Reveal>

            <div className="case-study-grid" role="list">
              {proof.cards.map((card) => (
                <Reveal
                  key={card.industry}
                  className="case-study-card"
                  as="article"
                  role="listitem"
                >
                  <span className="industry-chip">{card.industry}</span>
                  <h3 className="heading-sm">{card.role}</h3>
                  <blockquote className="cs-outcome" data-placeholder>
                    {card.outcome}
                  </blockquote>
                  <div className="cs-stats" data-placeholder>
                    {card.stats.map((stat) => (
                      <div key={stat.label} className="cs-stat">
                        <span className="cs-stat-num">{stat.num}</span>
                        <span className="cs-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="cs-how">
                    <span className="trust-logo" data-placeholder>
                      {card.logoNote}
                    </span>
                  </div>
                  <a
                    href={card.cta.href}
                    className="btn btn-ghost"
                    aria-label={card.cta.ariaLabel}
                  >
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 08 — Governance & Compliance Assurance ============ */}
        <section
          id="governance"
          className="section-pad"
          aria-labelledby="governance-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{governance.intro.eyebrow}</span>
              <h2 id="governance-heading" className="display-lg">
                {governance.intro.heading}
              </h2>
              <p className="body-lg subcopy">{governance.intro.subcopy}</p>
            </Reveal>

            <div className="segment-cards-grid" role="list">
              {governance.cards.map((card) => (
                <Reveal
                  key={card.title}
                  className="segment-card"
                  as="article"
                  role="listitem"
                >
                  <div className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="heading-sm segment-label">{card.title}</h3>
                  <p
                    className="body-sm segment-desc"
                    {...(card.placeholder ? { "data-placeholder": true } : {})}
                  >
                    {card.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 09 — FAQ ============ */}
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
                  <h3
                    className="heading-sm"
                    style={{ marginBottom: "var(--space-3)" }}
                  >
                    {faq.miniCard.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    {faq.miniCard.body}
                  </p>
                  <a
                    href={faq.miniCard.cta.href}
                    className="btn btn-secondary"
                    style={{ fontSize: "14px", padding: "10px 22px" }}
                    aria-label={faq.miniCard.cta.ariaLabel}
                  >
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

        {/* ============ Section 10 — CTA Band ============ */}
        <section
          id="cta-band"
          className="section-pad"
          aria-labelledby="cta-heading"
        >
          <div className="exec-cta-topline" aria-hidden="true" />
          <div className="cta-band-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="cta-inner">
              <span className="eyebrow">{cta.eyebrow}</span>
              <h2 id="cta-heading" className="display-lg">
                {cta.heading}
              </h2>
              <p className="body-lg subcopy">{cta.subcopy}</p>
              <div className="cta-buttons">
                <a
                  href={cta.primary.href}
                  className="btn btn-primary"
                  aria-label={cta.primary.ariaLabel}
                >
                  {cta.primary.label}
                </a>
                {cta.secondary && (
                  <a
                    href={cta.secondary.href}
                    className="btn btn-secondary-dark"
                    aria-label={cta.secondary.ariaLabel}
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
