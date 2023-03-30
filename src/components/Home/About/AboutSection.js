import React from "react";
// import textBox from ''
import "./AboutSection.css";
// import illustration from

export default function AboutSection() {
  return (
    <>
      <div className="container">
        <h1>About us</h1>
        <div className="about">
          <div className="left-section">
            <div className="left-top">
              <img src="./img/Group 130.png" alt="" />
              <p>
                We strongly believe in the transformative power of <br />
                technology. <span>GDSC Kerala</span> community has come <br />
                together as a platform to showcase the incredible <br />
                potential of young student developers from Kerala.
              </p>
            </div>
            <div className="left-bottom">
              <img src="./img/Slice 1.png" alt="" />
            </div>
          </div>
          <div className="right-section">
            <div className="right-top">
              <img src="./img/Group 14.png" alt="" />
              <img src="./img/Wonder of Wonders.png" alt="" />
            </div>
            <div className="right-down">
              <h2>How <span>GDSC</span> helps?</h2>
              <p>
                We are proud of how <span>GDSC</span> can enhance confidence,<br />
                innovation, and performance among young technologists. <br />
                For us, <span>GDSC Kerala</span> is about more than just developing <br />
                technical skills. It's about cultivating a sense of belonging <br />
                and community among students in Kerala, where the <br />
                richness of our culture and the boundless potential of our <br />
                technology sector converge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
