import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import {
  HOME_FAQS,
  cannabisStoreJsonLd,
  faqPageJsonLd,
  stringifyJsonLd,
} from "./lib/storeIdentity";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.earthrootcannabis.ca"),
  title: {
    default:
      "EarthRoot Cannabis | 24 Hour Dispensary on Dundas & Kipling, Etobicoke",
    template: "%s | EarthRoot Cannabis",
  },
  description:
    "Walk into EarthRoot Cannabis at 5120 Dundas St W, Etobicoke, on Dundas Street West near Kipling, Islington, and Six Points. Adults 19+. Open 24 Hours. Current menu in store — no medical claims.",
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
    title:
      "EarthRoot Cannabis | 24 Hour Dispensary on Dundas & Kipling, Etobicoke",
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
    title:
      "EarthRoot Cannabis | 24 Hour Dispensary on Dundas & Kipling, Etobicoke",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
            __html: stringifyJsonLd(cannabisStoreJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(faqPageJsonLd(HOME_FAQS)),
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
        <Link className="deliveryAnnouncement" href="/weed-delivery-etobicoke">
          WEED DELIVERY IS HERE — CLICK TO EXPLORE
        </Link>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
