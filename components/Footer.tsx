import Image from "next/image";
import { business, footer, nav, testimonials, ui } from "@/lib/content";

function Stars() {
  return (
    <span className="flex gap-1 text-gold" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => (
        <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
          <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9L12 2.6Z" />
        </svg>
      ))}
    </span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink pb-10 pt-24">
      <span className="vlabel absolute left-4 top-24 hidden text-mute-dark lg:block">
        {footer.labelLeft}
      </span>
      <span className="vlabel absolute right-4 top-24 hidden text-mute-dark lg:block">
        {footer.labelRight}
      </span>

      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr_1fr]">
          <div>
            <Image
              src="/img/logo.png"
              alt={`${business.name} — Automobiltechnik & Karosseriebau, Meisterbetrieb`}
              width={2172}
              height={724}
              className="h-12 w-auto"
            />

            <nav aria-label={footer.navigate} className="mt-10">
              <h2 className="eyebrow mb-5 text-mute">{footer.navigate}</h2>
              <ul className="flex flex-col gap-3 text-sm text-cream/80">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition-colors duration-300 hover:text-amber"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="display mb-8 text-2xl text-cream">
              {footer.findUs}
            </h2>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-mute">{footer.visitUs}</p>
                <address className="mt-4 text-sm not-italic leading-relaxed text-cream/80">
                  <a
                    href={business.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-300 hover:text-amber"
                  >
                    <span className="block">{business.street}</span>
                    <span className="block">
                      {business.zip} {business.city}
                    </span>
                  </a>
                </address>
              </div>

              <div>
                <p className="eyebrow text-mute">{footer.openingHours}</p>
                <ul className="mt-4 space-y-2 text-sm text-cream/80">
                  {business.hours.map((entry) => (
                    <li key={entry.days}>
                      {entry.days} — {entry.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="display text-3xl text-cream">
                {business.rating}
              </span>
              <span className="text-sm text-mute">{ui.ratingOutOf}</span>
              <Stars />
            </div>

            <p className="mt-3 text-sm text-mute">
              {business.ratingCount} {testimonials.label}
            </p>

            <a
              href={business.reviewsHref}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex w-fit flex-col gap-2"
            >
              <span className="eyebrow flex items-center gap-3 text-cream">
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
                  <path d="M4 12h16M14 6l6 6-6 6" />
                </svg>
              </span>
              <span className="block h-px w-full bg-hair">
                <span className="block h-px w-full origin-left scale-x-0 bg-amber transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-hair pt-8 text-xs text-mute-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}
          </p>
          <ul className="flex gap-6">
            {footer.legal.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors duration-300 hover:text-amber"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
