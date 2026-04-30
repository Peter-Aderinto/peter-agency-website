import Image from "next/image";
import Link from "next/link";
import {
  Files,
  Laptop,
  Search,
  ShoppingBag,
  Smartphone,
  Store,
  TrendingUp,
  Wrench,
} from "lucide-react";
import EngineeringProcessCarousel from "./components/EngineeringProcessCarousel";
import EngineeringProcessStep from "./components/EngineeringProcessStep";
import FAQAccordionList from "./components/FAQAccordionList";
import MotionDiv from "./components/motion-div";
import QuoteButton from "./components/QuoteButton";
import SectorPillCloud from "./components/SectorPillCloud";
import SiteHeader from "./components/SiteHeader";
import StatusDot from "./components/StatusDot";
import { homepageFaqItems } from "./data/faqs";
import { packages } from "./data/packages";

const locations = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "United States",
  "Europe",
];

const services = [
  {
    title: "Website & Web App Development",
    description:
      "We engineer responsive, mobile-first websites and complex web applications (PWA) tailored for speed and performance in the Nigerian market.",
    icon: "devices",
  },
  {
    title: "E-commerce Strategy & Growth",
    description:
      "We don't just launch stores; we design complete conversion architectures. Including revenue gap analysis, customer journey mapping, and sales funnel engineering.",
    icon: "growth",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Our Technical SEO Audit and Semantic Content Strategy ensure your brand is discovered by both human searchers and AI Generative engines (AEO/GEO).",
    icon: "search",
  },
  {
    title: "Content Management",
    description:
      "Setup and configuration of modern, easy-to-use content systems. Empowering your team to update the digital space seamlessly without a developer.",
    icon: "content",
  },
  {
    title: "Shopify Development & Engineering",
    description:
      "We are the Premier Shopify Architect in Nigeria. From custom theme builds to app configuration and local payment gateway (Paystack/Flutterwave) integration.",
    icon: "shopify",
  },
] as const;

const advantagePillars = [
  {
    icon: "chart",
    title: "Strategic Market Intelligence",
    description:
      "We don't just build websites; we build revenue systems. We analyze Nigerian consumer psychology to ensure your platform converts visitors into loyal customers.",
  },
  {
    icon: "bolt",
    title: "Elite Performance Infrastructure",
    description:
      "Slow sites kill sales. Our systems are engineered for maximum speed on Nigerian networks (MTN, Airtel, Glo), ensuring a seamless experience even on low-bandwidth connections.",
  },
  {
    icon: "shield",
    title: "Local Pricing, Global Standards",
    description:
      'Secure world-class digital assets with the convenience of Naira payments. No "black market" rate fluctuations-just transparent, milestone-based pricing tailored for local scale.',
  },
  {
    icon: "headset",
    title: "Priority Direct Support",
    description:
      "Skip the ticket queues. Our Nigerian partners get direct access to our technical leads during local business hours for rapid troubleshooting and growth consulting.",
  },
];

const conversionItems = [
  "Comprehensive Digital Audit (Free)",
  "Competitor Gap Analysis",
  "Custom Growth Roadmap",
];

const engineeringProcess = [
  {
    step: "STEP 01",
    title: "Systems Discovery & Audit",
    description:
      "We start with a deep dive into your business metrics. We identify leaks in your current funnel and map out a bespoke architectural blueprint for your e-commerce empire.",
    icon: "audit",
    side: "left",
  },
  {
    step: "STEP 02",
    title: "Strategic UI/UX Architecture",
    description:
      "Design is about more than looks. We architect high-converting interfaces focused on speed and user psychology, ensuring a frictionless path from landing to checkout.",
    icon: "ux",
    side: "right",
  },
  {
    step: "STEP 03",
    title: "Precision Engineering & Dev",
    description:
      "Our developers build your system using cutting-edge stacks (Next.js/Shopify). We focus on clean code, lightning-fast load times, and robust mobile responsiveness.",
    icon: "dev",
    side: "left",
  },
  {
    step: "STEP 04",
    title: "Quality Assurance & Scaling",
    description:
      "Rigorous testing for performance and security. Once launched, we monitor the systems to ensure stability and provide the technical support needed for global scale.",
    icon: "scale",
    side: "right",
  },
] as const;

const footerContacts = [
  {
    title: "Phone",
    value: "WhatsApp: +234 816 090 8843",
    href: "https://wa.me/2348160908843",
    icon: "phone",
  },
  {
    title: "Email",
    value: "petay081@gmail.com",
    href: "mailto:petay081@gmail.com",
    icon: "email",
  },
  {
    title: "Location",
    value: "Ibadan, Nigeria",
    href: "#global",
    icon: "location",
  },
] as const;

const footerServices = [
  "Website Design and Development",
  "E-commerce Systems",
  "SEO Engineering",
  "Conversion Optimization",
];

const footerCompany = [
  { label: "Our Process", href: "#process" },
  { label: "Portfolio", href: "#" },
  { label: "Success Stories", href: "#" },
  { label: "Partner with Us", href: "#contact" },
];

const footerLegal = ["Privacy Policy", "Terms of Service"];

const commitmentPills = [
  "24/7 Priority Support",
  "Conversion Focused Approach",
  "Data-Backed Scaling",
] as const;

const sectorIndustries = [
  "Real Estate & Property Brands",
  "Fashion & Lifestyle Startups",
  "Tech & SaaS Companies",
  "NGOs & Educational Platforms",
  "Modern Restaurants & Lounges",
  "Personal Brands & Creatives",
  "Healthcare & Medical Clinics",
  "Legal & Professional Services",
] as const;

function ServiceIcon({ icon }: { icon: (typeof services)[number]["icon"] }) {
  const iconClassName = "size-6";

  if (icon === "devices") {
    return (
      <>
        <Laptop className="size-7" strokeWidth={2.1} aria-hidden="true" />
        <Smartphone
          className="absolute -bottom-1 -right-1 size-4 rounded-sm bg-white"
          strokeWidth={2.4}
          aria-hidden="true"
        />
      </>
    );
  }

  if (icon === "growth") {
    return (
      <>
        <ShoppingBag className={iconClassName} strokeWidth={2.2} aria-hidden="true" />
        <TrendingUp
          className="absolute -right-1 -top-1 size-4 rounded-sm bg-white"
          strokeWidth={2.6}
          aria-hidden="true"
        />
      </>
    );
  }

  if (icon === "search") {
    return <Search className={iconClassName} strokeWidth={2.3} aria-hidden="true" />;
  }

  if (icon === "content") {
    return <Files className={iconClassName} strokeWidth={2.2} aria-hidden="true" />;
  }

  return (
    <>
      <Store className={iconClassName} strokeWidth={2.2} aria-hidden="true" />
      <Wrench
        className="absolute -bottom-1 -right-1 size-4 rounded-sm bg-white"
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </>
  );
}

function FooterIcon({ icon }: { icon: string }) {
  const className = "size-6";

  if (icon === "phone") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
      >
        <path d="M22 16.92v2.2a2.2 2.2 0 0 1-2.4 2.19 19.4 19.4 0 0 1-8.46-3.01 19.06 19.06 0 0 1-5.86-5.86A19.4 19.4 0 0 1 2.27 3.95 2.2 2.2 0 0 1 4.46 1.6h2.2a2.2 2.2 0 0 1 2.2 1.89c.14 1.06.39 2.1.74 3.1a2.2 2.2 0 0 1-.5 2.32l-.93.93a15.7 15.7 0 0 0 5.86 5.86l.93-.93a2.2 2.2 0 0 1 2.32-.5c1 .35 2.04.6 3.1.74A2.2 2.2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (icon === "email") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
      >
        <path d="M4.5 6h15A2.5 2.5 0 0 1 22 8.5v7A2.5 2.5 0 0 1 19.5 18h-15A2.5 2.5 0 0 1 2 15.5v-7A2.5 2.5 0 0 1 4.5 6Z" />
        <path d="m3 8 9 6 9-6" />
      </svg>
    );
  }

  if (icon === "location") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
      >
        <path d="M12 21s7-5.7 7-12A7 7 0 1 0 5 9c0 6.3 7 12 7 12Z" />
        <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5.4 8.75H2.2V21h3.2V8.75ZM3.8 3A1.85 1.85 0 1 0 3.78 6.7 1.85 1.85 0 0 0 3.8 3ZM21.8 14.05c0-3.55-1.9-5.2-4.42-5.2a3.8 3.8 0 0 0-3.43 1.88h-.05V8.75h-3.07V21h3.2v-6.06c0-1.6.3-3.15 2.29-3.15 1.95 0 1.98 1.83 1.98 3.25V21h3.2l.3-6.95Z" />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M16.5 7.5h.01" />
        <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path d="M4 4 20 20" />
      <path d="m20 4-6.9 7.9" />
      <path d="M4 20 10.9 12.1" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-SteelGrey">
      <SiteHeader />

      <section className="relative overflow-hidden bg-SoftCream">
        <MotionDiv className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-2 lg:px-12 lg:pb-32 lg:pt-24">
          <div className="text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-BrandGold/80 md:text-sm">
              THE ARCHITECT OF NIGERIAN E-COMMERCE
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-SteelGrey md:text-6xl">
              Website Developement &amp; E-commerce Solution
            </h1>

            <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-SteelGrey/70 md:text-lg">
              We engineer high-speed Website systems designed to capture sales,
              outrank competitors, and scale your brand across borders.
            </p>

            <ul className="mt-8 flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-SteelGrey/60 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <li className="flex items-center gap-2">
                <span className="text-sm font-black leading-none text-BrandGold">
                  ✓
                </span>
                50+ Businesses
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm font-black leading-none text-BrandGold">
                  ✓
                </span>
                24/7 Support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm font-black leading-none text-BrandGold">
                  ✓
                </span>
                Built for Growth
              </li>
            </ul>

            <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center rounded-full bg-BrandGold px-8 py-4 text-base font-bold text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
              >
                Get a Free Business Audit →
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-SteelGrey/20 bg-transparent px-8 py-4 text-base font-bold text-SteelGrey transition-colors hover:border-BrandGold hover:text-BrandGold focus:outline-none focus:ring-4 focus:ring-BrandGold/15"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative aspect-[4/5] w-full overflow-visible">
              <div className="absolute left-0 top-0 z-10 flex min-h-12 items-center gap-3 rounded-xl border border-white/20 bg-SteelGrey/70 px-4 text-sm font-black text-white backdrop-blur-md sm:min-h-14 sm:px-5 sm:text-base lg:left-0 lg:top-0 lg:min-h-14 lg:px-5 lg:text-base">
                <span className="size-3 rounded-full bg-green-500" />
                100+ Clients Worldwide
              </div>

              <Image
                src="/my-picture.jpeg"
                alt="Empire founder portrait"
                width={760}
                height={800}
                priority
                className="h-full w-full rounded-2xl object-cover object-center shadow-[0_28px_70px_rgba(74,74,74,0.18)]"
              />

              <div className="absolute bottom-0 right-0 z-10 flex min-h-12 items-center gap-3 rounded-xl border border-white/20 bg-SteelGrey/70 px-4 text-sm font-black text-white backdrop-blur-md sm:min-h-14 sm:px-5 sm:text-base lg:bottom-0 lg:right-0 lg:min-h-14 lg:px-5 lg:text-base">
                <span className="tracking-[0.08em] text-yellow-400">★★★★★</span>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </MotionDiv>

        <div className="absolute inset-x-0 bottom-0 text-white" aria-hidden="true">
          <svg
            className="h-16 w-full sm:h-24"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0 96L80 90C160 84 320 72 480 78C640 84 800 108 960 112C1120 116 1280 100 1360 92L1440 84V120H0V96Z" />
          </svg>
        </div>
      </section>

      <section
        id="services"
        className="relative isolate overflow-hidden bg-white px-6 py-20 text-SteelGrey sm:px-10 sm:py-24 lg:px-12 lg:py-28"
      >
        <div
          className="absolute inset-0 -z-10 bg-[url('/images/nigerian-tech-background.jpg')] bg-cover bg-center opacity-5"
          aria-hidden="true"
        />
        <MotionDiv className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black leading-tight text-SteelGrey sm:text-5xl">
              Our Services.
            </h2>
            <p className="mt-4 text-base font-semibold leading-8 text-SteelGrey/72 sm:text-lg">
              Architecting the Digital Space for Nigerian Brands.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex min-h-[300px] flex-col rounded-lg border border-SteelGrey/15 bg-SoftCream p-7 shadow-sm transition-all duration-300 ease-out hover:scale-[1.025] hover:border-BrandGold hover:shadow-[0_22px_55px_rgba(74,74,74,0.12)] sm:p-8"
              >
                <div className="relative flex size-12 items-center justify-center rounded-lg border border-BrandGold/20 bg-SoftCream text-BrandGold transition-colors group-hover:border-BrandGold/40 group-hover:bg-BrandGold group-hover:text-white">
                  <ServiceIcon icon={service.icon} />
                </div>

                <h3 className="mt-7 text-xl font-black leading-tight text-SteelGrey">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-SteelGrey/75">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </MotionDiv>
      </section>

      <section
        id="global"
        className="border-b border-SteelGrey/10 bg-white px-6 pb-20 pt-4 sm:px-10 sm:pb-24 sm:pt-6 lg:px-12 lg:pb-28 lg:pt-8"
      >
        <MotionDiv className="mx-auto max-w-7xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-SteelGrey/75 sm:text-xs">
            SERVING AMBITIOUS BUSINESSES GLOBALLY
          </p>

          <ul className="mx-auto mt-4 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-x-3 sm:gap-y-3">
            {locations.map((location) => (
              <li key={location}>
                <span className="inline-flex h-8 items-center justify-center gap-1.5 rounded-full bg-zinc-100 px-3 text-xs font-medium text-SteelGrey sm:h-9 sm:px-4 sm:text-sm">
                  {location === "Worldwide" ? (
                    <svg
                      className="size-3.5 shrink-0 text-red-600 sm:size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                      <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.1 2.25 3.25 5.15 3.25 9S14.1 18.75 12 21M12 3C9.9 5.25 8.75 8.15 8.75 12S9.9 18.75 12 21" />
                    </svg>
                  ) : (
                    <svg
                      className="size-3.5 shrink-0 text-red-600 sm:size-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2.25A7.25 7.25 0 0 0 4.75 9.5c0 5.44 6.42 11.64 6.7 11.9a.8.8 0 0 0 1.1 0c.28-.26 6.7-6.46 6.7-11.9A7.25 7.25 0 0 0 12 2.25Zm0 10.25a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                  )}
                  {location}
                </span>
              </li>
            ))}
          </ul>
        </MotionDiv>
      </section>

      <section
        id="process"
        className="relative overflow-hidden bg-[url('/website-developer-nigeria.jpg')] bg-cover bg-center px-6 py-20 text-SoftCream sm:px-10 sm:py-24 lg:px-12 lg:py-28"
      >
        <div
          className="absolute inset-0 bg-SteelGrey/82"
          aria-hidden="true"
        />
        <MotionDiv className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-BrandGold">
              OUR ENGINEERING PROCESS
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
              Your Website as your Brand&apos;s Digital Space
            </h2>
            <p className="mt-5 text-base leading-8 text-SoftCream/75 sm:text-lg">
              A disciplined build system for brands that need strategy,
              technical precision, and launch confidence in one clear path.
            </p>
          </div>

          <EngineeringProcessCarousel items={engineeringProcess} />

          <div className="relative mx-auto mt-16 hidden max-w-6xl space-y-16 md:block">
            <div
              className="absolute bottom-8 left-1/2 top-8 hidden -translate-x-1/2 border-l border-dashed border-BrandGold/45 md:block"
              aria-hidden="true"
            />
            <svg
              className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-24 -translate-x-1/2 text-BrandGold/15 md:block"
              viewBox="0 0 96 760"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M48 0C48 86 18 112 18 190C18 282 78 292 78 382C78 470 18 486 18 572C18 650 48 680 48 760"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="10 12"
              />
            </svg>

            {engineeringProcess.map((item) => (
              <EngineeringProcessStep
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                icon={item.icon}
                side={item.side}
                isActive={item.step === "STEP 01"}
              />
            ))}
          </div>
        </MotionDiv>
      </section>

      <section className="bg-white px-6 py-20 text-SteelGrey sm:px-10 sm:py-24 lg:px-12">
        <MotionDiv className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-BrandGold">
              THE EMPIRE ADVANTAGE
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Why High-Growth Nigerian Brands Partner With Us
            </h2>

            <div className="mt-10 space-y-8">
              {advantagePillars.map((pillar) => (
                <article key={pillar.title} className="flex gap-5">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-SoftCream text-BrandGold">
                    {pillar.icon === "chart" ? (
                      <svg
                        className="size-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        aria-hidden="true"
                      >
                        <path d="M4 19V5" />
                        <path d="M4 19h16" />
                        <path d="m7 15 4-4 3 3 5-6" />
                        <path d="M15 8h4v4" />
                      </svg>
                    ) : null}

                    {pillar.icon === "bolt" ? (
                      <svg
                        className="size-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M13.2 2.4 4.7 13.1a.8.8 0 0 0 .63 1.3h5.1l-1.02 6.42c-.13.8.9 1.24 1.4.6l8.5-10.7a.8.8 0 0 0-.63-1.3h-5.1l1.02-6.42c.13-.8-.9-1.24-1.4-.6Z" />
                      </svg>
                    ) : null}

                    {pillar.icon === "shield" ? (
                      <svg
                        className="size-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2.5 5 5.3v5.55c0 4.45 2.82 8.65 7 10.65 4.18-2 7-6.2 7-10.65V5.3l-7-2.8Zm2.8 8.55-3.35 3.35a.85.85 0 0 1-1.2 0L8.7 12.85a.85.85 0 1 1 1.2-1.2l.95.95 2.75-2.75a.85.85 0 0 1 1.2 1.2Z" />
                      </svg>
                    ) : null}

                    {pillar.icon === "headset" ? (
                      <svg
                        className="size-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        aria-hidden="true"
                      >
                        <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                        <path d="M5.5 13H4.8A1.8 1.8 0 0 0 3 14.8v2.4A1.8 1.8 0 0 0 4.8 19h.7A1.5 1.5 0 0 0 7 17.5v-3A1.5 1.5 0 0 0 5.5 13Z" />
                        <path d="M18.5 13h.7a1.8 1.8 0 0 1 1.8 1.8v2.4a1.8 1.8 0 0 1-1.8 1.8h-.7a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5Z" />
                        <path d="M16 20.5h-3.2a2 2 0 0 1-2-2" />
                      </svg>
                    ) : null}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-SteelGrey">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-8 text-SteelGrey/80">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-BrandGold/20 bg-SoftCream p-7 text-center shadow-[0_24px_70px_rgba(74,74,74,0.14)] sm:p-10">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-white text-BrandGold">
              <svg
                className="size-10"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.54 4.46c-2.2-.34-5.22.55-7.78 3.11L9.9 9.43 6.7 9.2a1.6 1.6 0 0 0-1.25.47l-2.98 2.98a.75.75 0 0 0 .42 1.27l3.65.62 2.92 2.92.62 3.65a.75.75 0 0 0 1.27.42l2.98-2.98c.34-.34.51-.8.47-1.25l-.23-3.2 1.86-1.86c2.56-2.56 3.45-5.58 3.11-7.78ZM15.5 9.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM5.8 16.77c.54.54.54 1.42 0 1.96-.78.78-3.22 1.27-3.22 1.27s.49-2.44 1.27-3.22c.54-.55 1.42-.55 1.95-.01Z" />
              </svg>
            </div>

            <h3 className="mt-8 text-3xl font-black leading-tight text-slate-950">
              Ready to Scale Your Empire?
            </h3>
            <p className="mt-4 text-lg leading-8 text-SteelGrey/80">
              Lock in a specialized 15-minute diagnostic call. We&apos;ll audit your
              current digital presence and map out a 90-day growth plan.
            </p>

            <ul className="mt-8 space-y-4 text-left">
              {conversionItems.map((item) => (
                <li
                  key={item}
                  className="flex min-h-14 items-center justify-between gap-4 rounded-lg border border-SteelGrey/10 bg-white px-4 text-base font-medium text-SteelGrey"
                >
                  <span>{item}</span>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-BrandGold text-xs font-black text-white">
                    ✓
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/free-audit"
              className="mt-8 inline-flex h-16 w-full items-center justify-center rounded-full bg-BrandGold text-lg font-black text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
            >
              Book Your Strategy Session →
            </Link>

            <p className="mt-5 text-sm text-SteelGrey/65">
              Limited slots available per month. No commitment required.
            </p>
          </aside>
        </MotionDiv>
      </section>

      <section className="bg-SoftCream px-6 py-20 text-SteelGrey sm:px-10 sm:py-24 lg:px-12 lg:py-28">
        <MotionDiv className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-BrandGold">
            SECTOR EXPERTISE
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight text-SteelGrey sm:text-5xl">
            Industries We Work With
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-SteelGrey/65 sm:text-base">
            Tailored digital solutions for high-growth sectors.
          </p>
        </MotionDiv>

        <SectorPillCloud industries={sectorIndustries} />
      </section>

      <section className="bg-SoftCream px-6 py-20 text-SteelGrey sm:px-10 sm:py-24 lg:px-12 lg:py-28">
        <MotionDiv className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black leading-tight text-SteelGrey sm:text-5xl">
              Our Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-8 text-SteelGrey/70 sm:text-lg">
              Transparent pricing for high-performance digital infrastructure.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
            {packages.map((packageItem) => (
              <article
                key={packageItem.title}
                className={`relative flex h-full min-h-[520px] flex-col rounded-xl border bg-white p-8 text-SteelGrey transition-all duration-300 ease-out hover:-translate-y-2 hover:border-BrandGold hover:shadow-[0_24px_60px_rgba(74,74,74,0.14)] sm:p-9 ${
                  packageItem.popular
                    ? "border-BrandGold shadow-[0_18px_44px_rgba(212,175,55,0.12)]"
                    : "border-SteelGrey/10 shadow-sm"
                }`}
              >
                {packageItem.popular ? (
                  <span className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full bg-BrandGold px-5 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(212,175,55,0.22)]">
                    Most Popular
                  </span>
                ) : null}

                <h3 className="text-2xl font-black text-SteelGrey">
                  {packageItem.title}
                </h3>
                <p className="mt-5 text-3xl font-black text-BrandGold">
                  {packageItem.price}
                </p>

                <ul className="mt-8 space-y-3 text-sm font-medium text-SteelGrey/78">
                  {packageItem.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-BrandGold text-[10px] font-black text-white">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <QuoteButton
                    label="Get Quote →"
                    initialService={packageItem.title}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-BrandGold px-6 text-sm font-black text-white transition-all hover:bg-BrandGold/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.24)] focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
                  />
                </div>
              </article>
            ))}
          </div>
        </MotionDiv>
      </section>

      <section
        id="faq"
        className="bg-white px-6 py-16 text-SteelGrey sm:px-10 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <MotionDiv className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-BrandGold">
              QUICK FAQ
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-SteelGrey sm:text-5xl">
              Answers Before We Build
            </h2>
          </MotionDiv>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-12">
            <MotionDiv className="relative min-h-72 overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(74,74,74,0.14)] sm:min-h-96 md:min-h-full">
              <Image
                src="/faq.jpeg"
                alt="Website strategy discussion"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </MotionDiv>

            <MotionDiv className="flex flex-col justify-center">
              <FAQAccordionList items={homepageFaqItems} />

              <div className="mt-8 text-center">
                <a
                  href="/faq"
                  className="inline-flex items-center justify-center text-base font-black text-black transition-colors hover:text-BrandGold focus:outline-none focus:ring-4 focus:ring-BrandGold/20"
                >
                  View all FAQ →
                </a>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[linear-gradient(180deg,#4A4A4A_0%,#383838_58%,#2d2d2d_100%)] px-6 py-16 text-SoftCream sm:px-10 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 border-b border-SoftCream/10 pb-12 md:grid-cols-3">
            {footerContacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                className="group flex min-h-32 items-center gap-5 rounded-lg border border-SoftCream/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-BrandGold/50 hover:bg-white/[0.07]"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-BrandGold/10 text-BrandGold transition-colors group-hover:bg-BrandGold group-hover:text-white">
                  <FooterIcon icon={contact.icon} />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.22em] text-BrandGold">
                    {contact.title}
                  </span>
                  <span className="mt-2 block text-base font-semibold leading-7 text-SoftCream">
                    {contact.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10 border-b border-SoftCream/10 py-12 lg:grid-cols-[1.45fr_0.8fr_0.8fr_0.6fr] lg:gap-12">
            <div>
              <a
                href="#"
                className="inline-flex text-3xl font-black tracking-[0.18em] text-white transition-colors hover:text-BrandGold"
              >
                EMPIRE
              </a>
              <p className="mt-5 max-w-md text-base leading-8 text-SoftCream/72">
                Empire Design &amp; Dev builds e-commerce systems engineered for
                speed, trust, and measurable conversion. We help ambitious
                brands turn digital storefronts into scalable revenue
                infrastructure.
              </p>

              <form className="mt-7 max-w-md">
                <label
                  htmlFor="footer-newsletter"
                  className="text-xs font-black uppercase tracking-[0.2em] text-BrandGold"
                >
                  Newsletter
                </label>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="footer-newsletter"
                    type="email"
                    placeholder="Email address"
                    className="h-12 min-h-12 flex-1 rounded-md border border-SoftCream/12 bg-SteelGrey/60 px-4 text-sm font-medium text-white outline-none transition-colors placeholder:text-SoftCream/45 focus:border-BrandGold"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-12 min-h-12 items-center justify-center rounded-full bg-BrandGold px-6 text-sm font-black text-white transition-all hover:bg-BrandGold/90 hover:shadow-[0_0_28px_rgba(212,175,55,0.34)] focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                Services
              </h3>
              <ul className="mt-5 space-y-3">
                {footerServices.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-sm font-medium text-SoftCream/70 transition-colors hover:text-BrandGold"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                Company
              </h3>
              <ul className="mt-5 space-y-3">
                {footerCompany.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm font-medium text-SoftCream/70 transition-colors hover:text-BrandGold"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                Legal
              </h3>
              <ul className="mt-5 space-y-3">
                {footerLegal.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-medium text-SoftCream/70 transition-colors hover:text-BrandGold"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-b border-SoftCream/10 py-8 text-center lg:flex-row">
            <p className="text-sm text-SoftCream/65">
              © 2026 Empire Design &amp; Dev. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-3">
              {[
                { label: "X", icon: "x" },
                { label: "LinkedIn", icon: "linkedin" },
                { label: "Instagram", icon: "instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full border border-SoftCream/12 text-SoftCream/75 transition-all hover:border-BrandGold hover:bg-BrandGold hover:text-white"
                >
                  <FooterIcon icon={social.icon} />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-bold">
              <a href="#contact" className="text-SoftCream/70 transition-colors hover:text-BrandGold">
                Get Quote
              </a>
              <a href="#" className="text-SoftCream/70 transition-colors hover:text-BrandGold">
                Privacy
              </a>
              <a href="#" className="text-SoftCream/70 transition-colors hover:text-BrandGold">
                Terms
              </a>
            </div>
          </div>

          <div className="pt-8 text-center">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              {commitmentPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-BrandGold/25 bg-BrandGold/10 px-5 text-xs font-black uppercase tracking-[0.14em] text-SoftCream/85 sm:w-auto"
                >
                  <StatusDot
                    tone={pill === "24/7 Priority Support" ? "emerald" : "gold"}
                  />
                  {pill}
                </span>
              ))}
            </div>

            <a
              href="https://wa.me/2348160908843"
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-BrandGold px-7 text-base font-black text-white transition-all hover:bg-BrandGold/90 hover:shadow-[0_0_34px_rgba(212,175,55,0.36)] focus:outline-none focus:ring-4 focus:ring-BrandGold/25 sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
