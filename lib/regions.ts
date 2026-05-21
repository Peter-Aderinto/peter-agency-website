export const regions = {
  nigeria: {
    countryName: "Nigeria",
    audienceName: "Nigerian businesses",
    heroKeyword: "Website Developer in Nigeria",
    seoTitle: "Website Developer in Nigeria | The Empire Growth",
    seoDescription:
      "Premium website development and Shopify design for Nigerian businesses.",
    currency: "NGN",
    pricing: {
      standard: "₦100,000",
      starter: "₦280,000",
      growth: "₦450,000",
    },
  },
  canada: {
    countryName: "Canada",
    audienceName: "Canadian businesses",
    heroKeyword: "Website Developer in Canada",
    seoTitle: "Website Developer in Canada | The Empire Growth",
    seoDescription:
      "Premium website development and Shopify design for Canadian businesses.",
    currency: "CAD",
    pricing: {
      standard: "C$165",
      starter: "C$305",
      growth: "C$490",
    },
  },
  usa: {
    countryName: "USA",
    audienceName: "US businesses",
    heroKeyword: "Website Developer in USA",
    seoTitle: "Website Developer in USA | The Empire Growth",
    seoDescription:
      "Premium website development and Shopify design for US businesses.",
    currency: "USD",
    pricing: {
      standard: "$120",
      starter: "$220",
      growth: "$350",
    },
  },
  uk: {
    countryName: "UK",
    audienceName: "UK businesses",
    heroKeyword: "Website Developer in the UK",
    seoTitle: "Website Developer in the UK | The Empire Growth",
    seoDescription:
      "Premium website development and Shopify design for UK businesses.",
    currency: "GBP",
    pricing: {
      standard: "£95",
      starter: "£175",
      growth: "£280",
    },
  },
  australia: {
    countryName: "Australia",
    audienceName: "Australian businesses",
    heroKeyword: "Website Developer in Australia",
    seoTitle: "Website Developer in Australia | The Empire Growth",
    seoDescription:
      "Premium website development and Shopify design for Australian businesses.",
    currency: "AUD",
    pricing: {
      standard: "A$185",
      starter: "A$345",
      growth: "A$555",
    },
  },
  europe: {
    countryName: "Europe",
    audienceName: "European businesses",
    heroKeyword: "Website Developer in Europe",
    seoTitle: "Website Developer in Europe | The Empire Growth",
    seoDescription:
      "Premium website development and Shopify design for European businesses.",
    currency: "EUR",
    pricing: {
      standard: "€110",
      starter: "€205",
      growth: "€330",
    },
  },
  global: {
    countryName: "International",
    audienceName: "growth-focused brands worldwide",
    heroKeyword: "Website Developer for Growth-Focused Brands",
    seoTitle: "Website Development & Shopify Design | The Empire Growth",
    seoDescription:
      "Premium website development and Shopify design for growth-focused brands worldwide.",
    currency: "USD",
    pricing: {
      standard: "$120",
      starter: "$220",
      growth: "$350",
    },
  },
} as const;

export type RegionKey = keyof typeof regions;
export type PricingTier = keyof (typeof regions)["nigeria"]["pricing"];

export const countryToRegion: Record<string, RegionKey> = {
  CA: "canada",
  US: "usa",
  GB: "uk",
  AU: "australia",
  NG: "nigeria",
};

export const regionRoutes = {
  usa: "/us",
  uk: "/uk",
  canada: "/ca",
  australia: "/au",
  europe: "/eu",
  nigeria: "/",
  global: "/",
} as const satisfies Record<RegionKey, string>;

export const routeSlugToRegion = {
  us: "usa",
  uk: "uk",
  ca: "canada",
  au: "australia",
  eu: "europe",
} as const;

export const defaultRegion: RegionKey = "global";

export function isRegionKey(region: string | undefined): region is RegionKey {
  return Boolean(region && region in regions);
}

export function mapCountryToRegion(countryCode: string | undefined): RegionKey {
  if (!countryCode) {
    return defaultRegion;
  }

  return countryToRegion[countryCode.toUpperCase()] ?? defaultRegion;
}

export function getRegionConfig(region: RegionKey) {
  return regions[region];
}
