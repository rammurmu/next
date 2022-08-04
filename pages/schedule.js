import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Schedule() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.card}>
        <h1>Schedule a live streaming</h1>
        <p>Go live in minutes </p>
        </div>
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
