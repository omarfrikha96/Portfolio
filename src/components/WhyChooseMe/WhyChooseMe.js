import React, { useState, useEffect, useRef } from "react";

const features = [
  { icon: "⚡", title: "Fast Delivery", desc: "Quick turnaround without compromising quality. Most projects delivered within 48-72 hours." },
  { icon: "🎯", title: "Professional Quality", desc: "Premium results that make your brand stand out from the competition." },
  { icon: "💻", title: "Technical Expertise", desc: "DevOps engineer background ensures robust, scalable, and secure solutions." },
  { icon: "🎖️", title: "Reliable & Disciplined", desc: "Ex-military officer — commitment, precision, and deadline respect guaranteed." },
];

const stats = [
  { target: 50, label: "Projects Delivered", suffix: "+" },
  { target: 30, label: "Happy Clients", suffix: "+" },
  { target: 3, label: "Years Experience", suffix: "+" },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const interval = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(interval); }
            else { setCount(start); }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function WhyChooseMe() {
  return (
    <section className="why-me" id="why-me">
      <div className="container">
        <h2 className="section-title fade-up">
          Why <span className="accent">Choose Me</span>
        </h2>
        <p className="section-subtitle fade-up">
          I combine technical expertise with creative precision to deliver results that exceed expectations.
        </p>

        <div className="why-grid">
          {features.map((f, i) => (
            <div className={`why-card fade-up fade-up-delay-${i + 1}`} key={f.title}>
              <span className="why-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="stats-row fade-up">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-number">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMe;
