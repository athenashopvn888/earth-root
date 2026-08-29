import Script from "next/script";
import styles from "./resources.module.css";

const buttonAttributes = {
  "google-add-preferred-source-btn": "",
};

export default function PreferredSourceButton() {
  return (
    <section className={styles.preferredSource} aria-labelledby="preferred-source-heading">
      <p className={styles.preferredSourceLabel}>Google Preferred Sources</p>
      <h2 id="preferred-source-heading">Prefer EarthRoot Cannabis Updates on Google?</h2>
      <p>
        If you find EarthRoot Cannabis guides and local information useful, you can choose
        earthrootcannabis.ca as a Preferred Source on Google. Preferred Sources is a Google
        personalization feature that can help Google show you more content from sources you
        choose in supported Search experiences. It is not a Google endorsement, verification
        badge or general ranking boost.
      </p>
      <Script
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="afterInteractive"
      />
      <div className={styles.preferredSourceButton} {...buttonAttributes} />
      <a
        href="https://www.google.com/preferences/source?q=earthrootcannabis.ca"
        target="_blank"
        rel="noreferrer"
      >
        Choose EarthRoot Cannabis as a Preferred Source on Google
      </a>
    </section>
  );
}
