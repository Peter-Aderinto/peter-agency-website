"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { isPricingRegion } from "../data/regional-pricing";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Audit", href: "/free-audit" },
  { label: "FAQ", href: "/faq" },
] as const;

const whatsappHref = "https://wa.me/+2348126575582";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const activeRegion = pathname.split("/").filter(Boolean)[0];
  const regionalPrefix = isPricingRegion(activeRegion) ? `/${activeRegion}` : "";

  function closeDrawer() {
    setIsOpen(false);
  }

  function getNavHref(href: string) {
    if (!regionalPrefix) {
      return href;
    }

    if (href === "/#services") {
      return `${regionalPrefix}#services`;
    }

    if (href === "/portfolio") {
      return `${regionalPrefix}/portfolio`;
    }

    return href;
  }

  function isActiveNavItem(href: string) {
    if (href === "/#services") {
      return pathname === "/" || Boolean(regionalPrefix && pathname === regionalPrefix);
    }

    if (href === "/portfolio") {
      return pathname === "/portfolio" || Boolean(regionalPrefix && pathname === `${regionalPrefix}/portfolio`);
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav className="sticky top-0 z-50 border-b-[0.5px] border-ChampagneGold/25 bg-Obsidian/92 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <Link
          href="/"
          onClick={closeDrawer}
          className="relative block h-16 w-16 md:h-16 md:w-48"
        >
          <Image
            src="/1-logo.png"
            alt="Empire logo"
            fill
            priority
            sizes="(min-width: 768px) 192px, 160px"
            className="object-contain object-left"
          />
        </Link>

        <div className="hidden items-center gap-10 text-base font-semibold text-white md:flex">
          {navItems.map((item) => {
            const isActive = isActiveNavItem(item.href);

            return (
              <Link
                key={item.href}
                href={getNavHref(item.href)}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors hover:text-BrandGold ${
                  isActive ? "text-BrandGold" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <a
          href={whatsappHref}
          className="hidden h-12 items-center justify-center rounded-full bg-BrandGold px-7 text-base font-bold text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25 md:inline-flex"
        >
          Contact Us
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-full text-BrandGold transition-colors hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-BrandGold/25 md:hidden"
        >
          {isOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } border-t-[0.5px] border-ChampagneGold/25 bg-Obsidian/96 px-6 pb-6 pt-3`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navItems.map((item) => {
            const isActive = isActiveNavItem(item.href);

            return (
              <Link
                key={item.href}
                href={getNavHref(item.href)}
                onClick={closeDrawer}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-3 text-base font-bold transition-colors hover:bg-white/10 hover:text-BrandGold focus:outline-none focus:ring-4 focus:ring-BrandGold/20 ${
                  isActive ? "bg-white/10 text-BrandGold" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={whatsappHref}
            onClick={closeDrawer}
            className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-BrandGold px-6 text-sm font-black text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
