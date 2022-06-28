import React from "react";
import { Modal, Button } from "react-bootstrap";
import { BiChevronsDown } from "react-icons/bi";
import TestimonialForm from './TestimonialForm';

function CreateTestimony({axiosApi}) {
    const [show, setShow] = React.useState(false);
  
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
            <BiChevronsDown /> Crear nuevo testimonio <BiChevronsDown />
          </>
        </Button>
        <Modal show={show} size='md' onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Crear nuevo testimonio</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TestimonialForm axiosApi={axiosApi}/>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default CreateTestimony;
