import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Influencers() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1 className={styles.title}>Influencers community</h1>
        <p className={styles.description}>Influencers program if organic products and services are being bought and sold live streaming,you can automatically assume that such organic products and services are also marketed live</p>
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
