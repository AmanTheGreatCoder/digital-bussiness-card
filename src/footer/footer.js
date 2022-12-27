import React from "react";
import FooterIcon from "./footer-icon";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FooterIcon iconClass="fa-brands fa-twitter" />
        <FooterIcon iconClass="fa-brands fa-facebook-f" />
        <FooterIcon iconClass="fa-brands fa-instagram" />
        <FooterIcon iconClass="fa-brands fa-github" />
      </div>
    </div>
  );
}

export default Footer;
