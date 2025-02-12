import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
          </li>
          <li>
          <NavLink to="/services">Services</NavLink>
          </li>
          <li>
          <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
