import React, { useEffect } from "react"
import * as yup from "yup"
import { Formik } from "formik"
import { Button, Form } from "react-bootstrap"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { isMyUserLogged, submitUserToDB } from "../../app/slice"

export default function UserForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //FOR A FAST AUTHENTICATION, 
  //IT IS CHECKED IF THERE IS A TOKEN OF THIS APP IN LOCAL STORAGE, 
  //IF THERE IS A LOG IN IMMEDIATELY
  useEffect(()=> {
    const token = localStorage.getItem('somosMasToken')
    if(token){
      Swal.fire('Bienvenido de Nuevo')
      .then(result=> {
        if(result.isConfirmed) navigate('/')
      })
    }  
  }, [])
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  const handleSubmit = e => {
    const newUser = {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      password: e.password
    }
    
    //CREATE USER IN DATABASE 
    dispatch(submitUserToDB(newUser))
    .then((x) => {
      //LOGIN USER
      dispatch(isMyUserLogged({ email: newUser.email, password: newUser.password }))
        .unwrap()
        .then((result) => {
          localStorage.setItem("userData", JSON.stringify(result));
          Swal.fire({
            icon: "success",
            title: "Su cuenta fue creada con exito",
            text: "¡Gracias por registrarte, iniciamos la sesion por ti!",
          });
          navigate("/")
        })
        .catch((e)=>{
          Swal.fire({
            icon: "error",
            title: "Error al iniciar sesión",
            text: "Su cuenta ya existe, intente iniciar sesión nuevamente.",
          })
        })
    })
    .catch((e) => {
      console.log(e)
      Swal.fire({
        icon: "error",
        title: "Error al crear su cuenta",
        text: e,
      });
    });
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
