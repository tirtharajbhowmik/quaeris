// ============================================================
// /solutions/product — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Solutions · Product page. Types only —
// values live in src/brands/<brand>/pages/solutions-product.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  CompareTable,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

/** A certified-metric stat shown in the hero answer-card mock. */
export interface SolutionsProductHeroStat {
  label: string;
  value: string;
}

/** A trust pill on the hero answer-card mock. */
export interface SolutionsProductHeroBadge {
  label: string;
  /** Accent-styled pill (vs. neutral). */
  accent?: boolean;
}

/** A lineage / definition meta row under the hero answer-card mock. */
export interface SolutionsProductHeroMeta {
  text: string;
}

/** Section 3.1 — hero (two-column, answer-card mock visual). */
export interface SolutionsProductHero {
  eyebrow: string;
  /** H1 lead text (precedes the accent-line clause). */
  h1: string;
  /** Accent-line clause rendered on its own line. */
  h1Accent: string;
  subcopy: string;
  primaryCta: LinkRef;
  ghostCta: LinkRef;
  /** Illustrative governed-answer card. */
  card: {
    ariaLabel: string;
    question: string;
    stat: SolutionsProductHeroStat;
    badges: SolutionsProductHeroBadge[];
    meta: SolutionsProductHeroMeta[];
  };
}

/**
 * Section 3.2 — problem/solution card. Variant of the shared ProblemSolution
 * with an icon + index, a problem heading, and an icon'd solution headline.
 */
export interface SolutionsProductChallengeCard {
  index: string;
  problemIcon: LucideIcon;
  problemTitle: string;
  problem: string;
  fixLabel: string;
  fixIcon: LucideIcon;
  fixTitle: string;
  fixBody: string;
}

/** Section 3.2 — the product analytics challenge. */
export interface SolutionsProductChallenge {
  intro: SectionIntro;
  cards: SolutionsProductChallengeCard[];
}

/** Section 3.3 — a single methodology step (icon-feature + visual stand-in). */
export interface SolutionsProductStep {
  icon: LucideIcon;
  title: string;
  body: string;
  /** Label for the per-step placeholder visual. */
  visual: string;
}

/** Section 3.3 — how product teams get governed answers. */
export interface SolutionsProductHowItWorks {
  intro: SectionIntro;
  steps: SolutionsProductStep[];
}

/** Section 3.4 — a single product use-case card (segment-card based). */
export interface SolutionsProductUseCaseCard {
  icon: LucideIcon;
  category: string;
  metric: string;
  questions: string[];
  answer: string;
}

/** Section 3.4 — product questions Quaeris answers. */
export interface SolutionsProductUseCases {
  intro: SectionIntro;
  cards: SolutionsProductUseCaseCard[];
}

/** Section 3.5 — a single two-up case-study card. */
export interface SolutionsProductCaseCard {
  industry: string;
  client: string;
  challengeLabel: string;
  challenge: string;
  solutionLabel: string;
  solution: string;
  outcomeLabel: string;
  outcomes: string[];
  quote: string;
}

/** Section 3.5 — proof: product teams moving faster. */
export interface SolutionsProductProof {
  intro: SectionIntro;
  cards: SolutionsProductCaseCard[];
  cta: LinkRef;
}

/** Section 3.6 — a single governance value prop (dark section). */
export interface SolutionsProductValueProp {
  index: string;
  icon: LucideIcon;
  title: string;
  body: string;
}

/** A metric tile in the dark-section dashboard mock. */
export interface SolutionsProductMetricTile {
  label: string;
  value: string;
  delta?: string;
  /** Highlight the tile (accent border/background). */
  active?: boolean;
}

/** The MetricDashboardMock visual in the dark governance section. */
export interface SolutionsProductDashboard {
  header: string;
  badge: string;
  tiles: SolutionsProductMetricTile[];
  caption: string;
}

/** Section 3.6 — feature spotlight: governance & audit (dark). */
export interface SolutionsProductGovernance {
  intro: SectionIntro;
  valueProps: SolutionsProductValueProp[];
  cta: LinkRef;
  dashboard: SolutionsProductDashboard;
}

/** Section 3.7 — competitive comparison table. */
export interface SolutionsProductComparison {
  intro: SectionIntro;
  /** SR-only table caption. */
  caption: string;
  table: CompareTable;
}

/** Section 3.8 — integration & warehouse compatibility. */
export interface SolutionsProductIntegrations {
  intro: SectionIntro;
  warehouses: string[];
  body: string;
  cta: LinkRef;
}

/** A "keep exploring" link in the FAQ mini-card. */
export interface SolutionsProductFaqLink {
  label: string;
  href: string;
}

/** Section 3.9 — FAQ tailored to product teams. */
export interface SolutionsProductFaq {
  intro: SectionIntro;
  miniCard: {
    title: string;
    links: SolutionsProductFaqLink[];
  };
  items: PageFaqItem[];
}

/** A single field in the newsletter signup form. */
export interface SolutionsProductNewsletter {
  eyebrow: string;
  heading: string;
  body: string;
  placeholder: string;
  cta: string;
  /** Consent lead text (the inline privacy link follows it). */
  consent: string;
  /** Inline privacy-policy link rendered after the consent text. */
  privacyLink: LinkRef;
}

export interface SolutionsProductPageContent {
  meta: PageMeta;
  hero: SolutionsProductHero;
  challenge: SolutionsProductChallenge;
  howItWorks: SolutionsProductHowItWorks;
  useCases: SolutionsProductUseCases;
  proof: SolutionsProductProof;
  governance: SolutionsProductGovernance;
  comparison: SolutionsProductComparison;
  integrations: SolutionsProductIntegrations;
  faq: SolutionsProductFaq;
  cta: CtaBandContent;
  newsletter: SolutionsProductNewsletter;
}
