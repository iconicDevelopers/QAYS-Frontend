import React from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import "./OurProject.css";
import {
  FaYoutube,
  FaDribbble,
  FaLinkedin,
  FaFacebookF,
  FaSpotify,
  FaTwitter,
  FaTiktok,
  FaMedium,
  FaGithub,
} from "react-icons/fa"; // Import necessary icons

const OurProjects = () => {
  const ourProjects = [
    { name: "Youtube", icon: <FaYoutube size={50} />, link: "#" },
    { name: "Dribbble", icon: <FaDribbble size={50} />, link: "#" },
    { name: "LinkedIn", icon: <FaLinkedin size={50} />, link: "#" },
    { name: "Facebook", icon: <FaFacebookF size={50} />, link: "#" },
    { name: "Spotify", icon: <FaSpotify size={50} />, link: "#" },
    { name: "Twitter", icon: <FaTwitter size={50} />, link: "#" },
    { name: "Tiktok", icon: <FaTiktok size={50} />, link: "#" },
    { name: "Medium", icon: <FaMedium size={50} />, link: "#" },
    { name: "Github", icon: <FaGithub size={50} />, link: "#" },
  ];
  return (
    <div className="OurProject-container">
      <Container>
        <Row className="d-flex align-items-start">
          <Col lg={6} className="ourProjects-content">
            <h2 className="ourProjects-heading">
              Seemless Integerations with Automations
            </h2>
            <p className="ourProjects-para">
              From creating compelling content to managing advertising campaigns
              <br /> across various platforms, we utilize cutting-edge tools and
              industry <br /> insights to ensure brand stands.
            </p>
            <Button className=" ourProjects-button">Check Our Projects</Button>
          </Col>

          <Col lg={6}>
            <Row>
              {ourProjects.map((item, idx) => (
                <Col
                  xs={6}
                  md={4}
                  lg={4}
                  key={idx}
                  className="d-flex justify-content-center mb-4"
                >
                  <Card
                    className="text-center shadow-sm"
                    style={{ width: "150px", borderRadius: "15px" }}
                  >
                    <Card.Body>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                      >
                        <div className="icon mb-2">{item.icon}</div>
                        <Card.Text className="fw-bold">{item.name}</Card.Text>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurProjects;
