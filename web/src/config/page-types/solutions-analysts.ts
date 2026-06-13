// ============================================================
// /solutions/analysts — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Solutions · Analysts page. Types only —
// values live in src/brands/<brand>/pages/solutions-analysts.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  StepItem,
  FeatureItem,
  SegmentCard,
  StatItem,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

// ── Section 01 — Hero ───────────────────────────────────────
/** A single icon + line of provenance inside the hero answer card. */
export interface AnalystsHeroMetaRow {
  icon: LucideIcon;
  text: string;
  /** Tint the icon with the brand accent instead of success. */
  accent?: boolean;
}
/** A trust pill beneath the hero answer. */
export interface AnalystsHeroBadge {
  label: string;
  accent?: boolean;
}
export interface AnalystsHero {
  eyebrow: string;
  h1Lead: string;
  h1Accent: string;
  h1Tail: string;
  subcopy: string;
  primaryCta: LinkRef;
  secondaryCta: LinkRef;
  /** Right-column illustrative query console. */
  panelLabel: string;
  panelBadge: string;
  question: string;
  answerLead: string;
  answerTail: string;
  metaRows: AnalystsHeroMetaRow[];
  answerBadges: AnalystsHeroBadge[];
}

// ── Section 02 — Quick Win Stats ────────────────────────────
/** A gradient-band stat with a bold title and supporting subtext. */
export interface AnalystsStat {
  num: string;
  title: string;
  subtext: string;
}
export interface AnalystsStats {
  eyebrow: string;
  items: AnalystsStat[];
}

// ── Section 03 — The Analyst's Workflow ─────────────────────
/** A single row inside a workflow step's mock screenshot. */
export interface AnalystsShotRow {
  icon: LucideIcon;
  text: string;
  /** Tint the icon with the brand accent instead of success. */
  accent?: boolean;
}
/** A workflow step: copy (StepItem) + an illustrative mock shot. */
export interface AnalystsWorkflowStep extends StepItem {
  /** Icon tint for the leading icon box: "accent" | "success". */
  tone?: "accent" | "success";
  /** Mock screenshot. */
  shotLabel: string;
  /** Optional highlighted input row at the top of the shot (with icon). */
  shotInput?: { icon: LucideIcon; text: string };
  shotRows: AnalystsShotRow[];
}
export interface AnalystsWorkflow {
  intro: SectionIntro;
  steps: AnalystsWorkflowStep[];
}

// ── Section 04 — The Problem (ProblemSolutionCards ×4) ───────
/** A problem→solution pair card (this page's bespoke shape). */
export interface AnalystsProblemCard {
  icon: LucideIcon;
  problemHeading: string;
  problemBody: string;
  /** Icon tint for the fix badge: "warning" | "success". */
  fixIcon: LucideIcon;
  fixTone: "warning" | "success";
  fixHeading: string;
  fixBody: string;
  cta: LinkRef;
}
export interface AnalystsProblem {
  intro: SectionIntro;
  cards: AnalystsProblemCard[];
}

// ── Section 05 — Real Analyst Workflow Example ──────────────
/** A single panel in the three-panel query walkthrough. */
export interface AnalystsWalkPanel {
  num: string;
  title: string;
  code: string;
  subtext: string;
  /** Panel surface tint: undefined | "canvas" | "warm". */
  tone?: "canvas" | "warm";
}
export interface AnalystsWalkthrough {
  intro: SectionIntro;
  panels: AnalystsWalkPanel[];
}

// ── Section 06 — Capabilities Snapshot ──────────────────────
/** Capability cell + a "Learn more" link. */
export interface AnalystsCapability extends FeatureItem {
  cta: LinkRef;
}
export interface AnalystsCapabilities {
  intro: SectionIntro;
  items: AnalystsCapability[];
}

// ── Section 07 — Case Study (single featured) ───────────────
export interface AnalystsCaseStudy {
  intro: SectionIntro;
  tags: string[];
  challengeLabel: string;
  challengeBody: string;
  outcomeLabel: string;
  outcomeBody: string;
  metrics: { num: string; label: string }[];
  story: string;
  cta: LinkRef;
}

// ── Section 08 — Testimonials (marquee) ─────────────────────
export interface AnalystsTestimonial {
  /** Single-letter avatar glyph. */
  avatar: string;
  quote: string;
  name: string;
  role: string;
}
export interface AnalystsTestimonials {
  intro: SectionIntro;
  items: AnalystsTestimonial[];
}

// ── Section 09 — Integrations (SegmentCards ×4) ─────────────
export interface AnalystsIntegrations {
  intro: SectionIntro;
  cards: SegmentCard[];
  cta: LinkRef;
}

// ── Section 10 — The Semantic Layer (editorial) ─────────────
export interface AnalystsSemanticLayer {
  eyebrow: string;
  heading: string;
  body: string[];
  checks: string[];
  cta: LinkRef;
}

// ── Section 11 — FAQ ────────────────────────────────────────
export interface AnalystsFaq {
  intro: SectionIntro;
  miniCard?: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

// ── Section 13 — Newsletter ─────────────────────────────────
export interface AnalystsNewsletter {
  eyebrow: string;
  heading: string;
  body: string;
  inputLabel: string;
  inputPlaceholder: string;
  submitLabel: string;
  consentLead: string;
  privacyLink: LinkRef;
}

export interface SolutionsAnalystsPageContent {
  meta: PageMeta;
  hero: AnalystsHero;
  stats: AnalystsStats;
  workflow: AnalystsWorkflow;
  problem: AnalystsProblem;
  walkthrough: AnalystsWalkthrough;
  capabilities: AnalystsCapabilities;
  caseStudy: AnalystsCaseStudy;
  testimonials: AnalystsTestimonials;
  integrations: AnalystsIntegrations;
  semanticLayer: AnalystsSemanticLayer;
  faq: AnalystsFaq;
  cta: CtaBandContent;
  newsletter: AnalystsNewsletter;
}
