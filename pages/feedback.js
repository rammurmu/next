import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Feedback() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <h1 className={styles.title}>
        Feedback</h1>
        <p>Give your most valuable feedback and make runash better for you</p>
        

        <p>Share your runash feedback<br />How satisfied are you with runash live streaming</p>
        <input className={styles.radio} radio id='choice' value='Very satisfied' />
        <input className={styles.checkbox} checkbox='Very satisfied' />
        <input className={styles.button} button='very satisfied' />
        <input className={styles.time} time='schedule' />
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
