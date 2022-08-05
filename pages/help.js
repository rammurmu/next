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
        <p className={styles.description}>🪙 Billing Issue</p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>🧺 Cart Issue</p>
        </div>
       <div className={styles.card}>
        <p className={styles.description}>🛍️ Shopping Issue</p>
        </div>
       <div className={styles.card}>
        <p className={styles.description}>🛒 Selling Issue</p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>📽️ Live Stream Issue</p>
       </div>
       <div className={styles.card}>
       <p className={styles.description}>📺Live watch Issue</p> 
       </div>
       <div className={styles.card}>
       <p className={styles.description}>💻Website issue</p>
       </div>
       <div className={styles.card}>
       <p className={styles.description}>🤷 Chate issue</p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>👫 Influencer Issue</p> 
       </div>
       <div className={styles.card}>
        <p className={styles.description}>⚙️ Other issue</p>
       </div>
       </div>
       <p className={styles.description}>Connect & interaction with CEO on live streaming </p> 
      </main>
    </div>
  )
}
