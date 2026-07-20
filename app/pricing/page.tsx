import type { Metadata } from "next";
import InteriorPage from "../components/InteriorPage";
import { getSelectedRegion, getSelectedRegionConfig } from "@/lib/selected-region";

export const metadata: Metadata = { title: "Engagements", description: "EMPIRE conversion architecture engagement models." };

export default async function PricingPage() {
  const selected = await getSelectedRegion();
  const region = await getSelectedRegionConfig(selected);
  return <InteriorPage eyebrow="ENGAGEMENT MODELS" market={region.countryName} title="Scope follows the revenue problem." intro="We price the evidence, architecture, interface, engineering, and quality assurance required to solve a defined commercial constraint." stat={region.pricing.starter} statLabel={`STARTING POINT · ${region.currency}`} statBody="Indicative regional entry point. Final scope follows the audit and implementation requirements." cards={[
    { eyebrow: "FOCUSED SPRINT", title: "Fix one high-leverage moment.", body: "For a product page, landing page, cart, offer section, or conversion-critical flow that needs targeted intervention.", points: ["Focused audit", "Conversion architecture", "Responsive implementation"] },
    { eyebrow: "COMMERCE BUILD", title: "Rebuild the core buying system.", body: "For brands that need a cohesive Shopify storefront or funnel rather than a collection of disconnected page improvements.", points: ["Research and UX architecture", "Full responsive design", "Development and integration"] },
    { eyebrow: "OPTIMIZATION", title: "Improve through measured cycles.", body: "For active stores with enough traffic to prioritize, test, and iterate against reliable behavioral and revenue signals.", points: ["Measurement plan", "Prioritized experiment backlog", "Ongoing improvement cycles"] },
  ]} manifestoTitle="A smaller clear scope beats a larger vague one." manifesto={["Page counts are not a strategy. We define the commercial risk, the customer decision it affects, and the minimum coherent system required to improve it.", "That creates a proposal with fewer assumptions and a delivery process with clearer accountability.", `Regional pricing is displayed for ${region.countryName}, while scope and standards remain consistent across markets.`]} ctaTitle="Start with the audit, then price the right problem." />;
}
