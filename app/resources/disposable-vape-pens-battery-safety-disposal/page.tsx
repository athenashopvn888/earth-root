import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "../resources.module.css";
import articleStyles from "./article.module.css";
import ArticleBody from "./ArticleBody";
import { ARTICLE_H1, articleDescription, CANONICAL_URL, DATE_MODIFIED, SEO_TITLE } from "./article";

const description = articleDescription();

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description,
  alternates: { canonical: CANONICAL_URL },
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
  openGraph: {
    type: "article",
    locale: "en_CA",
    url: CANONICAL_URL,
    siteName: "EarthRoot Cannabis",
    title: SEO_TITLE,
    description,
  },
  twitter: {
    card: "summary",
    title: SEO_TITLE,
    description,
  },
};

export default function DisposableVapeBatterySafetyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_H1,
    description,
    dateModified: DATE_MODIFIED,
    mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL_URL },
    url: CANONICAL_URL,
    author: {
      "@type": "Organization",
      name: "EARTHROOT CANNABIS",
      url: "https://www.earthrootcannabis.ca",
    },
    publisher: {
      "@type": "Organization",
      name: "EARTHROOT CANNABIS",
      url: "https://www.earthrootcannabis.ca",
    },
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <article>
        <header className={styles.hero}>
          <div className={styles.wrap}>
            <h1>{ARTICLE_H1}</h1>
          </div>
        </header>
        <div className={styles.body}>
          <div className={articleStyles.prose}>
            <ArticleBody />
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
