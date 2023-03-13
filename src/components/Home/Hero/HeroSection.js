import React from 'react'
import './HeroSection.css'
import Button from '../../Shared/Custombutton/Button'
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
            <div className="btnHero">
            <Button buttonName="Explore"/>
            </div>
            <div className="leftGraphics">
            <img src='/svgs/rightGraphic.svg' alt="rightGraphics.svg"/>
            </div>
            </div>
            <div className="bottomIllustrations">
        <img src='/svgs/illustrations.svg' alt="extraIllustrations.svg"/>
        </div>   
    
    </div>
  )
}
