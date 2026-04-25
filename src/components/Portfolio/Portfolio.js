import React, { useState } from "react";
import logo1 from "../../Assets/Portfolio/portfolio_logo_1.png";
import logo2 from "../../Assets/Portfolio/portfolio_logo_2.png";
import social1 from "../../Assets/Portfolio/portfolio_social_1.png";
import social2 from "../../Assets/Portfolio/portfolio_social_2.png";
import web1 from "../../Assets/Portfolio/portfolio_web_1.png";
import web2 from "../../Assets/Portfolio/portfolio_web_2.png";

const portfolioItems = [
  { id: 1, title: "Restaurant Brand Identity", category: "logos", image: logo1 },
  { id: 2, title: "Clinic Logo Design", category: "logos", image: logo2 },
  { id: 3, title: "Café Social Media Campaign", category: "social", image: social1 },
  { id: 4, title: "E-Commerce Ad Creatives", category: "social", image: social2 },
  { id: 5, title: "Business Landing Page", category: "web", image: web1 },
  { id: 6, title: "Photography Portfolio", category: "web", image: web2 },
];

const categories = [
  { key: "all", label: "All Work" },
  { key: "logos", label: "Logos" },
  { key: "social", label: "Social Media" },
  { key: "web", label: "Websites" },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title fade-up">
          My <span className="accent">Work</span>
        </h2>
        <p className="section-subtitle fade-up">
          A selection of recent projects showcasing design, branding, and web development work.
        </p>

        <div className="portfolio-filters fade-up">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeFilter === cat.key ? "active" : ""}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map((item) => (
            <div className="portfolio-item fade-up" key={item.id}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="portfolio-overlay">
                <h4>{item.title}</h4>
                <span>
                  {categories.find((c) => c.key === item.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
