import styles from '../styles/Seller.module.css'
import Link from 'next/link'

export default function Seller() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Seller</h1>   
        <div className={styles.description}><code className={styles.code}>👏 Welcome to runash</code></div>
        <div className={styles.title}>NextGen and future<br /><a href="https://">of retail</a></div>
        <p>Build own made real selling experience with hybrid live retail streaming technology</p>
        <div className={styles.description}><code className={styles.code}>✨ Started</code></div>
        <div className={styles.title}>Makeing<br />business<br /><a href="https://">experience</a></div>
        <p>Give your store a real experience on a complete real digitization</p>
        <div className={styles.description}><code className={styles.code}>👩‍💻Make</code></div>
        <div className={styles.title}>1-on-1<br /><a href="https://">selling</a></div>
        <p>Schedule real selling and go live streaming on real experience in minutes</p>
        <div className={styles.description}><code className={styles.code}>🎉Now</code></div>
        <p className={styles.paragraph}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
