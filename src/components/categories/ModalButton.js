import React, { useState } from 'react'
import { Button, Modal, Spinner } from 'react-bootstrap';
import ModalForm from './ModalForm';

function ModalButton(props){
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const {variant, text, categoryData, lastUpdate} = props
    const accion = (!categoryData) ? 'Creando' : 'Editando'

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    //const handleClick = () => setIsLoading(true);

    return(
        <>
        <Button className="mx-2" variant={variant} onClick={handleShow}>
            {text}
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
          <ModalForm categoryData={categoryData} lastUpdate={lastUpdate} handleClose={handleClose} setIsLoading={setIsLoading}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" form='categoryModal' disabled={isLoading} type="submit">{isLoading ? 
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> 
            : 
            'Guardar'}
          </Button>
        </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalButton