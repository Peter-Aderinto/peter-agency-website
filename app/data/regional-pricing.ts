import { regions, routeSlugToRegion, type RegionKey } from "@/lib/regions";

export const regionalRoutes = {
  us: {
    region: "usa",
    country: regions.usa.countryName,
    countryLabel: "USA",
    regionName: "USA",
  },
  uk: {
    region: "uk",
    country: regions.uk.countryName,
    countryLabel: "UK",
    regionName: "UK",
  },
  ca: {
    region: "canada",
    country: regions.canada.countryName,
    countryLabel: "Canada",
    regionName: "Canada",
  },
  au: {
    region: "australia",
    country: regions.australia.countryName,
    countryLabel: "Australia",
    regionName: "Australia",
  },
  eu: {
    region: "europe",
    country: regions.europe.countryName,
    countryLabel: "Europe",
    regionName: "Europe",
  },
} as const satisfies Record<
  keyof typeof routeSlugToRegion,
  {
    region: RegionKey;
    country: string;
    countryLabel: string;
    regionName: string;
  }
>;

export type PricingRegion = keyof typeof regionalRoutes;

type PricingTier = "standard" | "starter" | "growth";

export const RegionalPricing: Record<
  RegionKey,
  Record<PricingTier, string>
> = {
  nigeria: regions.nigeria.pricing,
  canada: regions.canada.pricing,
  usa: regions.usa.pricing,
  uk: regions.uk.pricing,
  australia: regions.australia.pricing,
  europe: regions.europe.pricing,
  global: regions.global.pricing,
};

export const nigeriaPricing: Record<PricingTier, string> = {
  ...regions.nigeria.pricing,
};

export function isPricingRegion(region: string): region is PricingRegion {
  return region in regionalRoutes;
}

export function getRouteRegion(region: PricingRegion): RegionKey {
  return regionalRoutes[region].region;
}
