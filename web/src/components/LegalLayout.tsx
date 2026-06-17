import type { ReactNode } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

/** Shared shell for legal / trust content pages (privacy, terms, trust). */
export default function LegalLayout({
  eyebrow = "Quaeris",
  title,
  updated,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  updated?: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="legal-main">
        <div className="container legal-inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-md">{title}</h1>
          {updated ? <p className="legal-updated">Last updated {updated}</p> : null}
          {intro ? <p className="legal-intro">{intro}</p> : null}
          <div className="legal-prose">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
