export interface StaticBlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seo_title: string;
  metaDescription: string;
  meta_description: string;
  h1: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  faq: string;
  internal_links_used: string;
  relatedLinks: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}

export const STORE_BLOG_CONFIG = {
  storeCode: "ERC01",
  storeName: "EarthRoot Cannabis",
  city: "Etobicoke",
  domain: "www.earthrootcannabis.ca",
  storePath: "/weed-dispensary-etobicoke",
};

export const STATIC_POSTS: StaticBlogPost[] = [
  {
    slug: "earthroot-menu-category-guide",
    title: "How Adults 19+ Can Read EarthRoot Cannabis Menu Categories Safely",
    seoTitle: "EarthRoot Cannabis Guide | Etobicoke Adult 19+",
    seo_title: "EarthRoot Cannabis Guide | Etobicoke Adult 19+",
    metaDescription: "Adult 19+ guide to EarthRoot Cannabis around Dundas St W / Islington / Etobicoke, with local store-page checks, menu-category context, and safe visit planning.",
    meta_description: "Adult 19+ guide to EarthRoot Cannabis around Dundas St W / Islington / Etobicoke, with local store-page checks, menu-category context, and safe visit planning.",
    h1: "How Adults 19+ Can Read EarthRoot Cannabis Menu Categories Safely",
    excerpt: "EarthRoot Cannabis guide for adults 19+ reviewing store information around Dundas St W / Islington / Etobicoke.",
    author: "The EarthRoot Cannabis Team",
    date: "2026-07-02",
    category: "Store Guide",
    readTime: "4 min",
    content: `## EarthRoot Cannabis Local Store Guide for Adults 19+

EarthRoot Cannabis serves adults 19+ looking for store information around Dundas St W / Islington / Etobicoke. Use this guide to get oriented, compare the store page with menu categories, and choose the most useful next step before visiting.

The focus is practical and store-specific: confirm the right storefront, browse helpful category links, and use the store page for directions, contact options, and visit planning.

## Why Local Context Helps

EarthRoot Cannabis is tied to Dundas St W and Islington context in Etobicoke. Useful local content should make the page easier for shoppers to understand by connecting the store to nearby streets, neighbourhood language, and visit-planning details already supported by the site.

Searchers often want to confirm that they are looking at the right storefront before they visit. A concise guide can support that decision by explaining the local context and the most helpful next steps.

## Plan A Better Visit

Start with the official EarthRoot Cannabis store page, then use the menu/category links to browse what the site makes easy to compare. Shoppers can confirm the right storefront, directions, contact options, and local visit details in one place.

If you need a quick answer before heading out, check the store page first and contact the store directly for help from staff.

## Browse Menu Categories With Confidence

Menu category labels help adults 19+ move quickly from general store research to the product areas they care about. Use them to compare the sections already shown on the site, such as flower, pre-rolls, vapes, edibles, concentrates, accessories, or other store categories.

That makes the page easier to scan and gives shoppers a cleaner path from local research to the right store page.

## Adult 19+ Visit Basics

Adults 19+ should bring valid government identification, confirm the store page before leaving, and use the menu/category links to narrow down what they want to ask about in-store.

The goal is simple: help real shoppers feel confident they are on the right store site and know where to find the next useful page.

## FAQ

### Is this guide for EarthRoot Cannabis only?

Yes. This guide is written for EarthRoot Cannabis and the local Etobicoke context connected to this website.

### How can shoppers check current menu details?

Use the store page and menu/category links before visiting, then ask staff if you need help comparing options.

### Who can use this guide?

This guide is for adults 19+ who want to understand the store page before visiting.

### What is the best next step after reading?

Open the store page, browse the available menu/category sections, and use the contact or directions options when you are ready to plan your visit.`,
    faq: "",
    internal_links_used: "[EarthRoot Cannabis Etobicoke store page](/weed-dispensary-etobicoke)\\n[EarthRoot Cannabis homepage](/)\\n[More EarthRoot Cannabis guides](/blog)",
    relatedLinks: [
      {
            "title": "EarthRoot Cannabis Etobicoke store page",
            "url": "https://earthrootcannabis.ca/weed-dispensary-etobicoke",
            "description": "Primary store-specific destination for current store details after reading the guide."
      },
      {
            "title": "EarthRoot Cannabis homepage",
            "url": "https://earthrootcannabis.ca/",
            "description": "Store-scoped general navigation for adults 19+."
      },
      {
            "title": "More EarthRoot Cannabis guides",
            "url": "https://earthrootcannabis.ca/blog",
            "description": "Store-scoped blog index for future approved posts."
      }
],
  },
];

export function getStaticPost(slug: string) {
  return STATIC_POSTS.find((post) => post.slug === slug);
}
