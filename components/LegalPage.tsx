import Link from "next/link";
import { business, legal, type LegalBlock } from "@/lib/content";

function ArrowLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4 shrink-0"
    >
      <path d="M20 12H4M10 6l-6 6 6 6" />
    </svg>
  );
}

type LegalPageProps = {
  title: string;
  intro: string;
  blocks: LegalBlock[];
  /** Gegenseite in der Fußzeile der Rechtsseiten. */
  other: { label: string; href: string };
};

export default function LegalPage({
  title,
  intro,
  blocks,
  other,
}: LegalPageProps) {
  const openItems = blocks.flatMap((block) => block.todo ?? []);

  return (
    <main className="min-h-[100svh] bg-paper text-ink">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-6 md:px-10 md:py-28">
        <div className="max-w-[68ch]">
          <Link
            href="/"
            className="eyebrow inline-flex items-center gap-3 py-2 text-mute-dark transition-colors duration-300 hover:text-ink"
          >
            <ArrowLeft />
            {legal.backLabel}
          </Link>

          <h1 className="display mt-10 text-[clamp(2rem,7vw,4rem)] md:mt-14">
            {title}
          </h1>

          <p className="mt-5 text-[0.95rem] leading-relaxed text-mute-dark sm:text-base">
            {intro}
          </p>

          {openItems.length > 0 ? (
            <aside className="mt-10 border-l-4 border-amber bg-paper-2 p-5 sm:p-6 md:p-8">
              <p className="eyebrow text-band">{legal.noticeTitle}</p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/85">
                {legal.noticeBody}
              </p>
            </aside>
          ) : null}

          <div className="mt-12 space-y-10 md:mt-16 md:space-y-12">
            {blocks.map((block) => (
              <section key={block.heading}>
                <h2 className="display text-[1.3rem] sm:text-[1.5rem]">
                  {block.heading}
                </h2>

                {block.lines?.length ? (
                  // Reine Anschriftenblöcke enger setzen als Fließtextabsätze.
                  <div
                    className={
                      block.lines.every((line) => line.length < 70)
                        ? "mt-4 space-y-1"
                        : "mt-4 space-y-4"
                    }
                  >
                    {block.lines.map((line) => (
                      <p
                        key={line}
                        className="text-[0.95rem] leading-relaxed text-mute-dark"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ) : null}

                {block.todo?.length ? (
                  <div className="mt-5 border-l-2 border-amber/70 pl-4 sm:pl-5">
                    <p className="eyebrow text-amber">{legal.todoLabel}</p>
                    <ul className="mt-3 space-y-2.5">
                      {block.todo.map((item) => (
                        <li
                          key={item}
                          className="text-[0.9rem] leading-relaxed text-mute-dark"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hair-dark pt-8 text-sm">
            <a
              href={business.phoneHref}
              className="py-1 font-semibold transition-colors duration-300 hover:text-band"
            >
              {business.phone}
            </a>
            <Link
              href={other.href}
              className="py-1 text-mute-dark transition-colors duration-300 hover:text-ink"
            >
              {other.label}
            </Link>
            <p className="w-full text-xs text-mute-dark sm:ml-auto sm:w-auto">
              © {new Date().getFullYear()} {business.name}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
