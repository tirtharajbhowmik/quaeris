import type { Metadata } from "next";
import { Fragment } from "react";
import "./platform-access-control.css";
import { platformAccessControlPage, brand } from "@/config/brand.config";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import NewsletterBlock from "@/components/ui/NewsletterBlock";
import {
  Users,
  MessageSquare,
  ShieldCheck,
  Code,
  Database,
  Check,
  EyeOff,
  UserCheck,
  FileText,
  BarChart3,
  ShieldAlert,
  Store,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: platformAccessControlPage.meta.title,
  description: platformAccessControlPage.meta.description,
};

// Map content icon names → lucide-react components.
const icons: Record<string, LucideIcon> = {
  users: Users,
  "message-square": MessageSquare,
  "shield-check": ShieldCheck,
  code: Code,
  database: Database,
  check: Check,
  "eye-off": EyeOff,
  "user-check": UserCheck,
  "file-text": FileText,
  "bar-chart-3": BarChart3,
  "shield-alert": ShieldAlert,
  store: Store,
};

function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = icons[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
}

// Decorative inline SVGs (presentation only — not content).
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const AlertCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const MessageSquareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const UserBadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
  </svg>
);
const OutcomeCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// Pipeline icon SVGs (decorative — the diagram is aria-hidden).
const pipeIcons: Record<string, React.ReactNode> = {
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "message-square": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  "shield-check": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
};

// Step icon SVGs for the dark "how it works" list (decorative).
const stepIcons: React.ReactNode[] = [
  <svg key="s1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>,
  <svg key="s2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  <svg key="s3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
  <svg key="s4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  <svg key="s5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>,
  <svg key="s6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>,
];

// Comparison cell marks → shared compare-mark classes.
const compareMark = (kind: "yes" | "no" | "partial" | "text", value?: string) => {
  if (kind === "text") return <>{value}</>;
  const label = kind === "yes" ? "Yes — " : kind === "no" ? "No — " : "Partial — ";
  const mark =
    kind === "yes" ? <CheckIcon /> : kind === "no" ? <XIcon /> : <MinusIcon />;
  return (
    <span className={`compare-mark compare-mark-${kind}`}>
      {mark}
      <span>
        <span className="sr-only">{label}</span>
        {value}
      </span>
    </span>
  );
};

// JSON-LD: SoftwareApplication + FAQPage + BreadcrumbList
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: platformAccessControlPage.meta.description,
  url: `${brand.url}/platform/access-control`,
  featureList: [
    "Role-based access control",
    "Row-level security",
    "Column-level masking",
    "Query-time enforcement",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: platformAccessControlPage.faq.items.map((item) => ({
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
      name: "Access Control",
      item: `${brand.url}/platform/access-control`,
    },
  ],
};

export default function PlatformAccessControlPage() {
  const {
    hero,
    problem,
    pillars,
    howItWorks,
    comparison,
    useCases,
    implementation,
    faq,
    cta,
  } = platformAccessControlPage;

  // Renders the body of an implementation row, substituting {code} with an inline snippet.
  const renderBody = (body: string, inlineCode?: string) => {
    if (!inlineCode || !body.includes("{code}")) return body;
    const [before, after] = body.split("{code}");
    return (
      <>
        {before}
        <code className="acl-code-inline">{inlineCode}</code>
        {after}
      </>
    );
  };

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
        {/* ============ 3.1 — Hero (AccessControlHero) ============ */}
        <section
          id="acl-hero"
          className="section-ink section-pad"
          aria-labelledby="page-title"
        >
          <div className="acl-hero-glow" aria-hidden="true" />
          <div className="container">
            <Reveal className="acl-hero-inner">
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1 id="page-title" className="hero-h1">
                {hero.h1}
              </h1>
              <p className="body-lg subcopy">{hero.subcopy}</p>
              <div className="hero-buttons btn-stack">
                <a href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="btn btn-secondary-dark"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>

            {/* Hero diagram: governed query pipeline with role-check gate */}
            <Reveal as="figure" className="acl-pipeline-frame">
              <div className="acl-pipeline" aria-hidden="true">
                {hero.pipeline.map((node, i) => (
                  <Fragment key={node.label}>
                    {i > 0 && (
                      <span
                        className={`acl-pipe-arrow${
                          node.granted ? " acl-pipe-arrow-granted" : ""
                        }`}
                      >
                        <ArrowRight />
                      </span>
                    )}
                    <div
                      className={`acl-pipe-node${node.gate ? " acl-pipe-gate" : ""}`}
                    >
                      <span className="acl-pipe-icon">{pipeIcons[node.icon]}</span>
                      <span className="acl-pipe-label">{node.label}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <span className="acl-pipe-block" data-placeholder>
                <LockIcon />
                {hero.blockNote}
              </span>
              <figcaption className="sr-only">{hero.figCaption}</figcaption>
            </Reveal>
          </div>
        </section>

        {/* ============ 3.2 — Problem / Solution (AccessControlProblemVisual) ============ */}
        <section
          id="problem"
          className="section-ink section-pad acl-dark-divider"
          aria-label={problem.ariaLabel}
        >
          <div className="container">
            <div className="acl-ps-grid">
              <Reveal className="card card-dark acl-ps-panel" as="article">
                <span className="eyebrow">{problem.problem.eyebrow}</span>
                <h2 className="display-lg">{problem.problem.heading}</h2>
                <ul className="acl-checklist acl-list-problem">
                  {problem.problem.items.map((item) => (
                    <li key={item}>
                      <AlertCircleIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="card card-dark acl-ps-panel" as="article">
                <span className="eyebrow">{problem.solution.eyebrow}</span>
                <h2 className="display-lg">{problem.solution.heading}</h2>
                <ul className="acl-checklist acl-list-solution">
                  {problem.solution.items.map((item) => (
                    <li key={item}>
                      <CheckCircleIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ 3.3 — Three Pillars (IconFeatureGrid) ============ */}
        <section
          id="pillars"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="pillars-heading"
        >
          <div className="container">
            <Reveal className="section-header">
              <h2 id="pillars-heading" className="display-lg">
                {pillars.intro.heading}
              </h2>
            </Reveal>

            <div className="icon-feature-grid icon-feature-grid--3">
              {pillars.cards.map((card) => (
                <Reveal
                  key={card.title}
                  className="icon-feature card acl-card-canvas acl-pillar-card"
                  as="article"
                >
                  <div className="icon-box" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="heading-sm">{card.title}</h3>
                  <p>{card.body}</p>
                  <a href={card.cta.href} className="btn-ghost">
                    {card.cta.label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.4 — How It Works (dark feature + dashboard mock) ============ */}
        <section
          id="how-it-works"
          className="section-ink section-pad"
          aria-labelledby="how-heading"
        >
          <div className="dark-feature-glow" aria-hidden="true" />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <Reveal className="section-header section-header-dark">
              <span className="eyebrow">{howItWorks.intro.eyebrow}</span>
              <h2 id="how-heading" className="display-lg">
                {howItWorks.intro.heading}
              </h2>
              <p className="body-lg subcopy">{howItWorks.intro.subcopy}</p>
            </Reveal>

            <div
              className="dark-feature-grid"
              style={{ marginTop: "var(--space-7)" }}
            >
              {/* Left: six process steps */}
              <Reveal
                as="ol"
                className="value-prop-list acl-steps"
                style={{ marginTop: 0 }}
              >
                {howItWorks.steps.map((step, i) => (
                  <li key={step.heading} className="value-prop-row">
                    <span className="value-prop-num" aria-hidden="true">
                      {step.eyebrow}
                    </span>
                    <span className="acl-step-icon" aria-hidden="true">
                      {stepIcons[i]}
                    </span>
                    <div className="value-prop-text">
                      <h3>{step.heading}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </Reveal>

              {/* Right: access-scoped dashboard mock */}
              <Reveal className="metric-dashboard" data-placeholder>
                <div className="metric-dashboard-header">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      fontWeight: "var(--weight-display)",
                      color: "var(--text-on-dark)",
                    }}
                  >
                    {howItWorks.dashboard.title}
                  </span>
                  <span className="badge badge-accent acl-role-badge">
                    <UserBadgeIcon />
                    {howItWorks.dashboard.roleBadge}
                  </span>
                </div>
                <p className="acl-query-row">
                  <MessageSquareIcon />
                  {howItWorks.dashboard.question}
                </p>
                <table className="acl-result-table">
                  <caption className="sr-only">
                    {howItWorks.dashboard.tableCaption}
                  </caption>
                  <thead>
                    <tr>
                      {howItWorks.dashboard.columns.map((col) => (
                        <th key={col} scope="col">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {howItWorks.dashboard.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.cells.map((cell, ci) => (
                          <td key={ci}>
                            {cell.kind === "masked" ? (
                              <span className="acl-cell-masked">
                                <EyeOffIcon />
                                {cell.value}
                              </span>
                            ) : (
                              cell.value
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="acl-rows-note">
                  <ShieldIcon />
                  {howItWorks.dashboard.rowsNote}
                </p>
                <p className="chart-caption">{howItWorks.dashboard.caption}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ 3.5 — Comparison (AccessControlComparison) ============ */}
        <section
          id="comparison"
          className="section-pad"
          style={{ background: "var(--bg-warm)" }}
          aria-labelledby="comparison-heading"
        >
          <div className="container">
            <Reveal className="section-header center">
              <h2 id="comparison-heading" className="display-lg">
                {comparison.intro.heading}
              </h2>
            </Reveal>

            <Reveal
              className="compare-table-wrap"
              style={{ marginTop: "var(--space-8)" }}
              role="region"
              aria-label="Access control capability comparison between Quaeris, traditional BI tools, and ungoverned AI agents (scrollable)"
              tabIndex={0}
            >
              <table
                className="compare-table"
                aria-describedby="acl-comparison-footnote"
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
                            {compareMark(cell.kind, cell.value)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            {comparison.table.note && (
              <Reveal as="p" id="acl-comparison-footnote" className="compare-note">
                {comparison.table.note}
              </Reveal>
            )}
          </div>
        </section>

        {/* ============ 3.6 — Use Cases (AccessControlUseCases) ============ */}
        <section
          id="use-cases"
          className="section-pad"
          aria-labelledby="usecases-heading"
        >
          <div className="container">
            <Reveal className="section-header">
              <h2 id="usecases-heading" className="display-lg">
                {useCases.intro.heading}
              </h2>
            </Reveal>

            <div className="case-study-grid">
              {useCases.cards.map((card) => (
                <Reveal
                  key={card.industry}
                  className="case-study-card acl-card-canvas"
                  as="article"
                >
                  <div className="acl-usecase-head">
                    <div className="icon-box" aria-hidden="true">
                      <Icon name={card.icon} />
                    </div>
                    <span className="industry-chip">{card.industry}</span>
                  </div>
                  <h3 className="heading-sm">{card.heading}</h3>
                  <p className="cs-outcome">{card.body}</p>
                  <ul className="acl-outcome-list">
                    {card.outcomes.map((outcome) => (
                      <li key={outcome}>
                        <OutcomeCheckIcon />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 3.7 — Implementation Details (FeatureRow ×2) ============ */}
        <section
          id="implementation"
          className="section-pad"
          style={{ background: "var(--bg-surface)" }}
          aria-labelledby="impl-heading"
        >
          <div className="container">
            <Reveal className="section-header methodology-header">
              <h2 id="impl-heading" className="display-lg">
                {implementation.intro.heading}
              </h2>
            </Reveal>

            <div className="feature-rows-list">
              {implementation.rows.map((row) => {
                const text = (
                  <Reveal className="feature-row-text">
                    <span className="eyebrow feature-row-eyebrow">
                      {row.eyebrow}
                    </span>
                    <h3 className="display-md feature-row-heading">
                      {row.heading}
                    </h3>
                    <p className="body-md feature-row-body">
                      {renderBody(row.body, row.inlineCode)}
                    </p>
                    <a href={row.cta.href} className="btn-ghost">
                      {row.cta.label}
                    </a>
                  </Reveal>
                );
                const visual = (
                  <Reveal className="feature-row-visual">
                    {row.visual.type === "flow" ? (
                      <figure className="acl-flow-frame">
                        <div
                          className="acl-pipeline acl-pipeline-light"
                          aria-hidden="true"
                        >
                          {row.visual.nodes.map((node, i) => (
                            <Fragment key={node.label}>
                              {i > 0 && (
                                <span className="acl-pipe-arrow">
                                  <ArrowRight />
                                </span>
                              )}
                              <div
                                className={`acl-pipe-node${
                                  node.gate ? " acl-pipe-gate" : ""
                                }`}
                              >
                                <span className="acl-pipe-icon">
                                  {pipeIcons[node.icon]}
                                </span>
                                <span className="acl-pipe-label">
                                  {node.label}
                                </span>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                        <figcaption className="sr-only">
                          {row.visual.figCaption}
                        </figcaption>
                      </figure>
                    ) : (
                      <div className="acl-code-pair">
                        {row.visual.cards.map((codeCard, ci) => (
                          <div
                            key={codeCard.label}
                            className="acl-code-card"
                            {...(ci === 0 ? { "data-placeholder": true } : {})}
                          >
                            <span className="acl-code-label">
                              {codeCard.label}
                            </span>
                            <pre className="acl-code">{codeCard.code}</pre>
                          </div>
                        ))}
                      </div>
                    )}
                  </Reveal>
                );
                return (
                  <div
                    key={row.heading}
                    className={`feature-row${row.flip ? " feature-row-flip" : ""}`}
                  >
                    {text}
                    {visual}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ 3.8 — FAQ ============ */}
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
                  <Reveal className="faq-mini-card" data-placeholder>
                    <h3
                      className="heading-sm"
                      style={{ marginBottom: "var(--space-3)" }}
                    >
                      {faq.miniCard.title}
                    </h3>
                    <p>{faq.miniCard.body}</p>
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

        {/* ============ 3.9 — CTA Band ============ */}
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
                <a href={cta.primary.href} className="btn btn-primary">
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

        {/* ============ 3.10 — Newsletter (brand-config driven) ============ */}
        <NewsletterBlock />
      </main>

      <SiteFooter />
    </>
  );
}
