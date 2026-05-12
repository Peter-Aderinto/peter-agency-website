import type { Metadata } from "next";
import Link from "next/link";
import MotionDiv from "../components/motion-div";
import PortfolioCard from "../components/PortfolioCard";
import { homepagePortfolioItems } from "../data/homepage-sections";

export const metadata: Metadata = {
  title: "Portfolio | Empire",
  description:
    "Website design portfolio for ecommerce, corporate, and service-business brands that want proof.",
};

export default function PortfolioPage() {
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

        <MotionDiv className="mx-auto mt-16 max-w-7xl overflow-hidden rounded-2xl border-[0.5px] border-ChampagneGold/30 bg-[#111111] px-6 py-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:px-10">
          <p className="mx-auto max-w-3xl text-base font-medium leading-8 text-MutedSlate sm:text-lg">
            View the full portfolio for ecommerce, Shopify, corporate, and
            service-business website examples.
          </p>
          <Link
            href="/portfolio"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563eb] px-7 text-base font-black text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_34px_rgba(37,99,235,0.38)] focus:outline-none focus:ring-4 focus:ring-blue-500/30"
          >
            View Full Portfolio →
          </Link>
        </MotionDiv>
      </section>
    </main>
  );
}
