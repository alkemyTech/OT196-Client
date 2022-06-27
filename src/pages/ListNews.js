import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShowNews from "../components/news/ShowNews";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";

function ListNews() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <h1>Novedades</h1>
      <Breadcrumb className="mt-3 ms-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/novedades" }}>
          Novedades
        </Breadcrumb.Item>
      </Breadcrumb>
      <Container className="my-5">
        <ShowNews />
      </Container>
    </motion.div>
  );
}

export default ListNews;
