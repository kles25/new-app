import React from "react";

function Footer() {
  return (
    <div className="footer-holder">
      <footer>
        <div className="pages-row">
          <div className="pages-col-2">
            <div className="home-logo">Les</div>
          </div>
          <div className="pages-col-7 footer-links-holder">
            <nav><a href="">PRIVACY AND POLICY</a></nav>
            <nav><a href="">TERMS AND CONDITIONS</a></nav>
            <nav><a href="/login">LOGIN</a></nav>
            <nav><a href="/signup">REGISTER</a></nav>
          </div>
          <div className="pages-col-3 social-link-holder">
            <div className="social-links-footer">
              <a href="">i</a>
              <a href="">f</a>
              <a href="">y</a>
              <a href="">x</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
