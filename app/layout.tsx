import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  Playfair_Display,
  Source_Sans_3,
  Syne,
} from "next/font/google";
import DesignSwitcher from "@/components/DesignSwitcher";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altiora Consults — Accounting, Tax & Business Process Consulting",
  description:
    "Altiora Consults helps businesses build strong financial foundations, maintain regulatory compliance, and improve operational efficiency through accounting, tax advisory, and business process consulting. Solutions for All.",
  keywords: [
    "accounting",
    "tax advisory",
    "business process consulting",
    "financial management",
    "Lagos",
    "Nigeria",
    "Altiora Consults",
  ],
  openGraph: {
    title: "Altiora Consults — Solutions for All",
    description:
      "Professional consulting in accounting, taxation, and business process optimization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${fraunces.variable} ${sourceSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <DesignSwitcher />
      </body>
    </html>
  );
}
