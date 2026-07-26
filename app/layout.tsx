import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Altiora Consults — Accounting, Tax & Business Process Consultancy",
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
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
