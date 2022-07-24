import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'
import Link from 'next/link'


export default function Dashboard() {
  return (
          <div class name={styles.fullwidth}> 
          <div className={styles.nav}>
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









        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
 
    
