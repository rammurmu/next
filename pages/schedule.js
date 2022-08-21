import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Schedule() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.card}>
        <h1>Schedule a live streaming</h1>
        <p>Go live in minutes </p>
        </div>
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
     <div className={styles.grid}>
       <ul className={'main-nav'}>
       <li>
         <Link href='/about'>
            <a>About</a>
         </Link>
       </li>
       <li>
         <Link href='/privacy'>
           <a>Privacy</a>
         </Link>
       </li>
       <li>
          <Link href='/help'>
            <a>Help</a>
          </Link>
       </li>     
       <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
       </li>     
       <li>
          <Link href='/feedback'>
            <a>Feedback</a>
          </Link>
       </li>     
       <li>
          <Link href='/faq'>
            <a>FAQ</a>
          </Link>
       </li>     
       <li>
          <Link href='/careers'>
            <a>Careers</a>
          </Link>
       </li> 
       <li>
          <Link href='/bolg'>
            <a>Blog</a>
          </Link>
       </li>     
       <li>
          <Link href='/'>
            <a></a>
          </Link>
       </li> 
       <li>
          <Link href='/'>
            <a></a>
          </Link>
       </li>                 
       <li>
          <Link href='/'>
            <a></a>
          </Link>
       </li>                                 
      </ul>
    </div>
    </div>
  )
}
