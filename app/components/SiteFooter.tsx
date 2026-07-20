import Link from "next/link";
import CalendlyButton from "./CalendlyButton";

const markets = [
  ["Africa", "nigeria"], ["United Kingdom", "uk"], ["United States", "usa"],
  ["Canada", "canada"], ["Australia", "australia"], ["Global", "global"],
] as const;

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-intro"><p>Conversion-first commerce systems for brands ready to turn attention into durable revenue.</p><CalendlyButton className="footer-calendly-button" label="Get in Touch" /></div>
        <div className="footer-links">
          <details className="footer-group"><summary>Explore</summary><div className="footer-group-content"><Link href="/portfolio">Work</Link><Link href="/method">Method</Link><Link href="/about">About</Link><Link href="/growth-plan">Growth Plan</Link></div></details>
          <details className="footer-group"><summary>Contact</summary><div className="footer-group-content"><a href="mailto:peter@theempiregrowth.com">peter@theempiregrowth.com</a><Link href="/free-audit#audit-request-form">Free audit</Link><Link href="/faq">FAQ</Link></div></details>
          <details className="footer-group"><summary>International</summary><div className="footer-group-content">{markets.map(([label, region]) => <Link href={`/?region=${region}`} key={region}>{label}</Link>)}</div></details>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 EMPIRE. All rights reserved.</span><span>Strategy · UX · Development · CRO</span></div>
    </footer>
  );
}
