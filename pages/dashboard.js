import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'
import Link from 'next/link'


export default function Dashboard() {
  return (
       <div className={styles.fullWidth}>
      <header>
        <div className={styles.logoRow}>
          <Logo />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
        <nav className={styles.nav}>
          <button className={styles.navButton}>Home</button>
        </nav>
      </header>
      <main className={styles.main}>
        <span className={styles.heading}>Home</span>
        <span className={styles.subHeading}>Welcome to your application</span>
        <div className={styles.grid}>
          <div className={styles.box}/>
          <div className={styles.box}/>
          <div className={styles.box}/>
        </div>
      </main>
    </div>
  );
}
       
    
