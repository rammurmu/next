import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Help() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Help team</h1>
        <p>Help for wherever you are on your runash journey.</p>

       <h1>Choose a topic to help us route your request quickly</h1>
        
       <div className={styles.card}>👤 Account Issues</div>

       <div className={styles.card}>🪙 Billing Issues</div>

       <div className={styles.card}>🧺 Cart Issues</div>

       <div className={styles.card}>🛍️ Shopping Issues</div>

       <div className={styles.card}>🛒 Selling Issues</div>

       <div className={styles.card}>📽️ Live Streaming Issues</div>

       <div className={styles.card}>📺Watch live streaming Issues</div> 

       <div className={styles.card}>📝 Provide Feedback</div>

       <div className={styles.card}>🤷 Help with runash </div>

       <div className={styles.card}>👫 Influencer Issues</div> 

       <div className={styles.card}>⚙️ Other support</div>

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
