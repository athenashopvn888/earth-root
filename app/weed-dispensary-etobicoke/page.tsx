import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";
import { weedOwner } from "@/app/lib/weedDiscovery";

export const metadata: Metadata = {
  title: { absolute: weedOwner.seoTitle },
  description: weedOwner.metaDescription,
  alternates: {
    canonical: `https://${weedOwner.domain}${weedOwner.ownerPath}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <WeedOwnerPage />;
}
