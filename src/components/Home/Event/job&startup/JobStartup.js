import JobFair from "../../../../svgs/jobfair.svg"
// import SideBar from "../../../../svgs/sideBar.svg"
import Startup from "../../../../svgs/startup.svg"
import VerticalMarque from "../../../Shared/Verticalmarque/VerticalMarque"
import "./JobStartup.css"

function JobStartup() {
  return (
    <>
    <div>
        <div className='event-container'>
    <VerticalMarque/>
    <div className="vertical-line-wrapper">
      <p>&lt; &gt;</p>
      <div className="vertical-line"></div>
      <div className="branch"></div>
      <div className="event-heading"><p>Job Fair</p></div>
    </div>
    <div>
    <div className="job-wrapper" >
        <p className="description">Lorem ipsum dolor sit amet consectetur. Hendrerit semper fames vulputate euismod erat. Malesuada in vel ac dignissim aliquam.
Lorem ipsum dolor sit amet consectetur. Hendrerit semper fames vulputate euismod erat. Malesuada in vel ac dignissim aliquam.</p>
<img className="job-img" src={JobFair} alt="illustrations.svg"/>
    </div>
    </div>

    </div>
    </div>

    <div>
        <div className='event-container'>
    <VerticalMarque/>
    <div className="vertical-line-wrapper">
      <p>&lt; &gt;</p>
      <div className="vertical-line" style={{borderColor:"#109756"}}></div>
      <div className="branch" style={{borderColor:"#109756"}}></div>
      <div className="event-heading" style={{backgroundColor:"#D8FFCA"}}><p style={{color:"#00743C"}}>Startup</p></div>

    </div>
    <div>
    <div className="job-wrapper">
        <p className="description" >Lorem ipsum dolor sit amet consectetur. Hendrerit semper fames vulputate euismod erat. Malesuada in vel ac dignissim aliquam.
Lorem ipsum dolor sit amet consectetur. Hendrerit semper fames vulputate euismod erat. Malesuada in vel ac dignissim aliquam.</p>
<img className="job-img"  src={Startup} alt="illustrations.svg"/>
    </div>
    </div>

    </div>
    </div>

    
    </>
  )
}

export default JobStartup