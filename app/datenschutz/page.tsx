import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { business, legal } from "@/lib/content";

export const metadata: Metadata = {
  title: `${legal.datenschutz.title} — ${business.name}`,
  description: legal.datenschutz.intro,
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  const page = legal.datenschutz;

  return (
    <LegalPage
      title={page.title}
      intro={page.intro}
      blocks={page.blocks}
      other={{ label: legal.impressum.title, href: "/impressum" }}
    />
  );
}
