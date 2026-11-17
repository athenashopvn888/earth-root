import type { Metadata, ResolvingMetadata } from "next";
import HomePageClient from "./HomePageClient";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";
import { HOME_PAGE_TITLE } from "./lib/homeDelivery";
import { getLiveMenu } from "./lib/liveMenu";

export const dynamic = "force-dynamic";

export async function generateMetadata(_props: unknown, parent: ResolvingMetadata): Promise<Metadata> {
  const previous = await parent;
  return {
    title: { absolute: HOME_PAGE_TITLE },
    openGraph: {
      ...previous.openGraph,
      title: { absolute: HOME_PAGE_TITLE },
    },
    twitter: {
      ...previous.twitter,
      title: { absolute: HOME_PAGE_TITLE },
    },
  };
}

export default async function Page() {
  const [{ flowers }, fleet] = await Promise.all([getLiveMenu(), getFleetContent()]);
  const contentBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined;
  return <HomePageClient initialFlowers={flowers} contentBanners={contentBanners} />;
}
