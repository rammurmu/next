import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Buyer() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <code className={styles.code}>👏 Welcome to RunAsh.live</code>
        <h1 className={styles.description}>📺 Live watch<br />and Live on demand</h1>

        <div className={styles.description}>{' '}
        <code className={styles.code}>Watching Now</code></div>

        <h1 className={styles.title}>Whatched <a href="https://">Live stream</a></h1>

          <h2 className={styles.description}>LIVE ON DEAMAND</h2>

          <p className={styles.paragraph}>Whatching some previous live streaming,you can watch some live stream to receive notifications for new live streaming and updats.when the buyer updates the live streaming their organic products on daily basis,</p>

          <p className={styles.card}>All Categories</p>
          <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
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
