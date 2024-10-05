import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImage from "../../assets/amgc43amgcrightfrontthreequarter.jpeg";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} xs={12}>
            <div className="about-image-container">
              <Image
                src={aboutImage}
                alt="About Us"
                className="about-image"
                fluid
              />
            </div>
          </Col>

          <Col md={6} xs={12} className="about-content">
            <h2 className="about-heading">About Us</h2>
            <p>
              we are dedicated to turning your ideas into reality with
              innovative technology solutions. Since 2017, our expert team has
              delivered outstanding mobile and web application development
              services tailored to meet the unique needs of clients worldwide
            </p>
            <p>
              Our commitment to quality and customer satisfaction drives us to
              collaborate closely with you, ensuring we understand your vision
              and deliver results that exceed expectations. We also contribute
              to the open-source community, fostering innovation and staying at
              the forefront of technology trends.
            </p>
            <p>
              Whether you're seeking IoT integration, machine learning, or
              artificial intelligence solutions, wegb3 our specialized teams are
              ready to bring your new concepts to life using diverse tech
              stacks. With a track record of happy customers and successful
              projects across various industries, we are here to push the
              boundaries of technology and help you achieve your goals.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
