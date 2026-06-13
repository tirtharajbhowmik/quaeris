// ============================================================
// /pricing — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Pricing page. Types only — values live in
// src/brands/<brand>/pages/pricing.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  TrustItem,
  LinkRef,
  StatItem,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

/** Section 01 — Page Hero (centered) with the Annual/Monthly billing toggle. */
export interface PricingHero {
  badge: string;
  h1: string;
  subcopy: string;
  /** Billing-period toggle labels — Annual is the default state. */
  toggle: { groupLabel: string; annual: string; monthly: string };
  /** Inline reassurance badges below the toggle. */
  trust: TrustItem[];
}

/** A single feature line in a tier card. `lead: true` renders a bold "Everything in …" heading row (no icon). */
export interface PricingTierFeature {
  text: string;
  lead?: boolean;
}

/** A tier card's pricing callout. Custom-priced tiers omit annual/monthly and use `custom`. */
export interface PricingTierPrice {
  /** Annual / Monthly callout — toggle swaps these. Omitted on custom-priced tiers. */
  annual?: { lead: string; num: string; suffix: string; note: string };
  monthly?: { lead: string; num: string; suffix: string; note: string };
  /** Custom (Enterprise) callout shown instead of annual/monthly. */
  custom?: { label: string; note: string };
  /** Sub-label under the price (e.g. user count, SLA). */
  sublabel: string;
}

/** Section 02 — a single pricing tier card. */
export interface PricingTier {
  name: string;
  positioning: string;
  /** "Most chosen" eyebrow badge — elevated/featured tier only. */
  badge?: string;
  featured?: boolean;
  price: PricingTierPrice;
  features: PricingTierFeature[];
  primaryCta: LinkRef;
  ghostCta: LinkRef;
}

/** Section 02 — tier card grid. */
export interface PricingTiers {
  tiers: PricingTier[];
}

/** Section 03 — deployment-efficiency stat band (dark). */
export interface PricingStats {
  eyebrow: string;
  items: StatItem[];
}

/** A single capability cell value in the feature matrix. */
export type PricingMatrixCell =
  | { kind: "check" }
  | { kind: "minus" }
  | { kind: "text"; value: string };

/** A capability row in the feature matrix. `link` + `linkText` deep-link the leading words of the feature label. */
export interface PricingMatrixRow {
  feature: string;
  link?: string;
  /** The leading portion of `feature` to render as the deep link (the remainder stays plain text). */
  linkText?: string;
  /** Mark the whole row's value cells as awaiting verified data. */
  placeholder?: boolean;
  /** Mark the feature label itself as a placeholder (e.g. ISO 27001). */
  featurePlaceholder?: boolean;
  /** Cells, one per tier column (Team, Professional, Enterprise). */
  cells: PricingMatrixCell[];
}

/** A grouped block of capability rows (e.g. "Context Engine"). */
export interface PricingMatrixGroup {
  label: string;
  rows: PricingMatrixRow[];
}

/** Section 04 — capability depth by tier (feature matrix). */
export interface PricingMatrix {
  intro: SectionIntro;
  /** Visually hidden table caption. */
  caption: string;
  /** Column headers (Capability, Team, Professional, Enterprise). */
  columns: string[];
  groups: PricingMatrixGroup[];
  cta: LinkRef;
}

/** A single deployment use-case routing card (segment-card shape + visible link label). */
export interface PricingUseCaseCard {
  icon: LucideIcon;
  label: string;
  desc: string;
  href: string;
  linkLabel: string;
}

/** Section 05 — deployment use-case routing cards (3-up warm). */
export interface PricingUseCases {
  cards: PricingUseCaseCard[];
}

/** A single trust/compliance badge in the strip. */
export interface PricingTrustBadge {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  href?: string;
  /** Render muted ("Certification in progress") until a CMS flag activates it. */
  pending?: boolean;
}

/** Section 06 — trust and compliance strip (8 badges). */
export interface PricingTrustStrip {
  badges: PricingTrustBadge[];
}

/** A single case-study proof card (Section 07). */
export interface PricingCaseCard {
  industry: string;
  client: string;
  outcome: string;
  stats: { num: string; label: string }[];
  cta: LinkRef;
}

/** Section 07 — abbreviated customer proof (2-up). */
export interface PricingProof {
  cards: PricingCaseCard[];
}

/** Section 08 — pricing FAQ. */
export interface PricingFaq {
  intro: SectionIntro;
  items: PageFaqItem[];
}

export interface PricingPageContent {
  meta: PageMeta;
  hero: PricingHero;
  tiers: PricingTiers;
  stats: PricingStats;
  matrix: PricingMatrix;
  useCases: PricingUseCases;
  trustStrip: PricingTrustStrip;
  proof: PricingProof;
  faq: PricingFaq;
  cta: CtaBandContent;
}
