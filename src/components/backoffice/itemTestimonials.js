import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import BtnDelete from '../utils/BtnDelete'
import TestimonialForm from '../testimonials/TestimonialForm';


const TestimonyItem = ({ testimony, axiosApi }) => {
    const [edit, setEdit] = useState(false)
    const onEdit = () => {
        setEdit(!edit)
    };

    return(
        <ul className="list-group-item">
                <div >
                  
                       {/* RENDER OF FORM-COMPONENT FOR EDIT INFORMATION   */}
                   { edit ? <TestimonialForm 
                    existingTestimony={testimony}
                   /> :
                   <div> 
                      <div className="mt-2 d-flex justify-content-start"> 
                        <strong>{testimony.name}</strong>                        
                      </div>
                      <div className="m-2 d-flex justify-content-center" >
                          {testimony.content}
                      </div>
                    </div>
                   }
                    <div className="d-flex justify-content-end">
                    <button onClick={() => onEdit()} className="btn m-1 btn-dark">
                      Editar <FaRegEdit />
                    </button>
                    <BtnDelete 
                    apiRoute={url} 
                    id={testimony.id} 
                    msgWarning='¿Desea eliminar este testimonio?' 
                    arrFunc={[axiosApi]}
              />
                </div>
            </div>
        </ul>
    )
}

export default TestimonyItem;