import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/21628466944?text=Hi%20Omar!%20I'm%20interested%20in%20your%20digital%20services."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      id="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
    >
      <BsWhatsapp />
      <span className="whatsapp-tooltip">Chat with me!</span>
    </a>
  );
}

export default WhatsAppFloat;
