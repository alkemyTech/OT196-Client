import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import "./NewsBox.css";

const fixImageFit = { objectFit: "cover" };

const formatDate = {
  weekday: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
const firstToUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const dateFormat = (str) => {
  var date = new Date(str).toLocaleDateString("es-AR", formatDate);
  return firstToUpper(date);
};

export default function NewsCard(props) {
  const { id, image, name, createdAt } = props.newData;
  return (
    <Col>
      <Link
        to={`/news/${id}`}
        className="card-center"
        style={{
          color: "inherit",
          textDecoration: "inherit",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Card border="light" className="box-shadow">
          <div className="">
            <Card.Img variant="top" src={image} style={fixImageFit} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <FaRegClock /> {dateFormat(createdAt)}
            </small>
          </Card.Footer>
        </Card>
      </Link>
    </Col>
  );
}
