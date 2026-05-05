import type { Metadata } from "next";
import MotionDiv from "../components/motion-div";
import QuoteButton from "../components/QuoteButton";
import SiteHeader from "../components/SiteHeader";
import { pricingPlans } from "../data/homepage-sections";

export const metadata: Metadata = {
  title: "Pricing | Empire Website Development Packages",
  description:
    "Transparent website development pricing for Nigerian brands, e-commerce stores, and scaling businesses.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-Obsidian font-sans text-Alabaster">
      <SiteHeader />

      <section className="bg-Obsidian px-6 py-24 text-Alabaster sm:px-10 lg:px-12">
        <MotionDiv className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-medium leading-tight tracking-tight text-Alabaster sm:text-5xl">
              Transparent Pricing for Scaling Brands.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-8 text-MutedSlate">
              Choose the package that fits your current empire-building stage.
            </p>
          </div>

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

                <h2 className="text-2xl font-black leading-tight">
                  {plan.title}
                </h2>
                <p className={`mt-4 text-base leading-7 ${plan.mutedClassName}`}>
                  {plan.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <p className={`text-3xl font-black ${plan.priceClassName}`}>
                    {plan.price}
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
                      {tag}
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
                      <span>{feature}</span>
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
        </MotionDiv>
      </section>
    </main>
  );
}
