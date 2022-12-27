import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hero from "./hero/hero";
import IntroText from "./intro/intro.js";
import SocialButton from "./Button/button.js";
import TBox from "./textbox/textbox";
import Footer from "./footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="main-card">
    <Hero />
    <IntroText />
    <div className="btns">
      <SocialButton iClass="fa-solid fa-envelope" btnText="Email" />
      <SocialButton
        btnStyle={{
          border: "none",
          color: "#ffffff",
          background: "#5093E2",
        }}
        iClass="fa-brands fa-linkedin"
        btnText="LinkedIn"
      />
    </div>

    <div className="contentTexts">
      <TBox
        maintext="About"
        subtext="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
      />
      <TBox
        maintext="Interests"
        subtext="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
      />
    </div>
    <Footer />
  </div>
);
