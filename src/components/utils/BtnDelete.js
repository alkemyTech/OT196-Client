import React from "react";
import { Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { warningAlert, successAlert } from "../../setupAlerts";
import axios from "axios";

const BtnDelete = ({ btnLabel = "Eliminar", apiRoute, id, msgWarning }) => {
  const triggerDelete = async (result, id) => {
    try {
      if (result.isConfirmed) {
        await axios.delete(`${apiRoute}/${id}`);
        successAlert();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const warningDelete = (e, id) => {
    e.preventDefault();
    warningAlert({
      iconWarning: "warning",
      msgWarning,
      textConfirmButton: "Aceptar",
      confirmButton: true,
      textDenyButton: "Cancelar",
      denyButton: true,
      triggerFunction: triggerDelete,
      params: id,
    });
  };

  return (
    <>
      <Button variant="danger" onClick={(e) => warningDelete(e, id)}>
        <FaTrashAlt /> {btnLabel}
      </Button>
    </>
  );
};

export default BtnDelete;
