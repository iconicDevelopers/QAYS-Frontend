import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import ContactFormModal from "./ContactFormModal";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <ContactFormModal />
        {/* <Row className="align-items-center text-center footer-items ">
          <Col xs={12} md={4} className="footer-logo">
            <h4 className="logo-text">
              <i class="bi bi-send"></i>
              <span className="ms-2">SOCA</span>
            </h4>
            <p className="footer-tagline">
              Transforming your Idea into Reality.
            </p>
          </Col>
        </Row>
         */}

        {/* Copyright */}
        <Row>
          <Col className="text-center copyright">
            <p>© @QAYS IT Solutions.All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
