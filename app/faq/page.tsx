import Link from "next/link";
import FAQPageClient from "../components/FAQPageClient";
import { faqItems } from "../data/faqs";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-SoftCream px-6 py-16 text-SteelGrey sm:px-10 sm:py-20 lg:px-12">
      <section className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm font-black uppercase tracking-[0.18em] text-BrandGold transition-colors hover:text-SteelGrey"
        >
          ← Back to Home
        </Link>

        <div className="mt-12">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-BrandGold">
            EMPIRE KNOWLEDGE BASE
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-SteelGrey sm:text-6xl">
            Clear answers for confident digital investment.
          </h1>
          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-SteelGrey/80 sm:text-lg">
            Browse our most common process, pricing, technical, and support
            questions before starting your Empire build.
          </p>
        </div>

        <FAQPageClient items={faqItems} />

        <div className="mt-12 border border-BrandGold/20 bg-white px-6 py-9 text-center sm:px-10">
          <h2 className="text-2xl font-black text-SteelGrey">
            Still have questions?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-8 text-SteelGrey/80">
            Send us a message and we&apos;ll help you choose the right path for
            your website, SEO, payment, or support needs.
          </p>
          <a
            href="https://wa.me/+2348126575582"
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-BrandGold px-7 text-base font-black text-white transition-all hover:bg-BrandGold/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.28)] focus:outline-none focus:ring-4 focus:ring-BrandGold/25 sm:w-auto"
          >
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
