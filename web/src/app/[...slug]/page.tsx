import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MockupView from "@/components/MockupView";
import StubPage from "@/components/StubPage";
import { brand } from "@/config/brand.config";
import {
  humanizeSlug,
  MOCKUP_ROUTES,
  prettyTitle,
  readMockup,
  ROUTE_META,
  splitMockup,
  STUB_ROUTES,
  stubFor,
} from "@/lib/mockup";

type Params = { slug: string[] };

// Pre-render every known route (mockups + stubs) at build time; unknown 404.
export function generateStaticParams(): Params[] {
  return [...MOCKUP_ROUTES, ...Object.keys(STUB_ROUTES)].map((route) => ({
    slug: route.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = (slug ?? []).join("/");

  const stub = stubFor(route);
  if (stub) {
    return {
      title: `${humanizeSlug(route)} — ${brand.name}`,
      description: stub.blurb,
      robots: { index: false, follow: true },
    };
  }

  if (!MOCKUP_ROUTES.includes(route)) return {};
  const m = ROUTE_META[route];
  const title = `${m?.title ?? prettyTitle(route)} — ${brand.name}`;
  const description = m?.description ?? brand.meta.description;
  const ogDescription = m?.ogDescription ?? brand.meta.ogDescription;
  return {
    title,
    description,
    openGraph: {
      title,
      description: ogDescription,
      type: "website",
      siteName: brand.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
    },
  };
}

export default async function MockupRoute({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const route = (slug ?? []).join("/");

  const raw = readMockup(route);
  if (raw !== null) {
    const parts = splitMockup(raw);
    return (
      <>
        <SiteHeader />
        <MockupView key={route} {...parts} />
        <SiteFooter />
      </>
    );
  }

  // Linked-but-unwritten content renders a branded "coming soon", not a 404.
  const stub = stubFor(route);
  if (stub) return <StubPage category={stub} title={humanizeSlug(route)} />;

  notFound();
}
