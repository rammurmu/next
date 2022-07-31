import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Inventory() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.card}>
        <h1>Inventory</h1>
        <p>Products SKU</p>
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
