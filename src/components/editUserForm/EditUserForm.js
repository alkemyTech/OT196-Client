import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import Validation from './ValidationForm'
import { useState, useEffect } from "react";

export default function EditUserForm() {
  // States for validation
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
  // PUT && Submit Handler. For test put a number instead of :id
  function onSubmit(event) {
    event.preventDefault()
  
      Validation(validated,setValidated,event) // Validation Form
      
        axios
          //  PENDING EXACT ROUTER BY  OT196-91 OR OT196-129
          .put(`${REACT_APP_BACKEND}/users/:id`, { firstName: userData.firstName, lastName: userData.lastName, roleId: userData.roleId })
          .then(res => {
            console.log('success')
          })
          .catch((error) => { console.log(error) })
      

  }

  // Example GET User for placeholders. For test put a number instead of :id
    useEffect(() => {
      async function getUsers() {
        // eslint-disable-next-line
        const res = await axios
          .get(`${REACT_APP_BACKEND}/users/:id`)
          .then(res => {
            return (res.data)
          })
          .then(response => { setUser(response) })
      }
      getUsers()
  
    }, [REACT_APP_BACKEND])
  
  return (
    <Form  className= 'm-4 p-4 border' noValidate validated={validated} onSubmit={onSubmit}>
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
