import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiLinux,
  DiWindows,
  DiGit,
  DiPython,
  DiJava,
  DiJavascript1,
} from "react-icons/di";
import {
  SiKubernetes,
  SiAzuredevops,
  SiAmazonaws,
  SiMicrosoftazure,
  SiTerraform,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiArgo,
  SiPrometheus,
  SiGrafana,
  SiElasticstack,
  SiVault,
  SiJira,
  SiConfluence,


} from "react-icons/si";

import { FaNetworkWired , FaAws } from "react-icons/fa";

function renderIcon(icon, label) {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-${label}`}>{label}</Tooltip>}
    >
      <Col xs={4} md={2} className="tech-icons">
        {icon}
      </Col>
    </OverlayTrigger>
  );
}

function Techstack() {
  return (
    <div style={{ marginTop: "40px" }}>
      {/* Cloud & Infrastructure */}
      <h2 className="purple" style={{ marginBottom: "20px" }}>Cloud & Infrastructure</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {renderIcon(<SiAmazonaws />, "AWS")}
        {renderIcon(<SiMicrosoftazure />, "Microsoft Azure")}
        {renderIcon(<SiTerraform />, "Terraform")}
        {renderIcon(<SiKubernetes />, "Kubernetes")}
        {renderIcon(<SiDocker />, "Docker")}
      </Row>

      {/* CI/CD */}
      <h2 className="purple" style={{ marginBottom: "20px" }}>CI / CD</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {renderIcon(<SiJenkins />, "Jenkins")}
        {renderIcon(<SiGithubactions />, "GitHub Actions")}
        {renderIcon(<SiAzuredevops />, "Azure DevOps")}
        {renderIcon(<SiArgo />, "Argo CD")}
      </Row>

      {/* Monitoring & Logs */}
      <h2 className="purple" style={{ marginBottom: "20px" }}>Monitoring & Logs</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {renderIcon(<SiPrometheus />, "Prometheus")}
        {renderIcon(<SiGrafana />, "Grafana")}
        {renderIcon(<SiElasticstack />, "Elastic Stack (ELK)")}
        {renderIcon(<FaNetworkWired />, "Kiali ")}
      </Row>

      {/* Security */}
      <h2 className="purple" style={{ marginBottom: "20px" }}>Security</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {renderIcon(<SiVault />, "HashiCorp Vault")}
        {renderIcon(<FaAws />, "AWS Secrets Manager")}
      </Row>

      {/* Tools & OS */}
      <h2 className="purple" style={{ marginBottom: "20px" }}>Tools & OS</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {renderIcon(<DiGit />, "Git")}
        {renderIcon(<SiJira />, "Jira")}
        {renderIcon(<SiConfluence />, "Confluence")}
        {renderIcon(<DiLinux />, "Linux")}
        {renderIcon(<DiWindows />, "Windows Server")}
      </Row>

            {/* Programming Languages */}
            <h2 className="purple" style={{ marginBottom: "20px" }}>Programming Languages</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {renderIcon(<DiPython />, "Python")}
        {renderIcon(<DiJava />, "Java")}
        {renderIcon(<DiJavascript1 />, "JavaScript")}
      </Row>
    </div>
  );
}

export default Techstack;
