import Link from 'next/link'
import Sidebar from '../components/Sidebar'


function Navbar() {
  return (
      <nav className={'skip-nav'}>
      <ul className={'main-nav'}>
      <h1 className='logo'>
          <Link href='/dashboard'>
          <a>RunAsh</a>
          </Link>
        </h1>
       <li>
         <Link href='/about'>
            <a></a>
         </Link>
       </li>
       <li>
         <Link href='/seller'>
           <a></a>
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
          <Link href='/schedule'>
            <a>Schedule</a>
          </Link>
       </li> 
       <li>
       <Link href="/live">
         <a>Live</a>
      </Link>
      </li>       
      <li>
       <Link href="/influencers">
         <a>Influencers</a>
      </Link>
      </li>               
       <li>
          <Link href='/watch'>
            <a>Watch</a>
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
     </ul>  
   </nav>
 )
}

export default Navbar
