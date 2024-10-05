import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./NavBar.css";
function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" sticky="top" expanded={expanded} className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <i class="bi bi-send"></i>
          <span className="ms-2">SOCA</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          {expanded ? (
            <FaTimes size={24} />
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </Navbar.Toggle>

        {/* Navigation Links and Button */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#projects">About us</Nav.Link>
            <Nav.Link href="#contactus">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
