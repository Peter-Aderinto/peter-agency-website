import Link from "next/link";
import { RevealObserver } from "./CroInteractions";

export type InteriorCard = { eyebrow: string; title: string; body: string; points?: readonly string[] };

export default function InteriorPage({
  eyebrow, title, intro, market, stat, statLabel, statBody, cards, manifestoTitle,
  manifesto, ctaTitle = "Ready to fix the path between attention and revenue?",
}: {
  eyebrow: string; title: string; intro: string; market: string; stat: string;
  statLabel: string; statBody: string; cards: readonly InteriorCard[];
  manifestoTitle: string; manifesto: readonly string[]; ctaTitle?: string;
}) {
  return (
    <main>
      <RevealObserver />
      <section className="inner-hero"><div className="container inner-hero-grid"><div className="reveal"><p className="section-kicker">{eyebrow} · {market.toUpperCase()}</p><h1>{title}</h1><p className="inner-hero-copy">{intro}</p></div><aside className="inner-stat reveal delay-1"><span>{statLabel}</span><strong>{stat}</strong><p>{statBody}</p></aside></div></section>
      <section className="section content-section"><div className="container content-grid">{cards.map((card, index) => <article className={`content-card reveal delay-${Math.min(index, 2)}`} key={card.title}><span className="card-number">0{index + 1} · {card.eyebrow}</span><h2>{card.title}</h2><p>{card.body}</p>{card.points ? <ul>{card.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}</article>)}</div></section>
      <section className="section manifesto"><div className="container manifesto-grid"><div className="reveal"><p className="section-kicker">THE OPERATING BELIEF</p><h2>{manifestoTitle}</h2></div><div className="manifesto-copy reveal delay-1">{manifesto.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>
      <section className="section inner-cta"><div className="container"><div className="inner-cta-panel reveal"><p className="section-kicker">PROOF BEFORE COMMITMENT</p><h2>{ctaTitle}</h2><p>Bring us the page, funnel, or checkout moment that is underperforming. We will identify the highest-leverage structural opportunity.</p><Link className="btn btn-accent btn-xl" href="/free-audit">Request your free audit</Link></div></div></section>
    </main>
  );
}
