import React from "react";
import BtnDelete from "../utils/BtnDelete";

const BtnDeleteNews = ({ newsId, arrFunc = [] }) => {
  const { REACT_APP_BACKEND_NEWS } = process.env;

  return (
    <BtnDelete
      apiRoute={REACT_APP_BACKEND_NEWS}
      id={newsId}
      msgWarning="La novedad será eliminada. ¿Desea continuar?"
      arrFunc={arrFunc}
    />
  );
};

export default BtnDeleteNews;
