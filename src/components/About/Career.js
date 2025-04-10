import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

function Career() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const primaryColor = "#1FACFE";
  const secondaryColor = "#0171EC";

  const timelineStyle = {
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    border: `1px solid ${primaryColor}`,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    backdropFilter: "blur(5px)",
  };

  const titleStyle = {
    color: primaryColor,
    fontWeight: "bold",
  };

  return (
    <div data-aos="fade-up" style={{ marginTop: "50px" }}>
      <h2
        className="text-center"
        style={{ color: secondaryColor, fontWeight: "bold", marginBottom: "40px" }}
      >
        Career Timeline
      </h2>
      <VerticalTimeline lineColor={primaryColor}>
        <VerticalTimelineElement
          date="Feb 2025 - Present"
          iconStyle={{ background: primaryColor, color: "#fff" }}
          icon={<MdWork />}
          contentStyle={timelineStyle}
        >
          <h3 style={titleStyle}>DevOps Intern </h3>
          <h5 style={titleStyle}>Tekboot Solutions </h5>
          <p>
          
            CI/CD with Jenkins & ArgoCD, Kubernetes (EKS), Infrastructure as Code with Terraform,
            Monitoring with Prometheus, Grafana, ELK Stack.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jun 2023 – Dec 2024"
          iconStyle={{ background: primaryColor, color: "#fff" }}
          icon={<MdWork />}
          contentStyle={timelineStyle}
        >
          <h3 style={titleStyle}>System & Network Administrator </h3>
          <h5 style={titleStyle}>Ministry of Defense </h5>
          <p>
            Managed network and infrastructure, performed security audits, resolved
            vulnerabilities, ensured high system availability.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jun 2023 – Dec 2024"
          iconStyle={{ background: primaryColor, color: "#fff" }}
          icon={<MdWork />}
          contentStyle={timelineStyle}
        >
          <h3 style={titleStyle}>Data Engineer Intern </h3>
          <h5 style={titleStyle}>OliveSoft LAGID </h5>
          <p>
            Managed network and infrastructure, performed security audits, resolved
            vulnerabilities, ensured high system availability.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Aug 2022 – May 2023"
          iconStyle={{ background: primaryColor, color: "#fff" }}
          icon={<MdWork />}
          contentStyle={timelineStyle}
        >
          <h3 style={titleStyle}>Director of Maritime Operations </h3>
          <h5 style={titleStyle}>Ministry of Defense </h5>
          <p>
            Supervised tactical operations in southern Tunisia, created strategic reports,
            recommended high-level decisions.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jul 2020 – Jul 2022"
          iconStyle={{ background: primaryColor, color: "#fff" }}
          icon={<MdWork />}
          contentStyle={timelineStyle}
        >
          <h3 style={titleStyle}>Deck Officer</h3>
          <h5 style={titleStyle}>Ministry of Defense </h5>
          <p>
            Specialized in embedded communication systems, maintained and secured tactical
            transmissions and sensitive data.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Career;
