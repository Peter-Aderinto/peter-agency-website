import type { Metadata } from "next";
import QuoteButton from "../components/QuoteButton";
import SiteHeader from "../components/SiteHeader";
import { packages } from "../data/packages";

const whatsappHref =
  "https://wa.me/2348126575582?text=Hi%20Peter%2C%20I%27d%20like%20more%20information%20about%20your%20website%20pricing.";

export const metadata: Metadata = {
  title: "Pricing | Empire Website Development Packages",
  description:
    "Explore Empire website design, SEO, and business setup pricing for Nigerian brands, then contact us for a custom quote.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-SoftCream font-sans text-SteelGrey">
      <SiteHeader />

      <section className="px-4 py-14 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-BrandGold">
              Empire Pricing
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight text-SteelGrey sm:text-5xl lg:text-6xl">
              Our Pricing
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-8 text-SteelGrey/70 sm:text-lg">
              Transparent pricing for high-performance digital infrastructure.
              Choose a starting point, then request a tailored quote for your
              exact business goals.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
            {packages.map((packageItem) => (
              <article
                key={packageItem.title}
                className={`relative flex h-full min-h-[520px] flex-col rounded-xl border bg-white p-8 text-SteelGrey transition-all duration-300 ease-out hover:-translate-y-2 hover:border-BrandGold hover:shadow-[0_24px_60px_rgba(74,74,74,0.14)] sm:p-9 ${
                  packageItem.popular
                    ? "border-BrandGold shadow-[0_18px_44px_rgba(212,175,55,0.12)]"
                    : "border-SteelGrey/10 shadow-sm"
                }`}
              >
                {packageItem.popular ? (
                  <span className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full bg-BrandGold px-5 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(212,175,55,0.22)]">
                    Most Popular
                  </span>
                ) : null}

                <h2 className="text-2xl font-black text-SteelGrey">
                  {packageItem.title}
                </h2>
                <p className="mt-5 text-3xl font-black text-BrandGold">
                  {packageItem.price}
                </p>

                <ul className="mt-8 space-y-3 text-sm font-medium text-SteelGrey/78">
                  {packageItem.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-BrandGold text-[10px] font-black text-white">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <QuoteButton
                    label="Get Quote →"
                    initialService={packageItem.title}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-BrandGold px-6 text-sm font-black text-white transition-all hover:bg-BrandGold/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.24)] focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-xl bg-white px-6 py-10 text-center shadow-[0_18px_50px_rgba(74,74,74,0.08)] sm:px-10">
            <h2 className="text-2xl font-black text-SteelGrey sm:text-3xl">
              Need more information?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-SteelGrey/70 sm:text-base">
              Tell us what you want to build and we&apos;ll help you choose the
              right plan or create a custom quote for your project.
            </p>
            <a
              href={whatsappHref}
              className="mt-7 inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-full bg-BrandGold px-7 text-sm font-black text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25 sm:w-auto sm:text-base"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
