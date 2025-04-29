import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import eksproject from "../../Assets/Projects/eksproject.png";
import eksprojectgraph from "../../Assets/Projects/eksproject-graph.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import blog from "../../Assets/Projects/blog.png";
import bloggraph from "../../Assets/Projects/blog-graph.png";
import openai from "../../Assets/Projects/openai.png";
import chatgraph from "../../Assets/Projects/chatgraph.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">

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
              imgDesc=""
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
              imgPath={blog}
              imgDesc={bloggraph}
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
              imgPath={openai}
              imgDesc={chatgraph}
              title="OpenAI Chatbot Deployment on AWS EKS"
              description="I deployed a custom chatbot using the OpenAI API on an Amazon EKS (Elastic Kubernetes Service) cluster. This project demonstrates how modern cloud-native technologies and AI can come together to create scalable, intelligent applications."
              ghLink="https://github.com/omarfrikha96/chatbot-ui"
              plus="
                    ● CI/CD Pipeline Setup: Automated the process from code checkout to deployment using Jenkins, integrating security scans (OWASP, Trivy), and static analysis via SonarQube.
                    ● Infrastructure Management: Used Terraform to create and manage the AWS EKS cluster, allowing for seamless infrastructure application and destruction as needed.
                    ● Deployment: Dockerized the application and deployed it onto the EKS cluster, ensuring scalability and readiness for real-world use cases." 
            />
          </Col>

        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              imgDesc=""
              title="Deploy a marketplace application on Azure AKS"
              description="This project demonstrates the implementation of a complete DevSecOps pipeline to deploy a sample cloud-native application to Azure Kubernetes Service (AKS)"
              ghLink="https://github.com/omarfrikha96/DevSecOps-project.git"
              plus="●  Provisioning infrastructure using Terraform, ensuring reproducibility and version control.
                    ● Continuous Integration/Continuous Deployment (CI/CD): Automating the build, test, and deployment lifecycle with GitHub Actions.
                    ● Embedding security checks into every stage of the pipeline to ensure compliance and reduce risk.
                    ● Containerized the application using Docker and registered it on docker hub.
                    ● Deploying applications to Azure Kubernetes Service (AKS) for scalability and reliability.
                    ● Monitoring and logging to ensure application performance and reliability.
                    ● Implementing best practices for security, scalability, and maintainability." 
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eksproject}
              imgDesc={eksprojectgraph}
              title="Deployment of a Multi-Tier Application on AWS EKS"
              description="A multi-tier application with a front-end, back-end (Spring boot), and database (MySQL). The application is deployed on AWS EKS using Docker and Kubernetes. "
              ghLink=""
              plus="● Deployed on Kubernetes (AWS EKS) using Terraform and Docker.
                    ● Integrated CI/CD with Jenkins following DevSecOps principles.
                    ● Implemented security measures such as network policies, RBAC, and PodSecurityPolicies.
                    ● Configured monitoring and logging using Prometheus and Grafana.
                    ● Linked the application to a MySQL database
                    ● Added a custom domain name with SSL certification using Let's Encrypt and goodaddy."
                
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
