import React from "react";
import "./Navbar.css";
import cake from "../../assets/images/cake-logo.jpg";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div className="left-navbar">
        <img src={cake} className="cake-logo"></img>
        <p className="brand">Cake Love</p>
      </div>
      <div className="right-navbar">
        <div className="nav-element" id="active">
          Cake Maker
        </div>
        <div className="nav-element">Orders</div>
      </div>
    </div>
  );
};

export default Navbar;
