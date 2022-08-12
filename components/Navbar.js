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
       <li className="dropdown">startup</a>
         <Link href='/about' scroll={true}>
            <a>Startup<div className="dropdownContent">
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </a>
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
            <a>LogIn</a>
          </Link>
       </li> 
       <li>
       <Link href="/cart" scroll={true}>
         <a>Cart</a>
      </Link>
      </li>            
      <li>
       <Link href="/setting" scroll={true}>
         <a><b>Setting</b></a>
      </Link>
      </li> 
      <li>
        <Link href='/about'> scroll={true}>
         <a>About</a>
         </Link>
       </li>
       <li>
         <Link href='/privacy'> scroll={true}>
           <a>Privacy</a>
         </Link>
       </li>
       <li>
          <Link href='/help'> scroll={true}>
            <a>Help</a>
          </Link>
       </li>     
       <li>
          <Link href='/remote'> scroll={true}>
            <a>Remote</a>
          </Link>
       </li>     
       <li>
          <Link href='/schedule'> scroll={true}>
            <a>Schedule</a>
          </Link>
       </li>     
       <li>
          <Link href='/feedback'> scroll={true}>
            <a>Feedback</a>
          </Link>
       </li>     
       <li>
          <Link href='/faq'> scroll={true}>
            <a>FAQ</a>
          </Link>
       </li> 
       <li>
          <Link href='/resource'> scroll={true}>
            <a>Resource</a>
          </Link>
       </li>     
       <li>
          <Link href='/docs'> scroll={true}>
            <a>Docs</a>
          </Link>
       </li> 
       <li>
          <Link href='/blog'> scroll={true}>
            <a>Blog</a>
          </Link>
       </li>                 
     </ul>  
   </nav>  
 )
}

export default Navbar
