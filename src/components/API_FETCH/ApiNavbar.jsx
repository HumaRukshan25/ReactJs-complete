import React from "react";
import { NavLink } from "react-router-dom";

const ApiNavbar = () => {
  return (
    <>
    <div className="api-header">webpages</div>
     <ul>
      <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/shopping">SHOPPING</NavLink>
        </li>
        <li>
          <NavLink to="/searchmovies">Search Movies</NavLink>
        </li>
        <li>
          <NavLink to="/searchemoji">Search Emoji</NavLink>
        </li>
        <li>
          <NavLink to="/qrcodegenerator">QR Code Generator</NavLink>
        </li>
      </ul>
    </>
  );
};

export default ApiNavbar;
