import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Cart() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Shopping Cart</h1>
        <div className={styles.card}>
        <h2>Personalized your cart</h2>
        <p>Your cart is empty</p>
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
