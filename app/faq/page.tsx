import type { Metadata } from "next";
import Link from "next/link";
import { CroFaq, RevealObserver } from "../components/CroInteractions";
import { getSelectedRegionConfig } from "@/lib/selected-region";

export const metadata: Metadata = { title: "FAQ", description: "Clear answers about EMPIRE strategy, timelines, platforms, measurement, and conversion work." };

export default async function FAQPage() {
  const region = await getSelectedRegionConfig();
  return <main><RevealObserver /><section className="inner-hero"><div className="container inner-hero-grid"><div className="reveal"><p className="section-kicker">ANSWERS BEFORE WE BUILD · {region.countryName.toUpperCase()}</p><h1>Strategy first. Clarity always.</h1><p className="inner-hero-copy">Everything is scoped around the commercial problem, the evidence available, and the change we can responsibly influence.</p></div><aside className="inner-stat reveal delay-1"><span>HOW WE SCOPE</span><strong>Why → What</strong><p>We define the reason for a page before defining its size, components, or production effort.</p></aside></div></section><section className="section faq-section"><div className="container faq-grid"><div className="faq-intro reveal"><p className="section-kicker">THE KNOWLEDGE BASE</p><h2>Confident decisions begin with direct answers.</h2><p>Need an answer specific to your stack or market? Send the context with your audit request.</p></div><CroFaq /></div></section><section className="section inner-cta"><div className="container"><div className="inner-cta-panel reveal"><p className="section-kicker">STILL UNCERTAIN?</p><h2>Show us the page and the problem.</h2><p>We will give you a focused, commercially grounded point of view.</p><Link className="btn btn-accent btn-xl" href="/free-audit">Start the diagnostic</Link></div></div></section></main>;
}
