import SideBar from "../../../../svgs/sideBar.svg"
import hackathonImg from "../../../../svgs/hackathons.svg"
import "./hackathon.css"

function Hackathon() {
  return (
    <>
    <p style={{fontFamily:"Open Sans",fontStyle:"normal",fontWeight:"700",fontSize:"48px",lineHeight:"61px",color:"#109756",marginTop:"48px",marginLeft:"142px"}} >Events</p>
    <div>
        <div className='event-container'>
    <span className="sideBar">
      <a href="https://www.youtube.com/@Google" rel="noreferrer" target="_blank"><img src={SideBar} alt="illustrations.svg"/></a>
      </span>
    <div className="vertical-line-wrapper">
      <p>&lt; &gt;</p>
      <div className="vertical-line"></div>
      <div className="branch"></div>
      <div className="event-heading"><p>Hackathon</p></div>
    </div>
    <div style={{display:"flex", justifyContent:"center",width:"100%",alignItems:"center"}}>
    <img className="hackathon-img" src={hackathonImg} />
    </div>
   
   
    </div>
    </div>
    </>
  )
}

export default Hackathon