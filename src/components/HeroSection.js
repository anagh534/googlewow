import React from 'react'
import './HeroSection.css'
import leftGraphic from '../attributes/leftGraphic.svg'
import rightGraphic from '../attributes/rightGraphic.svg'
import Button from '../attributes/Explore.svg'
import illustrations from '../attributes/illustrations.svg'
import { NavLink } from 'react-router-dom'


export default function HeroSection() {
  return (
    <div>
    <div className="upperSection">
        <h3 className="toCenter">Hello, We Welcome you to</h3>
        <h1 className="brightColors">GOOGLE DEVELOPER STUDENT CLUBS</h1>
        <h1 className="kerala">KERALA</h1>
        </div>
        <div className="centerGraphics">
        <div className="leftGraphics">
            <img src={leftGraphic}  alt="leftGraphics.svg"/>
            </div>
            <div className="btnHero">
            <NavLink to="/"><img src={Button} alt="centerButton.svg"/></NavLink>
            </div>
            <div className="leftGraphics">
            <img src={rightGraphic} alt="rightGraphics.svg"/>
            </div>
            </div>
            <div className="bottomIllustrations">
        <img src={illustrations} alt="extraIllustrations.svg"/>
        </div>   
    
    </div>
  )
}
