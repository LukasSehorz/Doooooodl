"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { business, footer, hero, ui } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function EdgeLabel({ label }: { label: string }) {
  return (
    <span className="flex flex-col items-center gap-5">
      <span className="h-14 w-px bg-hair" />
      <span className="vlabel text-mute">{label}</span>
    </span>
  );
}

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const words = hero.headline.split(" ");

  return (
    <section
      id="start"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-ink"
    >
      {/* Hintergrund: Poster mit sehr langsamer Zoomfahrt, darüber das Video. */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.08] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={ui.heroPoster.src}
          alt={ui.heroPoster.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <video
        className={clsx(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          videoReady ? "opacity-100" : "opacity-0",
        )}
        poster={ui.heroPoster.src}
        src={ui.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setVideoReady(true)}
        onError={() => setVideoReady(false)}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink" />
      <div className="absolute inset-0 bg-ink/30" />

      {/* Seitliche Mikro-Beschriftungen */}
      <div className="pointer-events-none absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <EdgeLabel label={hero.labelLeft} />
      </div>
      <div className="pointer-events-none absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-10 lg:flex">
        <EdgeLabel label={hero.labelRightTop} />
        <EdgeLabel label={hero.labelRightBottom} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-6 pb-14 pt-32 md:px-10">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-hair" />
            <span className="eyebrow text-mute">{hero.eyebrow}</span>
          </div>

          <p className="mt-5 flex flex-wrap gap-x-2 text-sm tracking-wide text-mute">
            {hero.welcome.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: 0.15 + index * 0.06,
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center py-16">
          <h1 className="display mx-auto max-w-[16ch] text-center text-[clamp(2.75rem,8vw,7.5rem)] text-cream">
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="inline-block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: EASE,
                  delay: 0.3 + index * 0.08,
                }}
              >
                {word}
                {index < words.length - 1 ? " " : null}
              </motion.span>
            ))}
          </h1>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:items-end md:gap-8">
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            {hero.description}
          </p>

          <div>
            <p className="eyebrow text-mute">{footer.findUs}</p>
            <a
              href={business.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-sm leading-relaxed text-cream/85 transition-colors duration-300 hover:text-amber"
            >
              <span className="block">{business.street}</span>
              <span className="block">
                {business.zip} {business.city}
              </span>
            </a>
          </div>

          <div>
            <p className="eyebrow text-mute">{footer.openingHours}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-cream/85">
              {business.hours.map((entry) => (
                <li key={entry.days}>
                  {entry.days} — {entry.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 hidden h-14 w-px -translate-x-1/2 overflow-hidden bg-hair md:block"
        aria-hidden="true"
      >
        <motion.span
          className="absolute inset-x-0 top-0 block h-4 bg-amber"
          animate={{ y: ["-100%", "400%"] }}
          transition={{ duration: 2.2, ease: "linear", repeat: Infinity }}
        />
      </div>
    </section>
  );
}
