import React, { useState } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import "./ContactFormModal.css";

const ContactFormModal = () => {
  const [show, setShow] = useState(false);
  const [contactMethod, setContactMethod] = useState("Mail");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRadioChange = (event) => {
    setContactMethod(event.target.value);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="call-book text-center">
            <h2>Book Your Free Consultation</h2>
            <p>Let’s discuss your idea and build something amazing together.</p>
            <Button onClick={handleShow}>Book A Call</Button>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Connect With Us</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formContact">
                    <Form.Control type="text" placeholder="Contact Number" />
                  </Form.Group>

                  <Form.Group controlId="formDescription">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Describe your project"
                    />
                  </Form.Group>
                  <Form.Group controlId="formContactMethod" className="ps-3">
                    <Form.Label>Mode of contact *</Form.Label>
                    <div>
                      <Form.Check
                        type="radio"
                        label="WhatsApp"
                        name="contactMethod"
                        value="WhatsApp"
                        onChange={handleRadioChange}
                        checked={contactMethod === "WhatsApp"}
                      />
                      <Form.Check
                        type="radio"
                        label="Telegram"
                        name="contactMethod"
                        value="Telegram"
                        onChange={handleRadioChange}
                        checked={contactMethod === "Telegram"}
                      />
                      <Form.Check
                        type="radio"
                        label="Mail"
                        name="contactMethod"
                        value="Mail"
                        onChange={handleRadioChange}
                        checked={contactMethod === "Mail"}
                      />
                    </div>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactFormModal;
