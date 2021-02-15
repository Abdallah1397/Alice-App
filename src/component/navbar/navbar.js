import React from "react";
import logo from "../../assets/images/logo/alice.jpg";
import { NavLink as Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="container ">
      <div className="row  align-items-center navContainer">
        <img src={logo} className="col-lg-2 col-4" />
        <div className="col-lg-10 menu ">
          <div className="row navItem">
            <Link exact to="/" className="col-lg-3 item">
              Home
            </Link>
            <Link exact to="/work" className="col-lg-3 item">
              Our Work
            </Link>
            <Link exact to="/about" className="col-lg-3 item">
              About
            </Link>
            <Link exact to="/test" className="col-lg-3 item">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
