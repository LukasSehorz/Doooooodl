import Image from "next/image";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="leistungen" className="bg-ink py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <Reveal className="mb-16">
          <h3 className="display text-[clamp(2.5rem,7vw,6rem)] text-cream">
            {services.h3.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {services.items.map((item, index) => (
            <Reveal key={item.image} delay={index * 0.1}>
              <article className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/20 to-transparent" />

                <div className="absolute inset-0 p-8">
                  <p className="eyebrow text-cream/70">{item.eyebrow}</p>
                  <h4 className="display mt-3 max-w-[22ch] text-[clamp(1.1rem,2vw,1.6rem)] text-cream">
                    {item.title}
                  </h4>
                </div>

                <span className="absolute bottom-6 right-6 grid size-12 place-items-center rounded-full border border-hair text-cream transition-colors duration-500 group-hover:border-amber group-hover:bg-amber group-hover:text-ink">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="size-5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
