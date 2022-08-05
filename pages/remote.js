import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Remote() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Remote jobs and internships</h1>
        <p>Best startup jobs at runash Connect with remote team founders can reach you via email</p>
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
