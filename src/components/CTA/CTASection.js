import React, { useState, useRef } from "react";
import { BsWhatsapp, BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function CTASection() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ozo1tvw",
        "template_75dr9lu",
        formRef.current,
        "fuZLqC0IAiGwSQ-Oy"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(null), 5000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-left fade-up">
            <div className="urgency-badge">
              🔥 Limited Availability — Book Your Spot Now
            </div>
            <h2>
              Start Your Project{" "}
              <span className="accent">Today</span>
            </h2>
            <p>
              Ready to take your business to the next level? Whether you need a
              stunning logo, engaging social media content, or a professional
              website — I'm here to help. Get in touch for a free consultation
              and custom quote.
            </p>
            <a
              href="https://wa.me/21628466944?text=Hi%20Omar!%20I'm%20interested%20in%20your%20digital%20services."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              id="cta-whatsapp-btn"
              style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}
            >
              <BsWhatsapp size={22} /> Chat on WhatsApp
            </a>
            <p style={{ color: "var(--text-muted)", marginTop: "1rem", fontSize: "0.9rem" }}>
              ✓ Free consultation &nbsp; ✓ Custom quote &nbsp; ✓ Fast response
            </p>
          </div>

          <div className="contact-form fade-up">
            <h3>Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="e.g. Ahmed Ben Ali"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                id="contact-submit-btn"
                style={{ width: "100%" }}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <BsSend /> Send Message
                  </>
                )}
              </button>
            </form>
            {status === "success" && (
              <div className="form-status success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="form-status error">
                ✕ Failed to send. Please try WhatsApp or email me directly.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
