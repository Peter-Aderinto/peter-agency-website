import MotionDiv from "./motion-div";
import QuoteButton from "./QuoteButton";
import { pricingPlans } from "../data/homepage-sections";
import { RegionalPricing } from "../data/regional-pricing";
import { getRegionConfig, type RegionKey } from "@/lib/regions";

type PremiumPricingProps = {
  region?: RegionKey;
  headingLevel?: "h2" | "h3";
};

export default function PremiumPricing({
  region,
  headingLevel = "h3",
}: PremiumPricingProps) {
  const selectedRegion = region ?? "global";
  const prices = RegionalPricing[selectedRegion];
  const country = getRegionConfig(selectedRegion).countryName;
  const Heading = headingLevel;

  return (
    <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
      {pricingPlans.map((plan, index) => (
        <MotionDiv
          key={plan.title}
          delay={index * 0.08}
          className={`relative mb-8 flex h-full min-h-[560px] flex-col rounded-3xl border p-8 transition-all duration-300 ease-out hover:-translate-y-2 sm:p-9 lg:mb-0 ${plan.cardClassName}`}
        >
          {plan.recommended ? (
            <span className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full bg-Obsidian px-5 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-BrandGold shadow-[0_12px_30px_rgba(0,0,0,0.24)]">
              Recommended
            </span>
          ) : null}

          <Heading className="text-2xl font-black leading-tight">
            {plan.title}
          </Heading>
          <p className={`mt-4 text-base leading-7 ${plan.mutedClassName}`}>
            {plan.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <p className={`text-3xl font-black ${plan.priceClassName}`}>
              {prices[plan.tier]}
            </p>
            <span className="inline-flex rounded-full bg-red-600 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white">
              {plan.badge}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {plan.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] ${plan.tagClassName}`}
              >
                {tag.replace("Nigeria", country)}
              </span>
            ))}
          </div>

          <ul className={`mt-8 space-y-4 text-sm font-medium ${plan.mutedClassName}`}>
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${plan.checkClassName}`}
                >
                  ✓
                </span>
                <span>{feature.replace("Nigeria", country)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <QuoteButton
              label="Get Started"
              initialService={plan.initialService}
              className={`inline-flex h-14 w-full items-center justify-center rounded-full px-6 text-sm font-black transition-all focus:outline-none focus:ring-4 ${plan.buttonClassName}`}
            />
          </div>
        </MotionDiv>
      ))}
    </div>
  );
}
