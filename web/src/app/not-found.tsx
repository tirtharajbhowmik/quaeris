import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Page not found — Quaeris",
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  { href: "/platform", label: "Platform", desc: "The governed agentic analytics stack" },
  { href: "/solutions", label: "Solutions", desc: "By team and by industry" },
  { href: "/pricing", label: "Pricing", desc: "Plans for every deployment" },
  { href: "/customers", label: "Customers", desc: "Stories and outcomes" },
  { href: "/docs", label: "Docs", desc: "Connect, govern, and query" },
  { href: "/contact", label: "Book a demo", desc: "See Quaeris on your data" },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="nf-main">
        <div className="container nf-inner">
          <p className="eyebrow">Error 404</p>
          <h1 className="display-lg">
            This page took an
            <br />
            <span className="accent-line">unaudited path.</span>
          </h1>
          <p className="nf-lede">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Here are the
            places people head to most.
          </p>

          <nav className="nf-grid" aria-label="Popular destinations">
            {DESTINATIONS.map((d) => (
              <a key={d.href} href={d.href} className="nf-card">
                <span className="nf-card-label">
                  {d.label}
                  <span className="nf-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
                <span className="nf-card-desc">{d.desc}</span>
              </a>
            ))}
          </nav>

          <p className="nf-home">
            Or go back to the <a href="/">homepage</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
