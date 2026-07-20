const processSteps = [
  {
    number: "01",
    label: "Find the problem",
    title: "We find where sales are slipping away.",
    copy: "We review your store on mobile, follow the full journey from first click to checkout, and identify the issue most likely to be costing you revenue.",
    points: ["Mobile store and speed review", "Product-page and cart diagnosis", "Prioritized action plan"],
    outcome: "You know exactly what to fix first.",
  },
  {
    number: "02",
    label: "Redesign the path",
    title: "We make buying feel easy.",
    copy: "We simplify the layout, make the next action obvious, and place your strongest proof exactly where shoppers need it before they buy.",
    points: ["Clear mobile calls to action", "Stronger product-page hierarchy", "Trust placed at decision points"],
    outcome: "You get a conversion-focused design ready to build.",
  },
  {
    number: "03",
    label: "Build and launch",
    title: "We launch a faster store built to sell.",
    copy: "Once the direction is approved, we build the experience, connect the tools your business needs, and test every important path before launch.",
    points: ["Fast, responsive development", "Shopify and tool integrations", "Quality checks and measurement"],
    outcome: "You leave with a polished store you can confidently scale.",
  },
] as const;

export default function ConversionProcess() {
  return (
    <section className="section conversion-process-section" aria-labelledby="conversion-process-title">
      <div className="container">
        <header className="conversion-process-heading reveal">
          <p className="section-kicker">A SIMPLE, RESULTS-FOCUSED PROCESS</p>
          <h2 id="conversion-process-title">How we turn more visitors into customers.</h2>
          <p>No vague consulting and no technical lecture. Just a clear diagnosis, a better buying experience, and a store built to perform.</p>
        </header>
        <div className="conversion-process-grid">
          {processSteps.map((step, index) => (
            <article className={`conversion-process-card reveal delay-${Math.min(index, 2)}`} key={step.number}>
              <div className="conversion-step-top"><span>{step.number}</span><p>{step.label}</p></div>
              <h3>{step.title}</h3>
              <p className="conversion-step-copy">{step.copy}</p>
              <ul>{step.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <div className="conversion-step-outcome"><span>WHAT YOU GET</span><strong>{step.outcome}</strong></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
