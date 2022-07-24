import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'
import Link from 'next/link'


export default function Dashboard() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <div className={styles.description}><code className={styles.code}>👏 Welcome back ram!</code></div>
        <h2 className={styles.description}>
        Your live activity</h2>
        <p className={styles.description}>See real time live status for your sell & buy</p>
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
       
    
