export type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  tools: readonly string[];
  link: string;
};

export const projects = [
  {
    id: "imanigifts-uk",
    title: "Imanigifts UK - E-commerce Architecture",
    image: "/portfolio/imanigifts-uk.svg",
    description:
      "Optimized user journey for a UK gift brand, increasing conversion via seamless funnels.",
    tools: ["Next.js", "Tailwind", "Stripe", "Vercel"],
    link: "https://imanigifts.co.uk",
  },
  {
    id: "luxe-marketplace",
    title: "Luxe Marketplace - Premium Retail Platform",
    image: "/portfolio/luxe-marketplace.svg",
    description:
      "Built a polished catalog and checkout flow for curated retail with faster product discovery.",
    tools: ["Shopify", "Liquid", "Klaviyo", "Paystack"],
    link: "https://example.com",
  },
  {
    id: "atlas-ops",
    title: "Atlas Ops - B2B Growth Dashboard",
    image: "/portfolio/atlas-ops.svg",
    description:
      "Designed a performance dashboard that turns operational data into clearer revenue decisions.",
    tools: ["React", "TypeScript", "Framer Motion", "Vercel"],
    link: "https://example.com",
  },
  {
    id: "nova-studio",
    title: "Nova Studio - Lead Generation System",
    image: "/portfolio/nova-studio.svg",
    description:
      "Reframed a service website into a high-intent funnel with stronger trust cues and lead capture.",
    tools: ["Next.js", "Tailwind", "Resend", "Analytics"],
    link: "https://example.com",
  },
] as const satisfies readonly Project[];
