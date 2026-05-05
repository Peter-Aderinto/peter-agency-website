"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { Project } from "@/data/projects";

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PortfolioGallery({
  projects,
}: {
  projects: readonly Project[];
}) {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2"
    >
      {projects.map((project) => (
        <motion.article
          key={project.id}
          variants={cardVariants}
          className="group flex h-full flex-col"
        >
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border-[0.5px] border-ChampagneGold/35 bg-neutral-950 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="mt-7 flex flex-1 flex-col">
            <h2 className="text-2xl font-medium leading-tight tracking-tight text-Alabaster sm:text-3xl">
              {project.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-MutedSlate">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex min-h-10 items-center rounded-full border-[0.5px] border-ChampagneGold/30 bg-transparent px-4 text-sm font-black text-Alabaster shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-BrandGold px-6 text-sm font-black text-black transition-all hover:bg-BrandGold/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.28)] focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
            >
              View Live Site →
            </a>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
