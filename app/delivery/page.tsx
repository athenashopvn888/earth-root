import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — EarthRoot Cannabis | Etobicoke",
  description: "Get notified when EarthRoot Cannabis launches same-day weed delivery across Etobicoke and surrounding areas.",
  alternates: {
    canonical: "https://earthrootcannabis.ca/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
