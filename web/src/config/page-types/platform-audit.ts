// ============================================================
// /platform/audit — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Platform · Audit Trail page. Types only —
// values live in src/brands/<brand>/pages/platform-audit.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  FeatureItem,
  SegmentCard,
  CompareTable,
  PageFaqItem,
  CtaBandContent,
} from "./shared";

/** Section 3.1 — hero. */
export interface PlatformAuditHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
  primaryCta: LinkRef;
  secondaryCta: LinkRef;
}

/**
 * A single allow/deny row inside a feature-row product shot.
 * Left cell: `text` [+ bold `strong`] [+ `textAfter`] [+ bold `strongAfter`].
 * Right cell: either a status `pill`, or `rightText` [+ bold `rightStrong`].
 */
export interface PlatformAuditShotRow {
  /** Left-cell leading text. */
  text: string;
  /** Optional bold fragment after `text`. */
  strong?: string;
  /** Optional plain text after `strong`. */
  textAfter?: string;
  /** Optional second bold fragment after `textAfter`. */
  strongAfter?: string;
  /** Optional right-cell leading text. */
  rightText?: string;
  /** Optional bold fragment in the right cell. */
  rightStrong?: string;
  /** Optional status pill (right cell): "allow" | "deny". */
  pill?: { label: string; tone: "allow" | "deny" };
}

/** The product-shot stand-in rendered in each architecture feature row. */
export interface PlatformAuditShot {
  /** Accessible label for the role="img" shot. */
  ariaLabel: string;
  /** Uppercase eyebrow label inside the shot. */
  label: string;
  rows: PlatformAuditShotRow[];
}

/**
 * Section 3.2 — "Why audit trails matter" problem/solution card.
 * The audit page renders a titled problem card (heading + problem + fix box),
 * which differs from the shared kicker-based ProblemSolution, so it is local.
 */
export interface PlatformAuditProblem {
  index: string;
  title: string;
  problem: string;
  fixLabel: string;
  fixBody: string;
}

/** Section 3.2 — the problem grid. */
export interface PlatformAuditProblems {
  intro: SectionIntro;
  cards: PlatformAuditProblem[];
}

/** Section 3.3 — a single audit-trail architecture step (FeatureRow). */
export interface PlatformAuditStep {
  eyebrow: string;
  heading: string;
  body: string;
  cta: LinkRef;
  shot: PlatformAuditShot;
}

/** Section 3.3 — the four-step architecture. */
export interface PlatformAuditArchitecture {
  intro: SectionIntro;
  steps: PlatformAuditStep[];
}

/** A single row in the live audit-log table (Section 3.4). */
export interface PlatformAuditLogRow {
  timestamp: string;
  user: string;
  question: string;
  status: { label: string; tone: "allow" | "deny" };
  metrics: string;
  access: string;
  time: string;
}

/** Section 3.4 — live audit log dashboard. */
export interface PlatformAuditLog {
  intro: SectionIntro;
  panelLabel: string;
  panelMeta: string;
  columns: string[];
  rows: PlatformAuditLogRow[];
  caption: string;
}

/** Section 3.5 — key audit capabilities (IconFeatureGrid, 2-up). */
export interface PlatformAuditCapabilities {
  intro: SectionIntro;
  items: FeatureItem[];
}

/** A use-case segment card with a labelled CTA (Section 3.6). */
export interface PlatformAuditUseCaseCard extends SegmentCard {
  ctaLabel: string;
}

/** Section 3.6 — use cases (SegmentCards, 4-up). */
export interface PlatformAuditUseCases {
  intro: SectionIntro;
  cards: PlatformAuditUseCaseCard[];
}

/** Section 3.7 — comparison table across BI platforms. */
export interface PlatformAuditComparison {
  intro: SectionIntro;
  table: CompareTable;
}

/** Section 3.8 — FAQ. */
export interface PlatformAuditFaq {
  intro: SectionIntro;
  miniCard?: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

/** Section 3.10 — newsletter signup. */
export interface PlatformAuditNewsletter {
  eyebrow: string;
  heading: string;
  body: string;
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  consentPrefix: string;
  privacyLabel: string;
  privacyHref: string;
}

export interface PlatformAuditPageContent {
  meta: PageMeta;
  hero: PlatformAuditHero;
  problems: PlatformAuditProblems;
  architecture: PlatformAuditArchitecture;
  auditLog: PlatformAuditLog;
  capabilities: PlatformAuditCapabilities;
  useCases: PlatformAuditUseCases;
  comparison: PlatformAuditComparison;
  faq: PlatformAuditFaq;
  cta: CtaBandContent;
  newsletter: PlatformAuditNewsletter;
}
