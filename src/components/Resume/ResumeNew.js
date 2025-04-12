import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdfen from "../../Assets/../Assets/Omar_Frikha_en.pdf";
import pdffr from "../../Assets/../Assets/Omar_Frikha_fr.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">


        <Row style={{ justifyContent: "center", position: "relative" }}>

        <Button
            variant="primary"
            href={pdfen}
            target="_blank"
            style={{ maxWidth: "250px", marginRight: "30px",marginTop: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV English version
          </Button>

        <Button
            variant="primary"
            href={pdffr}
            target="_blank"
            style={{ maxWidth: "250px" , marginRight: "30px",marginTop: "10px"}}
          >
            <AiOutlineDownload />
            &nbsp;Download CV French version
          </Button>

        </Row>

        <Row className="resume">
          <Document file={pdfen} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdfen} className="d-flex justify-content-center">
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>


      </Container>
    </div>
  );
}

export default ResumeNew;
