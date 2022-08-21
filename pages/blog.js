import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Live Blog</h1>
        <p className={styles.description}>The latest guides and announcement</p>
        </div>
        <br />
        <h2>Welcome to first live blog</h2>
         <p>The new live-commerce streaming for real selling and real shopping</p>
        <Link href="/posts/first-post">
       <a>Read More &rarr;</a>
       </Link>
        <br />
       <h2>Introduction the live retail streaming</h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/second-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Live streaming for selling </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/three-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Live streaming for shopping </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/four-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Create your RunAsh account </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/five-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Build your live store</h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/six-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>How to live streaming your organic products </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/seven-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/eight-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/nine-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/ten-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/eleven-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
      <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/twelve-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/thirteen-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/fourteen-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/fifteen-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/sixteen-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
       <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/seventeen-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
         <p>
          <Link href="/home">
            <a><button type="button" className={styles.button}>&larr; Back to Home</button></a>
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
