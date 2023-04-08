import React from 'react'
import './Navbar.css'
import Custombutton from "../Custombutton/Custombutton";
import Logo from "../../../svgs/Logo.svg"
// import YellowHamburger from "../../../svgs/yellowHamburger.svg"

import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="navbar">
      {/*<img className="yellow-hamburger" src={YellowHamburger} alt="illustrations.svg"/>*/}
      {/* <a href="https://www.linkedin.com/in/pranavprashant/" rel="noreferrer" target="_blank"><img src={YellowHamburger} alt="illustrations.svg"/></a> */}
    <NavLink to='/'><img className='logo' src={Logo} alt='WoW Logo'/> </NavLink>
      <div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} >
          <li><a href="/">Home</a></li>
          <li><a href="/Regions">Regions</a></li>
          <li><a href="/Events">Events</a></li>
          <li><a href="/Sponsors">Sponsors</a></li>
          <li><a href="/About">About us</a></li>
          <li><a href="/ContactUs">Contact us</a></li>
        </ul>
      </div>
            <div className="btn">
          <Custombutton buttonName="Sign In" />
      </div>
      <button className='mobile-menu-icon'>
        {isMobile ? (<i className="fas fa-times" onClick={() => setIsMobile(false)}></i>) : (<i className="fas fa-bars" onClick={() => setIsMobile(true)}></i>)}
      </button>
    </div>
  )
}
