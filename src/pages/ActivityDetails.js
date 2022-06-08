import React from "react";
import { Container } from "react-bootstrap";
import Activity from "../Components/activity/Activity";

function ActivityDetails() {
  return (
    <Container>
      <h1 className="d-flex justify-content-center mt-3 mb-5">
        Detalles de la actividad
      </h1>
      <Activity />
    </Container>
  );
}

export default ActivityDetails;
