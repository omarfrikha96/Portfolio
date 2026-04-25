import React from "react";

const testimonials = [
  {
    name: "Sami B.",
    role: "Restaurant Owner, Sousse",
    initials: "SB",
    stars: 5,
    text: "Omar completely transformed our social media presence. Our Instagram went from 200 to 2,000 followers in just two months. His designs are professional and eye-catching — exactly what we needed.",
  },
  {
    name: "Fatma M.",
    role: "Clinic Manager, Tunis",
    initials: "FM",
    stars: 5,
    text: "We needed a professional logo and brand identity for our new clinic. Omar delivered beyond expectations — clean, modern, and perfectly aligned with our vision. Highly recommended!",
  },
  {
    name: "Yassine K.",
    role: "E-Commerce Entrepreneur",
    initials: "YK",
    stars: 5,
    text: "Our online sales increased by 40% after Omar set up our Facebook ads and optimized our social media strategy. He really understands digital marketing.",
  },
  {
    name: "Amira H.",
    role: "Freelance Photographer",
    initials: "AH",
    stars: 5,
    text: "Omar built a beautiful portfolio website for me in just 3 days. Fast, responsive, and exactly the premium look I was going for. The best investment I've made for my business.",
  },
  {
    name: "Mehdi R.",
    role: "Startup Founder, Sfax",
    initials: "MR",
    stars: 5,
    text: "Reliable, fast, and extremely professional. Omar handled our full branding — logo, business cards, social media templates — all delivered on time and with incredible quality.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title fade-up">
          What Clients <span className="accent">Say</span>
        </h2>
        <p className="section-subtitle fade-up">
          Real results from real businesses. Here's what my clients have to say.
        </p>

        <div className="testimonials-track fade-up">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">
                {"★".repeat(t.stars)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
