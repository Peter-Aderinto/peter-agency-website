export const homepagePortfolioItems = [
  {
    title: "Shipping and Delivery Company",
    tag: "CORPORATE WEBSITE",
    description: "Shipping and delivery brand with tracking, competitive pricing, and top-tier customer service.",
    image: "/image1.png",
    link: "https://imanigifts.co.uk/",
  },
  {
    title: "Giftbox Website ",
    tag: "ECOMMERCE WEBSITE",
    description: "A Uk based gift brand, with the feature to curate your gift box.",
    image: "/image2.png",
    link: "https://empireexpressshipping.com/",
  },
  {
    title: "Clothing Fashion Website ",
    tag: "Ecommerce Website",
    description: " modern streetwear brand inspired by the culture, creativity, and ambition of today’s youth",
    image: "/image3.png",
    link: "https://blizzoutfits.com.ng/",
  },
  {
    title: "Period Care Brand",
    tag: "Custom Build Website",
    description: "Custom Build a Box, Subcription and Discount page",
    image: "/image4.png",
    link: "https://bambybammies.com/en/pages/build-a-box",
  },
] as const;

export const pricingPlans = [
  {
    tier: "standard",
    title: "Corporate Business Website",
    price: "₦150,000",
    badge: "Limited Time Offer",
    tags: ["Website Development in Nigeria", "SEO Optimized"],
    description: "Best for companies, professionals, and service-based businesses.",
    features: [
      "Up to 5 SEO-optimized pages for Website Development in Nigeria",
      "Custom brand styling & mobile-friendly design",
      "Contact forms & inquiry system",
      "Basic SEO & Google Maps integration",
      "7 days free post-launch support",
    ],
    initialService: "Corporate Business Website Package",
    recommended: false,
    cardClassName:
      "border-white/10 bg-[#111111] text-Alabaster shadow-[0_30px_90px_rgba(0,0,0,0.28)]",
    mutedClassName: "text-MutedSlate",
    priceClassName: "text-Alabaster",
    tagClassName: "border-white/10 bg-white/[0.06] text-Alabaster",
    checkClassName: "bg-BrandGold text-Obsidian",
    buttonClassName:
      "bg-white text-Obsidian hover:bg-Alabaster hover:shadow-[0_0_34px_rgba(255,255,255,0.18)] focus:ring-white/25",
  },
  {
    tier: "starter",
    title: "Ecommerce Starter",
    price: "₦280,000",
    badge: "Save 30%",
    tags: ["Website", "Ecommerce Setup"],
    description: "Best for new online stores and small e-commerce businesses.",
    features: [
      "Full custom website/Ecommerce setup",
      "Payment gateway & shipping integration",
      "Unlimited product structure",
      "Order & customer management system",
      "14 days free post-launch support",
    ],
    initialService: "Ecommerce Starter Package",
    recommended: true,
    cardClassName:
      "border-BrandGold bg-BrandGold text-Obsidian shadow-[0_34px_100px_rgba(212,175,55,0.24)] lg:-translate-y-4",
    mutedClassName: "text-black/70",
    priceClassName: "text-Obsidian",
    tagClassName: "border-black/10 bg-black/10 text-Obsidian",
    checkClassName: "bg-Obsidian text-BrandGold",
    buttonClassName:
      "bg-Obsidian text-Alabaster hover:bg-black hover:shadow-[0_0_34px_rgba(0,0,0,0.28)] focus:ring-black/25",
  },
  {
    tier: "growth",
    title: "Ecommerce Growth",
    price: "₦450,000",
    badge: "Limited Time Offer",
    tags: ["Website Growth", "Conversion Design"],
    description: "Ideal for growing businesses ready to scale online.",
    features: [
      "Everything in Ecommerce Starter",
      "Advanced UI/UX & conversion design for Website Development in Nigeria",
      "Product variations, filters & wishlist",
      "Email automation & marketing-ready blog",
      "3 weeks free post-launch support + Google Analytics",
    ],
    initialService: "Ecommerce Growth Package",
    recommended: false,
    cardClassName:
      "border-white bg-white text-Obsidian shadow-[0_34px_100px_rgba(255,255,255,0.12)]",
    mutedClassName: "text-black/62",
    priceClassName: "text-Obsidian",
    tagClassName: "border-black/10 bg-black/[0.06] text-Obsidian",
    checkClassName: "bg-BrandGold text-Obsidian",
    buttonClassName:
      "bg-Obsidian text-Alabaster hover:bg-black hover:shadow-[0_0_34px_rgba(0,0,0,0.2)] focus:ring-black/20",
  },
] as const;
