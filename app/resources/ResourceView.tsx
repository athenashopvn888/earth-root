import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PreferredSourceButton from "./PreferredSourceButton";
import styles from "./resources.module.css";
import type { ResourcePage } from "./resourceData";

type ResourceViewProps = {
  page: ResourcePage;
};

export default function ResourceView({ page }: ResourceViewProps) {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className={styles.intro}>{page.intro}</p>
          {page.image && (
            <div className={styles.articleImageWrap}>
              <Image
                src={page.image.src}
                alt={page.image.alt}
                fill
                sizes="(max-width: 900px) 100vw, 860px"
                className={styles.articleImage}
              />
            </div>
          )}
        </div>
      </section>

      {page.cards.length > 0 && (
        <section className={styles.cardsSection}>
          <div className={styles.grid}>
            {page.cards.map((card) => (
              <Link key={card.href} href={card.href} className={styles.card}>
                <span>{card.title}</span>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.body}>
        {page.sections.map((section) => (
          <article key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
        {page.kind === "article" && <PreferredSourceButton />}
      </section>
      <Footer />
    </main>
  );
}
