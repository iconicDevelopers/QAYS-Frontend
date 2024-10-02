import React, { useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import "./footer.css";
const BookCall = () => {
  const [show, setShow] = useState(false);

  // Handlers to open and close the modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container>
        <Row>
          <Col className="call-book">
            <h2>Book Your Free Consultation</h2>
            <p>Let’s discuss your idea and build something amazing together.</p>
            <Button onClick={handleShow}>Book A Call</Button>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Contact Us</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="contact-options">
                  <h5>Call</h5>
                  <p>
                    <a href="tel:+123456789">+1 234 567 89</a>
                  </p>

                  <h5>Gmail</h5>
                  <p>
                    <a href="mailto:example@gmail.com">example@gmail.com</a>
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookCall;
