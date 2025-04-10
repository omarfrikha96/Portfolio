import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillFacebook ,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm Omar Frikha, a DevOps Engineer with a background in network security and cloud infrastructure. 
              <br />
              <br /> I’ve built robust CI/CD pipelines, managed 
              <i>
                <b className="purple"> Kubernetes clusters</b>
              </i>
              , and deployed scalable apps using 
              <i>
                <b className="purple"> AWS, Terraform, Jenkins. </b>
              </i>, and more.
              <br />
             
              <br />
              I'm passionate about creating scalable systems and automating everything I can,
              from
               <i>
                <b className="purple">  deployments to monitoring </b>
               </i>
               , to help engineering teams deliver faster, safer, and smarter.
              <br />
              <br />
              Let’s build the future of DevOps together 🚀
            </p>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/omarfrikha96"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/oma.fr.officiel/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook  />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/omarfr96/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/oma_fr/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
