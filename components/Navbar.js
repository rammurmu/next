import Link from 'next/link'

function Navbar() {
  return (
      <nav className='header'>
        <h1 className='logo'>
          <a href='/index'>RunAsh.live</a>
        </h1>
      <ul className={'main-nav'}>
       <li>
         <Link href='/about'>
            <a>Startup</a>
         </Link>
       </li>
       <li>
         <Link href='/seller'>
           <a>Become a seller</a>
         </Link>
       </li>
       <li>
          <Link href='/buyer'>
            <a>Become a buyer</a>
          </Link>
       </li>
       <li>
          <Link href='/js-form'>
            <a>Login</a>
          </Link>
       </li>
     </ul>
   </nav>
 )
}

export default Navbar
