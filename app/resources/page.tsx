import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { RESOURCE_HOME } from "./resourceData";

export const metadata: Metadata = {
  title: RESOURCE_HOME.seoTitle,
  description: RESOURCE_HOME.description,
  alternates: { canonical: "https://www.earthrootcannabis.ca/resources" },
};

export default function ResourcesPage() {
  return <ResourceView page={RESOURCE_HOME} />;
}
