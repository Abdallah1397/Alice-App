import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../assets/images/logo/alice.jpg";
import { FaBars } from "react-icons/fa";

// onClick Function Handeler for responsive navbar
const handleClickIcon = () => {
  document.querySelector("#menu").classList.toggle("active");
  // document.querySelector("#dropDown").classList.("active");
};
const handleClickNavbarItem = () => {
  document.querySelector("#menu").classList.remove("active");
  
};
// Navbar Component
const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-header_navbar">
          <div className="site-header__navbar-nav">
            <div className="site-header__logo-container">
              <img src={Logo} className="site-header__logo" />
            </div>
            <ul className="site-header__links" id="menu">
              <li>
                <NavLink exact to="/" className="site-header__link" id="item" onClick={handleClickNavbarItem}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" className="site-header__link" id="item" onClick={handleClickNavbarItem}
                >
                  OUR WORK
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="site-header__link" id="item" onClick={handleClickNavbarItem}
                >
                  About
                </NavLink>
              </li>
            </ul>
            <div className="site-header__icons">
            <ul className="site-header__icons-list">
              <li className="site-header__icons-item">
                <FaBars className="site-header__toggle" 
                onClick={handleClickIcon}
                />
              </li>
            </ul>
          </div>
          </div>
        
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
