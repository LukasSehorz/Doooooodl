import Image from "next/image";
import Reveal from "@/components/Reveal";
import { business, testimonials } from "@/lib/content";

function initialOf(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="bewertungen" className="bg-paper py-28 text-ink md:py-40">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-mute-dark">{testimonials.label}</p>
          <h3 className="display mt-4 text-[clamp(2.25rem,6vw,4.5rem)] text-band">
            {testimonials.h3}
          </h3>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)]">
          <Reveal>
            <div className="relative aspect-[3/4] h-full w-full overflow-hidden">
              <Image
                src={testimonials.image}
                alt={testimonials.imageAlt}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.items.map((item, index) => (
              <Reveal key={item.quote} delay={index * 0.08} className="h-full">
                <figure className="flex h-full flex-col justify-between bg-paper-2 p-6">
                  <blockquote className="text-[0.95rem] leading-relaxed text-ink/85">
                    {`„${item.quote}“`}
                  </blockquote>

                  <figcaption className="mt-8 flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-band text-sm font-semibold text-cream">
                      {initialOf(item.name)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-xs text-mute-dark">
                        {item.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12">
          <div className="flex items-center gap-6">
            <span className="h-px flex-1 bg-hair-dark" />
            <a
              href={business.reviewsHref}
              target="_blank"
              rel="noreferrer"
              className="eyebrow flex shrink-0 items-center gap-3 text-ink transition-colors duration-300 hover:text-band"
            >
              {testimonials.cta}
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
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
