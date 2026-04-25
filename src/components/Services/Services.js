import React from "react";
import { BsPalette, BsCameraReels, BsMegaphone, BsCode } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const servicesData = [
  {
    icon: <BsPalette />,
    title: "Design & Branding",
    items: [
      "Logo Creation",
      "Social Media Posts",
      "Visual Identity Packs",
      "Business Cards",
    ],
    color: "#8b5cf6",
  },
  {
    icon: <BsCameraReels />,
    title: "Video & Content",
    items: [
      "Short Video Editing (Reels/TikTok)",
      "Promotional Videos",
      "Subtitles & Captions",
      "Ad Creatives",
    ],
    color: "#ec4899",
  },
  {
    icon: <BsMegaphone />,
    title: "Digital Marketing",
    items: [
      "Social Media Management",
      "Content Planning",
      "Facebook/Instagram Ads Setup",
      "Account Optimization",
    ],
    color: "#06b6d4",
  },
  {
    icon: <BsCode />,
    title: "Technical & Web",
    items: [
      "Landing Pages / Mini Websites",
      "Portfolio Creation",
      "Google Business Setup",
      "Professional Email Setup",
    ],
    color: "#4f46e5",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title fade-up">
          What I <span className="accent">Offer</span>
        </h2>
        <p className="section-subtitle fade-up">
          Complete digital solutions tailored to your business needs. No
          templates — every project is custom-crafted for you.
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              className={`service-card fade-up fade-up-delay-${index + 1}`}
              key={service.title}
            >
              <div
                className="service-icon"
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href="https://wa.me/21628466944?text=Hi%20Omar!%20I'm%20interested%20in%20your%20digital%20services."
                target="_blank"
                rel="noreferrer"
                className="service-cta"
              >
                Contact for Pricing <BsArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
