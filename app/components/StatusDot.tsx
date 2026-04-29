"use client";

import { motion } from "framer-motion";

type StatusDotProps = {
  tone?: "gold" | "emerald";
  className?: string;
};

const toneClasses = {
  gold: {
    center: "bg-BrandGold",
    ring: "bg-BrandGold/35",
  },
  emerald: {
    center: "bg-emerald-400",
    ring: "bg-emerald-400/35",
  },
};

export default function StatusDot({
  tone = "gold",
  className = "",
}: StatusDotProps) {
  const colors = toneClasses[tone];

  return (
    <span
      className={`relative inline-flex size-4 shrink-0 items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <motion.span
        className={`absolute size-4 rounded-full blur-[1px] ${colors.ring}`}
        animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.8, 1.25, 0.8] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className={`relative size-2 rounded-full ${colors.center}`} />
    </span>
  );
}
