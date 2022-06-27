import React from "react";
import NewsForm from "./NewsForm";
import { Modal, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { BiChevronsDown } from "react-icons/bi";

function CreateNews() {
  const [show, setShow] = React.useState(false);

  // Handle modal's show
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = async () => {
    setShow(true);
  };

  return (
    <>
      <Button className="mb-3" variant="primary" onClick={handleShow}>
        <>
          <BiChevronsDown /> Crear novedad <BiChevronsDown />
        </>
      </Button>
      <Modal show={show} size='lg' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear novedad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewsForm/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateNews;