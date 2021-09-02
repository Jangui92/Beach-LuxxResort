import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <ul className="nav-links">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink to="/packages">
          <li>Packages</li>
        </NavLink>

        <NavLink to="/SubmitReviews">
          <li>Submit Reviews</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Header
