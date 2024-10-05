import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./testimonial.css";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
  return (
    <div className="testimonial-conatiner" id="testimonial">
      <Container>
        <Row className="d-flex flex-column gap-5">
          <Col className="text-center">
            <h2 className="testimonial-heading">
              Bringing Your Vision to Life – Trusted Mobile & Web App Solutions
              for Dreamers & Innovators
            </h2>
            <p className="testimonial-para">
              We specialize in transforming visionary ideas into powerful mobile
              and web applications. Our expert team delivers tailored solutions
              designed to meet the unique needs of dreamers and innovators.
              Trusted by people, we bring innovation, reliability, and success
              to every project we undertake.
            </p>
          </Col>
          <TestimonialCarousel />
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
