import React from "react";
import { Card } from "react-bootstrap";

export default function NewsCard(props) {
  const { img, title } = props.newData;

  return (
    <Card className="border-0 col-sm-2">
      <Card.Img variant="top" src={img} className="img-fluid rounded" />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
