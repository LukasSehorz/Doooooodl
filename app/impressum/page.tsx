import type { Metadata } from "next";
import Link from "next/link";
import { business, legal } from "@/lib/content";

export const metadata: Metadata = {
  title: `${legal.impressum.title} — ${business.name}`,
  description: legal.impressum.intro,
};

export default function ImpressumPage() {
  const page = legal.impressum;

  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-[70ch]">
          <Link
            href="/"
            className="eyebrow inline-flex items-center gap-3 text-mute-dark transition-colors duration-300 hover:text-ink"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="size-4"
            >
              <path d="M20 12H4M10 6l-6 6 6 6" />
            </svg>
            {legal.backLabel}
          </Link>

          <h1 className="display mt-10 text-[clamp(2.25rem,6vw,4rem)]">
            {page.title}
          </h1>

          <p className="mt-6 leading-relaxed text-mute-dark">{page.intro}</p>

          <div className="mt-14 space-y-10">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="display text-[1.5rem]">{section.heading}</h2>
                <p className="mt-3 leading-relaxed text-mute-dark">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <aside className="mt-12 border-l-4 border-amber bg-paper-2 p-6 md:p-8">
            <p className="eyebrow text-band">{legal.noticeTitle}</p>
            <p className="mt-4 leading-relaxed text-ink/85">
              {legal.noticeBody}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-mute-dark">
              {page.placeholders.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-amber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-hair-dark pt-8 text-sm">
            <a
              href={business.phoneHref}
              className="font-semibold transition-colors duration-300 hover:text-band"
            >
              {business.phone}
            </a>
            <Link
              href="/datenschutz"
              className="text-mute-dark transition-colors duration-300 hover:text-ink"
            >
              {legal.datenschutz.title}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
