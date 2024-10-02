import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Features.css";
import "../../CSS/common.css";
import { Card } from "react-bootstrap/esm";

const Features = () => {
  const featuresData = [
    {
      fetureTitle: "Platform Analysis",
      featureContent:
        "Our agency specializes in crafting dynamic social media strategies tailored to amplify brand's voice.",
      fetureIcon: "bi bi-people-fill",
    },
    {
      fetureTitle: "Brainstorm Guide",
      featureContent:
        "Our team of experienced strategists, content creators, and data analysts work tirelessly to deliver results.",
      fetureIcon: "bi bi-people-fill",
    },
    {
      fetureTitle: "Account Management",
      featureContent:
        "That's where our Social Media Marketing Agency comes in. We understand that social media platforms.",
      fetureIcon: "bi bi-people-fill",
    },
    {
      fetureTitle: "Strategy Development",
      featureContent:
        "The epicenter of modern communication, connecting businesses with their target audience.",
      fetureIcon: "bi bi-people-fill",
    },
  ];
  return (
    <div className="features-container">
      <Container>
        <Row>
          <Col className="features-content">
            <h2 className="features-heading">
              Strategic Social Media Planning: Crafting <br />
              Effective Campaigns for Maximum Impact
            </h2>
            <p className="features-para">
              Our team of experienced strategists, content creators, and data
              analysts work tirelessly to deliver results that exceed <br />
              expectations, all while staying abreast of the latest trends and
              algorithm changes.
            </p>
            <Button className="features-button">Platform Integration</Button>
          </Col>
        </Row>
        <Row className=" mt-5">
          <Col lg={6}></Col>

          <Col lg={6}>
            <Row>
              {featuresData.map((item, index) => (
                <Col lg={6} md={6} key={index} className="mb-4">
                  <Card className="features-card">
                    <i className={`${item.fetureIcon} features-icon`}></i>
                    <Card.Body className="features-card-body">
                      <Card.Title className="features-title">
                        {item.fetureTitle}
                      </Card.Title>
                      <Card.Text className="features-description">
                        {item.featureContent}
                      </Card.Text>
                      <Card.Link href="#" className="view-details-link">
                        View Details
                        <i className="bi bi-chevron-right icon"></i>
                      </Card.Link>
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

export default Features;
