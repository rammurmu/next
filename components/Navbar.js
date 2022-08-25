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
       <li>
          <Link href='/seller'>
          <a>Sell<a>
          </Link>
       </li>     
       <li>
          <Link href='/buyer'>
            <a>Buy</a>
          </Link>
       </li>     
       <li>
          <Link href='/watch'>
            <a>Watch</a>
          </Link>
       </li> 
       <li>
       <Link href="/influencers">
         <a>Support</a>
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
