import React from "react";
import { Table, Button } from "react-bootstrap";

import CustomModal from "./CustomModal";

import { FaTrashAlt } from "react-icons/fa";

// fake user (admin role) to test
const jwtExample =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJVc3VhcmlvIiwibGFzdE5hbWUiOiJEZW1vIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaW1hZ2UiOiJodHRwczovL3d3dy5kZXNpZ25ldm8uY29tL3Jlcy90ZW1wbGF0ZXMvdGh1bWJfc21hbGwvY29sb3JmdWwtaGFuZC1hbmQtd2FybS1jb21tdW5pdHkucG5nIiwicGFzc3dvcmQiOiIxMjM0Iiwicm9sZUlkIjoxfQ._f00RS4RShZx9TuyEt9Ge3v2KnindoKemeetD_FvvZE";

// Gets a list from all the users if the user logged is an Admin
const UserList = () => {
  const [list, setList] = React.useState([]);

  const getUsers = async () => {
    try {
      // can be changed to a custom fetch that gets the user that's logged in
      const response = await fetch("http://localhost:3000/users", {
        headers: new Headers({
          Authorization: "Bearer " + jwtExample,
        }),
      });
      const jsonData = await response.json();
      setList(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  const updateProfile = async (input, property) => {
    try {
      // fetch url (api) with update

      // fake update:
      if (property === "firstName") {
        console.log("New first name going to DB ", input);
      } else if (property === "lastName") {
        console.log("New last name going to DB ", input);
      } else if (property === "email") {
        console.log("New email going to DB ", input);
      }
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Table borderless hover>
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
              <tr>
                <td>
                  {user.firstName}{" "}
                  <CustomModal
                    text={"Edit first name"}
                    item={user.firstName}
                    btnLabel={"Edit"}
                    onSubmitData={updateProfile}
                    property={"firstName"}
                  />
                </td>
                <td>
                  {user.lastName}{" "}
                  <CustomModal
                    text={"Edit last name"}
                    item={user.lastName}
                    btnLabel={"Edit"}
                    onSubmitData={updateProfile}
                    property={"lastName"}
                  />
                </td>
                <td>
                  {user.email}{" "}
                  <CustomModal
                    text={"Edit email"}
                    item={user.email}
                    btnLabel={"Edit"}
                    onSubmitData={updateProfile}
                    property={"email"}
                    inputClass="email"
                  />
                </td>
                <td></td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => console.log("DELETED")}
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
