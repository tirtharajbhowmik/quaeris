import type { Metadata } from "next";
import "./customers.css";
import { customersPage, brand } from "@/config/brand.config";
import type {
  CustomersStat,
  CustomersLogo,
  CustomersTestimonial,
} from "@/config/page-types/customers";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  Plug2,
  Layers,
  MessageSquareText,
  TrendingUp,
  Briefcase,
  ShieldAlert,
  ShoppingCart,
  Activity,
  Hammer,
  HardHat,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: customersPage.meta.title,
  description: customersPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  "plug-2": Plug2,
  layers: Layers,
  "message-square-text": MessageSquareText,
  "trending-up": TrendingUp,
  briefcase: Briefcase,
  "shield-alert": ShieldAlert,
  "shopping-cart": ShoppingCart,
  activity: Activity,
  hammer: Hammer,
  "hard-hat": HardHat,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: WebPage + FAQPage
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: customersPage.meta.title,
  description: customersPage.meta.description,
  url: `${brand.url}/customers`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: customersPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function CustomersPage() {
  const {
    hero,
    marquee,
    wins,
    caseStudies,
    proofBand,
    testimonials,
    deployment,
    industries,
    reviews,
    faq,
    cta,
  } = customersPage;

  return (
    <>
      {/* JSON-LD structured data */}
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
        {/* ============ Section 01 — Hero ============ */}
        <section
          id="customer-hero"
          className="cust-hero section-pad"
          aria-labelledby="customer-hero-heading"
        >
          <div className="cust-hero-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="cust-hero-inner">
              <span className="eyebrow cust-hero-eyebrow">{hero.eyebrow}</span>
              <h1
                id="customer-hero-heading"
                className="hero-h1"
                style={{ marginBottom: "var(--space-5)", maxWidth: "18ch" }}
              >
                {hero.h1}
              </h1>
              <p className="body-lg cust-hero-sub">{hero.subcopy}</p>
              <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
                <a
                  href={hero.primaryCta.href}
                  className="btn btn-primary"
                  aria-label={hero.primaryCta.ariaLabel}
                >
                  {hero.primaryCta.label}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 02 — Customer Logo Marquee ============ */}
        <section
          id="customer-logos"
          className="cust-logo-marquee"
          aria-label="Customer logos"
        >
          <div className="container">
            <p className="body-sm marquee-label">
              {marquee.labelLead}
              <span data-placeholder>{marquee.labelIndustry}</span>
              {marquee.labelTail}
            </p>
          </div>
          <div
            className="marquee-track-wrap"
            role="marquee"
            aria-label="Customer logos — most pending confirmation"
          >
            <div className="marquee-track" aria-hidden="true">
              {/* duplicate set for the seamless -50% CSS loop */}
              {[...marquee.logos, ...marquee.logos].map((logo: CustomersLogo, i) => (
                <div
                  key={`${logo.label}-${i}`}
                  className="marquee-logo"
                  {...(logo.placeholder ? { "data-placeholder": true } : {})}
                >
                  {logo.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 03 — How They Won ============ */}
        <section
          id="how-they-won"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="how-they-won-heading"
        >
          <div className="container">
            <Reveal className="section-header" style={{ marginBottom: "var(--space-9)" }}>
              <span className="eyebrow">{wins.intro.eyebrow}</span>
              <h2 id="how-they-won-heading" className="display-lg" data-placeholder>
                {wins.intro.heading}
              </h2>
              <p className="body-lg subcopy" data-placeholder>
                {wins.intro.subcopy}
              </p>
            </Reveal>

            <div className="feature-rows-list">
              {wins.rows.map((row, i) => {
                const visual = (
                  <Reveal className="feature-row-visual">
                    <div
                      className="feature-row-img-wrap feature-row-img-fallback"
                      aria-hidden="true"
                      data-placeholder
                    >
                      {winVisuals[i]}
                    </div>
                  </Reveal>
                );
                const text = (
                  <Reveal className="feature-row-text">
                    <span className="eyebrow feature-row-eyebrow">{row.eyebrow}</span>
                    <h3 className="display-md feature-row-heading">{row.heading}</h3>
                    <p className="body-md feature-row-body">{row.body}</p>
                    <div className="cs-stats" aria-label="Key metrics">
                      {row.stats.map((s: CustomersStat, si) => (
                        <div key={si} className="cs-stat">
                          <span
                            className="cs-stat-num"
                            {...(s.placeholder ? { "data-placeholder": true } : {})}
                          >
                            {s.num}
                          </span>
                          <span className="cs-stat-label">{s.label}</span>
                        </div>
                      ))}
                    </div>
                    <a href={row.cta.href} className="btn-ghost" data-placeholder>
                      {row.cta.label}
                    </a>
                  </Reveal>
                );
                return (
                  <div
                    key={row.heading}
                    className={`feature-row${row.flip ? " feature-row-flip" : ""}`}
                  >
                    {row.flip ? (
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

        {/* ============ Section 04 — Case Study Grid ============ */}
        <section
          id="case-studies"
          className="section-pad"
          aria-labelledby="case-studies-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{caseStudies.intro.eyebrow}</span>
              <h2 id="case-studies-heading" className="display-lg" data-placeholder>
                {caseStudies.intro.heading}
              </h2>
            </Reveal>

            <div className="case-study-grid">
              {caseStudies.cards.map((card) => (
                <Reveal key={card.industry} className="case-study-card" as="article">
                  <div className="cust-cs-meta">
                    <span className="cust-cs-logo" aria-hidden="true" data-placeholder>
                      {card.logoAbbr}
                    </span>
                    <span className="cust-cs-company" data-placeholder>
                      {card.company}
                    </span>
                  </div>
                  <span className="industry-chip">{card.industry}</span>
                  <h3 className="heading-sm" style={{ color: "var(--text-primary)" }}>
                    {card.headline}
                  </h3>
                  <div className="cs-stats" aria-label="Key metrics">
                    {card.stats.map((s: CustomersStat, si) => (
                      <div key={si} className="cs-stat">
                        <span
                          className="cs-stat-num"
                          {...(s.placeholder ? { "data-placeholder": true } : {})}
                        >
                          {s.num}
                        </span>
                        <span className="cs-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <a href={card.cta.href} className="btn-ghost" data-placeholder>
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal
              as="p"
              className="body-md"
              style={{
                color: "var(--text-secondary)",
                textAlign: "center",
                maxWidth: "68ch",
                margin: "var(--space-7) auto 0",
              }}
            >
              {caseStudies.footnote}
            </Reveal>
          </div>
        </section>

        {/* ============ Section 05 — Stat / Proof Band ============ */}
        <section
          id="proof-band"
          className="section-pad"
          aria-labelledby="proof-band-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <h2 id="proof-band-heading" className="display-lg">
                {proofBand.intro.heading}
              </h2>
            </Reveal>
            <Reveal className="stats-band-gradient" style={{ marginTop: "var(--space-8)" }}>
              <div className="stats-grid-gradient">
                {proofBand.items.map((stat) => (
                  <div key={stat.label} className="stat-block">
                    <span className="stat-num stat-number">{stat.num}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 06 — What Customers Say ============ */}
        <section
          id="testimonials"
          className="section-pad"
          aria-labelledby="testimonials-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <h2 id="testimonials-heading" className="display-lg">
                {testimonials.intro.heading}
              </h2>
            </Reveal>
          </div>

          <Reveal style={{ marginTop: "var(--space-8)" }}>
            <div className="testimonial-rows" aria-live="polite">
            {/* Row 1 — scrolls left-to-right reading order (default direction) */}
            <div className="testimonial-row">
              {[...testimonials.rowOne, ...testimonials.rowOne].map((t: CustomersTestimonial, i) => {
                const dup = i >= testimonials.rowOne.length;
                return (
                  <article
                    key={`r1-${i}`}
                    className="testimonial-card"
                    {...(dup ? { "aria-hidden": true } : {})}
                    {...(t.placeholder ? { "data-placeholder": true } : {})}
                  >
                    <p className="testimonial-quote">{t.quote}</p>
                    <div className="testimonial-author">
                      <span
                        className="author-avatar"
                        {...(dup ? {} : { "aria-hidden": true })}
                      >
                        {t.avatar}
                      </span>
                      <div>
                        <span className="author-name">{t.name}</span>
                        <br />
                        <span className="author-role">{t.role}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Row 2 — reverse direction for visual rhythm */}
            <div className="testimonial-row reverse">
              {[...testimonials.rowTwo, ...testimonials.rowTwo].map((t: CustomersTestimonial, i) => {
                const dup = i >= testimonials.rowTwo.length;
                return (
                  <article
                    key={`r2-${i}`}
                    className="testimonial-card"
                    {...(dup ? { "aria-hidden": true } : {})}
                    {...(t.placeholder ? { "data-placeholder": true } : {})}
                  >
                    <p className="testimonial-quote">{t.quote}</p>
                    <div className="testimonial-author">
                      <span
                        className="author-avatar"
                        {...(dup ? {} : { "aria-hidden": true })}
                      >
                        {t.avatar}
                      </span>
                      <div>
                        <span className="author-name">{t.name}</span>
                        <br />
                        <span className="author-role">{t.role}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            </div>
          </Reveal>
        </section>

        {/* ============ Section 07 — The Deployment Path ============ */}
        <section
          id="deployment-path"
          className="section-pad"
          aria-labelledby="deployment-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{deployment.intro.eyebrow}</span>
              <h2 id="deployment-heading" className="display-lg">
                {deployment.intro.heading}
              </h2>
              <p className="body-lg subcopy">{deployment.intro.subcopy}</p>
            </Reveal>

            <div className="icon-feature-grid">
              {deployment.steps.map((step) => (
                <Reveal key={step.heading} className="icon-feature">
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={step.icon} />
                  </div>
                  <div>
                    <span
                      className="eyebrow"
                      style={{
                        color: "var(--brand-accent)",
                        display: "block",
                        marginBottom: "var(--space-2)",
                      }}
                    >
                      {step.eyebrow}
                    </span>
                    <h3
                      className="heading-sm"
                      style={{ marginBottom: "var(--space-2)" }}
                    >
                      {step.heading}
                    </h3>
                    <p>{step.body}</p>
                    <p
                      className="body-sm"
                      style={{
                        color: "var(--text-tertiary)",
                        marginTop: "var(--space-3)",
                      }}
                      data-placeholder
                    >
                      {step.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 08 — Industry-Specific Outcomes ============ */}
        <section
          id="industries"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="industries-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{industries.intro.eyebrow}</span>
              <h2 id="industries-heading" className="display-lg" data-placeholder>
                {industries.intro.heading}
              </h2>
            </Reveal>

            <div className="segment-cards-grid segment-cards-grid--6" role="list">
              {industries.cards.map((card) => (
                <Reveal
                  key={card.label}
                  as="a"
                  href={card.cta.href}
                  className="segment-card"
                  role="listitem"
                >
                  <div className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>
                    {card.eyebrow}
                  </span>
                  <h3 className="heading-sm segment-label">{card.label}</h3>
                  <p className="body-sm segment-desc">{card.desc}</p>
                  <span className="btn-ghost">{card.cta.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 09 — Social Proof Band ============ */}
        <section id="reviews" className="cust-reviews" aria-labelledby="reviews-heading">
          <div className="container">
            <Reveal>
              <h2 id="reviews-heading" className="display-md">
                {reviews.heading}
              </h2>
            </Reveal>
            <Reveal className="review-badges" style={{ marginBottom: 0 }}>
              {reviews.badges.map((badge) => (
                <div key={badge.text} className="review-badge" data-placeholder>
                  <span className="review-badge-stars" aria-hidden="true">
                    {badge.stars}
                  </span>
                  <span className="review-badge-text">{badge.text}</span>
                  <span className="review-badge-platform">{badge.platform}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ Section 10 — FAQ ============ */}
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
                  <h3 className="heading-sm" style={{ marginBottom: "var(--space-3)" }}>
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

        {/* ============ Section 11 — CTA Band ============ */}
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
                <a
                  href={cta.primary.href}
                  className="btn btn-on-dark"
                  aria-label={cta.primary.ariaLabel}
                >
                  {cta.primary.label}
                </a>
                {cta.secondary && (
                  <a
                    href={cta.secondary.href}
                    className="btn btn-secondary-dark"
                    data-placeholder
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

// Decorative "How they won" row visuals (presentation only — kept inline per
// the mockup; not content). Token-driven SVGs, one per outcome row.
const winVisuals: React.ReactNode[] = [
  <svg key="g1" viewBox="0 0 800 530" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="530" rx="20" fill="url(#cust-g1)" />
    <g stroke="var(--brand-accent)" strokeWidth="2">
      <rect x="90" y="105" width="170" height="70" rx="12" fill="var(--bg-surface)" />
      <rect x="90" y="230" width="170" height="70" rx="12" fill="var(--bg-surface)" />
      <rect x="90" y="355" width="170" height="70" rx="12" fill="var(--bg-surface)" />
    </g>
    <g fill="var(--brand-accent)" fillOpacity="0.35">
      <rect x="114" y="128" width="96" height="10" rx="5" />
      <rect x="114" y="148" width="70" height="8" rx="4" />
      <rect x="114" y="253" width="110" height="10" rx="5" />
      <rect x="114" y="273" width="80" height="8" rx="4" />
      <rect x="114" y="378" width="88" height="10" rx="5" />
      <rect x="114" y="398" width="64" height="8" rx="4" />
    </g>
    <g stroke="var(--brand-accent)" strokeOpacity="0.45" strokeWidth="2">
      <path d="M260 140 C 380 140, 400 240, 480 250" />
      <path d="M260 265 C 360 265, 400 260, 480 262" />
      <path d="M260 390 C 380 390, 400 285, 480 272" />
    </g>
    <rect x="480" y="195" width="240" height="140" rx="16" fill="var(--brand-accent)" fillOpacity="0.12" stroke="var(--brand-accent)" strokeWidth="2" />
    <circle cx="528" cy="240" r="11" fill="var(--brand-accent)" />
    <path d="m523 240 4 4 7-8" stroke="var(--bg-surface)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="552" y="233" width="130" height="12" rx="6" fill="var(--brand-accent)" fillOpacity="0.5" />
    <rect x="508" y="272" width="174" height="10" rx="5" fill="var(--brand-accent)" fillOpacity="0.3" />
    <rect x="508" y="294" width="140" height="10" rx="5" fill="var(--brand-accent)" fillOpacity="0.3" />
    <defs>
      <linearGradient id="cust-g1" x1="0" y1="0" x2="800" y2="530" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="var(--brand-accent)" stopOpacity="0.05" />
        <stop offset="1" stopColor="var(--brand-accent)" stopOpacity="0.12" />
      </linearGradient>
    </defs>
  </svg>,
  <svg key="g2" viewBox="0 0 800 530" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="530" rx="20" fill="url(#cust-g2)" />
    <path d="M120 90v330h560" stroke="var(--brand-accent)" strokeOpacity="0.35" strokeWidth="2" />
    <g fill="var(--brand-accent)" fillOpacity="0.5">
      <rect x="160" y="130" width="56" height="290" rx="8" />
      <rect x="248" y="180" width="56" height="240" rx="8" />
      <rect x="336" y="242" width="56" height="178" rx="8" />
      <rect x="424" y="300" width="56" height="120" rx="8" />
      <rect x="512" y="350" width="56" height="70" rx="8" />
      <rect x="600" y="382" width="56" height="38" rx="8" />
    </g>
    <path d="M188 112 C 350 132, 480 290, 628 366" stroke="var(--brand-accent)" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />
    <circle cx="628" cy="366" r="9" fill="var(--brand-accent)" />
    <rect x="540" y="112" width="170" height="56" rx="12" fill="var(--bg-surface)" stroke="var(--brand-accent)" strokeWidth="2" />
    <rect x="560" y="132" width="92" height="12" rx="6" fill="var(--brand-accent)" fillOpacity="0.5" />
    <defs>
      <linearGradient id="cust-g2" x1="0" y1="0" x2="800" y2="530" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="var(--brand-accent)" stopOpacity="0.05" />
        <stop offset="1" stopColor="var(--brand-accent)" stopOpacity="0.12" />
      </linearGradient>
    </defs>
  </svg>,
  <svg key="g3" viewBox="0 0 800 530" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="530" rx="20" fill="url(#cust-g3)" />
    <rect x="140" y="85" width="520" height="360" rx="16" fill="var(--bg-surface)" stroke="var(--brand-accent)" strokeWidth="2" />
    <rect x="172" y="115" width="180" height="14" rx="7" fill="var(--brand-accent)" fillOpacity="0.5" />
    <g stroke="var(--brand-accent)" strokeOpacity="0.25" strokeWidth="2">
      <path d="M172 160h456" />
      <path d="M172 252h456" />
      <path d="M172 344h456" />
    </g>
    <g fill="var(--brand-accent)" fillOpacity="0.18">
      <circle cx="200" cy="206" r="18" />
      <circle cx="200" cy="298" r="18" />
      <circle cx="200" cy="390" r="18" />
    </g>
    <g fill="var(--brand-accent)" fillOpacity="0.35">
      <rect x="236" y="198" width="150" height="12" rx="6" />
      <rect x="236" y="290" width="120" height="12" rx="6" />
      <rect x="236" y="382" width="170" height="12" rx="6" />
    </g>
    <g>
      <rect x="500" y="188" width="128" height="36" rx="18" fill="var(--brand-accent)" fillOpacity="0.12" stroke="var(--brand-accent)" strokeWidth="2" />
      <rect x="500" y="280" width="128" height="36" rx="18" fill="var(--brand-accent)" fillOpacity="0.12" stroke="var(--brand-accent)" strokeWidth="2" />
      <rect x="500" y="372" width="128" height="36" rx="18" fill="var(--brand-accent)" fillOpacity="0.12" stroke="var(--brand-accent)" strokeWidth="2" />
    </g>
    <g stroke="var(--brand-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m552 206 8 8 14-16" />
      <path d="m552 298 8 8 14-16" />
      <path d="m552 390 8 8 14-16" />
    </g>
    <defs>
      <linearGradient id="cust-g3" x1="0" y1="0" x2="800" y2="530" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="var(--brand-accent)" stopOpacity="0.05" />
        <stop offset="1" stopColor="var(--brand-accent)" stopOpacity="0.12" />
      </linearGradient>
    </defs>
  </svg>,
];
