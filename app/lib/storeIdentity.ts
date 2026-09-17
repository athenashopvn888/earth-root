/** Canonical NAP, hours, and local SEO identity for EarthRoot Cannabis (ERC01). */
export const STORE = {
  name: "EarthRoot Cannabis",
  domainHost: "www.earthrootcannabis.ca",
  url: "https://www.earthrootcannabis.ca",
  streetAddress: "5120 Dundas St W",
  city: "Etobicoke",
  region: "ON",
  postalCode: "M9A 1C2",
  country: "CA",
  addressLine: "5120 Dundas St W, Etobicoke, ON M9A 1C2",
  phoneDisplay: "+1 437 523 4850",
  phoneE164: "+14375234850",
  hoursLabel: "Open 24 Hours",
  hoursDetail: "Open 24 Hours, 7 days a week",
  corridor: "Dundas / Kipling / Islington",
  intersection: "Dundas St W & Kipling Ave",
  latitude: 43.6445218,
  longitude: -79.5331309,
  image: "https://www.earthrootcannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=5120+Dundas+St+W,+Etobicoke,+ON+M9A+1C2&hl=en&z=16&output=embed",
  mapLinkUrl:
    "https://maps.google.com/?q=5120+Dundas+St+W,+Etobicoke,+ON+M9A+1C2",
  gbpWebsitePolicy: "https://www.earthrootcannabis.ca/",
} as const;

/** OpeningHoursSpecification 00:00–23:59 matches the live www site and 17 Sep 2026 FMD snapshot (Open 24 Hours). GBP Website is not edited from this site PR. */
export const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

/** Visible homepage FAQs — also emitted as FAQPage JSON-LD. */
export const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: "Where is EarthRoot Cannabis on Dundas Street West?",
    a: "EarthRoot Cannabis is at 5120 Dundas St W, Etobicoke, ON M9A 1C2, on the Dundas Street West strip between Kipling Avenue and Islington Avenue. Call +1 437 523 4850 if you need a landmark before you walk in.",
  },
  {
    q: "Is EarthRoot Cannabis open 24 hours in Etobicoke?",
    a: "Yes. The Dundas and Kipling walk-in is listed open 24 hours, seven days a week. Adults 19+ can come in without an appointment. Confirm the homepage hours block if your timing is unusual.",
  },
  {
    q: "How do I reach EarthRoot Cannabis from Kipling or Islington station?",
    a: "From Kipling Station, head north to Dundas Street West and continue along Dundas to 5120. From Islington Station, follow Dundas Street West west toward Kipling. The /visit page has driving, bus, and parking notes for this corridor only.",
  },
  {
    q: "Do I need ID to shop at EarthRoot Cannabis?",
    a: "Yes. EarthRoot Cannabis is for adults 19+ with valid government-issued photo ID. Staff check ID at the door. This store does not provide medical advice or medical cannabis claims.",
  },
  {
    q: "Where can I park near 5120 Dundas St W?",
    a: "Street parking on Dundas Street West is the usual option, and evening curb space is often easier than midday. The homepage map marks the storefront; use /visit for Six Points and Kipling approach notes.",
  },
  {
    q: "What can I browse at the Dundas West walk-in?",
    a: "Adults 19+ can compare flower tiers, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes on the current in-store menu. Names, packages, and posted prices change — ask staff before you travel for one specific item.",
  },
];

export function cannabisStoreJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "@id": `${STORE.url}/#cannabis-store`,
    name: STORE.name,
    url: STORE.url,
    image: STORE.image,
    telephone: STORE.phoneE164,
    description:
      "EarthRoot Cannabis is an adult 19+ walk-in cannabis store at 5120 Dundas St W in Etobicoke, on Dundas Street West near Kipling Avenue, Islington Avenue, and Six Points. Open 24 Hours.",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Debit",
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE.streetAddress,
      addressLocality: STORE.city,
      addressRegion: STORE.region,
      postalCode: STORE.postalCode,
      addressCountry: STORE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: STORE.latitude,
      longitude: STORE.longitude,
    },
    hasMap: STORE.mapLinkUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...DAYS_OF_WEEK],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Etobicoke" },
      { "@type": "Place", name: "Dundas Street West" },
      { "@type": "Place", name: "Kipling" },
      { "@type": "Place", name: "Islington" },
    ],
  };
}

export function faqPageJsonLd(faqs: { q: string; a: string }[] = HOME_FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
