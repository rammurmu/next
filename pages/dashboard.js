import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'
import Link from 'next/link'


export default function Dashboard() {
  return (
        <div className={styles.fullwidth}> 
         <header>
         <div className={styles.logoRow}>RunAsh</div>
        
          <div className={styles.nav}>
          <ul className={styles.ul}>
           <li>
            <Link href="/profile">
            <a>My profile</a>
            </Link>
           </li>
           <li>
            <Link href="/dashboard">
            <a>Dashboard</a>
            </Link>
           </li>
           <li>
            <Link href="/overview">
            <a>Overview</a>
            </Link>
           </li>
           <li>
            <Link href="/channel">
            <a>Channel</a>
            </Link>
           </li>
           <li>
            <Link href="/live-stream">
            <a>Live Stream</a>
            </Link>
           </li>
           <li>
            <Link href="/live-watched">
            <a>Live watch</a>
            </Link>
           </li>
           <li>
            <Link href="/live-chat">
            <a>Live chat</a>
            </Link>
           </li>
           <li>
            <Link href="/audio-stream">
            <a>Audio stream</a>
            </Link>
           </li>
           <li>
            <Link href="/store">
            <a>Store</a>
            </Link>
           </li>
           <li>
            <Link href="/insight">
            <a>Insight</a>
            </Link>
           </li>
           <li>
            <Link href="/setting">
            <a>Setting</a>
            </Link>
           </li>
           <li>
            <Link href="/analytics">
            <a>Analytics</a>
            </Link>
           </li>
           <li>
            <Link href="/users">
            <a>Users</a>
            </Link>
           </li>
           <li>
            <Link href="/inventory">
            <a>Inventory</a>
            </Link>
           </li>
           <li>
            <Link href="/resource">
            <a>Resource</a>
            </Link>
           </li>
   
        </ul>
      </div>
      </header>
        <main className={styles.main}>
        <span className={styles.heading}>👏Welcome back Ram !</span>
        <br />
        <span className={styles.SubHeading}>Get started streaming 🎉</span>
        <br />
        <div className={styles.grid}>
        <h1>To do</h1>
        <div className={styles.box}>Notification </div>
        <h1>Live view</h1>
      
        <div className={styles.box}>Insight </div>
        <h1>Intrest</h1>
        <div className={styles.box}>Personalized </div>
        <h1>Setting</h1>
        <div className={styles.box}>Customized </div>
        </div>
        



        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back Home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
 
    
