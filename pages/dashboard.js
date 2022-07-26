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
            <a>Live watch</a>
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
           <li>
            <Link href="/">
            <a>Setting</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Analytics</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Users</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Inventory</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Delivery</a>
            </Link>
           </li>
        </ul>
      </div>
      </header>
        <main className={styles.main}>
        <span className={styles.heading}>👏Welcome back Ram !</span>
        <br />
        <span className={styles.SubHeading}>Start streaming on runash</span>
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
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
 
    
