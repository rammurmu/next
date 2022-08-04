import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Faq() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Frequently asked questions</h1>
        <p>Some frequently asked questions are commonly started in runash.in</p>
        </div>

        <details className={styles.details}select id="select" name="select">
        <option>Select</option>
        <option>Selling</option>
        <option>Shopping</option>
        </details>
       
         <details>
            <summary>We make something people want</summary>
            <p>We make something people want</p>
         </details>

       


         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
