// ============================================================
// BRAND CONFIG — single white-label swap point
// All placeholder content from the mockup lives here.
// Components read from this; never hardcode content in JSX.
// ============================================================

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "twitter" | "instagram";
}

export interface TrustLogo {
  label: string;
}

export interface MarqueeLogo {
  label: string;
}

export interface Pillar {
  title: string;
  body: string;
  cta: string;
  ctaAriaLabel: string;
  imgClass: "pillar-img-1" | "pillar-img-2" | "pillar-img-3";
  iconColor: string;
  icon: "bar-chart" | "target" | "analytics";
}

export interface Stat {
  target: number;
  suffix: string;
  label: string;
  delta: string;
  ariaLabel: string;
  isDecimal?: boolean;
}

export interface IconFeature {
  title: string;
  body: string;
  icon: "audit" | "sprint" | "creative" | "dashboard";
}

export interface ValueProp {
  num: string;
  title: string;
  body: string;
}

export interface MetricTile {
  label: string;
  value: string;
  delta: string;
  active?: boolean;
}

export interface CaseStudyStat {
  num: string;
  label: string;
}

export interface CaseStudy {
  industry: string;
  client: string;
  outcome: string;
  stats: CaseStudyStat[];
  how: string;
  cta: string;
}

export interface ReviewBadge {
  stars: string;
  score: string;
  platform: string;
}

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

// ── New types for mega-menu & feature rows ──────────────────

export interface MegaMenuLink {
  label: string;
  href: string;
  description?: string;
}

export interface MegaMenuGroup {
  heading: string;
  links: MegaMenuLink[];
}

export interface MegaMenuFeaturedCard {
  image: string;
  imageAlt: string;
  title: string;
  href: string;
}

export interface MegaMenuItem {
  label: string;
  href: string;
  hasDropdown: true;
  groups: MegaMenuGroup[];
  featured: MegaMenuFeaturedCard;
}

export interface PlainNavItem {
  label: string;
  href: string;
  hasDropdown?: false;
}

export type TopNavItem = MegaMenuItem | PlainNavItem;

export interface FeatureRowItem {
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export interface BrandMeta {
  description: string;
  ogDescription: string;
}
