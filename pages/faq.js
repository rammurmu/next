import styles from '../styles/Faq.module.css'
import Link from 'next/link'

export default function Faq() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Frequently Asked Questions</h1>
        <p>Learn to use runash live streaming</p>
        </div>
        <div className={styles.box}>
        <details>
          <summary>Select</summary>
          <br />
        <option><a href="https://">Influencers</a></option>
         <br />
        <option>Selling</option>
         <br />
        <option>Shopping</option>
        </details>
        </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary>What is a runash live retail streaming?</summary>
               <p className={styles.p}>A live retail streaming platform</p>
         </details>
         </div>
         <div className={styles.card}>
         <details>
            <summary>How to create runash account? </summary>
                     <p className={styles.p}>Go to signin page and create account </p>
         </details>
         </div>
         <div className={styles.card}>
         <details>
            <summary></summary>
                    <p className={styles.p}></p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary></summary>
               <p className={styles.p}></p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary></summary>
               <p className={styles.p}></p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary></summary>
               <p className={styles.p}></p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary></summary>
               <p className={styles.p}></p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary></summary>
               <p className={styles.p}></p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary></summary>
               <p className={styles.p}></p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary></summary>
               <p className={styles.p}></p>
         </details>
         </div>
         <div className={styles.card}>
         <details className={styles.details}>
            <summary></summary>
               <p className={styles.p}></p>
         </details>
         </div>
  
       
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
