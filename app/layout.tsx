import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { business, ui } from "@/lib/content";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: ui.metaTitle,
  description: ui.metaDescription,
  applicationName: business.name,
  authors: [{ name: business.name }],
  keywords: [
    "Kfz-Werkstatt",
    "Kfz-Meisterbetrieb",
    "Taufkirchen Vils",
    "Inspektion",
    "Bremsen",
    "Fahrzeugdiagnose",
    business.name,
  ],
  openGraph: {
    title: ui.metaTitle,
    description: ui.metaDescription,
    siteName: business.name,
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${inter.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
