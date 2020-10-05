import React from "react";
import "./FooterStyle.css";

function Footer() {
  return (
    <footer id="footer" className="py-2 bg-dark text-white-50 fixed-bottom">
      <div className="container text-center">
        <small>Copyright &copy; Paul Sloderbeck 2020</small>
        <small> // 205-249-7641 // </small>
        <small> paul.sloderbeck@gmail.com //</small>
        <small>
          <a
            href={require("../../documents/Resume-PaulSloderbeck.pdf")}
            target="_blank"
          >
            Resume
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
