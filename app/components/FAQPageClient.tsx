"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import FAQAccordionList from "./FAQAccordionList";
import type { FAQCategory, FAQItem } from "../data/faqs";

type FAQFilter = "All" | FAQCategory;

const filters: FAQFilter[] = ["All", "Process", "Pricing", "Technical", "Support"];

type FAQPageClientProps = {
  items: FAQItem[];
};

export default function FAQPageClient({ items }: FAQPageClientProps) {
  const [activeFilter, setActiveFilter] = useState<FAQFilter>("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="-mx-6 mt-10 overflow-x-auto px-6 sm:mx-0 sm:px-0"
      >
        <div className="flex min-w-max gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex h-12 items-center justify-center rounded-full border px-6 text-sm font-black transition-all ${
                  isActive
                    ? "border-BrandGold bg-BrandGold text-white shadow-[0_16px_36px_rgba(212,175,55,0.22)]"
                    : "border-SteelGrey/15 bg-white text-SteelGrey hover:border-BrandGold hover:text-BrandGold"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.26, ease: "easeOut" }}
          className="mt-10"
        >
          <FAQAccordionList items={filteredItems} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
