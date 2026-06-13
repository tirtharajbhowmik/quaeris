import type { Metadata } from "next";
import "./platform.css";
import { platformPage } from "@/config/brand.config";
import { brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Database,
  Shield,
  Cpu,
  Box,
  BarChart2,
  Bot,
  ShieldCheck,
  Languages,
  Workflow,
  TrendingUp,
  Brain,
  Shuffle,
  FileSearch,
  SearchCode,
  Zap,
  LayoutDashboard,
  GitBranch,
  Lock,
  ScrollText,
  UserCheck,
  FileText,
  Award,
  Globe,
  Activity,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: platformPage.meta.title,
  description: platformPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  database: Database,
  shield: Shield,
  cpu: Cpu,
  box: Box,
  "bar-chart-2": BarChart2,
  bot: Bot,
  "shield-check": ShieldCheck,
  languages: Languages,
  workflow: Workflow,
  "trending-up": TrendingUp,
  brain: Brain,
  shuffle: Shuffle,
  "file-search": FileSearch,
  "search-code": SearchCode,
  zap: Zap,
  "layout-dashboard": LayoutDashboard,
  "git-branch": GitBranch,
  lock: Lock,
  "scroll-text": ScrollText,
  "user-check": UserCheck,
  "file-text": FileText,
  award: Award,
  globe: Globe,
  activity: Activity,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: SoftwareApplication + FAQPage
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: platformPage.meta.description,
  url: `${brand.url}/platform`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: platformPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PlatformPage() {
  const {
    hero,
    marquee,
    architecture,
    methodology,
    capabilities,
    engines,
    differentiation,
    stats,
    proof,
    subpages,
    trustRow,
    faq,
    cta,
  } = platformPage;

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

      {/* Skip to content */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main">
        {/* ============ Section 01 — Page Hero ============ */}
        <section
          id="platform-hero"
          className="plat-hero section-pad"
          aria-labelledby="platform-hero-heading"
        >
          <div className="container">
            <div className="plat-hero-grid">
              <Reveal>
                <span
                  className="badge badge-accent"
                  style={{ marginBottom: "var(--space-5)" }}
                >
                  {hero.badge}
                </span>
                <h1
                  id="platform-hero-heading"
                  className="hero-h1"
                  style={{ marginBottom: "var(--space-5)", maxWidth: "18ch" }}
                >
                  {hero.h1}
                </h1>
                <p
                  className="body-lg subcopy"
                  style={{
                    color: "var(--text-secondary)",
                    maxWidth: "54ch",
                    marginBottom: "var(--space-7)",
                  }}
                >
                  {hero.subcopy}
                </p>
                <div className="hero-buttons">
                  <a href={hero.primaryCta.href} className="btn btn-primary">
                    {hero.primaryCta.label}
                  </a>
                  <a href={hero.ghostCta.href} className="btn btn-ghost">
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

              {/* Static architecture diagram stand-in */}
              <Reveal className="plat-diagram" data-placeholder>
                <ol className="plat-diagram-stack">
                  {hero.layers.map((layer) => (
                    <li key={layer.name} className="plat-diagram-layer">
                      <div className="icon-box" aria-hidden="true">
                        <Icon name={layer.icon} />
                      </div>
                      <div>
                        <span className="plat-diagram-layer-name">
                          {layer.name}
                        </span>
                        <span className="plat-diagram-layer-desc">
                          {layer.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="plat-diagram-connector" aria-hidden="true" />
                <ul className="plat-diagram-engines" role="list">
                  {hero.engines.map((engine) => (
                    <li key={engine.label} className="plat-diagram-engine">
                      <Icon name={engine.icon} />
                      {engine.label}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ Section 02 — Integration Marquee ============ */}
        <section id="logo-marquee" aria-label={marquee.label}>
          <div className="container">
            <p className="eyebrow marquee-label">{marquee.label}</p>
          </div>
          <div
            className="marquee-track-wrap"
            role="marquee"
            aria-label="Integration logos"
          >
            <div className="marquee-track" aria-hidden="true">
              {/* duplicate set for the seamless -50% CSS loop */}
              {[...marquee.logos, ...marquee.logos].map((logo, i) => (
                <div key={`${logo}-${i}`} className="marquee-logo">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 03 — Three Pillars (#architecture) ============ */}
        <section
          id="architecture"
          className="section-pad"
          aria-labelledby="pillars-heading"
        >
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow">{architecture.intro.eyebrow}</span>
              <h2 id="pillars-heading" className="display-lg">
                {architecture.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {architecture.intro.subcopy}
              </p>
            </Reveal>

            <div className="pillars-grid">
              {architecture.pillars.map((pillar, i) => (
                <Reveal key={pillar.title} className="pillar-card" as="article">
                  <div className={`pillar-img pillar-img-${i + 1}`}>
                    <Icon
                      name={pillar.icon}
                      style={{
                        color:
                          pillar.tone === "success"
                            ? "var(--success)"
                            : pillar.tone === "warning"
                              ? "var(--warning)"
                              : "var(--brand-accent)",
                      }}
                    />
                  </div>
                  <div className="pillar-body">
                    <h3 className="display-md">{pillar.title}</h3>
                    <p className="body-md">{pillar.body}</p>
                    <a
                      href={pillar.cta.href}
                      className="btn-ghost"
                      aria-label={pillar.cta.ariaLabel}
                    >
                      {pillar.cta.label}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 04 — How It Works (FeatureRow ×4) ============ */}
        <section
          id="methodology"
          className="section-pad"
          aria-labelledby="methodology-heading"
        >
          <div className="container">
            <Reveal className="section-header center methodology-header">
              <span className="eyebrow">{methodology.intro.eyebrow}</span>
              <h2 id="methodology-heading" className="display-lg">
                {methodology.intro.heading}
              </h2>
              <p className="body-lg subcopy">{methodology.intro.subcopy}</p>
            </Reveal>

            <div className="feature-rows-list">
              {methodology.steps.map((step, i) => {
                const flip = i % 2 === 1;
                // Decorative visuals (presentation only) keyed by step index.
                const visual = (
                  <Reveal className="feature-row-visual">
                    <div
                      className="feature-row-img-wrap feature-row-img-fallback"
                      aria-hidden="true"
                      data-placeholder
                    >
                      {stepVisuals[i]}
                    </div>
                  </Reveal>
                );
                const text = (
                  <Reveal className="feature-row-text">
                    <span className="eyebrow feature-row-eyebrow">
                      {step.eyebrow}
                    </span>
                    <h3 className="display-md feature-row-heading">
                      {step.heading}
                    </h3>
                    <p className="body-md feature-row-body">{step.body}</p>
                    {step.cta && (
                      <a href={step.cta.href} className="btn-ghost">
                        {step.cta.label}
                      </a>
                    )}
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

        {/* ============ Section 05 — Six Core Capabilities ============ */}
        <section
          id="capabilities"
          className="section-pad"
          aria-labelledby="capabilities-heading"
        >
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow">{capabilities.intro.eyebrow}</span>
              <h2 id="capabilities-heading" className="display-lg">
                {capabilities.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {capabilities.intro.subcopy}
              </p>
            </Reveal>

            <div className="icon-feature-grid icon-feature-grid--3">
              {capabilities.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  className="icon-feature"
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
          </div>
        </section>

        {/* ============ Section 06 — Three-Engine Bento ============ */}
        <section
          id="engines"
          className="section-pad"
          aria-labelledby="engines-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span
                className="eyebrow"
                style={{ color: "var(--text-tertiary)" }}
              >
                {engines.intro.eyebrow}
              </span>
              <h2 id="engines-heading" className="display-lg">
                {engines.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {engines.intro.subcopy}
              </p>
            </Reveal>

            <div className="bento-grid">
              {engines.cards.map((card) => (
                <Reveal key={card.title} className="bento-card" as="article">
                  <div
                    className="icon-box"
                    aria-hidden="true"
                    style={{ marginBottom: "var(--space-4)" }}
                  >
                    <Icon name={card.icon} />
                  </div>
                  <h3
                    className="display-md"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {card.title}
                  </h3>
                  <ul
                    className="plat-engine-links"
                    role="list"
                    aria-label={`${card.title} sub-capabilities`}
                  >
                    {card.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="plat-engine-link">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
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

        {/* ============ Section 07 — Competitive Differentiation (dark) ============ */}
        <section
          id="differentiation"
          className="section-ink section-pad"
          aria-labelledby="differentiation-heading"
        >
          <div className="section-ink-glow" aria-hidden="true" />
          <div
            className="container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <Reveal className="section-header center section-header-dark">
              <span className="eyebrow">{differentiation.intro.eyebrow}</span>
              <h2 id="differentiation-heading" className="display-lg">
                {differentiation.intro.heading}
              </h2>
              <p className="body-lg subcopy">
                {differentiation.intro.subcopy}
              </p>
            </Reveal>

            <div className="ps-grid ps-grid--3 ps-grid-dark" role="list">
              {differentiation.cards.map((card) => (
                <Reveal
                  key={card.index}
                  className="ps-card"
                  as="article"
                  role="listitem"
                >
                  <span className="ps-index" aria-hidden="true">
                    {card.index}
                  </span>
                  <h3 className="eyebrow ps-kicker">{card.kicker}</h3>
                  <p className="body-md ps-problem">{card.problem}</p>
                  <div className="ps-fix-box" aria-label={`The ${brand.name} answer`}>
                    <span className="ps-fix-label eyebrow">{card.fixLabel}</span>
                    <p className="body-md ps-fix-body">{card.fixBody}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 08 — Stats Band ============ */}
        <section
          id="stats-band"
          className="section-pad"
          aria-label={stats.intro.eyebrow}
        >
          <div className="container">
            <p className="eyebrow marquee-label">{stats.intro.eyebrow}</p>
            <Reveal className="stats-grid">
              {stats.items.map((stat) => (
                <div key={stat.label} className="stat-block">
                  <span
                    className="stat-num stat-number"
                    {...(stat.num === "—"
                      ? {
                          "data-placeholder": true,
                          "aria-label":
                            "Placeholder — awaiting verified figure",
                        }
                      : { "aria-label": stat.num === "0" ? "Zero" : stat.num })}
                  >
                    {stat.num}
                  </span>
                  <span className="stat-label body-sm">{stat.label}</span>
                  {stat.desc && <span className="stat-delta">{stat.desc}</span>}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ Section 09 — Customer Proof ============ */}
        <section
          id="proof"
          className="section-pad"
          aria-labelledby="proof-heading"
        >
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow">{proof.intro.eyebrow}</span>
              <h2 id="proof-heading" className="display-lg">
                {proof.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
                data-placeholder
              >
                {proof.intro.subcopy}
              </p>
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
                    data-placeholder
                  >
                    {card.client}
                  </h3>
                  <p className="cs-outcome" data-placeholder>
                    {card.outcome}
                  </p>
                  <div
                    className="cs-stats"
                    aria-label="Key metrics"
                    data-placeholder
                  >
                    {card.metrics.map((m, mi) => (
                      <div key={mi} className="cs-stat">
                        <span className="cs-stat-num">{m.num}</span>
                        <span className="cs-stat-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <a href={card.cta.href} className="btn-ghost">
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 10 — Subpage Navigation ============ */}
        <section
          id="subpages"
          className="section-pad"
          aria-labelledby="subpages-heading"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="container">
            <Reveal className="section-header center">
              <span
                className="eyebrow"
                style={{ color: "var(--text-tertiary)" }}
              >
                {subpages.intro.eyebrow}
              </span>
              <h2 id="subpages-heading" className="display-lg">
                {subpages.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {subpages.intro.subcopy}
              </p>
            </Reveal>

            <div className="segment-cards-grid segment-cards-grid--6" role="list">
              {subpages.cards.map((card, i) => (
                <Reveal
                  key={card.href}
                  as="a"
                  href={card.href}
                  className="segment-card"
                  role="listitem"
                >
                  <span className="segment-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="heading-sm segment-label">{card.label}</h3>
                  <p className="body-sm segment-desc">{card.desc}</p>
                  <span className="segment-arrow" aria-hidden="true">
                    →
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 11 — Trust and Compliance Strip ============ */}
        <section
          id="trust-compliance"
          className="plat-trustrow"
          aria-labelledby="trust-heading"
        >
          <div className="container">
            <span className="eyebrow">{trustRow.eyebrow}</span>
            <h2 id="trust-heading" className="display-md">
              {trustRow.heading}
            </h2>
            <ul className="plat-trustrow-list" role="list">
              {trustRow.badges.map((badge) =>
                badge.href ? (
                  <li key={badge.label}>
                    <a
                      href={badge.href}
                      className="plat-trustrow-item"
                      data-placeholder
                    >
                      <Icon name={badge.icon} />
                      {badge.label}
                    </a>
                  </li>
                ) : (
                  <li key={badge.label}>
                    <span className="plat-trustrow-item">
                      <Icon name={badge.icon} />
                      {badge.label}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* ============ Section 12 — FAQ ============ */}
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

        {/* ============ Section 13 — CTA Band ============ */}
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
      </main>

      <SiteFooter />
    </>
  );
}

// Decorative methodology step visuals (presentation only — kept inline per
// the mockup; not content). Token-driven SVGs, one per step.
const stepVisuals: React.ReactNode[] = [
  <svg key="g1" viewBox="0 0 800 530" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="530" rx="20" fill="url(#plat-g1)" />
    <g stroke="var(--brand-accent)" strokeWidth="2">
      <rect x="90" y="80" width="150" height="64" rx="12" fill="var(--bg-surface)" />
      <rect x="90" y="172" width="150" height="64" rx="12" fill="var(--bg-surface)" />
      <rect x="90" y="264" width="150" height="64" rx="12" fill="var(--bg-surface)" />
      <rect x="90" y="356" width="150" height="64" rx="12" fill="var(--bg-surface)" />
    </g>
    <g fill="var(--brand-accent)" fillOpacity="0.35">
      <rect x="112" y="104" width="80" height="10" rx="5" />
      <rect x="112" y="196" width="96" height="10" rx="5" />
      <rect x="112" y="288" width="70" height="10" rx="5" />
      <rect x="112" y="380" width="88" height="10" rx="5" />
    </g>
    <g stroke="var(--brand-accent)" strokeOpacity="0.45" strokeWidth="2">
      <path d="M240 112 C 360 112, 380 240, 470 248" />
      <path d="M240 204 C 340 204, 380 244, 470 252" />
      <path d="M240 296 C 340 296, 380 262, 470 256" />
      <path d="M240 388 C 360 388, 380 270, 470 260" />
    </g>
    <rect x="470" y="190" width="240" height="130" rx="16" fill="var(--brand-accent)" fillOpacity="0.12" stroke="var(--brand-accent)" strokeWidth="2" />
    <circle cx="520" cy="232" r="10" fill="var(--brand-accent)" />
    <rect x="544" y="226" width="130" height="12" rx="6" fill="var(--brand-accent)" fillOpacity="0.5" />
    <rect x="500" y="262" width="174" height="10" rx="5" fill="var(--brand-accent)" fillOpacity="0.3" />
    <rect x="500" y="284" width="140" height="10" rx="5" fill="var(--brand-accent)" fillOpacity="0.3" />
    <defs>
      <linearGradient id="plat-g1" x1="0" y1="0" x2="800" y2="530" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="var(--brand-accent)" stopOpacity="0.05" />
        <stop offset="1" stopColor="var(--brand-accent)" stopOpacity="0.12" />
      </linearGradient>
    </defs>
  </svg>,
  <svg key="g2" viewBox="0 0 800 530" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="530" rx="20" fill="url(#plat-g2)" />
    <g stroke="var(--brand-accent)" strokeWidth="2">
      <rect x="250" y="110" width="300" height="72" rx="14" fill="var(--bg-surface)" />
      <rect x="218" y="216" width="364" height="72" rx="14" fill="var(--bg-surface)" />
      <rect x="186" y="322" width="428" height="72" rx="14" fill="var(--bg-surface)" />
    </g>
    <g stroke="var(--brand-accent)" strokeOpacity="0.4" strokeWidth="2">
      <path d="M400 182v34" />
      <path d="M400 288v34" />
    </g>
    <g fill="var(--brand-accent)" fillOpacity="0.35">
      <rect x="278" y="134" width="120" height="10" rx="5" />
      <rect x="278" y="154" width="180" height="8" rx="4" />
      <rect x="246" y="240" width="150" height="10" rx="5" />
      <rect x="246" y="260" width="220" height="8" rx="4" />
      <rect x="214" y="346" width="180" height="10" rx="5" />
      <rect x="214" y="366" width="260" height="8" rx="4" />
    </g>
    <g fill="var(--brand-accent)">
      <circle cx="512" cy="146" r="8" />
      <circle cx="544" cy="252" r="8" />
      <circle cx="576" cy="358" r="8" />
    </g>
    <defs>
      <linearGradient id="plat-g2" x1="0" y1="0" x2="800" y2="530" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="var(--brand-accent)" stopOpacity="0.05" />
        <stop offset="1" stopColor="var(--brand-accent)" stopOpacity="0.12" />
      </linearGradient>
    </defs>
  </svg>,
  <svg key="g3" viewBox="0 0 800 530" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="530" rx="20" fill="url(#plat-g3)" />
    <rect x="110" y="92" width="400" height="84" rx="20" fill="var(--brand-accent)" fillOpacity="0.16" />
    <rect x="140" y="120" width="240" height="12" rx="6" fill="var(--brand-accent)" fillOpacity="0.55" />
    <rect x="140" y="144" width="160" height="10" rx="5" fill="var(--brand-accent)" fillOpacity="0.35" />
    <rect x="250" y="222" width="440" height="216" rx="20" fill="var(--bg-surface)" stroke="var(--brand-accent)" strokeWidth="2" />
    <rect x="282" y="254" width="200" height="12" rx="6" fill="var(--brand-accent)" fillOpacity="0.5" />
    <g fill="var(--brand-accent)" fillOpacity="0.3">
      <rect x="282" y="288" width="376" height="10" rx="5" />
      <rect x="282" y="310" width="340" height="10" rx="5" />
      <rect x="282" y="332" width="356" height="10" rx="5" />
    </g>
    <g>
      <rect x="282" y="372" width="148" height="34" rx="17" fill="var(--brand-accent)" fillOpacity="0.12" stroke="var(--brand-accent)" strokeOpacity="0.6" strokeWidth="2" />
      <circle cx="304" cy="389" r="7" fill="var(--brand-accent)" />
      <rect x="322" y="384" width="88" height="10" rx="5" fill="var(--brand-accent)" fillOpacity="0.45" />
    </g>
    <path d="M310 176v22" stroke="var(--brand-accent)" strokeOpacity="0.45" strokeWidth="2" />
    <defs>
      <linearGradient id="plat-g3" x1="0" y1="0" x2="800" y2="530" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="var(--brand-accent)" stopOpacity="0.05" />
        <stop offset="1" stopColor="var(--brand-accent)" stopOpacity="0.12" />
      </linearGradient>
    </defs>
  </svg>,
  <svg key="g4" viewBox="0 0 800 530" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="530" rx="20" fill="url(#plat-g4)" />
    <path d="M150 100v330" stroke="var(--brand-accent)" strokeOpacity="0.35" strokeWidth="2" />
    <g fill="var(--brand-accent)">
      <circle cx="150" cy="124" r="8" />
      <circle cx="150" cy="216" r="8" />
      <circle cx="150" cy="308" r="8" />
      <circle cx="150" cy="400" r="8" />
    </g>
    <g stroke="var(--brand-accent)" strokeWidth="2">
      <rect x="190" y="92" width="470" height="64" rx="12" fill="var(--bg-surface)" />
      <rect x="190" y="184" width="470" height="64" rx="12" fill="var(--bg-surface)" />
      <rect x="190" y="276" width="470" height="64" rx="12" fill="var(--bg-surface)" />
      <rect x="190" y="368" width="470" height="64" rx="12" fill="var(--bg-surface)" />
    </g>
    <g fill="var(--brand-accent)" fillOpacity="0.35">
      <rect x="218" y="116" width="200" height="10" rx="5" />
      <rect x="218" y="208" width="240" height="10" rx="5" />
      <rect x="218" y="300" width="180" height="10" rx="5" />
      <rect x="218" y="392" width="220" height="10" rx="5" />
    </g>
    <g stroke="var(--brand-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="m600 116 8 8 14-14" />
      <path d="m600 208 8 8 14-14" />
      <path d="m600 300 8 8 14-14" />
      <path d="m600 392 8 8 14-14" />
    </g>
    <defs>
      <linearGradient id="plat-g4" x1="0" y1="0" x2="800" y2="530" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="var(--brand-accent)" stopOpacity="0.05" />
        <stop offset="1" stopColor="var(--brand-accent)" stopOpacity="0.12" />
      </linearGradient>
    </defs>
  </svg>,
];
