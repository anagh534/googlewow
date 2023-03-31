import JobFair from "../../../../svgs/jobfair.svg"
import SideBar from "../../../../svgs/sideBar.svg"
import Startup from "../../../../svgs/startup.svg"

function JobStartup() {
  return (
    <>
    <div>
        <div className='event-container'>
    <span className="sideBar">
      <a href="https://www.youtube.com/@Google" rel="noreferrer" target="_blank"><img src={SideBar} alt="illustrations.svg"/></a>
      </span>
    <div className="vertical-line-wrapper">
      <p>&lt; &gt;</p>
      <div className="vertical-line"></div>
      <div className="branch"></div>
      <div className="event-heading"><p>Job Fair</p></div>
    </div>
    <div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
        <p className="description">Lorem ipsum dolor sit amet consectetur. Hendrerit semper fames vulputate euismod erat. Malesuada in vel ac dignissim aliquam.
Lorem ipsum dolor sit amet consectetur. Hendrerit semper fames vulputate euismod erat. Malesuada in vel ac dignissim aliquam.</p>
<img src={JobFair}/>
    </div>
    </div>

    </div>
    </div>

    <div>
        <div className='event-container'>
    <span className="sideBar">
      <a href="https://www.youtube.com/@Google" rel="noreferrer" target="_blank"><img src={SideBar} alt="illustrations.svg"/></a>
      </span>
    <div className="vertical-line-wrapper">
      <p>&lt; &gt;</p>
      <div className="vertical-line"></div>
      <div className="branch"></div>
      <div className="event-heading"><p>Startup</p></div>
    </div>
    <div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
        <p className="description" >Lorem ipsum dolor sit amet consectetur. Hendrerit semper fames vulputate euismod erat. Malesuada in vel ac dignissim aliquam.
Lorem ipsum dolor sit amet consectetur. Hendrerit semper fames vulputate euismod erat. Malesuada in vel ac dignissim aliquam.</p>
<img src={Startup}/>
    </div>
    </div>

    </div>
    </div>

    
    </>
  )
}

export default JobStartup