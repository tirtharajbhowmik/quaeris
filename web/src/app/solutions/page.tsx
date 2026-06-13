import type { Metadata } from "next";
import "./solutions.css";
import { solutionsPage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Database,
  BarChart2,
  Briefcase,
  Landmark,
  HeartPulse,
  Factory,
  TriangleAlert,
  Clock,
  ShieldOff,
  FileCheck,
  ShoppingCart,
  HardHat,
  Check,
  Key,
  Brain,
  ScrollText,
  Files,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: solutionsPage.meta.title,
  description: solutionsPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  database: Database,
  "bar-chart-2": BarChart2,
  briefcase: Briefcase,
  landmark: Landmark,
  "heart-pulse": HeartPulse,
  factory: Factory,
  "triangle-alert": TriangleAlert,
  clock: Clock,
  "shield-off": ShieldOff,
  "file-check": FileCheck,
  "shopping-cart": ShoppingCart,
  "hard-hat": HardHat,
  check: Check,
  key: Key,
  brain: Brain,
  "scroll-text": ScrollText,
  files: Files,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: BreadcrumbList + WebPage (about → pillar hub) + FAQPage (spec §2).
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: brand.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: `${brand.url}/solutions`,
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: solutionsPage.meta.title,
  description: solutionsPage.meta.description,
  url: `${brand.url}/solutions`,
  about: { "@id": `${brand.url}/governed-ai-analytics` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: solutionsPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SolutionsPage() {
  const {
    hero,
    problems,
    byTeam,
    stats,
    byIndustry,
    differentiators,
    proof,
    integrations,
    faq,
    cta,
  } = solutionsPage;

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
        {/* ============ Section 01 — Page Hero ============ */}
        <section
          id="solutions-hero"
          className="sol-hero section-pad"
          aria-labelledby="solutions-hero-heading"
        >
          <div className="container">
            <div className="sol-hero-grid">
              <Reveal className="sol-hero-copy">
                <span className="eyebrow sol-kicker">{hero.eyebrow}</span>
                <h1 id="solutions-hero-heading" className="hero-h1">
                  {hero.h1}
                </h1>
                <p className="body-lg sol-hero-sub">{hero.subcopy}</p>
                <div className="hero-buttons" style={{ marginBottom: 0 }}>
                  <a href={hero.primaryCta.href} className="btn btn-primary">
                    {hero.primaryCta.label}
                  </a>
                  <a href={hero.ghostCta.href} className="btn btn-secondary">
                    {hero.ghostCta.label}
                  </a>
                </div>
              </Reveal>

              <Reveal
                as="ul"
                className="sol-hero-cards"
                aria-label={hero.cardsLabel}
              >
                {hero.cards.map((card) => (
                  <li key={card.label} className="segment-card">
                    <span className="segment-icon-box" aria-hidden="true">
                      <Icon name={card.icon} />
                    </span>
                    <span className="heading-sm segment-label">
                      {card.label}
                    </span>
                    <p className="body-sm segment-desc">{card.desc}</p>
                  </li>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 02 — Problem Strip ============ */}
        <section
          id="problems"
          className="section-pad"
          aria-labelledby="problems-heading"
          style={{
            background: "var(--bg-canvas)",
            borderTop: "1px solid var(--border-subtle)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow sol-kicker">{problems.intro.eyebrow}</span>
              <h2 id="problems-heading" className="display-lg">
                {problems.intro.heading}
              </h2>
            </Reveal>

            <div className="sol-problem-grid">
              {problems.cards.map((card) => (
                <Reveal key={card.heading} className="ps-card" as="article">
                  <span className="icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </span>
                  <h3 className="heading-sm">{card.heading}</h3>
                  <p
                    className="body-md"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {card.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 03 — By Team ============ */}
        <section
          id="by-team"
          className="section-pad"
          aria-labelledby="by-team-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow sol-kicker">{byTeam.intro.eyebrow}</span>
              <h2 id="by-team-heading" className="display-lg">
                {byTeam.intro.heading}
              </h2>
              <p className="subcopy body-lg">{byTeam.intro.subcopy}</p>
            </Reveal>

            <div className="sol-grid-3">
              {byTeam.cards.map((card) => (
                <Reveal key={card.heading} className="segment-card" as="article">
                  <span className="eyebrow sol-kicker">{card.eyebrow}</span>
                  <h3 className="heading-sm segment-label">{card.heading}</h3>
                  <p className="body-md segment-desc">{card.body}</p>
                  <ul className="sol-check-list">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>
                        <Icon name="check" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <a href={card.cta.href} className="btn btn-ghost">
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 04 — Stat Band (dark) ============ */}
        <section
          id="outcomes"
          className="section-pad sol-stats-dark"
          aria-label={stats.ariaLabel}
        >
          <div className="container">
            <Reveal className="stats-grid">
              {stats.items.map((stat) => (
                <div key={stat.label} className="stat-block">
                  <span
                    className="stat-num stat-number"
                    {...(stat.num.includes("XX")
                      ? {
                          "data-placeholder": true,
                          "aria-label":
                            "Placeholder — awaiting verified figure",
                        }
                      : {
                          "aria-label": stat.num === "0" ? "Zero" : stat.num,
                        })}
                  >
                    {stat.num}
                  </span>
                  {stat.desc && (
                    <span className="sol-stat-desc">{stat.desc}</span>
                  )}
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </Reveal>
            <p className="sol-stats-note" data-placeholder>
              {stats.note}
            </p>
          </div>
        </section>

        {/* ============ Section 05 — By Industry ============ */}
        <section
          id="by-industry"
          className="section-pad"
          aria-labelledby="by-industry-heading"
          style={{ background: "var(--bg-canvas)" }}
        >
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow sol-kicker">
                {byIndustry.intro.eyebrow}
              </span>
              <h2 id="by-industry-heading" className="display-lg">
                {byIndustry.intro.heading}
              </h2>
              <p className="subcopy body-lg">{byIndustry.intro.subcopy}</p>
            </Reveal>

            <div className="sol-grid-3">
              {byIndustry.cards.map((card) => (
                <Reveal key={card.heading} className="segment-card" as="article">
                  <span className="segment-icon-box" aria-hidden="true">
                    {card.icon && <Icon name={card.icon} />}
                  </span>
                  <h3 className="heading-sm segment-label">{card.heading}</h3>
                  <p className="body-md segment-desc">{card.body}</p>
                  <ul className="sol-check-list">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>
                        <Icon name="check" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <a href={card.cta.href} className="btn btn-ghost">
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 06 — Differentiator Feature Rows ============ */}
        <section
          id="differentiators"
          className="section-pad"
          aria-labelledby="differentiators-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal
              className="section-header center"
              style={{ marginBottom: "var(--space-9)" }}
            >
              <h2 id="differentiators-heading" className="display-lg">
                {differentiators.intro.heading}
              </h2>
              <p className="subcopy body-lg">
                {differentiators.intro.subcopy}
              </p>
            </Reveal>

            <div className="feature-rows-list">
              {differentiators.rows.map((row, i) => {
                // Mockup: rows 1 & 3 (index 0, 2) are flipped (image left, text
                // right) via the .feature-row-flip CSS `order:`; DOM order stays
                // text-then-visual in every row, matching the mockup verbatim.
                const flip = i % 2 === 0;
                return (
                  <Reveal
                    key={row.heading}
                    className={`feature-row${flip ? " feature-row-flip" : ""}`}
                  >
                    <div className="feature-row-text">
                      <span className="eyebrow feature-row-eyebrow">
                        {row.eyebrow}
                      </span>
                      <h3 className="heading-sm feature-row-heading">
                        {row.heading}
                      </h3>
                      <p className="feature-row-body body-md">{row.body}</p>
                      {row.cta && (
                        <a href={row.cta.href} className="btn btn-ghost">
                          <Icon name={row.ctaIcon} className="sol-ico-18" />
                          {row.cta.label}
                        </a>
                      )}
                    </div>
                    <div className="feature-row-visual">
                      <div className="feature-row-img-wrap">
                        <div className="sol-img-ph" data-placeholder>
                          {imgPlaceholderSvg}
                          <span>{row.imagePlaceholder}</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ Section 07 — Social Proof Anchor ============ */}
        <section
          id="proof"
          className="section-pad"
          aria-labelledby="proof-heading"
        >
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow sol-kicker">{proof.intro.eyebrow}</span>
              <h2 id="proof-heading" className="display-lg">
                {proof.intro.heading}
              </h2>
              <p className="subcopy body-lg" data-placeholder>
                {proof.intro.subcopy}
              </p>
            </Reveal>

            <div className="sol-proof-grid">
              {proof.cards.map((card) => (
                <Reveal
                  key={card.industry}
                  className="case-study-card"
                  as="article"
                >
                  <span className="industry-chip" data-placeholder>
                    {card.industry}
                  </span>
                  <h3 className="heading-sm" data-placeholder>
                    {card.client}
                  </h3>
                  <p className="cs-outcome" data-placeholder>
                    {card.outcome}
                  </p>
                  <div className="cs-stats" data-placeholder>
                    {card.metrics.map((m, mi) => (
                      <div key={mi} className="cs-stat">
                        <span className="cs-stat-num">{m.num}</span>
                        <span className="cs-stat-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <a href={card.cta.href} className="btn btn-ghost" data-placeholder>
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 08 — Integrations Strip ============ */}
        <section
          id="integrations"
          className="sol-integrations"
          aria-label={integrations.ariaLabel}
        >
          <div className="container">
            <span className="eyebrow sol-kicker sol-integrations-label">
              {integrations.label}
            </span>
            <ul className="sol-integrations-row">
              {integrations.badges.map((badge) => (
                <li key={badge} className="industry-chip">
                  {badge}
                </li>
              ))}
            </ul>
            <div className="sol-integrations-cta">
              <a href={integrations.cta.href} className="btn btn-ghost">
                {integrations.cta.label}
              </a>
            </div>
          </div>
        </section>

        {/* ============ Section 09 — FAQ ============ */}
        <section id="faq" className="section-pad" aria-labelledby="faq-heading">
          <div className="container">
            <div className="faq-grid">
              <Reveal className="section-header">
                <span className="eyebrow sol-kicker">{faq.intro.eyebrow}</span>
                <h2 id="faq-heading" className="display-lg">
                  {faq.intro.heading}
                </h2>
              </Reveal>

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
          <div className="cta-band-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="cta-inner">
              <span className="eyebrow">{cta.eyebrow}</span>
              <h2 id="cta-heading" className="display-lg">
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
      </main>

      <SiteFooter />
    </>
  );
}

// Decorative image-placeholder SVG (presentation only — kept inline per the
// mockup; identical across all four differentiator rows). Token-driven.
const imgPlaceholderSvg = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);
