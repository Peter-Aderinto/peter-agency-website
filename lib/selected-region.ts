import "server-only";

import { cookies, headers } from "next/headers";
import {
  defaultRegion,
  getRegionConfig,
  isRegionKey,
  type RegionKey,
} from "./regions";

export async function getSelectedRegion(
  override?: RegionKey,
): Promise<RegionKey> {
  if (override) return override;

  const requestHeaders = await headers();
  const headerRegion = requestHeaders.get("x-empire-region") ?? undefined;
  if (isRegionKey(headerRegion)) return headerRegion;

  const cookieRegion = (await cookies()).get("region")?.value;
  if (isRegionKey(cookieRegion)) return cookieRegion;

  return defaultRegion;
}

export async function getSelectedRegionConfig(override?: RegionKey) {
  return getRegionConfig(await getSelectedRegion(override));
}
