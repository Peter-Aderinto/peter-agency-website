import Image from "next/image";

const locations = [
  "United States",
  "United Kingdom",
  "Canada",
  "Nigeria",
  "United Arab Emirates",
  "Sweden",
  "and among others",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-SteelGrey">
      <nav className="sticky top-0 z-50 border-b border-SteelGrey/10 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
          <a href="#" className="relative block h-16 w-48">
            <Image
              src="/1-logo.png"
              alt="Empire logo"
              fill
              priority
              sizes="192px"
              className="object-contain object-left"
            />
          </a>

          <div className="hidden items-center gap-10 text-base font-semibold text-SteelGrey/85 md:flex">
            <a href="#services" className="transition-colors hover:text-BrandGold">
              Services
            </a>
            <a href="#process" className="transition-colors hover:text-BrandGold">
              Process
            </a>
            <a href="#contact" className="transition-colors hover:text-BrandGold">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-BrandGold px-5 text-sm font-bold text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25 sm:px-7 sm:text-base"
          >
            Get Free Quote
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-SoftCream">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1500px] items-start gap-12 px-6 pb-28 pt-20 sm:px-10 sm:pb-32 sm:pt-24 lg:grid-cols-[60%_40%] lg:gap-10 lg:px-12 lg:pb-40 lg:pt-20 xl:gap-14">
          <div className="max-w-3xl text-left lg:pt-28">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.24em] text-BrandGold sm:text-sm">
              Premium Industrial Commerce
            </p>

            <h1 className="text-5xl font-black leading-[1.04] text-SteelGrey sm:text-6xl lg:text-7xl">
              Empire E-commerce{" "}
              <span className="text-BrandGold">Design &amp; Dev</span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl font-medium leading-9 text-SteelGrey/80 sm:text-2xl sm:leading-10">
              We build high-performance Shopify infrastructures for the next
              generation of Nigerian commerce.
            </p>

            <ul className="mt-9 flex flex-col gap-4 text-base font-semibold text-SteelGrey/85 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7">
              <li className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-BrandGold text-xs font-black text-white">
                  ✓
                </span>
                50+ Businesses Served
              </li>
              <li className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-BrandGold text-xs font-black text-white">
                  ✓
                </span>
                24/7 Support
              </li>
              <li className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-BrandGold text-xs font-black text-white">
                  ✓
                </span>
                Built for Shopify Growth
              </li>
            </ul>

            <div className="mt-14 flex w-full flex-col gap-6 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex h-[84px] w-full items-center justify-center rounded-full bg-BrandGold px-7 text-center text-base font-bold leading-none text-white transition-colors hover:bg-BrandGold/90 focus:outline-none focus:ring-4 focus:ring-BrandGold/25 sm:w-[542px] sm:px-12 sm:text-[20px]"
              >
                <span className="whitespace-nowrap">Claim Your Growth Strategy</span>
                <span className="ml-3 text-[24px] leading-none">→</span>
                <svg
                  className="ml-3 size-6 text-red-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.54 4.46c-2.2-.34-5.22.55-7.78 3.11L9.9 9.43 6.7 9.2a1.6 1.6 0 0 0-1.25.47l-2.98 2.98a.75.75 0 0 0 .42 1.27l3.65.62 2.92 2.92.62 3.65a.75.75 0 0 0 1.27.42l2.98-2.98c.34-.34.51-.8.47-1.25l-.23-3.2 1.86-1.86c2.56-2.56 3.45-5.58 3.11-7.78ZM15.5 9.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM5.8 16.77c.54.54.54 1.42 0 1.96-.78.78-3.22 1.27-3.22 1.27s.49-2.44 1.27-3.22c.54-.55 1.42-.55 1.95-.01Z" />
                </svg>
              </a>

              <a
                href="#services"
                className="inline-flex h-[84px] w-full items-center justify-center rounded-full border-[3px] border-BrandGold/45 px-8 text-center text-base font-bold leading-none text-BrandGold transition-colors hover:bg-BrandGold hover:text-white focus:outline-none focus:ring-4 focus:ring-BrandGold/15 sm:w-[268px] sm:px-10 sm:text-[20px]"
              >
                View services
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl self-start lg:max-w-none lg:pt-28">
            <div className="relative min-h-[620px] overflow-visible px-3 pb-8 pt-5 sm:px-7 lg:min-h-[620px] lg:px-0">
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
                className="h-[560px] w-full rounded-2xl object-cover object-center sm:h-[620px] lg:h-[600px]"
              />

              <div className="absolute bottom-0 right-0 z-10 flex min-h-12 items-center gap-3 rounded-xl border border-white/20 bg-SteelGrey/70 px-4 text-sm font-black text-white backdrop-blur-md sm:min-h-14 sm:px-5 sm:text-base lg:bottom-0 lg:right-0 lg:min-h-14 lg:px-5 lg:text-base">
                <span className="tracking-[0.08em] text-yellow-400">★★★★★</span>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

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
        className="border-b border-SteelGrey/10 bg-white px-6 pb-28 pt-24 sm:px-10 sm:pb-32 sm:pt-36 lg:px-12 lg:pb-36 lg:pt-40"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-SteelGrey/75 sm:text-sm">
            SERVING AMBITIOUS BUSINESSES GLOBALLY
          </p>

          <ul className="mx-auto mt-4 flex max-w-5xl flex-wrap items-center justify-center gap-3 sm:mt-5 sm:gap-x-4 sm:gap-y-4">
            {locations.map((location) => (
              <li key={location}>
                <span className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-zinc-100 px-4 text-sm font-medium text-SteelGrey sm:h-12 sm:px-5 sm:text-xl">
                  <svg
                    className="size-4 shrink-0 text-red-600 sm:size-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2.25A7.25 7.25 0 0 0 4.75 9.5c0 5.44 6.42 11.64 6.7 11.9a.8.8 0 0 0 1.1 0c.28-.26 6.7-6.46 6.7-11.9A7.25 7.25 0 0 0 12 2.25Zm0 10.25a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  {location}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
