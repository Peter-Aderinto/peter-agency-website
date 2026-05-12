import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioPage from "../../portfolio/page";
import {
  isPricingRegion,
  regionalRoutes,
  type PricingRegion,
} from "../../data/regional-pricing";

type RegionalPortfolioPageProps = {
  params: Promise<{
    region: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(regionalRoutes).map((region) => ({ region }));
}

export async function generateMetadata({
  params,
}: RegionalPortfolioPageProps): Promise<Metadata> {
  const { region } = await params;

  if (!isPricingRegion(region)) {
    return {};
  }

  const country = regionalRoutes[region].country;

  return {
    title: `Website Design Portfolio in ${country} | Empire`,
    description: `Website design portfolio examples for ${country} businesses that want ecommerce, corporate, and service-business websites with proof.`,
  };
}

export default async function RegionalPortfolioPage({
  params,
}: RegionalPortfolioPageProps) {
  const { region } = await params;

  if (!isPricingRegion(region)) {
    notFound();
  }

  return <PortfolioPage region={region as PricingRegion} />;
}
