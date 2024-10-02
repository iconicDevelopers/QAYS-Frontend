import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./footer.css";
import BookCall from "./BookCall";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <BookCall />
        <Row className="align-items-center text-center footer-items ">
          {/* Social Icons */}
          <Col xs={12} md={4} className="footer-social">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
          </Col>

          {/* Logo and Tagline */}
          <Col xs={12} md={4} className="footer-logo">
            <h4 className="logo-text">
              <i class="bi bi-send"></i>
              <span className="ms-2">SOCA</span>
            </h4>
            <p className="footer-tagline">
              Transforming your Idea into Reality.
            </p>
          </Col>

          {/* Footer Links */}
          <Col xs={12} md={4} className="footer-links">
            <a href="#" className="footer-link">
              Services
            </a>
            <a href="#" className="footer-link">
              Case Studies
            </a>
            <a href="#" className="footer-link">
              Testimonials
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center copyright">
            <p>© SOCA Solutions. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
