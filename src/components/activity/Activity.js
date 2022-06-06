import React from "react";

import { useParams } from "react-router-dom";

import { Image, Col, Row } from "react-bootstrap";

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
          <Row>
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
              <p className="mb-5">{activity.content}</p>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <h3>ERROR</h3>
        </>
      )}
    </>
  );
};

export default Activity;
