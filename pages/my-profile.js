import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function MyProfile() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.card}>
        <h1>My profile</h1>
        <p>Details information</p>
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
