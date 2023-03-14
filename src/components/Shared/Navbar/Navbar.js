import React from "react";
import "./Navbar.css";
// import logo from '/svgs/Logo.svg'
import CustomButton from "../Custombutton/Custombutton";

import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar">
      {/* <a href="/"><h1 className='WoW'>WoW</h1></a> */}
      <NavLink to="/">
        <img className="logo" src="/svgs/Logo.svg" alt="WoW Logo" />{" "}
      </NavLink>
      <div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Regions">Regions</a>
          </li>
          <li>
            <a href="/Events">Events</a>
          </li>
          <li>
            <a href="/Sponsors">Sponsors</a>
          </li>
          <li>
            <a href="/About">About us</a>
          </li>
          <li>
            <a href="/ContactUs">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="btn">
        <CustomButton buttonName="Register Now" />
      </div>
      <button className="mobile-menu-icon">
        {isMobile ? (
          <i className="fas fa-times" onClick={() => setIsMobile(false)}></i>
        ) : (
          <i className="fas fa-bars" onClick={() => setIsMobile(true)}></i>
        )}
      </button>
    </div>
  );
}
