import React from "react";

import { Row, Col, Button } from "react-bootstrap";

import CustomModal from "./CustomModal";

const Profile = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const editBtn = "Edit";

  // Get the profile from the user currently logged in
  const getProfile = async () => {
    try {
      // const response = await fetch("htttp://localhost:3000/auth/me")
      //   const jsonData = await response.json();
      //   setProfile(jsonData);

      //  fake user
      const fakeUser = {
        firstName: "Usuario",
        lastName: "Demo",
        email: "test@test.com",
      };
      setFirstName(fakeUser.firstName);
      setLastName(fakeUser.lastName);
      setEmail(fakeUser.email);
    } catch (e) {
      console.error(e);
    }
  };

  //   delete the profile currently logged in
  const deleteProfile = async (id) => {
    try {
      //   await fetch(`http://localhost:5000/profile/${id}`, { method: "DELETE" }
      // logout and redirect to Home
    } catch (e) {
      console.error(e);
    }
  };

  const updateProfile = async (input, property) => {
    try {
      // fetch url (api) with update

      // fake update:
      if (property === "firstName") {
        setFirstName(input);
      } else if (property === "lastName") {
        setLastName(input);
      } else if (property === "email") {
        setEmail(input);
      }
    } catch (e) {}
  };

  React.useEffect(() => {
    getProfile();
  }, []);

  //   Prepare an array with data from the fake user
  const arrData = [
    {
      text: "First name:",
      item: firstName,
      onSubmitData: updateProfile,
      btnLabel: editBtn,
      property: "firstName",
      inputClass: "text",
    },
    {
      text: "Last name:",
      item: lastName,
      onSubmitData: updateProfile,
      btnLabel: editBtn,
      property: "lastName",
      inputClass: "text",
    },
    {
      text: "Email:",
      item: email,
      onSubmitData: updateProfile,
      btnLabel: editBtn,
      property: "email",
      inputClass: "email",
    },
  ];

  //   starting point for the value that will be unique key for each child in the list
  let rowId = 0;

  return (
    <>
      {arrData &&
        arrData.map((i) => (
          <Row className="mb-3" key={rowId++}>
            <Col>
              <h4>{i.text}</h4>
            </Col>
            <Col>
              <span>{i.item}</span>
            </Col>
            <Col className="d-flex justify-content-end">
              <CustomModal
                text={i.text}
                item={i.item}
                btnLabel={i.btnLabel}
                onSubmitData={i.onSubmitData}
                property={i.property}
                inputClass={i.inputClass}
              />
            </Col>
          </Row>
        ))}
      <Row>
        <Col className="d-flex justify-content-end">
          <Button onClick={deleteProfile} variant="danger">
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
