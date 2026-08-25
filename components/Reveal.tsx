"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const VIEWPORT = { once: true, margin: "-80px" } as const;

type RevealProps = {
  children: ReactNode;
  /** Verzögerung in Sekunden, für gestaffelte Rasterelemente. */
  delay?: number;
  className?: string;
  /**
   * Zusätzliche, langsame Bildfahrt von scale 1.06 auf 1 über 1,2 s.
   * Die Skalierung liegt auf einer inneren Ebene, damit der aussenliegende
   * Rahmen (z. B. `overflow-hidden` plus Seitenverhältnis) ruhig bleibt.
   */
  zoom?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  className,
  zoom = false,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {zoom ? (
        <motion.div
          className="relative h-full w-full"
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.2, ease: EASE, delay }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}
