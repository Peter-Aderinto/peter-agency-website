import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cookies, headers } from "next/headers";
import { ArrowDownToLine, CheckCircle2 } from "lucide-react";
import MotionDiv from "../components/motion-div";
import QuoteButton from "../components/QuoteButton";
import { defaultRegion, getRegionConfig, isRegionKey, type RegionKey } from "@/lib/regions";

async function getSelectedRegion(): Promise<RegionKey> {
  const requestHeaders = await headers();
  const headerRegion = requestHeaders.get("x-empire-region") ?? undefined;
  if (isRegionKey(headerRegion)) {
    return headerRegion;
  }

  const cookieStore = await cookies();
  const cookieRegion = cookieStore.get("region")?.value;
  if (isRegionKey(cookieRegion)) {
    return cookieRegion;
  }

  return defaultRegion;
}

export async function generateMetadata(): Promise<Metadata> {
  const selectedRegion = await getSelectedRegion();
  const region = getRegionConfig(selectedRegion);

  return {
    title: `About Empire | Website & E-commerce Developer for ${region.countryName}`,
    description: `Meet Empire, a website and e-commerce development studio architecting scalable digital systems for ${region.audienceName} with research-led strategy, UI/UX, Next.js, Shopify, and SEO.`,
  };
}

type StackItem = {
  name: string;
  logo: string;
  logoClassName?: string;
};

const stackItems: readonly StackItem[] = [
  { name: "React", logo: "/stack/react.svg" },
  {
    name: "Bubble io",
    logo: "/stack/bubble.svg",
    logoClassName: "h-7 w-20 object-contain sm:h-8 sm:w-24 md:h-9 md:w-28",
  },
  { name: "JavaScript", logo: "/stack/javascript.svg" },
  {
    name: "Framer",
    logo: "/stack/framer.svg",
    logoClassName: "h-7 w-20 object-contain sm:h-8 sm:w-24 md:h-9 md:w-28",
  },
  { name: "HTML", logo: "/stack/html5.svg" },
  { name: "CSS", logo: "/stack/css.svg" },
  { name: "Figma", logo: "/stack/figma.svg" },
  { name: "Shopify", logo: "/stack/shopify.svg" },
  { name: "Github", logo: "/stack/github.svg" },
  { name: "Wordpress", logo: "/stack/wordpress.svg" },
  { name: "NextJs", logo: "/stack/nextjs.svg" },
  { name: "Typescript", logo: "/stack/typescript.svg" },
] as const;

function FramedImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-BrandGold/35 bg-white/5 shadow-[0_22px_60px_rgba(0,0,0,0.16)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 520px, (min-width: 640px) 70vw, 92vw"
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}

export default async function AboutPage() {
  const selectedRegion = await getSelectedRegion();
  const region = getRegionConfig(selectedRegion);

  return (
    <main className="min-h-screen overflow-x-hidden bg-Obsidian font-sans text-Alabaster">
      <section className="px-4 py-10 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <MotionDiv className="mx-auto grid max-w-6xl items-center gap-8 border border-BrandGold/45 bg-black px-5 py-9 text-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:gap-12 sm:px-10 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-16">
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-BrandGold sm:text-xs sm:tracking-[0.22em]">
              Lead Website Developer for {region.countryName}
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Web projects can be messy. We make them simple.
            </h1>
            <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-white/78 sm:mt-6 sm:text-lg sm:leading-8">
              We help ambitious brands build scalable websites and systems that
              convert today and compound over time. Whether you are a local
              business in {region.countryName} or a global brand, we tailor every line of
              code to help you increase visibility and make more sales.
            </p>
            <div className="mt-7 flex max-w-xl items-start gap-3 border-l-2 border-BrandGold pl-4 text-xs font-black uppercase leading-6 tracking-[0.08em] text-BrandGold sm:mt-8 sm:items-center sm:text-sm sm:tracking-[0.12em]">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 sm:mt-0" aria-hidden="true" />
              50+ Completed Projects Across {region.countryName}, UK, and USA.
            </div>
          </div>

          <FramedImage
            src="/my-picture.jpeg"
            alt={`Empire, lead website developer for ${region.countryName}`}
            priority
            className="aspect-[4/3] min-h-52 rounded-xl border-2 bg-SoftCream/5 sm:min-h-72"
            imageClassName="object-top"
          />
        </MotionDiv>
      </section>

      <section className="px-4 py-10 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <MotionDiv className="mx-auto grid max-w-6xl items-center gap-8 border border-BrandGold/45 bg-black px-5 py-9 text-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:gap-12 sm:px-10 sm:py-12 lg:grid-cols-[0.9fr_1fr] lg:px-14 lg:py-16">
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-BrandGold sm:text-xs sm:tracking-[0.22em]">
              Who We Are
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-5xl">
              We build digital systems for brands ready to scale.
            </h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-white/76 sm:mt-6 sm:text-base sm:leading-8">
              Empire is a website development agency for {region.audienceName} built for
              founders, Shopify brands, and organizations that need more than a
              beautiful screen. Our work connects research, conversion strategy,
              and resilient engineering into one operating system for growth.
            </p>
            <p className="mt-6 text-xl font-black text-BrandGold">
              100+ Completed Projects
            </p>
          </div>

          <FramedImage
            src="/who-are-we.jpg"
            alt="Team workspace representing who we are"
            className="aspect-[16/10] min-h-48 sm:min-h-64"
          />
        </MotionDiv>
      </section>

      <section className="px-4 py-10 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <MotionDiv className="mx-auto max-w-6xl border border-BrandGold/45 bg-black px-5 py-9 text-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-BrandGold sm:text-xs sm:tracking-[0.22em]">
              Mission & Vision
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-black leading-tight sm:text-5xl">
              Purpose-led engineering for ambitious brands.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:gap-6">
            <article className="rounded-lg bg-white/[0.06] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)] sm:p-8">
              <h3 className="text-xl font-black text-BrandGold sm:text-2xl">
                Our Mission
              </h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/78 sm:text-base">
                Merging data-driven research with elite functionality to deliver
                web solutions that make a lasting impact.
              </p>
            </article>

            <article className="rounded-lg bg-white/[0.06] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)] sm:p-8">
              <h3 className="text-xl font-black text-BrandGold sm:text-2xl">
                Our Vision
              </h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/78 sm:text-base">
                To become a leading force in digital transformation for
                {` ${region.audienceName} `}by redefining brand-audience
                connections through innovative technology.
              </p>
            </article>
          </div>

          <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_18%_8%,rgba(212,175,55,0.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_50%_92%,rgba(212,175,55,0.11),transparent_34%),linear-gradient(135deg,#080808_0%,#0d0902_42%,#080808_68%,#141006_100%)] px-4 py-10 text-Obsidian shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:px-10 sm:py-12 lg:px-12">
            <h2 className="text-center text-2xl font-black text-BrandGold sm:text-3xl">
              Our Stack
            </h2>
            <div className="mx-auto mt-7 w-full overflow-hidden md:overflow-visible">
              <div className="stack-mobile-marquee flex w-max gap-3 md:mx-auto md:grid md:w-auto md:max-w-5xl md:grid-cols-4 md:gap-5 lg:gap-6">
                {[...stackItems, ...stackItems].map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className={`flex h-24 w-28 shrink-0 flex-col items-center justify-center bg-white px-3 py-4 text-center shadow-[0_14px_30px_rgba(0,0,0,0.14)] ring-1 ring-black/5 sm:h-28 sm:w-36 md:h-32 md:w-auto md:px-4 md:py-5 ${index >= stackItems.length ? "md:hidden" : ""}`}
                    aria-hidden={index >= stackItems.length ? "true" : undefined}
                  >
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={192}
                      height={72}
                      className={item.logoClassName ?? "h-9 w-9 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12"}
                    />
                    <p className="mt-2 text-[11px] font-black leading-tight text-Obsidian sm:text-xs md:text-sm">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      <section className="px-4 pb-12 text-center sm:px-10 sm:pb-20 lg:px-12">
        <MotionDiv>
          <Link
            href="/Empire%20Resume.pdf"
            className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-BrandGold px-7 text-sm font-black text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25 sm:w-auto"
          >
            <ArrowDownToLine className="size-4" aria-hidden="true" />
            Download CV
          </Link>
        </MotionDiv>
      </section>

      <section className="bg-Obsidian px-4 py-14 text-center sm:px-10 sm:py-20 lg:px-12">
        <MotionDiv className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black leading-tight text-Alabaster sm:text-5xl">
            Let&apos;s Build Something Great For You
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-MutedSlate sm:text-base sm:leading-8">
            Whether you need a website, brand, tech strategy, or personal
            launch, we&apos;re here to build a digital experience that works for
            you.
          </p>
          <QuoteButton
            label="Let's Build Something Great For You"
            className="mt-8 inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-full bg-BrandGold px-5 text-center text-sm font-black text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25 sm:w-auto sm:px-8 sm:text-base"
            initialService="Web Design Nigeria"
          />
        </MotionDiv>
      </section>
    </main>
  );
}
