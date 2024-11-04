import React, { useState } from "react"; // Import useState to manage accordion state
import { Accordion, Container, Row, Col, Button, Image } from "react-bootstrap";
import "./FaqSection.css";
import faqImage from "../../assets/FAQs-rafiki.svg";
const FaqSection = ({ theme }) => {
  const faqData = [
    {
      question: "What types of applications do you develop?",
      answer: `We specialize in a wide range of applications, including mobile apps for iOS and Android, custom web applications, and Web3 blockchain solutions. Our team tailors each project to meet specific client needs, ensuring functionality and user experience are at the forefront.`,
    },
    {
      question: "Can you convert designs from Figma to a functional web app?",
      answer: `Absolutely! We offer Figma to web app conversion services, where our team meticulously translates your design files into fully functional web applications. Our focus is on maintaining the integrity of your design while ensuring optimal performance and responsiveness.`,
    },
    {
      question: "How do you approach Web3 and blockchain development?",
      answer: `Our approach to Web3 and blockchain development involves understanding your specific requirements and creating custom blockchain solutions that meet those needs. We focus on building secure, scalable, and user-friendly applications, utilizing the latest technologies in decentralized systems.`,
    },
    {
      question: "What is your process for ensuring client satisfaction?",
      answer: `We prioritize client satisfaction by maintaining open communication throughout the development process. We start with a thorough consultation to understand your vision, provide regular updates, and involve you in key decisions. Our goal is to deliver a final product that exceeds your expectations.`,
    },
  ];

  // State to manage which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    // Toggle the accordion item
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={theme === "dark" ? "faq-section-dark" : "faq-section"}
      id="faq"
    >
      <Container>
        <Row>
          <Col md={4} className="faq-card">
            <h2 className={theme === "dark" ? "faq-title-dark" : "faq-title"}>
              Frequently Asked <br />
              Questions
            </h2>
            <Button className="grow-business-button">Grow Your Business</Button>
            {/* <div className="faq-image"> */}
            <Image src={faqImage} alt="Faq" className="faq-image" fluid />
            {/* </div> */}
          </Col>
          <Col
            md={8}
            className={theme === "dark" ? "faq-list-dark" : "faq-list"}
          >
            <Accordion defaultActiveKey="0" className="faq-item">
              {faqData.map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="faq-acc-item"
                >
                  <Accordion.Header onClick={() => handleToggle(index)}>
                    {item.question}
                    {openIndex === index ? (
                      <i className="bi bi-dash" /> // Minus icon when item is open
                    ) : (
                      <i className="bi bi-plus" /> // Plus icon when item is closed
                    )}{" "}
                  </Accordion.Header>
                  <Accordion.Body active={openIndex === index}>
                    {item.answer}
                  </Accordion.Body>
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
