import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://earthrootcannabis.ca"),
  title: {
    default: "EarthRoot Cannabis — Premium Cannabis Dispensary, Etobicoke",
    template: "%s | EarthRoot Cannabis",
  },
  description:
    "Shop 200+ premium cannabis strains at EarthRoot Cannabis. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Etobicoke's uplifting dispensary at 5120 Dundas St W. Open 24 Hours.",
  keywords: [
    "cannabis dispensary Etobicoke",
    "weed store Etobicoke",
    "exotic flower Etobicoke",
    "premium cannabis",
    "EarthRoot Cannabis",
    "cheap weed Etobicoke",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Etobicoke",
    "vapes",
    "pre-rolls",
    "native cigarettes Etobicoke",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://earthrootcannabis.ca",
    siteName: "EarthRoot Cannabis",
    title: "EarthRoot Cannabis — Premium Etobicoke Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Etobicoke's uplifting dispensary at 5120 Dundas St W. Open 24 Hours.",
    images: [
      {
        url: "https://earthrootcannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "EarthRoot Cannabis — Premium Cannabis Dispensary Etobicoke",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EarthRoot Cannabis — Etobicoke's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open 24 Hours at 5120 Dundas St W, Etobicoke.",
    images: ["https://earthrootcannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg"],
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
    canonical: "https://earthrootcannabis.ca",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://earthrootcannabis.ca",
  name: "EarthRoot Cannabis",
  description: "Cannabis dispensary at 5120 Dundas St W in Etobicoke, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://earthrootcannabis.ca",
  telephone: "+16473825122",
  image: "https://earthrootcannabis.ca/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5120 Dundas St W",
    addressLocality: "Etobicoke",
    addressRegion: "ON",
    postalCode: "M9A 1C2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6393,
    longitude: -79.5372,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Etobicoke",
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
        <meta name="geo.position" content="43.6393;-79.5372" />
        <meta name="ICBM" content="43.6393, -79.5372" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S0C3KNH3SK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S0C3KNH3SK');
            `
          }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
