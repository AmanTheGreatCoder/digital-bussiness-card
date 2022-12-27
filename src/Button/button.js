import React from "react";
import "./button.css";

function Button(props) {
  return (
    <div className="social-btn">
      <button style={props.btnStyle}>
        <i class={props.iClass}></i>
        <div className="btn-text">{props.btnText}</div>
      </button>
    </div>
  );
}

export default Button;
