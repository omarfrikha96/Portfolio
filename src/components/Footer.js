import React from "react";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-name">Omar Frikha</div>
            <p>
              Professional digital services — design, video editing, marketing
              & web solutions. Helping businesses grow with powerful digital
              presence.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/omarfr96/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/oma_fr/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <AiFillInstagram />
              </a>
              <a href="https://github.com/omarfrikha96" target="_blank" rel="noreferrer" aria-label="GitHub">
                <AiFillGithub />
              </a>
              <a href="mailto:contact@omarfrikha.tech" aria-label="Email">
                <AiFillMail />
              </a>
              <a href="https://wa.me/21628466944" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {year} Omar Frikha. All rights reserved. Crafted with passion in Tunisia 🇹🇳
        </div>
      </div>
    </footer>
  );
}

export default Footer;
