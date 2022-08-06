import Link from 'next/link'
import Sidebar from '../components/Sidebar'


function Navbar() {
  return (
      <nav className={'skip-nav'}>
      <ul className={'main-nav'}>
      <h1 className='logo'>
          <Link href='/dashboard'>
          <a><code className={styles.code}>RunAsh</code></a>
          </Link>
        </h1>
       <li>
         <Link href='/about' scroll={true}>
            <a>Startup</a>
         </Link>
       </li>
       <li>
         <Link href='/seller' scroll={true}>
           <a>Seller</a>
         </Link>
       </li>
       <li>
          <Link href='/buyer' scroll={true}>
            <a>Buyer</a>
          </Link>
       </li>     
       <li>
          <Link href='/live' scroll={true}>
            <a>Live</a>
          </Link>
       </li>     
       <li>
          <Link href='/watch' scroll={true}>
            <a>Watch</a>
          </Link>
       </li> 
       <li>
       <Link href="/influencers" scroll={true}>
         <a>Influencers</a>
      </Link>
      </li>       
      <li>
       <Link href="/store" scroll={true}>
         <a>Store</a>
      </Link>
      </li>               
       <li>
          <Link href='/js-form' scroll={true}>
            <a><code className={styles.codess}>LogIn</code></a>
          </Link>
       </li> 
       <li>
       <Link href="/cart" scroll={true}>
         <a>Cart🛒</a>
      </Link>
      </li>            
      <li>
       <Link href="/setting" scroll={true}>
         <a><b>⚙️</b></a>
      </Link>
      </li>  
     </ul>  
   </nav>  
 )
}

export default Navbar
