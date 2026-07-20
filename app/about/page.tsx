import type { Metadata } from "next";
import InteriorPage from "../components/InteriorPage";
import { getSelectedRegionConfig } from "@/lib/selected-region";

export const metadata: Metadata = { title: "About", description: "Meet the conversion architecture studio behind EMPIRE." };

export default async function AboutPage() {
  const region = await getSelectedRegionConfig();
  return <InteriorPage eyebrow="ABOUT EMPIRE" market={region.countryName} title="Commercial thinking, expressed through design and code." intro={`EMPIRE is a conversion architecture studio helping ${region.audienceName} turn paid attention into clear, fast, trustworthy buying experiences.`} stat="100+" statLabel="SYSTEMS SHIPPED" statBody="Across commerce, service, education, and product-led brands in multiple markets." cards={[
    { eyebrow: "STRATEGY", title: "We start with the commercial problem.", body: "Before layouts, we map traffic intent, offer clarity, objection patterns, product logic, and the decision sequence customers need.", points: ["Research before interface", "One accountable commercial hypothesis", "Market-aware message framing"] },
    { eyebrow: "DESIGN", title: "Every visual choice has a job.", body: "Hierarchy, rhythm, proof, interaction, and motion are used to reduce uncertainty and guide the next profitable action.", points: ["Mobile-first decision paths", "Trust sequenced near doubt", "Premium without visual noise"] },
    { eyebrow: "ENGINEERING", title: "The experience stays fast under pressure.", body: "Clean implementation protects the strategy across devices, traffic spikes, content changes, and the integrations revenue teams rely on.", points: ["Next.js and Shopify expertise", "Performance-led delivery", "Analytics-ready foundations"] },
  ]} manifestoTitle="We build systems, not decoration." manifesto={["A polished screen is useful only when it clarifies the offer, earns trust, and makes the next action feel natural.", "That is why strategy, interface design, development, and CRO are treated as one connected discipline—not separate handoffs.", `For ${region.audienceName}, that also means respecting local buying context while building to an international standard.`]} />;
}
