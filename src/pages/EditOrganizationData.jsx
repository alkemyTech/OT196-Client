import React from "react";
import { useFormik } from "formik";
import { Button, Breadcrumb } from "react-bootstrap";
import "./EditOrganizationData.css";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { submitUpdateDataOrganization } from "../app/slice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import customTransition from "../components/utils/CustomTransition";

export default function EditOrganizationData() {
  const dispatch = useDispatch();

  const handleSubmitData = (data) => {
    dispatch(submitUpdateDataOrganization(data))
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "la base de datos se ha actualizado con éxito",
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          text: "Error en la peticion HTTP",
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      imagen: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) errors.name = "El nuevo nombre es requerido";
      if (!values.imagen) errors.imagen = "La nueva imagen es requerida";

      return errors;
    },
    onSubmit: (values) => handleSubmitData(values),
  });

  return (
    <motion.section
      className="editOrganizationData_main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <Breadcrumb className="mt-3 ms-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/backoffice" }}>
          Backoffice
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Organización</Breadcrumb.Item>
      </Breadcrumb>
      <h1>
        {" "}
        A continuacion puedes editar el nombre y el logo de la organización:{" "}
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="editOrganizationData_container"
      >
        <input
          name="name"
          placeholder="Nombre de la organización"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
          key={1}
          className="editOrganizationData_input"
        />{" "}
        <br />
        {formik.errors.name ? (
          <div style={{ color: "red" }}> {formik.errors.name} </div>
        ) : null}
        <label> </label>
        <input
          name="imagen"
          placeholder="Imagen"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.imagen}
          key={2}
          className="editOrganizationData_input"
        />{" "}
        <br />
        {formik.errors.imagen ? (
          <div style={{ color: "red" }}> {formik.errors.imagen} </div>
        ) : null}
        <Button
          onBlur={formik.handleBlur}
          //disabled={!formik.name || !formik.imagen}
          type="submit"
        >
          {" "}
          Enviar{" "}
        </Button>
      </form>
    </motion.section>
  );
}
