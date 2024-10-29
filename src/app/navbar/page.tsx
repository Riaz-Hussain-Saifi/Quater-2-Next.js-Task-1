import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
    <nav className={styles.dashboard}>
     <div className={styles.logo}>Quater-2 Next.JS Task-1</div>
        <ul className={styles.ul}>
          <Link href="/"><li><a className={styles.a} >Home</a></li></Link>
          <Link href="/about"><li><a className={styles.a} >About</a></li></Link>
          <Link href="/contact"><li><a className={styles.a} >Contact</a></li></Link>
          <Link href="/services"><li><a className={styles.a} >Services</a></li></Link>
        </ul>
     </nav>

<div className={styles.content}>
    {/* Main page content goes here */}
</div>
</>
  )
}

export default Navbar
