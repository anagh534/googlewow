import React from "react";
import "./HeroSection.css";
import Robot from "../../../svgs/heroRobot.svg"
import Tree from "../../../svgs/keralaTree.svg"
import SymbolG from "../../../svgs/symbolG.svg"
import LowerSection from "../../../svgs/lowerSection.svg"
// import SideBar from "../../../svgs/sideBar.svg"
import HorizontalFloatingBar from "../../../svgs/horizontalFloatingBar.svg"
import Marquee from "react-fast-marquee";
import VerticalMarque from "../../Shared/Verticalmarque/VerticalMarque"
export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="upper-section">
      {/* <span className="sideBar">
      <a href="https://www.youtube.com/@Google" rel="noreferrer" target="_blank"><img src={SideBar} alt="illustrations.svg"/></a>
      </span> */}
      <VerticalMarque />
        <span className="upper-section-left">
        <span className="upper-upper-section">
        <img className="symbolG" src={SymbolG} alt="illustrations.svg"/>
        <span className="textG">
          <p>Biggest Technical</p>
          <p>Event In Kerala</p>
          </span>
      </span>
          <p className="google-developer">
          <span className="blue1">G</span>
          <span className="red1">O</span>
          <span className="yellow">O</span>
          <span className="blue1">G</span>
          <span className="green">L</span>
          <span className="red1">E</span>
          <span className="blue"> DEVELOPER</span>
          </p>
          <p className="student-clubs">
            <span className="red">STUDENT</span>
            <span className="green"> CLUBS</span>
          </p>
          <p className="kerala">KERALA<span><img src={Tree} alt="illustrations.svg"/></span></p>
          <span className="bottom-section">
          <img src={LowerSection} alt="illustrations.svg"/>
        </span>
        </span>
        <span className="upper-section-right">
          <img className="robot-image" src={Robot} alt="illustrations.svg"/>
        </span>
        </div>
        <Marquee pauseOnHover speed={1} delay={0} gradient={false}>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>
          <img src={HorizontalFloatingBar} alt="illustrations.svg"/>

        </Marquee>
    </div> 
  );
}