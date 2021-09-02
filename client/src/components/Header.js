import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavBar, NavLink } from 'react-router-dom'

function Header() {
  return (
    <ul>
      <NavBar bg="dark" variant="dark">
        <Container>
          <NavBar.Brand to="/">NavBar</NavBar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#submit reviews">Submit Reviews</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
      <br />
      <NavBar bg="dark" variant="dark">
        <Container>
          <NavBar.Brand to="/">NavBar</NavBar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#submit reviews">Submit Reviews</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
      <br />
      <NavBar bg="dark" variant="dark">
        <Container>
          <NavBar.Brand to="/">NavBar</NavBar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#submit reviews">Submit Reviews</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
      <br />
    </ul>
  )
}

export default Header
