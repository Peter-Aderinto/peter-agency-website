import type { Metadata } from "next";
import Link from "next/link";
import ConversionProcess from "../components/ConversionProcess";
import { RevealObserver } from "../components/CroInteractions";
import { getSelectedRegionConfig } from "@/lib/selected-region";

export const metadata: Metadata = {
  title: "How We Work",
  description: "A simple three-step process for finding conversion problems, improving the buying experience, and building a faster ecommerce store.",
};

export default async function MethodPage() {
  const region = await getSelectedRegionConfig();

  return (
    <main>
      <RevealObserver />
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <div className="reveal">
            <p className="section-kicker">HOW EMPIRE WORKS · {region.countryName.toUpperCase()}</p>
            <h1>A better store should make buying feel easy.</h1>
            <p className="inner-hero-copy">We find what is costing you sales, redesign the moments that make shoppers hesitate, and build a faster path to checkout.</p>
            <div className="method-hero-actions"><Link className="btn btn-accent btn-large" href="/free-audit#audit-request-form">Get a Free Store Audit</Link><Link className="btn btn-ghost btn-large" href="/portfolio">See Our Work</Link></div>
          </div>
          <aside className="inner-stat reveal delay-1"><span>THE BEST PLACE TO START</span><strong>Free</strong><p>Send us your store link. We will identify the clearest conversion opportunity and explain what to do next.</p></aside>
        </div>
      </section>
      <ConversionProcess />
      <section className="section inner-cta"><div className="container"><div className="inner-cta-panel reveal"><p className="section-kicker">START WITH CLARITY</p><h2>Not sure what your store needs?</h2><p>Send us your store and we will show you the first improvement we would make—and why it matters for sales.</p><Link className="btn btn-accent btn-xl" href="/free-audit#audit-request-form">Get Your Free Store Audit</Link></div></div></section>
    </main>
  );
}
