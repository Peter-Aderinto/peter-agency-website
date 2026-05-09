import Image from "next/image";
import Link from "next/link";
import DualTickerMarquee from "./components/DualTickerMarquee";
import EngineeringProcessCarousel from "./components/EngineeringProcessCarousel";
import EngineeringProcessStep from "./components/EngineeringProcessStep";
import FAQAccordionList from "./components/FAQAccordionList";
import MotionDiv from "./components/motion-div";
import PortfolioCard from "./components/PortfolioCard";
import PremiumPricing from "./components/PremiumPricing";
import SectorPillCloud from "./components/SectorPillCloud";
import ServicesShowcase from "./components/ServicesShowcase";
import SiteHeader from "./components/SiteHeader";
import StatusDot from "./components/StatusDot";
import { homepageFaqItems } from "./data/faqs";
import { homepagePortfolioItems } from "./data/homepage-sections";
import { regionalRoutes, type PricingRegion } from "./data/regional-pricing";

function getServices(country: string) {
  return [
    {
      title: `Website Development in ${country}`,
      description: `Custom website development for businesses in ${country} looking to generate leads, build trust, and grow online with fast, SEO-optimized systems.`,
      icon: "devices",
    },
    {
      title: `Shopify Store Development in ${country}`,
      description: `We design and develop high-converting Shopify stores for ${country} businesses with seamless checkout, optimized product pages, and scalable systems for long-term growth.`,
      icon: "shopify",
    },
    {
      title: "E-commerce Website Development",
      description: `End-to-end e-commerce development focused on conversions, user experience, and sales optimization for ${country} and global businesses.`,
      icon: "growth",
    },
    {
      title: "Website Management & CMS Setup",
      description:
        "We build easy-to-manage websites using modern CMS systems, allowing you to update content, products, and pages without technical skills.",
      icon: "content",
    },
    {
      title: `SEO Optimization for ${country} Websites`,
      description: `Technical SEO, keyword optimization, and on-page strategies to help your website rank on Google and attract more customers in ${country}.`,
      icon: "search",
    },
  ] as const;
}

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

const commitmentPills = [
  "24/7 Priority Support",
  "Conversion Focused Approach",
  "Data-Backed Scaling",
] as const;

const internationalPages = [
  { label: "Canada", href: "/ca" },
  { label: "UK", href: "/uk" },
  { label: "USA", href: "/us" },
  { label: "Australia", href: "/au" },
  { label: "Europe", href: "/eu" },
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

  if (icon === "behance") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3 5.5h6.68c1.3 0 2.31.3 3.03.92.72.61 1.08 1.45 1.08 2.53 0 .65-.15 1.21-.46 1.68-.31.47-.76.83-1.35 1.09.8.23 1.41.65 1.81 1.26.4.61.6 1.35.6 2.22 0 1.16-.4 2.08-1.21 2.76-.8.69-1.9 1.04-3.29 1.04H3V5.5Zm3.03 5.46h3.16c.5 0 .9-.12 1.18-.36.28-.24.42-.59.42-1.05 0-.48-.14-.83-.43-1.05-.29-.23-.7-.34-1.24-.34H6.03v2.8Zm0 5.38h3.43c.57 0 1.02-.14 1.34-.42.32-.29.48-.7.48-1.24 0-.52-.16-.93-.48-1.2-.32-.28-.77-.42-1.35-.42H6.03v3.28ZM16.1 8.2h5.9v1.75h-5.9V8.2Zm2.93 2.46c1.36 0 2.45.43 3.28 1.28.82.85 1.22 2.05 1.19 3.58v.54h-6.25c.04.69.22 1.22.54 1.58.33.37.8.55 1.42.55.43 0 .8-.1 1.09-.3.3-.21.51-.47.65-.8h2.38a4.07 4.07 0 0 1-1.49 2.2c-.72.51-1.58.76-2.59.76-1.45 0-2.58-.44-3.38-1.33-.81-.89-1.22-2.03-1.22-3.43 0-1.36.42-2.47 1.26-3.33.84-.87 1.88-1.3 3.12-1.3Zm1.82 3.7c-.08-.6-.28-1.05-.59-1.34-.31-.3-.73-.45-1.24-.45-.53 0-.94.16-1.23.49-.3.32-.47.76-.52 1.3h3.58Z" />
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

type HomeProps = {
  region?: PricingRegion;
};

export default function Home({ region }: HomeProps = {}) {
  const country = region ? regionalRoutes[region].country : "Nigeria";
  const services = getServices(country);
  const heroEyebrow = region
    ? `BEST WEBSITE DEVELOPER IN ${country.toUpperCase()}`
    : "WEBSITE DEVELOPER & SHOPIFY EXPERT IN NIGERIA";
  const heroTitle = region
    ? `Best Website Developer in ${country}`
    : "Website Design & E-commerce Development for Nigerian Businesses.";
  const heroDescription = region
    ? `Shopify Expert serving ${country} businesses with SEO-ready websites, high-converting stores, and scalable digital systems.`
    : "We build SEO-ready websites and high-converting Shopify stores that help businesses generate leads, sales, and long-term growth.";

  return (
    <main className="min-h-screen bg-Obsidian font-sans text-Alabaster">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-Obsidian pb-20 text-Alabaster">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.24),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(212,175,55,0.12),transparent_26%),linear-gradient(135deg,#080808_0%,#0f0b05_46%,#080808_100%)]"
          aria-hidden="true"
        />

        <MotionDiv className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-20 md:grid-cols-2 lg:px-12 lg:pt-24">
          <div className="text-left">
            <p className="mb-6 inline-flex max-w-full items-center rounded-full border-[0.5px] border-ChampagneGold/55 bg-black/45 px-4 py-2 text-[10px] font-black uppercase leading-5 tracking-[0.2em] text-BrandGold shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-md sm:text-xs">
              {heroEyebrow}
            </p>

            <h1 className="max-w-3xl text-[2.1rem] font-black leading-[1.12] tracking-normal text-Alabaster md:text-[3.5rem] md:leading-[1.08]">
              {heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-MutedSlate">
              {heroDescription}
            </p>

            <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center rounded-full bg-BrandGold px-8 py-4 text-base font-bold text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
              >
                Get a Free Business Audit →
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border-[0.5px] border-ChampagneGold/45 bg-transparent px-8 py-4 text-base font-bold text-Alabaster transition-colors hover:border-ChampagneGold hover:text-ChampagneGold focus:outline-none focus:ring-4 focus:ring-ChampagneGold/15"
              >
                View Services
              </a>
            </div>

          </div>

          <div className="relative w-full">
            <div
              className="empire-grid-mesh pointer-events-none absolute -inset-8 bg-[linear-gradient(rgba(212,175,55,0.16)_0.5px,transparent_0.5px),linear-gradient(90deg,rgba(212,175,55,0.16)_0.5px,transparent_0.5px)] bg-[size:42px_42px] opacity-45 [mask-image:radial-gradient(circle_at_center,black_0%,transparent_72%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_42%,rgba(212,175,55,0.2),transparent_34%)]"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] w-full overflow-visible">
              <div className="absolute left-0 top-0 z-10 flex min-h-12 items-center gap-3 rounded-xl border-[0.5px] border-ChampagneGold/45 bg-black/45 px-4 text-sm font-black text-Alabaster backdrop-blur-md sm:min-h-14 sm:px-5 sm:text-base lg:left-0 lg:top-0 lg:min-h-14 lg:px-5 lg:text-base">
                <span className="size-3 rounded-full bg-green-500" />
                100+ Clients Worldwide
              </div>

              <Image
                src="/my-picture.jpeg"
                alt="Empire founder portrait"
                width={760}
                height={800}
                priority
                className="h-full w-full rounded-2xl border-[0.5px] border-ChampagneGold/45 object-cover object-center shadow-[0_34px_90px_rgba(0,0,0,0.62)]"
              />

              <div className="absolute bottom-0 right-0 z-10 flex min-h-12 items-center gap-3 rounded-xl border-[0.5px] border-ChampagneGold/45 bg-black/45 px-4 text-sm font-black text-Alabaster backdrop-blur-md sm:min-h-14 sm:px-5 sm:text-base lg:bottom-0 lg:right-0 lg:min-h-14 lg:px-5 lg:text-base">
                <span className="tracking-[0.08em] text-yellow-400">★★★★★</span>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      <DualTickerMarquee />

      <section
        id="services"
        className="relative isolate overflow-hidden bg-Obsidian px-6 py-24 text-Alabaster sm:px-10 lg:px-12"
      >
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_0%,rgba(212,175,55,0.08),transparent_28%)]"
          aria-hidden="true"
        />
        <MotionDiv className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-Alabaster sm:text-5xl">
              Website Development &amp; Shopify Services in {country}.
            </h2>
            <p className="mt-4 text-base font-medium leading-8 text-MutedSlate">
              Helping businesses in {country} build websites that rank, convert,
              and scale.
            </p>
          </div>

          <ServicesShowcase services={services} />
        </MotionDiv>
      </section>

      <section
        id="portfolio"
        className="bg-Obsidian px-6 py-24 text-Alabaster sm:px-10 lg:px-12"
      >
        <MotionDiv className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-ChampagneGold">
              SELECTED WORKS
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-Alabaster sm:text-5xl">
              Website Design Portfolio for Brands that Want Proof.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-4">
            {homepagePortfolioItems.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>
        </MotionDiv>

        <div className="mx-auto mt-16 max-w-7xl overflow-hidden rounded-2xl border-[0.5px] border-ChampagneGold/30 bg-[#111111] px-6 py-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:px-10">
          <p className="mx-auto max-w-3xl text-base font-medium leading-8 text-MutedSlate sm:text-lg">
            View the full portfolio for ecommerce, Shopify, corporate, and
            service-business website examples.
          </p>
          <Link
            href="/portfolio"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-BrandGold px-7 text-base font-black text-white transition-all hover:bg-BrandGold/90 hover:shadow-[0_0_34px_rgba(212,175,55,0.36)] focus:outline-none focus:ring-4 focus:ring-BrandGold/25"
          >
            View Full Portfolio →
          </Link>
        </div>
      </section>

      <section
        id="global"
        className="border-y-[0.5px] border-ChampagneGold/20 bg-Obsidian px-6 py-16 sm:px-10 lg:px-12"
      >
        <MotionDiv className="mx-auto max-w-7xl text-center">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-ChampagneGold/75 sm:text-xs">
            SERVING AMBITIOUS BUSINESSES ACROSS NIGERIA AND GLOBAL MARKETS
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-MutedSlate">
            Strategy, interface architecture, and technical systems built with
            the discipline of a global studio and the market intelligence of a
            Nigerian operator.
          </p>
        </MotionDiv>
      </section>

      <section
        id="process"
        className="relative overflow-hidden bg-[url('/website-developer-nigeria.jpg')] bg-cover bg-center px-6 py-24 text-Alabaster sm:px-10 lg:px-12"
      >
        <div
          className="absolute inset-0 bg-Obsidian/90"
          aria-hidden="true"
        />
        <MotionDiv className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-BrandGold">
              OUR ENGINEERING PROCESS
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-Alabaster sm:text-5xl">
              Your Website as your Brand&apos;s Digital Space
            </h2>
            <p className="mt-5 text-base leading-8 text-MutedSlate">
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

      <section className="bg-Obsidian px-6 py-24 text-Alabaster sm:px-10 lg:px-12">
        <MotionDiv className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-BrandGold">
              THE EMPIRE ADVANTAGE
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-Alabaster sm:text-5xl">
              Why High-Growth {country} Brands Partner With Us
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-MutedSlate">
              As a Website Developer and Shopify Expert serving {country}, I
              bridge the gap between human behavior and digital performance.
            </p>

            <div className="mt-10 space-y-8">
              {advantagePillars.map((pillar) => (
                <article key={pillar.title} className="flex gap-5">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-[0.5px] border-ChampagneGold/35 bg-white/[0.03] text-BrandGold">
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
                    <h3 className="text-xl font-medium text-Alabaster">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-8 text-MutedSlate">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border-[0.5px] border-ChampagneGold/35 bg-white/[0.03] p-7 text-center shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:p-10">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full border-[0.5px] border-ChampagneGold/35 bg-black/35 text-BrandGold">
              <svg
                className="size-10"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.54 4.46c-2.2-.34-5.22.55-7.78 3.11L9.9 9.43 6.7 9.2a1.6 1.6 0 0 0-1.25.47l-2.98 2.98a.75.75 0 0 0 .42 1.27l3.65.62 2.92 2.92.62 3.65a.75.75 0 0 0 1.27.42l2.98-2.98c.34-.34.51-.8.47-1.25l-.23-3.2 1.86-1.86c2.56-2.56 3.45-5.58 3.11-7.78ZM15.5 9.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM5.8 16.77c.54.54.54 1.42 0 1.96-.78.78-3.22 1.27-3.22 1.27s.49-2.44 1.27-3.22c.54-.55 1.42-.55 1.95-.01Z" />
              </svg>
            </div>

            <h3 className="mt-8 text-3xl font-medium leading-tight tracking-tight text-Alabaster">
              Ready to Scale Your Empire?
            </h3>
            <p className="mt-4 text-base leading-8 text-MutedSlate">
              Lock in a specialized 15-minute diagnostic call. We&apos;ll audit your
              current digital presence and map out a 90-day growth plan.
            </p>

            <ul className="mt-8 space-y-4 text-left">
              {conversionItems.map((item) => (
                <li
                  key={item}
                  className="flex min-h-14 items-center justify-between gap-4 rounded-lg border-[0.5px] border-ChampagneGold/25 bg-black/35 px-4 text-base font-medium text-Alabaster"
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

            <p className="mt-5 text-sm text-MutedSlate">
              Limited slots available per month. No commitment required.
            </p>
          </aside>
        </MotionDiv>
      </section>

      <section className="bg-Obsidian px-6 py-24 text-Alabaster sm:px-10 lg:px-12">
        <MotionDiv className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-BrandGold">
            SECTOR EXPERTISE
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-tight text-Alabaster sm:text-5xl">
            Industries We Work With
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-MutedSlate">
            Tailored digital solutions for high-growth sectors.
          </p>
        </MotionDiv>

        <SectorPillCloud industries={sectorIndustries} />
      </section>

      <section className="bg-Obsidian px-6 py-24 text-Alabaster sm:px-10 lg:px-12">
        <MotionDiv className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-Alabaster sm:text-5xl">
              Transparent Pricing for Scaling Brands.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-8 text-MutedSlate">
              Choose the package that fits your current empire-building stage.
            </p>
          </div>

          <PremiumPricing region={region} />
        </MotionDiv>
      </section>

      <section
        id="faq"
        className="bg-Obsidian px-6 py-24 text-Alabaster sm:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <MotionDiv className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-BrandGold">
              QUICK FAQ
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-Alabaster sm:text-5xl">
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
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center text-base font-black text-Alabaster transition-colors hover:text-BrandGold focus:outline-none focus:ring-4 focus:ring-BrandGold/20"
                >
                  View all FAQ →
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[linear-gradient(180deg,#080808_0%,#050505_100%)] px-6 py-16 text-Alabaster sm:px-10 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="border-b-[0.5px] border-ChampagneGold/20 pb-8 text-center">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              {commitmentPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-[0.5px] border-BrandGold/30 bg-BrandGold/10 px-5 text-xs font-black uppercase tracking-[0.14em] text-Alabaster/85 sm:w-auto"
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

          <div className="grid gap-8 border-b-[0.5px] border-ChampagneGold/20 pb-8 text-center lg:grid-cols-[1fr_1.4fr] lg:text-left">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-ChampagneGold">
                INTERNATIONAL PAGES
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-MutedSlate lg:max-w-sm">
                Explore regional pricing and local SEO positioning for the
                markets we serve.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              {internationalPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border-[0.5px] border-ChampagneGold/30 px-5 text-sm font-black text-Alabaster/85 transition-all hover:border-BrandGold hover:bg-BrandGold hover:text-black"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-b-[0.5px] border-ChampagneGold/20 py-8 text-center lg:flex-row">
            <p className="text-sm text-MutedSlate">
              © 2026 Empire Design &amp; Dev. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-3">
              {[
                { label: "Email", href: "mailto:petay081@gmail.com", icon: "email" },
                { label: "X", href: "https://x.com/Empire_WebDev", icon: "x" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/peteraderinto01/",
                  icon: "linkedin",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/digital_empire_dev?igsh=MWgxYnFpemh4Mm9sMg%3D%3D&utm_source=qr",
                  icon: "instagram",
                },
                {
                  label: "Behance",
                  href: "https://www.behance.net/peteraderinto01",
                  icon: "behance",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex size-11 items-center justify-center rounded-full border-[0.5px] border-ChampagneGold/25 text-Alabaster/75 transition-all hover:border-BrandGold hover:bg-BrandGold hover:text-black"
                >
                  <FooterIcon icon={social.icon} />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-bold">
              <a href="#contact" className="text-MutedSlate transition-colors hover:text-BrandGold">
                Get Quote
              </a>
              <a href="#" className="text-MutedSlate transition-colors hover:text-BrandGold">
                Privacy
              </a>
              <a href="#" className="text-MutedSlate transition-colors hover:text-BrandGold">
                Terms
              </a>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}
