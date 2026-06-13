import type { Metadata } from "next";
import "./platform-audit.css";
import { platformAuditPage, brand } from "@/config/brand.config";
import type { PlatformAuditShotRow } from "@/config/page-types/platform-audit";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Lock,
  History,
  Link as LinkIcon,
  CircleCheck,
  FileText,
  CircleAlert,
  BarChart3,
  GitBranch,
  Globe,
  ShieldCheck,
  Download,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: platformAuditPage.meta.title,
  description: platformAuditPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  lock: Lock,
  history: History,
  link: LinkIcon,
  "circle-check": CircleCheck,
  "file-text": FileText,
  "circle-alert": CircleAlert,
  "bar-chart-3": BarChart3,
  "git-branch": GitBranch,
  globe: Globe,
  "shield-check": ShieldCheck,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: SoftwareApplication + FAQPage + BreadcrumbList
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: platformAuditPage.meta.description,
  url: `${brand.url}/platform/audit`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: platformAuditPage.faq.items.map((item) => ({
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Platform",
      item: `${brand.url}/platform`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Audit Trail",
      item: `${brand.url}/platform/audit`,
    },
  ],
};

export default function PlatformAuditPage() {
  const {
    hero,
    problems,
    architecture,
    auditLog,
    capabilities,
    useCases,
    comparison,
    faq,
    cta,
    newsletter,
  } = platformAuditPage;

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
          id="audit-hero"
          className="section-pad"
          style={{
            background: "var(--bg-surface)",
            position: "relative",
            overflow: "hidden",
          }}
          aria-labelledby="audit-hero-heading"
        >
          <div className="hero-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="hero-inner">
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1
                id="audit-hero-heading"
                className="display-lg"
                style={{ maxWidth: "22ch" }}
              >
                {hero.h1}
              </h1>
              <p className="subcopy body-lg">{hero.subcopy}</p>
              <div className="hero-buttons" style={{ marginBottom: 0 }}>
                <a href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </a>
                <a href={hero.secondaryCta.href} className="btn btn-secondary">
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 3.2 — The problem: Why audit trails matter ============ */}
        <section
          id="why-audit-trails"
          className="section-pad"
          aria-labelledby="why-audit-trails-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{problems.intro.eyebrow}</span>
              <h2 id="why-audit-trails-heading" className="display-lg">
                {problems.intro.heading}
              </h2>
            </Reveal>

            <div className="ps-grid">
              {problems.cards.map((card) => (
                <Reveal key={card.index} className="ps-card" as="article">
                  <span className="ps-index" aria-hidden="true">
                    {card.index}
                  </span>
                  <h3 className="heading-sm">{card.title}</h3>
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

        {/* ============ 3.3 — The audit trail architecture (FeatureRow ×4) ============ */}
        <section
          id="architecture"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="architecture-heading"
        >
          <div className="container">
            <Reveal className="section-header methodology-header">
              <span className="eyebrow">{architecture.intro.eyebrow}</span>
              <h2 id="architecture-heading" className="display-lg">
                {architecture.intro.heading}
              </h2>
            </Reveal>

            <div className="feature-rows-list">
              {architecture.steps.map((step, i) => {
                const flip = i % 2 === 1;
                const text = (
                  <Reveal className="feature-row-text">
                    <span className="eyebrow feature-row-eyebrow">
                      {step.eyebrow}
                    </span>
                    <h3 className="display-md feature-row-heading">
                      {step.heading}
                    </h3>
                    <p className="feature-row-body body-md">{step.body}</p>
                    <a href={step.cta.href} className="btn btn-ghost">
                      {step.cta.label}
                    </a>
                  </Reveal>
                );
                const visual = (
                  <Reveal className="feature-row-visual">
                    <div
                      className="product-shot"
                      role="img"
                      aria-label={step.shot.ariaLabel}
                    >
                      <span className="product-shot-label eyebrow">
                        {step.shot.label}
                      </span>
                      {step.shot.rows.map((row: PlatformAuditShotRow, ri: number) => (
                        <div key={ri} className="product-shot-row">
                          <span>
                            {row.text}
                            {row.strong && <strong>{row.strong}</strong>}
                            {row.textAfter}
                            {row.strongAfter && <strong>{row.strongAfter}</strong>}
                          </span>
                          {row.pill ? (
                            <span
                              className={`status-pill status-pill-${row.pill.tone}`}
                            >
                              {row.pill.label}
                            </span>
                          ) : row.rightText || row.rightStrong ? (
                            <span>
                              {row.rightText}
                              {row.rightStrong && <strong>{row.rightStrong}</strong>}
                            </span>
                          ) : null}
                        </div>
                      ))}
                    </div>
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

        {/* ============ 3.4 — Live audit dashboard (AuditLogMock) ============ */}
        <section
          id="audit-log"
          className="section-ink section-pad"
          aria-labelledby="audit-log-heading"
        >
          <div className="dark-feature-glow" aria-hidden="true" />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <Reveal className="section-header center section-header-dark">
              <span className="eyebrow">{auditLog.intro.eyebrow}</span>
              <h2 id="audit-log-heading" className="display-lg">
                {auditLog.intro.heading}
              </h2>
            </Reveal>

            <Reveal
              className="metric-dashboard"
              style={{ marginTop: "var(--space-8)" }}
            >
              <div className="metric-dashboard-header">
                <span>{auditLog.panelLabel}</span>
                <span>{auditLog.panelMeta}</span>
              </div>
              <div
                className="audit-log-scroll"
                role="region"
                aria-label="Sample audit log entries (scrollable)"
                tabIndex={0}
              >
                <table
                  className="audit-log-table"
                  aria-describedby="audit-log-caption"
                >
                  <thead>
                    <tr>
                      {auditLog.columns.map((col) => (
                        <th key={col} scope="col">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {auditLog.rows.map((row) => (
                      <tr key={row.timestamp}>
                        <td className="audit-log-num">{row.timestamp}</td>
                        <td>{row.user}</td>
                        <td className="audit-log-question">{row.question}</td>
                        <td>
                          <span
                            className={`status-pill status-pill-${row.status.tone}`}
                          >
                            {row.status.label}
                          </span>
                        </td>
                        <td>{row.metrics}</td>
                        <td>{row.access}</td>
                        <td className="audit-log-num">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                id="audit-log-caption"
                className="chart-caption"
                style={{ marginTop: "var(--space-4)" }}
              >
                {auditLog.caption}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ 3.5 — Key audit capabilities (IconFeatureGrid, 2-up) ============ */}
        <section
          id="capabilities"
          className="section-pad"
          aria-labelledby="capabilities-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{capabilities.intro.eyebrow}</span>
              <h2 id="capabilities-heading" className="display-lg">
                {capabilities.intro.heading}
              </h2>
            </Reveal>

            <div className="icon-feature-grid audit-grid-2">
              {capabilities.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  className="card icon-feature"
                  as="article"
                  delay={i * 60}
                >
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

        {/* ============ 3.6 — Use cases (SegmentCards, 4-up) ============ */}
        <section
          id="use-cases"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="use-cases-heading"
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
                  key={card.label}
                  as="a"
                  href={card.href}
                  className="segment-card"
                  role="listitem"
                >
                  <span className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </span>
                  <h3 className="heading-sm segment-label">{card.label}</h3>
                  <p className="body-sm segment-desc">{card.desc}</p>
                  <span className="btn btn-ghost">{card.ctaLabel}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.7 — Comparison: Audit trail across BI platforms ============ */}
        <section
          id="comparison"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="comparison-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{comparison.intro.eyebrow}</span>
              <h2 id="comparison-heading" className="display-lg">
                {comparison.intro.heading}
              </h2>
            </Reveal>

            <Reveal style={{ marginTop: "var(--space-8)" }}>
              <div
                className="compare-table-wrap"
                role="region"
                aria-label="Audit trail capability comparison across BI platforms (scrollable)"
                tabIndex={0}
              >
              <table
                className="compare-table audit-compare-table"
                aria-describedby="comparison-footnote"
              >
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
                        const highlight = comparison.table.columns[ci + 1]?.highlight;
                        return (
                          <td
                            key={ci}
                            className={highlight ? "compare-col-quaeris" : undefined}
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
            {comparison.table.note && (
              <Reveal>
                <p id="comparison-footnote" className="compare-note">
                  {comparison.table.note}
                </p>
              </Reveal>
            )}
          </div>
        </section>

        {/* ============ 3.8 — FAQ: Audit trail specifics ============ */}
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
                {faq.miniCard && (
                  <Reveal className="faq-mini-card">
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

        {/* ============ 3.9 — CTA Band ============ */}
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
                    <Download
                      width={18}
                      height={18}
                      aria-hidden="true"
                    />
                    {cta.secondary.label}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 3.10 — Newsletter ============ */}
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
                  type="email"
                  id="newsletter-email"
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
                {newsletter.consentPrefix}{" "}
                <a
                  href={newsletter.privacyHref}
                  style={{ textDecoration: "underline" }}
                >
                  {newsletter.privacyLabel}
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
