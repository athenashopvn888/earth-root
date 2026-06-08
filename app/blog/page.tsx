import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — EarthRoot Cannabis | Etobicoke",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from EarthRoot Cannabis in Etobicoke.",
  alternates: {
    canonical: "https://earthrootcannabis.ca/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
