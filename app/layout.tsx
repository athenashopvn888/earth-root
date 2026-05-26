import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spiritcornercannabis.com"),
  title: {
    default: "EarthRoot Cannabis — Premium Cannabis Dispensary, Etobicoke",
    template: "%s | EarthRoot Cannabis",
  },
  description:
    "Shop 200+ premium cannabis strains at EarthRoot Cannabis. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Etobicoke's uplifting dispensary at 5120 Dundas St W. Open 24 Hours.",
  keywords: [
    "cannabis dispensary Etobicoke",
    "weed store Dalhousie",
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
    "weed store Gatineau",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://spiritcornercannabis.com",
    siteName: "EarthRoot Cannabis",
    title: "EarthRoot Cannabis — Premium Etobicoke Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Etobicoke's uplifting dispensary at 5120 Dundas St W. Open 24 Hours.",
    images: [
      {
        url: "/banners/spirit_corner_cannabis_showcase.webp",
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
    images: ["/banners/spirit_corner_cannabis_showcase.webp"],
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
    canonical: "https://spiritcornercannabis.com",
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
  "@id": "https://spiritcornercannabis.com",
  name: "EarthRoot Cannabis",
  description: "Cannabis dispensary at 5120 Dundas St W in Etobicoke, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://spiritcornercannabis.com",
  telephone: "+16473825122",
  image: "https://spiritcornercannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5120 Dundas St W",
    addressLocality: "Etobicoke",
    addressRegion: "ON",
    postalCode: "M9B 1B9",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4292,
    longitude: -75.6928,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://maps.app.goo.gl/yVDY1PZ8qSwAjQ6s6",
    "https://www.google.com/maps/place/?q=place_id:ChIJm9VGUowFzkwRl2QzOCSoNlg",
  ],
  hasMap: "https://maps.app.goo.gl/yVDY1PZ8qSwAjQ6s6",
  areaServed: {
    "@type": "City",
    name: "Etobicoke",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
