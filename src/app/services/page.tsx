// src/app/components/Services.tsx
import styles from "../page.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Web Development</h3>
          <p>We create responsive and dynamic websites to suit your needs.</p>
        </div>
        <div className={styles.card}>
          <h3>App Development</h3>
          <p>Custom mobile applications designed for performance and UX.</p>
        </div>
        <div className={styles.card}>
          <h3>UI/UX Design</h3>
          <p>Designing user-friendly and visually appealing interfaces.</p>
        </div>
      </div>
    </section>
  );
}
