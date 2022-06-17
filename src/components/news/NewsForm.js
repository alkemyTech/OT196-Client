import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { errorAlert, successAlert } from "../../setupAlerts";
import { Form, Image } from "react-bootstrap";

const NewsForm = ({ newsObject }) => {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [content, setContent] = React.useState();
  const [category, setCategory] = React.useState("Otros");

  const [method, setMethod] = React.useState("POST");
  const [url, setUrl] = React.useState("http://localhost:3000/news");

  // JWT Fake to simulate an admin role.
  const jwtFake =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOjF9.KA60K1WLyw4tlfA5S1B1vW_3-JFxGkOzCcnUZBSgGPk";

  React.useEffect(() => {
    if (newsObject) {
      setName(newsObject.name);
      setImage(newsObject.image);
      setContent(newsObject.content);
      setMethod("PUT");
      setUrl(`http://localhost:3000/news/${newsObject.id}`);
    }
  }, [newsObject]);

  // Change name based on the input
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Change content based on the input
  const handleContent = (e, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  // Change category based on the input
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  // Change image based on the input
  const handleImage = (e) => {
    const newImage = e.target.files[0];
    setImage(URL.createObjectURL(newImage));
  };

  // Submits the data on the states.
  //  Also uses the corresponding method based on whether there was information before or not.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(url, {
        method: method,
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwtFake,
        },
        body: JSON.stringify({
          name: name,
          content: content,
          image: image,
          category: category,
        }),
      }).then((res) => {
        if (!res.ok) {
          const error = (res && res.message) || res.status;
          return Promise.reject(error);
        }
        successAlert();
      });
    } catch (error) {
      errorAlert();
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="form-inline col-10 mt-3 mb-3">
        <label className="sr-only">Titulo</label>
        <input
          type="text"
          className="form-control mb-3"
          id="name"
          onChange={handleName}
          value={name}
        />
        <label className="sr-only">Contenido</label>
        {content !== undefined && (
          <CKEditor
            editor={ClassicEditor}
            data={content}
            id="content"
            onChange={handleContent}
          />
        )}

        <label className="sr-only mt-3">Categoria</label>
        <input
          type="text"
          className="form-control mb-3"
          id="name"
          onChange={handleCategory}
          value={category}
        />
        <Form.Group controlId="formFileSm" className="mb-3 mt-3">
          <Form.Label className="mb-1">Imagen</Form.Label>
          {image && (
            <Image
              fluid
              thumbnail
              className="d-block mx-auto mb-2"
              src={image}
            />
          )}
          <Form.Control type="file" size="sm" onChange={handleImage} />
        </Form.Group>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            onClick={handleSubmit}
            className="btn btn-dark mb-3"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsForm;
