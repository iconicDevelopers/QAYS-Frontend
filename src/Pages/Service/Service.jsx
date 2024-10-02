import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Service.css";
import "../../Components/Header/NavBar.css";

const Service = () => {
  const serviceData = [
    {
      serviceTitle: "Account Management",
      serviceDescription:
        "From creative content creation to targeted advertising and comprehensive analytics.",
      iconClass: "bi bi-car-front", 
    },
    {
      serviceTitle: "Marketing Strategy",
      serviceDescription:
        "From creative content creation to targeted advertising and comprehensive analytics.",
      iconClass: "bi bi-steering-wheel",
    },
    {
      serviceTitle: "Media Advertising",
      serviceDescription:
        "From creative content creation to targeted advertising and comprehensive analytics.",
      iconClass: "bi bi-graph-up-arrow",
    },
  ];

  return (
    <div className="service-container">
      <Container>
        <Row>
          <Col>
            <h2 className="service-heading">
              Supercharge Your Social Media Campaigns with Proven Strategies for
              Unprecedented Success
            </h2>
          </Col>
        </Row>
        <Row className=" mt-5">
          <Col lg={4}>
            <p className="service-para">
              We work tirelessly to maximize your brand's <br />
              visibility, engagement, and conversion rates <br />
              across all major social media platforms.
            </p>
            <Button
              variant="warning"
              size="lg"
              className="mt-4 mb-5 template-button"
            >
              Why Join Us?
            </Button>
          </Col>

          <Col lg={8}>
            <Row>
              {serviceData.map((item, index) => (
                <Col lg={4} md={6} key={index} className="mb-4">
                  <Card
                    className={`service-card ${
                      index === 0 ? "first-card" : "aother-cards"
                    }`}
                  >
                    <i className={`${item.iconClass} service-icon`}></i>
                    <Card.Body className="service-card-body">
                      <Card.Title className="service-title">
                        {item.serviceTitle}
                      </Card.Title>
                      <Card.Text className="service-description">
                        {item.serviceDescription}
                      </Card.Text>
                      <Button className="service-button">Learn More</Button>
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

export default Service;
