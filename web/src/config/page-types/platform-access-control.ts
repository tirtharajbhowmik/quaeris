// ============================================================
// /platform/access-control — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Access Control page. Types only — values
// live in src/brands/<brand>/pages/platform-access-control.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  DeepDiveCard,
  StepItem,
  CompareTable,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

/** A single node in the hero query-pipeline diagram. */
export interface AccessControlPipeNode {
  icon: LucideIcon;
  label: string;
  /** Highlight the role-check gate node. */
  gate?: boolean;
  /** Mark the arrow leading into this node as the "granted" path. */
  granted?: boolean;
}

/** Section 01 — hero with inline access-control pipeline diagram. */
export interface AccessControlHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
  primaryCta: LinkRef;
  secondaryCta: LinkRef;
  /** Left-to-right governed query pipeline (User → … → Result). */
  pipeline: AccessControlPipeNode[];
  /** Blocked-request note rendered below the pipeline. */
  blockNote: string;
  /** Accessible caption for the diagram figure. */
  figCaption: string;
}

/** One side (problem or solution) of the dual-panel section. */
export interface AccessControlPsPanel {
  eyebrow: string;
  heading: string;
  /** Checklist items (plain text; the section renders the icons). */
  items: string[];
}

/** Section 02 — dark problem / solution dual panel. */
export interface AccessControlProblem {
  ariaLabel: string;
  problem: AccessControlPsPanel;
  solution: AccessControlPsPanel;
}

/** Section 03 — three pillars of governed access. */
export interface AccessControlPillars {
  intro: SectionIntro;
  cards: DeepDiveCard[];
}

/** A masked / visible cell value in the dashboard mock result table. */
export interface AccessControlResultCell {
  /** "text" renders the value; "masked" renders the masked indicator. */
  kind: "text" | "masked";
  value: string;
}

/** A single row in the dashboard mock result table. */
export interface AccessControlResultRow {
  cells: AccessControlResultCell[];
}

/** Right-column access-scoped dashboard mock. */
export interface AccessControlDashboard {
  title: string;
  roleBadge: string;
  question: string;
  /** Caption for the result table (screen-reader only). */
  tableCaption: string;
  columns: string[];
  rows: AccessControlResultRow[];
  rowsNote: string;
  caption: string;
}

/** Section 04 — how it works (dark, six steps + dashboard mock). */
export interface AccessControlHowItWorks {
  intro: SectionIntro;
  steps: StepItem[];
  dashboard: AccessControlDashboard;
}

/** Section 05 — comparison (Quaeris vs traditional BI + ungoverned AI). */
export interface AccessControlComparison {
  intro: SectionIntro;
  table: CompareTable;
}

/** A single use-case card with an outcome checklist. */
export interface AccessControlUseCaseCard {
  icon: LucideIcon;
  industry: string;
  heading: string;
  body: string;
  outcomes: string[];
}

/** Section 06 — who benefits (use-case cards). */
export interface AccessControlUseCases {
  intro: SectionIntro;
  cards: AccessControlUseCaseCard[];
}

/** A two-card policy → SQL code pair (feature-row visual). */
export interface AccessControlCodeCard {
  label: string;
  code: string;
}

/** A single implementation feature row. */
export interface AccessControlImplementationRow {
  eyebrow: string;
  heading: string;
  /** Body, where {code} is replaced by an inline <code> snippet. */
  body: string;
  /** Inline code snippet substituted into the body's {code} placeholder. */
  inlineCode?: string;
  cta: LinkRef;
  /** Flip the row (visual left / text right). */
  flip?: boolean;
  /** Visual kind: a role flow pipeline, or the policy → SQL code pair. */
  visual:
    | { type: "flow"; nodes: AccessControlPipeNode[]; figCaption: string }
    | { type: "code"; cards: AccessControlCodeCard[] };
}

/** Section 07 — implementation deep-dive (two feature rows). */
export interface AccessControlImplementation {
  intro: SectionIntro;
  rows: AccessControlImplementationRow[];
}

/** Section 08 — FAQ. */
export interface AccessControlFaq {
  intro: SectionIntro;
  miniCard?: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

export interface PlatformAccessControlPageContent {
  meta: PageMeta;
  hero: AccessControlHero;
  problem: AccessControlProblem;
  pillars: AccessControlPillars;
  howItWorks: AccessControlHowItWorks;
  comparison: AccessControlComparison;
  useCases: AccessControlUseCases;
  implementation: AccessControlImplementation;
  faq: AccessControlFaq;
  cta: CtaBandContent;
}
