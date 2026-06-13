// ============================================================
// /solutions/data-teams — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Data Teams solutions page. Types only —
// values live in src/brands/<brand>/pages/solutions-data-teams.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  FeatureItem,
  StepItem,
  ProblemSolution,
  PageFaqItem,
  CtaBandContent,
} from "./shared";

/** One policy/lineage row inside the hero governed-query panel. */
export interface DataTeamsHeroRow {
  /** Left descriptive label (e.g. "Policy check · role:"). */
  label: string;
  /** Strong-weighted value within the label (e.g. "RevOps analyst"). */
  strong: string;
  /** Status pill text (e.g. "Access granted"). */
  ok: string;
}

/** Section 3.1 — hero with governed-query panel visual. */
export interface DataTeamsHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
  primaryCta: LinkRef;
  /** Governed query panel (right column). */
  panel: {
    eyebrow: string;
    question: string;
    ariaLabel: string;
    rows: DataTeamsHeroRow[];
    chips: string[];
  };
}

/** A single problem→solution pair card (Section 3.2). Distinct shape from the
 * consolidated ProblemSolution: a "Today" problem block + nested "With Quaeris"
 * fix block, each with its own heading. */
export interface DataTeamsProblemCard {
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  fixLabel: string;
  fixTitle: string;
  fixBody: string;
}

/** Section 3.2 — three problem/solution pairs. */
export interface DataTeamsProblem {
  intro: SectionIntro;
  cards: DataTeamsProblemCard[];
}

/** A single outcome stat (Section 3.3) — adds a context line above the delta. */
export interface DataTeamsStat {
  num: string;
  label: string;
  /** Body-sm context line under the label. */
  context: string;
  /** Delta / qualifier badge. */
  delta: string;
}

/** Section 3.3 — outcomes stats band. */
export interface DataTeamsStats {
  label: string;
  items: DataTeamsStat[];
}

/** Section 3.4 — how it works (four icon-feature steps). */
export interface DataTeamsHowItWorks {
  intro: SectionIntro;
  items: FeatureItem[];
}

/** One product-shot row inside a dark feature visual (Section 3.5). */
export interface DataTeamsShotRow {
  /** Strong-weighted lead (e.g. "net_revenue"). */
  strong?: string;
  /** Remaining descriptive text after the strong lead. */
  text: string;
  /** Optional status pill (omitted for the question row). */
  ok?: string;
}

/** A dark feature-row spotlight (Section 3.5): StepItem text + product shot. */
export interface DataTeamsFeature {
  step: StepItem;
  shot: {
    label: string;
    ariaLabel: string;
    rows: DataTeamsShotRow[];
  };
}

/** Section 3.5 — three dark feature spotlights. */
export interface DataTeamsFeatures {
  intro: SectionIntro;
  rows: DataTeamsFeature[];
}

/** A single case-study card (Section 3.6). */
export interface DataTeamsCaseStudy {
  industry: string;
  client: string;
  headline: string;
  metrics: { num: string; label: string }[];
  story: string;
  quote: string;
  cta: LinkRef;
}

/** Section 3.6 — real outcomes / case studies. */
export interface DataTeamsCaseStudies {
  intro: SectionIntro;
  cards: DataTeamsCaseStudy[];
}

/** Section 3.7 — FAQ. */
export interface DataTeamsFaq {
  intro: SectionIntro;
  miniCard: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

/** Section 3.8 — governance pillars. */
export interface DataTeamsGovernance {
  intro: SectionIntro;
  pillars: FeatureItem[];
}

/** Section 3.9 — competitive positioning (problem → Quaeris answer cards). */
export interface DataTeamsComparison {
  intro: SectionIntro;
  cards: ProblemSolution[];
}

/** Section 3.11 — newsletter signup block. */
export interface DataTeamsNewsletter {
  eyebrow: string;
  heading: string;
  body: string;
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  consentLead: string;
  privacy: LinkRef;
}

export interface SolutionsDataTeamsPageContent {
  meta: PageMeta;
  hero: DataTeamsHero;
  problem: DataTeamsProblem;
  stats: DataTeamsStats;
  howItWorks: DataTeamsHowItWorks;
  features: DataTeamsFeatures;
  caseStudies: DataTeamsCaseStudies;
  faq: DataTeamsFaq;
  governance: DataTeamsGovernance;
  comparison: DataTeamsComparison;
  cta: CtaBandContent;
  newsletter: DataTeamsNewsletter;
}
