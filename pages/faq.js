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

        <details>
          <summary>||</summary>
          <br />
        <option><a href="https://">Select</a></option>
         <br />
        <option>Selling</option>
         <br />
        <option>Shopping</option>
        </details>
       
         <details>
            <summary>What is a RunAsh live retail streaming ?+</summary>
               <p>RunAsh is a live retail streaming platform</p> 
         </details>

         <details>
            <summary>We make something people want</summary>
                     We make something people want
         </details>

         <details>
            <summary>We make something people want</summary>
                     We make something people want
         </details>
      <>
        <collapseGroup>
         <collapse className={styles.collapse}title='Question A'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
         </collapse>
       <collapse title='Question B'>
          <p>
           Duis aute irure dolor in reprehenderit in volupt.
          </p>
        </collapse>
      </collapseGroup>
     </>


         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
