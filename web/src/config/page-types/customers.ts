// ============================================================
// /customers — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the Customers & Case Studies page. Types only —
// values live in src/brands/<brand>/pages/customers.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  StepItem,
  StatItem,
  PageFaqItem,
  CtaBandContent,
  LucideIcon,
} from "./shared";

/** A single keyed metric inside a case-study / feature-row stat cluster. */
export interface CustomersStat {
  num: string;
  label: string;
  /** Awaiting a verified figure → renders with a [data-placeholder] marker. */
  placeholder?: boolean;
}

/** Section 01 — dark proof hero (no badge, single primary CTA). */
export interface CustomersHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
  primaryCta: LinkRef;
}

/** A single marquee logo slot — confirmed name or placeholder label. */
export interface CustomersLogo {
  label: string;
  placeholder?: boolean;
}

/** Section 02 — dark customer logo marquee. */
export interface CustomersMarquee {
  /** Lead-in copy above the track; carries an [industry] placeholder span. */
  labelLead: string;
  labelIndustry: string;
  labelTail: string;
  logos: CustomersLogo[];
}

/** A single "How they won" outcome row (FeatureRow with a stat cluster). */
export interface CustomersWinRow {
  eyebrow: string;
  heading: string;
  body: string;
  stats: CustomersStat[];
  cta: LinkRef;
  /** Decorative SVG visual keyed by row index (rendered by the section). */
  flip?: boolean;
}

/** Section 03 — How they won (three FeatureRow outcome buckets). */
export interface CustomersWins {
  intro: SectionIntro;
  rows: CustomersWinRow[];
}

/** A single case-study card (Section 04). */
export interface CustomersCaseStudy {
  /** Logo abbreviation slot (placeholder until a real logo is sourced). */
  logoAbbr: string;
  /** Company name (placeholder until the customer confirms). */
  company: string;
  industry: string;
  headline: string;
  stats: CustomersStat[];
  cta: LinkRef;
}

/** Section 04 — case study grid (3×2). */
export interface CustomersCaseStudies {
  intro: SectionIntro;
  cards: CustomersCaseStudy[];
  footnote: string;
}

/** Section 05 — proof / stat band (gradient counters). */
export interface CustomersProofBand {
  intro: SectionIntro;
  items: StatItem[];
}

/** A single testimonial quote. */
export interface CustomersTestimonial {
  quote: string;
  avatar: string;
  name: string;
  role: string;
  placeholder?: boolean;
}

/** Section 06 — testimonial marquee (two rows, alternating direction). */
export interface CustomersTestimonials {
  intro: SectionIntro;
  rowOne: CustomersTestimonial[];
  rowTwo: CustomersTestimonial[];
}

/** A single deployment-path step (IconFeatureGrid card with a support note). */
export interface CustomersDeployStep extends StepItem {
  icon: LucideIcon;
  /** Tertiary supporting datum line ([data-placeholder] median). */
  note: string;
}

/** Section 07 — the deployment path (four-step icon grid). */
export interface CustomersDeployment {
  intro: SectionIntro;
  steps: CustomersDeployStep[];
}

/** A single industry segment card (Section 08 — eyebrow + headline + visible CTA). */
export interface CustomersIndustryCard {
  icon: LucideIcon;
  eyebrow: string;
  label: string;
  desc: string;
  cta: LinkRef;
}

/** Section 08 — industry-specific outcomes (six segment cards). */
export interface CustomersIndustries {
  intro: SectionIntro;
  cards: CustomersIndustryCard[];
}

/** A single review-platform badge (Section 09). */
export interface CustomersReviewBadge {
  stars: string;
  text: string;
  platform: string;
}

/** Section 09 — social-proof review badges. */
export interface CustomersReviews {
  heading: string;
  badges: CustomersReviewBadge[];
}

/** Section 10 — FAQ. */
export interface CustomersFaq {
  intro: SectionIntro;
  miniCard: { title: string; body: string; cta: LinkRef };
  items: PageFaqItem[];
}

export interface CustomersPageContent {
  meta: PageMeta;
  hero: CustomersHero;
  marquee: CustomersMarquee;
  wins: CustomersWins;
  caseStudies: CustomersCaseStudies;
  proofBand: CustomersProofBand;
  testimonials: CustomersTestimonials;
  deployment: CustomersDeployment;
  industries: CustomersIndustries;
  reviews: CustomersReviews;
  faq: CustomersFaq;
  cta: CtaBandContent;
}
