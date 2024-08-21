import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <NavLink className={(e) => e.isActive ? "crimson" : ""} to="/"><li>Home</li></NavLink>
            <NavLink className={(e) => e.isActive ? "crimson" : ""} to="/about"><li>About</li></NavLink>
            <NavLink className={(e) => e.isActive ? "crimson" : ""} to="/team"><li>Team</li></NavLink>
            <NavLink className={(e) => e.isActive ? "crimson" : ""} to="/login"><li>Login</li></NavLink>
        </nav>
    </>
  )
}

export default Navbar