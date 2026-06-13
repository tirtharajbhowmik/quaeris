// ============================================================
// /solutions/executives — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Solutions · Executives page. Types only —
// values live in src/brands/<brand>/pages/solutions-executives.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  TrustItem,
  LinkRef,
  FeatureItem,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

/** Section 02 — hero (HeroHome variant). */
export interface SolutionsExecutivesHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
  primaryCta: LinkRef;
  ghostCta: LinkRef;
  trust: TrustItem[];
}

/**
 * Section 03 — problem/solution card. Variant of the shared ProblemSolution
 * with an indexed numeral + a titled heading (not a kicker eyebrow).
 */
export interface SolutionsExecutivesProblemCard {
  index: string;
  title: string;
  problem: string;
  fixLabel: string;
  fixBody: string;
}

/** Section 03 — the executive data problem. */
export interface SolutionsExecutivesProblem {
  intro: SectionIntro;
  cards: SolutionsExecutivesProblemCard[];
}

/** Section 04 — three value drivers (icon-feature grid). */
export interface SolutionsExecutivesValueDrivers {
  intro: SectionIntro;
  items: FeatureItem[];
}

/** Section 05 — a single executive use-case tile (bento card). */
export interface SolutionsExecutivesUseCaseCard {
  icon: LucideIcon;
  title: string;
  question: string;
  answerLabel: string;
  answer: string;
}

/** Section 05 — how executives use Quaeris (use-case tiles). */
export interface SolutionsExecutivesUseCases {
  intro: SectionIntro;
  /** Illustrative-data disclaimer note under the section header. */
  note: string;
  cards: SolutionsExecutivesUseCaseCard[];
}

/** A certified metric in the speed-advantage query panel. */
export interface SolutionsExecutivesQueryMetric {
  label: string;
  value: string;
  badge: string;
}

/** A lineage / audit meta row in the speed-advantage query panel. */
export interface SolutionsExecutivesQueryMeta {
  icon: LucideIcon;
  text: string;
}

/** The illustrative query-panel visual in the speed-advantage row. */
export interface SolutionsExecutivesQueryPanel {
  query: string;
  metrics: SolutionsExecutivesQueryMetric[];
  meta: SolutionsExecutivesQueryMeta[];
  caption: string;
}

/** Section 06 — the speed advantage (feature row). */
export interface SolutionsExecutivesSpeed {
  eyebrow: string;
  heading: string;
  body: string;
  cta: LinkRef;
  panel: SolutionsExecutivesQueryPanel;
}

/** A single proof / case-study stat. */
export interface SolutionsExecutivesProofStat {
  num: string;
  label: string;
}

/** Section 07 — a single customer-outcome card. */
export interface SolutionsExecutivesProofCard {
  industry: string;
  role: string;
  outcome: string;
  stats: SolutionsExecutivesProofStat[];
  logoNote: string;
  cta: LinkRef;
}

/** Section 07 — proof: customer outcome cards. */
export interface SolutionsExecutivesProof {
  intro: SectionIntro;
  cards: SolutionsExecutivesProofCard[];
}

/** Section 08 — a governance trust pillar (segment-card without href). */
export interface SolutionsExecutivesGovernanceCard {
  icon: LucideIcon;
  title: string;
  body: string;
  /** Mark copy that awaits certification confirmation. */
  placeholder?: boolean;
}

/** Section 08 — governance & compliance assurance. */
export interface SolutionsExecutivesGovernance {
  intro: SectionIntro;
  cards: SolutionsExecutivesGovernanceCard[];
}

/** Section 09 — FAQ. */
export interface SolutionsExecutivesFaq {
  intro: SectionIntro;
  miniCard: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

export interface SolutionsExecutivesPageContent {
  meta: PageMeta;
  hero: SolutionsExecutivesHero;
  problem: SolutionsExecutivesProblem;
  valueDrivers: SolutionsExecutivesValueDrivers;
  useCases: SolutionsExecutivesUseCases;
  speed: SolutionsExecutivesSpeed;
  proof: SolutionsExecutivesProof;
  governance: SolutionsExecutivesGovernance;
  faq: SolutionsExecutivesFaq;
  cta: CtaBandContent;
}
