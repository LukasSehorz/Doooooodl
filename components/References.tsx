import Image from "next/image";
import Reveal from "@/components/Reveal";
import { references } from "@/lib/content";

export default function References() {
  return (
    <section id="referenzen" className="bg-ink-2 py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-amber">{references.label}</p>
          <h3 className="display mt-4 text-[clamp(2rem,5vw,4rem)] text-cream">
            {references.h3}
          </h3>
          <p className="mt-5 max-w-[52ch] text-mute">{references.body}</p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {references.items.map((item, index) => (
            <Reveal key={item.image} delay={index * 0.1}>
              <article className="group">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <span className="eyebrow mt-6 inline-block rounded-full border border-hair px-3 py-1 text-[10px] text-amber">
                  {item.tag}
                </span>

                <h4 className="display mt-4 text-[1.35rem] text-cream">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
