// src/app/page.tsx
import Hero from "../app/hero/page";
import About from "../app/about/page";
import Services from "../app/services/page";
import Contact from "../app/contact/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
