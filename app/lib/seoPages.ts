export interface SeoPageData {
  slug: string;
  title: string;
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  heroProducts?: readonly { name: string; image: string; sourceSlug?: string }[];
  heroDisclosure?: string;
  heroTheme?: "cigarettes" | "nicotine";
  heroEyebrow?: string;
  heroIntro?: string;
  heroMenuHref?: string;
  heroPrimaryLabel?: string;
  heroSecondaryLabel?: string;
  heroSecondaryHref?: string;
  identityStrip?: string;
  featuredHeading?: string;
  featuredIntro?: string;
  warning?: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "etobicoke-weed-dispensary",
    title: "EarthRoot Cannabis Weed Dispensary in Etobicoke",
    metaDescription:
      "EarthRoot Cannabis is a local cannabis dispensary in Etobicoke around Dundas St W and Islington, with shopper resources for flower, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes.",
    h1: "EarthRoot Cannabis Weed Dispensary in Etobicoke",
    icon: "*",
    heroTagline: "Menu shopping around Dundas St W and Islington",
    sections: [
      {
        heading: "Shop EarthRoot Cannabis With A Plan",
        body: "EarthRoot Cannabis helps adult shoppers review the menu by category. Start with the store page, then choose the section that matches the visit: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes where listed.",
      },
      {
        heading: "Local Notes For Dundas St W and Islington",
        body: "If you searched for a cannabis dispensary near Islington, use this page to confirm the local store, product categories, and current menu details.",
      },
      {
        heading: "What To Check Before Visiting",
        body: "Confirm the current menu, directions, contact options, and listed hours. For current product names, prices, and package details, use the menu or ask staff before leaving.",
      },
    ],
    faqs: [
      {
        q: "Is EarthRoot Cannabis a local cannabis dispensary?",
        a: "Yes. EarthRoot Cannabis serves adult shoppers in Etobicoke around Dundas St W and Islington. Use the store page for directions, contact details, and listed hours.",
      },
      {
        q: "What should I check before visiting EarthRoot Cannabis?",
        a: "Check the current menu, category pages, directions, and contact details before visiting. Product details can change.",
      },
      {
        q: "Does the site show current product categories?",
        a: "The site includes menu categories for flower tiers, pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes where listed.",
      },
    ],
  },
  {
    slug: "cheap-weed-etobicoke",
    title: "EarthRoot Cannabis Cheap Weed and Budget Weed Guide",
    metaDescription:
      "A value-minded guide for comparing cheap weed, budget weed, affordable weed, and flower tiers at EarthRoot Cannabis.",
    h1: "EarthRoot Cannabis Cheap Weed and Budget Weed Guide",
    icon: "*",
    heroTagline: "Value shopping with clear menu categories",
    sections: [
      {
        heading: "Start With Budget And AA",
        body: "If affordable weed is the mission, start with the Budget and AA flower lanes before jumping around the rest of the menu.",
      },
      {
        heading: "Compare The Current Menu",
        body: "Look at product name, format, weight, posted price, and item details. Menus change, so use this page for the method and the live menu for current details.",
      },
      {
        heading: "Know When To Move Up",
        body: "If Budget or AA does not fit the visit, compare AAA+, Premium, or Exotic flower next. A clearer tier decision starts with the category and current menu details.",
      },
    ],
    faqs: [
      {
        q: "How should shoppers compare value flower?",
        a: "Start with Budget and AA, then compare current product name, format, weight, posted price, and item details.",
      },
      {
        q: "Does this page guarantee current menu options?",
        a: "No. Use this page as a shopping guide and confirm the current menu before visiting.",
      },
    ],
  },
  {
    slug: "native-cigarettes-etobicoke",
    title: "EarthRoot Cannabis Native Cigarettes Guide",
    metaDescription:
      "A shopper-friendly Native cigarettes guide for EarthRoot Cannabis, with cigarette category notes where listed.",
    h1: "EarthRoot Cannabis Native Cigarettes Guide",
    icon: "*",
    heroTagline: "Cigarette category notes for local shoppers",
    heroProducts: [
      { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
      { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
      { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
      { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
      { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
      { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
    ],
    heroDisclosure: "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.",
    sections: [
      {
        heading: "Use The Cigarette Category First",
        body: "If cigarettes are part of the stop, start with the cigarette category and compare the current listings before visiting.",
      },
      {
        heading: "Confirm Current Brands",
        body: "Brand names, carton notes, and pricing can change. Treat this page as a guide and confirm current options from the menu or staff.",
      },
      {
        heading: "Keep The Visit Local",
        body: "This guide is connected to EarthRoot Cannabis around Dundas St W and Islington, so shoppers do not land on copied pages for another market.",
      },
    ],
    faqs: [
      {
        q: "Does EarthRoot Cannabis list Native cigarettes?",
        a: "The site includes a cigarette category where listed. Confirm current brands and pricing before visiting.",
      },
      {
        q: "Can cigarette selection change?",
        a: "Yes. Brand names and carton notes can change, so use the current menu or ask staff for current details.",
      },
    ],
  },
  {
    slug: "weed-store-near-dundas-st-w-islington-etobicoke",
    title: "EarthRoot Cannabis Weed Store Near Islington",
    metaDescription:
      "EarthRoot Cannabis local guide for adults searching for a weed store near Islington.",
    h1: "EarthRoot Cannabis Weed Store Near Islington",
    icon: "*",
    heroTagline: "Local guide around Islington",
    sections: [
      {
        heading: "Near Islington",
        body: "EarthRoot Cannabis is tied to the local Dundas St W and Islington shopping area. Use this page when comparing nearby cannabis menu options and store details.",
      },
      {
        heading: "Avoid Stale City Pages",
        body: "The page is written for this local store identity and does not reuse unrelated city copy.",
      },
      {
        heading: "Check Before You Go",
        body: "Open the current menu, confirm directions, and use the contact details if a product or category detail matters before the visit.",
      },
    ],
    faqs: [
      {
        q: "Is this page focused on Islington?",
        a: "Yes. This page focuses on EarthRoot Cannabis around Dundas St W and Islington.",
      },
      {
        q: "What is the best next step?",
        a: "Open the current menu or store page, then confirm directions and contact details before heading over.",
      },
    ],
  },
  {
    slug: "dispensary-near-me-etobicoke",
    title: "EarthRoot Cannabis Dispensary Near Me Guide",
    metaDescription:
      "EarthRoot Cannabis guide for adults using near-me searches around Dundas St W and Islington.",
    h1: "EarthRoot Cannabis Dispensary Near Me Guide",
    icon: "*",
    heroTagline: "A near-me page tied to the actual store",
    sections: [
      {
        heading: "A Local Near-Me Result",
        body: "EarthRoot Cannabis serves adults around Etobicoke, Dundas St W, and Islington with store details and menu-category links.",
      },
      {
        heading: "Use The Menu For Current Details",
        body: "Use the current menu or ask staff when product names, prices, or other details matter for the visit.",
      },
      {
        heading: "Keep The Route Simple",
        body: "Confirm directions, listed hours, and product category before heading over.",
      },
    ],
    faqs: [
      {
        q: "Is this page focused on Islington?",
        a: "Yes. This page focuses on EarthRoot Cannabis around Dundas St W and Islington.",
      },
      {
        q: "What is the best next step?",
        a: "Open the current menu or store page, then confirm directions and contact details before heading over.",
      },
    ],
  },
  {
    slug: "nicotine-vapes-etobicoke",
    title: "Nicotine Vapes in Etobicoke | EarthRoot Cannabis",
    absoluteTitle: true,
    metaDescription: "Adults 19+: review six verified nicotine vape product pages from EarthRoot Cannabis in Etobicoke, then check /items/vapes for the current selection. Nicotine is addictive.",
    h1: "Nicotine Vapes at EarthRoot Cannabis in Etobicoke",
    icon: "NV",
    heroTagline: "Adults 19+ · Nicotine is addictive.",
    heroTheme: "nicotine",
    heroEyebrow: "EARTHROOT CANNABIS • ETOBICOKE • ADULTS 19+",
    heroIntro: "Searching for nicotine vapes near me in Etobicoke? This EarthRoot Cannabis guide features six verified VAPE PENS product pages. Compare the supported product names below, then use /items/vapes for the current nicotine category. Product details can change. Nicotine is addictive.",
    heroProducts: [
      { name: "Geek Promax 5% — 30K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg", sourceSlug: "geek-promax-5-30k-puffs" },
      { name: "Geek Universe — 25K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp", sourceSlug: "geek-universe-25k-puffs" },
      { name: "NEXA PIX — 30K Puffs — Many Flavors", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp", sourceSlug: "nexa-pix-30k-puffs-many-flavors" },
      { name: "OVNS 10000 5% — 10K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg", sourceSlug: "ovns-10000-5-10k-puffs" },
      { name: "OVNS Disposable 5% — 8 mL — Many Flavors", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp", sourceSlug: "ovns-disposable-5-8ml-many-flavors" },
      { name: "OVNS Pioneer 5% — 22K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp", sourceSlug: "ovns-pioneer-5-22k-puffs" },
    ],
    heroDisclosure: "Featured cards are verified starting points, not guarantees of current stock, price or availability.",
    heroMenuHref: "/items/vapes",
    heroPrimaryLabel: "Browse Nicotine Vapes",
    heroSecondaryLabel: "Compare the Six Featured Items",
    heroSecondaryHref: "#featured-vapes",
    identityStrip: "EarthRoot Cannabis | Etobicoke | Adults 19+ | Nicotine is addictive.",
    featuredHeading: "Six Verified EarthRoot Vape Cards",
    featuredIntro: "This shortlist contains verified Geek, NEXA and OVNS VAPE PENS product pages. Use each card for its supported display name, then rely on /items/vapes for the current EarthRoot Cannabis category listing.",
    sections: [
      { heading: "Read Each Product Format Carefully", body: "One verified listing explicitly identifies an OVNS disposable. Keep that format attached only to its own product and do not relabel another featured item unless its current page verifies the same format." },
      { heading: "Puff Counts Identify Listings", body: "Several verified names include puff counts. Use those numbers to distinguish the listings, not as guarantees of duration, performance or superiority." },
      { heading: "Keep Nicotine and Cannabis Vape Routes Separate", body: "This adult-only EarthRoot Cannabis guide uses VAPE PENS products under /items/vapes. THC and cannabis vape products under /items/vape-disposables are excluded." },
      { heading: "Review the Current Etobicoke Category", body: "Before choosing, open /items/vapes and the individual product page for current supported details. This guide does not claim prices, stock, guaranteed availability, hours, an address, or delivery service." },
    ],
    faqs: [
      { q: "Where should I check EarthRoot Cannabis’s current nicotine selection?", a: "Use /items/vapes. The six featured cards are verified starting points while the current category listing controls selection information." },
      { q: "Is a disposable nicotine vape represented?", a: "Yes. The verified set includes OVNS Disposable 5% — 8 mL — Many Flavors. Check its current product page for updated details." },
      { q: "Does this page include cannabis vapes?", a: "No. It covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products under /items/vape-disposables are excluded." },
    ],
    warning: "Adults 19+. Nicotine is addictive.",
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}
