import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Project.css";
import { Card } from "react-bootstrap/esm";
import image from "../../assets/amgc43amgcrightfrontthreequarter.jpeg";

const Project = () => {
  const projectData = [
    {
      projectTitle: "Content Calendar Creation",
      projectDescrption:
        "Our cutting-edge social media marketing tactics will help you maximize your brand’s online visibility and expand your business exponentially. ",
      projectImage: image,
    },
    {
      projectTitle: "Social Media Advertising Campaign",
      projectDescrption:
        "Our cutting-edge social media marketing tactics will help you maximize your brand’s online visibility and expand your business exponentially. ",
      projectImage: image,
    },
    {
      projectTitle: "Content Calendar Creation",
      projectDescrption:
        "Our cutting-edge social media marketing tactics will help you maximize your brand’s online visibility and expand your business exponentially. ",
      projectImage: image,
    },
    {
      projectTitle: "Influencer Marketing Campaign",
      projectDescrption:
        "Our cutting-edge social media marketing tactics will help you maximize your brand’s online visibility and expand your business exponentially. ",
      projectImage: image,
    },
    {
      projectTitle: "Community Management",
      projectDescrption:
        "Our cutting-edge social media marketing tactics will help you maximize your brand’s online visibility and expand your business exponentially. ",
      projectImage: image,
    },
    {
      projectTitle: "Analytics and Reporting",
      projectDescrption:
        "Our cutting-edge social media marketing tactics will help you maximize your brand’s online visibility and expand your business exponentially. ",
      projectImage: image,
    },
  ];
  return (
    <div className="project-container">
      <Container>
        <Row>
          <Col className="project-content">
            <h2 className="project-heading">Projects We've Done So Far…</h2>
            <p className="project-para">
              Elevate your brand's online presence with our top-tier Social
              Media Marketing Agency. With a <br /> team of experienced
              strategists, content creators, and analysts.
            </p>
            <Button className="project-button">View All Projects</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          {projectData.map((item, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="project-card-items">
                {item.projectImage && (
                  <div className="image-wrapper">
                    <Card.Img
                      variant="top"
                      src={item.projectImage}
                      alt={item.projectTitle}
                      className={`project-image ${
                        index % 2 !== 0
                          ? "big-image-style"
                          : "small-image-style"
                      }`}
                    />
                  </div>
                )}

                <Card.Body className="card-body">
                  <Card.Title className="project-title">
                    {item.projectTitle}
                  </Card.Title>
                  <Card.Text className="project-description">
                    {item.projectDescrption}
                  </Card.Text>
                  <Card.Link href="#" className="view-cast-link">
                    View Cast Study
                    <i className="bi bi-chevron-right icon"></i>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Project;
