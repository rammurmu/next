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
        <p>See real time live status for your sell & buy</p>
        <div className={styles.nav}>
         <ul> 
           <li>
            <Link href="/">
            <a>My profile</a>
            </Link>
           </li>
        </ul>
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
