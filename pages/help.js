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
       <p className={styles.description}>👤Account issues</p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>🪙Payment issue</p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>🧺Cart issue</p>
        </div>
       <div className={styles.card}>
        <p className={styles.description}>🛍️Buy issue</p>
        </div>
       <div className={styles.card}>
        <p className={styles.description}>🛒Sell issue</p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>📽️Live issue</p>
       </div>
       <div className={styles.card}>
       <p className={styles.description}>📺Watch issue</p> 
       </div>
       <div className={styles.card}>
       <p className={styles.description}>💻App issue</p>
       </div>
       <div className={styles.card}>
       <p className={styles.description}>🤷 Chat issue</p>
       </div>
       <div className={styles.card}>
        <p className={styles.description}>👫Influencer issue</p> 
       </div>
       <div className={styles.card}>
        <p className={styles.description}>⚙️Other issue</p>
       </div>
       </div>
       <p className={styles.description}>Connect & interaction with CEO on live streaming </p> 
      </main>
    </div>
  )
}
