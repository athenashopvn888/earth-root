import type { Nap, ResolvedBanner, ResolvedPage } from "./types.ts";

/**
 * The only store-specific fleet file. Other stores replace this module
 * and leave the rest of app/lib/fleet and app/components/fleet as-is.
 */
export const FLEET_STORE_CODE = "ERC01";
export const FLEET_STORE_NAME = "EarthRoot Cannabis";
export const FLEET_AREA = "Etobicoke";
export const FLEET_DOMAIN = "www.earthrootcannabis.ca";
export const FLEET_DOMAINS = ["www.earthrootcannabis.ca", "earthrootcannabis.ca"] as const;
export const FLEET_ORIGIN = "https://www.earthrootcannabis.ca";

/** Public blob origin. Objects live at /{storeCode}/manifest.json and /{storeCode}/articles/. */
export const FLEET_BLOB_ORIGIN = "https://dhaah0upvlpukv56.public.blob.vercel-storage.com";

export const FLEET_COLORS = {
  banner: "#111827",
  bannerText: "#ffffff",
} as const;

/** Digits or formatted numbers. An article containing any of these is dropped. */
export const FLEET_BLOCKED_PHONES: readonly string[] = [];

export const FLEET_ARTICLES_PATH = "/articles";

/** Page and spot names for the six TV2 category cards. Spot is the card name. */
export const TV2_PAGE = "TV2";
export const TV2_CARDS = [
  "PREROLLS_ADDONS",
  "VAPES",
  "EDIBLES",
  "CONCENTRATES",
  "CIGARETTES",
  "MAGIC",
] as const;

export const TV_PAGE = "TV";
export const TV_FULLSCREEN_SPOTS = [
  "Fullscreen promo 1",
  "Fullscreen promo 2",
  "Fullscreen promo 3",
] as const;

/** Fort York Cannabis takeover defaults: 5s on screen, once a minute, 5s first preview, 650ms slide. */
export const TV_PROMO_SHOW_SECONDS = 5;
export const TV_PROMO_EVERY_MINUTES = 1;
export const TV_PROMO_INITIAL_DELAY_MS = 5_000;
export const TV_PROMO_SLIDE_MS = 650;

export function defaultManifestUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/manifest.json`;
}

export function articlesIndexUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/index.json`;
}

export function articleBodyUrl(slug: string, storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/${encodeURIComponent(slug)}.json`;
}

export const CODED_NAP: Nap = {
  name: "EarthRoot Cannabis",
  street: "5120 Dundas St W",
  city: "Etobicoke",
  province: "ON",
  postalCode: "M9A 1C2",
  cityLine: "Etobicoke, ON M9A 1C2",
  area: "Etobicoke",
  intersection: "Dundas St W & Kipling Ave",
  areaLine: "Dundas St W & Kipling Ave, Etobicoke",
  phoneDisplay: "+1 437 523 4850",
  phoneTel: "+14375234850",
  hours: "Open 24 Hours",
  mapsSearchUrl: "https://maps.google.com/?q=5120+Dundas+St+W,+Etobicoke,+ON+M9A+1C2",
  mapsEmbedUrl: "https://maps.google.com/maps?q=5120+Dundas+St+W,+Etobicoke,+ON+M9A+1C2&hl=en&z=16&output=embed",
  lat: "43.6445218",
  lng: "-79.5331309",
  schemaName: "Earthroot Cannabis Dispensary Weed Delivery",
  website: "https://www.earthrootcannabis.ca",
};

export const CODED_BANNERS: ResolvedBanner[] = [
  {
    id: "weed",
    page: "Home",
    spot: "Top banner",
    href: "/exotic-weed",
    categoryName: "Exotic Weed",
    hidden: false,
    render: "image",
    image: "/banners/top-weed-tier-erc01.webp",
    codedImage: "/banners/top-weed-tier-erc01.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — Exotic, Premium and AAA+ top weed tiers`,
    title: `${FLEET_STORE_NAME} top weed tiers — Exotic, Premium and AAA+`,
    textBar: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
    caption: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
  },
  {
    id: "vapes",
    page: "Home",
    spot: "Promo banner 2",
    href: "/items/vapes",
    categoryName: "Nicotine Vapes",
    hidden: false,
    render: "image",
    image: "/banners/core-vapes-nicotine-thc.webp",
    codedImage: "/banners/core-vapes-nicotine-thc.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — nicotine vapes and THC vapes`,
    title: `${FLEET_STORE_NAME} nicotine vapes and THC vapes`,
    textBar: "Nicotine + THC vapes",
    caption: "Nicotine + THC vapes",
  },
  {
    id: "cigarettes",
    page: "Home",
    spot: "Promo banner 3",
    href: "/items/cigarettes",
    categoryName: "Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/native-cigarette-offer-20260822.webp",
    codedImage: "/banners/native-cigarette-offer-20260822.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — 2 packs for $5 mix and match and $25 carton cigarette offer`,
    title: `${FLEET_STORE_NAME} cigarette offer — 2 packs $5 mix and match, $25 carton`,
    textBar: "2 PACKS $5 / $25 CARTON",
    caption: "2 PACKS $5 / $25 CARTON",
  },
  {
    id: "premium-cigarettes",
    page: "Home",
    spot: "Promo banner 4",
    href: "/items/cigarettes",
    categoryName: "Premium Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-premium-bb-marlboro-belmont.webp",
    codedImage: "/banners/core-premium-bb-marlboro-belmont.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — BB Full Flavor and Lights, Marlboro and Belmont premium cigarettes`,
    title: `${FLEET_STORE_NAME} premium cigarettes — BB, Marlboro and Belmont`,
    textBar: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
    caption: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
  },
];

export const CODED_PAGES: Record<string, ResolvedPage> = {
  Home: {
    description: "Open 24 hours, 7 days a week. Visit EarthRoot Cannabis at 5120 Dundas St W in Etobicoke, near Dundas, Kipling, and Islington. Adults 19+.",
    metaTitle: "",
    metaDescription: "Open 24 hours, 7 days a week. Visit EarthRoot Cannabis at 5120 Dundas St W in Etobicoke, near Dundas, Kipling, and Islington. Adults 19+.",
  },
  Contact: {
    description: "Visit EarthRoot Cannabis at 5120 Dundas St W, Etobicoke, ON M9A 1C2, on Dundas Street West near Kipling and Islington. Open 24 Hours. Adults 19+. Call +1 437 523 4850.",
    metaTitle: "Contact EarthRoot Cannabis | 5120 Dundas St W, Etobicoke",
    metaDescription: "Visit EarthRoot Cannabis at 5120 Dundas St W, Etobicoke, ON M9A 1C2, on Dundas Street West near Kipling and Islington. Open 24 Hours. Adults 19+. Call +1 437 523 4850.",
  },
};
