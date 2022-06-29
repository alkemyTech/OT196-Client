import React from "react";
import { Table } from "react-bootstrap";

import EditUserModal from "./EditUserModal";

import { errorAlert, successAlert, warningAlert } from "../../setupAlerts";
import BtnDelete from "../utils/BtnDelete";
import { getRequest, putRequest } from "../../services/RequestService";

// Gets a list from all the users if the user logged is an Admin
const UserList = () => {
  const [list, setList] = React.useState([]);

  const { REACT_APP_BACKEND_USERS } = process.env;

  const getUsers = async () => {
    try {
      // can be changed to a custom fetch that gets the user that's logged in
      const response = await getRequest(REACT_APP_BACKEND_USERS);
      setList(response);
    } catch (e) {
      console.error(e.message);
      errorAlert({});
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

  const updateProfile = async (result, user) => {
    try {
      if (result.isConfirmed) {
        await putRequest(`${REACT_APP_BACKEND_USERS}/${user.id}`, user);
        successAlert({});
        getUsers();
      }
    } catch (e) {
      console.error(e);
      errorAlert({});
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Table borderless hover responsive className="mb-5">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
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
                    onSubmitForm={warningUpdate}
                  />
                </td>
                <td>
                  <BtnDelete
                    apiRoute={REACT_APP_BACKEND_USERS}
                    id={user.id}
                    msgWarning={"¿Estás seguro de eliminar este usuario?"}
                    arrFunc={[getUsers]}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
