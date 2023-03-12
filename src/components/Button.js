import "./Button.css"

function Button(props) {
    
  return (
    <div className="button">
        <p style={{marginRight:'17px'}}>{props.buttonName}</p> 
        <img className="arrow" src= '/svgs/arrow.svg' />
    </div>
  )
}

export default Button
