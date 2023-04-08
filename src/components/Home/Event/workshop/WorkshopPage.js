import "./workshop-page.css"
import WorkshopCard from "./WorkshopCard"
// import SideBar from "../../../../svgs/sideBar.svg"
import VerticalMarque from "../../../Shared/Verticalmarque/VerticalMarque"

function WorkshopPage() {
  return (
    <div className='event-container'>
    <VerticalMarque/>
    <div style={{color:'#D8FFCA'}} className="vertical-line-wrapper">
      <p>&lt; &gt;</p>
      <div className="vertical-line" style={{borderColor:"#109756"}}></div>
      <div className="branch" style={{borderColor:"#109756"}}></div>
      <div className="event-heading" style={{backgroundColor:"#D8FFCA"}}><p style={{color:"#00743C"}}>Workshops</p></div>
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