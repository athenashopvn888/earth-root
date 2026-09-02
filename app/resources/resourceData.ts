export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string | string[];
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  kind?: "article";
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  image?: {
    src: string;
    alt: string;
  };
  cards: ResourceCard[];
  sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "EarthRoot Cannabis Resources",
    seoTitle: "EarthRoot Cannabis Resources | Menu and Shopping Guides",
    description:
      "Resource guides for shopping the EarthRoot Cannabis menu in Etobicoke, including flower, value, pre-rolls, and Native smokes where listed.",
    eyebrow: "Resource Centre",
    intro:
      "Use these EarthRoot Cannabis guides to understand the menu before visiting. Start with the product category that matches your visit, then check the current menu or ask staff for details that can change.",
    cards: [
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Pick the category first, then compare the details that matter.",
      },
      {
        title: "Weed Flower Guide",
        href: "/resources/weed-flower-guide",
        text: "Compare Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed flower tiers.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "A cleaner way to think about cheap weed, budget weed, and affordable weed.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Brand names and carton notes for the cigarette menu where listed.",
      },
      {
        title: "Cannabis Near Etobicoke: A Practical Local Guide",
        href: "/resources/local-guides/cannabis-near-etobicoke-comparison-guide",
        text: "Learn how to compare local cannabis search results, store information, menus and helpful resources when researching dispensaries in Etobicoke.",
      },
    ],
    sections: [
      {
        heading: "How To Use These Guides",
        body: "Start with the store page for location and hours, then open the category guide that matches your visit. Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarette options each have different details to check.",
        bullets: [
          "Use the store page for directions, contact options, and listed hours.",
          "Use category pages to compare the current menu category.",
          "Ask staff when a product detail needs a current answer.",
        ],
      },
      {
        heading: "Local Notes For Dundas St W / Islington / Etobicoke",
        body: "EarthRoot Cannabis serves shoppers around Dundas St W, Islington, Six Points, and Etobicoke. Use this resource centre to confirm store details, choose the right product category, and check the current menu before visiting.",
      },
    ],
  },
  {
    slug: "menu-guide",
    title: "How To Shop The EarthRoot Cannabis Menu",
    seoTitle: "EarthRoot Cannabis Menu Guide | Etobicoke Weed Dispensary Tips",
    description:
      "How to shop the EarthRoot Cannabis menu by category, with natural tips for flower, pre-rolls, edibles, THC vapes, concentrates, and value shopping.",
    eyebrow: "Menu Guide",
    intro:
      "The fastest way through the menu is simple: choose the product type before you compare products. That keeps the page useful whether you want premium flower, cheap weed, pre-rolls, edibles, THC vapes, or concentrates.",
    cards: [
      {
        title: "Weed Flower Guide",
        href: "/resources/weed-flower-guide",
        text: "Compare Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed flower tiers.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "A cleaner way to think about cheap weed, budget weed, and affordable weed.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Brand names and carton notes for the cigarette menu where listed.",
      },
    ],
    sections: [
      {
        heading: "Choose The Product Category First",
        body: "If you want flower, start with flower. If you want pre-rolls, stay in pre-rolls. If the visit is about edibles, vapes, concentrates, or accessories, open that section and compare there first.",
        bullets: [
          "Flower shoppers should compare tiers.",
          "Pre-roll shoppers should compare format and package details.",
          "Edible, vape, and concentrate shoppers should read current details carefully.",
        ],
      },
      {
        heading: "Check What Is Current",
        body: "Use this guide for the shopping method, then use the current menu and staff for the product names, prices, and package details currently listed.",
      },
    ],
  },
  {
    slug: "weed-flower-guide",
    title: "EarthRoot Cannabis Weed Flower Guide",
    seoTitle: "EarthRoot Cannabis Weed Flower Guide | Exotic Weed, Premium Weed, Budget Weed",
    description:
      "Compare Exotic Weed, Premium Weed, Budget Weed, cheap weed, and affordable weed at EarthRoot Cannabis with current menu details.",
    eyebrow: "Weed Flower Guide",
    intro:
      "Weed flower gets easier when you compare one tier at a time. Exotic Weed and Premium Weed sit in different lanes from AAA+ Weed, AA Weed, and Budget Weed, so start with the lane that matches the visit.",
    cards: [
      {
        title: "Exotic Weed",
        href: "/exotic-weed",
        text: "Start here when you want the higher shelf flower lane.",
      },
      {
        title: "Premium Weed",
        href: "/premium-weed",
        text: "A strong lane for shoppers comparing quality and value.",
      },
      {
        title: "AAA+ Weed",
        href: "/aaa-weed",
        text: "A clear middle lane for flower comparison.",
      },
      {
        title: "AA Weed",
        href: "/aa-weed",
        text: "A straight value-minded flower lane.",
      },
      {
        title: "Budget Weed",
        href: "/budget-weed",
        text: "Start here when cheap weed or affordable weed is the goal.",
      },
    ],
    sections: [
      {
        heading: "Compare Tier, Then Details",
        body: "Open the tier, then compare the current product name, format, weight, posted price, and item details. That gives you a clean decision path without turning the whole menu into noise.",
      },
      {
        heading: "Value Does Not Need To Be Complicated",
        body: "Budget weed and affordable weed are easiest to compare when you stay inside the right lane. If the details are thin or the choice feels close, ask staff before choosing.",
      },
    ],
  },
  {
    slug: "value-guide",
    title: "EarthRoot Cannabis Value Guide",
    seoTitle: "EarthRoot Cannabis Value Guide | Cheap Weed and Budget Weed",
    description:
      "A practical value guide for shoppers comparing cheap weed, budget weed, affordable weed, and menu categories at EarthRoot Cannabis.",
    eyebrow: "Value Guide",
    intro:
      "Good value shopping starts with the product type, the current details, and the price that fits the visit.",
    cards: [
      {
        title: "Budget Weed",
        href: "/budget-weed",
        text: "The first stop for cheap weed and affordable weed comparisons.",
      },
      {
        title: "AA Weed",
        href: "/aa-weed",
        text: "A simple value lane for flower shoppers.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Use this when you are comparing more than flower.",
      },
    ],
    sections: [
      {
        heading: "Start With The Budget Lane",
        body: "If low spend is the point, start in Budget and AA before jumping across the rest of the menu. That keeps the comparison honest and quick.",
      },
      {
        heading: "Read The Menu Notes",
        body: "Compare the product name, format, size, and posted price. If one detail is unclear, use staff for the answer instead of guessing from an old blog line.",
      },
    ],
  },
  {
    slug: "pre-roll-guide",
    title: "EarthRoot Cannabis Pre-Roll Guide",
    seoTitle:
      "EarthRoot Cannabis Pre-Roll Guide | Etobicoke Cannabis Menu Tips",
    description:
      "How to compare pre-rolls at EarthRoot Cannabis without mixing them up with flower, edibles, THC vapes, and concentrates.",
    eyebrow: "Pre-Roll Guide",
    intro:
      "Pre-rolls are their own lane. Compare them like pre-rolls, not like loose flower, edibles, THC vapes, or concentrates.",
    cards: [
      {
        title: "Pre-Rolls",
        href: "/items/prerolls",
        text: "Open the current pre-roll category.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Use this if you are still choosing between categories.",
      },
    ],
    sections: [
      {
        heading: "Compare Format First",
        body: "Check whether the listing is a single, pack, infused option, or another pre-roll format shown on the menu. Then compare the posted details and price before choosing.",
      },
      {
        heading: "Keep It Separate",
        body: "If the visit turns into flower, edibles, vapes, or concentrates, switch categories. Do not force one pre-roll decision to carry the whole menu.",
      },
    ],
  },
  {
    slug: "resource-centre-launch",
    title: "EarthRoot Cannabis Resource Centre Launch",
    seoTitle: "EarthRoot Cannabis Resource Centre Launch",
    description:
      "The EarthRoot Cannabis resource centre gives shoppers cleaner menu guides for flower, value, pre-rolls, and store visits.",
    eyebrow: "Resource Update",
    intro:
      "The resource centre makes the menu easier to browse with clear notes for flower, value, pre-rolls, and store visits.",
    cards: [
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Pick the category first, then compare the details that matter.",
      },
      {
        title: "Weed Flower Guide",
        href: "/resources/weed-flower-guide",
        text: "Compare Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed flower tiers.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "A cleaner way to think about cheap weed, budget weed, and affordable weed.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Brand names and carton notes for the cigarette menu where listed.",
      },
    ],
    sections: [
      {
        heading: "What Changed",
        body: "The resources section now gives shoppers a central place for menu tips, flower comparison, value shopping, pre-roll notes, and store visit guidance.",
      },
      {
        heading: "How To Use It",
        body: "Start with the guide that matches the visit, then open the current menu or store page when you are ready to compare details.",
      },
    ],
  },
  {
    slug: "native-smokes",
    title: "EarthRoot Cannabis Native Smokes Resource",
    seoTitle: "EarthRoot Cannabis Native Smokes | $25 Carton Notes",
    description:
      "EarthRoot Cannabis Native smokes resource with cigarette brand names shown on the menu and $25 carton notes where listed.",
    eyebrow: "Native Smokes",
    intro:
      "EarthRoot Cannabis shoppers looking for Native smokes can use this page as a cleaner starting point. Brand names shown on the cigarette menu include Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, * Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full. Some carton-style listings show around $25, but shoppers should check the current menu or staff before making the trip.",
    cards: [
      {
        title: "Cigarette Menu",
        href: "/items/cigarettes",
        text: "Open the current cigarette category before making the trip.",
      },
      {
        title: "Native Cigarettes Guide",
        href: "/resources/native-smokes/native-cigarettes-guide",
        text: "Brand notes and a cleaner shopping checklist.",
      },
      {
        title: "Store Page",
        href: "/weed-dispensary-etobicoke",
        text: "Use the store page for directions, contact options, and listed hours.",
      },
    ],
    sections: [
      {
        heading: "Brands Shoppers May See",
        body: "The cigarette menu may show brands such as Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, * Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full. The exact shelf can change, so treat this as a menu guide and confirm current options before choosing.",
        bullets: [
          "Canadian Lights",
          "Canadian Full",
          "Putters",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Menthol",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "* Rolled Gold Lights",
          "Nexus Full",
          "Nexus Lights",
          "Time Full",
        ],
      },
      {
        heading: "$25 Carton Notes",
        body: "Where the menu lists $25 carton-style Native cigarettes, this resource points shoppers to the cigarette category first. Check the current menu or ask staff for what is available today.",
      },
      {
        heading: "Keep The Visit Simple",
        body: "If you are also shopping cannabis, keep the cigarette decision separate from flower, pre-rolls, edibles, THC vapes, and concentrates. One lane at a time keeps the visit smooth.",
      },
    ],
  },
  {
    slug: "native-smokes/native-cigarettes-guide",
    title: "EarthRoot Cannabis Native Cigarettes Guide",
    seoTitle:
      "EarthRoot Cannabis Native Cigarettes Guide | Brands and Carton Notes",
    description:
      "A shopper-friendly Native cigarettes guide for EarthRoot Cannabis, including brand names shown on the menu and $25 carton notes where listed.",
    eyebrow: "Native Cigarettes Guide",
    intro:
      "If Native cigarettes are part of the stop, start with the cigarette category and compare the current listings. EarthRoot Cannabis menu brand names may include Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, * Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
    cards: [
      {
        title: "Cigarette Menu",
        href: "/items/cigarettes",
        text: "Open the current cigarette category before making the trip.",
      },
      {
        title: "Native Cigarettes Guide",
        href: "/resources/native-smokes/native-cigarettes-guide",
        text: "Brand notes and a cleaner shopping checklist.",
      },
      {
        title: "Store Page",
        href: "/weed-dispensary-etobicoke",
        text: "Use the store page for directions, contact options, and listed hours.",
      },
    ],
    sections: [
      {
        heading: "Compare The Brand Names",
        body: "Look for the brand name first, then compare the posted price and any item details. The menu may include Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, * Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
        bullets: [
          "Canadian Lights",
          "Canadian Full",
          "Putters",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Menthol",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "* Rolled Gold Lights",
          "Nexus Full",
          "Nexus Lights",
          "Time Full",
        ],
      },
      {
        heading: "Ask If The Shelf Matters",
        body: "When a specific carton, full, light, or menthol option matters, ask staff before choosing. That is better than guessing from any resource page.",
      },
      {
        heading: "Use The Cigarette Category",
        body: "Open the cigarette category before the trip. It is the cleanest public path for current Native smokes information at this store.",
      },
    ],
  },
  {
    slug: "local-guides/cannabis-near-etobicoke-comparison-guide",
    kind: "article",
    title: "Looking for Cannabis Near Etobicoke? Start With These Checks",
    seoTitle: "Cannabis Near Etobicoke: A Practical Local Dispensary Guide",
    description:
      "Searching for cannabis near me in Etobicoke? Learn how to compare local dispensary information, menus, FAQs and store details before deciding where to visit.",
    eyebrow: "Etobicoke Cannabis Guide",
    intro:
      "Searching for cannabis near me or weed near me in Etobicoke can bring up local store pages, menus, product results and informational guides. Those pages do not all serve the same purpose. A better way to compare local options is to confirm that you are looking at the right store information, use the current website to understand how the menu is organized, and rely on helpful local resources rather than a single search result.",
    image: {
      src: "/banners/welcome_banner.webp",
      alt: "EarthRoot Cannabis in Etobicoke",
    },
    cards: [
      {
        title: "EarthRoot Cannabis in Etobicoke",
        href: "/weed-dispensary-etobicoke/",
        text: "View EarthRoot Cannabis store information for Etobicoke and use the primary local page as the starting point for location-specific details.",
      },
      {
        title: "EarthRoot Resource Centre",
        href: "/resources/",
        text: "Browse EarthRoot guides and educational resources created to help adult shoppers understand the website and common cannabis topics.",
      },
      {
        title: "How to Use the Online Menu",
        href: "/resources/menu-guide",
        text: "Learn how to navigate menu information and understand how products and categories are organized on the EarthRoot website.",
      },
      {
        title: "Frequently Asked Questions",
        href: "/faq/",
        text: "Find answers to common questions about using the EarthRoot website and planning your next step.",
      },
    ],
    sections: [
      {
        heading: "Start With the Primary Etobicoke Store Page",
        body: [
          "When a search for cannabis near me in Etobicoke produces several different results, begin by confirming which page represents the local store. Search engines can surface a homepage, a product page, an article or another internal page depending on the exact wording of the search. For broad local intent, the primary Etobicoke page is the clearest place to establish store context before exploring the rest of the website.",
          "The goal is not simply to choose the first result. It is to make sure the information you are reading belongs to the location and purpose you intended to research.",
        ],
      },
      {
        heading: "Use the Menu to Explore, Not an Old Search Snippet",
        body: [
          "A Google result can provide a useful entry point, but it may show only a small piece of a website. Once you reach the store site, the menu and supporting guides can give you a clearer view of how information is organized.",
          "When comparing a weed dispensary near me result, useful website signals include:",
          "Because websites and menus can change, an older search snippet should not be treated as a substitute for checking the current site.",
        ],
        bullets: [
          "clear product and category names;",
          "working navigation between menu sections;",
          "product pages that open correctly;",
          "understandable supporting information;",
          "consistent store and location context across the site.",
        ],
      },
      {
        heading: "Understand Why Different Searches Lead to Different Pages",
        body: [
          "A broad local search and a specific product search do not have the same intent.",
          "Someone searching for a cannabis dispensary in Etobicoke is usually trying to understand the local store and whether it is relevant to their needs. Someone making a narrower search may be looking for information about one category, one product or one question.",
          "That is why a well-organized website can have several strong pages without forcing every page to target the same keywords. The local page can own the primary Etobicoke store intent, while guides, FAQs and other resources support narrower questions.",
          "This article is designed to support that local journey rather than replace the main Etobicoke page.",
        ],
      },
      {
        heading: "Use Helpful Guides When You Need More Context",
        body: [
          "Not every question belongs on a store landing page.",
          "Sometimes a shopper wants to understand how a menu works, how website categories are organized or where to find an answer before visiting another section of the site. Educational resources and FAQs are useful for those questions because they can provide context without turning every page into another local sales page.",
          "If you begin with a weed near me in Etobicoke search and then need more information, moving between the local page, resource centre, menu guide and FAQ can give you a more complete picture than relying on one isolated result.",
        ],
      },
      {
        heading: "Keep Local Information and Specific Product Searches Separate",
        body: [
          "Search engines may sometimes surface an individual product page because it closely matches a very specific query. That does not mean the same product page should also become the site's main local-information page.",
          "Keeping those purposes separate helps protect useful search ownership:",
          "This structure also makes the website easier for people to navigate because each page has a clear reason to exist.",
        ],
        bullets: [
          "local pages answer broad location intent;",
          "product pages answer specific product intent;",
          "educational pages explain broader questions;",
          "FAQs handle common practical questions.",
        ],
      },
      {
        heading: "Make “Cannabis Near Me” Searches More Useful",
        body: [
          "A cannabis near me search is a useful starting point, but proximity alone does not tell you whether the information on a result is clear, current or relevant to the question you have.",
          "After Google identifies nearby options, take a moment to compare the actual websites. Confirm the local store context, review the site's navigation, use the menu for current browsing and look for supporting guides when you need more explanation.",
          "For someone researching cannabis in Etobicoke, that approach can make local search much more useful than judging a store from a map result or headline alone.",
        ],
      },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
