import React from "react";
import { Modal, Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

// Modal with a form that will render depending on the props.
function EditUserModal({ title = "", item, btnLabel, onSubmitForm = "#" }) {
  const [show, setShow] = React.useState(false);

  const [firstName, setFirstName] = React.useState(item.firstName);
  const [lastName, setLastName] = React.useState(item.lastName);
  const [email, setEmail] = React.useState(item.email);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className=""
        variant={btnLabel === "Edit" ? "primary" : "secondary"}
        onClick={handleShow}
      >
        <>
          <FaEdit /> {btnLabel}
        </>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              onSubmitForm(e, { firstName, lastName, email });
              handleClose();
            }}
          >
            <Form.Label>First name</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Form.Label>Last name</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="success">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUserModal;
