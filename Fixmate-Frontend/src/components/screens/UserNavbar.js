import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/UserNavbar.css";

function UserNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleLogout = () => {
    localStorage.clear();
  }
  return (
    <>
      <nav className="navbar">
        
          <div className="logo1">
          <p>FixMate</p>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink
                exact
                to="/user/home"
                activeClassName="active"
                id="userhomelink"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/user/mybooking"
                activeClassName="active"
                id="mybookinglink"
                className="nav-links"
                onClick={handleClick}
              >
                My booking
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/user/myprofile"
                activeClassName="active"
                id="mybookinglink"
                className="nav-links"
                onClick={handleClick}
              >
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                id="logoutlink"
                className="nav-links"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        
      </nav>
    </>
  );
}

export default UserNavbar;
