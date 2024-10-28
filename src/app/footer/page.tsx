import React from 'react';
import styles from '../page.module.css';

const Footer = () => {
  return (
    <main className={styles.main}>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="../page.tsx">Home</a>
          <a href="../about">About</a>
          <a href="../services">Services</a>
          <a href="../contact">Contact</a>
        </div>
      </footer>
    </main>
  )
}

export default Footer
