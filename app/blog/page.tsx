import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "EarthRoot Cannabis Blog | Cannabis Menu Guides",
  description: "Read EarthRoot Cannabis cannabis menu guides, flower tier notes, and local store checks for Etobicoke shoppers.",
  alternates: {
    canonical: "https://www.earthrootcannabis.ca/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
