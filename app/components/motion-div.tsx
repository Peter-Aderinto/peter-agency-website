"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionDivProps = HTMLMotionProps<"div"> & {
  delay?: number;
  duration?: number;
};

export default function MotionDiv({
  children,
  delay = 0.2,
  duration = 0.8,
  transition,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: "easeOut", ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
