"use client";

import { motion } from "framer-motion";
import StatusDot from "./StatusDot";

type EngineeringProcessStepProps = {
  step: string;
  title: string;
  description: string;
  icon: "audit" | "ux" | "dev" | "scale";
  side: "left" | "right";
  isActive?: boolean;
};

function ProcessIcon({ icon }: { icon: EngineeringProcessStepProps["icon"] }) {
  const className = "size-8";

  if (icon === "audit") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
      >
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Z" />
        <path d="M8 8h8" />
        <path d="M8 12h5" />
        <path d="m8 16 2 2 4-5" />
      </svg>
    );
  }

  if (icon === "ux") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
      >
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z" />
        <path d="M4 9h16" />
        <path d="M8 13h3" />
        <path d="M8 16h7" />
        <path d="M15.5 13h.01" />
      </svg>
    );
  }

  if (icon === "dev") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
      >
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path d="M12 3 5 6v5.4c0 4.2 2.8 8 7 9.6 4.2-1.6 7-5.4 7-9.6V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

export default function EngineeringProcessStep({
  step,
  title,
  description,
  icon,
  side,
  isActive = false,
}: EngineeringProcessStepProps) {
  const isLeft = side === "left";

  return (
    <div className="relative grid items-center gap-6 md:grid-cols-[1fr_88px_1fr]">
      <div
        className={`pointer-events-none absolute left-1/2 top-0 z-0 hidden -translate-x-1/2 text-[96px] font-black uppercase leading-none tracking-[0.02em] text-SoftCream/10 lg:block ${
          isLeft ? "lg:-translate-x-[88%]" : "lg:translate-x-[-12%]"
        }`}
        aria-hidden="true"
      >
        {step}
      </div>

      <motion.article
        className={`relative z-10 rounded-lg bg-white p-6 text-center text-SteelGrey shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_30px_82px_rgba(0,0,0,0.24)] sm:p-8 md:text-left ${
          isLeft ? "md:col-start-1" : "md:col-start-3"
        }`}
        initial={{ opacity: 0, x: isLeft ? -72 : 72 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ y: -8 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex size-16 items-center justify-center rounded-lg bg-SoftCream text-BrandGold md:mx-0">
          <ProcessIcon icon={icon} />
        </div>
        <p className="mt-7 inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-BrandGold md:justify-start">
          {isActive ? <StatusDot tone="gold" /> : null}
          <span>{step}</span>
        </p>
        <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 text-base leading-8 text-SteelGrey/75">
          {description}
        </p>
      </motion.article>

      <div className="relative z-10 hidden md:col-start-2 md:flex md:items-center md:justify-center">
        <div className="relative flex size-14 items-center justify-center rounded-full border border-BrandGold/35 bg-SteelGrey text-sm font-black text-BrandGold shadow-[0_0_0_8px_rgba(74,74,74,1)]">
          {isActive ? (
            <StatusDot tone="gold" className="absolute -right-1 -top-1" />
          ) : null}
          {step.replace("STEP ", "")}
        </div>
      </div>
    </div>
  );
}
