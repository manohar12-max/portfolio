import React, { useEffect, useState } from "react";
import "./heder.css";
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

 


  const [toggle, setToggle] = useState(false);

  const [navLink, setNavLink] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Manohar
        </a>
        <div className={`${toggle ? "nav__menu show-menu" : "nav__menu"}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                onClick={() => {
                  setNavLink("#home");
                }}
                href="#home"
                className={`nav__link ${
                  navLink === "#home" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => {
                  setNavLink("#about");
                }}
                href="#about"
                className={`nav__link ${
                  navLink === "#about" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => {
                  setNavLink("#skills");
                }}
                href="#skills"
                className={`nav__link ${
                  navLink === "#skills" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => {
                  setNavLink("#projects");
                }}
                href="#projects"
                className={`nav__link ${
                  navLink === "#projects" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => {
                  setNavLink("#qualification");
                }}
                href="#qualification"
                className={`nav__link ${
                  navLink === "#qualification" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-scenery nav__icon"></i>Qualification
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => {
                  setNavLink("#contact");
                }}
                href="#contact"
                className={`nav__link ${
                  navLink === "#contact" ? "active-link" : ""
                }`}
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            onClick={() => {
              setToggle(false);
            }}
            className="uil uil-times nav__close"
          ></i>
        </div>
        <div
          className="nav__toggle"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
