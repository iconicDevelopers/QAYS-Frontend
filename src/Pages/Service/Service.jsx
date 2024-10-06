import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import "./Service.css";
import "../../Components/Header/NavBar.css";

const Service = ({ theme }) => {
  const serviceData = [
    {
      title: "Custom Website Development",
      icon: "🌐",
      description:
        "Develop customized websites that align with your business goals.",
    },
    {
      title: "Custom Web Application Development",
      icon: "💻",
      description: "Build scalable and high-performance web applications.",
    },
    {
      title: "Figma to Web App Conversions",
      icon: "🖼️",
      description: "Convert your Figma designs into fully responsive web apps.",
    },
    {
      title: "Machine Learning (ML) Integration",
      icon: "🤖",
      description: "Leverage machine learning to make data-driven decisions.",
    },
    {
      title: "Artificial Intelligence (AI) Integration",
      icon: "🧠",
      description: "Implement AI-driven features to enhance your applications.",
    },

    {
      title: "IoT Integration",
      icon: "📡",
      description: "Connect your devices and services with IoT integrations.",
    },

    {
      title: "WordPress Development",
      icon: "🔧",
      description: "Develop custom WordPress websites and plugins.",
    },
    {
      title: "Mobile App Development for iOS and Android",
      icon: "📱",
      description:
        "Design and develop mobile applications for iOS and Android platforms.",
    },
    {
      title: "Portfolio Page Creation",
      icon: "📁",
      description: "Create stunning portfolio pages to showcase your work.",
    },
    {
      title: "Web3 Blockchain Applications",
      icon: "🔗",
      description:
        "Integrate blockchain solutions into your apps using Web3 technologies.",
    },
  ];

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const carouselItems = chunkArray(serviceData, 3); // Chunk the array into groups of 3

  return (
<<<<<<< HEAD
    <div className="service-container" id="services">
=======
    <div
      className={
        theme === "dark" ? "service-container-dark" : "service-container"
      }
    >
>>>>>>> fbaffb48a26ee46f761205ce9cd5b1b706ca6d5a
      <Container>
        <Row>
          <Col>
            <h2 className="service-heading">
              Elite Custom App, Web & Web3 Development – Pioneering Digital
              Solutions Across All Technologies
            </h2>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={4}>
            <p className="service-para">
              Our expert team provides custom design, web and mobile app
              development for iOS, Android, and Web3 blockchain applications.
              IoT, AI, ML integrations, and more. Innovative Tech Integration
              Across Multiple Tech Stacks, we deliver tailored solutions to
              bring your vision to life.
            </p>
            <Button
              variant="warning"
              size="lg"
              className="mt-4 mb-5 template-button"
            >
              Why Join Us?
            </Button>
          </Col>

          <Col lg={8} className="services-container">
            <Carousel
              indicators={false}
              interval={3000} // Set interval to 3 seconds
              controls={false}
            >
              {carouselItems.map((group, groupIndex) => (
                <Carousel.Item key={groupIndex}>
                  <Row>
                    {group.map((item, index) => (
                      <Col lg={4} md={6} xs={12} className="mb-4" key={index}>
                        <Card className="service-card">
                          <i className="service-icon">{item.icon}</i>
                          <Card.Body className="service-card-body">
                            <Card.Title className="service-title">
                              {item.title}
                            </Card.Title>
                            <Card.Text className="service-description">
                              {item.description}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
