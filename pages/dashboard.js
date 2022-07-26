import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'
import Link from 'next/link'


export default function Dashboard() {
  return (
        <div className={styles.fullwidth}> 
         <header>
         <div className={styles.logoRow}>RunAsh</div>
         <div className={styles.card}>
          <div className={styles.nav}>
          <ul>
           <li>
            <Link href="/">
            <a>My profile</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Dashboard</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Overview</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Channel</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Live Stream</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>On demand</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Live chat</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Insight</a>
            </Link>
           </li>
        </ul>
      </div>
      </div>
      </header>
        <main className={styles.main}>
        <span className={styles.heading}>Dashboard</span>
        <br />
        <span className={styles.SubHeading}>👏Welcome back Ram!</span>
        <div className={styles.grid}>
        <div className={styles.box}>Notification </div>
        <div className={styles.box}>Live insight </div>
        <div className={styles.box}>Personalized </div>
        <div className={styles.box}>Customized </div>
        </div>




        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
 
    
