import React from 'react'
import './App.css'
import { link } from 'react-router-dom'

function Header() {
  return (
    <Header>
      <ul className="nav-links">
        <link to="/">
          <li>Home</li>
        </link>

        <link to="/experience">
          <li>Experience</li>
        </link>

        <link to="/packages">
          <li>Packages</li>
        </link>

        <link to="/reviews">
          <li>Reviews</li>
        </link>
      </ul>
    </Header>
  )
}

export default Header
