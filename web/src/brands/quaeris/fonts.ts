import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** className string applied to <html> — :root token declarations need the variables there. */
export const fontClasses = `${roboto.variable} ${inter.variable}`;
