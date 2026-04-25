import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhyChooseMe from "./components/WhyChooseMe/WhyChooseMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import CTASection from "./components/CTA/CTASection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./style.css";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      <div className={`preloader ${!loading ? "loaded" : ""}`}>
        <div className="preloader-spinner"></div>
      </div>
      <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseMe />
        <Portfolio />
        <Testimonials />
        <CTASection />
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}

export default App;
