import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Spinner } from "react-bootstrap";
import submitForm from "../utils/submitForm";

export default function Formcontact() {
  const [isLoading, setIsLoading] = useState({ status: false, message: "" });
  const { REACT_APP_BACKEND_CONTACTS } = process.env;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "El nombre debe tener al menos 2 caracteres!")
      .max(50, "El nombre no puede tener más de 50 caracteres")
      .required("Nombre es un campo obligatorio."),
    email: yup
      .string()
      .email("Este email no es válido")
      .required("Email es un campo obligatorio.")
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "El Email solo puede contener letras, numeros, puntos, guiones y guion bajo"
      ),
    message: yup
      .string()
      .min(20, "El mensaje debe contener al menos 20 caracteres")
      .max(300, "El mensaje no puede contener más de 300 caracteres")
      .required("Mensaje es un campo obligatorio."),
    phone: yup
      .string()
      .matches(phoneRegExp, "El numero de telefono es invalido.")
      .max(20, "El telefono no puede contener más de 20 caracteres."),
  });

  const onSubmitForm = async (values, actions) => {
    submitForm(
      values,
      actions,
      `${REACT_APP_BACKEND_CONTACTS}`,
      setIsLoading,
      "¡Gracias por contactarse!",
      "En breves, le llegará un mensaje a su email."
    );
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          phone: "",
        }}
        //Validación del schema creado con yup
        validationSchema={contactSchema}
        onSubmit={onSubmitForm}
      >
        {({ errors }) => (
          <Form>
            <div className="form-inline">
              <label className="fs-5" htmlFor="name">
                Nombre
              </label>
              <Field
                className="form-control"
                type="text"
                name="name"
                placeholder="Ej: Samuel Jackson"
                id="name"
              />
              <ErrorMessage
                name="name"
                component={() => (
                  <div className="alert alert-danger">{errors.name}</div>
                )}
              />
            </div>
            <div className="form-group">
              <label className="fs-5" htmlFor="email">
                Email de contacto
              </label>
              <Field
                className="form-control"
                type="text"
                name="email"
                placeholder="Ej: Samuel_Jackson@gmail.com"
                id="email"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="alert alert-danger">{errors.email}</div>
                )}
              />
            </div>
            <div className="form-group">
              <label className="fs-5" htmlFor="phone">
                Telefono de contacto
              </label>
              <Field
                className="form-control"
                type="text"
                name="phone"
                placeholder="Ej: 113252185"
                id="phone"
              />
              <ErrorMessage
                name="phone"
                component={() => (
                  <div className="alert alert-danger">{errors.phone}</div>
                )}
              />
            </div>
            <div className="form-group">
              <label className="fs-5">Mensaje</label>
              <Field
                className="form-control"
                as="textarea"
                name="message"
                placeholder="Escribe tu mensaje aqui"
                id="message"
              />
              <ErrorMessage
                name="message"
                component={() => (
                  <div className="alert alert-danger">{errors.message}</div>
                )}
              />
            </div>
            <br />
            <button
              className="btn ps-5 pe-5 mb-3 btn-outline-dark"
              type="submit"
            >
              Enviar
            </button>
            <div className="text-green">
              {isLoading.status ? (
                <Spinner animation="border" variant="dark" />
              ) : (
                isLoading.message
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
