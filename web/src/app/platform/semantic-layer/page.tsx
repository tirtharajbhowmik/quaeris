import type { Metadata } from "next";
import "./platform-semantic-layer.css";
import { platformSemanticLayerPage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Database,
  Zap,
  Check,
  Code,
  GitBranch,
  Users,
  BarChart3,
  Lock,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: platformSemanticLayerPage.meta.title,
  description: platformSemanticLayerPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  database: Database,
  zap: Zap,
  check: Check,
  code: Code,
  "git-branch": GitBranch,
  users: Users,
  "bar-chart-3": BarChart3,
  lock: Lock,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// ── JSON-LD: SoftwareApplication + BreadcrumbList + WebPage + FAQPage ──
const pageUrl = `${brand.url}/platform/semantic-layer`;

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `${brand.name} Smart Semantic Layer`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: platformSemanticLayerPage.meta.description,
  url: pageUrl,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: brand.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Platform",
      item: `${brand.url}/platform`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Semantic Layer",
      item: pageUrl,
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: platformSemanticLayerPage.meta.title,
  description: platformSemanticLayerPage.meta.description,
  url: pageUrl,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: platformSemanticLayerPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PlatformSemanticLayerPage() {
  const {
    hero,
    problem,
    howItWorks,
    why,
    comparison,
    anatomy,
    useCases,
    gettingStarted,
    proof,
    deepDive,
    faq,
    cta,
  } = platformSemanticLayerPage;

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
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
        {/* ============ Section 0 — Hero ============ */}
        <section id="hero" aria-labelledby="hero-heading">
          <div className="hero-purple-wash" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="container section-pad">
            <div className="hero-inner">
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1 id="hero-heading" className="hero-h1">
                {hero.h1} <span className="accent-line">{hero.accentLine}</span>
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
              <div className="trust-badges" aria-label="Platform trust badges">
                {hero.trust.map((t) => (
                  <span key={t.text} className="badge badge-accent sem-badge">
                    <Icon name={t.icon} />
                    {t.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ Section 1 — The Problem / The Answer ============ */}
        <section
          id="problem"
          className="section-pad"
          aria-label="The problem and the answer"
        >
          <div className="container">
            <div className="ps-grid" style={{ marginTop: 0 }}>
              {problem.cards.map((card) => (
                <Reveal key={card.heading} className="ps-card" as="article">
                  <span
                    className="eyebrow"
                    style={{
                      color:
                        card.tone === "accent"
                          ? "var(--brand-accent)"
                          : "var(--text-tertiary)",
                    }}
                  >
                    {card.eyebrow}
                  </span>
                  <h2 className="display-md">{card.heading}</h2>
                  <p
                    className="body-md"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {card.emphasis ? renderEmphasis(card.body, card.emphasis) : card.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 2 — How It Works (FeatureRow ×3) ============ */}
        <section
          id="how-it-works"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="how-heading"
        >
          <div className="container">
            <div className="section-header methodology-header">
              <h2 id="how-heading" className="display-lg">
                {howItWorks.intro.heading}
              </h2>
            </div>

            <div className="feature-rows-list">
              {howItWorks.steps.map((step, i) => {
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
                    {step.cta && (
                      <a href={step.cta.href} className="btn btn-ghost">
                        {step.cta.label}
                      </a>
                    )}
                  </Reveal>
                );
                const visual = (
                  <Reveal className="feature-row-visual">
                    <div
                      className="feature-row-img-wrap feature-row-img-fallback sem-diagram"
                      data-placeholder
                      role="img"
                      aria-label={stepVisualLabels[i]}
                    >
                      {stepVisuals[i]}
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

        {/* ============ Section 3 — Why Auto-Learning Wins ============ */}
        <section
          id="why-auto-learning"
          className="section-pad"
          aria-labelledby="why-heading"
        >
          <div className="container">
            <div className="section-header center">
              <h2 id="why-heading" className="display-lg">
                {why.intro.heading}
              </h2>
            </div>

            <div className="icon-feature-grid icon-feature-grid--3">
              {why.items.map((item, i) => (
                <Reveal key={item.title} className="icon-feature" delay={i * 60}>
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

        {/* ============ Section 4 — Comparison Matrix ============ */}
        <section
          id="comparison"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="comparison-heading"
        >
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow">{comparison.intro.eyebrow}</span>
              <h2 id="comparison-heading" className="display-lg">
                {comparison.intro.heading}
              </h2>
            </div>

            <Reveal style={{ marginTop: "var(--space-8)" }}>
              <div
                className="compare-table-wrap"
                role="region"
                aria-labelledby="comparison-heading"
                tabIndex={0}
              >
                <table className="compare-table">
                  <caption className="sr-only">
                    Feature comparison of the {brand.name} Smart Semantic Layer
                    against dbt Semantic Layer, Cube, AtScale, and Looker LookML
                  </caption>
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
                        {row.cells.map((cell, ci) => (
                          <td
                            key={ci}
                            className={
                              comparison.table.columns[ci + 1]?.highlight
                                ? "compare-col-quaeris"
                                : undefined
                            }
                          >
                            {cell.value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <p className="compare-note sem-table-note">
              Feature comparison current as of June 2026. See detailed comparison
              pages for{" "}
              <a href={comparison.noteLinks[0].href}>
                {comparison.noteLinks[0].label}
              </a>{" "}
              and{" "}
              <a href={comparison.noteLinks[1].href}>
                {comparison.noteLinks[1].label}
              </a>{" "}
              for deeper analysis.
            </p>

            <div
              style={{ textAlign: "center", marginTop: "var(--space-7)" }}
            >
              <a href={comparison.cta.href} className="btn btn-secondary">
                {comparison.cta.label}
              </a>
            </div>
          </div>
        </section>

        {/* ============ Section 5 — Inside the Semantic Layer ============ */}
        <section
          id="anatomy"
          className="section-pad"
          style={{
            background: "var(--bg-warm)",
            borderTop: "1px solid var(--border-subtle)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
          aria-labelledby="anatomy-heading"
        >
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow">{anatomy.intro.eyebrow}</span>
              <h2 id="anatomy-heading" className="display-lg">
                {anatomy.intro.heading}
              </h2>
              <p className="subcopy body-lg">{anatomy.intro.subcopy}</p>
            </div>

            <div className="sem-anatomy-grid">
              {anatomy.cards.map((card) => (
                <Reveal key={card.eyebrow} className="card" as="article">
                  <span
                    className="eyebrow"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    {card.eyebrow}
                  </span>
                  <h3
                    className="heading-sm"
                    style={{ marginTop: "var(--space-3)" }}
                  >
                    {card.heading}
                  </h3>
                  <dl className="sem-spec-list">
                    {card.specs.map((spec) => (
                      <div key={spec.term}>
                        <dt>{spec.term}</dt>
                        <dd>
                          {spec.code ? (
                            <code className="sem-code">{spec.detail}</code>
                          ) : (
                            spec.detail
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 6 — Use Cases ============ */}
        <section
          id="use-cases"
          className="section-pad"
          aria-labelledby="use-cases-heading"
        >
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow">{useCases.intro.eyebrow}</span>
              <h2 id="use-cases-heading" className="display-lg">
                {useCases.intro.heading}
              </h2>
            </div>

            <div className="segment-cards-grid segment-cards-grid--4">
              {useCases.cards.map((card) => (
                <Reveal key={card.label} className="segment-card" as="article">
                  <div className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="segment-label heading-sm">{card.label}</h3>
                  <p className="segment-desc body-sm">{card.desc}</p>
                  <a href={card.href} className="btn btn-ghost">
                    Learn more
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 7 — Getting Started ============ */}
        <section
          id="getting-started"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="getting-started-heading"
        >
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow">{gettingStarted.intro.eyebrow}</span>
              <h2 id="getting-started-heading" className="display-lg">
                {gettingStarted.intro.heading}
              </h2>
            </div>

            <div className="sem-acc-wrap">
              <div className="accordion">
                {gettingStarted.items.map((item) => (
                  <details
                    key={item.id}
                    className="accordion-item sem-acc-item"
                    open={item.defaultOpen}
                  >
                    <summary className="accordion-trigger">
                      <span className="sem-acc-head">
                        <span className="eyebrow">{item.eyebrow}</span>
                        <span className="accordion-question">
                          {item.question}
                        </span>
                      </span>
                      <span className="accordion-icon" aria-hidden="true">
                        <ChevronDown style={{ width: 14, height: 14 }} />
                      </span>
                    </summary>
                    <div className="sem-acc-body">
                      {item.paragraphs.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ Section 8 — Proof ============ */}
        <section id="proof" className="section-pad" aria-labelledby="proof-heading">
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow">{proof.intro.eyebrow}</span>
              <h2 id="proof-heading" className="display-lg">
                {proof.intro.heading}
              </h2>
            </div>

            <div className="sem-proof-grid">
              <Reveal className="case-study-card" as="article">
                <span className="industry-chip" data-placeholder>
                  {proof.caseStudy.industry}
                </span>
                <h3 className="heading-sm" data-placeholder>
                  {proof.caseStudy.name}
                </h3>
                <div className="cs-stats">
                  <div className="cs-stat">
                    <span className="cs-stat-num" data-placeholder>
                      {proof.caseStudy.statNum}
                    </span>
                    <span className="cs-stat-label">
                      {proof.caseStudy.statLabel}
                    </span>
                  </div>
                </div>
                <p className="cs-outcome">
                  &ldquo;
                  <span data-placeholder>{proof.caseStudy.quote}</span>
                  &rdquo;
                </p>
                <a href={proof.caseStudy.cta.href} className="btn btn-ghost">
                  {proof.caseStudy.cta.label}
                </a>
              </Reveal>

              <Reveal className="testimonial-card" as="figure">
                <blockquote className="testimonial-quote">
                  &ldquo;
                  <span data-placeholder>{proof.testimonial.quote}</span>
                  &rdquo;
                </blockquote>
                <figcaption className="testimonial-author" data-placeholder>
                  <span className="author-avatar" aria-hidden="true">
                    ··
                  </span>
                  <span>
                    <span className="author-name">{proof.testimonial.name}</span>
                    <br />
                    <span className="author-role">
                      {proof.testimonial.company}
                    </span>
                  </span>
                </figcaption>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 9 — Deep Dive ============ */}
        <section
          id="deep-dive"
          className="section-pad sem-editorial-bg"
          aria-labelledby="deep-dive-heading"
        >
          <div className="container">
            <Reveal className="editorial-inner">
              <span className="eyebrow editorial-eyebrow">
                {deepDive.eyebrow}
              </span>
              <h2 id="deep-dive-heading" className="display-lg editorial-headline">
                {deepDive.heading}
              </h2>
              <div className="editorial-prose body-md">
                <p>{deepDive.paragraphs[0]}</p>
                <p>{renderEmphasis(deepDive.paragraphs[1], "from usage")}</p>
                <blockquote className="editorial-pullquote">
                  <p>{deepDive.pullquote}</p>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 10 — FAQ ============ */}
        <section id="faq" className="section-pad" aria-labelledby="faq-heading">
          <div className="container">
            <div className="faq-grid">
              <div className="section-header">
                <span className="eyebrow">{faq.intro.eyebrow}</span>
                <h2 id="faq-heading" className="display-lg">
                  {faq.intro.heading}
                </h2>
                <Reveal className="faq-mini-card" data-placeholder>
                  <p
                    className="heading-sm"
                    style={{
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {faq.miniCard.title}
                  </p>
                  <p>{faq.miniCard.body}</p>
                  <a href={faq.miniCard.cta.href} className="btn btn-primary">
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

        {/* ============ Section 11 — CTA Band (light) ============ */}
        <section
          id="cta"
          className="section-pad sem-cta-light"
          aria-labelledby="cta-heading"
        >
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
                  <a href={cta.secondary.href} className="btn btn-secondary">
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

// Render a body string with a single <em> emphasis fragment, content-driven.
function renderEmphasis(body: string, emphasis: string): React.ReactNode {
  const idx = body.indexOf(emphasis);
  if (idx === -1) return body;
  return (
    <>
      {body.slice(0, idx)}
      <em>{emphasis}</em>
      {body.slice(idx + emphasis.length)}
    </>
  );
}

// Decorative how-it-works visuals (presentation only — kept inline per the
// mockup; not content). Token-driven SVGs, one per step. Accessible labels
// live in stepVisualLabels and are applied to the wrapper role="img".
const stepVisualLabels: string[] = [
  "Semantic layer learning engine analyzing user questions to infer metric definitions",
  "Data engineer certifying and versioning a revenue metric definition",
  "Answer with full metric lineage and governance metadata",
];

const stepVisuals: React.ReactNode[] = [
  <svg
    key="s1"
    viewBox="0 0 600 400"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect x="42" y="56" width="232" height="104" rx="14" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.45" strokeWidth="2" />
    <rect x="64" y="82" width="172" height="12" rx="6" fill="currentColor" fillOpacity="0.3" />
    <rect x="64" y="106" width="128" height="12" rx="6" fill="currentColor" fillOpacity="0.18" />
    <circle cx="64" cy="186" r="10" fill="currentColor" fillOpacity="0.25" />
    <rect x="84" y="178" width="120" height="12" rx="6" fill="currentColor" fillOpacity="0.14" />
    <path d="M288 108 L348 108" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" fill="none" />
    <path d="M340 102 L350 108 L340 114" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="448" cy="110" r="34" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" />
    <rect x="372" y="222" width="120" height="48" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2" />
    <rect x="372" y="294" width="120" height="48" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
    <rect x="120" y="258" width="120" height="48" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
    <path d="M448 144 L432 222" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" fill="none" />
    <path d="M448 144 L440 294" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" fill="none" />
    <path d="M414 110 L240 268" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" fill="none" />
  </svg>,
  <svg
    key="s2"
    viewBox="0 0 600 400"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect x="80" y="48" width="440" height="304" rx="16" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.45" strokeWidth="2" />
    <rect x="112" y="84" width="180" height="16" rx="8" fill="currentColor" fillOpacity="0.32" />
    <rect x="112" y="124" width="376" height="1.5" fill="currentColor" fillOpacity="0.25" />
    <rect x="112" y="152" width="240" height="12" rx="6" fill="currentColor" fillOpacity="0.16" />
    <rect x="112" y="180" width="296" height="12" rx="6" fill="currentColor" fillOpacity="0.16" />
    <rect x="112" y="208" width="200" height="12" rx="6" fill="currentColor" fillOpacity="0.16" />
    <rect x="112" y="260" width="104" height="36" rx="10" fill="currentColor" fillOpacity="0.18" />
    <rect x="232" y="260" width="104" height="36" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
    <circle cx="452" cy="92" r="26" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="2" />
    <path d="M441 92 L449 100 L464 84" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="384" y="260" width="104" height="36" rx="18" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="5 5" />
  </svg>,
  <svg
    key="s3"
    viewBox="0 0 600 400"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect x="48" y="64" width="220" height="120" rx="14" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
    <rect x="70" y="90" width="120" height="20" rx="6" fill="currentColor" fillOpacity="0.34" />
    <rect x="70" y="126" width="160" height="10" rx="5" fill="currentColor" fillOpacity="0.18" />
    <rect x="70" y="146" width="132" height="10" rx="5" fill="currentColor" fillOpacity="0.18" />
    <circle cx="356" cy="124" r="18" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="452" cy="76" r="14" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <circle cx="476" cy="160" r="14" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <circle cx="420" cy="248" r="14" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="2" />
    <circle cx="524" cy="252" r="14" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="2" />
    <circle cx="476" cy="330" r="14" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
    <path d="M268 124 L338 124" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" fill="none" />
    <path d="M372 114 L440 82" stroke="currentColor" strokeWidth="2" strokeOpacity="0.55" fill="none" />
    <path d="M373 130 L462 154" stroke="currentColor" strokeWidth="2" strokeOpacity="0.55" fill="none" />
    <path d="M468 172 L428 236" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" fill="none" />
    <path d="M482 174 L518 240" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" fill="none" />
    <path d="M424 262 L468 320" stroke="currentColor" strokeWidth="2" strokeOpacity="0.28" fill="none" />
    <path d="M520 266 L484 320" stroke="currentColor" strokeWidth="2" strokeOpacity="0.28" fill="none" />
  </svg>,
];
