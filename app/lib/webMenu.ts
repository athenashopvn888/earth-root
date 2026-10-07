import { allFlowers, allItems, type FlowerProduct, type ItemProduct } from "./products";
import { STORE } from "./storeIdentity";
import { getTvData } from "./tvStock";

export interface WebMenuData {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  source: string;
  stockDate: string;
}

async function getPublicTvData<T>(type: "flowers" | "items"): Promise<{
  body: T[];
  source: string;
  stockDate: string;
}> {
  const response = await fetch(`${STORE.url}/api/tv-data?type=${type}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`TV data HTTP ${response.status}`);

  const body: unknown = await response.json();
  if (!Array.isArray(body) || body.length === 0) {
    throw new Error(`TV data returned no ${type}`);
  }

  return {
    body: body as T[],
    source: response.headers.get("x-tv-data-source") || "live",
    stockDate: response.headers.get("x-tv-data-as-of") || "",
  };
}

/**
 * Resolve the public web menu through the same store-scoped loader used by
 * /tv and /tv2. The shared loader owns live-feed validation, post-processing,
 * caching, and the safe static fallback.
 */
export async function getWebMenuData(): Promise<WebMenuData> {
  try {
    // Read through the same public resolver used by /tv and /tv2. This avoids
    // freezing a transient build-time fallback into an ISR page while keeping
    // the resolver's validation, post-processing, and safe fallback intact.
    const [flowersResult, itemsResult] = await Promise.all([
      getPublicTvData<FlowerProduct>("flowers"),
      getPublicTvData<ItemProduct>("items"),
    ]);

    return {
      flowers: flowersResult.body,
      items: itemsResult.body,
      source: flowersResult.source,
      stockDate: flowersResult.stockDate,
    };
  } catch (error) {
    console.warn(`[web-menu] Public TV resolver failed (${String(error)}); using direct resolver`);
  }

  const [flowersResult, itemsResult] = await Promise.all([
    getTvData({ type: "flowers", staticFlowers: allFlowers, staticItems: allItems }),
    getTvData({ type: "items", staticFlowers: allFlowers, staticItems: allItems }),
  ]);

  return {
    flowers: flowersResult.body as FlowerProduct[],
    items: itemsResult.body as ItemProduct[],
    source: flowersResult.headers["x-tv-data-source"],
    stockDate: flowersResult.headers["x-tv-data-as-of"],
  };
}
