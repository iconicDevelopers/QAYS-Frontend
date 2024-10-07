import React, { useState } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import "./ContactFormModal.css";

const ContactFormModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    contactMethod: "Mail",
    selectedDate: "",
    selectedDates: [],
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle changes for radio buttons
  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      contactMethod: e.target.value,
    }));
  };

  const handleDateChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDate: e.target.value,
    }));
  };

  const addDate = () => {
    if (formData.selectedDate && formData.selectedDates.length < 3) {
      setFormData((prevData) => ({
        ...prevData,
        selectedDates: [...prevData.selectedDates, formData.selectedDate],
        selectedDate: "", // Reset after adding
      }));
    } else if (!formData.selectedDate) {
      toast.error("Please select a date!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        closeButton: <FaTimes />,
      });
    } else {
      toast.error("You can only add up to 3 dates.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        closeButton: <FaTimes />,
      });
    }
  };

  const removeDate = (dateToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDates: prevData.selectedDates.filter(
        (date) => date !== dateToRemove
      ),
    }));
    toast.info(`Remove Date: ${dateToRemove}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      closeButton: <FaTimes />,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.selectedDates.length === 0) {
      toast.error("Please select at least one preferred date.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        closeButton: <FaTimes />,
      });
      return;
    }

    const requestData = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      contactMethod: formData.contactMethod,
      selectedDates: formData.selectedDates,
    };

    try {
      let response;

      if (formData.contactMethod === "WhatsApp") {
        // Send data to the backend to trigger the WhatsApp message
        response = await axios.post("/sendWhatsAppMessage", requestData);
        if (response.data.success) {
          toast.success(
            `Thank you for choosing us! We will get back on Whatsapp ${requestData.mobile} shortly.`,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              closeButton: <FaTimes />,
            }
          );
        } else {
          toast.error("Failed to send WhatsApp message.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            closeButton: <FaTimes />,
          });
        }
      } else if (formData.contactMethod === "Mail") {
        response = await axios.post("http://localhost:3001/send", requestData);
        if (response.status === 200) {
          toast.success(
            `Thank you for choosing us! We will get back on Gmail ${requestData.email} shortly`,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              closeButton: <FaTimes />,
            }
          );
        } else {
          toast.error("Error sending email", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            closeButton: <FaTimes />,
          });
        }
      } else if (formData.contactMethod === "Telegram") {
        response = await axios.post("http://localhost:3001/send", requestData);
        if (response.status === 200) {
          toast.success(
            `Thank you for choosing us! We will get back on Telegram ${requestData.mobile} shortly.`,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              closeButton: <FaTimes />,
            }
          );
        } else {
          toast.error("Failed to send message.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            closeButton: <FaTimes />,
          });
        }
      }

      // Reset form data after submission
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
        contactMethod: "Mail",
        selectedDate: "",
        selectedDates: [],
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred while sending the message.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        closeButton: <FaTimes />,
      });
    }

    handleClose();
  };

  return (
    <div>
      <Container id="contactus">
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
                <Form onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </Form.Group>

                  {/* Email Input */}
                  <Form.Group controlId="formEmail" className="mt-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Mobile Input */}
                  <Form.Group controlId="formContact" className="mt-3">
                    <Form.Control
                      type="text"
                      placeholder="Contact Number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Message Input */}
                  <Form.Group controlId="formDescription" className="mt-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Describe your project"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Contact Method Radio Buttons */}
                  <Form.Group
                    controlId="formContactMethod"
                    className="ps-3 mt-3"
                  >
                    <Form.Label>Mode Of Contact : </Form.Label>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "7px",
                      }}
                    >
                      <Form.Check
                        type="radio"
                        label="Mail"
                        name="contactMethod"
                        value="Mail"
                        onChange={handleRadioChange}
                        checked={formData.contactMethod === "Mail"}
                      />
                      <Form.Check
                        type="radio"
                        label="Telegram"
                        name="contactMethod"
                        value="Telegram"
                        onChange={handleRadioChange}
                        checked={formData.contactMethod === "Telegram"}
                      />
                      <Form.Check
                        type="radio"
                        label="WhatsApp"
                        name="contactMethod"
                        value="WhatsApp"
                        onChange={handleRadioChange}
                        checked={formData.contactMethod === "WhatsApp"}
                      />
                    </div>
                  </Form.Group>

                  {/* Date Picker */}
                  <Form.Group controlId="formDatePicker" className="mt-3">
                    <Form.Label>
                      Select Preferred Dates for Consultation (up to 3)
                    </Form.Label>
                    <Form.Control
                      type="date"
                      value={formData.selectedDate}
                      onChange={handleDateChange}
                    />
                    <Button className="add-date" onClick={addDate}>
                      Add Date
                    </Button>
                    {formData.selectedDates.length > 0 && (
                      <div style={{ marginTop: "10px" }}>
                        <p>Selected Dates:</p>
                        <ul
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            listStyle: "square",
                            padding: "10px",
                          }}
                        >
                          {formData.selectedDates.map((date, index) => (
                            <li key={index} style={{ fontSize: "16px" }}>
                              {date}
                              <Button
                                variant="link"
                                onClick={() => removeDate(date)}
                                style={{ padding: "5px", marginBottom: "5px" }}
                              >
                                <FaTimes size={24} color="#ff5722" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Form.Group>

                  <Button className="sent-message">Send Message</Button>
                </Form>
              </Modal.Body>
            </Modal>

            {/* Toast Container */}
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactFormModal;
