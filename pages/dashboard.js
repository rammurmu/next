import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'
import Link from 'next/link'


export default function Dashboard() {
  return (
        <div className={styles.fullwidth}> 
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
        <main className={styles.main}>
        <span className={styles.heading}>Home</span>








        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
 
    
