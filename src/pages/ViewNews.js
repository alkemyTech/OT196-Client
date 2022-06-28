import React, { useEffect, useState } from "react";
import NewsDetail from "../components/news/NewsDetail";
import { Breadcrumb } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getRequest } from "../services/RequestService";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";

function ViewNews() {
  const { id } = useParams();
  const { REACT_APP_BACKEND_URL, REACT_APP_BACKEND_NEWS } = process.env;
  const ENDPOINT = `${REACT_APP_BACKEND_URL}${REACT_APP_BACKEND_NEWS}${id}`; //endpoint path to get news by id
  const [newsData, setNewsData] = useState({});
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    async function fetchNewsData() {
      //Fetch news data
      const res = await getRequest(ENDPOINT);
      if (!res) {
        setFetchError(true);
      }
      setNewsData(res);
    }
    fetchNewsData();
  }, [ENDPOINT]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <Breadcrumb className="mt-3 ms-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/news" }}>
          Novedades
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          {newsData.name || "Titulo de novedad"}
        </Breadcrumb.Item>
      </Breadcrumb>
      {!fetchError ? (
        <NewsDetail data={newsData} />
      ) : (
        <h3 className="my-5">No se ha encontrado la novedad solicitada.</h3>
      )}
    </motion.div>
  );
}

export default ViewNews;
