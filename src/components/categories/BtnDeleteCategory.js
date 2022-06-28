import React from "react";
import BtnDelete from "../utils/BtnDelete";

const BtnDeleteCategory = ({ categoryId, refreshCategories }) => {
  const { REACT_APP_BACKEND_CATEGORIES } = process.env;

  return (
    <BtnDelete
      apiRoute={REACT_APP_BACKEND_CATEGORIES}
      id={categoryId}
      msgWarning="La categoría será eliminada. ¿Desea continuar?"
      btnLabel=""
      arrFunc={[() => refreshCategories(Date.now)]}
    />
  );
};

export default BtnDeleteCategory;
