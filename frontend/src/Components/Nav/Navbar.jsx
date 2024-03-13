import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Nav/logo2.png'
import hamburger from '../Nav/hamburger.png'
const Header = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <>
      {/* <nav class="navbar">
        <div class="left">
            <img src={logo} alt="" />
        </div>
        <div class="right">
            <ul class="list">
            <li><a href="/">home</a></li>
            <li><a href="/users">USERS</a></li>
            <li><a href="/profile">PROFILE</a></li>
            
            <button >
              <a href='/newquery'>Create Query</a>
            </button>
            </ul>
        </div>
       
    </nav> */}



      <header>
        <nav className='main-nav'>

          <a href="/"> <img src={logo} alt="" /> </a>

          <button onClick={toggleMenu}><img src={hamburger} alt="" /></button>


          <ul className={isMenuOpen ? "toonMenu" : ""}>
            <li><a className='nav-design' href="/">Home</a></li>
            <li><a className='nav-design' href="/users">Users</a></li>
            <li><a className='nav-design' href="/profile">Profile</a></li>
            <li><a className='nav-design' href="/newquery">Create Query</a></li>
          </ul>

        </nav>
      </header>

    </>
  )
}

export default Header