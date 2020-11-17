import React from 'react';
import Nav  from "react-bootstrap/Nav"
import NavDropdown  from "react-bootstrap/NavDropdown"
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"

const MyNavbar = ()=> {
  return(
  <Navbar bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/">My Tech Journey</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav >
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <NavDropdown title="Experiences" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/experiences/speakk">Speakk</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/experiences/platform45">Platform45</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/experiences/gigster">Gigster</NavDropdown.Item>
        <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/experiences/university">University</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="/info">Info</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}

export default MyNavbar;