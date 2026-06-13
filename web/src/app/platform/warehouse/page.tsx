import type { Metadata } from "next";
import "./platform-warehouse.css";
import { platformWarehousePage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Bot,
  Database,
  Layers,
  Plug,
  Lock,
  MapPin,
  Globe,
  Cloud,
  Server,
  ShieldCheck,
  FileCheck,
  GitCompare,
  CirclePlus,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: platformWarehousePage.meta.title,
  description: platformWarehousePage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  bot: Bot,
  database: Database,
  layers: Layers,
  plug: Plug,
  lock: Lock,
  "map-pin": MapPin,
  globe: Globe,
  cloud: Cloud,
  server: Server,
  "shield-check": ShieldCheck,
  "file-check": FileCheck,
  "git-compare": GitCompare,
  "circle-plus": CirclePlus,
  "heart-pulse": HeartPulse,
};

function Icon({
  name,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// Decorative inline SVGs (presentation only — not content).
const CheckMark = (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowUp = (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 19V5" />
    <path d="m5 12 7-7 7 7" />
  </svg>
);

// JSON-LD: WebPage + SoftwareApplication + FAQPage
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: platformWarehousePage.meta.title,
  description: platformWarehousePage.meta.description,
  url: `${brand.url}/platform/warehouse`,
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: platformWarehousePage.meta.description,
  url: `${brand.url}/platform/warehouse`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: platformWarehousePage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PlatformWarehousePage() {
  const {
    hero,
    problem,
    architecture,
    connectors,
    compliance,
    deployment,
    audit,
    faq,
    cta,
    newsletter,
  } = platformWarehousePage;

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
        {/* ============ Section 01 — Hero ============ */}
        <section id="hero" aria-labelledby="hero-heading">
          <div className="hero-purple-wash" aria-hidden="true" />
          <div className="container">
            <div className="whse-hero-grid">
              <div className="hero-inner">
                <span
                  className="eyebrow"
                  style={{ color: "var(--brand-accent)" }}
                >
                  {hero.eyebrow}
                </span>
                <h1 id="hero-heading" className="hero-h1">
                  {hero.h1}
                </h1>
                <p className="subcopy body-lg">{hero.subcopy}</p>
                <div className="hero-buttons">
                  <a href={hero.primaryCta.href} className="btn btn-primary">
                    {hero.primaryCta.label}
                  </a>
                  <a
                    href={hero.secondaryCta.href}
                    className="btn btn-secondary"
                  >
                    {hero.secondaryCta.label}
                  </a>
                </div>
                <ul className="hero-trust" role="list" aria-label="Trust badges">
                  {hero.trust.map((t) => (
                    <li key={t.text} className="hero-trust-item">
                      <Icon name={t.icon} />
                      <span>{t.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hero visual: agent layer sits ON TOP of the warehouse */}
              <Reveal className="whse-stack" as="div">
                <div className="whse-stack-layer">
                  <span className="icon-box" aria-hidden="true">
                    <Icon name={hero.agentLayer.icon} />
                  </span>
                  <div>
                    <p className="whse-stack-title">{hero.agentLayer.title}</p>
                    <p className="whse-stack-desc">{hero.agentLayer.desc}</p>
                  </div>
                </div>
                <p className="whse-stack-arrow" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                  {hero.flowLabel}
                </p>
                <div className="whse-stack-layer whse-stack-base">
                  <span className="icon-box" aria-hidden="true">
                    <Icon name={hero.warehouseLayer.icon} />
                  </span>
                  <div>
                    <p className="whse-stack-title">
                      {hero.warehouseLayer.title}
                    </p>
                    <p className="whse-stack-desc">
                      {hero.warehouseLayer.desc}
                    </p>
                    {hero.warehouseLayer.chips && (
                      <div className="whse-chiprow">
                        {hero.warehouseLayer.chips.map((chip) => (
                          <span key={chip.label} className="badge">
                            {chip.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 02 — The Problem ============ */}
        <section
          id="deployment-risks"
          className="section-pad"
          aria-labelledby="risks-heading"
          style={{ background: "var(--bg-canvas)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{problem.intro.eyebrow}</span>
              <h2 id="risks-heading" className="display-lg">
                {problem.intro.heading}
              </h2>
            </Reveal>

            <div className="ps-grid" role="list">
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
                  <div className="ps-problem">
                    <h3
                      className="display-md"
                      style={{ marginBottom: "var(--space-3)" }}
                    >
                      {card.problemHeading}
                    </h3>
                    <p
                      className="body-md"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {card.problemBody}
                    </p>
                  </div>
                  <div className="ps-fix-box" aria-label="The fix">
                    <span className="ps-fix-label eyebrow">{card.fixLabel}</span>
                    <h4 className="heading-sm">{card.fixHeading}</h4>
                    <p className="body-md ps-fix-body">{card.fixBody}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 03 — The Architecture ============ */}
        <section
          id="architecture"
          className="section-pad"
          aria-labelledby="architecture-heading"
          style={{ background: "var(--bg-warm)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{architecture.intro.eyebrow}</span>
              <h2 id="architecture-heading" className="display-lg">
                {architecture.intro.heading}
              </h2>
            </Reveal>

            <div className="whse-arch-grid">
              {/* Four layers, base at the bottom; arrows show queries flowing up */}
              <Reveal className="whse-stack" as="div">
                {architecture.layers.map((layer) => (
                  <div key={layer.num}>
                    {layer.flowLabel && (
                      <p
                        className="whse-stack-arrow"
                        aria-hidden="true"
                        style={{ marginBottom: "var(--space-3)" }}
                      >
                        {ArrowUp}
                        {layer.flowLabel}
                      </p>
                    )}
                    <div
                      className={`whse-stack-layer${
                        layer.num === "01" ? " whse-stack-base" : ""
                      }`}
                    >
                      <span className="value-prop-num" aria-hidden="true">
                        {layer.num}
                      </span>
                      <span className="icon-box" aria-hidden="true">
                        <Icon name={layer.icon} />
                      </span>
                      <div>
                        <p className="whse-stack-title">{layer.title}</p>
                        <p className="whse-stack-desc">{layer.desc}</p>
                        {layer.note && (
                          <p className="whse-stack-note">{layer.note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Reveal>

              {/* Right: per-layer compliance callouts */}
              <div className="whse-arch-side">
                {architecture.callouts.map((callout) => (
                  <Reveal key={callout.title} className="card" as="article">
                    <span
                      className="icon-box"
                      aria-hidden="true"
                      style={{ marginBottom: "var(--space-4)" }}
                    >
                      <Icon name={callout.icon} />
                    </span>
                    <h3
                      className="heading-sm"
                      style={{ marginBottom: "var(--space-2)" }}
                    >
                      {callout.title}
                    </h3>
                    <p
                      className="body-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {callout.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal
              className="body-lg"
              as="p"
              style={{
                color: "var(--text-primary)",
                maxWidth: "68ch",
                marginTop: "var(--space-7)",
              }}
            >
              {architecture.footnote}
            </Reveal>
          </div>
        </section>

        {/* ============ Section 04 — Supported warehouses & connectors ============ */}
        <section
          id="connectors"
          className="section-pad"
          aria-labelledby="connectors-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{connectors.intro.eyebrow}</span>
              <h2 id="connectors-heading" className="display-lg">
                {connectors.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {connectors.intro.subcopy}
              </p>
            </Reveal>

            <div
              className="segment-cards-grid segment-cards-grid--6"
              role="list"
            >
              {connectors.cards.map((card) => (
                <Reveal
                  key={card.label}
                  as="a"
                  href={card.href}
                  className="segment-card"
                  role="listitem"
                  aria-label={card.ariaLabel}
                >
                  <div className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="heading-sm segment-label">{card.label}</h3>
                  {card.desc && (
                    <p className="body-sm segment-desc" style={{ flex: 0 }}>
                      {card.desc}
                    </p>
                  )}
                  <ul className="whse-check-list">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>
                        {CheckMark}
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <span className="btn-ghost whse-card-cta">{card.cta}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 05 — Data residency & compliance ============ */}
        <section
          id="compliance"
          className="section-pad"
          aria-labelledby="compliance-heading"
          style={{ background: "var(--bg-canvas)" }}
        >
          <div className="container">
            <div className="faq-grid">
              <Reveal className="section-header">
                <span className="eyebrow">{compliance.intro.eyebrow}</span>
                <h2 id="compliance-heading" className="display-lg">
                  {compliance.intro.heading}
                </h2>
              </Reveal>

              <div className="whse-compliance-list">
                {compliance.items.map((item) => (
                  <Reveal
                    key={item.title}
                    className="whse-compliance-item"
                    as="article"
                  >
                    <span className="icon-box" aria-hidden="true">
                      <Icon name={item.icon} />
                    </span>
                    <div>
                      <h3 className="heading-sm">{item.title}</h3>
                      <p className="body-md">{item.body}</p>
                      {item.link && (
                        <a href={item.link.href} className="btn btn-ghost">
                          {item.link.label}
                        </a>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ Section 06 — Deployment models ============ */}
        <section
          id="deployment-models"
          className="section-pad"
          aria-labelledby="deploy-heading"
          style={{ background: "var(--bg-warm)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{deployment.intro.eyebrow}</span>
              <h2 id="deploy-heading" className="display-lg">
                {deployment.intro.heading}
              </h2>
            </Reveal>

            <div className="case-study-grid" role="list">
              {deployment.cards.map((card) => (
                <Reveal
                  key={card.title}
                  className="card whse-deploy-card"
                  as="article"
                  role="listitem"
                >
                  <div className="whse-deploy-icons" aria-hidden="true">
                    {card.icons.map((icon) => (
                      <span key={icon} className="icon-box">
                        <Icon name={icon} />
                      </span>
                    ))}
                  </div>
                  {card.badge && (
                    <span
                      className={`badge${card.badgeAccent ? " badge-accent" : ""}`}
                    >
                      {card.badge}
                    </span>
                  )}
                  <h3 className="display-md">{card.title}</h3>
                  <p
                    className="body-md"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {card.body}
                  </p>
                  <ul className="whse-check-list">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>
                        {CheckMark}
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="whse-deploy-who">
                    <span
                      className="eyebrow"
                      style={{
                        color: "var(--text-tertiary)",
                        display: "block",
                        marginBottom: "var(--space-2)",
                      }}
                    >
                      {card.whoLabel}
                    </span>
                    <p>{card.whoBody}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="whse-deploy-note">
              <p
                className="body-lg"
                style={{
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-3)",
                }}
              >
                {deployment.note}
              </p>
              <a href={deployment.noteCta.href} className="btn btn-ghost">
                {deployment.noteCta.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 07 — Access control & audit ============ */}
        <section
          id="audit"
          className="section-pad"
          aria-labelledby="audit-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <div className="whse-audit-grid">
              <div>
                <Reveal className="section-header">
                  <span className="eyebrow">{audit.intro.eyebrow}</span>
                  <h2 id="audit-heading" className="display-lg">
                    {audit.intro.heading}
                  </h2>
                  <p className="body-lg subcopy">{audit.intro.subcopy}</p>
                </Reveal>

                <Reveal className="card whse-callout">
                  <div className="whse-callout-head">
                    <span className="icon-box" aria-hidden="true">
                      <Icon name={audit.callout.icon} />
                    </span>
                    <h3 className="heading-sm">{audit.callout.title}</h3>
                  </div>
                  <ul className="whse-check-list">
                    {audit.callout.bullets.map((bullet) => (
                      <li key={bullet}>
                        {CheckMark}
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {/* Mock audit dashboard */}
              <Reveal className="metric-dashboard" as="div">
                <div className="metric-dashboard-header">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      color: "var(--text-on-dark)",
                      fontWeight: "var(--weight-display)",
                    }}
                  >
                    {audit.dashboardTitle}
                  </span>
                  <span>{audit.dashboardPeriod}</span>
                </div>
                <div
                  className="metric-tiles"
                  role="group"
                  aria-label="Audit metric tiles"
                >
                  {audit.tiles.map((tile) => (
                    <div
                      key={tile.label}
                      className={`metric-tile${tile.active ? " active" : ""}`}
                      tabIndex={0}
                    >
                      <div className="metric-tile-label">{tile.label}</div>
                      <div className="metric-tile-value">{tile.value}</div>
                      <div className="metric-tile-delta">{tile.delta}</div>
                    </div>
                  ))}
                </div>
                <div className="mini-chart">
                  <svg
                    viewBox="0 0 280 80"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="whseChartGrad"
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
                      d="M0,70 L30,58 L60,50 L90,42 L120,38 L150,30 L180,20 L210,25 L240,15 L280,10 L280,80 L0,80 Z"
                      fill="url(#whseChartGrad)"
                    />
                    <path
                      d="M0,70 L30,58 L60,50 L90,42 L120,38 L150,30 L180,20 L210,25 L240,15 L280,10"
                      fill="none"
                      stroke="var(--brand-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="280" cy="10" r="4" fill="var(--brand-accent)" />
                  </svg>
                </div>
                <p className="chart-caption">{audit.chartCaption}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 08 — FAQ ============ */}
        <section id="faq" className="section-pad" aria-labelledby="faq-heading">
          <div className="container">
            <div className="faq-grid">
              <div>
                <Reveal className="section-header">
                  <span className="eyebrow">{faq.intro.eyebrow}</span>
                  <h2 id="faq-heading" className="display-lg">
                    {faq.intro.heading}
                  </h2>
                  <p
                    className="body-lg subcopy"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {faq.intro.subcopy}
                  </p>
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

        {/* ============ Section 09 — CTA Band ============ */}
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

        {/* ============ Section 10 — Newsletter ============ */}
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
                action="#"
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
                  placeholder={newsletter.placeholder}
                  required
                  autoComplete="email"
                />
                <button type="submit" className="btn btn-primary">
                  {newsletter.submitLabel}
                </button>
              </form>
              <p className="newsletter-consent">{newsletter.consent}</p>
            </Reveal>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
