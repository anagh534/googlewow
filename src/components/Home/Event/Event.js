import "./event.css"

function Event() {
  return (
    <div className='main-container'>
    <div className="vertical-line-wrapper">
      <p>&lt; &gt;</p>
      <div className="vertical-line"></div>
      <div className="branch"></div>
      <div className="event-heading"><p>Job Fair</p></div>
    </div>
    <div className="description">
      <div className="info">Lorem ipsum dolor sit amet consectetur. Hendrerit semper fames vulputate euismod erat. Malesuada in vel ac dignissim aliquam.
Lorem ipsum dolor sit amet consectetur. Hendrerit semper fames vulputate euismod erat. Malesuada in vel ac dignissim aliquam.</div>
<img src="./svgs/jobfair.svg" />
    </div>
    
    <div className="details"></div>
    </div>
  )
}

export default Event