import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { business, legal } from "@/lib/content";

export const metadata: Metadata = {
  title: `${legal.impressum.title} — ${business.name}`,
  description: legal.impressum.intro,
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  const page = legal.impressum;

  return (
    <LegalPage
      title={page.title}
      intro={page.intro}
      blocks={page.blocks}
      other={{ label: legal.datenschutz.title, href: "/datenschutz" }}
    />
  );
}
