import styles from '../styles/Remote.module.css'
import Link from 'next/link'

export default function Remote() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        Remote jobs and internships
       </div>
        <p className={styles.description}>Best startup jobs at runash Connect with remote team founders can reach you via email</p>
        
       
      

         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
 )
}
