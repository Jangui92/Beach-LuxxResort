import React from 'react'
import { Navbar, Container, NavLink, Nav } from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/" className="home-font">
            {' '}
            Beach Luxx-Resort
          </Navbar.Brand>
          <Nav className="navBar">
            <NavLink to="/" className="home-font">
              Home
            </NavLink>
            <NavLink to="/Packages" className="home-font">
              Packages
            </NavLink>
            <NavLink to="/SubmitReviews" className="home-font">
              Submit Reviews
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
