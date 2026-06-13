import type { Metadata } from "next";
import "./platform-agents.css";
import { platformAgentsPage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Search,
  Database,
  FileCheck,
  AlertTriangle,
  ShieldCheck,
  Wand2,
  Zap,
  TrendingUp,
  Layers,
  Brain,
  Users,
  Briefcase,
  Code,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: platformAgentsPage.meta.title,
  description: platformAgentsPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  search: Search,
  database: Database,
  "file-check": FileCheck,
  "alert-triangle": AlertTriangle,
  "shield-check": ShieldCheck,
  "wand-2": Wand2,
  zap: Zap,
  "trending-up": TrendingUp,
  layers: Layers,
  brain: Brain,
  users: Users,
  briefcase: Briefcase,
  code: Code,
};

function Icon({
  name,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: WebPage + SoftwareApplication + FAQPage (spec 3.9 / 4 — schema.org/FAQPage)
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: platformAgentsPage.meta.title,
  description: platformAgentsPage.meta.description,
  url: `${brand.url}/platform/agents`,
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `${brand.name} Agentic Query Engine`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: platformAgentsPage.meta.description,
  url: `${brand.url}/platform/agents`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: platformAgentsPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PlatformAgentsPage() {
  const {
    hero,
    workflow,
    hallucination,
    capabilities,
    compare,
    example,
    useCases,
    governance,
    faq,
    proof,
    cta,
    newsletter,
  } = platformAgentsPage;

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
        {/* ============ 3.1 Hero ============ */}
        <section id="hero" aria-labelledby="agents-hero-heading">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container section-pad">
            <div className="agents-hero-grid">
              <Reveal className="hero-inner">
                <span className="eyebrow">{hero.eyebrow}</span>
                <h1 id="agents-hero-heading" className="hero-h1">
                  {hero.h1}
                </h1>
                <p className="subcopy body-lg">{hero.subcopy}</p>
                <div className="hero-buttons">
                  <a href={hero.ghostCta.href} className="btn-ghost">
                    {hero.ghostCta.label}
                  </a>
                </div>
              </Reveal>

              {/* Video modal trigger (not auto-playing). Poster is a token-tinted CSS mock. */}
              <Reveal
                as="a"
                href="#"
                className="agents-hero-video"
                data-placeholder="video URL"
                aria-label={hero.video.ariaLabel}
              >
                <span
                  className="agents-video-skel"
                  style={{ width: "58%" }}
                  aria-hidden="true"
                />
                <span
                  className="agents-video-skel"
                  style={{ width: "76%" }}
                  aria-hidden="true"
                />
                <span
                  className="agents-video-skel"
                  style={{ width: "42%" }}
                  aria-hidden="true"
                />
                <span className="agents-video-overlay">
                  <span className="agents-video-play" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </span>
                  <span className="agents-video-label">{hero.video.label}</span>
                  <span className="agents-video-duration">
                    {hero.video.duration}
                  </span>
                </span>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ 3.2 Three-Step Workflow ============ */}
        <section
          id="workflow"
          className="section-pad"
          aria-labelledby="workflow-heading"
          style={{ background: "var(--bg-canvas)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{workflow.intro.eyebrow}</span>
              <h2 id="workflow-heading" className="display-lg">
                {workflow.intro.heading}
              </h2>
            </Reveal>

            <ol className="pillars-grid" style={{ listStyle: "none" }}>
              {workflow.steps.map((step) => (
                <li key={step.index}>
                  <Reveal className="card agents-step-card" as="article">
                    <span className="segment-index" aria-hidden="true">
                      {step.index}
                    </span>
                    <div className="icon-box" aria-hidden="true">
                      <Icon name={step.icon} />
                    </div>
                    <span
                      className="eyebrow"
                      style={{ color: "var(--brand-accent)" }}
                    >
                      {step.eyebrow}
                    </span>
                    <h3 className="heading-sm">{step.heading}</h3>
                    <p
                      className="body-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {step.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ 3.3 The Hallucination Problem, Solved ============ */}
        <section
          id="no-hallucinations"
          className="section-pad"
          aria-labelledby="hallucination-heading"
          style={{ background: "var(--bg-warm)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
                {hallucination.intro.eyebrow}
              </span>
              <h2 id="hallucination-heading" className="display-lg">
                {hallucination.intro.heading}
              </h2>
            </Reveal>

            <div className="ps-grid" role="list">
              {hallucination.cards.map((card) => (
                <Reveal
                  key={card.heading}
                  className="ps-card"
                  as="article"
                  role="listitem"
                >
                  <div
                    className="icon-box"
                    aria-hidden="true"
                    style={
                      card.tone === "error"
                        ? {
                            background:
                              "color-mix(in srgb, var(--error) 10%, transparent)",
                          }
                        : undefined
                    }
                  >
                    <Icon
                      name={card.icon}
                      style={
                        card.tone === "error"
                          ? { color: "var(--error)" }
                          : undefined
                      }
                    />
                  </div>
                  <h3 className="display-md ps-problem">{card.heading}</h3>
                  <p className="body-md" style={{ color: "var(--text-secondary)" }}>
                    {card.body}
                  </p>
                  {card.tone === "error" ? (
                    <div className="agents-impact-box" aria-label={card.callout.label}>
                      <span className="agents-impact-label eyebrow">
                        {card.callout.label}
                      </span>
                      <p className="body-md ps-fix-body">{card.callout.body}</p>
                    </div>
                  ) : (
                    <div className="ps-fix-box" aria-label={card.callout.label}>
                      <span className="ps-fix-label eyebrow">
                        {card.callout.label}
                      </span>
                      <p className="body-md ps-fix-body">{card.callout.body}</p>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.4 Six Agent Capabilities ============ */}
        <section
          id="capabilities"
          className="section-pad"
          aria-labelledby="capabilities-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{capabilities.intro.eyebrow}</span>
              <h2 id="capabilities-heading" className="display-lg">
                {capabilities.intro.heading}
              </h2>
            </Reveal>

            <div className="icon-feature-grid icon-feature-grid--3" role="list">
              {capabilities.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  className="icon-feature"
                  role="listitem"
                  delay={i * 60}
                >
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="heading-sm">{item.title}</h3>
                  <p>{item.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="proof-cta">
              <a href={capabilities.cta.href} className="btn-ghost">
                {capabilities.cta.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ 3.5 Competitive Differentiation ============ */}
        <section
          id="compare"
          className="section-pad"
          aria-labelledby="compare-heading"
          style={{ background: "var(--bg-canvas)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
                {compare.intro.eyebrow}
              </span>
              <h2 id="compare-heading" className="display-lg">
                {compare.intro.heading}
              </h2>
              <p className="subcopy body-lg">{compare.intro.subcopy}</p>
            </Reveal>

            <Reveal
              className="compare-table-wrap"
              style={{ marginTop: "var(--space-8)" }}
              role="region"
              aria-labelledby="compare-heading"
              tabIndex={0}
            >
              <table className="compare-table">
                <caption className="sr-only">{compare.caption}</caption>
                <thead>
                  <tr>
                    {compare.table.columns.map((col) => (
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
                  {compare.table.rows.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      {row.cells.map((cell, ci) => {
                        // Quaeris column = first data cell (column index 1 highlighted).
                        const highlight = compare.table.columns[ci + 1]?.highlight;
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
            </Reveal>

            {compare.table.note && (
              <Reveal
                as="p"
                className="compare-note"
                style={{ textAlign: "center" }}
                data-placeholder
              >
                {compare.table.note}
              </Reveal>
            )}

            <Reveal className="proof-cta">
              <a href={compare.cta.href} className="btn-ghost">
                {compare.cta.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ 3.6 Real-World Example Workflow (dark) ============ */}
        <section
          id="example"
          className="section-ink section-pad"
          aria-labelledby="example-heading"
        >
          <div className="section-ink-glow" aria-hidden="true" />
          <div
            className="container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <Reveal className="section-header section-header-dark center">
              <span className="eyebrow">{example.intro.eyebrow}</span>
              <h2 id="example-heading" className="display-lg">
                {example.intro.heading}
              </h2>
            </Reveal>

            {/* Illustrative agent-console mock (stands in for the annotated screenshot) */}
            <Reveal
              className="query-panel"
              style={{
                maxWidth: "880px",
                margin: "var(--space-8) auto 0",
              }}
              data-placeholder="annotated screenshot — illustrative console mock"
            >
              <div className="query-panel-header">
                <span>{example.console.header.title}</span>
                <span style={{ marginLeft: "auto" }}>
                  {example.console.header.status}
                </span>
              </div>
              <div className="query-panel-body">
                <p className="query-user">{example.console.userQuestion}</p>

                <div className="query-trace" aria-label="Agent execution trace">
                  {example.console.trace.map((chip) => (
                    <span key={chip} className="query-trace-chip">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {chip}
                    </span>
                  ))}
                </div>

                <p className="query-agent">{example.console.agentAnswer}</p>
              </div>
            </Reveal>

            {/* Four annotation cards: the agent's reasoning, step by step */}
            <div className="agents-example-steps" role="list">
              {example.steps.map((step) => (
                <Reveal
                  key={step.kicker}
                  className="card card-dark agents-example-step"
                  as="article"
                  role="listitem"
                >
                  <span
                    className="eyebrow"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    {step.kicker}
                  </span>
                  <h3 className="heading-sm">{step.heading}</h3>
                  <blockquote
                    dangerouslySetInnerHTML={{ __html: step.body }}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.7 Use Cases by Role ============ */}
        <section
          id="use-cases"
          className="section-pad"
          aria-labelledby="use-cases-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
                {useCases.intro.eyebrow}
              </span>
              <h2 id="use-cases-heading" className="display-lg">
                {useCases.intro.heading}
              </h2>
            </Reveal>

            <div
              className="segment-cards-grid segment-cards-grid--4"
              role="list"
            >
              {useCases.cards.map((card) => (
                <Reveal
                  key={card.label}
                  className="segment-card"
                  as="article"
                  role="listitem"
                >
                  <div className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="heading-sm segment-label">{card.label}</h3>
                  <p className="body-sm segment-desc">{card.desc}</p>
                  <div className="agents-segment-q">
                    <span className="agents-segment-q-label">
                      {card.exampleLabel}
                    </span>
                    {card.exampleQuestion}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.8 Trust & Governance Proof ============ */}
        <section
          id="governance"
          className="section-pad"
          aria-labelledby="governance-heading"
          style={{ background: "var(--bg-warm)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
                {governance.intro.eyebrow}
              </span>
              <h2 id="governance-heading" className="display-lg">
                {governance.intro.heading}
              </h2>
            </Reveal>

            <Reveal
              className="stats-band-gradient"
              style={{ marginTop: "var(--space-8)" }}
            >
              <div className="stats-grid-gradient">
                {governance.stats.map((stat) => (
                  <div key={stat.label} className="stat-block">
                    <span
                      className="stat-num stat-number"
                      aria-label={stat.num === "0" ? "Zero" : stat.num}
                    >
                      {stat.num}
                    </span>
                    <span className="stat-label body-sm">{stat.label}</span>
                    {stat.desc && (
                      <span className="stat-delta">{stat.desc}</span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* MetricDashboardMock — illustrative agent query dashboard */}
            <Reveal
              className="metric-dashboard"
              style={{ maxWidth: "640px", margin: "var(--space-8) auto 0" }}
              data-placeholder="illustrative dashboard data"
            >
              <div className="metric-dashboard-header">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    color: "var(--text-on-dark)",
                    fontWeight: "var(--weight-display)",
                  }}
                >
                  {governance.dashboard.title}
                </span>
                <span>{governance.dashboard.range}</span>
              </div>
              <div
                className="metric-tiles"
                role="group"
                aria-label="Agent governance metrics"
              >
                {governance.dashboard.tiles.map((tile) =>
                  tile.href ? (
                    <a key={tile.label} className="metric-tile" href={tile.href}>
                      <div className="metric-tile-label">{tile.label}</div>
                      <div className="metric-tile-value">{tile.value}</div>
                      {tile.delta && (
                        <div className="metric-tile-delta">{tile.delta}</div>
                      )}
                    </a>
                  ) : (
                    <div
                      key={tile.label}
                      className={`metric-tile${tile.active ? " active" : ""}`}
                    >
                      <div className="metric-tile-label">{tile.label}</div>
                      <div className="metric-tile-value">{tile.value}</div>
                    </div>
                  )
                )}
              </div>
              <div className="mini-chart">
                <svg
                  viewBox="0 0 280 80"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="agentsChartGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="var(--brand-accent)"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--brand-accent)"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,68 L35,60 L70,54 L105,44 L140,40 L175,28 L210,24 L245,16 L280,10 L280,80 L0,80 Z"
                    fill="url(#agentsChartGrad)"
                  />
                  <path
                    d="M0,68 L35,60 L70,54 L105,44 L140,40 L175,28 L210,24 L245,16 L280,10"
                    fill="none"
                    stroke="var(--brand-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="280" cy="10" r="4" fill="var(--brand-accent)" />
                </svg>
              </div>
              <p className="chart-caption">
                {governance.dashboard.chartCaption}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ 3.9 FAQ ============ */}
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
                  <h3 className="heading-sm">{faq.miniCard.title}</h3>
                  <p>{faq.miniCard.body}</p>
                  <a
                    href={faq.miniCard.cta.href}
                    className="btn btn-secondary"
                    style={{ fontSize: "14px", padding: "10px 22px" }}
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

        {/* ============ 3.10 Customer Proof ============ */}
        <section
          id="customer-proof"
          className="section-pad"
          aria-labelledby="customer-proof-heading"
          style={{ background: "var(--bg-surface)", overflow: "hidden" }}
        >
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow">{proof.intro.eyebrow}</span>
              <h2 id="customer-proof-heading" className="display-lg" data-placeholder>
                {proof.intro.heading}
              </h2>
            </Reveal>

            <div className="case-study-grid">
              {proof.cards.map((card) => (
                <Reveal
                  key={card.industry}
                  className="case-study-card"
                  as="article"
                >
                  <span className="industry-chip">{card.industry}</span>
                  <h3
                    className="display-md"
                    style={{ color: "var(--text-primary)" }}
                    data-placeholder="named customer"
                  >
                    {card.client}
                  </h3>
                  <p className="cs-outcome">{card.outcome}</p>
                  <div className="cs-stats" aria-label="Key metrics">
                    {card.metrics.map((m, mi) => (
                      <div key={mi} className="cs-stat">
                        <span className="cs-stat-num">{m.num}</span>
                        <span className="cs-stat-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="cs-how">{card.how}</p>
                  <a href={card.cta.href} className="btn-ghost">
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Testimonial marquee — quotes filtered to audit-trail and governance themes */}
          <div
            className="testimonial-rows"
            aria-label="Customer quotes on governance and audit trails"
            style={{ marginTop: "var(--space-9)" }}
          >
            <div className="testimonial-row" aria-hidden="true">
              {[...proof.testimonials, ...proof.testimonials].map((t, i) => (
                <div key={`${t.initials}-${i}`} className="testimonial-card">
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-author">
                    <span className="author-avatar">{t.initials}</span>
                    <div>
                      <div className="author-name">{t.name}</div>
                      <div className="author-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.11 CTA Band ============ */}
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
              <p className="body-lg subcopy">{cta.subcopy}</p>
              <div className="cta-buttons">
                <a href={cta.primary.href} className="btn btn-on-dark">
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

        {/* ============ 3.12 Newsletter Signup ============ */}
        <div
          id="newsletter"
          className="newsletter-block"
          role="complementary"
          aria-label="Newsletter signup"
        >
          <div className="container">
            <Reveal className="newsletter-inner">
              <span className="eyebrow">{newsletter.eyebrow}</span>
              <h3>{newsletter.heading}</h3>
              <p>{newsletter.body}</p>
              <form
                className="newsletter-form"
                noValidate
                aria-label="Newsletter signup form"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  className="newsletter-input"
                  placeholder={newsletter.emailPlaceholder}
                  required
                  autoComplete="email"
                />
                <button type="submit" className="btn btn-primary">
                  {newsletter.submitLabel}
                </button>
              </form>
              <p className="newsletter-consent">
                {newsletter.consentPrefix}
                <a
                  href={newsletter.privacyLink.href}
                  style={{
                    color: "var(--text-on-dark-dim)",
                    textDecoration: "underline",
                  }}
                >
                  {newsletter.privacyLink.label}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
