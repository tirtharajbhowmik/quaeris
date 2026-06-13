// ============================================================
// /platform — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Platform page. Types only — values live in
// src/brands/<brand>/pages/platform.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  TrustItem,
  LinkRef,
  DeepDiveCard,
  StepItem,
  FeatureItem,
  ProblemSolution,
  SegmentCard,
  TrustBadge,
  StatItem,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

/** A single stacked layer in the hero architecture diagram. */
export interface PlatformDiagramLayer {
  icon: LucideIcon;
  name: string;
  desc: string;
}

/** A named engine chip beneath the hero diagram stack. */
export interface PlatformDiagramEngine {
  icon: LucideIcon;
  label: string;
}

/** Section 01 — hero. */
export interface PlatformHero {
  badge: string;
  h1: string;
  subcopy: string;
  primaryCta: LinkRef;
  ghostCta: LinkRef;
  trust: TrustItem[];
  /** Right-column architecture diagram. */
  layers: PlatformDiagramLayer[];
  engines: PlatformDiagramEngine[];
}

/** Section 02 — integration logo marquee. */
export interface PlatformMarquee {
  label: string;
  logos: string[];
}

/** Section 03 — three-pillar architecture. */
export interface PlatformArchitecture {
  intro: SectionIntro;
  pillars: DeepDiveCard[];
}

/** Section 04 — how it works (four FeatureRow steps). */
export interface PlatformMethodology {
  intro: SectionIntro;
  steps: StepItem[];
}

/** Section 05 — six core capabilities. */
export interface PlatformCapabilities {
  intro: SectionIntro;
  items: FeatureItem[];
}

/** A single engine bento card (Section 06). */
export interface PlatformEngineCard {
  icon: LucideIcon;
  title: string;
  links: LinkRef[];
  body: string;
}

/** Section 06 — three-engine bento. */
export interface PlatformEngines {
  intro: SectionIntro;
  cards: PlatformEngineCard[];
}

/** Section 07 — competitive differentiation (dark problem/solution). */
export interface PlatformDifferentiation {
  intro: SectionIntro;
  cards: ProblemSolution[];
}

/** Section 08 — stats band. */
export interface PlatformStats {
  intro: SectionIntro;
  items: StatItem[];
}

/** A single case-study proof card (Section 09). */
export interface PlatformProofCard {
  industry: string;
  client: string;
  outcome: string;
  metrics: { num: string; label: string }[];
  cta: LinkRef;
}

/** Section 09 — customer proof strip. */
export interface PlatformProof {
  intro: SectionIntro;
  cards: PlatformProofCard[];
}

/** Section 10 — subpage navigation segment cards. */
export interface PlatformSubpages {
  intro: SectionIntro;
  cards: SegmentCard[];
}

/** Section 11 — trust & compliance badge row. */
export interface PlatformTrustRow {
  eyebrow: string;
  heading: string;
  badges: TrustBadge[];
}

/** Section 12 — FAQ. */
export interface PlatformFaq {
  intro: SectionIntro;
  miniCard?: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

export interface PlatformPageContent {
  meta: PageMeta;
  hero: PlatformHero;
  marquee: PlatformMarquee;
  architecture: PlatformArchitecture;
  methodology: PlatformMethodology;
  capabilities: PlatformCapabilities;
  engines: PlatformEngines;
  differentiation: PlatformDifferentiation;
  stats: PlatformStats;
  proof: PlatformProof;
  subpages: PlatformSubpages;
  trustRow: PlatformTrustRow;
  faq: PlatformFaq;
  cta: CtaBandContent;
}
