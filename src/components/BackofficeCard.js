import React from "react";
import { Card, Button } from "react-bootstrap";

function BackofficeCard({ icon, text, textButton = "Acceder" }) {
  return (
    <>
      <Card className="text-center mb-2" style={{ width: "12rem" }}>
        <Card.Body>
          <Card.Title>{icon}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">{textButton}</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default BackofficeCard;
