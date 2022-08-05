import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Remote() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <h1 className={styles.title}>
        Remote jobs and internships 
        </h1>
        <p className={styles.description}>Best startup jobs and internships at runash Connect with remote team founders can reach you via email</p>
        
         <div className={styles.code}>Open jobs</div>

         <h1 className={style.title}>
          Where we can hire
         </h1>
         <p className={styles.description}>We love and believe our remote first culture at runash and we currently have hiring entities in all the following states, and countries.</p>
         
      </main>
    </div>
  )
}
