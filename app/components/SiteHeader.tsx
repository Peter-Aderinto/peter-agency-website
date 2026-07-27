"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CtaArrow from "./CtaArrow";

const navItems = [
  { label: "Work", href: "/portfolio" },
  { label: "Method", href: "/method" },
  { label: "Growth Systems", href: "/ecommerce-growth" },
  { label: "Growth Plan", href: "/growth-plan" },
  { label: "FAQ", href: "/faq" },
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand brand-with-logo" href="/" aria-label="Empire Ecommerce Design and Development home" onClick={() => setOpen(false)}>
          <Image className="site-logo site-logo-header" src="/empire-ecommerce-logo.png" alt="Empire Ecommerce Design and Development" width={64} height={64} priority />
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen((value) => !value)}>
          <span /><span /><span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="primary-nav" className={`primary-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </nav>
        <Link className="btn btn-accent nav-cta" href="/free-audit#audit-request-form">Get a Free Audit<CtaArrow /></Link>
      </div>
    </header>
  );
}
