import React, { useEffect, useState } from "react";
import { Container, Row, Button, Alert, Spinner } from "react-bootstrap";
import { getRequest } from "../../services/RequestService";
import { FaPlus } from "react-icons/fa";
import CategoriesListItem from "./CategoriesListItem";
import ModalButton from "./ModalButton";

function CategoriesList() {
  const { REACT_APP_BACKEND_CATEGORIES } = process.env;
  const [isLoading, setIsLoading] = useState({});
  const [categoriesList, setCategoriesList] = useState({});
  const [lastUpdate, setLastUpdate] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading({ status: true, message: "" });
        const reqPath = REACT_APP_BACKEND_CATEGORIES;
        const res = await getRequest(reqPath);
        setCategoriesList(res.result);
        // Set message if response is empty
        const loadingMessage =
          res.result.length > 0
            ? ""
            : "No hay ninguna categoria guardada, comience creando una.";

        setIsLoading({ status: false, message: loadingMessage });
      } catch (e) {
        setIsLoading({
          status: false,
          message: `Error al obtener las categorias.`,
        });
      }
    }
    fetchCategories();
  }, [REACT_APP_BACKEND_CATEGORIES, lastUpdate]);

  return (
    <Container className="my-5">
      <h2 className="mb-4">Lista de categorias</h2>
      <Row className="justify-content-center align-items-center mb-3 mx-auto w-75">
        <ModalButton
          variant="outline-success lg"
          text={
            <>
              <FaPlus className="me-2" /> Agregar nueva categoria
            </>
          }
          lastUpdate={setLastUpdate}
        />
      </Row>
      {!isLoading.status && categoriesList.length > 0 ? (
        categoriesList.map((cat) => (
          <CategoriesListItem
            key={cat.id}
            lastUpdate={setLastUpdate}
            itemData={cat}
          />
        ))
      ) : isLoading.message === "" ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Alert className="w-75 mx-auto" variant="warning">
          {isLoading.message}
        </Alert>
      )}
    </Container>
  );
}

export default CategoriesList;
