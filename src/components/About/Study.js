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

  const placeStyle = {
    color: "#FFFFFF",
    fontWeight: "bold",
  };

  return (
    <div data-aos="fade-up" style={{ marginTop: "50px" }}>
      <h2
        className="text-center"
        style={{ color: secondaryColor, fontWeight: "bold", marginBottom: "40px" }}
      >
        Education Timeline
      </h2>
      <VerticalTimeline lineColor={primaryColor}>
        <VerticalTimelineElement
          date="Sep 2023 - Jun 2025"
          iconStyle={{ background: primaryColor, color: "#fff" }}
          icon={<MdWork />}
          contentStyle={timelineStyle}
        >
          <h3 style={titleStyle}>Master's degree, Computer Systems Networking and Telecommunications </h3>
          <h5 style={placeStyle}>National School of Electronics and Telecoms of Sfax </h5>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Sep 2017 - Jun 2020     "
          iconStyle={{ background: primaryColor, color: "#fff" }}
          icon={<MdWork />}
          contentStyle={timelineStyle}
        >
          <h3 style={titleStyle}>Engineer's degree, Deck and Naval systems </h3>
          <h5 style={placeStyle}>Tunisian Naval Academy </h5>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Sep 2015 - Jun 2017"
          iconStyle={{ background: primaryColor, color: "#fff" }}
          icon={<MdWork />}
          contentStyle={timelineStyle}
        >
          <h3 style={titleStyle}> Preparatory Cycle, Technical Preparatory </h3>
          <h5 style={placeStyle}>Tunisian Naval Academy </h5>

        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  );
}

export default Career;
