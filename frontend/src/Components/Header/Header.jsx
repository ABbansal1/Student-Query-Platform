import React, { useState } from 'react'
import './Header.css'
import logo1 from '../Header/logo2.png'
import hamburger from '../Header/hamburger.png'

const Header = () => {

  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  
 
  return (
    <>

<header>
        <nav className='header-nav'>

			<a href="/"> <img src={logo1} alt=""/> </a>

			<button onClick={toggleMenu}><img src={hamburger} alt=""/></button>

           
			<ul className={isMenuOpen ? "toonMenu" : ""} >
				<li className='nav-li'><a className='header-a' href="/login">Login</a></li>
				<li className='nav-li'><a className='header-a' href="/register">Signup</a></li>
				
			</ul>

		</nav>
    </header>
    


    </>
  )
}

export default Header