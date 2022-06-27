import React from "react";
import NewsForm from "./NewsForm";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { FaEdit } from "react-icons/fa";

// Component that gives the possibility to edit movements (represented as a button that opens a modal with its corresponding form).
function NewsEdit({
  newsId,
  onClose,
  btnLabel = "Editar",
  title = "Editar novedad",
}) {
  const [news, setNews] = React.useState({});
  const [show, setShow] = React.useState(false);

  // Get details of the selected news
  const getDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/news/${id}`);
      setNews(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  // Handle modal's show
  const handleClose = () => {
    setShow(false);
    onClose(true);
  };
  const handleShow = async () => {
    await getDetails(newsId);
    setShow(true);
    onClose(false);
  };

  return (
    <>
      <Button className="mb-3" variant="primary" onClick={handleShow}>
        <>
          <FaEdit /> {btnLabel}
        </>
      </Button>
      <Modal show={show} size='lg' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewsForm newsObject={news} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewsEdit;
