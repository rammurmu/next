import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Live() {
  return (
    <div className={styles.container}>
      <Head>
         <title>Live</title>
         <meta name="description" content="A live streaming platform" />
         <link rel="icon" href="favicon.icon" />
      </Head>
      <main className={styles.main}>
       <div className={styles.card}>
        <h1>Live streaming</h1>
        <p>Schedule </p>
        <select className={styles.selectWrapper}select id="select" name="select">
        <option>Select</option>
        <option>Selling</option>
        <option>Shopping</option>
        </select>
        <button type="button-secondary">Go Live</button>
        </div>

        
          <p className={styles.description}>Create stream<br />Personalized details<br />Customization<br />Visibility</p>
        

       <div>
        <p>Category<br />Add your product stream to categories</p>
        <select className={styles.selectWrapper}select id="select" name="select">
        <option>Category</option>
        <option>Vegetable</option>
        <option>Fruit</option>
        </select>
        </div>

      
          <p className={styles.description}>Thubnail<br />Select or upload a picture that represent your store<br />Upload</p>
      
      
          <h2>Stream list<br />Add your stream to one or more stream list,can help viewer discover your content faster<br />
              Learn more &rarr;<br />Select<br />New<br />previous<br />Create new</h2>

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
