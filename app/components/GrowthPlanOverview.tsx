import Link from "next/link";
import CtaArrow, { InlineArrow } from "./CtaArrow";

const included = [
  ["01", "Mobile buying journey", "We follow the path from landing page to checkout and flag the moments that feel confusing, hidden, or difficult to use."],
  ["02", "Page speed and stability", "We identify heavy assets, slow scripts, and layout problems that can make paid visitors leave before the page is ready."],
  ["03", "Product-page clarity", "We review how quickly shoppers can understand the product, price, value, options, and next action on a phone."],
  ["04", "Trust and reassurance", "We check whether reviews, guarantees, delivery information, and payment reassurance appear where buying decisions happen."],
  ["05", "Cart and checkout friction", "We look for unnecessary steps, surprise information, and weak mobile interactions that can interrupt a ready-to-buy customer."],
  ["06", "Priority action plan", "You receive a plain-English explanation of what to fix first, why it matters, and the practical next step."],
] as const;

export default function GrowthPlanOverview() {
  return (
    <section className="section growth-included-section" id="growth-plan">
      <div className="container">
        <header className="growth-section-heading reveal">
          <div><p className="section-kicker">FREE STORE GROWTH PLAN</p><h2>Know what to fix first—and why.</h2></div>
          <p>We review the parts of your store that directly affect whether a shopper keeps moving or gives up, then give you a clear list of priorities.</p>
        </header>
        <div className="growth-included-grid">{included.map(([number, title, body], index) => <article className={`growth-included-card reveal delay-${Math.min(index % 3, 2)}`} key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="growth-overview-actions reveal"><Link className="btn btn-accent btn-xl" href="/free-audit#audit-request-form">Get My Free Growth Plan<CtaArrow /></Link><Link className="text-link" href="/growth-plan">See How It Works<InlineArrow /></Link></div>
      </div>
    </section>
  );
}
