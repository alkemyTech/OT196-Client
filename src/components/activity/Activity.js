import React from "react";
import { useParams } from "react-router-dom";
import { Image, Col, Row } from "react-bootstrap";
import { VscError } from "react-icons/vsc";

const Activity = () => {
  const [activity, setActivity] = React.useState(null);
  const { id } = useParams();

  // Get the activity from the id in the URL
  const getActivity = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/activities/${id}`);
      const jsonData = await response.json();
      setActivity(jsonData);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getActivity(id);
  }, []);

  return (
    <>
      {activity ? (
        <>
          <h3 className="mb-3">{activity.name}</h3>
          <Row className="mb-3">
            <Col xs={12} sm={6} className="d-flex justify-content-center">
              <Image
                fluid
                thumbnail
                className="mb-3 float-start"
                src={activity.image}
              />
            </Col>
            <Col
              xs={12}
              sm={6}
              className="d-flex align-items-center justify-content-center"
            >
              <p className="mb-5" style={{ fontSize: "1.3rem" }}>
                {activity.content}
              </p>
            </Col>
          </Row>
        </>
      ) : (
        <Row className="d-flex align-items-center justify-content-center mb-3">
          <Col className="p-0 m-0">
            <VscError color="red" size="5em" />
            <div style={{ color: "red", fontSize: "3em" }}>ERROR</div>
            <p style={{ fontSize: "2em" }}>
              No se pudo encontrar la actividad seleccionada.
            </p>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Activity;
