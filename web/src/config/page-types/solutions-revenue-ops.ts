// ============================================================
// /solutions/revenue-ops — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Revenue Operations solutions page. Types
// only — values live in src/brands/<brand>/pages/solutions-revenue-ops.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  TrustItem,
  LinkRef,
  FeatureItem,
  StepItem,
  CompareTable,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

/** Section 3.1 — hero (custom SectionHeader variant, HeroHome-style). */
export interface RevOpsHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
  primaryCta: LinkRef;
  secondaryCta: LinkRef;
  trust: TrustItem[];
}

/** A single problem card (Section 3.2). icon + title + body. */
export interface RevOpsProblemCard {
  icon: LucideIcon;
  title: string;
  body: string;
}

/** Section 3.2 — problem statement with three problem cards. */
export interface RevOpsProblem {
  intro: SectionIntro;
  cards: RevOpsProblemCard[];
}

/** Section 3.3 — how Quaeris solves RevOps (three FeatureRow steps). */
export interface RevOpsHowItWorks {
  intro: SectionIntro;
  steps: StepItem[];
}

/** Section 3.4 — key capabilities (four icon-feature cells). */
export interface RevOpsCapabilities {
  intro: SectionIntro;
  items: FeatureItem[];
}

/** A single use-case bento card (Section 3.5). */
export interface RevOpsUseCase {
  icon: LucideIcon;
  title: string;
  body: string;
  /** Marks the card as awaiting editorial confirmation (data-placeholder). */
  placeholder?: boolean;
}

/** Section 3.5 — use cases (six bento cards). */
export interface RevOpsUseCases {
  intro: SectionIntro;
  cards: RevOpsUseCase[];
}

/** A single case-study proof card (Section 3.6). */
export interface RevOpsProofCard {
  industry: string;
  client: string;
  outcome: string;
  metrics: { num: string; label: string }[];
  how: string;
  cta: LinkRef;
}

/** Section 3.6 — customer proof strip. */
export interface RevOpsProof {
  intro: SectionIntro;
  cards: RevOpsProofCard[];
}

/** Section 3.7 — comparison matrix (Traditional BI vs ThoughtSpot vs Quaeris). */
export interface RevOpsComparison {
  intro: SectionIntro;
  /** Accessible caption for the table. */
  caption: string;
  table: CompareTable;
}

/** A single value-prop row inside the dark governance feature (Section 3.8). */
export interface RevOpsValueProp {
  num: string;
  title: string;
  body: string;
}

/** A single metric tile inside the dashboard mock (Section 3.8). */
export interface RevOpsMetricTile {
  label: string;
  value: string;
  delta: string;
  /** Active (highlighted) tile. */
  active?: boolean;
  /** Marks the tile figure as awaiting verified data (data-placeholder). */
  placeholder?: boolean;
}

/** Section 3.8 — dark governance & lineage feature with dashboard mock. */
export interface RevOpsGovernance {
  intro: SectionIntro;
  valueProps: RevOpsValueProp[];
  dashboard: {
    header: string;
    statusLabel: string;
    tiles: RevOpsMetricTile[];
    chartCaption: string;
  };
}

/** Section 3.9 — FAQ. */
export interface RevOpsFaq {
  intro: SectionIntro;
  miniCard: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

export interface SolutionsRevenueOpsPageContent {
  meta: PageMeta;
  hero: RevOpsHero;
  problem: RevOpsProblem;
  howItWorks: RevOpsHowItWorks;
  capabilities: RevOpsCapabilities;
  useCases: RevOpsUseCases;
  proof: RevOpsProof;
  comparison: RevOpsComparison;
  governance: RevOpsGovernance;
  faq: RevOpsFaq;
  cta: CtaBandContent;
}
