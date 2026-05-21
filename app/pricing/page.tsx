import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import PremiumPricing from "../components/PremiumPricing";
import MotionDiv from "../components/motion-div";
import { defaultRegion, isRegionKey, type RegionKey } from "@/lib/regions";

export const metadata: Metadata = {
  title: "Pricing | Empire Website Development Packages",
  description:
    "Transparent website development pricing for growth-focused brands, e-commerce stores, and scaling businesses.",
};

async function getSelectedRegion(): Promise<RegionKey> {
  const requestHeaders = await headers();
  const headerRegion = requestHeaders.get("x-empire-region") ?? undefined;
  if (isRegionKey(headerRegion)) {
    return headerRegion;
  }

  const cookieStore = await cookies();
  const cookieRegion = cookieStore.get("region")?.value;
  if (isRegionKey(cookieRegion)) {
    return cookieRegion;
  }

  return defaultRegion;
}

export default async function PricingPage() {
  const selectedRegion = await getSelectedRegion();

  return (
    <main className="min-h-screen bg-Obsidian font-sans text-Alabaster">
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

          <PremiumPricing headingLevel="h2" region={selectedRegion} />
        </MotionDiv>
      </section>
    </main>
  );
}
