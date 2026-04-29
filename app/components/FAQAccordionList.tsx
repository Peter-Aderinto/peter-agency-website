"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { FAQItem } from "../data/faqs";

type FAQAccordionListProps = {
  items: FAQItem[];
};

export default function FAQAccordionList({ items }: FAQAccordionListProps) {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(
    items[0]?.question ?? null,
  );

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = activeQuestion === item.question;

        return (
          <article
            key={item.question}
            className="overflow-hidden border border-SteelGrey/10 bg-white"
          >
            <button
              type="button"
              onClick={() => setActiveQuestion(isOpen ? null : item.question)}
              className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-base font-bold text-SteelGrey transition-colors hover:text-BrandGold sm:px-7 sm:py-6 sm:text-lg"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-BrandGold/10 text-xl font-black leading-none text-BrandGold">
                {isOpen ? "-" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <p className="border-t border-SteelGrey/10 px-5 py-5 text-sm font-medium leading-7 text-SteelGrey/80 sm:px-7 sm:text-base sm:leading-8">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
