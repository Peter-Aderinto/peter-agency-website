"use client";

import { motion } from "framer-motion";

const serviceText =
  "WEBSITE DEVELOPER IN NIGERIA ⚡ SHOPIFY EXPERT ⚡ E-COMMERCE SYSTEMS ⚡ SEO OPTIMIZATION ⚡";

const authorityText =
  "100+ GLOBAL PROJECTS ⚡ UI RESEARCH-BACKED ⚡ 5-STAR RATED SERVICE ⚡ CONVERSION SPECIALIST ⚡";

function TickerTrack({
  text,
  direction,
  duration,
}: {
  text: string;
  direction: "left" | "right";
  duration: number;
}) {
  return (
    <motion.div
      className="flex w-max items-center whitespace-nowrap"
      animate={direction === "left" ? { x: ["0%", "-50%"] } : { x: ["-50%", "0%"] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <span key={index} className="mx-6 shrink-0">
          {text}
        </span>
      ))}
    </motion.div>
  );
}

export default function DualTickerMarquee() {
  return (
    <section
      className="relative z-10 -mt-8 overflow-hidden bg-Obsidian py-12 sm:-mt-10"
      aria-label="Empire trust and service highlights"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-ChampagneGold/20" />
      <div className="mx-[-8vw] -space-y-1">
        <div className="relative overflow-hidden border-y-[0.5px] border-black/25 bg-BrandGold py-4 text-Obsidian shadow-[0_18px_70px_rgba(0,0,0,0.32)] skew-y-2">
          <div className="font-mono text-sm font-black uppercase tracking-widest">
            <TickerTrack text={serviceText} direction="left" duration={22} />
          </div>
        </div>

        <div className="relative overflow-hidden border-y-[0.5px] border-ChampagneGold/35 bg-Obsidian py-4 text-Alabaster shadow-[0_18px_70px_rgba(0,0,0,0.28)] skew-y-2">
          <div className="font-mono text-sm font-black uppercase tracking-widest">
            <TickerTrack text={authorityText} direction="right" duration={30} />
          </div>
        </div>
      </div>
    </section>
  );
}
