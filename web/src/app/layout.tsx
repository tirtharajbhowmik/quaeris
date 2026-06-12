import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Display serif (formality lever) — variable font carries the 400–500 axis the design uses.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

// UI/body sans (modern lever).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Northstar Digital — Paid media that pays for itself",
  description:
    "Northstar Digital runs paid media for growth-stage brands. Real spend. Real clients. Real numbers. See how we drive measurable ROI.",
  openGraph: {
    title: "Northstar Digital — Paid media that pays for itself",
    description: "Real spend. Real clients. Real numbers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
