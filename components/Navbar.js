import Link from 'next/link'
import Sidebar from '../components/Sidebar'


function Navbar() {
  return (
      <nav className={'header'}>
       <p className={styles.p}>welcome to runash</p>
        <br />
      <ul className={'main-nav'}>
      <h1 className='logo'>
          <Link href='/index'>
          <a>RunAsh</a>
          </Link>
        </h1>
       <li>
         <Link href='/live'>
           <a>Live</a>
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
          <Link href='/schedules'>
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
              <a>Signin</a>
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
 )
}

export default Navbar
