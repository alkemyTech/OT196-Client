import React from "react";
import { Row, Accordion, Col, Badge } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import ModalButton from "./ModalButton";
import BtnDeleteCategory from "./BtnDeleteCategory";
import "./CategoriesListItem.css";

function CategoriesListItem(props) {
  const { name, id, description } = props.itemData;
  return (
    <Accordion className="w-auto mw-75 mx-auto">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Row className="mx-auto w-100">
            <Col
              md={10}
              className="d-flex justify-content-center justify-content-md-start overflow-auto px-0"
            >
              <div>
                <span className="accordion-name">{name}</span>
                <Badge bg="info" className="h5 ms-2">
                  ID {id}
                </Badge>
              </div>
            </Col>
            <Col
              md={2}
              className="d-flex justify-content-center justify-content-md-end px-2"
            >
              <ModalButton
                categoryData={props.itemData}
                variant="primary"
                text={<FaEdit />}
                lastUpdate={props.lastUpdate}
              />
              <BtnDeleteCategory
                categoryId={id}
                refreshCategories={props.lastUpdate}
              />
            </Col>
          </Row>
        </Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default CategoriesListItem;
