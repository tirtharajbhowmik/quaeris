// ============================================================
// /platform/warehouse — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Warehouse-Native page. Types only — values
// live in src/brands/<brand>/pages/platform-warehouse.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  TrustItem,
  LinkRef,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

// ── Section 01 — Hero (warehouse-stack diagram) ──────────────

/** A badge chip in the warehouse layer (Snowflake, BigQuery, …). */
export interface WarehouseHeroChip {
  label: string;
}

/** A single layer in the hero stack diagram. */
export interface WarehouseHeroLayer {
  icon: LucideIcon;
  title: string;
  desc: string;
  /** Optional warehouse-vendor chips rendered under the layer. */
  chips?: WarehouseHeroChip[];
}

export interface WarehouseHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
  primaryCta: LinkRef;
  secondaryCta: LinkRef;
  trust: TrustItem[];
  /** Hero visual: agent layer on top of the warehouse layer. */
  agentLayer: WarehouseHeroLayer;
  /** Connecting label between the two hero layers. */
  flowLabel: string;
  warehouseLayer: WarehouseHeroLayer;
}

// ── Section 02 — Problem / Solution pairs ────────────────────

/** A problem→fix pair as authored in the mockup (indexed card). */
export interface WarehouseProblemCard {
  index: string;
  problemHeading: string;
  problemBody: string;
  fixLabel: string;
  fixHeading: string;
  fixBody: string;
}

export interface WarehouseProblem {
  intro: SectionIntro;
  cards: WarehouseProblemCard[];
}

// ── Section 03 — Warehouse-native architecture ───────────────

/** A numbered layer in the architecture stack (with up-arrow flow). */
export interface WarehouseArchLayer {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  note?: string;
  /** Up-arrow flow label shown above this layer (omit for the base). */
  flowLabel?: string;
}

/** A per-layer compliance callout card on the right of the diagram. */
export interface WarehouseArchCallout {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface WarehouseArchitecture {
  intro: SectionIntro;
  layers: WarehouseArchLayer[];
  callouts: WarehouseArchCallout[];
  footnote: string;
}

// ── Section 04 — Supported warehouses & connectors ───────────

/** A warehouse connector card (extends SegmentCard with check bullets). */
export interface WarehouseConnectorCard {
  icon: LucideIcon;
  label: string;
  href: string;
  ariaLabel: string;
  /** Optional one-liner under the label (the "Your warehouse?" card). */
  desc?: string;
  bullets: string[];
  cta: string;
}

export interface WarehouseConnectors {
  intro: SectionIntro;
  cards: WarehouseConnectorCard[];
}

// ── Section 05 — Data residency & compliance ─────────────────

/** A compliance scenario block (icon + heading + copy + optional link). */
export interface WarehouseComplianceItem {
  icon: LucideIcon;
  title: string;
  body: string;
  link?: LinkRef;
}

export interface WarehouseCompliance {
  intro: SectionIntro;
  items: WarehouseComplianceItem[];
}

// ── Section 06 — Deployment models ───────────────────────────

/** A deployment-model comparison card. */
export interface WarehouseDeploymentCard {
  icons: LucideIcon[];
  badge?: string;
  /** Whether the badge uses the accent variant. */
  badgeAccent?: boolean;
  title: string;
  body: string;
  bullets: string[];
  whoLabel: string;
  whoBody: string;
}

export interface WarehouseDeployment {
  intro: SectionIntro;
  cards: WarehouseDeploymentCard[];
  note: string;
  noteCta: LinkRef;
}

// ── Section 07 — Access control & audit dashboard ────────────

/** A metric tile in the mock audit dashboard. */
export interface WarehouseAuditTile {
  label: string;
  value: string;
  delta: string;
  /** Renders the highlighted/active tile state. */
  active?: boolean;
}

/** The lavender "why query-time access control matters" callout. */
export interface WarehouseAuditCallout {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}

export interface WarehouseAudit {
  intro: SectionIntro;
  callout: WarehouseAuditCallout;
  dashboardTitle: string;
  dashboardPeriod: string;
  tiles: WarehouseAuditTile[];
  chartCaption: string;
}

// ── Section 08 — FAQ ─────────────────────────────────────────

export interface WarehouseFaq {
  intro: SectionIntro;
  miniCard: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

// ── Section 10 — Newsletter ──────────────────────────────────

export interface WarehouseNewsletter {
  eyebrow: string;
  heading: string;
  body: string;
  placeholder: string;
  submitLabel: string;
  consent: string;
}

// ── Page content ─────────────────────────────────────────────

export interface PlatformWarehousePageContent {
  meta: PageMeta;
  hero: WarehouseHero;
  problem: WarehouseProblem;
  architecture: WarehouseArchitecture;
  connectors: WarehouseConnectors;
  compliance: WarehouseCompliance;
  deployment: WarehouseDeployment;
  audit: WarehouseAudit;
  faq: WarehouseFaq;
  cta: CtaBandContent;
  newsletter: WarehouseNewsletter;
}
