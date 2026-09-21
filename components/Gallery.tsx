import Image from "next/image";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/content";

export default function Gallery() {
  return (
    <section id="galerie" className="bg-ink py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-amber">{gallery.label}</p>
          <h3 className="display mt-4 text-[clamp(2rem,5vw,4rem)] text-cream">
            {gallery.h3}
          </h3>
          <p className="mt-5 max-w-[52ch] text-mute">{gallery.body}</p>
        </Reveal>

        {/* Kleine Vorschaubilder in fester Breite, nebeneinander umbrechend. */}
        <div className="mt-16 flex flex-wrap gap-2">
          {gallery.items.map((item, index) => (
            <Reveal
              key={item.image}
              delay={(index % 8) * 0.04}
              className="w-[88px] sm:w-[110px] md:w-[132px]"
            >
              <div className="group relative aspect-[4/3] w-full overflow-hidden bg-ink-3">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="132px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
