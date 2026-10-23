import { cigaretteSafeContent, SHOW_CIGARETTES } from "./lib/siteConfig";
import CigaretteStateProvider from "./components/CigaretteStateProvider";
import FleetContentProvider from "./components/fleet/FleetContentProvider";
import FullNameNap from "./components/FullNameNap";
import PinnedNavClearance from "./components/PinnedNavClearance";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { HOME_DOC_TITLE } from "./lib/homeDelivery";
import { getFleetContent } from "./lib/fleetContent";
import type { Metadata } from "next";
import "./globals.css";
import DeliveryAnnouncement from "./components/DeliveryAnnouncement";
import {
  HOME_FAQS,
  cannabisStoreJsonLd,
  faqPageJsonLd,
  stringifyJsonLd,
} from "./lib/storeIdentity";

const ROOT_METADATA: Metadata = {
  metadataBase: new URL("https://www.earthrootcannabis.ca"),
  title: {
    default: HOME_DOC_TITLE,
    template: "%s | EarthRoot Cannabis",
  },
  description:
    "Open 24 hours, 7 days a week. Visit EarthRoot Cannabis at 5120 Dundas St W in Etobicoke, near Dundas, Kipling, and Islington. Adults 19+.",
  keywords: [
    "EarthRoot Cannabis",
    "Etobicoke dispensary",
    "Dundas and Kipling weed",
    "Islington cannabis store",
    "5120 Dundas St W",
    "24 hour Etobicoke dispensary",
    "Six Points dispensary",
    "weed store near Kipling",
    "Dundas Street West cannabis",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.earthrootcannabis.ca",
    siteName: "EarthRoot Cannabis",
    title: HOME_DOC_TITLE,
    description:
      "Adult 19+ walk-in at 5120 Dundas St W in Etobicoke, between Kipling Avenue and Islington Avenue. Open 24 Hours.",
    images: [
      {
        url: "https://www.earthrootcannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "EarthRoot Cannabis storefront area on Dundas Street West, Etobicoke",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_DOC_TITLE,
    description:
      "Adult 19+ walk-in at 5120 Dundas St W in Etobicoke, between Kipling Avenue and Islington Avenue. Open 24 Hours.",
    images: [
      "https://www.earthrootcannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.earthrootcannabis.ca",
  },
};

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const page = fleet.pages.Home;
  const description = page?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [fleet, cigaretteSnapshot] = await Promise.all([getFleetContent(), getCigaretteSnapshot()]);
  const cigarettes = toPublicCigaretteState(cigaretteSnapshot);
  const baseStoreJsonLd = cigaretteSafeContent(cannabisStoreJsonLd());
  const storeJsonLd = fleet.active
    ? {
        ...baseStoreJsonLd,
        name: fleet.nap.schemaName,
        telephone: fleet.nap.phoneTel,
        url: fleet.nap.website,
        hasMap: fleet.nap.mapsSearchUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: fleet.nap.street,
          addressLocality: fleet.nap.city,
          addressRegion: fleet.nap.province,
          postalCode: fleet.nap.postalCode,
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: Number(fleet.nap.lat),
          longitude: Number(fleet.nap.lng),
        },
      }
    : baseStoreJsonLd;
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Etobicoke" />
        <meta name="geo.position" content="43.6445218;-79.5331309" />
        <meta name="ICBM" content="43.6445218, -79.5331309" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(storeJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(cigaretteSafeContent(faqPageJsonLd(HOME_FAQS))),
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S0C3KNH3SK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S0C3KNH3SK');
            `,
          }}
        />
      </head>
      <body>
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
          <CigaretteStateProvider value={{ ...cigarettes, web: SHOW_CIGARETTES ? cigarettes.web : false }}>
            <DeliveryAnnouncement />
            {children}
            <FullNameNap />
            <PinnedNavClearance />
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}
