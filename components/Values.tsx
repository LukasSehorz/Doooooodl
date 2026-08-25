import Image from "next/image";
import Reveal from "@/components/Reveal";
import { values } from "@/lib/content";

function initialsOf(name: string): string {
  return name
    .split(" ")
    .map((part) => part.trim().charAt(0))
    .filter((letter) => /[A-Za-zÄÖÜäöüß]/.test(letter))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Stars({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      <span className="flex gap-1.5 text-gold">
        {[0, 1, 2, 3, 4].map((index) => (
          <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9L12 2.6Z" />
          </svg>
        ))}
      </span>
    </span>
  );
}

export default function Values() {
  return (
    <section className="bg-ink md:grid md:grid-cols-2 md:items-start">
      <div className="relative flex flex-col justify-center p-8 md:sticky md:top-0 md:h-screen md:p-16">
        <span className="vlabel absolute left-3 top-1/2 hidden -translate-y-1/2 text-mute lg:block">
          {values.label}
        </span>

        <Reveal>
          <h2 className="display text-[clamp(2.25rem,5vw,4.25rem)] text-cream">
            {values.h2}
          </h2>

          <p className="mt-6 max-w-[44ch] leading-relaxed text-mute">
            {values.body}
          </p>

          <Stars className="mt-10 block" />

          <p className="mt-4 font-semibold text-cream">{values.quote}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink-3 text-sm text-amber">
              {initialsOf(values.quoteAuthor)}
            </span>
            <span>
              <span className="block text-sm text-cream">
                {values.quoteAuthor}
              </span>
              <span className="eyebrow mt-2 block text-mute">
                {values.quoteRole}
              </span>
            </span>
          </div>

          <a
            href="#kontakt"
            className="group mt-10 inline-flex w-fit flex-col gap-2"
          >
            <span className="eyebrow flex items-center gap-3 text-cream">
              {values.cta}
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
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </span>
            <span className="block h-px w-full bg-hair">
              <span className="block h-px w-full origin-left scale-x-0 bg-amber transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </span>
          </a>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6 bg-ink-3 p-8 md:p-16">
        {values.cards.map((card, index) => (
          <Reveal key={card.no} delay={index * 0.12}>
            <article className="bg-ink p-8">
              <div className="flex items-baseline gap-4">
                <span className="text-xs tracking-[0.3em] text-amber">
                  {card.no}
                </span>
                <h3 className="display text-[clamp(1.35rem,2.5vw,2rem)] text-cream">
                  {card.title}
                </h3>
              </div>

              <div className="relative mt-6 aspect-video w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-mute">
                {card.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
