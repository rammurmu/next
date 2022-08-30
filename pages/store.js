import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Store() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Live streaming store</h1>
        <p>Create your own made real store</p>
        </div>
       
        <div className="dropdown">
          <span>See more</span>
        <div className="dropdown-content">
         <p>runash!</p>
       </div>
       </div>
        <h1 className={styles.description}>Dropdown</h1>
       
       <div className="dropdown">
         <button className="dropbtn">Dropdown</button>
       <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
       </div>
       </div>

       

       <ul1>
          <li1><a href="#home">Home</a></li1>
          <li1><a href="#news">About</a></li1>
          <li1 className="dropdown">
             <a href="" className="dropbtn">Dropdown</a>
       <div className="dropdownContent">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
       </div>
       </li1>
       </ul1>

      <button
      type="button" className={styles.button}>
       Learn
      </button>
  



         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
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
