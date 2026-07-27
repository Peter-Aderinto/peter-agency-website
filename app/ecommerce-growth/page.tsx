import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Gauge,
  MessageCircle,
  Minus,
  Send,
  ShoppingBag,
} from "lucide-react";
import { getSelectedRegionConfig } from "@/lib/selected-region";
import CtaArrow from "../components/CtaArrow";
import styles from "./page.module.css";

const agentBenefits = [
  "Sub-2s response time",
  "Trained on your store catalogue and FAQs",
  "Zero missed sales opportunities",
];

const speedBenefits = [
  "Core Web Vitals optimization",
  "Cleaned script stack and image pipelines",
  "Built for high-traffic Shopify stores",
];

const revenueLeaks = [
  ["01", "Customer has a question", "Sizing, shipping, compatibility, returns, stock, or product comparison."],
  ["02", "No immediate answer", "They wait for email, search manually, or open a competitor in another tab."],
  ["03", "Momentum disappears", "Purchase intent fades while uncertainty and friction increase."],
  ["04", "The sale is lost silently", "No complaint. No support ticket. Just revenue that never reaches checkout."],
] as const;

const agentCapabilities = [
  ["Answers product questions instantly", "Materials, sizes, stock, delivery time, care instructions, compatibility, and product differences."],
  ["Recommends the right product", "Guides uncertain shoppers toward relevant products, bundles, and higher-value alternatives."],
  ["Handles repetitive support", "Order tracking, returns, exchanges, delivery questions, and policy clarification without adding headcount."],
  ["Escalates when a human is needed", "Complex cases are summarized and routed with context, so your team does not start from zero."],
] as const;

const useCases = [
  ["Product discovery", "Helps visitors find the right item based on need, budget, use case, size, style, or preference."],
  ["Objection handling", "Explains value, shipping, guarantees, returns, quality, and product differences before doubt causes an exit."],
  ["Upsell and cross-sell", "Suggests relevant bundles, complementary products, and higher-value alternatives naturally."],
  ["Cart recovery", "Re-engages hesitant shoppers with useful answers, urgency, reassurance, or approved incentives."],
  ["Order support", "Handles delivery windows, exchange guidance, tracking, and routine post-purchase requests."],
  ["Lead capture", "Collects qualified customer details and conversation context when a purchase cannot be completed immediately."],
] as const;

const speedWork = [
  ["Script and app cleanup", "Remove duplicate trackers, dead code, excessive app payloads, and render-blocking scripts."],
  ["Image pipeline optimization", "Compress, resize, lazy-load, and deliver product imagery efficiently without reducing visual quality."],
  ["Mobile-first performance", "Prioritize the devices and network conditions most likely to experience friction."],
  ["Core Vitals stability", "Improve loading, responsiveness, and visual stability across key store templates."],
] as const;

const implementation = [
  ["Audit", "Find friction and missed intent", "Review store speed, app stack, support workload, FAQs, product complexity, and the customer journey."],
  ["Build", "Train the AI and optimize assets", "Create the knowledge base, conversation rules, escalation logic, and performance improvement plan."],
  ["Deploy", "Launch safely on key pages", "Install, test, monitor, and validate across mobile, desktop, product, cart, and support flows."],
  ["Improve", "Refine using real conversations", "Use unanswered questions and shopper behavior to improve recommendations, content, and conversion paths."],
] as const;

const questions = [
  ["Will the AI give wrong answers?", "The agent is constrained to approved store information, policies, product data, and workflows. Sensitive or uncertain cases can be routed to a human instead of guessed."],
  ["Does it replace my support team?", "It removes repetitive volume and gives your team more time for complex, emotional, or high-value cases. The goal is leverage, not blind replacement."],
  ["Will optimization break my Shopify theme or apps?", "Changes are tested against your existing storefront, theme behavior, tracking, and critical app functions. The objective is a faster store without sacrificing required functionality."],
  ["How do we know what shoppers are asking?", "Conversation logs reveal recurring objections, product confusion, policy gaps, and buying signals. Those insights can improve product pages, FAQs, offers, and merchandising."],
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const market = await getSelectedRegionConfig();
  return {
    title: `E-commerce Growth Systems for ${market.countryName}`,
    description: `AI sales automation and Shopify performance optimization for ${market.audienceName}.`,
  };
}

function BenefitList({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.benefitList}>
      {items.map((item) => (
        <li key={item}><span><Check aria-hidden="true" /></span>{item}</li>
      ))}
    </ul>
  );
}

function ChatPreview() {
  return (
    <div className={styles.chatPreview}>
      <div className={styles.previewHeader}>
        <div className={styles.agentIdentity}>
          <span className={styles.agentAvatar}>AI<i /></span>
          <div><strong>Store Concierge</strong><small>Online · replies instantly</small></div>
        </div>
        <span className={styles.minimize}><Minus aria-hidden="true" /></span>
      </div>
      <div className={styles.messages}>
        <p className={styles.customerMessage}>Is the Atlas Carryall available in black?</p>
        <p className={styles.agentMessage}>Yes—black is in stock. I can also apply <strong>10% off</strong> if you checkout in the next 20 minutes.<br /><span>View Atlas Carryall →</span></p>
      </div>
      <div className={styles.chatInput}><span>Ask a product question...</span><i><Send aria-hidden="true" /></i></div>
    </div>
  );
}

function SpeedPreview() {
  return (
    <div className={styles.speedPreview}>
      <div className={styles.scoreTop}>
        <div><small>Mobile Performance</small><p><strong>99</strong><span>Speed Score</span></p></div>
        <div className={styles.scoreRing}><span>99</span></div>
      </div>
      <div className={styles.performanceBar}><span>Performance meter</span><strong>Excellent</strong><i><b /></i></div>
      <div className={styles.metricGrid}>
        <div><strong>0.8s</strong><span>LCP</span></div>
        <div><strong>0.02</strong><span>CLS</span></div>
        <div><strong>42ms</strong><span>INP</span></div>
      </div>
    </div>
  );
}

export default async function EcommerceGrowthPage() {
  const market = await getSelectedRegionConfig();

  return (
    <main className={styles.page}>
      <div className={styles.gridGlow} aria-hidden="true" />
      <section className={styles.hero}>
        <div className={styles.container}>
          <header className={styles.heroHeader}>
            <p className={styles.badge}><i /> Performance &amp; Automation Engine · {market.countryName}</p>
            <h1>Turn Silent Traffic into <span>Automated Revenue.</span></h1>
            <p>We deploy sub-second speed optimization and custom AI agents onto your Shopify store to handle support, close sales, and maximize retention 24/7.</p>
            <div className={styles.heroActions}>
              <Link className="btn btn-accent btn-xl" href="/free-audit#audit-request-form">Audit My Store<CtaArrow /></Link>
              <a className={styles.textLink} href="#growth-system">See the growth system <ArrowRight aria-hidden="true" /></a>
            </div>
          </header>

          <div className={styles.featureGrid} id="growth-system">
            <article className={styles.featureCard}>
              <div className={styles.cardTop}><span className={styles.icon}><MessageCircle aria-hidden="true" /></span><small>AI Revenue Layer</small></div>
              <h2>24/7 AI Sales &amp; Support Agents</h2>
              <p>Intelligent chatbots answer product questions, resolve tracking requests, recommend relevant items, and recover high-intent shoppers in real time.</p>
              <BenefitList items={agentBenefits} />
              <ChatPreview />
            </article>

            <article className={styles.featureCard}>
              <div className={styles.cardTop}><span className={styles.icon}><Gauge aria-hidden="true" /></span><small>Conversion Infrastructure</small></div>
              <h2>Sub-Second Speed &amp; Core Vitals Optimization</h2>
              <p>We remove script bloat, streamline assets, and rebuild critical loading paths to reduce bounce rates and improve mobile conversion performance.</p>
              <BenefitList items={speedBenefits} />
              <SpeedPreview />
            </article>
          </div>

          <section className={styles.centerSection}>
            <p className={styles.kicker}>The hidden cost of an unattended store</p>
            <h2>Your store does not need more traffic until it stops losing the traffic it already has.</h2>
            <p>Every unanswered question, delayed response, and slow-loading product page creates hesitation. Hesitation becomes abandonment. Our system removes that friction before it becomes lost revenue.</p>
            <div className={styles.leakGrid}>
              {revenueLeaks.map(([number, title, copy], index) => <article className={index === 3 ? styles.highlightCard : ""} key={number}><strong>{number}</strong><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </section>

          <section className={styles.deepDive}>
            <div>
              <p className={styles.pill}>AI Store Concierge</p>
              <h2>Give every visitor a trained sales assistant the moment they need one.</h2>
              <p className={styles.sectionCopy}>This is not a generic FAQ bubble. Your AI agent is trained around your products, policies, tone of voice, shipping rules, promotions, and customer journey.</p>
              <div className={styles.capabilityList}>
                {agentCapabilities.map(([title, copy], index) => <div key={title}><span>{index + 1}</span><p><strong>{title}</strong><small>{copy}</small></p></div>)}
              </div>
            </div>
            <div className={styles.liveDemo}>
              <div className={styles.demoHeader}><span className={styles.empireAvatar}>E</span><p><strong>Empire AI Concierge</strong><small>● Active on product page</small></p><i>Live demo</i></div>
              <div className={styles.demoMessages}>
                <p className={styles.customerMessage}>I need a bag for a 15-inch laptop, but I do not want anything too bulky.</p>
                <p className={styles.agentMessage}>The Atlas Carryall is your best fit. It has a padded 15-inch sleeve, weighs under 1kg, and keeps a slim profile.</p>
                <div className={styles.productChoices}><article><i /><strong>Atlas Carryall</strong><small>Best protection · slim profile</small></article><article><i /><strong>Metro Tote</strong><small>Lighter · less padding</small></article></div>
                <div className={styles.agentMessage}>I can reserve the Atlas in black and apply your welcome discount now.<div className={styles.demoButtons}><button type="button">Add to cart</button><button type="button">Compare colours</button></div></div>
              </div>
              <div className={styles.demoStats}><div><strong>24/7</strong><small>Coverage</small></div><div><strong>&lt;2s</strong><small>Response</small></div><div><strong>1:1</strong><small>Guidance</small></div></div>
            </div>
          </section>

          <section className={styles.useCaseSection}>
            <p className={styles.kicker}>One agent, multiple revenue jobs</p>
            <h2>What the AI handles across the customer journey</h2>
            <div className={styles.useCaseGrid}>{useCases.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          </section>

          <section className={styles.speedSection}>
            <div className={styles.comparisonCard}>
              <div className={styles.comparisonHeader}><p><small>Mobile page journey</small><strong>Before vs. optimized</strong></p><span>Live comparison</span></div>
              <div className={styles.timeline}><div><p><span>Unoptimized store</span><strong>4.8s</strong></p><i className={styles.slowBar} /></div><div><p><span>Optimized store</span><strong>0.9s</strong></p><i className={styles.fastBar} /></div></div>
              <div className={styles.vitals}><div><strong>Fast LCP</strong><small>Main content loads quickly</small></div><div><strong>Low CLS</strong><small>No jumping layout</small></div><div><strong>Low INP</strong><small>Instant interaction</small></div><div><strong>Lean JS</strong><small>Less script blocking</small></div></div>
            </div>
            <div>
              <p className={styles.pill}>Store speed system</p>
              <h2>A slow store taxes every campaign, every click, and every product page.</h2>
              <p className={styles.sectionCopy}>Paid ads cannot convert shoppers who leave before the page becomes usable. We optimize the technical path between the click and checkout so your marketing budget is not spent loading scripts.</p>
              <div className={styles.speedWork}>{speedWork.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
            </div>
          </section>

          <section className={styles.combinedSystem}>
            <p className={styles.kicker}>Why the systems work better together</p>
            <h2>Speed gets the visitor into the store. AI helps the visitor complete the decision.</h2>
            <p>One system removes technical friction. The other removes uncertainty. Together they protect more of the revenue already entering your website.</p>
            <div className={styles.systemSteps}><article><small>Step 1</small><strong>Fast landing</strong><p>The product page loads quickly and feels stable.</p></article><ArrowRight aria-hidden="true" /><article><small>Step 2</small><strong>Instant guidance</strong><p>The AI answers questions and recommends the right product.</p></article><ArrowRight aria-hidden="true" /><article><small>Step 3</small><strong>Confident checkout</strong><p>Less hesitation, fewer exits, and a cleaner purchase path.</p></article></div>
          </section>

          <section className={styles.implementation}>
            <div className={styles.sectionHeading}><p className={styles.kicker}>Implementation</p><h2>Built around your store, not dropped in as a generic widget.</h2></div>
            <div className={styles.implementationGrid}>{implementation.map(([phase, title, copy], index) => <article key={phase}><span>{String(index + 1).padStart(2, "0")} — {phase}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          </section>

          <section className={styles.faqSection}>
            <div className={styles.sectionHeading}><p className={styles.kicker}>Common questions</p><h2>What business owners usually want to know</h2></div>
            <div className={styles.faqList}>{questions.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
          </section>

          <section className={styles.cta}>
            <ShoppingBag aria-hidden="true" />
            <p className={styles.kicker}>Revenue Systems Audit · {market.countryName}</p>
            <h2>Ready to automate customer support and speed up your store?</h2>
            <p>Find out where slow performance, missed conversations, and poor automation are costing your business revenue.</p>
            <Link className="btn btn-accent btn-xl" href="/free-audit#audit-request-form">Audit My Store Performance<CtaArrow /></Link>
          </section>
        </div>
      </section>
    </main>
  );
}
