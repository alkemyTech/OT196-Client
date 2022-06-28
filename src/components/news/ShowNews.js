import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import NewsCard from "./NewsBox";
import axios from "axios";

export default function ShowNews() {
  const [newsData, setNews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [resMessage, setResMessage] = useState("Cargando...");
  const { REACT_APP_BACKEND_NEWS } = process.env;

  const loadData = async () => {
    try {
      const { data } = await axios.get(`${REACT_APP_BACKEND_NEWS}`);
      // Sort news descending
      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setNews(sortedData);
      setIsLoading(false);
    } catch (err) {
      var errorMessage = err.response?.data?.error || err.message;
      setResMessage(`Error al cargar los datos: ${errorMessage}`);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1 className="text-center">{resMessage}</h1>
      ) : (
        <Row
          xs={1}
          sm={2}
          md="auto"
          lg="auto"
          className="g-4 d-flex pl-5 pl-sm-0 justify-content-center"
        >
          {newsData.map((e) => (
            <NewsCard key={e.id} newData={e} />
          ))}
        </Row>
      )}
    </>
  );
}
