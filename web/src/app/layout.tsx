import type { Metadata } from "next";
import { brand } from "@/config/brand.config";
import { fontClasses } from "@/brand-active/fonts";
import "./globals.css";
import "@/brand-active/tokens.css";

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description: brand.meta.description,
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.meta.ogDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
