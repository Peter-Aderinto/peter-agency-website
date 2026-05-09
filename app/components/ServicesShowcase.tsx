"use client";

import {
  Files,
  Laptop,
  Search,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";

type Service = {
  title: string;
  description: string;
  icon: "devices" | "growth" | "search" | "content" | "shopify";
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    rotateX: 8,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const iconClassName = "size-6";

  if (icon === "devices") {
    return (
      <>
        <Laptop className="size-7" strokeWidth={2.1} aria-hidden="true" />
        <Smartphone
          className="absolute -bottom-1 -right-1 size-4 rounded-sm bg-Obsidian"
          strokeWidth={2.4}
          aria-hidden="true"
        />
      </>
    );
  }

  if (icon === "growth") {
    return (
      <>
        <ShoppingBag className={iconClassName} strokeWidth={2.2} aria-hidden="true" />
        <TrendingUp
          className="absolute -right-1 -top-1 size-4 rounded-sm bg-Obsidian"
          strokeWidth={2.6}
          aria-hidden="true"
        />
      </>
    );
  }

  if (icon === "search") {
    return <Search className={iconClassName} strokeWidth={2.3} aria-hidden="true" />;
  }

  if (icon === "content") {
    return <Files className={iconClassName} strokeWidth={2.2} aria-hidden="true" />;
  }

  return (
    <>
      <ShoppingCart className={iconClassName} strokeWidth={2.2} aria-hidden="true" />
      <TrendingUp
        className="absolute -bottom-1 -right-1 size-4 rounded-sm bg-Obsidian"
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 170, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 170, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(circle at ${pointerX}% ${pointerY}%, rgba(212,175,55,0.24), transparent 34%)`;

  return (
    <motion.article
      variants={cardVariants}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        const xPercent = (x / bounds.width) * 100;
        const yPercent = (y / bounds.height) * 100;

        pointerX.set(xPercent);
        pointerY.set(yPercent);
        rotateX.set((50 - yPercent) * 0.12);
        rotateY.set((xPercent - 50) * 0.12);
      }}
      onMouseLeave={() => {
        pointerX.set(50);
        pointerY.set(50);
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border-[0.5px] border-ChampagneGold/35 bg-black p-7 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-md transition-colors duration-300 ease-out hover:border-BrandGold hover:bg-black sm:p-8"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-BrandGold to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 group-hover:opacity-100"
        animate={{ x: ["0%", "320%"] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatDelay: 1.4,
          ease: "easeInOut",
          delay: index * 0.12,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <motion.div
          className="relative flex size-12 items-center justify-center rounded-lg border-[0.5px] border-BrandGold/35 bg-black/35 text-BrandGold shadow-[0_12px_30px_rgba(212,175,55,0.12)] backdrop-blur-sm transition-colors group-hover:border-BrandGold/55 group-hover:bg-BrandGold group-hover:text-black"
          whileHover={{ rotate: -6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 340, damping: 18 }}
        >
          <ServiceIcon icon={service.icon} />
        </motion.div>

        <h3 className="mt-7 text-xl font-medium leading-tight text-Alabaster">
          {service.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-MutedSlate">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function ServicesShowcase({ services }: { services: readonly Service[] }) {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      className="mx-auto mt-14 grid max-w-6xl grid-cols-1 items-stretch gap-8 [perspective:1200px] lg:grid-cols-3"
    >
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </motion.div>
  );
}
