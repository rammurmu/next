import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Cart() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Shopping cart</h1>
        <p>Personalized your cart <br />Your cart is empty</p>
        </div>
       
      </main>
      <div>
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
          <Link href='/blog'>
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
