import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Live() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.card}>
        <h1>Live streaming</h1>
        <p>Schedule </p>
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
