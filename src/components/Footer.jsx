import React from "react";
import "../Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <footer>
        <p>Mohamed Salim M'hamdi ⓒ {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
