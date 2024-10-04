import React from "react";
import {
  Accordion,
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
} from "react-bootstrap";
import "./FaqSection.css";

const FaqSection = () => {
  const faqData = [
    {
      question: "What types of applications do you develop?",
      answer: `We specialize in a wide range of applications, including mobile apps for iOS and Android, custom web applications, and Web3 blockchain solutions. Our team tailors each project to meet specific client needs, ensuring functionality and user experience are at the forefront.`,
    },
    {
      question: "Can you convert designs from Figma to a functional web app?",
      answer: `Absolutely! We offer Figma to web app conversion services, where our team meticulously translates your design files into fully functional web applications. Our focus is on maintaining the integrity of your design while ensuring optimal performance and responsiveness.
`,
    },
    {
      question: "How do you approach Web3 and blockchain development?",
      answer: `Our approach to Web3 and blockchain development involves understanding your specific requirements and creating custom blockchain solutions that meet those needs. We focus on building secure, scalable, and user-friendly applications, utilizing the latest technologies in decentralized systems.
`,
    },
    {
      question: "What is your process for ensuring client satisfaction?",
      answer: `We prioritize client satisfaction by maintaining open communication throughout the development process. We start with a thorough consultation to understand your vision, provide regular updates, and involve you in key decisions. Our goal is to deliver a final product that exceeds your expectations.`,
    },
  ];

  return (
    <div className="faq-section">
      <Container>
        <Row>
          <Col md={5} className="faq-card">
            <h2 className="faq-title">
              Frequently Asked <br />
              Questions
            </h2>
            <Button className="grow-business-button">Grow Your Business</Button>

            <Card className="newsletter-box">
              <Card.Body className="newsleter-box-items">
                <h4>
                  Get Weekly Social Media Marketing <br /> Tips & Tricks
                </h4>
                <p className="py-2">
                  Guided by their mission statements & the desire <br /> to
                  create positive change
                </p>
                <Form>
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Type Your Email"
                      className="join-coummunity-input"
                    />
                  </Form.Group>
                  <Button className="join-community-btn mt-3 w-100">
                    Join Our Community
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={7} className="faq-list">
            <Accordion defaultActiveKey="0" className="faq-item">
              {faqData.map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="faq-acc-item"
                >
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqSection;
