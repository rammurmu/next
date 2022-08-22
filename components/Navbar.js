import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

function Navbar() {
  return (
      <div className={styles.container}>
      <nav className={'header'}> 
      <ul className={'main-nav'}>
      <li>
       <Link href='/index'>
       <a><b>RunAsh</b></a>
       </Link>
     </li>
       <li>
         <Link href='/live'>
           <a>Live</a>
         </Link>
       </li>
       <li className={'dropdown'}>
          <Link href='/seller' className={'dropbtn'}>Live</Link>
          <div className={styles.dropdownContent}>
            <a href="/">Seller</a>
            <a href="/">Buyer</a>
          </div>
       </li>     
       <li>
          <Link href='/buyer'>
            <a>Buyer</a>
          </Link>
       </li>     
       <li>
          <Link href='/watch'>
            <a>Watching</a>
          </Link>
       </li> 
       <li>
       <Link href="/influencers">
         <a>Influencers</a>
      </Link>
      </li>       
      <li>
       <Link href="/schedules">
         <a>Schedules</a>
      </Link>
      </li>               
       <li>
            <Link href='/js-form'>
            <a>Login</a>
            </Link>
       </li>
       <li>
            <Link href='/signin'>
              <a><code className={styles.code}>Signin</code></a>
            </Link>
       </li>
       <li>
          <Link href='/cart'>
              <a>🛒</a>
           </Link>
       </li>
       <li>
          <Link href='/setting'>
              <a>⚙️</a>
           </Link>
       </li>
     </ul> 
    </nav> 
   </div>
 )
}

export default Navbar
