import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import type { StubCategory } from "@/lib/mockup";

/**
 * Branded "coming soon" placeholder for content that is linked across the
 * site but not written yet. Renders real header/footer + a clear message and
 * a path forward, so a CTA never dead-ends on a 404.
 */
export default function StubPage({
  category,
  title,
}: {
  category: StubCategory;
  title: string;
}) {
  return (
    <>
      <SiteHeader />
      <main className="stub-main">
        <div className="container stub-inner">
          <p className="eyebrow">{category.label}</p>
          <h1 className="display-md">{title}</h1>
          <p className="stub-blurb">{category.blurb}</p>
          <div className="stub-actions">
            <a href="/contact" className="btn btn-primary">
              Book a demo
            </a>
            <a href={category.backHref} className="btn btn-secondary">
              Browse {category.backLabel}
            </a>
          </div>
          <p className="stub-note">
            Looking for something specific?{" "}
            <a href="/contact">Tell us what you need</a> and we&apos;ll get it to you.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
