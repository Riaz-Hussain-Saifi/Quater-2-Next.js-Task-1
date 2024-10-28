// src/app/components/Contact.tsx
import styles from "../page.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact Us</h2>
      <p className={styles.contactInfo}>Email:<a href="mailto:infosaifideveloper@gmail.com"> infosaifideveloper@gmail.com</a></p>
      <p className={styles.contactInfo}><a href="tel:+92300 0321640">+92 300 0321640</a></p>
    </section>
  );
}
