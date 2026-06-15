import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MockupView from "@/components/MockupView";
import { brand } from "@/config/brand.config";
import {
  MOCKUP_ROUTES,
  prettyTitle,
  readMockup,
  ROUTE_META,
  splitMockup,
} from "@/lib/mockup";

type Params = { slug: string[] };

// Pre-render every known route at build time; unknown paths 404.
export function generateStaticParams(): Params[] {
  return MOCKUP_ROUTES.map((route) => ({ slug: route.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = (slug ?? []).join("/");
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
  if (raw === null) notFound();

  const parts = splitMockup(raw);

  return (
    <>
      <SiteHeader />
      <MockupView key={route} {...parts} />
      <SiteFooter />
    </>
  );
}
