import React from "react";
import Image1 from "../assets/iamge2.png";
// import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar  ">
      {/* Left */}
      <div className="navbar-logo">
        <img src={Image1} alt="Logo" />
      </div>

      {/* Center */}
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      {/* Right */}
      <div className="navbar-actions">
        <button className="btn-outline">Sign In</button>
        <button className="btn-fill">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
