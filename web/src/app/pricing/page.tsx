import type { Metadata } from "next";
import "./pricing.css";
import { pricingPage as pricingPageRaw, brand } from "@/config/brand.config";
import type { PricingPageContent } from "@/config/page-types/pricing";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import {
  ShieldCheck,
  Lock,
  Cpu,
  Check,
  Minus,
  Database,
  Globe,
  Award,
  EyeOff,
  FileText,
  Layers,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

// The brand config exports `pricingPage` with `satisfies`, which preserves the
// narrow inferred literal type (array element unions where members differ in
// optional keys like `lead` / `featurePlaceholder`). Widen to the declared
// content interface so optional properties read uniformly across all rows.
const pricingPage: PricingPageContent = pricingPageRaw;

export const metadata: Metadata = {
  title: pricingPage.meta.title,
  description: pricingPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  lock: Lock,
  cpu: Cpu,
  database: Database,
  globe: Globe,
  award: Award,
  "eye-off": EyeOff,
  "file-text": FileText,
  layers: Layers,
  "layout-dashboard": LayoutDashboard,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// JSON-LD: SoftwareApplication (with per-tier offers) + FAQPage.
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: pricingPage.meta.description,
  url: `${brand.url}/pricing`,
  offers: pricingPage.tiers.tiers.map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceType: "https://schema.org/InvoicePrice",
    },
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingPage.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PricingPage() {
  const { hero, tiers, stats, matrix, useCases, trustStrip, proof, faq, cta } =
    pricingPage;

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
          id="pricing-hero"
          className="pricing-hero section-pad"
          aria-labelledby="pricing-hero-heading"
        >
          <div className="container">
            <Reveal className="pricing-hero-inner">
              <span className="badge badge-accent">{hero.badge}</span>
              <h1 id="pricing-hero-heading" className="hero-h1">
                {hero.h1}
              </h1>
              <p className="body-lg pricing-hero-sub">{hero.subcopy}</p>

              {/* Default state: Annual. Swaps the pricing callout text in Section 02 only. */}
              <div
                className="pricing-toggle"
                role="group"
                aria-label={hero.toggle.groupLabel}
              >
                <button
                  type="button"
                  className="pricing-toggle-btn"
                  data-billing="annual"
                  aria-pressed="true"
                >
                  {hero.toggle.annual}
                </button>
                <button
                  type="button"
                  className="pricing-toggle-btn"
                  data-billing="monthly"
                  aria-pressed="false"
                >
                  {hero.toggle.monthly}
                </button>
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
          </div>
        </section>

        {/* ============ Section 02 — Tier Cards ============ */}
        <section id="plans" className="section-pad" aria-label="Pricing tiers">
          <div className="container">
            <div className="pricing-tier-grid">
              {tiers.tiers.map((tier) => (
                <Reveal
                  key={tier.name}
                  as="article"
                  className={`pricing-tier-card${tier.featured ? " pricing-tier-card--featured" : ""}`}
                >
                  {tier.badge && (
                    <span className="eyebrow pricing-tier-badge">
                      {tier.badge}
                    </span>
                  )}
                  <h2 className="display-md pricing-tier-name">{tier.name}</h2>
                  <p className="pricing-tier-positioning">{tier.positioning}</p>

                  <div
                    className="pricing-tier-price"
                    {...(tier.price.custom ? {} : { "aria-live": "polite" })}
                  >
                    {tier.price.annual && (
                      <span className="pricing-price pricing-price-annual">
                        {tier.price.annual.lead}{" "}
                        <span
                          className="pricing-price-num"
                          data-placeholder
                          aria-label="Price awaiting sales input"
                        >
                          {tier.price.annual.num}
                        </span>{" "}
                        {tier.price.annual.suffix}{" "}
                        <span className="pricing-price-note">
                          {tier.price.annual.note}
                        </span>
                      </span>
                    )}
                    {tier.price.monthly && (
                      <span className="pricing-price pricing-price-monthly">
                        {tier.price.monthly.lead}{" "}
                        <span
                          className="pricing-price-num"
                          data-placeholder
                          aria-label="Price awaiting sales input"
                        >
                          {tier.price.monthly.num}
                        </span>{" "}
                        {tier.price.monthly.suffix}{" "}
                        <span className="pricing-price-note">
                          {tier.price.monthly.note}
                        </span>
                      </span>
                    )}
                    {tier.price.custom && (
                      <span className="pricing-price">
                        {tier.price.custom.label}{" "}
                        <span className="pricing-price-note">
                          {tier.price.custom.note}
                        </span>
                      </span>
                    )}
                    <span className="pricing-tier-sublabel">
                      {tier.price.sublabel}
                    </span>
                  </div>

                  <ul className="pricing-feature-list">
                    {tier.features.map((f) =>
                      f.lead ? (
                        <li key={f.text}>
                          <span className="pricing-feature-lead">{f.text}</span>
                        </li>
                      ) : (
                        <li key={f.text}>
                          <Check aria-hidden="true" />
                          <span>{f.text}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="pricing-tier-cta">
                    <a href={tier.primaryCta.href} className="btn btn-primary">
                      {tier.primaryCta.label}
                    </a>
                    <a href={tier.ghostCta.href} className="btn btn-ghost">
                      {tier.ghostCta.label}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 03 — Stat Band (dark) ============ */}
        <section
          id="deployment-stats"
          className="pricing-stats-band section-ink section-pad"
          aria-label="Proof of deployment efficiency"
        >
          <div className="container">
            <p className="eyebrow marquee-label">{stats.eyebrow}</p>
            <Reveal className="stats-grid">
              {stats.items.map((stat) => {
                // Split a trailing unit word so it renders smaller (e.g. "— weeks").
                const [value, ...unitParts] = stat.num.split(" ");
                const unit = unitParts.join(" ");
                const isPlaceholder = value === "—";
                return (
                  <div key={stat.label} className="stat-block">
                    <span
                      className="stat-num stat-number"
                      {...(isPlaceholder
                        ? {
                            "data-placeholder": true,
                            "aria-label":
                              "Placeholder — awaiting verified figure",
                          }
                        : { "aria-label": stat.num })}
                    >
                      {value}
                      {unit && (
                        <span className="pricing-stat-unit"> {unit}</span>
                      )}
                    </span>
                    <span className="stat-label body-sm">{stat.label}</span>
                    {stat.desc && (
                      <span className="stat-delta">{stat.desc}</span>
                    )}
                  </div>
                );
              })}
            </Reveal>
          </div>
        </section>

        {/* ============ Section 04 — Capability Depth by Tier ============ */}
        <section
          id="whats-included"
          className="section-pad"
          aria-labelledby="matrix-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{matrix.intro.eyebrow}</span>
              <h2 id="matrix-heading" className="display-lg">
                {matrix.intro.heading}
              </h2>
            </Reveal>

            <Reveal>
              <div
                className="pricing-matrix-wrap"
                role="region"
                aria-labelledby="matrix-heading"
                tabIndex={0}
              >
                <table className="pricing-matrix">
                <caption className="sr-only">{matrix.caption}</caption>
                <thead>
                  <tr>
                    {matrix.columns.map((col) => (
                      <th key={col} scope="col">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>

                {matrix.groups.map((group) => (
                  <tbody key={group.label}>
                    <tr className="pricing-matrix-group">
                      <th colSpan={4} scope="colgroup">
                        <span className="eyebrow">{group.label}</span>
                      </th>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.feature}>
                        <th
                          scope="row"
                          {...(row.featurePlaceholder
                            ? { "data-placeholder": true }
                            : {})}
                        >
                          {row.link && row.linkText ? (
                            <>
                              <a className="pricing-matrix-link" href={row.link}>
                                {row.linkText}
                              </a>
                              {row.feature.slice(row.linkText.length)}
                            </>
                          ) : (
                            row.feature
                          )}
                        </th>
                        {row.cells.map((cell, ci) => {
                          if (cell.kind === "check") {
                            return (
                              <td
                                key={ci}
                                className="pricing-matrix-check"
                                {...(row.placeholder
                                  ? { "data-placeholder": true }
                                  : {})}
                              >
                                <Check aria-hidden="true" />
                                <span className="sr-only">Included</span>
                              </td>
                            );
                          }
                          if (cell.kind === "minus") {
                            return (
                              <td key={ci} className="pricing-matrix-minus">
                                <Minus aria-hidden="true" />
                                <span className="sr-only">Not included</span>
                              </td>
                            );
                          }
                          return (
                            <td
                              key={ci}
                              {...(row.placeholder
                                ? { "data-placeholder": true }
                                : {})}
                            >
                              {cell.value}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                ))}
                </table>
              </div>
            </Reveal>

            <Reveal className="pricing-matrix-cta">
              <a href={matrix.cta.href} className="btn btn-ghost">
                {matrix.cta.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ Section 05 — Deployment Use Cases ============ */}
        <section
          id="use-cases"
          className="section-pad"
          aria-label="Deployment use cases"
        >
          <div className="container">
            <div
              className="segment-cards-grid pricing-seg-3"
              role="list"
            >
              {useCases.cards.map((card) => (
                <Reveal
                  key={card.label}
                  as="a"
                  href={card.href}
                  className="segment-card"
                  role="listitem"
                >
                  <div className="segment-icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h2 className="heading-sm segment-label">{card.label}</h2>
                  <p className="body-sm segment-desc">{card.desc}</p>
                  <span className="btn btn-ghost">{card.linkLabel}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Section 06 — Trust and Compliance Strip ============ */}
        <section
          id="trust"
          className="pricing-trust-strip"
          aria-label="Trust and compliance"
        >
          <div className="container">
            <ul className="pricing-trust-grid" role="list">
              {trustStrip.badges.map((badge) => {
                const inner = (
                  <>
                    <Icon name={badge.icon} />
                    <span className="pricing-trust-label">{badge.label}</span>
                    <span className="pricing-trust-sub">{badge.sublabel}</span>
                  </>
                );
                return (
                  <li key={badge.label}>
                    {badge.href ? (
                      <a href={badge.href} className="pricing-trust-badge">
                        {inner}
                      </a>
                    ) : (
                      <span
                        className={`pricing-trust-badge${badge.pending ? " pricing-trust-badge--pending" : ""}`}
                        {...(badge.pending ? { "data-placeholder": true } : {})}
                      >
                        {inner}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ============ Section 07 — Customer Proof ============ */}
        <section
          id="proof"
          className="section-pad"
          aria-label="Customer proof"
        >
          <div className="container">
            <div className="pricing-case-grid">
              {proof.cards.map((card) => (
                <Reveal
                  key={card.industry}
                  as="article"
                  className="case-study-card"
                >
                  <span className="industry-chip">{card.industry}</span>
                  <h2
                    className="display-md"
                    style={{ color: "var(--text-primary)" }}
                    data-placeholder
                  >
                    {card.client}
                  </h2>
                  <p className="cs-outcome">{card.outcome}</p>
                  <div
                    className="cs-stats"
                    aria-label="Key metrics"
                    data-placeholder
                  >
                    {card.stats.map((s, si) => (
                      <div key={si} className="cs-stat">
                        <span className="cs-stat-num">{s.num}</span>
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
          </div>
        </section>

        {/* ============ Section 08 — Pricing FAQ ============ */}
        <section
          id="faq"
          className="section-pad"
          aria-labelledby="pricing-faq-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <span className="eyebrow">{faq.intro.eyebrow}</span>
              <h2 id="pricing-faq-heading" className="display-lg">
                {faq.intro.heading}
              </h2>
              <p className="body-lg subcopy">{faq.intro.subcopy}</p>
            </Reveal>

            <Reveal className="pricing-faq-wrap">
              <Accordion items={faq.items} />
            </Reveal>
          </div>
        </section>

        {/* ============ Section 09 — CTA Band ============ */}
        <section
          id="cta-band"
          className="section-pad"
          aria-labelledby="pricing-cta-heading"
        >
          <div className="cta-band-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="cta-inner">
              <span className="eyebrow">{cta.eyebrow}</span>
              <h2 id="pricing-cta-heading" className="display-lg">
                {cta.heading}
              </h2>
              <p className="body-lg subcopy">{cta.subcopy}</p>
              <div className="cta-buttons">
                <a href={cta.primary.href} className="btn btn-primary">
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
