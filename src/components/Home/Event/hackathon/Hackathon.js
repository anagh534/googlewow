// import SideBar from "../../../../svgs/sideBar.svg"
import hackathonImg from "../../../../svgs/hackathons.svg"
import "./hackathon.css"
import VerticalMarque from "../../../Shared/Verticalmarque/VerticalMarque"


function Hackathon() {
  return (
    <>
    <p className="hackathon-heading" >Events</p>
    
    <div>
        <div className='event-container'>
    <VerticalMarque/>
    <div className="vertical-line-wrapper">
      <p>&lt; &gt;</p>
      <div className="vertical-line"></div>
      <div className="branch"></div>
      <div className="event-heading"><p>Hackathon</p></div>
    </div>
    <div className="hack-img-wrapper">
    
      <img 
      className="hackathon-img" 
      src={hackathonImg} alt="illustrations.svg"/>
    
    </div>
   
   
    </div>
    </div>
    </>
  )
}

export default Hackathon