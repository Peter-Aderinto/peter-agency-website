"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type SectorPillCloudProps = {
  industries: readonly string[];
};

const cloudVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.38,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SectorPillCloud({ industries }: SectorPillCloudProps) {
  return (
    <motion.div
      className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-4"
      variants={cloudVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      {industries.map((industry) => (
        <motion.span
          key={industry}
          variants={pillVariants}
          className="inline-flex min-h-14 items-center justify-center rounded-full border border-SteelGrey/10 bg-white px-6 text-center text-sm font-bold leading-6 text-SteelGrey shadow-sm transition-all duration-300 hover:scale-[1.035] hover:border-BrandGold hover:text-BrandGold hover:shadow-[0_0_28px_rgba(212,175,55,0.18)] sm:px-7 sm:text-base"
        >
          {industry}
        </motion.span>
      ))}
    </motion.div>
  );
}
