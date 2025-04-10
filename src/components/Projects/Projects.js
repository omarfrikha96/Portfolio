import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={chatify}
              title="Deploy TalentCloud Application"
              description="TalentCloud is a recruitment application created by the Tekboot Solution Team. My role was to deploy it in a multi-environment architecture. "
              ghLink=""
              plus="● Set up a multi-environment architecture (dev, qa, prod) deployed on AWS using Terraform.
                      ● Integrated CI/CD with Jenkins and ArgoCD, deploying Docker images to AWS ECR and Kubernetes (AWS EKS).
                      ● Used Istio to manage communication between microservices through a service mesh.
                      ● Centralized monitoring of metrics, logs, and traces with Grafana, Prometheus, and other tools.
                      ● Integrated multiple domain names for each environment with SSL certification, using a free method via Cloudflare + Let's Encrypt certificate, and a paid method through AWS Certificate Manager and Route 53.
                      ● Stored secrets securely using HashiCorp Vault."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Deploy My Portfolio website"
              description="Develop a portfolio website using React.js and deploy it on AWS S3 and CloudFront with a custom domain name."
              ghLink="https://github.com/omarfrikha96/Portfolio"
              plus="
              ● Developed a portfolio website using React.js 18 and Bootstrap 5.
              ● Integrated CI/CD with GitHub Actions to automatically deploy the website to AWS S3 and CloudFront whenever changes are pushed to the main branch.
              ● Implemented DevSecOps practices by using GitHub Actions to run security scans on the code and dependencies before deployment with Trivy and SonarCloud.
              ● Used AWS S3 to host the static website and AWS CloudFront as a CDN to improve performance and security.
              ● Used AWS IAM to manage access to the S3 bucket and CloudFront distribution.
              ● Configured a custom domain name for the website using AWS Route 53 and SSL certification using AWS Certificate Manager.
              ● Implemented a responsive design to ensure the website looks great on all devices.           
              "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Deployment of a Multi-Tier Application on AWS EKS"
              description="A multi-tier application with a front-end (React.js), back-end (Node.js), and database (MongoDB). The application is deployed on AWS EKS using Docker and Kubernetes. "
              ghLink="https://github.com/"
              plus="● Deployed on Kubernetes (AWS EKS) using Terraform and Docker.
                    ● Integrated CI/CD with Jenkins following DevSecOps principles.
                   ● Monitored cluster metrics with Grafana and Prometheus."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Deployment of a 3-Tier Application on Azure AKS"
              description="A 3-tier application with a front-end (React.js), back-end (Node.js), and database (MongoDB). The application is deployed on Azure AKS using Docker and Kubernetes. "
              ghLink="https://github.com/"
              plus="● Deployed the application on Azure AKS via Docker and Kubernetes.
                    ● Automated CI/CD with GitHub Actions: compilation, testing, security scan (Trivy), and automatic deployment on AKS.
                    ● Set up complete monitoring via Prometheus and Grafana for performance monitoring and alerts."
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
