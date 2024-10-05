// import React, { useState } from "react";
// import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
// import "./ContactFormModal.css";
// import axios from "axios";

// const ContactFormModal = () => {
//   const [show, setShow] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     message: "",
//     contactMethod: "Mail",
//     selectedDate: "", // Selected date from the picker
//     selectedDates: [], // List of added dates
//   });

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   // Handle changes for radio buttons
//   const handleRadioChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       contactMethod: e.target.value,
//     }));
//   };

//   const handleDateChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       selectedDate: e.target.value,
//     }));
//   };

//   const addDate = () => {
//     if (formData.selectedDate && formData.selectedDates.length < 3) {
//       setFormData((prevData) => ({
//         ...prevData,
//         selectedDates: [...prevData.selectedDates, formData.selectedDate],
//         selectedDate: "", // Reset after adding
//       }));
//     } else if (!formData.selectedDate) {
//       alert("Please select a date.");
//     } else {
//       alert("You can only add up to 3 dates.");
//     }
//   };

//   const removeDate = (dateToRemove) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       selectedDates: prevData.selectedDates.filter(
//         (date) => date !== dateToRemove
//       ),
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.selectedDates.length === 0) {
//       alert("Please select at least one preferred date.");
//       return;
//     }
//     const requestData = {
//       name: formData.name,
//       email: formData.email,
//       mobile: formData.mobile,
//       message: formData.message,
//       contactMethod: formData.contactMethod,
//       selectedDates: formData.selectedDates,
//     };

//     // Send data to Whatsapp
//     if (formData.contactMethod === "WhatsApp") {
//       // Send data to the backend to trigger the WhatsApp message
//       try {
//         const response = await axios.post("/sendWhatsAppMessage", requestData);

//         if (response.data.success) {
//           alert("WhatsApp message sent successfully!");
//         } else {
//           alert("Failed to send WhatsApp message.");
//         }
//       } catch (error) {
//         console.error("Error sending WhatsApp message:", error);
//         alert("An error occurred while sending WhatsApp message.");
//       }
//     } else {
//       // Process form data normally
//       console.log(formData);
//     }

//     // Send data to Mail
//     if (formData.contactMethod === "Mail") {
//       try {
//         const response = await axios.post(
//           "http://localhost:3001/send",
//           requestData
//         );
//         if (response.status === 200) {
//           alert("Email sent successfully");
//         } else {
//           alert("Error sending email");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Failed to send email");
//       }
//     } else {
//       alert("Form submitted successfully!");
//     }

//     // Send data to Telegram
//     if (formData.contactMethod === "Telegram") {
//       try {
//         const response = await axios.post(
//           "http://localhost:3001/send-message",
//           formData
//         );

//         if (response.status === 200) {
//           alert("Message sent successfully!");
//         } else {
//           alert("Failed to send message.");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("An error occurred while sending the message.");
//       }
//     }

//     handleClose();
//     setFormData({
//       name: "",
//       email: "",
//       mobile: "",
//       message: "",
//       contactMethod: "Mail",
//       selectedDate: "",
//       selectedDates: [],
//     });
//   };

//   return (
//     <div>
//       <Container id="contactus">
//         <Row>
//           <Col className="call-book text-center">
//             <h2>Book Your Free Consultation</h2>
//             <p>Let’s discuss your idea and build something amazing together.</p>
//             <Button onClick={handleShow}>Book A Call</Button>

//             <Modal show={show} onHide={handleClose} centered>
//               <Modal.Header closeButton>
//                 <Modal.Title>Connect With Us</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <Form onSubmit={handleSubmit}>
//                   {/* Name Input */}
//                   <Form.Group controlId="formName">
//                     <Form.Control
//                       type="text"
//                       placeholder="Name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>

//                   {/* Email Input */}
//                   <Form.Group controlId="formEmail" className="mt-3">
//                     <Form.Control
//                       type="email"
//                       placeholder="Email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>

//                   {/* Mobile Input */}
//                   <Form.Group controlId="formContact" className="mt-3">
//                     <Form.Control
//                       type="text"
//                       placeholder="Contact Number"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>

//                   {/* Message Input */}
//                   <Form.Group controlId="formDescription" className="mt-3">
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       placeholder="Describe your project"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>

//                   {/* Contact Method Radio Buttons */}
//                   <Form.Group
//                     controlId="formContactMethod"
//                     className="ps-3 mt-3"
//                   >
//                     <Form.Label>Mode of contact *</Form.Label>
//                     <div>
//                       <Form.Check
//                         type="radio"
//                         label="Mail"
//                         name="contactMethod"
//                         value="Mail"
//                         onChange={handleRadioChange}
//                         checked={formData.contactMethod === "Mail"}
//                       />
//                       <Form.Check
//                         type="radio"
//                         label="Telegram"
//                         name="contactMethod"
//                         value="Telegram"
//                         onChange={handleRadioChange}
//                         checked={formData.contactMethod === "Telegram"}
//                       />
//                       <Form.Check
//                         type="radio"
//                         label="WhatsApp"
//                         name="contactMethod"
//                         value="WhatsApp"
//                         onChange={handleRadioChange}
//                         checked={formData.contactMethod === "WhatsApp"}
//                       />
//                     </div>
//                   </Form.Group>

//                   {/* Date Picker */}
//                   <Form.Group controlId="formDatePicker" className="mt-3">
//                     <Form.Label>
//                       Select Preferred Dates for Consultation (up to 3)
//                     </Form.Label>
//                     <Form.Control
//                       type="date"
//                       value={formData.selectedDate}
//                       onChange={handleDateChange}
//                     />
//                     <Button
//                       variant="secondary"
//                       className="mt-2"
//                       onClick={addDate}
//                     >
//                       Add Date
//                     </Button>
//                     {formData.selectedDates.length > 0 && (
//                       <div className="mt-3">
//                         <p>Selected Dates:</p>
//                         <ul>
//                           {formData.selectedDates.map((date, index) => (
//                             <li key={index}>
//                               {date}{" "}
//                               <Button
//                                 variant="danger"
//                                 size="sm"
//                                 onClick={() => removeDate(date)}
//                               >
//                                 Remove
//                               </Button>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </Form.Group>

//                   <Button variant="primary" type="submit" className="mt-4">
//                     Submit
//                   </Button>
//                 </Form>
//               </Modal.Body>
//             </Modal>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ContactFormModal;

import React, { useState } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import "./ContactFormModal.css";
import axios from "axios";

const ContactFormModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    contactMethod: "Mail",
    selectedDate: "", // Selected date from the picker
    selectedDates: [], // List of added dates
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
      alert("Please select a date.");
    } else {
      alert("You can only add up to 3 dates.");
    }
  };

  const removeDate = (dateToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDates: prevData.selectedDates.filter(
        (date) => date !== dateToRemove
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.selectedDates.length === 0) {
      alert("Please select at least one preferred date.");
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
          alert("WhatsApp message sent successfully!");
        } else {
          alert("Failed to send WhatsApp message.");
        }
      } else if (formData.contactMethod === "Mail") {
        response = await axios.post(
          "http://localhost:3001/api/email/send",
          requestData
        );
        if (response.status === 200) {
          alert("Email sent successfully");
        } else {
          alert("Error sending email");
        }
      } else if (formData.contactMethod === "Telegram") {
        response = await axios.post(
          "http://localhost:3001/api/telegram/send",
          requestData
        );
        if (response.status === 200) {
          alert("Message sent successfully!");
        } else {
          alert("Failed to send message.");
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
      alert("An error occurred while sending the message.");
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
                    <Form.Label>Mode of contact *</Form.Label>
                    <div>
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
                    <Button
                      variant="secondary"
                      className="mt-2"
                      onClick={addDate}
                    >
                      Add Date
                    </Button>
                    {formData.selectedDates.length > 0 && (
                      <div className="mt-3">
                        <p>Selected Dates:</p>
                        <ul>
                          {formData.selectedDates.map((date, index) => (
                            <li key={index}>
                              {date}{" "}
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removeDate(date)}
                              >
                                Remove
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-4">
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
