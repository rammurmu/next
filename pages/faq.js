import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Faq() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Frequently Asked Questions</h1>
        <p>Some questions are commonly started on runash</p>
        </div>

        <Menu className={styles.detailsMenu}select id="select" name="select">
        <option><a href="https://">Select</a></option>
        <option>Selling</option>
        <option>Shopping</option>
        </Menu>
       
         <details>
            <summary>We make something people want</summary>
            We make something people want
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
