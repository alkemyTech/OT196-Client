import React from "react";

import { useParams } from "react-router-dom";

const Activity = () => {
  const [name, setName] = React.useState("");
  const [content, setContent] = React.useState("");
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
      };
      setName(fakeActivity.name);
      setContent(fakeActivity.content);
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
      <h2>COMPONENTE</h2>
      <h3>{name}</h3>
      <p>{content}</p>
    </>
  );
};

export default Activity;
