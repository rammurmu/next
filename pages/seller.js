import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Seller() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Seller</h1>   
        <div className={styles.description}><code className={styles.code}>👏 Welcome to runash</code></div>
        <div className={styles.title}>RunAsh live<br />streaming<br />for retailers</div>
        <p>Give you the best real selling experience with all the features you need for building hybrid live streaming store, support,smart building,and more .no money needed</p>
        <div className={styles.title}>
        Give your store a<br /> real experience <br />on a complete digitization</div>
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
