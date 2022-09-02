import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/UserNavbar.css";

function AdminNavbar() {
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
                to="/admin/home"
                activeClassName="active"
                id="userhomelink"
                className="nav-links"
                onClick={handleClick}
              >
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/admin/booking"
                activeClassName="active"
                id="mybookinglink"
                className="nav-links"
                onClick={handleClick}
              >
                Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/admin/users"
                activeClassName="active"
                id="mybookinglink"
                className="nav-links"
                onClick={handleClick}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/admin/professionals"
                activeClassName="active"
                id="mybookinglink"
                className="nav-links"
                onClick={handleClick}
              >
                Professionals
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/admin-login"
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

export default AdminNavbar;
