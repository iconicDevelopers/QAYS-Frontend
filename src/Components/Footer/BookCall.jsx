import React, { useState } from "react";
import { Col, Container, Row, Button, Modal, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./footer.css";

const BookCall = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Use EmailJS to send the form details
      emailjs
        .send(
          "service_njktqsl",
          "template_gybifwn",
          {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            content: formData.content,
          },
          "Tht39SFKTd6NCnZ7U"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            handleClose();
            setFormData({
              name: "",
              email: "",
              mobile: "",
              content: "",
            });
            setValidated(false);
          },
          (err) => {
            console.error("FAILED...", err);
          }
        );
    }

    setValidated(true);
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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formMobile">
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      placeholder="Contact No"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your mobile number.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formContent">
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Description"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide some message.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-3">
                    Submit
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    className="mt-3 ml-3"
                  >
                    Close
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

export default BookCall;
