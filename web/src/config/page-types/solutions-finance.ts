// ============================================================
// /solutions/finance — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Solutions · Finance page. Types only —
// values live in src/brands/<brand>/pages/solutions-finance.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  FeatureItem,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

/** A two-line trust badge in the finance hero strip (icon + bold + proof). */
export interface SolutionsFinanceTrustBadge {
  icon: LucideIcon;
  title: string;
  proof: string;
}

/** A single KPI card in the hero dashboard stand-in. */
export interface SolutionsFinanceKpi {
  label: string;
  value: string;
  delta: string;
  /** Negative/down delta tint. */
  down?: boolean;
}

/** Section 3.1 — finance hero with trust strip + placeholder KPI dashboard. */
export interface SolutionsFinanceHero {
  eyebrow: string;
  /** Lead clause of the H1 (before the accent line). */
  h1: string;
  /** Accented continuation of the H1. */
  h1Accent: string;
  subcopy: string;
  primaryCta: LinkRef;
  secondaryCta: LinkRef;
  trust: SolutionsFinanceTrustBadge[];
  dashboard: {
    label: string;
    ariaLabel: string;
    kpis: SolutionsFinanceKpi[];
  };
}

/** Section 3.2 — a pure problem card (icon + title + body). */
export interface SolutionsFinanceProblemCard {
  icon: LucideIcon;
  title: string;
  body: string;
}

/** Section 3.2 — the problem (ProblemSolutionCards, 3-up). */
export interface SolutionsFinanceProblem {
  intro: SectionIntro;
  cards: SolutionsFinanceProblemCard[];
}

/** A single allow/proof row inside a feature-row product shot. */
export interface SolutionsFinanceShotRow {
  /** Bold lead fragment of the row. */
  term: string;
  /** Remainder of the row description (after the term). */
  rest: string;
  ok: string;
}

/** The placeholder product shot inside a feature row. */
export interface SolutionsFinanceShot {
  ariaLabel: string;
  label: string;
  /** Optional chat-bubble query (Row 2 variance shot). */
  query?: string;
  rows: SolutionsFinanceShotRow[];
}

/** Section 3.3 — a single FeatureRow step (text + bullets + visual). */
export interface SolutionsFinanceStep {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  cta: LinkRef;
  shot: SolutionsFinanceShot;
}

/** Section 3.3 — how Quaeris solves it (FeatureRow ×3, alternating). */
export interface SolutionsFinanceHowItWorks {
  intro: SectionIntro;
  steps: SolutionsFinanceStep[];
}

/** Section 3.4 — why finance teams choose Quaeris (IconFeatureGrid, 4-up). */
export interface SolutionsFinanceWhy {
  intro: SectionIntro;
  items: FeatureItem[];
}

/** Section 3.5 — a single finance use-case card (segment-card variant). */
export interface SolutionsFinanceUseCaseCard {
  icon: LucideIcon;
  title: string;
  scenarioLabel: string;
  scenario: string;
  howLabel: string;
  how: string;
  outcomeLabel: string;
  outcome: string;
  cta: LinkRef;
}

/** Section 3.5 — vertical proof: finance use cases (SegmentCards, 3-up). */
export interface SolutionsFinanceUseCases {
  intro: SectionIntro;
  cards: SolutionsFinanceUseCaseCard[];
}

/** A single outcome stat (StatBlock). */
export interface SolutionsFinanceStat {
  num: string;
  label: string;
  desc: string;
}

/** Section 3.6 — numbers that matter (StatBlock ×4). */
export interface SolutionsFinanceStats {
  intro: SectionIntro;
  items: SolutionsFinanceStat[];
}

/** Section 3.7 — a single compliance trust badge card. */
export interface SolutionsFinanceComplianceCard {
  icon: LucideIcon;
  title: string;
  body: string;
  /** Awaits certification-logo confirmation. */
  placeholder?: boolean;
  /** Awaits claim verification. */
  placeholderVerify?: boolean;
}

/** Section 3.7 — technical proof: compliance & certifications (TrustBadgeBlock). */
export interface SolutionsFinanceCompliance {
  intro: SectionIntro;
  cards: SolutionsFinanceComplianceCard[];
}

/** Section 3.8 — a single finance testimonial card. */
export interface SolutionsFinanceTestimonial {
  title: string;
  quote: string;
  initials: string;
  name: string;
  role: string;
}

/** Section 3.8 — customer voices (TestimonialCard ×6). */
export interface SolutionsFinanceTestimonials {
  intro: SectionIntro;
  cards: SolutionsFinanceTestimonial[];
}

/** Section 3.9 — FAQ. */
export interface SolutionsFinanceFaq {
  intro: SectionIntro;
  items: PageFaqItem[];
}

/** Section 3.11 — newsletter signup. */
export interface SolutionsFinanceNewsletter {
  eyebrow: string;
  heading: string;
  body: string;
  inputLabel: string;
  placeholder: string;
  cta: string;
}

export interface SolutionsFinancePageContent {
  meta: PageMeta;
  hero: SolutionsFinanceHero;
  problem: SolutionsFinanceProblem;
  howItWorks: SolutionsFinanceHowItWorks;
  why: SolutionsFinanceWhy;
  useCases: SolutionsFinanceUseCases;
  stats: SolutionsFinanceStats;
  compliance: SolutionsFinanceCompliance;
  testimonials: SolutionsFinanceTestimonials;
  faq: SolutionsFinanceFaq;
  cta: CtaBandContent;
  newsletter: SolutionsFinanceNewsletter;
}
