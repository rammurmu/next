import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Remote() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <h1 className={styles.title}>
        Remote jobs and internships</h1>
        <p className={styles.description}>Best startup jobs at runash Connect with remote team founders can reach you via email</p>
        

       <p className={styles.description}><b>Where runash can hire</b>We love and believe our remote first culture at runash and we currently have hiring entities in all the following states, and countries</p>

       

         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
 )
}
