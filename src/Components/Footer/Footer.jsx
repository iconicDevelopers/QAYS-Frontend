import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";
import ContactFormModal from "./ContactFormModal";

const Footer = ({ theme }) => {
  return (
    <div className={theme === "dark" ? "footer-dark" : "footer"}>
      <Container>
        <ContactFormModal />

        {/* Social Media Icons */}
        <Row className="justify-content-center mt-3">
          <Col xs="auto" className="social-icons-wrapper">
            <a
              href="https://instagram.com/your-instagram-id"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
              style={{ backgroundColor: "#E4405F" }}
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://facebook.com/your-facebook-id"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
              style={{ backgroundColor: "#1877F2" }}
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
              style={{ backgroundColor: "#0A66C2" }}
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/your-github-id"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-container"
              style={{ backgroundColor: "#171515" }}
            >
              <FaGithub className="social-icon" />
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center copyright">
            <p>© @QAYS IT Solutions. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
