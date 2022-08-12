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
       <li>
       <Link href="/cart">
         <a>Cart</a>
      </Link>
      </li>            
      <li>
       <Link href="/setting">
         <a>Setting</a>
      </Link>
      </li> 
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
          <Link href='/remote'> 
            <a>Remote</a>
          </Link>
       </li>     
       <li>
          <Link href='/schedule'> 
            <a>Schedule</a>
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
          <Link href='/resource'> 
            <a>Resource</a>
          </Link>
       </li>     
       <li>
          <Link href='/docs'> 
            <a>Docs</a>
          </Link>
       </li> 
       <li>
          <Link href='/blog'> 
            <a>Blog</a>
          </Link>
       </li>                 
     </ul>  
   </nav>  
 )
}

export default Navbar
