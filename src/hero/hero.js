import React from "react";
import "./hero.css";
import heroImg from "../images/hover.png";
function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} alt="" />
    </div>
  );
}

export default Hero;
