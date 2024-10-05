import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";
import "./NavBar.css";
function NavBar({ theme, setTheme }) {
  const [expanded, setExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
    document.body.classList.toggle("dark-mode", !isDarkMode); // Toggle dark mode class on body
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      expanded={expanded}
      className={`${theme === "dark" ? "navbar-dark" : "navbar"}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <i class="bi bi-send"></i>
          <span className="ms-2">SOCA</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          // className="navbar-toggle"
          className={theme === "dark" && "navbar-toggle-dark"}
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
            <Nav.Link
              href="#home"
              className={`${theme === "dark" ? "nav-link-dark" : "nav-link"}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={`${theme === "dark" ? "nav-link-dark" : "nav-link"}`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#testimonial"
              className={`${theme === "dark" ? "nav-link-dark" : "nav-link"}`}
            >
              Testimonial
            </Nav.Link>
            <Nav.Link
              href="#features"
              className={`${theme === "dark" ? "nav-link-dark" : "nav-link"}`}
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`${theme === "dark" ? "nav-link-dark" : "nav-link"}`}
            >
              About as
            </Nav.Link>
            <Nav.Link
              href="Contact as"
              className={`${theme === "dark" ? "nav-link-dark" : "nav-link"}`}
            >
              Contact as
            </Nav.Link>
            <div className="d-flex align-items-center">
              {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
              <Form.Check
                type="switch"
                id="dark-mode-switch"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="mx-2"
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
