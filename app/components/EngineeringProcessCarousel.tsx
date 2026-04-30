"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import EngineeringProcessStep from "./EngineeringProcessStep";

type ProcessItem = {
  step: string;
  title: string;
  description: string;
  icon: "audit" | "ux" | "dev" | "scale";
  side: "left" | "right";
};

type EngineeringProcessCarouselProps = {
  items: readonly ProcessItem[];
};

export default function EngineeringProcessCarousel({
  items,
}: EngineeringProcessCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToStep(direction: "previous" | "next") {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const nextIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, items.length - 1)
        : Math.max(activeIndex - 1, 0);
    const target = container.children.item(nextIndex) as HTMLElement | null;

    target?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveIndex(nextIndex);
  }

  function updateActiveStep() {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(container.children).forEach((child, index) => {
      const element = child as HTMLElement;
      const itemCenter = element.offsetLeft + element.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }

  return (
    <div className="relative -mx-6 mt-12 md:hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-SteelGrey to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-SteelGrey to-transparent"
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => scrollToStep("previous")}
        disabled={activeIndex === 0}
        aria-label="Previous process step"
        className="absolute left-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-SoftCream/20 bg-SteelGrey/85 text-SoftCream shadow-lg transition-colors disabled:opacity-35"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>

      <div
        ref={scrollRef}
        onScroll={updateActiveStep}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item.step}
            className="w-[82vw] max-w-[360px] flex-none snap-center"
          >
            <EngineeringProcessStep
              step={item.step}
              title={item.title}
              description={item.description}
              icon={item.icon}
              side={item.side}
              isActive={item.step === "STEP 01"}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollToStep("next")}
        disabled={activeIndex === items.length - 1}
        aria-label="Next process step"
        className="absolute right-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-SoftCream/20 bg-SteelGrey/85 text-SoftCream shadow-lg transition-colors disabled:opacity-35"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      <div className="mt-2 flex items-center justify-center gap-2">
        {items.map((item, index) => (
          <span
            key={item.step}
            className={`h-1.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-BrandGold" : "w-2 bg-SoftCream/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
