import Link from 'next/link'
import Sidebar from '../components/Sidebar'

function Navbar() {
  return (
      <ul className={'main-nav'}>
      <h1 className='logo'>
          <Link href='/dashboard'>
          <a>RunAsh</a>
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
          <Link href='/blog' scroll={true}>
            <a>Blog</a>
          </Link>
       </li>     
       <li>
          <Link href='/live' scroll={true}>
            <a>Live</a>
          </Link>
       </li>     
       <li>
          <Link href='/js-form' scroll={true}>
            <a>Sign In</a>
          </Link>
       </li>     
       <li>
          <Link href='/productlist' scroll={true}>
            <a><button type="submit">Login</button></a>
          </Link>
       </li> 
       <li>
       <Link href="/support" scroll={true}>
         <a>Support </a>
      </Link>
      </li>       
      <li>
       <Link href="/github/runash" scroll={true}>
         <a>⚙️</a>
      </Link>
      </li>       
     </ul>
 )
}

export default Navbar
