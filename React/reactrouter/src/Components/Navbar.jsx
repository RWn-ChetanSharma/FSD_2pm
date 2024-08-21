import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";

function Navbar() {
  const params = useParams()
  return (
    <>
      <nav>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/about">
          <li>About</li>
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/team">
          <li>Team</li>
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/login">
          <li>Login</li>
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/profiles">
          <li>Profile</li>
        </NavLink>
        <h3>Profile : {params.profileId}</h3>
      </nav>
    </>
  );
}

export default Navbar;
