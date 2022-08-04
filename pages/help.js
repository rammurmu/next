import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Help() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>How can we help you</h1>
        <p>Questions or Feedback?,If you have a general question about how starting runash live streaming works, first consult this FAQ page,Which we keep up to date with the latest questions.If you have a general question about runash that can benefit other users of the community, please post it on the furom,If you have an individual technical issue, email us at admin@runash.in,If you have other feedback, feel free to email us directly or fill out a feedback form.</p>

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
       <p> Other questions about runash connet with expert on live</p> 
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
