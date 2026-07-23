import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/staff-photo", "/staff-photo/"],
    },
    sitemap: "https://www.earthrootcannabis.ca/sitemap.xml",
  };
}
