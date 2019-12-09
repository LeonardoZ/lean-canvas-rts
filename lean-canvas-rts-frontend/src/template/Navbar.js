import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function CustomNavbar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Canvasdise</Navbar.Brand>
      <Nav className="mr-auto">
        <LinkContainer to="/create/canvas">
          <Nav.Link>New Canvas</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/canvases">
          <Nav.Link>Canvases</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}
