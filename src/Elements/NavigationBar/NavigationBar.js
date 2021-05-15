import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const NavigationBar=()=>{
  const [expand, updateExpanded] = useState(false);
  const [addColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  //const scrollHandler=()=>{window.scrollY>=20?updateNavbar(true):updateNavbar(false)}

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={addColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <span className="logo-text">Dev.rayhan</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link className="my-2" as={Link} to="/" onClick={() => updateExpanded(false)}>
                 Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="my-2"
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
             About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="my-2"
                as={Link}
                to="/services"
                onClick={() => updateExpanded(false)}
              >
          Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="my-2"
                as={Link}
                to="/portfolio"
                onClick={() => updateExpanded(false)}
              >
              Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="my-2"
                as={Link}
                to="/news"
                onClick={() => updateExpanded(false)}
              >
           News
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="my-2"
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
           Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;