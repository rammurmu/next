import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Buyer() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <code className={styles.code}>👏 Welcome to RunAsh</code>
        <h1 className={styles.description}>📺 Live watch<br />and Live on demand</h1>

        <div className={styles.description}>{' '}
        <code className={styles.code}>Watching Now</code></div>

        <h2 className={styles.title}>Whatched <a href="https://">Live stream</a></h2>
          <p>Real life experience</p>
        <h2 className={styles.description}>Live on demand</h2>
          <p>Whatching some previous live streaming</p>

          <p className={styles.card}>All Categories</p>
          <code class name={styles.code}>🍋🍎Fruits</code><code>🥦🍅Vegetable</code><code>🥫🍶Grocery</code><code>🌺💐</code><code>🥩🍗Non Veg</<code>
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
