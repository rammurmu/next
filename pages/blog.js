import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Live Blog</h1>
        <p className={styles.description}>The latest articles</p>
       </div>
       <div className={styles.grid}>
       <div className={styles.card}>
       <h2>
         Welcome to live retail streaming hybrid platform 
       </h2>
        <p>
         The new live-commerce streaming for real selling and real shopping
        </p>
        <Link href="/posts/first-post">
       <a>Read More &rarr;</a>
       </Link>
       </div>
      <div className={styles.card}>
       <h2>
        Introducing next generation and future of retail
       </h2>
       <p>
        Runash is a live retail streaming hybrid marketplace platform for real sell and buy
       </p>
        <Link href="/posts/second-post">
       <a>Read More &rarr;</a>
       </Link>
       </div>
      </div>
      </main>
     <div className={styles.container}>
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
          <Link href='/media'>
            <a>Media</a>
          </Link>
       </li> 
       <li>
          <Link href='/api'>
            <a>API</a>
          </Link>
       </li>                 
       <li>
          <Link href='/status'>
            <a>Status</a>
          </Link>
       </li>                                 
      </ul>
    </div>
     <footer className={styles.footer}>
        <a
          href="https://runash.in"
          target="_blank"
          rel="noopener noreferrer"
        >
         © 2022 RunAsh. {' '}
          <span className={styles.logo}>
            <Image src="" alt=" " width={72} height={16} />
          </span>
        </a>
     </footer>
    </div>
  )
}
