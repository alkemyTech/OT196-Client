import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function BackofficeCard({ icon, text, textButton = "Acceder", route = "" }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Card className="text-center mb-2" style={{ width: "12rem" }}>
      <Card.Body>
        <Card.Title>{icon}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          onClick={() => {
            navigate(`${location.pathname}/${route}`);
          }}
          variant="primary"
        >
          {textButton}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BackofficeCard;
