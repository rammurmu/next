import Link from 'next/link'
import '../components/Navbar.css'

function Navbar() {
  return (
      <nav className='header'>
        <h1 className='logo'>
          <a href='/home'>RunAsh</a>
        </h1>
      <ul className={'main-nav'}>
       <li>
         <Link href='/home'>
           <a>Home</a>
         </Link>
       </li>
       <li>
         <Link href='/about'>
            <a>About</a>
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
     </ul>
     </nav>
 )
}

export default Navbar
