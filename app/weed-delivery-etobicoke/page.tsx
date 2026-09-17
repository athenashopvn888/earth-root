import type { Metadata } from "next";
import DeliveryContent from "../delivery/DeliveryContent";
import menu from "../delivery/delivery-menu.json";

const canonicalUrl = "https://www.earthrootcannabis.ca/weed-delivery-etobicoke";

export const metadata: Metadata = {
  title: "Weed Delivery Etobicoke | From Dundas & Kipling",
  description:
    "Etobicoke-scoped weed delivery from EarthRoot Cannabis at 5120 Dundas St W. Browse the current delivery menu. Adults 19+. This is not a city-wide Toronto delivery page.",
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
