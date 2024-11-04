import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";
import "../../CSS/common.css";

const Home = ({ theme }) => {
  return (
    <div className={theme === "dark" ? "dark-home" : "home-section"} id="home">
      <Container>
        <div className="background-animation"></div>
        <Row>
          <Col>
            <h1
              className={
                theme === "dark" ? "custom-heading-dark" : "custom-heading"
              }
            >
              Bringing Your Vision to Life – Trusted Mobile & Web App Solutions
              for Dreamers & Innovators
            </h1>
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col lg={6}>
            <p
              className={theme === "dark" ? "custom-para-dark" : "custom-para"}
            >
              we specialize in transforming visionary ideas into powerful mobile
              and web applications. Our expert team delivers tailored solutions
              designed to meet the unique needs of dreamers and innovators.
              Trusted by people, we bring innovation, reliability, and success
              to every project we undertake.
            </p>
            <Button
              variant="warning"
              size="lg"
              className="mt-4 mb-5 template-button"
              // href="services"
            >
              View Our Services
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
