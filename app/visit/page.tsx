import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  STORE,
  faqPageJsonLd,
  stringifyJsonLd,
} from "../lib/storeIdentity";
import styles from "./visit.module.css";

const VISIT_FAQS = [
  {
    q: "What is the exact address for EarthRoot Cannabis?",
    a: "5120 Dundas St W, Etobicoke, ON M9A 1C2. The storefront sits on Dundas Street West in Etobicoke, west of Islington Avenue and beside the Kipling Avenue corridor. Phone +1 437 523 4850.",
  },
  {
    q: "How do I drive to 5120 Dundas St W from Six Points?",
    a: "Six Points is the Dundas / Bloor / Kipling junction south and east of the door. Stay on Dundas Street West and watch for 5120 on the commercial strip. The homepage map is the pin to follow if construction detours the last block.",
  },
  {
    q: "Which TTC stations are closest to EarthRoot Cannabis?",
    a: "Kipling Station (Line 2, plus local buses) and Islington Station are the two subway anchors for this stretch of Dundas Street West. From either station, finish the trip on Dundas rather than hunting a downtown Toronto address.",
  },
  {
    q: "Is EarthRoot Cannabis a walk-in for adults 19+?",
    a: "Yes. Bring government-issued photo ID. No appointment is required. Hours on this page match the homepage hub: Open 24 Hours.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute:
      "How to Reach EarthRoot Cannabis | Dundas, Kipling & Islington, Etobicoke",
  },
  description:
    "Driving, TTC, and parking notes for EarthRoot Cannabis at 5120 Dundas St W, Etobicoke. Dundas / Kipling / Islington corridor only. Adults 19+. Open 24 Hours. Homepage keeps the map and hours hub.",
  alternates: {
    canonical: "https://www.earthrootcannabis.ca/visit",
  },
  openGraph: {
    title: "How to Reach EarthRoot Cannabis on Dundas Street West",
    description:
      "Walk, drive, or ride TTC to 5120 Dundas St W near Kipling and Islington in Etobicoke. Adults 19+.",
    url: "https://www.earthrootcannabis.ca/visit",
  },
  robots: { index: true, follow: true },
};

export default function VisitPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(faqPageJsonLd(VISIT_FAQS)),
        }}
      />
      <Navbar />

      <article className={styles.article}>
        <p className={styles.eyebrow}>
          Supporting how-to-reach page · Adults 19+
        </p>
        <h1 className={styles.h1}>
          How to Reach EarthRoot Cannabis on Dundas Street West
        </h1>
        <p className={styles.lede}>
          This page is only for finding the Etobicoke storefront at{" "}
          <strong>{STORE.addressLine}</strong>. It is not a city-wide Toronto
          delivery guide. Hours, the pin, and the full name-address-phone block
          stay on the <Link href="/#contact">homepage visit hub</Link>. Use
          these notes when you are coming along Dundas, Kipling, or Islington.
        </p>

        <section className={styles.nap} aria-label="Store name, address, and phone">
          <h2>EarthRoot Cannabis — name, address, phone</h2>
          <p>
            <strong>{STORE.name}</strong>
            <br />
            {STORE.streetAddress}
            <br />
            {STORE.city}, {STORE.region} {STORE.postalCode}
            <br />
            Canada
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a>
            <br />
            Hours: {STORE.hoursDetail}
            <br />
            Corridor: {STORE.corridor}
          </p>
        </section>

        <section>
          <h2>Find 5120 on the Dundas strip</h2>
          <p>
            EarthRoot Cannabis faces Dundas Street West in Etobicoke Centre,
            between Kipling Avenue and Islington Avenue. Shoppers coming from
            The Kingsway, Cloverdale, Humbertown, or the Bloor-Danforth subway
            should think “Dundas West in Etobicoke,” not a downtown pin. The
            building number is <strong>5120</strong>. If you overshoot toward
            Islington, turn back west on Dundas; if you overshoot toward the
            427, come east until Kipling is behind you and 5120 is on the
            commercial frontage.
          </p>
          <p>
            Six Points (Dundas / Bloor / Kipling) is the junction most drivers
            hit before the last minute of the trip. Stay on Dundas Street West
            through that interchange rather than dropping onto Bloor unless
            you already know the local side streets. Once you are on the 5100
            block, use the homepage map if plaza signage or neighbouring retail
            makes the door hard to pick out from the curb.
          </p>
        </section>

        <section>
          <h2>Driving from Kipling, Islington, and the 427</h2>
          <p>
            From Kipling Avenue, turn onto Dundas Street West and look for
            5120 on the Etobicoke retail strip. From Islington Avenue, turn
            west onto Dundas and continue toward Kipling — you will reach the
            store before you hit the highway. From Highway 427, use the Dundas
            Street exit and travel east into Etobicoke until the Kipling
            corridor; do not keep going toward Mississauga.
          </p>
          <p>
            From the Gardiner / QEW, Kipling Avenue north is the straightforward
            climb to Dundas. After you cross Bloor and Six Points, Dundas Street
            West is the road that actually holds the storefront. Night visits
            use the same geometry: Dundas is the frontage road, Kipling and
            Islington are the north-south handles, and 5120 is the civic number
            to match on the building.
          </p>
        </section>

        <section>
          <h2>TTC from Kipling Station and Islington Station</h2>
          <p>
            <strong>Kipling Station</strong> (Line 2 Bloor-Danforth, TTC buses,
            and the nearby GO / UP connections) is the western subway anchor.
            Leave the station toward Kipling Avenue, continue north to Dundas
            Street West, then follow Dundas to 5120. That last stretch is a
            surface walk or a short Dundas bus hop — not a second subway ride.
          </p>
          <p>
            <strong>Islington Station</strong> sits east of the store. Exit
            toward Islington Avenue, gain Dundas Street West, and travel west
            toward Kipling. Buses that run Dundas Street West in Etobicoke
            drop you closer to the door than any downtown streetcar. If you
            searched a generic “dispensary near me” result, confirm you are
            aiming at Etobicoke Dundas, not a different city corridor.
          </p>
        </section>

        <section>
          <h2>Parking on Dundas Street West</h2>
          <p>
            Curb parking on Dundas Street West is the practical option for
            most walk-in visits. Midday can be tighter around the Kipling and
            Islington retail blocks; evening and overnight curb space is
            usually easier. Read posted signs on the block you actually stop
            on. This page does not invent a private lot, validation, or a
            reserved stall.
          </p>
          <p>
            If you are being dropped off, use the Dundas Street West curb in
            front of 5120 rather than a side street that does not face the
            store. After you park, the homepage map is the check that you
            matched the civic number.
          </p>
        </section>

        <section>
          <h2>Walk-in, ID, and what to do when you arrive</h2>
          <p>
            EarthRoot Cannabis is a walk-in for adults 19+. Bring
            government-issued photo ID. Staff can show the current menu
            categories — flower, pre-rolls, edibles, vapes, concentrates,
            accessories, and listed cigarettes — but this page does not claim
            stock, sale prices, or a medical benefit. If one product is the
            only reason for the trip, call{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a> first.
          </p>
          <p>
            Hours on the door match the homepage: {STORE.hoursDetail}. After
            you know the route, go back to the{" "}
            <Link href="/">EarthRoot Cannabis homepage</Link> for the live
            map pin, the hours card, and menu lanes. Etobicoke delivery, when
            you want it, stays on{" "}
            <Link href="/weed-delivery-etobicoke">
              /weed-delivery-etobicoke
            </Link>
            .
          </p>
        </section>

        <div className={styles.mapWrap}>
          <iframe
            title="Map of EarthRoot Cannabis at 5120 Dundas St W, Etobicoke"
            src={STORE.mapEmbedUrl}
            className={styles.mapIframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className={styles.mapNote}>
          Map preview for the Dundas West pin. The homepage remains the visit
          hub if you only need NAP and hours.
        </p>

        <section className={styles.faq}>
          <h2>Getting here — quick answers</h2>
          {VISIT_FAQS.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>

        <p className={styles.ctaRow}>
          <Link href="/#contact" className={styles.primary}>
            Homepage map &amp; hours
          </Link>
          <a href={`tel:${STORE.phoneE164}`} className={styles.secondary}>
            Call {STORE.phoneDisplay}
          </a>
        </p>
      </article>

      <Footer />
    </main>
  );
}
