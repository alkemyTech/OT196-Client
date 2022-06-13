import React from "react";
import { FaTimes, FaRegEdit } from "react-icons/fa";
import axios from "axios";

const TestimonyItem = ({ testimony, axiosApi }) => {
    //function for delete button
    const onDelete = async (id) => {
        await axios.delete(`http://localhost:3000/testimonials/${id}`);
        axiosApi()
    };

    const onEdit = () => {
        //Form of gerardo
    };

    return(
        <ul className="list-group-item">
                <div >
                    <div className="mt-2 d-flex justify-content-start">
                      <strong>{testimony.name}</strong>
                    </div>
                    <div className="m-2 d-flex justify-content-center">
                      {testimony.content}
                    </div>
                    <div className="d-flex justify-content-end">
                    <button onClick={() => onEdit()} className="btn m-1 btn-dark">
                      Editar <FaRegEdit />
                    </button>
                    <button
                      onClick={() => onDelete(testimony.id)}
                      className="btn m-1 btn-danger"
                    >
                      Borrar <FaTimes />
                    </button>
                </div>
            </div>
        </ul>
    )
}

export default TestimonyItem;