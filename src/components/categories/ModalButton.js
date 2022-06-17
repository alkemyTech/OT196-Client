import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import ModalForm from './ModalForm';

function ModalButton(props){
    const [showModal, setShowModal] = useState(false)
    const accion = (!props.data) ? 'Creando' : 'Editando'
    const buttonData = props.buttonData
    const categoryData = props.data || {}

    const handleShow = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    return(
        <>
        <Button variant={buttonData.variant} onClick={handleShow}>
            {buttonData.text}
        </Button>
        <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>{accion} categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm categoryData={categoryData}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" form='categoryModal' type="submit">Guardar</Button>
        </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalButton