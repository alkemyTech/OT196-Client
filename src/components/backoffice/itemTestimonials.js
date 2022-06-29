import React from "react";
import BtnDelete from "../utils/BtnDelete";
import EditTestimony from "../testimonials/TestimonyEdit";

const TestimonyItem = ({ testimony, axiosApi }) => {
  const { REACT_APP_BACKEND_TESTIMONIALS } = process.env;
  const url = `${REACT_APP_BACKEND_TESTIMONIALS}`;

  return (
    <ul className="list-group-item m-1 bg-light rounded border">
      <div className="mt-2 d-flex justify-content-start">
        <strong>{testimony.name}</strong>
      </div>
      <div  className="m-2 d-flex justify-content-center">
        <p dangerouslySetInnerHTML={{ __html: testimony.content }}/>
      </div>
      <div className="d-flex justify-content-end">
        <EditTestimony testimony={testimony} axiosApi={axiosApi}/>
        <BtnDelete
          apiRoute={url}
          id={testimony.id}
          msgWarning="¿Desea eliminar este testimonio?"
          arrFunc={[axiosApi]}
        />
      </div>
    </ul>
  );
};

export default TestimonyItem;
