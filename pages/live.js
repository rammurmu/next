import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Live() {
  return (
    <div className={styles.container}>
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

        <div>
          <p>Create stream<br />Personalized details<br />Customization<br />Visibility</p>
        </div>

       <div>
            <p>Category<br />Add your product stream to category<br />select<br />Vegetables<br />Fruits
              </p>
       </div>

      <div>
          <p>Thubnail<br />Select or upload a picture that represent your store<br />Upload</p>
       </div>
       <div>
            <p>Stream list<br />Add your stream to one or more stream list,can help viewer discover your content faster<br />
              Learn more &rarr;<br />Select<br />New<br />previous<br />Create new</p>
       </div>



         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
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
