import type { Metadata } from "next";
import Link from "next/link";
import { cookies, headers } from "next/headers";
import MotionDiv from "../components/motion-div";
import PortfolioCard from "../components/PortfolioCard";
import { homepagePortfolioItems } from "../data/homepage-sections";
import { defaultRegion, getRegionConfig, isRegionKey, type RegionKey } from "@/lib/regions";

export const metadata: Metadata = {
  title: "Portfolio | Empire",
  description:
    "Website design portfolio for ecommerce, corporate, and service-business brands that want proof.",
};

type PortfolioPageProps = {
  region?: RegionKey;
};

async function getSelectedRegion(regionOverride?: RegionKey) {
  if (regionOverride) {
    return regionOverride;
  }

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

export default async function PortfolioPage({ region }: PortfolioPageProps = {}) {
  const selectedRegion = await getSelectedRegion(region);
  const country = getRegionConfig(selectedRegion).countryName;

  return (
    <main className="min-h-screen bg-Obsidian font-sans text-Alabaster">
      <section
        id="portfolio"
        className="bg-Obsidian px-6 py-24 text-Alabaster sm:px-10 lg:px-12"
      >
        <MotionDiv className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-ChampagneGold">
              SELECTED WORKS
            </p>
            <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-Alabaster sm:text-5xl">
              Website Design Portfolio for Brands that Want Proof.
            </h1>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-4">
            {homepagePortfolioItems.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>
        </MotionDiv>

        <MotionDiv className="mx-auto mt-16 max-w-7xl overflow-hidden border-[0.5px] border-ChampagneGold/30 bg-[linear-gradient(135deg,#080808_0%,#0d0902_48%,#080808_100%)] px-6 py-14 text-center shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:px-10 sm:py-16">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-BrandGold sm:text-sm">
            Build From A Clear Reference
          </p>
          <h2 className="mx-auto mt-5 max-w-5xl text-3xl font-black leading-tight text-Alabaster sm:text-5xl lg:text-6xl">
            Want a website like one of these for {country}?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-Alabaster/78 sm:text-lg">
            Tell us the project style you like, your business location, and what
            customers should do on the website. We will recommend the right
            structure for your {country} audience.
          </p>
          <Link
            href="/free-audit"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-BrandGold px-8 text-base font-black text-white transition-all hover:bg-BrandGold/90 hover:shadow-[0_0_34px_rgba(212,175,55,0.36)] focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
          >
            Let&apos;s Discuss
          </Link>
        </MotionDiv>
      </section>
    </main>
  );
}
