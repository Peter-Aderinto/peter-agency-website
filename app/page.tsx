import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CalendlyButton from "./components/CalendlyButton";
import CtaArrow, { InlineArrow } from "./components/CtaArrow";
import ConversionProcess from "./components/ConversionProcess";
import HomeAiConcierge from "./components/HomeAiConcierge";
import { AuditPortal, CroFaq, RevealObserver } from "./components/CroInteractions";
import { getSelectedRegion } from "@/lib/selected-region";
import { getRegionConfig, type RegionKey } from "@/lib/regions";

type HomeProps = { region?: RegionKey };

export async function generateMetadata(): Promise<Metadata> {
  const region = getRegionConfig(await getSelectedRegion());
  return { title: region.seoTitle, description: `Conversion-focused Shopify stores, funnels, and websites engineered for ${region.audienceName}.` };
}

export default async function Home({ region }: HomeProps = {}) {
  const selectedRegion = await getSelectedRegion(region);
  const market = getRegionConfig(selectedRegion);
  const local = selectedRegion !== "global";

  return (
    <main id="top">
      <RevealObserver />
      <section className="hero section">
        <div className="orb orb-one" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-dot" /> E-COMMERCE GROWTH ARCHITECTURE</p>
            <h1>We Build Shopify Stores &amp; Funnels Engineered to Convert {local ? `${market.countryName} Traffic` : "Traffic"} into Revenue.</h1>
            <p className="hero-lede">Every page is built around user psychology, speed, trust, and the exact decision path that moves a visitor from “just browsing” to checkout—localized for {market.audienceName}.</p>
            <div className="hero-actions"><CalendlyButton className="btn-large" /><Link className="btn btn-ghost btn-large" href="/portfolio">See Conversion Work<CtaArrow /></Link></div>
            <div className="hero-proof"><div><strong>100+</strong><span>Projects shipped</span></div><div><strong>4.9/5</strong><span>Client satisfaction</span></div><div><strong>{market.countryName}</strong><span>Market-aware delivery</span></div></div>
          </div>

          <div className="device-stage hero-image-stage reveal delay-1">
            <div className="hero-replacement-image">
              <Image
                src="/hero-fashion-phones.png"
                alt="Two mobile phones displaying a fashion shopping homepage and a light brown jacket product page"
                width={1254}
                height={1254}
                priority
                sizes="(min-width: 1050px) 48vw, 94vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip ecosystem-strip" aria-label="Technology ecosystem">
        <p>Built across the modern commerce ecosystem</p>
        <div className="ecosystem-marquee">
          <div className="ecosystem-track">
            <div className="ecosystem-brands">
              <span>Shopify</span><span>Wix</span><span>Square Space</span><span>Ecwid</span><span>WooCommerce</span><span>GoDaddy</span><span>and more…</span>
            </div>
            <div className="ecosystem-brands" aria-hidden="true">
              <span>Shopify</span><span>Wix</span><span>Square Space</span><span>Ecwid</span><span>WooCommerce</span><span>GoDaddy</span><span>and more…</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section pain-section" id="method"><div className="container pain-grid"><div className="section-kicker reveal">THE COST OF A LEAKY STORE · {market.countryName.toUpperCase()}</div><div className="pain-copy reveal"><h2>You’re spending a fortune on traffic. <em>For what?</em></h2><div className="pain-columns"><p>More ad spend can create more sessions. But sessions are not revenue. When product discovery is confusing, trust signals arrive too late, and checkout creates friction, every paid click becomes more expensive than it needs to be.</p><p>Scaling traffic before fixing conversion mechanics is not growth. It is simply increasing the speed at which cash leaves your account.</p></div><div className="math-callout"><span className="math-label">THE COMPOUNDING GAP</span><div className="math-line"><strong>1%</strong><span>less checkout friction can preserve a disproportionate amount of revenue as traffic, AOV, and repeat purchases scale.</span></div><p>The smallest interface decisions become financial decisions at volume: where the CTA sits, how bundles are explained, whether mobile customers can reach checkout with one hand, and how quickly the page earns trust.</p></div></div></div></section>

      <ConversionProcess />

      <HomeAiConcierge />

      <section className="section work-section" id="work"><div className="container"><div className="section-heading split-heading reveal"><div><p className="section-kicker">SELECTED CONVERSION SYSTEMS</p><h2>Work framed by revenue logic.</h2></div><p>Each build starts with a commercial hypothesis: where customers hesitate, what they need next, and how the interface can remove the gap.</p></div><div className="case-grid">
        <article className="case case-wide reveal"><div className="case-copy"><p>E-COMMERCE PREVIEW</p><h3>Engineered with a sticky mobile cart layout to maximize AOV.</h3><Link href="/portfolio">Explore the work <InlineArrow /></Link></div><div className="case-visual case-sales-visual"><Image src="/case-study-sales-growth.png" alt="Shopify sales dashboard displayed on a mobile phone with revenue and conversion analytics" fill sizes="(min-width: 1050px) 58vw, 100vw" className="case-sales-image" /></div></article>
        <article className="case reveal"><div className="case-copy"><p>FUNNEL BUILD</p><h3>Custom bundle-box layout built for seamless multi-currency user retention.</h3><Link href="/portfolio">Explore the work <InlineArrow /></Link></div><div className="case-visual case-project-shot"><Image src="/case-bam-bundle-builder.png" alt="Bam ecommerce bundle builder with product selection and subscription controls" fill sizes="(min-width: 1050px) 48vw, 100vw" className="case-project-image" /></div></article>
        <article className="case reveal delay-1"><div className="case-copy"><p>PRODUCT DISCOVERY</p><h3>Category navigation rebuilt to reduce choice overload and speed up purchase decisions.</h3><Link href="/portfolio">Explore the work <InlineArrow /></Link></div><div className="case-visual case-project-shot"><Image src="/case-bammies-product-page.png" alt="Bammies open diapers monthly subscription product page" fill sizes="(min-width: 1050px) 48vw, 100vw" className="case-project-image" /></div></article>
        <article className="case case-wide reveal"><div className="case-copy"><p>CHECKOUT OPTIMIZATION</p><h3>Rebuilt reassurance hierarchy to reduce abandonment at the highest-intent moment.</h3><Link href="/portfolio">Explore the work <InlineArrow /></Link></div><div className="case-visual checkout-sales-visual"><Image src="/checkout-sales-notifications.png" alt="Shopify order notifications over a mobile ecommerce storefront held in hand" fill sizes="(min-width: 1050px) 58vw, 100vw" className="checkout-sales-image" /></div></article>
      </div><div className="work-more reveal"><Link className="btn btn-ghost btn-large" href="/portfolio">View the full portfolio<CtaArrow /></Link></div></div></section>

      <section className="section proof-section"><div className="container"><div className="section-heading split-heading reveal"><div><p className="section-kicker">INTERNATIONAL DELIVERY PROOF</p><h2>Validated Operational Performance.</h2></div><p>Trust is built through disciplined scope control, technical precision, and dependable communication across markets and time zones.</p></div><div className="review-grid">
        {[["FR", "Filippa R.", "Brand Director · United Kingdom", "The scope was managed with complete clarity from discovery through handoff. Every revision connected back to the commercial objective."], ["AM", "Adrien M.", "E-commerce Manager · France", "Their engineering precision stood out immediately. The mobile experience became faster, cleaner, and much easier to navigate."], ["KO", "Kene O.", "Growth Lead · Canada", "The timeline was respected, communication stayed proactive, and the final build felt considered at every breakpoint."]].map(([mark, name, role, quote], index) => <article className={`review-card reveal delay-${Math.min(index, 2)}`} key={name}><div className="review-top"><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><span className="review-index">0{index + 1}</span></div><blockquote>“{quote}”</blockquote><div className="review-profile"><div className="profile-mark">{mark}</div><div><strong>{name}</strong><span>{role}</span></div></div><div className="retention-badge"><i /> Verified Client Retention</div></article>)}
      </div><p className="review-disclaimer">Review names and roles are presentation placeholders from the supplied concept. Replace them with authenticated client reviews before publishing.</p></div></section>

      <section className="section free-redesign audit-cta-section" id="free-redesign"><div className="container"><div className="audit-cta reveal"><div className="audit-copy"><p className="section-kicker">PROOF BEFORE COMMITMENT · {market.countryName.toUpperCase()}</p><h2>Before you hire EMPIRE, let us prove the architecture.</h2><p>Give us one underperforming section or product layout. We will re-engineer it around conversion efficiency and explain the commercial rationale—free, with no contract.</p><div className="audit-assurances"><span><i>01</i> One focused layout</span><span><i>02</i> Commercial rationale included</span><span><i>03</i> No contract required</span></div></div><AuditPortal market={market.countryName} /></div></div></section>

      <section className="section faq-section" id="faq"><div className="container faq-grid"><div className="faq-intro reveal"><p className="section-kicker">ANSWERS BEFORE WE BUILD</p><h2>Strategy first.<br />Clarity always.</h2><p>Everything is scoped around the commercial problem—not a generic page count.</p><Link className="text-link" href="/faq">Browse every answer<InlineArrow /></Link></div><CroFaq compact /></div></section>
    </main>
  );
}
