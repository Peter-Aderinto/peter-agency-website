export const regionalRoutes = {
  us: {
    country: "United States",
    countryLabel: "USA",
    regionName: "USA",
  },
  uk: {
    country: "United Kingdom",
    countryLabel: "UK",
    regionName: "UK",
  },
  ca: {
    country: "Canada",
    countryLabel: "Canada",
    regionName: "Canada",
  },
  au: {
    country: "Australia",
    countryLabel: "Australia",
    regionName: "Australia",
  },
  eu: {
    country: "Europe",
    countryLabel: "Europe",
    regionName: "Europe",
  },
} as const;

export type PricingRegion = keyof typeof regionalRoutes;

type PricingTier = "standard" | "starter" | "growth";

export const RegionalPricing: Record<
  PricingRegion,
  Record<PricingTier, string>
> = {
  us: {
    standard: "$120",
    starter: "$220",
    growth: "$350",
  },
  uk: {
    standard: "£95",
    starter: "£175",
    growth: "£280",
  },
  ca: {
    standard: "C$165",
    starter: "C$305",
    growth: "C$490",
  },
  au: {
    standard: "A$185",
    starter: "A$345",
    growth: "A$555",
  },
  eu: {
    standard: "€110",
    starter: "€205",
    growth: "€330",
  },
};

export const nigeriaPricing: Record<PricingTier, string> = {
  standard: "₦150,000",
  starter: "₦280,000",
  growth: "₦450,000",
};

export function isPricingRegion(region: string): region is PricingRegion {
  return region in regionalRoutes;
}
