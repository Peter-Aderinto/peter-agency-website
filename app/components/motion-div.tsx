"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionDivProps = HTMLMotionProps<"div"> & {
  delay?: number;
  duration?: number;
};

export default function MotionDiv({
  children,
  delay = 0,
  duration = 0.7,
  initial = { opacity: 0, y: 28 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, amount: 0.18 },
  transition,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={{ delay, duration, ease: "easeOut", ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
