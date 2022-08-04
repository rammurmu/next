import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Cart() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Shopping Cart</h1>
        <p>Personalized your cart <br />Your cart is empty</p>
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
