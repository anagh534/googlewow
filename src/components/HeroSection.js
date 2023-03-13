import React from 'react'
import './HeroSection.css'
import Button from './Button'
// import leftGraphic from 
// import rightGraphic from '
// import Button from 
// import illustrations from 


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
            <img src='/svgs/leftGraphic.svg'  alt="leftGraphics.svg"/>
            </div>
<<<<<<< HEAD
            
=======
            <div className="btnHero">
            <Button buttonName="Explore"/>
            </div>
>>>>>>> a710ba1f12c9b87c2ea4fd51f46c82a68c8445c5
            <div className="leftGraphics">
            <img src='/svgs/rightGraphic.svg' alt="rightGraphics.svg"/>
            </div>
            </div>
            <div className="bottomIllustrations">
        <img src='/svgs/illustrations.svg' alt="extraIllustrations.svg"/>
        </div>   
        <div className="btnHero">
            <NavLink to="/"><img src='/svgs/Explore.svg' alt="centerButton.svg"/></NavLink>
            </div>
    
    </div>
  )
}
