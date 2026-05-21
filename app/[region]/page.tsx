import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "../page";
import {
  getRouteRegion,
  isPricingRegion,
  regionalRoutes,
} from "../data/regional-pricing";

type RegionalPageProps = {
  params: Promise<{
    region: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(regionalRoutes).map((region) => ({ region }));
}

export async function generateMetadata({
  params,
}: RegionalPageProps): Promise<Metadata> {
  const { region } = await params;

  if (!isPricingRegion(region)) {
    return {};
  }

  const country = regionalRoutes[region].country;

  return {
    title: `Best Website Developer in ${country} | Empire`,
    description: `Shopify Expert serving ${country} businesses with SEO-ready websites, e-commerce development, and conversion-focused digital systems.`,
  };
}

export default async function RegionalPage({ params }: RegionalPageProps) {
  const { region } = await params;

  if (!isPricingRegion(region)) {
    notFound();
  }

  return <Home region={getRouteRegion(region)} />;
}
