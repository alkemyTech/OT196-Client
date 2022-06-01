import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'

import { useState, useEffect } from "react";

export default function EditUserForm() {

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
      const res = await axios
        .get(`${REACT_APP_BACKEND}/users`)
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

  function submitHandler(e) {
    e.preventDefault()
    axios
      .put(`${REACT_APP_BACKEND}/users/2`, { firstName:userData.firstName, lastName:userData.lastName, roleId:userData.roleId})
      .then(res => {
        console.log('success')
      })
      .catch((error) => { console.log(error) })
    }



return (
  <div>
      <Form >
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='firstName' onChange={handleChange} value={userData.firstName} className='text-center' placeholder={user.map(e=>{
            e.firstName
          })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={handleChange} value={userData.lastName} name='lastName' className='text-center' type="text" placeholder={user[0]} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRol">
          <Form.Label>Rol del Usuario</Form.Label>
          <Form.Control onChange={handleChange} value={userData.roleId} name='roleId' className='text-center' type="text" placeholder={user[0]} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submitHandler}>
          Actualizar
        </Button>
      </Form>
  </div>

);
}
