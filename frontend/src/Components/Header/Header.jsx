import React from 'react'
import './Header.css'
import logo1 from '../Header/logo2.png'

const Header = () => {
  return (
    <>
     

      <nav className="navbar1">
        <div className="left1">
          <img src={logo1} alt="" />
        </div>
        <div className="right1">
          <ul className="list1">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Signup</a></li>

          </ul>
        </div>

      </nav>


    </>
  )
}

export default Header