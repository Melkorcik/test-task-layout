import Images from "./Images";
import "./style.css";
export default function MainContent(props) {
  var isEmptyIndex = props.i !== null || props.i !== undefined ? true : false;
  var MyClass = "";

  if (props.i === 0 || props.i > 2) MyClass = "figures";
  if (props.i === 1) MyClass = "figures-1";
  if (props.i === 2) MyClass = "figures-2";

  return (
    <div className="img-box">
      {isEmptyIndex && (
        <img
          src={Images[props.i > 2 ? 0 : props.i]}
          alt="img"
          className={MyClass}
        />
      )}
    </div>
  );
}
