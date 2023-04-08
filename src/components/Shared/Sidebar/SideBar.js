import React from 'react'
// import Marquee from "react-fast-marquee"
import DownArrow from "../../../svgs/downarrow.svg"
import "./sidebar.css"
function SideBar() {
  return (
    
    <div className="side-bar">
    <div style={{display:"flex",}}>
    <img className="down-arrow" src={DownArrow} alt="illustrations.svg"/>
      <p className="scroll-down">Scroll Down</p>
    </div>
      
      <p>#JobFair</p>
    </div>
    
  )
}

export default SideBar