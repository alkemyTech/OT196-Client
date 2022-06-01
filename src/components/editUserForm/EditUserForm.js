import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import Validation from './ValidationForm'
import { useState, useEffect } from "react";


export default function EditUserForm() {

  const [validated, setValidated] = useState(false);

  // States for Get User and for the Inputs.
  const [user, setUser] = useState([])
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    roleId: "",
  })

  // Temporary Backend PORT
  const REACT_APP_BACKEND = `http://localhost:3001`

  // Axios Get User

  useEffect(() => {
    async function getUsers() {
      // eslint-disable-next-line
      const res = await axios
        .get(`${REACT_APP_BACKEND}/users/2`)
        .then(res => {
          return (res.data)
        })
        .then(response => { setUser(response) })
    }
    getUsers()

  }, [REACT_APP_BACKEND])

  // Inputs updates
  function handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    setUserData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  // PUT && Submit Handler

  function onSubmit(event) {
    event.preventDefault()
    if (validated === false) {
      Validation(validated,setValidated,event) // Validation Form
    } else {
      axios
        .put(`${REACT_APP_BACKEND}/users/2`, { firstName: userData.firstName, lastName: userData.lastName, roleId: userData.roleId })
        .then(res => {
          console.log('success')
        })
        .catch((error) => { console.log(error) })

    }
    
    
  }

  return (
    <Form noValidate validated={validated} onSubmit={onSubmit}>
      <Form.Group className="mb-3 " controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          name='firstName'
          onChange={handleChange}
          value={userData.firstName}
          className='text-center'
          placeholder={user.firstName}
          isInvalid={false}
        />
        <Form.Control.Feedback type="invalid">Campo Incompleto</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          value={userData.lastName}
          name='lastName'
          className='text-center'
          type="text"
          placeholder={user.lastName}
        />
        <Form.Control.Feedback type="invalid">Campo Incompleto</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRol">
        <Form.Label>Rol del Usuario</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          value={userData.roleId}
          name='roleId'
          className='text-center'
          type="text"
          placeholder={user.roleId}
        />
        <Form.Control.Feedback type="invalid">Campo Incompleto</Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" >
        Actualizar
      </Button>
    </Form>
  );
}
