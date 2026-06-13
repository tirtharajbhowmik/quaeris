// ============================================================
// /solutions — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Solutions page. Types only — values live in
// src/brands/<brand>/pages/solutions.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  StatItem,
  StepItem,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

/** A single mini-card in the hero's 2×3 audience grid (icon + label + one-liner). */
export interface SolutionsHeroCard {
  icon: LucideIcon;
  label: string;
  desc: string;
}

/** Section 01 — hero (copy left, 2×3 mini-card grid right). */
export interface SolutionsHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
  primaryCta: LinkRef;
  ghostCta: LinkRef;
  /** aria-label for the hero card list. */
  cardsLabel: string;
  cards: SolutionsHeroCard[];
}

/** A single problem card in the problem strip (icon + heading + body). */
export interface SolutionsProblemCard {
  icon: LucideIcon;
  heading: string;
  body: string;
}

/** Section 02 — problem strip (three problem cards). */
export interface SolutionsProblems {
  intro: SectionIntro;
  cards: SolutionsProblemCard[];
}

/**
 * Routing card with eyebrow, heading, body, a check-bullet list, and a
 * ghost CTA. Used by both the By-team and By-industry routing blocks.
 * `icon` is optional — team cards have no icon; industry cards do.
 */
export interface SolutionsRoutingCard {
  icon?: LucideIcon;
  eyebrow?: string;
  heading: string;
  body: string;
  bullets: string[];
  cta: LinkRef;
}

/** Section 03 — by team (primary routing block). */
export interface SolutionsByTeam {
  intro: SectionIntro;
  cards: SolutionsRoutingCard[];
}

/** Section 04 — stat band (dark). */
export interface SolutionsStats {
  ariaLabel: string;
  items: StatItem[];
  note: string;
}

/** Section 05 — by industry (secondary routing block). */
export interface SolutionsByIndustry {
  intro: SectionIntro;
  cards: SolutionsRoutingCard[];
}

/** Section 06 — differentiator feature rows. */
export interface SolutionsDifferentiators {
  intro: SectionIntro;
  rows: SolutionsFeatureRow[];
}

/** A single differentiator feature row (StepItem-style text + image placeholder). */
export interface SolutionsFeatureRow extends StepItem {
  /** Lucide icon shown inside the ghost CTA. */
  ctaIcon: LucideIcon;
  /** Caption for the token-tinted image placeholder. */
  imagePlaceholder: string;
}

/** A single case-study proof card (Section 07). */
export interface SolutionsProofCard {
  industry: string;
  client: string;
  outcome: string;
  metrics: { num: string; label: string }[];
  cta: LinkRef;
}

/** Section 07 — social proof anchor. */
export interface SolutionsProof {
  intro: SectionIntro;
  cards: SolutionsProofCard[];
}

/** Section 08 — integrations badge strip. */
export interface SolutionsIntegrations {
  ariaLabel: string;
  label: string;
  badges: string[];
  cta: LinkRef;
}

/** Section 09 — FAQ. */
export interface SolutionsFaq {
  intro: SectionIntro;
  items: PageFaqItem[];
}

export interface SolutionsPageContent {
  meta: PageMeta;
  hero: SolutionsHero;
  problems: SolutionsProblems;
  byTeam: SolutionsByTeam;
  stats: SolutionsStats;
  byIndustry: SolutionsByIndustry;
  differentiators: SolutionsDifferentiators;
  proof: SolutionsProof;
  integrations: SolutionsIntegrations;
  faq: SolutionsFaq;
  cta: CtaBandContent;
}
