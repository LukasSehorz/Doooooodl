import Reveal from "@/components/Reveal";
import { fleet } from "@/lib/content";

function BrandRow({ ariaHidden }: { ariaHidden: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {fleet.brands.map((brand) => (
        <span key={brand} className="flex items-center">
          <span className="display whitespace-nowrap px-8 text-[clamp(1.25rem,2.5vw,2rem)] text-mute/40">
            {brand}
          </span>
          <span className="text-amber/40" aria-hidden="true">
            •
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Fleet() {
  return (
    <section className="border-y border-hair bg-ink py-20">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <Reveal className="text-center">
          <h3 className="display text-[clamp(1.5rem,3vw,2.25rem)] text-cream">
            {fleet.title}
          </h3>
          <p className="mt-3 text-sm text-mute">{fleet.subtitle}</p>
          <p className="mx-auto mt-4 max-w-[52ch] text-sm text-mute/80">
            {fleet.note}
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 w-full max-w-[1500px]">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[140px] bg-gradient-to-r from-ink via-ink/85 to-transparent md:w-[220px]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[140px] bg-gradient-to-l from-ink via-ink/85 to-transparent md:w-[220px]" />

          <div className="marquee-track flex w-max">
            <BrandRow ariaHidden={false} />
            <BrandRow ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
