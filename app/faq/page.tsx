import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ | EarthRoot Cannabis on Dundas Street West",
  description: "Hours, ID, Dundas / Kipling / Islington directions, and menu questions for EarthRoot Cannabis at 5120 Dundas St W, Etobicoke. Adults 19+.",
  alternates: {
    canonical: "https://www.earthrootcannabis.ca/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: "Location and Hours",
    faqs: [
      { q: "Where is EarthRoot Cannabis located?", a: "EarthRoot Cannabis is at 5120 Dundas St W, Etobicoke, ON M9A 1C2, on Dundas Street West between Kipling Avenue and Islington Avenue. Call +1 437 523 4850. Use the homepage map or /visit for how to reach the door." },
      { q: "What are the listed hours?", a: "Open 24 Hours, seven days a week, matching the homepage hub. Call +1 437 523 4850 if your timing is unusual." },
      { q: "What is the best way to plan the visit?", a: "Confirm 5120 Dundas St W and the homepage hours, then open /visit if you need TTC from Kipling or Islington Station, driving from Six Points, or curb-parking notes." },
    ],
  },
  {
    title: "Products and Menu",
    faqs: [
      { q: "What menu categories can shoppers compare?", a: "The site has paths for flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes where listed." },
      { q: "How should shoppers use the menu?", a: "Pick one category first, then compare product name, format, weight or package size, posted price, and item details." },
      { q: "Do menu details change?", a: "Yes. Use the current menu for the product names, prices, and package details currently listed before making the trip." },
    ],
  },
  {
    title: "Flower and Value",
    faqs: [
      { q: "Where should cheap weed shoppers start?", a: "Start with Budget and AA flower, then compare the current listings before choosing." },
      { q: "Where should premium flower shoppers start?", a: "Use Premium or Exotic flower when the visit is about the higher shelf lanes." },
      { q: "How do shoppers avoid guessing?", a: "Stay inside one tier, compare the posted details, and ask staff when the final choice needs a current answer." },
    ],
  },
  {
    title: "Native Smokes",
    faqs: [
      { q: "Does EarthRoot Cannabis list Native cigarettes?", a: "The cigarette menu may show Native smoke brands such as Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, and Canadian Classics Silver. Confirm current options through the menu or staff." },
      { q: "Where can I check $25 carton-style listings?", a: "Where those listings are shown, check the current menu or ask staff for the listed price and package details." },
      { q: "Where should cigarette shoppers start?", a: "Open the cigarette category first, then use the store page for directions, contact options, and listed hours." },
    ],
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Straight answers for the Dundas and Kipling walk-in: homepage for
            hours and the map, /visit for how to get here, menu categories for
            planning, staff for anything that changes.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Call <a href="tel:+14375234850">+1 437 523 4850</a> or use the
              homepage visit hub before heading to 5120 Dundas St W.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
