import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Validation from "./ValidationForm";
import { useState, useEffect } from "react";
// import store from '../../reducers/store'; // Import the store
import { useSelector } from "react-redux";

export default function EditUserForm() {
  // States for validation
  const [validated, setValidated] = useState(false);

  // States for Get User and for the Inputs.
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    roleId: "",
  });



  // Temporary Backend PORT
  const REACT_APP_BACKEND = `http://localhost:3001`;

  // Inputs updates
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  // Get state from store for use the id
    
    const id = useSelector(state=>state.auth.authData.id);
    console.log(id)

  // const state = store.getState()
  // const id = state.auth.authData.id

  // PUT && Submit Handler. For test put a number instead of :id
  function onSubmit(event) {
    
    Validation(validated, setValidated, event); // Validation Form

    axios
      //  PENDING EXACT ROUTER BY  OT196-91 OR OT196-129
      .put(`${REACT_APP_BACKEND}/users/${id}`, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        roleId: userData.roleId,
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Example GET User for placeholders. 
  // useEffect(() => {
  //   async function getUsers() {
  //     // eslint-disable-next-line
  //     const res = await axios
  //       .get(`${REACT_APP_BACKEND}/users`)
  //       .then((res) => {
  //         return res.data;
  //       })
  //       .then((response) => {
  //         setUser(response);
  //       });
  //   }
  //   getUsers();
  // }, [REACT_APP_BACKEND]);

  return (
    <Form
      className="m-4 p-4 border"
      noValidate
      validated={validated}
      onSubmit={onSubmit}
    >
      {/* <Form.Label className='h4'>Seleccioná el elemento a modificar</Form.Label>
      <Form.Select className='text-center mb-2'  name='id' aria-label="Default select example">
        {user.map(e => <option key={e.id}> {e.firstName +' '+ e.lastName}</option>)}
      </Form.Select> */}

      <Form.Group className="mb-3 " controlId="formBasicName">
        <Form.Label className='h4'>Nombre</Form.Label>
        <Form.Control
          required
          type="text"
          name="firstName"
          onChange={handleChange}
          value={userData.firstName}
          className="text-center"
          placeholder={user.firstName}
          isInvalid={false}
        />
        <Form.Control.Feedback type="invalid">
          Campo Incompleto
        </Form.Control.Feedback>
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label className='h4'>Apellido</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          value={userData.lastName}
          name="lastName"
          className="text-center"
          type="text"
          placeholder={user.lastName}
        />
        <Form.Control.Feedback type="invalid">
          Campo Incompleto
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRol">
        <Form.Label className='h4'>Rol del Usuario</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          value={userData.roleId}
          name="roleId"
          className="text-center"
          type="text"
          placeholder={user.roleId}
        />
        <Form.Control.Feedback type="invalid">
          Campo Incompleto
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Actualizar
      </Button>
    </Form>
  );
}
