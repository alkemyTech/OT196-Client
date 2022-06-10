import React from "react";
import Profile from "../components/myProfile/Profile";
import { Container } from "react-bootstrap";

function MyProfile() {
  return (
    <Container>
      <h1 className="d-flex justify-content-center mt-3 mb-5">My Profile</h1>
      <Profile />
    </Container>
  );
}

export default MyProfile;
