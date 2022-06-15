import React, { useEffect } from "react"
import * as yup from "yup"
import { Formik } from "formik"
import { Button, Form } from "react-bootstrap"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export default function UserForm() {
  const navigate = useNavigate()

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

  const {REACT_APP_BACKEND_URL} = process.env

  const handleSubmit = async (e) => {
    const newUser = {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      password: e.password
    }
    //CREATE USER IN DATABASE 
    const response = await axios.post(`${REACT_APP_BACKEND_URL}/users/auth/register`, newUser)
    //GET A NEW VALID TOKEN FOR OUR USER 
    const token = await axios.post(`${REACT_APP_BACKEND_URL}/jwt/auth/login`, response.data)
    //PARSE TOKEN DATA TO JSON
    const userToken = JSON.stringify(token.data.token)
    //PERSIST TOKEN IN LOCAL STORAGE 
    localStorage.setItem('somosMasToken', userToken)
    Swal.fire({
      icon: 'success', 
      title: 'Usuario creado con exito'
    }).then(result=> {
      if(result.isConfirmed) navigate('/')
    }).catch(()=> {
      Swal.fire({
        icon: 'error', 
        title: 'Error en la petición HTTP'
      })
    })
  }


  const schema = yup.object({
    firstName: yup.string().max(16, 'Must be 16 characters or less').required('Required'),
    lastName: yup.string().min(3, 'Must be 3 characters at least').max(16, 'Must be 16 characters or less').required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
    password: yup.string().min(6, 'Must be 6 characters at least').max(20, 'Must be 20 characters or less').required('Required')
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
            <Form.Label className="text-start">First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              onChange={handleChange}
              value={values.firstName}
              placeholder="Enter your name"
              isValid={touched.firstName && !errors.firstName}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              onChange={handleChange}
              value={values.lastName}
              placeholder="Enter your lastname"
              isValid={touched.lastName && !errors.lastName}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter email"
              isValid={touched.email && !errors.email}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Choose a password"
              isValid={touched.password && !errors.password}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
