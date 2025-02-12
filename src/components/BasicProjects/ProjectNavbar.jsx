import React from "react";
import { NavLink } from "react-router-dom";

const ProjectNavbar = () => {
  return (
    <div className="p-navbar">
        <div className="header">PROJECTS</div>
      <div className="container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/generateotp">Generate Otp</NavLink>
          </li>
          <li>
            <NavLink to="/changecolor">Change Color</NavLink>
          </li>
          <li>
            <NavLink to="/volume">Volume</NavLink>
          </li>
          <li>
            <NavLink to="/daynight">Day Night Mode</NavLink>
          </li>
          <li>
            <NavLink to="/digitalclock">Digital Clock</NavLink>
          </li>
          <li>
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/agecalculator"> Age Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/todolist">Todo List</NavLink>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default ProjectNavbar;
