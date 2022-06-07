import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const NewsForm = ({ newsObject }) => {
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [content, setContent] = React.useState("");
  const [category, setCategory] = React.useState("");

  //   const [wasSent, setWasSent] = useState(false);
  //   const [method, setMethod] = React.useState("Post");
  //   const [url, setUrl] = React.useState("http://localhost:3000/activities");

  React.useEffect(() => {
    if (newsObject) {
      setTitle(newsObject.title);
      setImage(newsObject.image);
      setContent(newsObject.content);
      //   setMethod("Patch");
      //   setUrl(`http://localhost:3000/activities/${newsObject.id}`);
    }
  }, [newsObject]);

  return (
    <div className="d-flex justify-content-center">
      <form className="form-inline col-6">
        <label className="sr-only">Titulo</label>
        <input
          type="text"
          className="form-control"
          id="name"
          // onChange={handleChange}
          value={title}
        />
        <label className="sr-only">Contenido</label>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          id="content"
          // onChange={handleCkeditorState}
        />
        <button className="btn btn-dark" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default NewsForm;
