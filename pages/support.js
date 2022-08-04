import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Support() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Live support 24x7x365 days</h1>
        <p>Select your problem</p>
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
