import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Seller() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Seller</h1>
        <div className={styles.description}><code className={styles.code}>👏 Welcome to runash</code></div>
        <h2 className={styles.description}>
        Give your store a<br /> real experience <br />on a complete digitization</h2>
        <p>Schedule sell on real experience</p>

        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
