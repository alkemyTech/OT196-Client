import React from "react";
import { Modal, Button, Form, FormControl, Image } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import "./Profile.css";

// Modal with a form that will render depending on the props.
function CustomModal({
  title = "",
  text,
  item,
  btnLabel = "Editar",
  onSubmitData = "#",
  inputClass = "text",
  property,
}) {
  const [input, setInput] = React.useState(item);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImage = (e) => {
    const newImage = e.target.files[0];
    setInput(URL.createObjectURL(newImage));
  };

  return (
    <>
      <Button
        className="mh-custom"
        variant={btnLabel === "Editar" ? "primary" : "secondary"}
        onClick={handleShow}
      >
        {btnLabel === "Editar" ? (
          <>
            <FaEdit /> {btnLabel}
          </>
        ) : (
          <>{btnLabel}</>
        )}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {inputClass === "email" && (
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h4 className="mb-3">{text}</h4>
                <Form.Control
                  type="email"
                  placeholder={item}
                  onChange={(e) => setInput(e.target.value)}
                />
              </Form.Group>
            )}
            {inputClass === "text" && (
              <Form.Group className="mb-3">
                <h4 className="mb-3">{text}</h4>
                <FormControl
                  placeholder={item}
                  onChange={(e) => setInput(e.target.value)}
                  aria-describedby="basic-addon1"
                />
              </Form.Group>
            )}
            {inputClass === "image" && (
              <Form.Group controlId="formFileSm" className="mb-3 mt-3">
                <Form.Label className="mb-1">{text}</Form.Label>
                {input && (
                  <Image
                    fluid
                    thumbnail
                    className="d-block mx-auto mb-2 w-50"
                    src={input}
                  />
                )}
                <Form.Control type="file" size="sm" onChange={handleImage} />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="success"
            onClick={() => {
              onSubmitData(input, property);
              handleClose();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
