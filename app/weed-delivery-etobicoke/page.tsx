import type { Metadata } from "next";
import DeliveryContent from "../delivery/DeliveryContent";
import menu from "../delivery/delivery-menu.json";

const canonicalUrl = "https://www.earthrootcannabis.ca/weed-delivery-etobicoke";

export const metadata: Metadata = {
  title: "Weed Delivery Etobicoke",
  description:
    "Explore Weed Delivery from EarthRoot Cannabis in Etobicoke. Browse the current delivery menu and use the ordering options shown on the page.",
  alternates: { canonical: canonicalUrl },
};

export default function WeedDeliveryEtobicokePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "EarthRoot Cannabis Weed Delivery",
    url: canonicalUrl,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: menu.products.length,
      itemListElement: menu.products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <DeliveryContent />
    </>
  );
}
