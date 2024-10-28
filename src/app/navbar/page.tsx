import React from 'react';
import styles from './page.module.css';

const Navbar = () => {
  return (
    <>
    <nav className={styles.dashboard}>
     <div className={styles.logo}>Quater-2 Next.JS Task-1</div>
        <ul className={styles.ul}>
          <li><a className={styles.a} href="/">Home</a></li>
          <li><a className={styles.a} href="/about">About</a></li>
          <li><a className={styles.a} href="/contact">Contact</a></li>
          <li><a className={styles.a} href="/services">Services</a></li>
        </ul>
     </nav>

<div className={styles.content}>
    {/* Main page content goes here */}
</div>
</>
  )
}

export default Navbar
