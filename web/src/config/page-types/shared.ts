// ============================================================
// SHARED PAGE-CONTENT BUILDING BLOCKS
// Composable types reused across the explore-page content modules
// (src/brands/<brand>/pages/<slug>.ts). Per-page interfaces live in
// sibling files (./<slug>.ts) and compose these.
// Keep VALUES out of this file — types only.
// ============================================================

/** Lucide icon name (kebab-case), mapped to a component by the rendering section. */
export type LucideIcon = string;

export interface LinkRef {
  label: string;
  href: string;
  /** Optional aria-label when the visible label needs more context. */
  ariaLabel?: string;
}

/** Eyebrow + heading (+ optional subcopy) that opens most sections. */
export interface SectionIntro {
  eyebrow: string;
  heading: string;
  subcopy?: string;
}

/** Icon + line of reassurance — the hero/section trust strip (consolidated .hero-trust). */
export interface TrustItem {
  icon: LucideIcon;
  text: string;
}

/** Pill/badge trust item that may link out (e.g. SOC 2, HIPAA). */
export interface TrustBadge {
  icon: LucideIcon;
  label: string;
  href?: string;
}

/** A capability / value cell in an icon-feature grid. */
export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

/** "Deep dive" routing card (pillar-style) linking to a sub-page. */
export interface DeepDiveCard {
  icon: LucideIcon;
  title: string;
  body: string;
  cta: LinkRef;
  /** Accent token for the icon tint: "accent" | "success" | "warning". */
  tone?: "accent" | "success" | "warning";
}

/** A FeatureRow / methodology step (text side); visual is rendered by the section. */
export interface StepItem {
  eyebrow: string;
  heading: string;
  body: string;
  cta?: LinkRef;
}

/** Problem → Quaeris-answer card (consolidated .ps-card). */
export interface ProblemSolution {
  index: string;
  kicker: string;
  problem: string;
  fixLabel: string;
  fixBody: string;
}

/** A single stat in a stat band. */
export interface StatItem {
  num: string;
  label: string;
  desc?: string;
}

/** Compact card linking an audience/use-case/integration (consolidated .segment-card). */
export interface SegmentCard {
  icon: LucideIcon;
  label: string;
  desc: string;
  href: string;
}

// ── Consolidated comparison table (the 7 "Quaeris vs others" tables) ──
export interface CompareColumn {
  /** Column header label, e.g. "Quaeris", "Power BI Copilot". */
  label: string;
  /** Highlight the Quaeris column. */
  highlight?: boolean;
}
export interface CompareCell {
  /** "yes" | "no" | "partial" render as marks; "text" renders `value`. */
  kind: "yes" | "no" | "partial" | "text";
  value?: string;
}
export interface CompareRow {
  feature: string;
  cells: CompareCell[];
}
export interface CompareTable {
  columns: CompareColumn[];
  rows: CompareRow[];
  /** Optional footnote under the table. */
  note?: string;
}

/** FAQ item (mirrors config/types FaqItem so pages can carry their own FAQ). */
export interface PageFaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

/** Per-page SEO metadata. */
export interface PageMeta {
  title: string;
  description: string;
}

/** Closing CTA band copy. */
export interface CtaBandContent {
  eyebrow: string;
  heading: string;
  subcopy: string;
  primary: LinkRef;
  secondary?: LinkRef;
}
