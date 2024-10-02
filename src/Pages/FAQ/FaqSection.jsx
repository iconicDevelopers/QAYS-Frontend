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
import "./FaqSection.css"; // Custom CSS for styling

const FaqSection = () => {
  const faqData = [
    {
      question: "What services does your Social Media Marketing Agency offer?",
      answer: `Our agency offers a comprehensive range of services including social media strategy development,
      content creation, community management, social media advertising, influencer partnerships, analytics and reporting, and more.`,
    },
    {
      question: "Why is SMM important for businesses?",
      answer: `Social media marketing helps businesses connect with their audience, increase brand awareness, 
      drive traffic, and generate leads or sales. It's a crucial tool for any modern business.`,
    },
    {
      question: "Which social media platforms should I use?",
      answer: `The best social media platforms for your business depend on your audience and goals. 
      Popular platforms include Facebook, Instagram, Twitter, LinkedIn, and TikTok.`,
    },
    {
      question: "What is the primary goal of Social Media Marketing?",
      answer: `The primary goal of social media marketing is to build and maintain relationships with your audience. 
      This leads to increased brand loyalty and business growth.`,
    },
    {
      question: "How can I get started with Social Media Marketing?",
      answer: `To get started with social media marketing, you need to define your goals, understand your audience, 
      and create a content strategy that resonates with them.`,
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
