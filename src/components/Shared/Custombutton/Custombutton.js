import "./Custombutton.css";

function Button(props) {
  return (
    <div className="button">
      <p>{props.buttonName}</p>
    </div>
  );
}

export default Button;