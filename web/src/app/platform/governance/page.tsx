import type { Metadata } from "next";
import "./platform-governance.css";
import { platformGovernancePage, brand } from "@/config/brand.config";
import type { PlatformGovernancePageContent } from "@/config/page-types/platform-governance";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Target,
  CheckCircle,
  GitBranch,
  ScrollText,
  ShieldCheck,
  BadgeCheck,
  Globe,
  HeartPulse,
  Award,
  Download,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: platformGovernancePage.meta.title,
  description: platformGovernancePage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  target: Target,
  "check-circle": CheckCircle,
  "git-branch": GitBranch,
  "scroll-text": ScrollText,
  "shield-check": ShieldCheck,
  "badge-check": BadgeCheck,
  globe: Globe,
  "heart-pulse": HeartPulse,
  award: Award,
  download: Download,
};

function Icon({
  name,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: SoftwareApplication + FAQPage + BreadcrumbList (spec §2)
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: platformGovernancePage.meta.description,
  url: `${brand.url}/platform/governance`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: platformGovernancePage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Platform", item: `${brand.url}/platform` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Governance",
      item: `${brand.url}/platform/governance`,
    },
  ],
};

export default function PlatformGovernancePage() {
  const {
    hero,
    certifiedMetrics,
    policy,
    audit,
    compliance,
    comparison,
    caseStudy,
    faq,
    trust,
    cta,
  }: PlatformGovernancePageContent = platformGovernancePage;

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Skip to content */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main">
        {/* ============ 3.1 — Hero ============ */}
        <section
          id="gov-hero"
          className="gov-hero section-pad"
          aria-labelledby="gov-hero-heading"
        >
          <div className="cta-band-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="gov-hero-inner">
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1 id="gov-hero-heading" className="display-lg">
                {hero.h1}
              </h1>
              <p className="gov-hero-sub body-lg">{hero.subcopy}</p>
              <div className="hero-buttons" style={{ marginBottom: 0 }}>
                <a href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="btn btn-secondary-dark"
                  data-placeholder
                >
                  <Icon name="download" width={18} height={18} />
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 3.2 — Certified Metrics ============ */}
        <section
          id="certified-metrics"
          className="section-pad"
          aria-labelledby="certified-metrics-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {certifiedMetrics.intro.eyebrow}
              </span>
              <h2 id="certified-metrics-heading" className="display-lg">
                {certifiedMetrics.intro.heading}
              </h2>
              <p className="subcopy body-lg">{certifiedMetrics.intro.subcopy}</p>
            </Reveal>

            <div className="icon-feature-grid icon-feature-grid--3">
              {certifiedMetrics.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  className="card icon-feature"
                  as="article"
                  delay={i * 60}
                >
                  <span className="icon-box">
                    <Icon name={item.icon} />
                  </span>
                  <h3 className="heading-sm">{item.title}</h3>
                  <p>{item.body}</p>
                  <span
                    className="gov-accent-bar"
                    style={{ marginTop: "auto" }}
                    aria-hidden="true"
                  />
                </Reveal>
              ))}
            </div>

            <div className="proof-cta">
              <a href={certifiedMetrics.proofCta.href} className="btn btn-ghost">
                {certifiedMetrics.proofCta.label}
              </a>
            </div>
          </div>
        </section>

        {/* ============ 3.3 — Policy Enforcement ============ */}
        <section
          id="policy-enforcement"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="policy-enforcement-heading"
        >
          <div className="container">
            <Reveal className="section-header methodology-header">
              <span className="eyebrow" data-placeholder>
                {policy.intro.eyebrow}
              </span>
              <h2 id="policy-enforcement-heading" className="display-lg">
                {policy.intro.heading}
              </h2>
              <p className="subcopy body-lg">{policy.intro.subcopy}</p>
            </Reveal>

            <div className="feature-rows-list">
              {policy.rows.map((row, i) => {
                const flip = i % 2 === 1;
                const text = (
                  <div className="feature-row-text">
                    <span className="eyebrow feature-row-eyebrow">
                      {row.eyebrow}
                    </span>
                    <h3 className="display-md feature-row-heading">
                      {row.heading}
                    </h3>
                    <p className="feature-row-body body-md">{row.body}</p>
                    {row.cta && (
                      <a href={row.cta.href} className="btn btn-ghost">
                        {row.cta.label}
                      </a>
                    )}
                  </div>
                );
                const visual = (
                  <div className="feature-row-visual">
                    <div
                      className="product-shot"
                      role="img"
                      aria-label={row.shotAlt}
                      data-placeholder
                    >
                      <span className="product-shot-label">{row.shotLabel}</span>
                      {row.shotRows.map((sr, si) => (
                        <div key={si} className="product-shot-row">
                          <span>
                            {sr.strong && <strong>{sr.strong}</strong>}
                            {sr.text}
                          </span>
                          {sr.status && (
                            <span
                              className={`status-pill status-pill-${sr.status}`}
                            >
                              {sr.statusLabel}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
                // Source order stays text → visual; `.feature-row-flip`
                // reorders the columns via CSS on alternating rows.
                return (
                  <Reveal
                    key={row.heading}
                    className={`feature-row${flip ? " feature-row-flip" : ""}`}
                  >
                    {text}
                    {visual}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ 3.4 — Audit Trail ============ */}
        <section
          id="audit-trail"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="audit-trail-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {audit.intro.eyebrow}
              </span>
              <h2 id="audit-trail-heading" className="display-lg">
                {audit.intro.heading}
              </h2>
              <p className="subcopy body-lg">{audit.intro.subcopy}</p>
            </Reveal>

            <div className="gov-audit-grid">
              {audit.cards.map((card, i) => (
                <Reveal
                  key={card.title}
                  className="card gov-audit-card"
                  as="article"
                  delay={i * 60}
                >
                  <span className="icon-box">
                    <Icon name={card.icon} />
                  </span>
                  <h3 className="heading-sm">{card.title}</h3>
                  <p>{card.body}</p>
                  <div className="gov-audit-log" data-placeholder>
                    <div className="gov-audit-log-head">{card.logHead}</div>
                    {card.logRows.map((lr, li) => (
                      <div key={li} className="gov-audit-log-row">
                        <span>
                          <strong>{lr.strong}</strong>
                          {lr.lead}
                        </span>
                        {lr.status ? (
                          <span
                            className={`gov-audit-mark gov-audit-mark-${lr.status}`}
                          >
                            {lr.value}
                          </span>
                        ) : (
                          <span>{lr.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.5 — Compliance Frameworks ============ */}
        <section
          id="compliance"
          className="section-pad"
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

            <div className="bento-grid">
              {compliance.cards.map((card, i) => (
                <Reveal
                  key={card.title}
                  className={`bento-card gov-bento-accent${i < 2 ? " gov-bento-tall" : ""}`}
                  as="article"
                >
                  <h3
                    className="display-md"
                    style={{ marginBottom: "var(--space-3)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="body-md" style={{ color: "var(--text-secondary)" }}>
                    {card.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.6 — Comparison (#architecture) ============ */}
        <section
          id="architecture"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="architecture-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {comparison.intro.eyebrow}
              </span>
              <h2 id="architecture-heading" className="display-lg">
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
                  <p className="ps-problem body-lg">
                    <strong>{card.problemLead}</strong>
                    {card.problem}
                  </p>
                  <div className="ps-fix-box">
                    <span className="ps-fix-label eyebrow">{card.fixLabel}</span>
                    <p className="ps-fix-body body-md">{card.fixBody}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.7 — Proof / Case Study ============ */}
        <section
          id="case-study"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-label="Customer proof"
        >
          <div className="container">
            <Reveal
              className="case-study-card"
              as="article"
              style={{ maxWidth: "760px", margin: "0 auto" }}
            >
              <span className="industry-chip">{caseStudy.industry}</span>
              <p
                className="body-sm"
                style={{ color: "var(--text-tertiary)" }}
                data-placeholder
              >
                {caseStudy.client}
              </p>
              <h3 className="display-md">{caseStudy.outcome}</h3>
              <div className="cs-stats">
                {caseStudy.metrics.map((m, mi) => (
                  <div key={mi} className="cs-stat">
                    <span className="cs-stat-num">{m.num}</span>
                    <span className="cs-stat-label">{m.label}</span>
                  </div>
                ))}
              </div>
              <p className="cs-how">{caseStudy.how}</p>
              <a href={caseStudy.cta.href} className="btn btn-ghost" data-placeholder>
                {caseStudy.cta.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ 3.8 — FAQ ============ */}
        <section id="faq" className="section-pad" aria-labelledby="faq-heading">
          <div className="container">
            <div className="faq-grid">
              <div>
                <Reveal className="section-header">
                  <span className="eyebrow" data-placeholder>
                    {faq.intro.eyebrow}
                  </span>
                  <h2 id="faq-heading" className="display-lg">
                    {faq.intro.heading}
                  </h2>
                </Reveal>
                {faq.miniCard && (
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
                )}
              </div>

              <Reveal>
                <Accordion items={faq.items} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ 3.9 — Trust Signals ============ */}
        <section
          id="trust"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="trust-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" data-placeholder>
                {trust.intro.eyebrow}
              </span>
              <h2 id="trust-heading" className="display-lg">
                {trust.intro.heading}
              </h2>
            </Reveal>

            <Reveal
              className="stats-band-gradient"
              style={{ marginTop: "var(--space-8)" }}
            >
              <div className="stats-grid-gradient">
                {trust.stats.map((stat, si) => (
                  <div key={stat.label} className="stat-block">
                    <span
                      className="stat-num stat-number"
                      {...(si === 1 ? { "data-placeholder": true } : {})}
                    >
                      {stat.num}
                    </span>
                    <span className="stat-label">{stat.label}</span>
                    <p
                      className="body-sm"
                      style={{
                        color: "var(--text-tertiary)",
                        marginTop: "var(--space-2)",
                      }}
                    >
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="gov-badge-grid">
              {trust.badges.map((badge) => (
                <Reveal key={badge.title} className="card gov-badge-card" as="article">
                  <span className="icon-box">
                    <Icon name={badge.icon} />
                  </span>
                  <h3 className="heading-sm">{badge.title}</h3>
                  <p style={{ color: "var(--text-secondary)" }}>{badge.desc}</p>
                  <p
                    style={{ color: "var(--text-tertiary)", marginTop: "auto" }}
                    data-placeholder
                  >
                    {badge.note}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.10 — CTA Band ============ */}
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
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
