import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ui, welcome } from "@/lib/content";

export default function Welcome() {
  return (
    <section id="werkstatt" className="bg-paper py-28 text-ink md:py-40">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="display max-w-[16ch] text-[clamp(2rem,4vw,3.25rem)]">
                {welcome.h2}
              </h2>
            </Reveal>

            <Reveal
              zoom
              delay={0.1}
              className="relative mt-14 aspect-[4/3] w-full overflow-hidden"
            >
              <Image
                src={ui.welcomeImage.src}
                alt={ui.welcomeImage.alt}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          <div className="md:pt-48">
            <Reveal>
              <p className="eyebrow text-mute-dark">{welcome.label}</p>

              <h3 className="display mt-6 text-[clamp(2rem,4.5vw,3.75rem)]">
                {welcome.h3}
              </h3>

              <p className="mt-8 max-w-[46ch] leading-relaxed text-mute-dark">
                {welcome.body}
              </p>

              <a
                href="#leistungen"
                className="group mt-12 inline-flex w-fit flex-col gap-2"
              >
                <span className="eyebrow flex items-center gap-3 text-ink">
                  {welcome.cta}
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
                <span className="block h-px w-full bg-hair-dark">
                  <span className="block h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
