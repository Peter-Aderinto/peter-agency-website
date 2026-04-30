import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle2 } from "lucide-react";
import QuoteButton from "../components/QuoteButton";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About Empire | Website & E-commerce Developer in Nigeria",
  description:
    "Meet Empire, a Nigeria-based website and e-commerce development studio architecting scalable digital systems with research-led strategy, UI/UX, Next.js, Shopify, and SEO.",
};

const stackItems = [
  "Next.js",
  "Framer Motion",
  "Tailwind CSS",
  "Shopify",
  "WordPress",
  "Bubble io",
  "JavaScript",
] as const;

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`min-h-56 rounded-lg border border-BrandGold/35 bg-white/5 shadow-[0_22px_60px_rgba(0,0,0,0.16)] ${className}`}
    />
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-SoftCream font-sans text-SteelGrey">
      <SiteHeader />

      <section className="bg-[#101010] px-4 py-12 text-white sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-BrandGold sm:text-xs sm:tracking-[0.22em]">
              Lead Website Developer in Nigeria
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Web projects can be messy. We make them simple.
            </h1>
            <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-white/78 sm:mt-6 sm:text-lg sm:leading-8">
              We help ambitious brands build scalable websites and systems that
              convert today and compound over time. Whether you are a local
              business in Nigeria or a global brand, we tailor every line of
              code to help you increase visibility and make more sales.
            </p>
            <div className="mt-7 flex max-w-xl items-start gap-3 border-l-2 border-BrandGold pl-4 text-xs font-black uppercase leading-6 tracking-[0.08em] text-BrandGold sm:mt-8 sm:items-center sm:text-sm sm:tracking-[0.12em]">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 sm:mt-0" aria-hidden="true" />
              50+ Completed Projects Across Nigeria, UK, and USA.
            </div>
          </div>

          <ImagePlaceholder className="aspect-[4/3] min-h-52 rounded-xl border-2 bg-SoftCream/5 sm:min-h-72" />
        </div>
      </section>

      <section className="px-4 py-10 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 bg-[#101010] px-5 py-9 text-white sm:gap-12 sm:px-10 sm:py-12 lg:grid-cols-[0.9fr_1fr] lg:px-14 lg:py-16">
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-BrandGold sm:text-xs sm:tracking-[0.22em]">
              Who We Are
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-5xl">
              We build digital systems for brands ready to scale.
            </h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-white/76 sm:mt-6 sm:text-base sm:leading-8">
              Empire is a website development agency in Nigeria built for
              founders, Shopify brands, and organizations that need more than a
              beautiful screen. Our work connects research, conversion strategy,
              and resilient engineering into one operating system for growth.
            </p>
            <p className="mt-6 text-xl font-black text-BrandGold">
              100+ Completed Projects
            </p>
          </div>

          <ImagePlaceholder className="aspect-[16/10] min-h-48 sm:min-h-64" />
        </div>
      </section>

      <section className="px-4 py-10 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl bg-[#101010] px-5 py-9 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-BrandGold sm:text-xs sm:tracking-[0.22em]">
              Mission & Vision
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-black leading-tight sm:text-5xl">
              Purpose-led engineering for ambitious brands.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:gap-6">
            <article className="rounded-lg bg-white/[0.06] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)] sm:p-8">
              <h3 className="text-xl font-black text-BrandGold sm:text-2xl">
                Our Mission
              </h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/78 sm:text-base">
                Merging data-driven research with elite functionality to deliver
                web solutions that make a lasting impact.
              </p>
            </article>

            <article className="rounded-lg bg-white/[0.06] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)] sm:p-8">
              <h3 className="text-xl font-black text-BrandGold sm:text-2xl">
                Our Vision
              </h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/78 sm:text-base">
                To become Nigeria&apos;s leading force in digital transformation
                by redefining brand-audience connections through innovative
                technology.
              </p>
            </article>
          </div>

          <div className="mt-12">
            <h2 className="text-center text-2xl font-black text-BrandGold sm:text-3xl">
              Our Stack
            </h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {stackItems.map((item) => (
                <div
                  key={item}
                  className="flex min-h-16 items-center justify-center rounded-lg bg-white/[0.06] px-4 text-center text-sm font-black text-white sm:min-h-20 sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 text-center sm:px-10 sm:pb-20 lg:px-12">
        <Link
          href="/Aderinto_Peter_Resume.pdf"
          className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-BrandGold px-7 text-sm font-black text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25 sm:w-auto"
        >
          <ArrowDownToLine className="size-4" aria-hidden="true" />
          Download CV
        </Link>
      </section>

      <section className="bg-white px-4 py-14 text-center sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black leading-tight text-SteelGrey sm:text-5xl">
            Let&apos;s Build Something Great For You
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-SteelGrey/75 sm:text-base sm:leading-8">
            Whether you need a website, brand, tech strategy, or personal
            launch, we&apos;re here to build a digital experience that works for
            you.
          </p>
          <QuoteButton
            label="Let's Build Something Great For You"
            className="mt-8 inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-full bg-BrandGold px-5 text-center text-sm font-black text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25 sm:w-auto sm:px-8 sm:text-base"
            initialService="Web Design Nigeria"
          />
        </div>
      </section>
    </main>
  );
}
