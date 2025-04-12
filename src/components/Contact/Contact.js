import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_ozo1tvw", // Replace with your service ID
        "template_75dr9lu", // Replace with your template ID
        e.target,
        "fuZLqC0IAiGwSQ-Oy" // Replace with your user ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
        },
        (error) => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative"}} className="mb-5 mt-5">
          <Col md={6}>
            <h2>Contact Me</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formName">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Reason for contact"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Send Message
              </Button>
            </Form>
            {status && <p>{status}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
