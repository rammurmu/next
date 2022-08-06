import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Feedback() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <h1 className={styles.title}>
        Feedback</h1>
        <p className={styles.description}>Your most valuable feedback make runash better for you</p>
        

        <p>Share your runash feedback<br />How satisfied are you with runash live streaming</p>
        <input className={styles.radio} 'radio' id='choice' value='Very satisfied' />
        <input className={styles.checkbox} 'checkbox' id='checkbox' value='Very satisfied' />
        <input className={styles.button} 'button' id='button' vale='very satisfied' />
        <input className={styles.time} 'time' id='appt' name='appt' min='09:00' max='18:00' required />
        <input className={style.time} time id='time' value='Schedule' />
          
         
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
