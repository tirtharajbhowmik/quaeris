import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroHome from "@/components/home/HeroHome";
import LogoMarquee from "@/components/ui/LogoMarquee";
import ThreePillars from "@/components/home/ThreePillars";
import StatsBand from "@/components/home/StatsBand";
import BentoGrid from "@/components/ui/BentoGrid";
import FeatureSection from "@/components/home/FeatureSection";
import ProofSection from "@/components/home/ProofSection";
import EditorialBlock from "@/components/ui/EditorialBlock";
import TestimonialMarquee from "@/components/ui/TestimonialMarquee";
import FAQSection from "@/components/home/FAQSection";
import CTABand from "@/components/ui/CTABand";
import NewsletterBlock from "@/components/ui/NewsletterBlock";
import MethodologySection from "@/components/home/MethodologySection";
import SegmentCards from "@/components/ui/SegmentCards";
import ProblemSolutionCards from "@/components/ui/ProblemSolutionCards";
import AIFirstSection from "@/components/home/AIFirstSection";
import { brand } from "@/config/brand.config";

// JSON-LD structured data built from brand config
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  description:
    "Agentic AI for analytics — a secure, governed platform where business users ask questions in plain language and trusted AI agents return accurate, governed answers.",
  url: brand.url,
  contactPoint: {
    "@type": "ContactPoint",
    email: brand.email,
    contactType: "sales",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: brand.faq.items.slice(0, 3).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Skip to content */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main">
        {/* Section 1: Hero */}
        <HeroHome />

        {/* Section 2: Logo Marquee */}
        <LogoMarquee />

        {/* Section 3: Three Pillars */}
        <ThreePillars />

        {/* Section 3b: Who we work with — Segment Cards */}
        <SegmentCards />

        {/* Section 4: Stats Band — gradient variant */}
        <StatsBand variant="gradient" />

        {/* Section 5: Why teams choose us — Bento Grid (replaces IconFeatureGrid) */}
        <BentoGrid />

        {/* Section 5a: AI-First — dark capabilities section */}
        <AIFirstSection />

        {/* Section 5b: Sound familiar? — Problem–Solution Cards */}
        <ProblemSolutionCards />

        {/* Section 5c: Methodology — FeatureRows */}
        <MethodologySection />

        {/* Section 6: Dark Feature Section (dark #1 of 2) */}
        <FeatureSection />

        {/* Section 7: Proof — Case Studies */}
        <ProofSection />

        {/* Section 7b: A note from the founder — Editorial Block */}
        <EditorialBlock />

        {/* Section 8: Testimonial Marquee */}
        <TestimonialMarquee />

        {/* Section 9: FAQ */}
        <FAQSection />

        {/* Section 10: CTA Band (dark #2 of 2) */}
        <CTABand />

        {/* Newsletter block (visually part of the dark zone) */}
        <NewsletterBlock />
      </main>

      <SiteFooter />
    </>
  );
}
