import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaSmile, FaGlobe, FaUsers, FaHandshake } from "react-icons/fa"; // Import icons
import CountUp from "react-countup";
import "./experience.css";

const AboutSection = ({ theme }) => {
  return (
    <div
      className={
        theme === "dark" ? "experience-section-dark" : "experience-section"
      }
    >
      <Container className="experience-container">
        <Row>
          {/* Projects */}
          <Col xs={12} sm={6} md={3} className="my-3">
            <div className="stat-card">
              {/* <div className="icon-body">
                <FaSmile size={50} /> 
              </div> */}
              <h2 className={theme === "dark" ? "dark-head" : "light-head"}>
                <CountUp end={150} duration={2} />+
              </h2>
              <p className={theme === "dark" ? "dark-para" : "light-para"}>
                Projects
              </p>
            </div>
          </Col>

          {/* Countries */}
          <Col xs={12} sm={6} md={3} className="my-3">
            <div className="stat-card">
              {/* <div className="icon-body">
                <FaGlobe size={50} /> 
              </div> */}
              <h2 className={theme === "dark" ? "dark-head" : "light-head"}>
                <CountUp end={124} duration={2} />+
              </h2>
              <p className={theme === "dark" ? "dark-para" : "light-para"}>
                {" "}
                Countries
              </p>
            </div>
          </Col>

          {/* Integration */}
          <Col xs={12} sm={6} md={3} className="my-3">
            <div className="stat-card">
              {/* <div className="icon-body">
                <FaUsers size={50} /> 
              </div> */}
              <h2 className={theme === "dark" ? "dark-head" : "light-head"}>
                <CountUp end={180} duration={2} />+
              </h2>
              <p className={theme === "dark" ? "dark-para" : "light-para"}>
                Integration
              </p>
            </div>
          </Col>

          {/* Clients */}
          <Col xs={12} sm={6} md={3} className="my-3">
            <div className="stat-card">
              {/* <div className="icon-body">
                <FaHandshake size={50} /> 
              </div> */}
              <h2 className={theme === "dark" ? "dark-head" : "light-head"}>
                <CountUp end={10} duration={2} />+
              </h2>
              <p className={theme === "dark" ? "dark-para" : "light-para"}>
                Clients
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
