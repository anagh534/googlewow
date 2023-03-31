import "./workshop-page.css"
import WorkshopCard from "./WorkshopCard"
import SideBar from "../../../../svgs/sideBar.svg"

function WorkshopPage() {
  return (
    <div className='event-container'>
    <span className="sideBar">
      <a href="https://www.youtube.com/@Google" rel="noreferrer" target="_blank"><img src={SideBar} alt="illustrations.svg"/></a>
      </span>
    <div style={{color:'#D8FFCA'}} className="vertical-line-wrapper">
      <p>&lt; &gt;</p>
      <div className="vertical-line"></div>
      <div className="branch"></div>
      <div className="event-heading"><p>Workshops</p></div>
    </div>
    <div className="card-wrapper">
    <WorkshopCard photo={"/img/metaverse.png"} color={"#E0BAFF"} darkColor={"#470082"} heading={"Metaverse"} description={"Unleash competitive spirit by participating in it and unleash your potential"}/>
    <WorkshopCard photo={"/img/ai.png"} color={"#B0DDFF"} darkColor={"#005DA3"} heading={"AI & ML"} description={"Unleash competitive spirit by participating in it and unleash your potential"}/>
    <WorkshopCard photo={"/img/metaverse.png"} color={"#E0BAFF"} darkColor={"#470082"} heading={"Metaverse"} description={"Unleash competitive spirit by participating in it and unleash your potential"}/>

    </div>
    </div>
  )
}

export default WorkshopPage