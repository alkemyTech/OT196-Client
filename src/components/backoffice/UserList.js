import React from "react";
import { Table, Button } from "react-bootstrap";

import EditUserModal from "./EditUserModal";

import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { successAlert, warningAlert } from "../../setupAlerts";

// fake user (admin role) to test
const jwtExample =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOjF9.KA60K1WLyw4tlfA5S1B1vW_3-JFxGkOzCcnUZBSgGPk";

// Gets a list from all the users if the user logged is an Admin
const UserList = () => {
  const [list, setList] = React.useState([]);

  const getUsers = async () => {
    try {
      // can be changed to a custom fetch that gets the user that's logged in
      const response = await axios.get("http://localhost:3000/users", {
        headers: {
          Authorization: "Bearer " + jwtExample,
        },
      });
      setList(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  const updateProfile = async (result, user) => {
    try {
      if (result.isConfirmed) {
        await axios.put(`http://localhost:3000/users/${user.id}`, user, {
          headers: {
            Authorization: "Bearer " + jwtExample,
          },
        });
        successAlert();
        getUsers();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const warningUpdate = (e, user) => {
    e.preventDefault();
    warningAlert({
      iconWarning: "warning",
      msgWarning: "El usuario sufrirá cambios. ¿Desea continuar?",
      confirmButton: true,
      denyButton: true,
      triggerFunction: updateProfile,
      params: user,
    });
  };

  const deleteUser = async (result, id) => {
    try {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/users/${id}`);
        successAlert();
        getUsers();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const warningDelete = (e, id) => {
    e.preventDefault();
    warningAlert({
      iconWarning: "warning",
      msgWarning: "El usuario será eliminado. ¿Desea continuar?",
      textConfirmButton: "Aceptar",
      confirmButton: true,
      textDenyButton: "Cancelar",
      denyButton: true,
      triggerFunction: deleteUser,
      params: id,
    });
  };

  const editBtn = "Edit";

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Table borderless hover responsive>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <EditUserModal
                    title="Edit user"
                    item={user}
                    btnLabel={editBtn}
                    onSubmitForm={warningUpdate}
                  />
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={(e) => warningDelete(e, user.id)}
                  >
                    <FaTrashAlt /> Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
