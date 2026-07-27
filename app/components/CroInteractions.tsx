"use client";

import type { FormEvent } from "react";
import { useEffect, useId, useState } from "react";
import CtaArrow from "./CtaArrow";

const leakData = [
  {
    label: "STAGE 01 · FIRST IMPRESSION",
    node: "Slow mobile load",
    problemTitle: "Slow Loading & Glitchy Layouts",
    problemCopy:
      "If your store takes more than 3 seconds to load on a mobile phone, half of your paid ad traffic clicks away before they even see your product. Every split-second delay is literally burning your ad budget.",
    solutionTitle:
      "Lightweight Code & Lightning-Fast Asset Delivery",
    solutionCopy:
      "We strip out broken, heavy scripts and optimize code layouts so your store loads instantly. We ensure a seamless transition from a cold ad click straight into a beautiful page display.",
    signal: "Page Load Speed",
    outcome: "Zero Wasted Ad Clicks",
  },
  {
    label: "STAGE 02 · PRODUCT PAGE",
    node: "Buried buying action",
    problemTitle: "Confusing Content & Buried 'Add to Cart' Buttons",
    problemCopy:
      "Visitors arrive on your product page but get overwhelmed by a messy design. If they have to scroll endlessly on their phones just to find the price, the product details, or the checkout button, they leave out of frustration.",
    solutionTitle:
      "High-Converting Visual Hierarchy & High-Impact UI",
    solutionCopy:
      "We redesign your product page layouts based on strict consumer psychology. We place pricing, social proof, and sticky mobile action buttons right where the eye naturally lands, guiding them smoothly toward buying.",
    signal: "Add-To-Cart Rate",
    outcome: "More Active Buyers",
  },
  {
    label: "STAGE 03 · CHECKOUT",
    node: "Checkout friction",
    problemTitle: "Hidden Fees & Complex Checkout Fields",
    problemCopy:
      "This is the ultimate drop-off point. If your cart or checkout page forces users to fill out endless forms, lacks clear trust seals, or doesn’t clearly show shipping costs, they will abandon their full carts at the very last second.",
    solutionTitle:
      "Frictionless Slide Carts & 1-Click Checkout Sequences",
    solutionCopy:
      "We implement custom slide-out carts equipped with built-in upsells, trust badges, and lightning-fast checkout integrations. We turn a multi-step chore into an effortless 1-click purchase experience.",
    signal: "Cart Abandonment Drop",
    outcome: "Maximum Completed Revenue",
  },
] as const;

export function RevealObserver() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}

export function LeakExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = leakData[activeIndex];

  function onTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const direction = ["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : -1;
    const next = (activeIndex + direction + leakData.length) % leakData.length;
    setActiveIndex(next);
    document.getElementById(`leak-tab-${next + 1}`)?.focus();
  }

  return (
    <div className="leak-explorer reveal">
      <div className="leak-tabs" role="tablist" aria-label="Revenue leak stages">
        {[
          ["The First Impression", "Loading speed, immediate clarity, reducing bounce rates"],
          ["Product Page Mechanics", "Visual priority, value proof, mobile action paths"],
          ["Cart & Checkout Sequence", "Trust factors, friction removal, completion momentum"],
        ].map(([title, detail], index) => (
          <button
            className={`leak-tab ${activeIndex === index ? "active" : ""}`}
            id={`leak-tab-${index + 1}`}
            key={title}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="leak-panel"
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={onTabKeyDown}
          >
            <span>0{index + 1}.</span>
            <strong>{title}</strong>
            <small>{detail}</small>
          </button>
        ))}
      </div>

      <article
        className="leak-panel"
        id="leak-panel"
        role="tabpanel"
        aria-live="polite"
        aria-labelledby={`leak-tab-${activeIndex + 1}`}
      >
        <div className="leak-panel-top">
          <span className="leak-stage-label">{data.label}</span>
          <span className="leak-status"><i /> Revenue risk detected</span>
        </div>
        <div className="leak-visual" aria-hidden="true">
          <div className="flow-node healthy">Paid click</div><div className="flow-line"><i /></div>
          <div className="flow-node warning">{data.node}</div><div className="flow-line broken"><i /></div>
          <div className="flow-node faded">Product interest</div>
        </div>
        <div className="leak-problem">
          <span>WHERE THE MONEY DROPS</span>
          <h3>{data.problemTitle}</h3><p>{data.problemCopy}</p>
        </div>
        <div className="leak-solution">
          <div className="solution-mark">E</div>
          <div><span>HOW EMPIRE FIXES IT</span><h4>{data.solutionTitle}</h4><p>{data.solutionCopy}</p></div>
        </div>
        <div className="leak-proof-row">
          <div><span>Primary signal</span><strong>{data.signal}</strong></div>
          <div><span>Commercial outcome</span><strong>{data.outcome}</strong></div>
        </div>
      </article>
    </div>
  );
}

const faqItems = [
  ["How can you boost my conversion rates?", "We increase conversion rates by identifying and removing friction in your Shopify store. Through UX improvements, CRO, store structure, messaging and performance optimization, we make it easier for customers to trust your brand, find what they need and complete their purchase."],
  ["How long does a project take?", "Focused landing pages and funnels typically take 1-2 weeks. Larger Shopify builds generally take 3-5 weeks depending on product volume, custom functionality, content readiness, and integrations."],
  ["Do you only work with Shopify?", "Not at all, we also build high-converting systems with Woocommerce, Ecwid, Squarespace, Wix, Next.js, and carefully selected stacks when the commercial requirements call for them."],
  ["How do you measure success?", "We align the project with measurable indicators such as conversion rate, revenue per visitor, average order value, checkout completion, page speed, lead quality, and funnel completion."],
  ["Can you improve an existing store instead of rebuilding it?", "Yes. Many projects begin as targeted conversion sprints: product page restructuring, mobile cart improvements, offer positioning, landing page redesign, or checkout reassurance architecture."],
  ["Is conversion lift guaranteed?", "No credible CRO partner can guarantee a fixed result before seeing your data. We build evidence-led hypotheses, improve the customer path, and create an analytics-ready foundation for testing and iteration."],
] as const;

export function CroFaq({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion reveal delay-1">
      {faqItems.slice(0, compact ? 4 : faqItems.length).map(([question, answer], index) => (
        <article className={`faq-item ${open === index ? "open" : ""}`} key={question}>
          <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
            <span>{question}</span><i>{open === index ? "−" : "+"}</i>
          </button>
          <div className="faq-answer"><p>{answer}</p></div>
        </article>
      ))}
    </div>
  );
}

export function AuditPortal({ market }: { market: string }) {
  const prefix = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("Your details stay private. We use them only to prepare the audit.");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const websiteUrl = String(form.get("websiteUrl") || "");
    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") || ""), email: String(form.get("email") || ""),
          businessName: String(form.get("businessName") || ""),
          websiteUrl, industry: String(form.get("industry") || "E-commerce"),
          competitors: "", goals: String(form.get("problem") || ""),
          context: `Requested from the ${market} CRO landing experience.`,
        }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to submit right now.");
      setStatus("success");
      setMessage("Request received. We’ll review the page and reply within two business days.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit right now.");
    }
  }

  return (
    <aside className="audit-portal" id="audit-request-form" aria-label="Free layout audit request">
      <div className="portal-header"><div><span>EMPIRE AUDIT DESK</span><strong>Start the diagnostic</strong></div><i className="portal-status" title="Currently accepting requests" /></div>
      <form className="audit-form" onSubmit={submit}>
        <label htmlFor={`${prefix}-name`}>Name<input id={`${prefix}-name`} name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label htmlFor={`${prefix}-business`}>Business name<input id={`${prefix}-business`} name="businessName" autoComplete="organization" placeholder="Your brand or company" required /></label>
        <label htmlFor={`${prefix}-email`}>Work email<input id={`${prefix}-email`} type="email" name="email" autoComplete="email" placeholder="you@brand.com" required /></label>
        <label htmlFor={`${prefix}-industry`}>Industry<input id={`${prefix}-industry`} name="industry" placeholder="Fashion, wellness, SaaS…" required /></label>
        <label htmlFor={`${prefix}-url`}>Store or product URL<input id={`${prefix}-url`} type="url" name="websiteUrl" placeholder="https://yourstore.com/product" pattern="https://.*" required /></label>
        <label htmlFor={`${prefix}-problem`}>What is underperforming?<textarea id={`${prefix}-problem`} name="problem" rows={4} placeholder="Product page, cart, hero section, bundle flow..." required /></label>
        <button className="btn btn-accent btn-xl" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request a Free Layout Audit"}<CtaArrow /></button>
        <p className={`form-note ${status}`}>{message}</p>
      </form>
      <div className="portal-footer"><span>Typical response window</span><strong>Within 2 business days</strong></div>
    </aside>
  );
}
