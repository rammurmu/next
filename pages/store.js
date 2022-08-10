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
       <h1 className={styles.title}>Drop-down</h1>
        <div className="dropdown">
          <span>See more</span>
        <div className="dropdown-content">
         <p>runash!</p>
       </div>
       </div>

       
       <div className="dropdown">
         <button className="dropbtn">Dropdown</button>
       <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
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
