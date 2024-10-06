import { Navbar, Nav, Container, Form, Image } from "react-bootstrap";
import { useState } from "react";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../assets/Google_idn54zjU0j_2 copy.png";
function NavBar({ theme, setTheme }) {
  const [expanded, setExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      expanded={expanded}
      className={`${theme === "dark" ? "navbar-dark" : "navbar"}`}
    >
      <Container className="p-0">
        <Navbar.Brand href="#home" className="navbar-brand">
          {/* <i class="bi bi-send"></i>
          <span className="ms-2">SOCA</span> */}
          <Image src={logo} alt="logo" className="nav-logo" fluid />
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
              href="#aboutus"
              className={`${theme === "dark" ? "nav-link-dark" : "nav-link"}`}
            >
              About as
            </Nav.Link>
            <Nav.Link
              href="#contactus"
              className={`${theme === "dark" ? "nav-link-dark" : "nav-link"}`}
            >
              Contact as
            </Nav.Link>
            <div className="d-flex align-items-center ms-2">
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
