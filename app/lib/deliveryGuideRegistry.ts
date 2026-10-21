import deliveryGuideCopy from "./deliveryGuideCopy.json";
import { isCigaretteGuide, SHOW_CIGARETTES } from "./siteConfig";

export type DeliveryGuideFaq = { question: string; answer: string };

export type DeliveryGuideEntry = {
  slug: string;
  lane: "native_cig" | "nic_vape";
  name: string;
  title: string;
  description: string;
  h1: string;
  body_md: string;
  faq_items: DeliveryGuideFaq[];
  main_button: string;
  second_button: string;
  category_path: string;
};

const DELIVERY_GUIDE_REGISTRY_RAW = deliveryGuideCopy as DeliveryGuideEntry[];

function withoutGrabbaCopy(guide: DeliveryGuideEntry): DeliveryGuideEntry {
  if (SHOW_CIGARETTES) return guide;
  const faq_items = guide.faq_items.filter((faq) => !/grabba/i.test(`${faq.question} ${faq.answer}`));
  if (faq_items.length === guide.faq_items.length) return guide;
  return { ...guide, faq_items };
}

export const DELIVERY_GUIDE_REGISTRY = (SHOW_CIGARETTES
  ? DELIVERY_GUIDE_REGISTRY_RAW
  : DELIVERY_GUIDE_REGISTRY_RAW.filter((guide) => !isCigaretteGuide({
      lane: guide.lane,
      slug: guide.slug,
      preferredCategoryPath: guide.category_path,
    }))
).map(withoutGrabbaCopy);

export const getDeliveryGuide = (slug: string) =>
  DELIVERY_GUIDE_REGISTRY.find((guide) => guide.slug === slug);
