import { business, contact } from "@/lib/content";

export default function ContactBand() {
  return (
    <section id="kontakt" className="bg-band py-12 text-cream">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="display text-[clamp(1.5rem,3vw,2.25rem)]">
              {contact.title}
            </h3>
            <p className="mt-2 text-sm text-cream/70">{contact.body}</p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2.5 text-sm font-semibold transition-colors duration-300 hover:text-amber"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-4 shrink-0"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
              </svg>
              {business.phone}
            </a>

            <a
              href={business.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-sm font-semibold transition-colors duration-300 hover:text-amber"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-4 shrink-0"
              >
                <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {business.city}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
