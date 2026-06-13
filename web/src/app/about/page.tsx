import type { Metadata } from "next";
import "./about.css";
import { aboutPage } from "@/config/brand.config";
import { brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import {
  MapPin,
  Mail,
  ShieldCheck,
  LockOpen,
  Link as LinkIcon,
  FileX,
  SlidersHorizontal,
  Layers,
  Cpu,
  Search,
  BarChart2,
  Brain,
  MessageSquare,
  Workflow,
  TrendingUp,
  Plug,
  FileSearch,
  Landmark,
  Shield,
  ShoppingCart,
  Activity,
  Settings2,
  HardHat,
  Server,
  FileText,
  User,
  ExternalLink,
  Eye,
  Globe,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  mail: Mail,
  "shield-check": ShieldCheck,
  "lock-open": LockOpen,
  link: LinkIcon,
  "file-x": FileX,
  "sliders-horizontal": SlidersHorizontal,
  layers: Layers,
  cpu: Cpu,
  search: Search,
  "bar-chart-2": BarChart2,
  brain: Brain,
  "message-square": MessageSquare,
  workflow: Workflow,
  "trending-up": TrendingUp,
  plug: Plug,
  "file-search": FileSearch,
  landmark: Landmark,
  shield: Shield,
  "shopping-cart": ShoppingCart,
  activity: Activity,
  "settings-2": Settings2,
  "hard-hat": HardHat,
  server: Server,
  "file-text": FileText,
  user: User,
  // LinkedIn brand glyph is not shipped in this lucide-react version;
  // resolve the placeholder profile link to a generic outbound-link icon.
  linkedin: ExternalLink,
  eye: Eye,
  globe: Globe,
};

function Icon({
  name,
  ...props
}: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: Organization (spec §6 Open Question 7 — ships in <head> at launch).
// `sameAs` omitted pending confirmed social profile URLs. Brand-specific copy
// (name/url/email/contact label) is sourced from config, never hardcoded.
const contactSignal = aboutPage.identity.items.find((i) =>
  i.href?.startsWith("mailto:")
);
const orgEmail = contactSignal?.value ?? "";
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: `${brand.name}, Inc.`,
  url: brand.url,
  email: orgEmail,
  address: {
    "@type": "PostalAddress",
    streetAddress: "95 Third Street, 2nd Floor",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94103",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: contactSignal?.label ?? "General inquiries",
    email: orgEmail,
    telephone: "+1-980-476-3737",
  },
};

export default function AboutPage() {
  const {
    hero,
    identity,
    why,
    architecture,
    capabilities,
    industries,
    integrations,
    proof,
    team,
    values,
    cta,
  } = aboutPage;

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Skip to content */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main">
        {/* ============ Section 01 — Page Hero (Mission Statement) ============ */}
        <section
          id="about-hero"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="about-hero-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" style={{ color: "var(--text-secondary)" }}>
                {hero.eyebrow}
              </span>
              <h1
                id="about-hero-heading"
                className="display-lg"
                style={{
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-4)",
                }}
              >
                {hero.h1}
              </h1>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {hero.subcopy}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 02 — Company Identity Strip ============ */}
        <section
          id="company-identity"
          className="about-identity"
          aria-label={identity.ariaLabel}
        >
          <div className="container">
            <ul className="about-identity-grid" role="list">
              {identity.items.map((item) => (
                <Reveal
                  key={item.label}
                  as="li"
                  className="about-identity-item"
                >
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <span className="about-identity-label">{item.label}</span>
                    <span className="about-identity-value">
                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Section 03 — Why Quaeris Exists ============ */}
        <section
          id="why-we-exist"
          className="section-pad"
          style={{ background: "var(--bg-canvas)" }}
          aria-labelledby="why-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
                {why.intro.eyebrow}
              </span>
              <h2 id="why-heading" className="display-lg">
                {why.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {why.intro.subcopy}
              </p>
            </Reveal>

            <div className="ps-grid about-ps-grid" role="list">
              {why.cards.map((card) => (
                <Reveal
                  key={card.title}
                  className="ps-card"
                  as="article"
                  role="listitem"
                >
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="heading-sm" style={{ color: "var(--text-primary)" }}>
                    {card.title}
                  </h3>
                  <p
                    className="body-md ps-problem"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {card.problem}
                  </p>
                  <div className="ps-fix-box" aria-label="The fix">
                    <span className="ps-fix-label eyebrow">{card.fixLabel}</span>
                    <h4
                      className="heading-sm"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "var(--space-2)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <Icon
                        name={card.fixIcon}
                        style={{
                          width: 18,
                          height: 18,
                          color: "var(--brand-accent)",
                          flexShrink: 0,
                          marginTop: "var(--space-1)",
                        }}
                      />
                      {card.fixTitle}
                    </h4>
                    <p className="body-md ps-fix-body">{card.fixBody}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 04 — The Three-Engine Architecture ============ */}
        <section
          id="architecture"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="architecture-heading"
        >
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow">{architecture.intro.eyebrow}</span>
              <h2 id="architecture-heading" className="display-lg">
                {architecture.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {architecture.intro.subcopy}
              </p>
            </Reveal>

            <div className="icon-feature-grid icon-feature-grid--3">
              {architecture.engines.map((engine, i) => (
                <Reveal key={engine.title} className="icon-feature" delay={i * 60}>
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={engine.icon} />
                  </div>
                  <span className="eyebrow" style={{ color: "var(--brand-accent)" }}>
                    {engine.eyebrow}
                  </span>
                  <h3 className="heading-sm">{engine.title}</h3>
                  <p>{engine.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal style={{ marginTop: "var(--space-7)" }}>
              <a href={architecture.cta.href} className="btn-ghost">
                {architecture.cta.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 05 — Six Core Capabilities ============ */}
        <section
          id="capabilities"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="capabilities-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
                {capabilities.intro.eyebrow}
              </span>
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

            <div
              className="bento-grid about-bento"
              aria-label="Six core capabilities"
            >
              {capabilities.cards.map((card) =>
                card.wide ? (
                  <Reveal
                    key={card.title}
                    className="bento-card bento-large"
                    as="article"
                    style={{ gridColumn: "span 2" }}
                  >
                    <div className="bento-large-gradient" aria-hidden="true" />
                    <div className="bento-large-content">
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
                        {card.link ? (
                          <a
                            href={card.link.href}
                            style={{
                              color: "inherit",
                              textDecoration: "underline",
                              textUnderlineOffset: "4px",
                              textDecorationColor: "var(--brand-accent)",
                            }}
                          >
                            {card.title}
                          </a>
                        ) : (
                          card.title
                        )}
                      </h3>
                      <p
                        className="body-md"
                        style={{
                          color: "var(--text-secondary)",
                          marginTop: "var(--space-3)",
                          maxWidth: "60ch",
                        }}
                      >
                        {card.body}
                      </p>
                    </div>
                  </Reveal>
                ) : (
                  <Reveal key={card.title} className="bento-card" as="article">
                    <div
                      className="icon-box"
                      aria-hidden="true"
                      style={{ marginBottom: "var(--space-4)" }}
                    >
                      <Icon name={card.icon} />
                    </div>
                    <h3
                      className="heading-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="body-md"
                      style={{
                        color: "var(--text-secondary)",
                        marginTop: "var(--space-3)",
                      }}
                    >
                      {card.body}
                    </p>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* ============ Section 06 — Target Industries ============ */}
        <section
          id="industries"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="industries-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
                {industries.intro.eyebrow}
              </span>
              <h2 id="industries-heading" className="display-lg">
                {industries.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {industries.intro.subcopy}
              </p>
            </Reveal>

            <div
              className="segment-cards-grid about-industries-grid"
              role="list"
            >
              {industries.cards.map((card) => (
                <Reveal
                  key={card.label}
                  className="segment-card"
                  as="article"
                  role="listitem"
                >
                  <span className="segment-index" aria-hidden="true">
                    {card.index}
                  </span>
                  <div className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="heading-sm segment-label">{card.label}</h3>
                  <p className="body-sm segment-desc">{card.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 07 — Integrations ============ */}
        <section
          id="integrations"
          className="section-pad"
          style={{ background: "var(--bg-canvas)" }}
          aria-labelledby="integrations-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
                {integrations.intro.eyebrow}
              </span>
              <h2 id="integrations-heading" className="display-lg">
                {integrations.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {integrations.intro.subcopy}
              </p>
            </Reveal>

            <Reveal className="about-integrations-panel">
              <div className="about-integrations-groups">
                {integrations.groups.map((group) => (
                  <div key={group.label}>
                    <h3 className="about-integration-group-label">
                      <Icon name={group.icon} />
                      {group.label}
                    </h3>
                    <ul className="about-logo-row" role="list">
                      {group.logos.map((logo) => (
                        <li key={logo} className="about-logo-tile" data-placeholder>
                          {logo}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="about-integration-links">
                {integrations.links.map((link) => (
                  <a key={link.href} href={link.href} className="btn-ghost">
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 08 — Proof Signals ============ */}
        <section
          id="proof-signals"
          className="section-pad"
          style={{
            background: "var(--bg-ink)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <h2 className="sr-only">{proof.srHeading}</h2>

            <Reveal className="stats-grid about-proof-stats">
              {proof.stats.map((stat) => (
                <div key={stat.label} className="stat-block">
                  <span
                    className="stat-num stat-number"
                    data-placeholder
                    aria-label="Placeholder — awaiting verified figure"
                  >
                    {stat.num}
                  </span>
                  <span className="stat-label body-sm">{stat.label}</span>
                </div>
              ))}
            </Reveal>

            {/* Footnote link [data-placeholder] until the /trust page exists. */}
            <Reveal as="p" className="about-proof-footnote" data-placeholder>
              <a href={proof.footnote.href}>{proof.footnote.label}</a>
            </Reveal>

            <Reveal className="about-proof-testimonial">
              <div className="testimonial-card">
                <p className="testimonial-quote" data-placeholder>
                  {proof.testimonial.quote}
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar" aria-hidden="true">
                    {proof.testimonial.initials}
                  </div>
                  <div>
                    <div className="author-name">{proof.testimonial.name}</div>
                    <div className="author-role">{proof.testimonial.role}</div>
                  </div>
                </div>
              </div>
              <a
                href={proof.testimonial.cta.href}
                className="btn btn-secondary-dark"
              >
                {proof.testimonial.cta.label}
              </a>
            </Reveal>

            {/* Review badges — all pending review seed campaign. */}
            <Reveal
              className="review-badges"
              style={{ marginTop: "var(--space-8)", marginBottom: 0 }}
              aria-label={proof.ariaLabel}
            >
              {proof.reviewBadges.map((badge) => (
                <div key={badge.platform} className="review-badge" data-placeholder>
                  <span className="review-badge-text">{badge.score}</span>
                  <span className="review-badge-platform">{badge.platform}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ Section 09 — Team (Structured Placeholder) ============ */}
        <section
          id="team"
          className="section-pad"
          style={{ background: "var(--bg-canvas)" }}
          aria-labelledby="team-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
                {team.intro.eyebrow}
              </span>
              <h2 id="team-heading" className="display-lg">
                {team.intro.heading}
              </h2>
              <p
                className="body-lg subcopy"
                style={{ color: "var(--text-secondary)" }}
              >
                {team.intro.subcopy}
              </p>
            </Reveal>

            <div className="about-team-grid" role="list">
              {team.members.map((member, i) => (
                <Reveal
                  key={i}
                  className="card"
                  as="article"
                  role="listitem"
                  data-placeholder
                >
                  <div className="about-team-photo" aria-hidden="true">
                    <Icon name="user" />
                  </div>
                  <span className="about-team-name">{member.name}</span>
                  <span className="about-team-role">{member.role}</span>
                  <a
                    href={member.href}
                    className="about-team-link"
                    aria-label={member.linkAriaLabel}
                  >
                    <Icon name="linkedin" />
                    {member.linkLabel}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 10 — Mission & Values ============ */}
        <section
          id="values"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="values-heading"
        >
          <div className="container">
            <Reveal className="section-header">
              <span className="eyebrow">{values.intro.eyebrow}</span>
              <h2 id="values-heading" className="display-lg">
                {values.intro.heading}
              </h2>
            </Reveal>

            <div className="icon-feature-grid about-values-grid">
              {values.items.map((item) => (
                <Reveal key={item.title} className="icon-feature">
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="heading-sm">{item.title}</h3>
                  <p>{item.body}</p>
                  {item.cta && (
                    <a
                      href={item.cta.href}
                      className="btn-ghost"
                      style={{ alignSelf: "flex-start" }}
                    >
                      {item.cta.label}
                    </a>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 11 — Closing CTA Band ============ */}
        <section id="cta-band" className="section-pad" aria-labelledby="cta-heading">
          <div className="cta-band-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="cta-inner">
              <span className="eyebrow">{cta.eyebrow}</span>
              <h2 id="cta-heading" className="display-lg">
                {cta.heading}
              </h2>
              <p className="body-lg subcopy">{cta.subcopy}</p>
              <div className="cta-buttons">
                <a href={cta.primary.href} className="btn btn-primary">
                  {cta.primary.label}
                </a>
                <a href={cta.secondary.href} className="btn btn-secondary-dark">
                  {cta.secondary.label}
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
