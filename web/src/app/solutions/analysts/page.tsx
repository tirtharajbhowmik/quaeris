import type { Metadata } from "next";
import "./solutions-analysts.css";
import { solutionsAnalystsPage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  CheckCircle,
  GitBranch,
  Lock,
  MessageSquare,
  TrendingUp,
  Check,
  Target,
  Clock,
  Grid3x3,
  AlertTriangle,
  FileQuestion,
  Zap,
  Sparkles,
  FileCheck,
  Microscope,
  AlertCircle,
  Users,
  Share2,
  MessageCircle,
  Code,
  LayoutGrid,
  Mail,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: solutionsAnalystsPage.meta.title,
  description: solutionsAnalystsPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  "check-circle": CheckCircle,
  "git-branch": GitBranch,
  lock: Lock,
  "message-square": MessageSquare,
  "trending-up": TrendingUp,
  check: Check,
  target: Target,
  clock: Clock,
  "grid-3x3": Grid3x3,
  "alert-triangle": AlertTriangle,
  "file-question": FileQuestion,
  zap: Zap,
  sparkles: Sparkles,
  "file-check": FileCheck,
  microscope: Microscope,
  "alert-circle": AlertCircle,
  users: Users,
  "share-2": Share2,
  "message-circle": MessageCircle,
  code: Code,
  "layout-grid": LayoutGrid,
  mail: Mail,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: BreadcrumbList (/solutions > /solutions/analysts) + FAQPage.
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Solutions",
      item: `${brand.url}/solutions`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Analysts",
      item: `${brand.url}/solutions/analysts`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: solutionsAnalystsPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SolutionsAnalystsPage() {
  const {
    hero,
    stats,
    workflow,
    problem,
    walkthrough,
    capabilities,
    caseStudy,
    testimonials,
    integrations,
    semanticLayer,
    faq,
    cta,
    newsletter,
  } = solutionsAnalystsPage;

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
        {/* ============ Section 01 — Hero ============ */}
        <section id="hero" aria-labelledby="hero-h1">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-purple-wash" aria-hidden="true" />
          <div className="container">
            <div className="ana-hero-grid">
              <Reveal className="hero-inner">
                <span className="eyebrow">{hero.eyebrow}</span>
                <h1 id="hero-h1" className="hero-h1">
                  {hero.h1Lead}
                  <span className="accent-line">{hero.h1Accent}</span>
                  {hero.h1Tail}
                </h1>
                <p className="subcopy body-lg">{hero.subcopy}</p>
                <div className="hero-buttons" style={{ marginBottom: 0 }}>
                  <a className="btn btn-primary" href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                  </a>
                  <a className="btn btn-secondary" href={hero.secondaryCta.href}>
                    {hero.secondaryCta.label}
                  </a>
                </div>
              </Reveal>

              {/* Illustrative mock: analyst question + governed split response */}
              <Reveal className="query-panel" data-placeholder>
                <div className="query-panel-header ana-hero-panel-header">
                  <span>{hero.panelLabel}</span>
                  <span className="badge badge-accent">{hero.panelBadge}</span>
                </div>
                <div className="query-panel-body">
                  <p className="query-user">{hero.question}</p>
                  <div className="query-agent">
                    <p>
                      <strong>{hero.answerLead}</strong>
                      {hero.answerTail}
                    </p>
                    {hero.metaRows.map((row) => (
                      <div
                        key={row.text}
                        className={`ana-meta-row${row.accent ? " ana-meta-accent" : ""}`}
                        style={{ marginTop: "var(--space-3)" }}
                      >
                        <Icon name={row.icon} />
                        <span>{row.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="trust-badges">
                    {hero.answerBadges.map((b) => (
                      <span
                        key={b.label}
                        className={`badge${b.accent ? " badge-accent" : ""}`}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 02 — Quick Win Stats ============ */}
        <section className="section-pad" id="stats" aria-label={stats.eyebrow}>
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{stats.eyebrow}</span>
            </Reveal>
            <Reveal
              className="stats-band-gradient"
              style={{ marginTop: "var(--space-6)" }}
            >
              <div className="stats-grid-gradient">
                {stats.items.map((stat) => (
                  <div key={stat.title} className="stat-block">
                    <span className="stat-num stat-number" data-placeholder>
                      {stat.num}
                    </span>
                    <span className="stat-label">
                      <strong
                        style={{ display: "block", color: "var(--text-primary)" }}
                      >
                        {stat.title}
                      </strong>
                      {stat.subtext}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 03 — The Analyst's Workflow ============ */}
        <section
          className="section-pad"
          id="how-it-works"
          aria-labelledby="workflow-h2"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header methodology-header">
              <span className="eyebrow">{workflow.intro.eyebrow}</span>
              <h2 id="workflow-h2" className="display-lg">
                {workflow.intro.heading}
              </h2>
            </Reveal>

            <div className="feature-rows-list">
              {workflow.steps.map((step, i) => {
                const flip = i % 2 === 1;
                const text = (
                  <Reveal className="feature-row-text">
                    <span
                      className="icon-box"
                      aria-hidden="true"
                      style={
                        step.tone === "success"
                          ? {
                              color: "var(--success)",
                              background:
                                "color-mix(in srgb, var(--success) 10%, transparent)",
                            }
                          : undefined
                      }
                    >
                      <Icon
                        name={
                          i === 0
                            ? "message-square"
                            : i === 1
                              ? "check-circle"
                              : "lock"
                        }
                        style={
                          step.tone === "success"
                            ? { color: "var(--success)" }
                            : undefined
                        }
                      />
                    </span>
                    <span className="feature-row-eyebrow eyebrow">
                      {step.eyebrow}
                    </span>
                    <h3 className="feature-row-heading display-md">
                      {step.heading}
                    </h3>
                    <p className="feature-row-body body-md">{step.body}</p>
                    {step.cta && (
                      <a className="btn-ghost" href={step.cta.href}>
                        {step.cta.label}
                      </a>
                    )}
                  </Reveal>
                );
                const visual = (
                  <Reveal className="feature-row-visual">
                    <div className="feature-row-img-wrap" data-placeholder>
                      <div className="ana-shot" role="img" aria-label={step.heading}>
                        <div className="ana-shot-bar">{step.shotLabel}</div>
                        {step.shotInput && (
                          <div className="ana-shot-input">
                            <Icon name={step.shotInput.icon} />
                            <span>{step.shotInput.text}</span>
                          </div>
                        )}
                        {step.shotRows.map((row) => (
                          <div
                            key={row.text}
                            className={`ana-shot-row${row.accent ? " ana-shot-row-accent" : ""}`}
                          >
                            <Icon name={row.icon} />
                            <span>{row.text}</span>
                          </div>
                        ))}
                      </div>
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

        {/* ============ Section 04 — The Problem ============ */}
        <section className="section-pad" id="problem" aria-labelledby="problem-h2">
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{problem.intro.eyebrow}</span>
              <h2 id="problem-h2" className="display-lg">
                {problem.intro.heading}
              </h2>
            </Reveal>

            <div className="ps-grid">
              {problem.cards.map((card) => (
                <Reveal key={card.problemHeading} className="ps-card" as="article">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-3)",
                    }}
                  >
                    <span className="icon-box" aria-hidden="true">
                      <Icon name={card.icon} />
                    </span>
                    <h3 className="heading-sm">{card.problemHeading}</h3>
                  </div>
                  <p
                    className="ps-problem body-md"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {card.problemBody}
                  </p>
                  <div className="ps-fix-box">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-2)",
                      }}
                    >
                      <Icon
                        name={card.fixIcon}
                        width={20}
                        height={20}
                        style={{
                          color:
                            card.fixTone === "warning"
                              ? "var(--warning)"
                              : "var(--success)",
                          flexShrink: 0,
                        }}
                      />
                      <h4
                        className="heading-sm"
                        style={{ color: "var(--brand-accent)" }}
                      >
                        {card.fixHeading}
                      </h4>
                    </div>
                    <p className="ps-fix-body body-sm">{card.fixBody}</p>
                    <a className="btn-ghost" href={card.cta.href}>
                      {card.cta.label}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 05 — Real Analyst Workflow Example ============ */}
        <section
          className="section-pad"
          id="walkthrough"
          aria-labelledby="walkthrough-h2"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{walkthrough.intro.eyebrow}</span>
              <h2 id="walkthrough-h2" className="display-lg">
                {walkthrough.intro.heading}
              </h2>
              <p className="subcopy body-md">{walkthrough.intro.subcopy}</p>
            </Reveal>

            <div className="ana-walk-grid">
              {walkthrough.panels.map((panel) => (
                <Reveal
                  key={panel.num}
                  className={`ana-walk-panel${
                    panel.tone === "canvas"
                      ? " ana-walk-panel-canvas"
                      : panel.tone === "warm"
                        ? " ana-walk-panel-warm"
                        : ""
                  }`}
                  as="article"
                  {...(panel.tone ? { "data-placeholder": true } : {})}
                >
                  <span className="ana-walk-num" aria-hidden="true">
                    {panel.num}
                  </span>
                  <h3 className="heading-sm">{panel.title}</h3>
                  <pre className="ana-code">{panel.code}</pre>
                  <p className="ana-walk-subtext">{panel.subtext}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 06 — Capabilities Snapshot ============ */}
        <section
          className="section-pad"
          id="capabilities"
          aria-labelledby="capabilities-h2"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{capabilities.intro.eyebrow}</span>
              <h2 id="capabilities-h2" className="display-lg">
                {capabilities.intro.heading}
              </h2>
            </Reveal>

            <div className="icon-feature-grid icon-feature-grid--3">
              {capabilities.items.map((item, i) => (
                <Reveal key={item.title} className="icon-feature" delay={i * 60}>
                  <span className="icon-box" aria-hidden="true">
                    <Icon name={item.icon} />
                  </span>
                  <h3 className="heading-sm">{item.title}</h3>
                  <p>{item.body}</p>
                  <a className="btn-ghost" href={item.cta.href} data-placeholder>
                    {item.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 07 — Case Study ============ */}
        <section
          className="section-pad"
          id="case-study"
          aria-labelledby="case-h2"
          style={{ background: "var(--bg-warm)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{caseStudy.intro.eyebrow}</span>
              <h2 id="case-h2" className="display-lg">
                {caseStudy.intro.heading}
              </h2>
            </Reveal>

            <Reveal className="case-study-card ana-case-featured" as="article">
              <div
                style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}
              >
                {caseStudy.tags.map((tag) => (
                  <span key={tag} className="industry-chip" data-placeholder>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="ana-case-cols">
                <div>
                  <span className="eyebrow ana-case-label">
                    {caseStudy.challengeLabel}
                  </span>
                  <p
                    className="body-md"
                    style={{ color: "var(--text-secondary)" }}
                    data-placeholder
                  >
                    {caseStudy.challengeBody}
                  </p>
                </div>
                <div>
                  <span className="eyebrow ana-case-label ana-case-label-accent">
                    {caseStudy.outcomeLabel}
                  </span>
                  <p className="body-md" style={{ color: "var(--text-secondary)" }}>
                    {caseStudy.outcomeBody}
                  </p>
                </div>
              </div>

              <div className="cs-stats" data-placeholder>
                {caseStudy.metrics.map((m) => (
                  <div key={m.label} className="cs-stat">
                    <span className="cs-stat-num">{m.num}</span>
                    <span className="cs-stat-label">{m.label}</span>
                  </div>
                ))}
              </div>

              <p className="cs-how" data-placeholder>
                {caseStudy.story}
              </p>

              <a className="btn-ghost" href={caseStudy.cta.href} data-placeholder>
                {caseStudy.cta.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 08 — Testimonials ============ */}
        <section
          className="section-pad"
          id="testimonials"
          aria-labelledby="testimonials-h2"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{testimonials.intro.eyebrow}</span>
              <h2 id="testimonials-h2" className="display-lg">
                {testimonials.intro.heading}
              </h2>
            </Reveal>
          </div>

          <Reveal
            className="testimonial-rows"
            style={{ marginTop: "var(--space-8)" }}
            data-placeholder
          >
            <div className="testimonial-row">
              {/* set A */}
              {testimonials.items.map((t) => (
                <article key={`a-${t.avatar}`} className="testimonial-card">
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-author">
                    <span className="author-avatar" aria-hidden="true">
                      {t.avatar}
                    </span>
                    <div>
                      <span className="author-name">{t.name}</span>
                      <br />
                      <span className="author-role">{t.role}</span>
                    </div>
                  </div>
                </article>
              ))}
              {/* set B — duplicate for seamless loop, hidden from AT */}
              {testimonials.items.map((t) => (
                <article
                  key={`b-${t.avatar}`}
                  className="testimonial-card"
                  aria-hidden="true"
                >
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-author">
                    <span className="author-avatar">{t.avatar}</span>
                    <div>
                      <span className="author-name">{t.name}</span>
                      <br />
                      <span className="author-role">{t.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ============ Section 09 — Integrations ============ */}
        <section
          className="section-pad"
          id="integrations"
          aria-labelledby="integrations-h2"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{integrations.intro.eyebrow}</span>
              <h2 id="integrations-h2" className="display-lg">
                {integrations.intro.heading}
              </h2>
            </Reveal>

            <div className="segment-cards-grid segment-cards-grid--4">
              {integrations.cards.map((card) => (
                <Reveal
                  key={card.label}
                  className="segment-card"
                  as="article"
                  data-placeholder
                >
                  <span className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </span>
                  <h3 className="segment-label heading-sm">{card.label}</h3>
                  <p className="segment-desc body-sm">{card.desc}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="proof-cta">
              <a className="btn btn-secondary" href={integrations.cta.href}>
                {integrations.cta.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 10 — The Semantic Layer ============ */}
        <section
          className="section-pad"
          id="semantic-layer"
          aria-labelledby="semantic-h2"
          style={{ background: "var(--bg-warm)" }}
        >
          <div className="container">
            <div className="feature-row">
              <Reveal className="feature-row-text">
                <span className="feature-row-eyebrow eyebrow">
                  {semanticLayer.eyebrow}
                </span>
                <h2 id="semantic-h2" className="feature-row-heading display-lg">
                  {semanticLayer.heading}
                </h2>
                {semanticLayer.body.map((p) => (
                  <p key={p} className="feature-row-body body-md">
                    {p}
                  </p>
                ))}
                <ul className="ana-check-list">
                  {semanticLayer.checks.map((c) => (
                    <li key={c}>
                      <Icon name="check" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <a className="btn-ghost" href={semanticLayer.cta.href}>
                  {semanticLayer.cta.label}
                </a>
              </Reveal>

              <Reveal className="feature-row-visual">
                <div
                  className="feature-row-img-wrap feature-row-img-fallback"
                  data-placeholder
                >
                  <svg
                    viewBox="0 0 600 400"
                    role="img"
                    aria-label="Semantic layer model showing certified metric nodes — Revenue, Churn Rate, and Margin — connected to a metadata card with owner, last-updated date, and lineage"
                    style={{
                      fontFamily: "var(--font-body)",
                      background: "var(--bg-surface)",
                    }}
                  >
                    {/* connections */}
                    <g style={{ stroke: "var(--border-strong)" }} strokeWidth="1.5" fill="none">
                      <path d="M190 92 C 260 92, 280 160, 330 168" />
                      <path d="M190 200 L 330 200" />
                      <path d="M190 308 C 260 308, 280 240, 330 232" />
                      <path d="M125 114 L 125 178" />
                      <path d="M125 222 L 125 286" />
                    </g>
                    {/* metric nodes */}
                    <g>
                      <rect x="60" y="70" width="130" height="44" rx="10" style={{ fill: "var(--bg-surface)", stroke: "var(--border-strong)" }} strokeWidth="1.5" />
                      <text x="125" y="97" textAnchor="middle" fontSize="14" fontWeight="600" style={{ fill: "var(--text-primary)" }}>Revenue</text>
                    </g>
                    <g>
                      <rect x="60" y="178" width="130" height="44" rx="10" style={{ fill: "var(--brand-accent-soft)", stroke: "var(--brand-accent)" }} strokeWidth="1.5" />
                      <text x="125" y="205" textAnchor="middle" fontSize="14" fontWeight="600" style={{ fill: "var(--text-primary)" }}>Churn Rate</text>
                    </g>
                    <g>
                      <rect x="60" y="286" width="130" height="44" rx="10" style={{ fill: "var(--bg-surface)", stroke: "var(--border-strong)" }} strokeWidth="1.5" />
                      <text x="125" y="313" textAnchor="middle" fontSize="14" fontWeight="600" style={{ fill: "var(--text-primary)" }}>Margin</text>
                    </g>
                    {/* metadata card */}
                    <g>
                      <rect x="330" y="130" width="220" height="140" rx="12" style={{ fill: "var(--bg-surface)", stroke: "var(--border-strong)" }} strokeWidth="1.5" />
                      <text x="350" y="162" fontSize="13" fontWeight="700" style={{ fill: "var(--text-primary)" }}>Churn Rate · certified</text>
                      <text x="350" y="190" fontSize="12" style={{ fill: "var(--text-secondary)" }}>Owner: analytics-eng</text>
                      <text x="350" y="214" fontSize="12" style={{ fill: "var(--text-secondary)" }}>Updated: 2026-06-10</text>
                      <text x="350" y="238" fontSize="12" style={{ fill: "var(--text-secondary)" }}>Lineage: dwh.prod.customers</text>
                      <circle cx="528" cy="156" r="9" style={{ fill: "var(--brand-accent-soft)", stroke: "var(--brand-accent)" }} strokeWidth="1.5" />
                      <path d="M524 156 l3 3 l6 -6" style={{ stroke: "var(--brand-accent)" }} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 11 — FAQ ============ */}
        <section className="section-pad" id="faq" aria-labelledby="faq-h2">
          <div className="container">
            <div className="faq-grid">
              <div>
                <Reveal className="section-header">
                  <span className="eyebrow">{faq.intro.eyebrow}</span>
                  <h2 id="faq-h2" className="display-lg">
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
                      className="btn btn-primary"
                      style={{ fontSize: "14px", padding: "10px 22px" }}
                    >
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

        {/* ============ Section 12 — CTA Band ============ */}
        <section className="section-pad" id="cta-band" aria-labelledby="cta-h2">
          <div className="cta-band-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="cta-inner">
              <span className="eyebrow">{cta.eyebrow}</span>
              <h2 id="cta-h2" className="display-lg">
                {cta.heading}
              </h2>
              <p className="subcopy body-lg">{cta.subcopy}</p>
              <div className="cta-buttons">
                <a className="btn btn-primary" href={cta.primary.href}>
                  {cta.primary.label}
                </a>
                {cta.secondary && (
                  <a
                    className="btn btn-secondary-dark"
                    href={cta.secondary.href}
                    data-placeholder
                  >
                    {cta.secondary.label}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 13 — Newsletter ============ */}
        <section
          className="newsletter-block"
          id="newsletter"
          aria-labelledby="newsletter-h3"
        >
          <div className="container">
            <Reveal className="newsletter-inner">
              <span className="eyebrow">{newsletter.eyebrow}</span>
              <h3 id="newsletter-h3">{newsletter.heading}</h3>
              <p>{newsletter.body}</p>
              <form className="newsletter-form" action="#" method="post">
                <label className="sr-only" htmlFor="nl-email">
                  {newsletter.inputLabel}
                </label>
                <input
                  className="newsletter-input"
                  type="email"
                  id="nl-email"
                  name="email"
                  placeholder={newsletter.inputPlaceholder}
                  autoComplete="email"
                  required
                />
                <button className="btn btn-primary" type="submit">
                  {newsletter.submitLabel}
                </button>
              </form>
              <p className="newsletter-consent">
                {newsletter.consentLead}
                <a
                  href={newsletter.privacyLink.href}
                  style={{ textDecoration: "underline" }}
                >
                  {newsletter.privacyLink.label}
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
