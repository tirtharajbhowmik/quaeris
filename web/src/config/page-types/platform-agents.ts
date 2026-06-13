// ============================================================
// /platform/agents — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Agentic Query Engine page. Types only —
// values live in src/brands/<brand>/pages/platform-agents.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  FeatureItem,
  SegmentCard,
  StatItem,
  PageFaqItem,
  CompareTable,
  CtaBandContent,
  LucideIcon,
} from "./shared";

/** Section 3.1 — hero with a video modal trigger (poster + play overlay). */
export interface PlatformAgentsHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
  ghostCta: LinkRef;
  video: {
    /** Accessible label for the video trigger link. */
    ariaLabel: string;
    label: string;
    duration: string;
  };
}

/** A single numbered card in the three-step workflow (Section 3.2). */
export interface PlatformAgentsWorkflowStep {
  index: string;
  icon: LucideIcon;
  eyebrow: string;
  heading: string;
  body: string;
}

/** Section 3.2 — three-step workflow. */
export interface PlatformAgentsWorkflow {
  intro: SectionIntro;
  steps: PlatformAgentsWorkflowStep[];
}

/** One side of the hallucination problem/solution contrast (Section 3.3). */
export interface PlatformAgentsHallucinationCard {
  icon: LucideIcon;
  /** "error" tints the icon box + impact callout red; "accent" is the default. */
  tone: "error" | "accent";
  heading: string;
  body: string;
  /** Callout footer: error-tinted impact box or accent-tinted trust box. */
  callout: { label: string; body: string };
}

/** Section 3.3 — the hallucination problem, solved. */
export interface PlatformAgentsHallucination {
  intro: SectionIntro;
  cards: PlatformAgentsHallucinationCard[];
}

/** Section 3.4 — six agent capabilities (icon-feature grid 3×2). */
export interface PlatformAgentsCapabilities {
  intro: SectionIntro;
  items: FeatureItem[];
  cta: LinkRef;
}

/** Section 3.5 — competitive matrix (consolidated CompareTable). */
export interface PlatformAgentsCompare {
  intro: SectionIntro;
  /** Accessible caption for the comparison table. */
  caption: string;
  table: CompareTable;
  cta: LinkRef;
}

/** A user/agent turn rendered in the console mock (Section 3.6). */
export interface PlatformAgentsConsole {
  header: { title: string; status: string };
  userQuestion: string;
  /** Execution-trace chips shown between question and answer. */
  trace: string[];
  agentAnswer: string;
}

/** One annotated reasoning card beneath the console (Section 3.6). */
export interface PlatformAgentsExampleStep {
  kicker: string;
  heading: string;
  /** Blockquote body — may contain inline <code>/<a> handled by the renderer. */
  body: string;
}

/** Section 3.6 — real-world example workflow (dark). */
export interface PlatformAgentsExample {
  intro: SectionIntro;
  console: PlatformAgentsConsole;
  steps: PlatformAgentsExampleStep[];
}

/** A role-based use-case card with an example question (Section 3.7). */
export interface PlatformAgentsUseCaseCard extends SegmentCard {
  exampleLabel: string;
  exampleQuestion: string;
}

/** Section 3.7 — use cases by role (segment cards 2×2). */
export interface PlatformAgentsUseCases {
  intro: SectionIntro;
  cards: PlatformAgentsUseCaseCard[];
}

/** One tile in the agent-activity dashboard mock (Section 3.8). */
export interface PlatformAgentsDashboardTile {
  label: string;
  value: string;
  /** Optional link target — renders the tile as an anchor with a delta line. */
  href?: string;
  delta?: string;
  /** Highlight the tile (e.g. zero access violations). */
  active?: boolean;
}

/** Section 3.8 — trust & governance proof (stat band + dashboard mock). */
export interface PlatformAgentsGovernance {
  intro: SectionIntro;
  stats: StatItem[];
  dashboard: {
    title: string;
    range: string;
    tiles: PlatformAgentsDashboardTile[];
    chartCaption: string;
  };
}

/** Section 3.9 — FAQ. */
export interface PlatformAgentsFaq {
  intro: SectionIntro;
  miniCard: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

/** A single customer case-study proof card (Section 3.10). */
export interface PlatformAgentsProofCard {
  industry: string;
  client: string;
  outcome: string;
  metrics: { num: string; label: string }[];
  how: string;
  cta: LinkRef;
}

/** A testimonial quote in the marquee (Section 3.10). */
export interface PlatformAgentsTestimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

/** Section 3.10 — customer proof (case studies + testimonial marquee). */
export interface PlatformAgentsProof {
  intro: SectionIntro;
  cards: PlatformAgentsProofCard[];
  testimonials: PlatformAgentsTestimonial[];
}

/** Section 3.12 — newsletter signup block. */
export interface PlatformAgentsNewsletter {
  eyebrow: string;
  heading: string;
  body: string;
  emailPlaceholder: string;
  submitLabel: string;
  /** Consent copy preceding the privacy-policy link. */
  consentPrefix: string;
  privacyLink: LinkRef;
}

export interface PlatformAgentsPageContent {
  meta: PageMeta;
  hero: PlatformAgentsHero;
  workflow: PlatformAgentsWorkflow;
  hallucination: PlatformAgentsHallucination;
  capabilities: PlatformAgentsCapabilities;
  compare: PlatformAgentsCompare;
  example: PlatformAgentsExample;
  useCases: PlatformAgentsUseCases;
  governance: PlatformAgentsGovernance;
  faq: PlatformAgentsFaq;
  proof: PlatformAgentsProof;
  cta: CtaBandContent;
  newsletter: PlatformAgentsNewsletter;
}
