import React from "react"
import * as yup from "yup"
import { Formik } from "formik"
import { Button, Form } from "react-bootstrap"

export default function UserForm() {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const handleSubmit = (e) => {
    const newUser = {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      password: e.password
    }
    return newUser
  }

  const schema = yup.object({
    firstName: yup.string().max(16, 'El nombre debe tener menos de 16 caracteres.').required('Required'),
    lastName: yup.string().min(3, 'El apellido debe tener al menos 3 caracteres.').max(16, 'El apellido debe tener menos de 16 caracteres.').required('Required'),
    email: yup.string().email('El email es invalido.').required('Required'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres.').max(20, 'La contraseña debe tener menos de 20 caracteres.').required('Required')
  })

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form
          noValidate
          className='col-md-4 center mx-auto my-0 border border border-2 rounded-3 shadow-lg p-3 mb-3 bg-body'
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-start">Nombre</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              onChange={handleChange}
              value={values.firstName}
              placeholder="Ingresa tu nombre"
              isValid={touched.firstName && !errors.firstName}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              onChange={handleChange}
              value={values.lastName}
              placeholder="Ingresa tu apellido"
              isValid={touched.lastName && !errors.lastName}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Ingresa tu email"
              isValid={touched.email && !errors.email}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
              isValid={touched.password && !errors.password}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="success" type="submit">
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  )
}
