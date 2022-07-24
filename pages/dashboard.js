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
            <a>Live Stream</a>
            </Link>
           </li>
           <li>
            <Link href="/">
            <a>Live on demand</a>
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
       <div className={styles.card}>
       <h1>Activity</h1>
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
