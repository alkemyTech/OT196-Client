import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { errorAlert, successAlert } from "../../setupAlerts";
import ImageInput from "../ImageInput";
import { Col, Row } from "react-bootstrap"
import { postRequest, putRequest } from "../../services/RequestService"

const NewsForm = ({ newsObject }) => {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [content, setContent] = React.useState();
  const [category, setCategory] = React.useState("Otros");
  const { REACT_APP_BACKEND_NEWS } = process.env;

  const [method, setMethod] = React.useState("POST");
  const [url, setUrl] = React.useState(REACT_APP_BACKEND_NEWS);

  React.useEffect(() => {
    if (newsObject) {
      setName(newsObject.name);
      setImage(newsObject.image);
      setContent(newsObject.content);
      setMethod("PUT");
      setUrl(`${REACT_APP_BACKEND_NEWS}/${newsObject.id}`);
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


  // Submits the data on the states.
  //  Also uses the corresponding method based on whether there was information before or not.

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({name, content, image, category})
    try {
      if (method === 'PUT') {
         await putRequest(url, {name, content, image, categoryId: 1}) 
        } else{
         await postRequest(url, {name, content, image, categoryId: 1})
        }
        successAlert({});
    } catch (error) {
      errorAlert({});
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="container mt-3 mb-3">
        <Row>
        <Col md={12} lg={6} xl={6}>
        <label>Titulo</label>
        <input
          type="text"
          className="form-control mb-3"
          id="name"
          onChange={handleName}
          value={name}
        />
        <label>Contenido</label>
        {content !== undefined && (
          <CKEditor
            editor={ClassicEditor}
            data={content}
            id="content"
            onChange={handleContent}
          />
        )}
        {content === undefined && (
          <CKEditor
            editor={ClassicEditor}
            id="content"
            onChange={handleContent}
          />
        )}
        </Col>
        <Col md={12} lg={6} xl={6}>
        <label>Categoria</label>
        <input
          type="text"
          className="form-control mb-3"
          id="name"
          onChange={handleCategory}
          value={category}
        />
        <ImageInput image={image} setImage={setImage}/>
        </Col>
        </Row>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            onClick={handleSubmit}
            className="btn btn-primary m-2"
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