import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Help() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Helpful culture</h1>
        <p className={styles.description}>Help for wherever you are on your runash journey.</p>

       <h1>Choose a topic to help your request quickly</h1>
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

       <p className={styles.description}>Connect and interaction with CEO on live streaming </p> 
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
