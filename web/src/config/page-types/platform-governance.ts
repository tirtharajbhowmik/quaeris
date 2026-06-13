// ============================================================
// /platform/governance — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Governance & Audit Trail page. Types only —
// values live in src/brands/<brand>/pages/platform-governance.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  FeatureItem,
  StepItem,
  PageFaqItem,
  LucideIcon,
} from "./shared";

/** Section 3.1 — dark hero (eyebrow, h1, subcopy, primary + download CTA). */
export interface GovernanceHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
  primaryCta: LinkRef;
  secondaryCta: LinkRef;
}

/** Section 3.2 — certified-metrics icon-feature grid + closing proof CTA. */
export interface GovernanceCertifiedMetrics {
  intro: SectionIntro;
  items: FeatureItem[];
  proofCta: LinkRef;
}

/** A single allow/deny product-shot row inside a policy feature-row visual. */
export interface GovernanceShotRow {
  /** Leading text (may contain an emphasised lead via `strong`). */
  strong?: string;
  text: string;
  /** Status pill: "allow" | "deny" | undefined (no pill). */
  status?: "allow" | "deny";
  /** Pill label, e.g. "Allowed" / "Denied" / "Access granted". */
  statusLabel?: string;
}

/** A policy-enforcement feature row (StepItem text side + product-shot visual). */
export interface GovernancePolicyRow extends StepItem {
  /** Accessible label for the product-shot stand-in. */
  shotAlt: string;
  shotLabel: string;
  shotRows: GovernanceShotRow[];
}

/** Section 3.3 — policy enforcement (intro + two alternating feature rows). */
export interface GovernancePolicy {
  intro: SectionIntro;
  rows: GovernancePolicyRow[];
}

/** A single sample row inside an audit-log stand-in. */
export interface GovernanceAuditLogRow {
  /** Emphasised lead (timestamp / version). */
  strong: string;
  /** Trailing text on the left side after the lead. */
  lead?: string;
  /** Right-hand value. */
  value: string;
  /** Optional status pill on the value: "allow" | "deny". */
  status?: "allow" | "deny";
}

/** Section 3.4 — a single governance audit card. */
export interface GovernanceAuditCard {
  icon: LucideIcon;
  title: string;
  body: string;
  logHead: string;
  logRows: GovernanceAuditLogRow[];
}

export interface GovernanceAudit {
  intro: SectionIntro;
  cards: GovernanceAuditCard[];
}

/** Section 3.5 — a single compliance-framework bento card. */
export interface GovernanceComplianceCard {
  title: string;
  body: string;
}

export interface GovernanceCompliance {
  intro: SectionIntro;
  cards: GovernanceComplianceCard[];
}

/** A problem → Quaeris-answer pair in the architecture comparison grid. */
export interface GovernanceComparisonCard {
  index: string;
  problemLead: string;
  problem: string;
  fixLabel: string;
  fixBody: string;
}

/** Section 3.6 — governance vs typical BI comparison. */
export interface GovernanceComparison {
  intro: SectionIntro;
  cards: GovernanceComparisonCard[];
}

/** Section 3.7 — single centered case-study card. */
export interface GovernanceCaseStudy {
  industry: string;
  client: string;
  outcome: string;
  metrics: { num: string; label: string }[];
  how: string;
  cta: LinkRef;
}

/** Section 3.8 — FAQ. */
export interface GovernanceFaq {
  intro: SectionIntro;
  miniCard?: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

/** A single compliance certification badge card (Section 3.9). */
export interface GovernanceBadgeCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  note: string;
}

/** Section 3.9 — trust signals: stat band + compliance badge grid. */
export interface GovernanceTrust {
  intro: SectionIntro;
  stats: { num: string; label: string; desc: string }[];
  badges: GovernanceBadgeCard[];
}

/** Section 3.10 — closing CTA band. */
export interface GovernanceCta {
  eyebrow: string;
  heading: string;
  subcopy: string;
  primary: LinkRef;
}

export interface PlatformGovernancePageContent {
  meta: PageMeta;
  hero: GovernanceHero;
  certifiedMetrics: GovernanceCertifiedMetrics;
  policy: GovernancePolicy;
  audit: GovernanceAudit;
  compliance: GovernanceCompliance;
  comparison: GovernanceComparison;
  caseStudy: GovernanceCaseStudy;
  faq: GovernanceFaq;
  trust: GovernanceTrust;
  cta: GovernanceCta;
}
