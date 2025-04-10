import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Omar Frikha </span>
            from <span className="purple"> Tunisia.</span>
            <br />
            <br />
              Currently, I'm working as a  
              <i>
                <b className="purple"> DevOps Intern at Tekboot Solutions</b>
              </i>
              , where I help design multi-environment infrastructure on AWS and streamline deployments.
              <br />

          </p>
          

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
