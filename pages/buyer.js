import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Buyer() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <code className={styles.code}>👏 Welcome to RunAsh</code>
        <div className={styles.title}>Watch live <br /><a href="https://">streaming</a></div>
         <p>Watch previous live recording</p>
        <div className={styles.description}>{' '}
        <code className={styles.code}>📺Watch Now</code></div>

        <div className={styles.title}><a href="https://">Live on demand</a></div>
          <p>Real life experience</p>
        <div className={styles.description}>🌎Joining<br />conversation</div>
          <p>Connect with retailer around the world</p>

          <p className={styles.code}>All Categories</p>
          <code className={styles.code}>Short by</code>
          <code className={styles.code}>🍎🍋 Organic fruit 🍓🍑</code> 
          <code className={styles.code}>🥦🥔 Organic vegetable 🍆🍅</code>
          <code className={styles.code}>💐🌺 Organic flower 🌴🌷</code>
          <code className={styles.code}>🥫🍶 Organic grocery 🍟🍞</code>
          <div className={styles.grid}>
          <a href="https://" className={styles.card}>
            <h2>Fruit Stream &rarr;</h2>
            <p>Watched </p>
          </a>

          <a 
            href="https://" className={styles.card}>
            <h2>Vegetable Strem &rarr;</h2>
            <p>Watched </p>
          </a>
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
