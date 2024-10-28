// src/app/components/Hero.tsx
import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Welcome to My Website</h1>
      <p className={styles.description}>
        Discover our amazing services and get in touch with us.
      </p>
    </section>
  );
}
