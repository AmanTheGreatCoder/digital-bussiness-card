import React from "react";
import "./textbox.css";
function TBox(props) {
  return (
    <div>
      <div className="main-text">
        {props.maintext}
        <div className="sub-text">{props.subtext}</div>
      </div>
    </div>
  );
}

export default TBox;
