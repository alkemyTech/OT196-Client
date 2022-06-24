import React from "react";
import { FaTimes, FaRegEdit } from "react-icons/fa";
import BtnDelete from '../utils/BtnDelete'
import { Button } from "react-bootstrap";

const TestimonyItem = ({ testimony, axiosApi }) => {
    const {REACT_APP_BACKEND_URL, REACT_APP_BACKEND_TESTIMONIALS} = process.env;
    const url = `${REACT_APP_BACKEND_URL}${REACT_APP_BACKEND_TESTIMONIALS}`;
    const testimonyContent = testimony.content;
    const onEdit = () => {
        //gerards form
    };

    return(
        <ul className="list-group-item bg-light rounded border">
                    <div className="mt-2 d-flex justify-content-start">
                      <strong>{testimony.name}</strong>
                    </div>
                    <div className="m-2 d-flex justify-content-center">
                      {testimonyContent.slice(3, -4)}
                    </div>
          <div className="d-flex justify-content-end">
              <Button  className='me-2' onClick={() => onEdit()}>
                  Editar <FaRegEdit />
              </Button>
              <BtnDelete 
              apiRoute={url} 
              id={testimony.id} 
              msgWarning='¿Desea eliminar este testimonio?' 
              arrFunc={[axiosApi]}
              />
          </div>
        </ul>
    )
}

export default TestimonyItem;