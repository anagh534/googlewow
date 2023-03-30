import "./workshop-card.css"


function WorkshopCard({photo,color,darkColor}) {
  return (
    <div style={{display:"flex" ,justifyContent:"center",alignItems:"center",height:"100vh"}} >
        <div className="main-container" style={{backgroundColor:`${color}`}}>
            <div className="white-container">
                <img className="photo" src={photo} />
                <div className="cut"></div>
            </div>
            <div className="info-wrapper" style={{color:`${darkColor}`}}>
                <p className="heading">Metaverse</p>
                <div className="purple-div" style={{backgroundColor:`${darkColor}`}}><p>CHALLENGING</p></div>
                <p className="description">Unleash competitive spirit by participating in it and unleash your potential</p>
                <div className="line-arrow">
                    <div className="line"></div>
                    <img src="./svgs/arrow.svg" />
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default WorkshopCard