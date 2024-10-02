import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Use Font Awesome for the close icon
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
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
          </Nav>
          <Button variant="outline-warning" className="ms-3 template-button">
            Get The Template <span className="arrow"> </span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
