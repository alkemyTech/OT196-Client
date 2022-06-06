import React from "react";

import { useParams } from "react-router-dom";

import { Image, Col, Row } from "react-bootstrap";

const Activity = () => {
  const [name, setName] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  const { id } = useParams();

  //   const [activity, setActivity] = React.useState({})

  // Get the activity from the id in the URL
  const getActivity = async (id) => {
    try {
      // const response = await fetch(`htttp://localhost:3000/activities/${id}`)
      //   const jsonData = await response.json();
      //   setActivity(jsonData);

      //  fake activity
      const fakeActivity = {
        name: "Fake activity",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mauris lorem, congue nec risus sit amet, interdum mollis arcu. In dignissim neque nec urna mattis fringilla. Integer congue nisi sagittis dictum sodales. Proin nec blandit lacus. Suspendisse eu laoreet libero. Ut vel placerat velit. Donec aliquet ante nulla, id venenatis purus feugiat a. Nam gravida laoreet magna, eget lacinia nulla ornare in. Aliquam erat volutpat. ",
        image:
          "https://peru21.pe/resizer/y1pELXYVQzrjuPQafDQluLqnmZk=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/RTFYRV5YWJGQ3ANUTHY2SXQ6RA.jpg",
      };
      setName(fakeActivity.name);
      setContent(fakeActivity.content);
      setImage(fakeActivity.image);
    } catch (e) {
      console.error(e);
      //   RENDERIZAR MENSAJE DE ERROR
    }
  };

  React.useEffect(() => {
    getActivity(id);
  }, []);

  return (
    <>
      <h3 className="mb-3">{name}</h3>
      <Row>
        <Col xs={12} sm={6}>
          <Image fluid thumbnail className="mb-3 float-start" src={image} />
        </Col>
        <Col xs={12} sm={6} className="d-flex align-items-center">
          <p className="mb-5">{content}</p>
        </Col>
      </Row>
    </>
  );
};

export default Activity;
