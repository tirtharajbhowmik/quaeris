// ============================================================
// /about — page content type
// Composes the shared building blocks (./shared) into the full
// content shape for the About page. Types only — values live in
// src/brands/<brand>/pages/about.ts.
// ============================================================

import type {
  PageMeta,
  SectionIntro,
  LinkRef,
  StatItem,
  LucideIcon,
} from "./shared";

/** Section 01 — page hero (mission statement). The single <h1>. */
export interface AboutHero {
  eyebrow: string;
  h1: string;
  subcopy: string;
}

/** A single identity signal in the company strip (Section 02). */
export interface AboutIdentityItem {
  icon: LucideIcon;
  label: string;
  value: string;
  /** Present when the value is an email/contact rendered as a link. */
  href?: string;
}

/** Section 02 — company identity strip. */
export interface AboutIdentity {
  /** Accessible label for the band (no visible heading). */
  ariaLabel: string;
  items: AboutIdentityItem[];
}

/** A paired problem→fix card (Section 03). Differs from the shared
 *  ProblemSolution (index/kicker) — here each card carries its own
 *  icon + title + an icon-led fix sub-block. */
export interface AboutProblemCard {
  icon: LucideIcon;
  title: string;
  problem: string;
  fixLabel: string;
  fixIcon: LucideIcon;
  fixTitle: string;
  fixBody: string;
}

/** Section 03 — why Quaeris exists (problem framing). */
export interface AboutWhy {
  intro: SectionIntro;
  cards: AboutProblemCard[];
}

/** A single engine in the three-engine architecture (Section 04).
 *  Adds an eyebrow above the title vs the plain FeatureItem. */
export interface AboutEngine {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
}

/** Section 04 — the three-engine architecture. */
export interface AboutArchitecture {
  intro: SectionIntro;
  engines: AboutEngine[];
  cta: LinkRef;
}

/** A bento capability card (Section 05). `wide` cards span two columns. */
export interface AboutCapabilityCard {
  icon: LucideIcon;
  title: string;
  body: string;
  /** Wide cards span two columns and render with the gradient wash. */
  wide?: boolean;
  /** Optional inline link wrapping the card title. */
  link?: LinkRef;
}

/** Section 05 — six core capabilities (bento). */
export interface AboutCapabilities {
  intro: SectionIntro;
  cards: AboutCapabilityCard[];
}

/** A target-industry card (Section 06). Non-linked on /about. */
export interface AboutIndustryCard {
  index: string;
  icon: LucideIcon;
  label: string;
  desc: string;
}

/** Section 06 — target industries. */
export interface AboutIndustries {
  intro: SectionIntro;
  cards: AboutIndustryCard[];
}

/** A logo group (warehouses / document sources) in the integrations panel. */
export interface AboutIntegrationGroup {
  icon: LucideIcon;
  label: string;
  logos: string[];
}

/** Section 07 — integrations (data sources we connect). */
export interface AboutIntegrations {
  intro: SectionIntro;
  groups: AboutIntegrationGroup[];
  links: LinkRef[];
}

/** Featured testimonial card in the proof band (Section 08). */
export interface AboutTestimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
  cta: LinkRef;
}

/** A pending review-platform badge (Section 08). */
export interface AboutReviewBadge {
  score: string;
  platform: string;
}

/** Section 08 — proof signals (stat band + testimonial + review badges). */
export interface AboutProof {
  /** Screen-reader-only section heading. */
  srHeading: string;
  ariaLabel: string;
  stats: StatItem[];
  /** Footnote link beneath the stat band ([data-placeholder] until /trust). */
  footnote: LinkRef;
  testimonial: AboutTestimonial;
  reviewBadgesLabel: string;
  reviewBadges: AboutReviewBadge[];
}

/** A CMS-driven team-member slot (Section 09 — ships empty). */
export interface AboutTeamMember {
  name: string;
  role: string;
  linkLabel: string;
  linkAriaLabel: string;
  href: string;
}

/** Section 09 — team (structured placeholder only). */
export interface AboutTeam {
  intro: SectionIntro;
  members: AboutTeamMember[];
}

/** A company-principle card (Section 10), optionally with an inline link. */
export interface AboutValue {
  icon: LucideIcon;
  title: string;
  body: string;
  cta?: LinkRef;
}

/** Section 10 — mission & values (company principles). */
export interface AboutValues {
  intro: SectionIntro;
  items: AboutValue[];
}

/** Closing CTA band (Section 11). Mirrors the platform CTA shape but the
 *  primary CTA uses .btn-primary per the mockup. */
export interface AboutCta {
  eyebrow: string;
  heading: string;
  subcopy: string;
  primary: LinkRef;
  secondary: LinkRef;
}

export interface AboutPageContent {
  meta: PageMeta;
  hero: AboutHero;
  identity: AboutIdentity;
  why: AboutWhy;
  architecture: AboutArchitecture;
  capabilities: AboutCapabilities;
  industries: AboutIndustries;
  integrations: AboutIntegrations;
  proof: AboutProof;
  team: AboutTeam;
  values: AboutValues;
  cta: AboutCta;
}
