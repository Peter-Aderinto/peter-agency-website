import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock3,
  CreditCard,
  FileSearch,
  Globe2,
  LockKeyhole,
  MapPinned,
  SearchCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import AuditForm from "./AuditForm";

export const metadata: Metadata = {
  title: "Free Performance Architecture Audit | Empire Design & Dev",
  description:
    "Request a free performance architecture audit covering conversion infrastructure, revenue leak detection, SEO, AEO readiness, and semantic search optimization.",
};

const trustItems = [
  { label: "No Credit Card Required", icon: CreditCard },
  { label: "24-Hour Turnaround", icon: Clock3 },
  { label: "Confidential Strategy", icon: LockKeyhole },
] as const;

const auditPillars = [
  {
    title: "SEO Intelligence",
    description:
      "Technical visibility checks, semantic search optimization, crawl clarity, and keyword opportunity mapping built around qualified demand.",
    icon: SearchCheck,
  },
  {
    title: "Infrastructure Review",
    description:
      "Performance architecture, mobile speed, trust signals, and conversion infrastructure checks that reveal friction before buyers feel it.",
    icon: Globe2,
  },
  {
    title: "Conversion Diagnostics",
    description:
      "Revenue leak detection across offers, calls to action, forms, and page flow so your traffic has a clearer path to enquiry.",
    icon: TrendingUp,
  },
  {
    title: "Competitor Gap Scan",
    description:
      "A direct comparison against market leaders to identify positioning gaps, content advantages, and trust signals worth owning.",
    icon: Target,
  },
  {
    title: "Local Market Fit",
    description:
      "Location-aware checks for Google Business signals, service-area relevance, local landing pages, and buyer intent by market.",
    icon: MapPinned,
  },
  {
    title: "AEO Readiness",
    description:
      "Answer engine optimization review for structured answers, entity clarity, FAQ intent, and GEO-friendly content architecture.",
    icon: FileSearch,
  },
] as const;

export default function FreeAuditPage() {
  return (
    <main className="min-h-screen bg-SoftCream font-sans text-SteelGrey">
      <header className="border-b border-SteelGrey/10 bg-SoftCream/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-12">
          <Link
            href="/"
            className="text-lg font-black uppercase tracking-[0.2em] text-SteelGrey transition-colors hover:text-BrandGold"
          >
            Empire
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-SteelGrey/15 bg-white px-4 text-sm font-black text-SteelGrey transition-colors hover:border-BrandGold hover:text-BrandGold focus:outline-none focus:ring-4 focus:ring-BrandGold/20"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <section className="px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-BrandGold">
            Free Strategic Diagnostic
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight text-SteelGrey sm:text-5xl lg:text-6xl">
            Get Your Free Performance Architecture Audit
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-SteelGrey/75 sm:text-lg">
            Find the conversion infrastructure gaps, revenue leak detection
            opportunities, SEO blockers, AEO readiness issues, and semantic
            search optimization wins holding back your next stage of growth.
          </p>

          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            {trustItems.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-SteelGrey/12 bg-white px-5 text-sm font-black text-SteelGrey shadow-sm"
              >
                <Icon className="size-4 text-BrandGold" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {auditPillars.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="min-h-64 rounded-lg border border-SteelGrey/20 bg-white p-7 shadow-[0_14px_38px_rgba(74,74,74,0.06)]"
              >
                <div className="flex size-12 items-center justify-center rounded-md border border-BrandGold/25 bg-BrandGold/10 text-BrandGold">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h2 className="mt-7 text-2xl font-black leading-tight text-SteelGrey">
                  {title}
                </h2>
                <p className="mt-4 text-base leading-8 text-SteelGrey/74">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-SoftCream px-6 pb-20 pt-4 sm:px-10 sm:pb-24 lg:px-12 lg:pb-28">
        <AuditForm />
      </section>

      <footer className="border-t border-SteelGrey/10 bg-white px-6 py-8 text-center sm:px-10 lg:px-12">
        <p className="mx-auto max-w-3xl text-sm font-medium leading-7 text-SteelGrey/70">
          How this works: submit the form today, and Empire Design &amp; Dev
          will review your website, competitors, conversion path, and search
          posture. Your free audit is prepared for delivery within 24 hours.
        </p>
      </footer>
    </main>
  );
}
