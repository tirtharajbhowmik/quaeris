// ============================================================
// /case-studies — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Case Studies page. Types only — values live
// in src/brands/<brand>/pages/case-studies.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  StatItem,
  LinkRef,
  LucideIcon,
} from "./shared";

/** Section 3.1 — hero + intro (typography-driven, gradient bar above eyebrow). */
export interface CaseStudiesHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
}

/** A single stat pair on a story card / detail block. */
export interface CaseStudyStat {
  num: string;
  label: string;
}

/** Section 3.2 — a card in the case-study grid. */
export interface CaseStudyCard {
  industry: string;
  /** Optional logo / initials slot (only the named anchor card carries one). */
  logo?: string;
  name: string;
  outcome: string;
  stats: CaseStudyStat[];
  cta: LinkRef;
}

/** Section 3.2 — case-study grid. */
export interface CaseStudiesGrid {
  /** Visually-hidden section heading. */
  heading: string;
  cards: CaseStudyCard[];
}

/** A challenge / solution / result subsection inside a detail block. */
export interface CaseStudyDetailSub {
  icon: LucideIcon;
  title: string;
  body: string;
}

/** A pull-quote inside a detail block. */
export interface CaseStudyQuote {
  text: string;
  /** Initials shown in the avatar circle. */
  initials: string;
  name: string;
  role: string;
}

/** Section 3.3 — one expanded case-study detail block. */
export interface CaseStudyDetail {
  id: string;
  /** Section labelledby target id. */
  headingId: string;
  industry: string;
  logo?: string;
  name: string;
  headline: string;
  /** Background alternates white (--bg-surface) / lavender (--bg-warm). */
  alt?: boolean;
  /** The Challenge / How Quaeris Helped / The Result. */
  subs: CaseStudyDetailSub[];
  /** aria-label for the prominent results <dl>. */
  statsLabel: string;
  stats: CaseStudyStat[];
  quote: CaseStudyQuote;
}

/** Section 3.4 — aggregate stats summary band. */
export interface CaseStudiesStats {
  intro: SectionIntro;
  items: StatItem[];
}

/** Section 3.5 — closing CTA band. */
export interface CaseStudiesCta {
  eyebrow: string;
  heading: string;
  subcopy: string;
  primary: LinkRef;
  secondary: LinkRef;
}

export interface CaseStudiesPageContent {
  meta: PageMeta;
  hero: CaseStudiesHero;
  grid: CaseStudiesGrid;
  details: CaseStudyDetail[];
  stats: CaseStudiesStats;
  cta: CaseStudiesCta;
}
