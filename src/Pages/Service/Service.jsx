import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import {
  FaGlobe,
  FaLaptop,
  FaImage,
  FaRobot,
  FaBrain,
  FaSatelliteDish,
  FaWordpress,
  FaMobileAlt,
  FaFolder,
  FaLink,
} from "react-icons/fa";
import "./Service.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Components/Header/NavBar.css";
import ML from "../../assets/Service/ML.jpg";
import BlockChain from "../../assets/Service/BlockChain.jpg";
import Iot from "../../assets/Service/Iot.jpg";
import figma from "../../assets/Service/figma.webp";
import mobileApp from "../../assets/Service/mobileApp.jpg";
import wordpress from "../../assets/Service/wordpress.jpeg";
import WebSiteDev from "../../assets/Service/WebSiteDev.jpg";
import Ai from "../../assets/Service/Ai.jpg";
import portfolio from "../../assets/Service/portfolio.jpg";
import wepAppDev from "../../assets/Service/wepAppDev.jpg";
const Service = ({ theme }) => {
  const serviceData = [
    {
      title: "Custom Website Development",
      icon: <FaGlobe size={40} />,
      description:
        "Develop customized websites that align with your business goals.",
      backgroundImage: WebSiteDev,
    },
    {
      title: "Custom Web Application Development",
      icon: <FaLaptop size={40} />,
      description: "Build scalable and high-performance web applications.",
      backgroundImage: wepAppDev,
    },
    {
      title: "Figma to Web App Conversions",
      icon: <FaImage size={40} />,
      description: "Convert your Figma designs into fully responsive web apps.",
      backgroundImage: figma,
    },
    {
      title: "Machine Learning (ML) Integration",
      icon: <FaRobot size={40} />,
      description: "Leverage machine learning to make data-driven decisions.",
      backgroundImage: ML,
    },
    {
      title: "Artificial Intelligence (AI) Integration",
      icon: <FaBrain size={40} />,
      description: "Implement AI-driven features to enhance your applications.",
      backgroundImage: Ai,
    },
    {
      title: "IoT Integration",
      icon: <FaSatelliteDish size={40} />,
      description: "Connect your devices and services with IoT integrations.",
      backgroundImage: Iot,
    },
    {
      title: "WordPress Development",
      icon: <FaWordpress size={40} />,
      description: "Develop custom WordPress websites and plugins.",
      backgroundImage: wordpress,
    },
    {
      title: "Mobile App Development for iOS and Android",
      icon: <FaMobileAlt size={40} />,
      description:
        "Design and develop mobile applications for iOS and Android platforms.",
      backgroundImage: mobileApp,
    },
    {
      title: "Portfolio Page Creation",
      icon: <FaFolder size={40} />,
      description: "Create stunning portfolio pages to showcase your work.",
      backgroundImage: portfolio,
    },
    {
      title: "Web3 Blockchain Applications",
      icon: <FaLink size={40} />,
      description:
        "Integrate blockchain solutions into your apps using Web3 technologies.",
      backgroundImage: BlockChain,
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={
        theme === "dark" ? "service-container-dark" : "service-container"
      }
      id="services"
    >
      <Container>
        <Row>
          <Col>
            <h2 className="service-heading">
              Elite Custom App, Web & Web3 Development – Pioneering Digital
              Solutions Across All Technologies
            </h2>
          </Col>
        </Row>

        <Row className="mt-0 mt-md-2 d-flex align-items-center custom-margin-top">
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
            <Slider {...sliderSettings}>
              {serviceData.map((item, index) => (
                <div key={index} className="mb-4">
                  <Card
                    className="service-card"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  >
                    <Card.Body className="service-card-body">
                      <div className="service-icon">{item.icon}</div>
                      <Card.Title className="service-title">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="service-description">
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
