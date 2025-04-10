import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Certified Kubernetes Administrator (CKA)",
    provider: "KodeKloud",
    link: "https://learn.kodekloud.com/certificate/acf969cc-9d8d-445c-a900-dfecd5349e30",
  },
  {
    title: "ISTQB® Certified Tester Foundation Level",
    provider: "ISTQB",
    link: "https://app.skillsclub.com/credential/86889-98befd8ea5d77587ae296048a65a02ba8d68dba72fa51a0234293a79ac27f24a?locale=en",
  },
  {
    title: "Full Stack Certification",
    provider: "Coding Dojo Africa Tunis",
    link: "https://app.diplomasafe.com/en-US/diploma/df1fecad0f60d12b8e77343305cef4d07e7d1a630",
  },
  {
    title: "Azure Fundamentals AZ-900",
    provider: "Microsoft",
    link: "https://www.credly.com/badges/1113830c-539e-47f9-8a49-807506516d69",
  },
];

function Certifications() {
  return (
    <div style={{ marginTop: "50px", paddingBottom: "50px" }}>
      <h2 className="purple text-center mb-5">
        <FaAward style={{ marginBottom: "7px" }} /> Certifications
      </h2>
      <Row style={{ justifyContent: "center", gap: "20px" }}>
        {certifications.map((cert, index) => (
          <Col
            key={index}
            xs={12}
            md={6}
            lg={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              className="glass-card"
              style={{
                width: "100%",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "20px",
                color: "#fff",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#1FACFF" }}>
                  {cert.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.95rem", color: "#bbb" }}>
                  {cert.provider}
                </Card.Text>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    textDecoration: "none",
                    display: "inline-block",
                    marginTop: "10px",
                  }}
                >
                  View Certificate <FaExternalLinkAlt size={14} />
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Certifications;
