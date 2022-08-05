import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Help() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <h1 className={styles.title}>
          How can we help you?
        </h1>
       
       <p className={styles.description}>Help for wherever you are on your runash journey.</p>

       <div className={styles.grid}>
       <div className={styles.card}>
       <p className={styles.description}>👤 Account Issues</p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>🪙 Billing Issues</p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>🧺 Cart Issues</p>
        </div>
       <div className={styles.card}>
        <p className={styles.description}>🛍️ Shopping Issues</p>
        </div>
       <div className={styles.card}>
        <p className={styles.description}>🛒 Selling Issues</p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>📽️ Live Streaming Issues</p>
       </div>
       <div className={styles.card}>
       <p className={styles.description}>📺Watch live streaming Issues</p> 
       </div>
       <div className={styles.card}>
       <p className={styles.description}>📝 Provide Feedback</p>
       </div>
       <div className={styles.card}>
       <p className={styles.description}>🤷 Help with runash </p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>👫 Influencer Issues</p> 
       </div>
       <div className={styles.card}>
        <p className={styles.description}>⚙️ Other support</p>
       </div>
       </div>
       <p className={styles.description}>Connect & interaction with CEO on live streaming </p> 
      </main>
    </div>
  )
}
