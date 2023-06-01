import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-container__nav">
    <p>Youtube</p>    
  <ul>
      
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              {" "}
              About Us
            </NavLink>
          </li>
          </ul>
          </div>
         </header>
        )
        }

        export default Header;