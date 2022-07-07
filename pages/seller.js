import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Seller() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Seller</h1>   
        <div className={styles.description}><code className={styles.code}>👏 Welcome to runash</code></div>
        <div className={styles.title}>NextGen and future of <br /><a href="https://">retail</a></div>
        <p>Build own made real selling experience with hybrid live streaming technology</p>
        <div className={styles.title}>Own made <br />business<br /><a href="https://">experience</a></div>
        <p>Give your store a real experience on a complete digitization</p>
        <div className={styles.title}>Face-to face <a href="https://">selling</a></div>
        <p>Schedule sell and go live on real experience in minutes</p>

        <p className={styles.paragraph}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
