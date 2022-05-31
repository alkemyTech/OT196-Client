import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'

import { useState, useEffect } from "react";



export default function EditUserForm() {

  const [user, setUser] = useState()

  const REACT_APP_BACKEND = `http://localhost:3001`

  useEffect( () => {    
    async function getUsers(){
      const res = await axios
        .get(`${REACT_APP_BACKEND}/users`)
        .then(res => {
          setUser(res.data)})
    }
    getUsers()
  },[REACT_APP_BACKEND])

  


      


  return (
    <Form >
      {/* <Form.Group className="mb-3" controlId="formBasicSelect">
        <Form.Select className='text-center' aria-label="Default select example">
          <option>Seleccioná usuario a modificar</option>
          <option value="1">{users[0].name}</option>
          <option value="2">{users[1].name}</option>
          <option value="3">{users[2].name}</option>
        </Form.Select>
      </Form.Group> */}
      <Form.Group className="mb-3 " controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Ingresá tu nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Ingresá tu apellido" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRol">
        <Form.Label>Rol del Usuario</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Elegí tu rol" />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Actualizar
      </Button>
    </Form>
  );
}
