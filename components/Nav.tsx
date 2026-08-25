"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { business, nav, ui } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4 shrink-0"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-hair bg-ink/85 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between gap-4 px-6 md:px-10">
          <a
            href="#start"
            className="display text-[28px] lowercase tracking-tight text-cream"
          >
            {business.shortName}
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-amber-soft"
            >
              <PhoneIcon />
              <span className="whitespace-nowrap">{business.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={ui.menuOpen}
              aria-expanded={open}
              className="grid size-11 shrink-0 place-items-center text-cream"
            >
              <span className="flex flex-col gap-[6px]">
                <span className="block h-px w-6 bg-cream" />
                <span className="block h-px w-6 bg-cream" />
                <span className="block h-px w-6 bg-cream" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[60] bg-ink"
          >
            <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col px-6 md:px-10">
              <div className="flex h-[72px] shrink-0 items-center justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={ui.menuClose}
                  className="grid size-11 place-items-center text-cream transition-colors duration-300 hover:text-amber"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path d="M5 5 19 19M19 5 5 19" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto py-10">
                {nav.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: EASE,
                      delay: 0.08 + index * 0.06,
                    }}
                    className="display w-fit text-5xl text-cream transition-colors duration-300 hover:text-amber md:text-7xl"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
