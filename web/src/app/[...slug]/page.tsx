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
  const title = `${prettyTitle(route)} — ${brand.name}`;
  return {
    title,
    description: brand.meta.description,
    openGraph: {
      title,
      description: brand.meta.ogDescription,
      type: "website",
      siteName: brand.name,
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
