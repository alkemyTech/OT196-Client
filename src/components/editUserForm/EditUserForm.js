import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'

import { useState, useEffect } from "react";



export default function EditUserForm() {

  const [user, setUser] = useState([])

  const REACT_APP_BACKEND = `http://localhost:3001`

  useEffect( () => {    
    async function getUsers(){
      const res = await axios
        .get(`${REACT_APP_BACKEND}/users`)
        .then(res => {
          return (res.data)})
        .then(response => {setUser(response)})
          }
    getUsers()
  },[REACT_APP_BACKEND])
console.log(user)

  return (
      <div>
      {user.map((item) => (
        <Form >
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control className='text-center' type="text" placeholder={item.firstName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control className='text-center' type="text" placeholder={item.lastName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRol">
          <Form.Label>Rol del Usuario</Form.Label>
          <Form.Control className='text-center' type="text" placeholder={item.roleId} />
        </Form.Group>

        <Button variant="primary" type="submit" >
          Actualizar
        </Button>
      </Form>
        ))}
        
      </div>

  );
}
