import React, { useState } from "react";
import isEmpty from "lodash/isEmpty";
import axios from "axios";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";
import "./ContactFormModal.css";
import { toastErrorStyle, toastSuccessStyle } from "../../helpers/toastHelper";
import {
  EROOR_FOR_SELECT_DATE,
  ERROR_FOR_LIMITED_DATE,
  ERROR_FOR_SELECT_ATLEAST_ONE_DATE,
  ERROR_FOR_SENDING_MESSAGE,
} from "../../constant";

/**
 * Component for the Contact Form Modal
 *
 * @returns {JSX.Element}
 */
const ContactFormModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    contactMethod: "Mail",
    selectedDate: "",
    selectedDates: [],
  });

  /**
   * Handle changes to the form inputs, and update the form data state accordingly
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The event object from the input change
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Handles changes to the radio button input for the contact method
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object from the input change
   */
  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      contactMethod: e.target.value,
    }));
  };

  /**
   * Handles changes to the input for the selected date
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object from the input change
   */
  const handleDateChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDate: e.target.value,
    }));
  };

  /**
   * Add the selected date to the list of selected dates. If there are already 3 dates selected,
   * show an error toast. If no date is selected, show an error toast as well.
   */
  const addDate = () => {
    if (formData.selectedDate && formData.selectedDates.length < 3) {
      setFormData((prevData) => ({
        ...prevData,
        selectedDates: [...prevData.selectedDates, formData.selectedDate],
        selectedDate: "", // Reset after adding
      }));
    } else if (!isEmpty(formData.selectedDate)) {
      toast.error(EROOR_FOR_SELECT_DATE, toastErrorStyle); // If no date select,it will show error
    } else {
      toast.error(ERROR_FOR_LIMITED_DATE, toastErrorStyle); // If user selected more than 3 dates,it will show error
    }
  };

  /**
   * Removes a date from the list of selected dates. Also shows an info toast with the date that was removed.
   * @param {string} dateToRemove - The date to remove from the list
   */
  const removeDate = (dateToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDates: prevData.selectedDates.filter(
        (date) => date !== dateToRemove
      ),
    }));
  };

  /**
   * Handles the form submission for the contact form.
   * @param {React.FormEvent<HTMLFormElement>} e - The event object from the form submission
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.selectedDates.length === 0) {
      toast.error(ERROR_FOR_SELECT_ATLEAST_ONE_DATE, toastErrorStyle); // If no date select,it will show error
      return;
    }

    /** Prepare the api request data */
    const jsonData = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      contactMethod: formData.contactMethod,
      selectedDates: formData.selectedDates,
    };

    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/contact`,
        jsonData
      );
      if (response.status === 200 && response.data) {
        toast.success(response.data.message, toastSuccessStyle);
      } else {
        toast.error(response.data.message, toastErrorStyle);
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
      toast.error(ERROR_FOR_SENDING_MESSAGE, toastErrorStyle);
    }
    setIsOpenModal(false);
  };

  return (
    <div>
      <Container id="contactus">
        <Row>
          <Col className="call-book text-center">
            <h2>Book Your Free Consultation</h2>
            <p>Let’s discuss your idea and build something amazing together.</p>
            <Button onClick={() => setIsOpenModal(true)}>Book A Call</Button>

            <Modal
              show={isOpenModal}
              onHide={() => setIsOpenModal(false)}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Connect With Us</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
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

                  {/* Mobile Number Input */}
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

                  {/* Mode Of Contact Radio Buttons */}
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

                  {/* Submit Button */}
                  <Button className="sent-message" onClick={handleSubmit}>
                    Send Message
                  </Button>
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
