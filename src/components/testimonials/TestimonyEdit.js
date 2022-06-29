import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import TestimonialForm from './TestimonialForm';

function EditTestimony({ testimony, axiosApi }) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => {
      setShow(false);
    };

    const handleShow = async () => {
      setShow(true);
    };
  
    return (
      <>
        <Button className="me-2" variant="primary" onClick={handleShow}>
          <>
            <FaRegEdit /> Editar
          </>
        </Button>
        <Modal show={show} size='md' onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar testimonio</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TestimonialForm existingTestimony={testimony} axiosApi={axiosApi}/>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default EditTestimony;
