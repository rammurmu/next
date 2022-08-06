import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Feedback() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Feedback</h1>
        <p>Give you most valuable feedback and make runash live streaming better for you</p>
        </div>

        <p>Share your runash feedback<br />How satisfied are you with runash live streaming</p>
        <input className={styles.inpute} radio id='choice' value='Very satisfied' />
        <label className={styles.label} contact='Very satisfied' />

         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
