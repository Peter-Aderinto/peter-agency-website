import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaArrow from "../components/CtaArrow";
import { RevealObserver } from "../components/CroInteractions";
import { getSelectedRegionConfig } from "@/lib/selected-region";
import type { RegionKey } from "@/lib/regions";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected EMPIRE e-commerce systems designed to improve conversion, basket value, and purchase confidence.",
};

const work = [
  {
    type: "BAM · BUNDLE BUILDER",
    title: "A build-your-box journey that makes a higher-value order feel simple.",
    description: "Bundle size, product selection, savings, and delivery frequency are organised into three clear decisions so shoppers always know what to do next.",
    result: "Bundle completion & AOV",
    image: "/bam.png",
    alt: "BAM build-your-box interface with bundle size, product selection, and subscription frequency controls",
    position: "center top",
  },
  {
    type: "BAM · MOBILE GROWTH",
    title: "A mobile-first buying flow built around clearer conversion visibility.",
    description: "The bundle experience stays easy to navigate one-handed while the commercial signals behind revenue and checkout performance remain measurable.",
    result: "Mobile conversion rate",
    image: "/case-study-sales-growth.png",
    alt: "Mobile BAM shopping experience with revenue and conversion analytics",
    position: "center 42%",
  },
  {
    type: "FIRST-PURCHASE CAPTURE",
    title: "A timely first-order offer that turns browsing traffic into an owned audience.",
    description: "The incentive appears at the moment of interest, with one message, one input, and one action—making email capture feel useful instead of disruptive.",
    result: "Lead capture rate",
    image: "/imanigifts-d.png",
    alt: "Gift store interface with a first-order email incentive popup",
    position: "center center",
  },
  {
    type: "IMANI GIFTS · PRODUCT DISCOVERY",
    title: "Gift discovery designed to move shoppers from inspiration to purchase confidence.",
    description: "Clear merchandising, focused calls to action, and warm product storytelling help visitors understand the offer quickly and continue toward checkout.",
    result: "Product engagement",
    image: "/image3.png",
    alt: "Imani Gifts e-commerce experience presented across desktop and mobile screens",
    position: "center 38%",
  },
] as const;

export default async function PortfolioPage({ region }: { region?: RegionKey } = {}) {
  const market = await getSelectedRegionConfig(region);

  return (
    <main>
      <RevealObserver />
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <div className="reveal">
            <p className="section-kicker">SELECTED E-COMMERCE WORK · {market.countryName.toUpperCase()}</p>
            <h1>Commerce experiences built to make buying easier.</h1>
            <p className="inner-hero-copy">See how we turn real customer friction into clearer product journeys, stronger purchase confidence, and measurable growth opportunities.</p>
          </div>
          <aside className="inner-stat reveal delay-1">
            <span>DESIGN STANDARD</span>
            <strong>1:1</strong>
            <p>One commercial objective connected to every major interface decision.</p>
          </aside>
        </div>
      </section>

      <section className="section work-section">
        <div className="container">
          <div className="case-grid">
            {work.map((item, index) => (
              <article className={`case ${index === 0 || index === 3 ? "case-wide" : ""} reveal`} key={item.title}>
                <div className="case-copy">
                  <p>{item.type}</p>
                  <h3>{item.title}</h3>
                  <p className="case-description">{item.description}</p>
                  <span className="case-result">PRIMARY SIGNAL · {item.result}</span>
                </div>
                <div className="case-visual portfolio-case-visual">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={index === 0 || index === 3 ? "(max-width: 800px) 100vw, 61vw" : "(max-width: 800px) 100vw, 50vw"}
                    className="portfolio-case-image"
                    style={{ objectPosition: item.position }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section inner-cta">
        <div className="container">
          <div className="inner-cta-panel reveal">
            <p className="section-kicker">YOUR STORE, NEXT</p>
            <h2>Let&apos;s uncover the clearest opportunity in your buying journey.</h2>
            <p>Share your store and we will show you what to improve first, why it matters, and the most practical next step.</p>
            <Link className="btn btn-accent btn-xl" href="/free-audit">Get my free growth plan<CtaArrow /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
