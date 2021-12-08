import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Header() {
  return (
    <ul>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Beach Luxx-Resort</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/">Home Page</Nav.Link>
            <Nav.Link href="/Packages">Packages</Nav.Link>
            <Nav.Link href="/SubmitReviews">Submit Reviews</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </ul>
  )
}

export default Header
