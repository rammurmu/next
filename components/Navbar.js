import Link from 'next/link'
import Sidebar from '../components/Sidebar'


function Navbar() {
  return (
      <nav className={'header'}>
       <li className='logo'>
         <Link href='/index'>
         <a>
           <b>RunAsh</b>
         </a>
         </Link>
       </li>
       
      <ul className={'main-nav'}>
      <li> 
          <Link href='/about'>
          <a>About</a>
          </Link>
        </li>
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
          <Link href='/store'>
            <a>Store</a>
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
