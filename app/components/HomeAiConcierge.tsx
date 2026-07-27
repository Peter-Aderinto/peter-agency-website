import Link from "next/link";
import CtaArrow from "./CtaArrow";
import styles from "../ecommerce-growth/page.module.css";

const capabilities = [
  ["Answers product questions instantly", "Materials, sizes, stock, delivery time, care instructions, compatibility, and product differences."],
  ["Recommends the right product", "Guides uncertain shoppers toward relevant products, bundles, and higher-value alternatives."],
  ["Handles repetitive support", "Order tracking, returns, exchanges, delivery questions, and policy clarification without adding headcount."],
  ["Escalates when a human is needed", "Complex cases are summarized and routed with context, so your team does not start from zero."],
] as const;

export default function HomeAiConcierge() {
  return (
    <section className={styles.homeConcierge} aria-labelledby="home-ai-concierge-title">
      <div className={styles.container}>
        <div className={`${styles.deepDive} ${styles.homeDeepDive}`}>
          <div className="reveal">
            <p className={styles.pill}>AI Store Concierge</p>
            <h2 id="home-ai-concierge-title">Give every visitor a trained sales assistant the moment they need one.</h2>
            <p className={styles.sectionCopy}>This is not a generic FAQ bubble. Your AI agent is trained around your products, policies, tone of voice, shipping rules, promotions, and customer journey.</p>
            <div className={styles.capabilityList}>
              {capabilities.map(([title, copy], index) => (
                <div key={title}>
                  <span>{index + 1}</span>
                  <p><strong>{title}</strong><small>{copy}</small></p>
                </div>
              ))}
            </div>
            <div className={styles.homeLearnMore}>
              <Link className="btn btn-accent btn-xl" href="/ecommerce-growth">Learn More<CtaArrow /></Link>
            </div>
          </div>

          <div className={`${styles.liveDemo} reveal delay-1`}>
            <div className={styles.demoHeader}>
              <span className={styles.empireAvatar}>E</span>
              <p><strong>Empire AI Concierge</strong><small>● Active on product page</small></p>
              <i>Live demo</i>
            </div>
            <div className={styles.demoMessages}>
              <p className={styles.customerMessage}>I need a bag for a 15-inch laptop, but I do not want anything too bulky.</p>
              <p className={styles.agentMessage}>The Atlas Carryall is your best fit. It has a padded 15-inch sleeve, weighs under 1kg, and keeps a slim profile.</p>
              <div className={styles.productChoices}>
                <article><i /><strong>Atlas Carryall</strong><small>Best protection · slim profile</small></article>
                <article><i /><strong>Metro Tote</strong><small>Lighter · less padding</small></article>
              </div>
              <div className={styles.agentMessage}>
                I can reserve the Atlas in black and apply your welcome discount now.
                <div className={styles.demoButtons}><button type="button">Add to cart</button><button type="button">Compare colours</button></div>
              </div>
            </div>
            <div className={styles.demoStats}>
              <div><strong>24/7</strong><small>Coverage</small></div>
              <div><strong>&lt;2s</strong><small>Response</small></div>
              <div><strong>1:1</strong><small>Guidance</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
