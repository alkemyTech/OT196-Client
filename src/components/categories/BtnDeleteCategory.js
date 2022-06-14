import React from "react";
import BtnDelete from "../utils/BtnDelete";

const BtnDeleteCategory = ({ categoryId }) => {
  const { REACT_APP_BACKEND_CATEGORIES } = process.env;

  return <BtnDelete apiRoute={REACT_APP_BACKEND_CATEGORIES} id={categoryId} />;
};

export default BtnDeleteCategory;
