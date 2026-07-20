"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { regions, regionRoutes, type RegionKey } from "@/lib/regions";

const footerRegions: RegionKey[] = [
  "canada",
  "uk",
  "usa",
  "australia",
  "europe",
  "nigeria",
  "global",
];

const buttonLabels: Record<RegionKey, string> = {
  nigeria: "Africa",
  canada: "Canada",
  usa: "USA",
  uk: "UK",
  australia: "Australia",
  europe: "Europe",
  global: "Global",
};

type RegionSwitcherProps = {
  activeRegion: RegionKey;
};

export default function RegionSwitcher({ activeRegion }: RegionSwitcherProps) {
  const router = useRouter();
  const [pendingRegion, setPendingRegion] = useState<RegionKey | null>(null);

  useEffect(() => {
    if (!pendingRegion) {
      return;
    }

    const maxAge = 60 * 60 * 24 * 365;
    const route = regionRoutes[pendingRegion];

    document.cookie = `region=${pendingRegion}; path=/; max-age=${maxAge}; samesite=lax`;
    localStorage.setItem("region", pendingRegion);

    if (route === window.location.pathname) {
      router.refresh();
    } else {
      router.push(route);
    }
  }, [pendingRegion, router]);

  function selectRegion(region: RegionKey) {
    setPendingRegion(region);
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
      {footerRegions.map((region) => (
        <button
          key={region}
          type="button"
          onClick={() => selectRegion(region)}
          aria-pressed={activeRegion === region}
          className={`inline-flex min-h-11 items-center justify-center rounded-full border-[0.5px] px-5 text-sm font-black transition-all focus:outline-none focus:ring-4 focus:ring-BrandGold/20 ${
            activeRegion === region
              ? "border-BrandGold bg-BrandGold text-black"
              : "border-ChampagneGold/30 text-Alabaster/85 hover:border-BrandGold hover:bg-BrandGold hover:text-black"
          }`}
        >
          {buttonLabels[region] ?? regions[region].countryName}
        </button>
      ))}
    </div>
  );
}
