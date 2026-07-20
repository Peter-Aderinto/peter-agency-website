import type { Metadata } from "next";
import { AuditPortal, RevealObserver } from "../components/CroInteractions";
import { getSelectedRegionConfig } from "@/lib/selected-region";

export const metadata: Metadata = { title: "Free Conversion Audit", description: "Request a focused EMPIRE layout and revenue-leak diagnostic." };

export default async function FreeAuditPage() {
  const region = await getSelectedRegionConfig();
  return <main><RevealObserver /><section className="inner-hero"><div className="container inner-hero-grid"><div className="reveal"><p className="section-kicker">PROOF BEFORE COMMITMENT · {region.countryName.toUpperCase()}</p><h1>Give us one page. We’ll show you the highest-leverage opportunity.</h1><p className="inner-hero-copy">Submit one underperforming layout, product page, cart, or funnel. We will review its decision path and respond with a focused commercial diagnosis.</p></div><aside className="inner-stat reveal delay-1"><span>THE AUDIT PROMISE</span><strong>Free</strong><p>One focused layout, commercial rationale included, and no contract required.</p></aside></div></section><section className="section audit-cta-section"><div className="container"><div className="audit-cta"><div className="audit-copy reveal"><p className="section-kicker">WHAT WE LOOK FOR</p><h2>The moment intent turns into hesitation.</h2><p>We look at entry-message continuity, hierarchy, offer clarity, trust placement, mobile action access, performance, and checkout reassurance.</p><div className="audit-assurances"><span><i>01</i> Decision-path review</span><span><i>02</i> Priority leak identified</span><span><i>03</i> Practical next step</span></div></div><AuditPortal market={region.countryName} /></div></div></section></main>;
}
