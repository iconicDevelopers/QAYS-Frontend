import React, { useState } from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const testimonials = [
    {
      text: `“Their Figma design and web app conversion services were top-notch, and our project was delivered on time and within budget! They crafted custom solutions that enhanced our overall project.”`,
      author: "Jordan Lee",
      image: "https://via.placeholder.com/150",
      stars: 5,
    },
    {
      text: `" QAYS was a game-changer for our startup. Their expertise in mobile app development helped us launch a product that exceeded our expectations. We’re thrilled with the results!”`,
      author: "Emily Carter",
      image: "https://via.placeholder.com/150",
      stars: 5,
    },
    {
      text: `“The team transformed our vision into reality. Their attention to detail in the web app development process was impressive, and we couldn't be happier with the outcome! They delivered custom solutions that aligned perfectly with our goals!"`,
      author: "Michael",
      stars: 5,
    },
    {
      text: `“As part of the open-source community, collaborating with QAYS was a fantastic experience. Their commitment to quality and innovation truly sets them apart! They tailored their approach to suit our specific requirements!”`,
      author: "Community",
      stars: 5,
    },
    {
      text: `“The team transformed our approach to Web3 development. Their innovative strategies and attention to detail made our blockchain integration seamless. We couldn’t be happier with the results!”`,
      author: "Skyler Reese",
      stars: 5,
    },
    {
      text: `“Collaborating with QAYS was a game-changer for our Web3 initiative. They not only built a unique blockchain solution tailored to our requirements but also ensured that the application was user-friendly and efficient. Their commitment to our project was exceptional!”`,
      author: "Community",
      stars: 5,
    },
  ];

  return (
    <div
      style={{ position: "relative", maxWidth: "900px", margin: "auto" }}
      id="testimonials"
    >
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={3000}
        indicators={false}
        controls={false}
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <Card className="carsusel-card ">
              <Row>
                <Col md={4}>
                  {/* <Image
                    src={testimonial.image}
                    alt="Testimonial Image"
                    rounded
                    style={{ borderRadius: "20px", objectFit: "cover" }}
                  /> */}
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Text className="testimonial-text">
                      {testimonial.text}
                    </Card.Text>
                    <Card.Title className="testimonial-author">
                      {testimonial.author}
                    </Card.Title>
                    <div className="testimonial-stars">
                      {"★".repeat(testimonial.stars)}
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Dots */}
      <div className="rounded-icon">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            style={{
              width: "13px",
              height: "13px",
              borderRadius: "50%",
              backgroundColor: activeIndex === index ? "#ff5b5b" : "#f0c4c4",
              margin: "0 10px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
