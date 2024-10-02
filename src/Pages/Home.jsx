import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import "./Home.css";
import "../Pages/Home.css";
import "../CSS/common.css";

const Home = () => {
  return (
    <div className="hero-section">
      <Container>
        <div className="background-animation"></div>
        <Row>
          <Col>
            <h1 className="custom-heading">
              Ignite Your Business Growth by Implementing Strategic Media
              Marketing Campaigns
            </h1>
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col lg={5}>
            <p className="custom-para">
              Our cutting-edge social media marketing tactics will help you
              maximize your brand’s online visibility and expand your business
              exponentially. By leveraging the power of social media platforms.
            </p>
            <Button
              variant="warning"
              size="lg"
              className="mt-4 mb-5 template-button"
            >
              View Our Services
            </Button>

            <Card className="p-2 home-card-items">
              <Card.Body className="d-flex gap-3 ">
                <div className="home-icon">
                  <i class="bi bi-disc"></i>
                </div>
                <div className="text-start">
                  <h5>Join Free Webinar To Learn The Top Marketing Secrets</h5>
                  <p className="home-para">
                    For everyone who wants to become a social media expert.
                  </p>
                  <Card.Link href="#" className="view-details-link">
                    View Details
                    <i className="bi bi-chevron-right icon"></i>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
