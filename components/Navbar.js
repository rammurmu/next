import Link from 'next/link'
import Sidebar from '../components/Sidebar'


function Navbar() {
  return (
      <main className={styles.main}>
      <nav className={'skip-nav'}>
      <ul className={'main-nav'}>
      <h1 className='logo'>
          <Link href='/dashboard'>
          <a>RunAsh</a>
          </Link>
        </h1>
       <li>
         <Link href='/about'>
            <a>Startup</a>
         </Link>
       </li>
       <li>
         <Link href='/seller'>
           <a>Seller</a>
         </Link>
       </li>
       <li>
          <Link href='/buyer'>
            <a>Buyer</a>
          </Link>
       </li>     
       <li>
          <Link href='/live'>
            <a>Live</a>
          </Link>
       </li>     
       <li>
          <Link href='/watch'>
            <a>Watch</a>
          </Link>
       </li> 
       <li>
       <Link href="/influencers">
         <a>Influencers</a>
      </Link>
      </li>       
      <li>
       <Link href="/store">
         <a>Store</a>
      </Link>
      </li>               
       <li>
          <Link href='/js-form'>
            <a>LogIn</a>
          </Link>
       </li>        
     </ul>  
   </nav> 
</main>
 )
}

export default Navbar
