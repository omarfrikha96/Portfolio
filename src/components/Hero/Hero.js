import React from "react";
import Typewriter from "typewriter-effect";
import { BsWhatsapp, BsArrowRight } from "react-icons/bs";
import { HiCheckBadge } from "react-icons/hi2";
import homeLogo from "../../Assets/home-main.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-typewriter">
            <Typewriter
              options={{
                strings: [
                  "Design & Branding",
                  "Video Editing",
                  "Digital Marketing",
                  "Web Development",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
              }}
            />
          </div>

          <h1>
            Grow Your Business with{" "}
            <span className="gradient-text">Powerful Digital Solutions</span>
          </h1>

          <p>
            Professional design, video editing, marketing & web solutions that
            drive visibility, sales, and growth for your business. From logo
            creation to full digital strategy — I handle it all.
          </p>

          <div className="hero-cta">
            <a
              href="https://wa.me/21628466944?text=Hi%20Omar!%20I'm%20interested%20in%20your%20digital%20services."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              id="hero-whatsapp-btn"
            >
              <BsWhatsapp /> Contact me on WhatsApp
            </a>
            <a href="#contact" className="btn btn-outline" id="hero-consult-btn">
              Get a Free Consultation <BsArrowRight />
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-item">
              <HiCheckBadge className="trust-icon" />
              <span>50+ Projects Delivered</span>
            </div>
            <div className="hero-trust-item">
              <HiCheckBadge className="trust-icon" />
              <span>Trusted by Local & International Clients</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img src={homeLogo} alt="Digital Solutions" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
