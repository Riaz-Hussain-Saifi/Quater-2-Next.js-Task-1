// src/app/components/About.tsx
import styles from "../page.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.sectionTitle}>About Us</h2>
      <p className={styles.aboutText}>
        We are a dedicated team of professionals committed to delivering
        top-notch web and app development services. Our mission is to help
        businesses succeed online by providing high-quality, responsive, and
        innovative solutions.
      </p>
    </section>
  );
}
