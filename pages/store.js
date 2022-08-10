import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Store() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Live streaming store</h1>
        <p>Create your store</p>
        </div>

        <div className="dropdown">
          <span>Mouse over me</span>
        <div className="dropdown-content">
         <p>Welcome to runash!</p>
       </div>
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
