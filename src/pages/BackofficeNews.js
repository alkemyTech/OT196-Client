import React from "react";
import NewsTable from "../components/news/NewsTable";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";
import CreateNews from "../components/news/NewsPost";


const BackofficeNews = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <h1>Lista de Novedades</h1>
      <Breadcrumb className="mt-3 ms-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/backoffice" }}>
          Backoffice
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Novedades</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Lista de Novedades</h2>
      <CreateNews/>
      <NewsTable />
    </motion.div>
  );
};

export default BackofficeNews;
