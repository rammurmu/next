import Link from 'next/link'

function Navbar() {
  return (
      <nav className='header'>
        <h1 className='logo'>
          <Link href='/dashboard'>
          <a>RunAsh</a>
          </Link>
        </h1>
      <ul className={'main-nav'}>
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
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
       </li>     
       <li>
          <Link href='/js-form'>
            <a>Signin</a>
          </Link>
       </li>     
       <li>
          <Link href='/live'>
            <a>Live</a>
          </Link>
       </li>     
       <li>
          <Link href='/productlist'>
            <a>Login</a>
          </Link>
       </li>     
        
     </ul>
   </nav>
 )
}

export default Navbar
