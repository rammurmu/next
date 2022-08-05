import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function Faq() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Frequently Asked Questions</h1>
        <p>Learn to use runash live streaming more easy and simple</p>
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
         <details className={styles.details}>
            <summary>What is a RunAsh live retail streaming</summary>
               <p className={styles.description}>RunAsh is a live retail streaming platform</p>
         </details>
         </div>
         <div>
         <details>
            <summary>Create a RunAsh account </summary>
                     <p className={styles.description}>We make something people want</p>
         </details>
         </div>
         <div>
         <details>
            <summary>We make something people want</summary>
                    <p className={styles.description}> We make something people want</p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary>What is a RunAsh live retail streaming</summary>
               <p className={styles.description}>RunAsh is a live retail streaming platform</p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary>What is a RunAsh live retail streaming</summary>
               <p className={styles.description}>RunAsh is a live retail streaming platform</p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary>What is a RunAsh live retail streaming</summary>
               <p className={styles.description}>RunAsh is a live retail streaming platform</p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary>What is a RunAsh live retail streaming</summary>
               <p className={styles.description}>RunAsh is a live retail streaming platform</p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary>What is a RunAsh live retail streaming</summary>
               <p className={styles.description}>RunAsh is a live retail streaming platform</p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary>What is a RunAsh live retail streaming</summary>
               <p className={styles.description}>RunAsh is a live retail streaming platform</p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary>What is a RunAsh live retail streaming</summary>
               <p className={styles.description}>RunAsh is a live retail streaming platform</p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary>What is a RunAsh live retail streaming</summary>
               <p className={styles.description}>RunAsh is a live retail streaming platform</p>
         </details>
         </div>
  
       
      </main>
    </div>
  )
}
