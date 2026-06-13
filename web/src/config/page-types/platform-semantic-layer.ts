// ============================================================
// /platform/semantic-layer — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Semantic Layer page. Types only — values
// live in src/brands/<brand>/pages/platform-semantic-layer.ts.
// Sections are typed in mockup order.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  TrustItem,
  LinkRef,
  StepItem,
  FeatureItem,
  SegmentCard,
  CompareTable,
  PageFaqItem,
  CtaBandContent,
} from "./shared";

/** Section 0 — hero (custom: accent-line headline + badge-pill trust strip). */
export interface SemanticHero {
  eyebrow: string;
  h1: string;
  /** Headline fragment rendered on its own accent-coloured line. */
  accentLine: string;
  subcopy: string;
  primaryCta: LinkRef;
  secondaryCta: LinkRef;
  /** Trust pills rendered as .badge .badge-accent .sem-badge (leading icon). */
  trust: TrustItem[];
}

/** A single problem/answer card (Section 1) — light .ps-card pairing. */
export interface SemanticProblemCard {
  eyebrow: string;
  /** Eyebrow tone token: "tertiary" (problem) | "accent" (answer). */
  tone: "tertiary" | "accent";
  heading: string;
  /** Body copy; may contain a single <em> emphasis span. */
  body: string;
  /** Optional emphasis fragment wrapped in <em> within the body. */
  emphasis?: string;
}

/** Section 1 — the problem and the Quaeris answer (two cards). */
export interface SemanticProblem {
  cards: SemanticProblemCard[];
}

/** Section 2 — how it works (three FeatureRow steps). */
export interface SemanticHowItWorks {
  intro: SectionIntro;
  steps: StepItem[];
}

/** Section 3 — why auto-learning wins (six icon features). */
export interface SemanticWhy {
  intro: SectionIntro;
  items: FeatureItem[];
}

/** Section 4 — comparison matrix (consolidated .compare-table) + CTA. */
export interface SemanticComparison {
  intro: SectionIntro;
  table: CompareTable;
  /** Footnote may contain inline anchor links. */
  noteLinks: LinkRef[];
  cta: LinkRef;
}

/** A spec row inside an anatomy card (Section 5). */
export interface SemanticSpecItem {
  term: string;
  /** Definition copy; may contain a single <code> fragment. */
  detail: string;
  /** When set, the detail renders inside a .sem-code monospace chip. */
  code?: boolean;
}

/** A single certified-metric anatomy card (Section 5). */
export interface SemanticAnatomyCard {
  eyebrow: string;
  heading: string;
  specs: SemanticSpecItem[];
}

/** Section 5 — inside the semantic layer (3-column breakout). */
export interface SemanticAnatomy {
  intro: SectionIntro;
  cards: SemanticAnatomyCard[];
}

/** Section 6 — use cases (four segment cards). */
export interface SemanticUseCases {
  intro: SectionIntro;
  cards: SegmentCard[];
}

/** A single getting-started accordion step (Section 7). */
export interface SemanticGettingStartedItem {
  id: string;
  /** Two-line trigger: eyebrow above the question. */
  eyebrow: string;
  question: string;
  /** Multi-paragraph body. */
  paragraphs: string[];
  defaultOpen?: boolean;
}

/** Section 7 — getting started (accordion timeline). */
export interface SemanticGettingStarted {
  intro: SectionIntro;
  items: SemanticGettingStartedItem[];
}

/** Section 8 — proof (case-study card + standalone testimonial). */
export interface SemanticProof {
  intro: SectionIntro;
  caseStudy: {
    industry: string;
    name: string;
    statNum: string;
    statLabel: string;
    quote: string;
    cta: LinkRef;
  };
  testimonial: {
    quote: string;
    name: string;
    company: string;
  };
}

/** Section 9 — deep dive editorial block. */
export interface SemanticDeepDive {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  pullquote: string;
}

/** Section 10 — FAQ. */
export interface SemanticFaq {
  intro: SectionIntro;
  miniCard: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

export interface PlatformSemanticLayerPageContent {
  meta: PageMeta;
  hero: SemanticHero;
  problem: SemanticProblem;
  howItWorks: SemanticHowItWorks;
  why: SemanticWhy;
  comparison: SemanticComparison;
  anatomy: SemanticAnatomy;
  useCases: SemanticUseCases;
  gettingStarted: SemanticGettingStarted;
  proof: SemanticProof;
  deepDive: SemanticDeepDive;
  faq: SemanticFaq;
  cta: CtaBandContent;
}
