import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import UserList from "../components/backoffice/UserList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";

function BackofficeUserList() {
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
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/backoffice" }}>
          Backoffice
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Usuarios</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <h1 className="d-flex justify-content-center mt-3 mb-5">User List</h1>
        <UserList />
      </Container>
    </motion.div>
  );
}

export default BackofficeUserList;
