import React from "react";
import { Modal, Button, Form, FormControl } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

// Modal with a form that will render depending on the props.
function CustomModal({
  title = "",
  text,
  item,
  btnLabel,
  onSubmitData = "#",
  inputClass = "text",
  property,
}) {
  const [input, setInput] = React.useState(item);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className=""
        variant={btnLabel === "Edit" ? "primary" : "secondary"}
        onClick={handleShow}
      >
        {btnLabel === "Edit" ? (
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
