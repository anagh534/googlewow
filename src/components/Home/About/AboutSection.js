import React from "react";
import "./AboutSection.css";
// import SideBar from "../../../svgs/sideBar.svg"
import VerticalMarque from "../../Shared/Verticalmarque/VerticalMarque"

export default function AboutSection() {
  return (
    <>
      <span className="container">
        <span className="about">
          <VerticalMarque />
          {/* <span className="sideBarAbout">
          <a href="https://www.youtube.com/@Google" rel="noreferrer" target="_blank"><img src={SideBar} alt="illustrations.svg" /></a>
        </span> */}
          <span className="aboutUsText">
            <p>About</p>
          </span>
          <span className="left-section">
            <span className="left-top">
              <img src="./img/Group 130.png" alt="" />
              <p>
                We strongly believe in the transformative power of <br />
                technology. <span>GDSC Kerala</span> community has come <br />
                together as a platform to showcase the incredible <br />
                potential of young student developers from Kerala.
              </p>
            </span>
            <span className="left-bottom">
              <img src="./img/Slice 1.png" alt="" />
            </span>
          </span>
          <span className="right-section">
            <span className="right-top">
              <img src="./img/Group 14.png" alt="" />
              <img src="./img/Wonder of Wonders.png" alt="" />
            </span>
            <span className="right-down">
              <h2>
                How <span>GDSC</span> helps?
              </h2>
              <p>
                We are proud of how <span>GDSC</span> can enhance confidence,
                <br />
                innovation, and performance among young technologists. <br />
                For us, <span>GDSC Kerala</span> is about more than just
                developing <br />
                technical skills. It's about cultivating a sense of belonging{" "}
                <br />
                and community among students in Kerala, where the <br />
                richness of our culture and the boundless potential of our{" "}
                <br />
                technology sector converge.
              </p>
            </span>
          </span>
        </span>
      </span>
    </>
  );
}
