import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealObserver } from "../components/CroInteractions";
import GrowthPlanOverview from "../components/GrowthPlanOverview";
import { getSelectedRegionConfig } from "@/lib/selected-region";

export const metadata: Metadata = {
  title: "Free Store Growth Plan",
  description: "Get a clear, practical review of the mobile, product-page, trust, speed, and checkout issues holding back your ecommerce store.",
};

const faqs = [
  ["What do you need from me?", "Your store URL, a little context about what is underperforming, and the best email address for our response."],
  ["Is the Store Growth Plan really free?", "Yes. The initial review is free and does not require a contract or purchase."],
  ["How long does the review take?", "Our typical response window is within two business days after receiving the information we need."],
  ["Will you only review Shopify stores?", "Shopify is a core focus, but we can also review ecommerce experiences built on other major platforms."],
  ["What happens after I receive the plan?", "You can use the priorities yourself, share them with your team, or ask EMPIRE to scope and implement the recommended improvements."],
  ["Do I need analytics or technical knowledge?", "No. Analytics can add context, but they are not required. We explain the findings in clear commercial language."],
] as const;

export default async function GrowthPlanPage() {
  const region = await getSelectedRegionConfig();

  return (
    <main>
      <RevealObserver />

      <section className="growth-plan-hero">
        <div className="container growth-plan-hero-grid">
          <div className="growth-plan-hero-copy reveal">
            <p className="section-kicker">FREE STORE GROWTH PLAN · {region.countryName.toUpperCase()}</p>
            <h1>A clear plan to turn more store visitors into customers.</h1>
            <p>Send us your store. We will review the moments that matter most on mobile and show you what to improve first—without jargon, guesswork, or pressure.</p>
            <div className="growth-plan-actions"><Link className="btn btn-accent btn-xl" href="/free-audit#audit-request-form">Get My Free Growth Plan</Link><Link className="btn btn-ghost btn-xl" href="/portfolio">See Our Work</Link></div>
            <div className="growth-plan-assurances"><span>✓ Mobile-first review</span><span>✓ Plain-English priorities</span><span>✓ No obligation</span></div>
          </div>

          <div className="growth-plan-preview reveal delay-1">
            <Image src="/case-study-sales-growth.png" alt="Mobile commerce analytics showing store revenue and conversion performance" fill priority sizes="(min-width: 1050px) 45vw, 92vw" />
            <div className="growth-plan-preview-card"><span>YOUR FREE REVIEW</span><strong>Six sales-critical checks</strong><p>One clear list of what to fix first.</p></div>
          </div>
        </div>
      </section>

      <section className="growth-plan-promise"><div className="container reveal"><p>Before we recommend a redesign, we show you what is actually getting in the way.</p><div><span>Store experience</span><span>Mobile usability</span><span>Purchase confidence</span></div></div></section>

      <GrowthPlanOverview />

      <section className="section growth-process-section">
        <div className="container growth-process-grid">
          <div className="growth-process-intro reveal"><p className="section-kicker">SIMPLE FROM START TO FINISH</p><h2>Three steps. One useful next move.</h2><p>You do not need to prepare a strategy document or understand conversion terminology. We guide the process.</p></div>
          <ol className="growth-process-list reveal delay-1">
            <li><span>01</span><div><h3>Share your store</h3><p>Complete the short form with your URL and tell us what feels underwhelming.</p></div></li>
            <li><span>02</span><div><h3>We review the buying experience</h3><p>We inspect the key mobile moments from first impression through cart and checkout.</p></div></li>
            <li><span>03</span><div><h3>You receive clear priorities</h3><p>We explain the biggest opportunity, why it matters, and what should happen next.</p></div></li>
          </ol>
        </div>
        <div className="container growth-trust-row reveal"><div><span>Typical response</span><strong>Within 2 business days</strong></div><div><span>Commitment required</span><strong>None</strong></div><div><span>Technical knowledge</span><strong>Not needed</strong></div></div>
      </section>

      <section className="section growth-fit-section">
        <div className="container growth-fit-grid">
          <div className="reveal"><p className="section-kicker">IS THIS FOR YOUR STORE?</p><h2>This plan is useful when traffic is arriving—but sales are not following.</h2><p>It is designed to give growing ecommerce brands a practical starting point, whether the store needs a focused improvement or a larger redesign.</p></div>
          <ul className="reveal delay-1"><li>Your ads generate visits, but too few orders</li><li>Mobile shoppers view products but rarely add to cart</li><li>Your store feels dated, slow, or difficult to navigate</li><li>Customers abandon carts before completing checkout</li><li>You are unsure which improvement deserves priority</li></ul>
        </div>
      </section>

      <section className="section growth-faq-section">
        <div className="container growth-faq-grid">
          <div className="growth-faq-intro reveal"><p className="section-kicker">COMMON QUESTIONS</p><h2>Everything you need to know before sending your store.</h2><p>If your question is not answered here, email <a href="mailto:peter@theempiregrowth.com">peter@theempiregrowth.com</a>.</p></div>
          <div className="growth-faq-list reveal delay-1">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="section growth-plan-cta"><div className="container"><div className="inner-cta-panel reveal"><p className="section-kicker">YOUR CLEAREST NEXT STEP</p><h2>Let&apos;s find the first change your store needs.</h2><p>Send us your store and receive a focused, practical review with no contract required.</p><Link className="btn btn-accent btn-xl" href="/free-audit#audit-request-form">Get My Free Growth Plan</Link></div></div></section>
    </main>
  );
}
