import React from "react"
import "./workshop-card.css"
import Arrow from "../../../../svgs/arrow.svg"



function WorkshopCard({photo,color,darkColor,heading,description}) {
  return (
    <div >
        <div className="main-container" style={{backgroundColor:`${color}`}}>
            <div className="white-container">
                <img className="photo" src={photo} />
                <div className="cut"></div>
            </div>
            <div className="info-wrapper" style={{color:`${darkColor}`}}>
                <p className="heading">{heading}</p>
                <div className="purple-div" style={{backgroundColor:`${darkColor}`}}><p>CHALLENGING</p></div>
                <p className="card-description">{description}</p>
                <div className="line-arrow">
                    <div className="line"></div>
                    <img src={Arrow} />
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default WorkshopCard