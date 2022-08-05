import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function Faq() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Frequently Asked Questions</h1>
        <p>Some questions are commonly started on runash</p>
        </div>

        <details>
          <summary></summary>
          <br />
        <option><a href="https://">Select</a></option>
         <br />
        <option>Selling</option>
         <br />
        <option>Shopping</option>
        </details>
         <div className={styles.card}>
         <details className={styles.details>
            <summary>What is a RunAsh live retail streaming</summary>
               <p>RunAsh is a live retail streaming platform</p> 
         </details>
         </div>
         <details>
            <summary>Create a RunAsh account </summary>
                     <p>We make something people want</p>
         </details>

         <details>
            <summary>We make something people want</summary>
                    <p> We make something people want</p>
         </details>
      
        <select className={styles.selectWrapper}select id="select" name="select">
        <option>Select</option>
        <option>Selling</option>
        <option>Shopping</option>
        </select>
  
       <collapse className={styles.collapse}select id="collapse" name="collapse">
         <p>Learn more</p>
       </collapse>

         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
