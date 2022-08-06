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
        <label className={styles.checkbox} contact='Very satisfied' />

         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
