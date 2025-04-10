import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {props.ghLink && props.ghLink.trim() !== "" && (
          <Button variant="primary" href={props.ghLink} target="_blank" >
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
                )}
          {"\n"}
          {"\n"}
       
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Details"}
            </Button>
         
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title} - Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
          {props.plus.split("●").map((item, index) =>
              item.trim() !== "" ? <li key={index}>{item.trim()}</li> : null
            )}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;
