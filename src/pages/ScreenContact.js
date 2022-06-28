import React from "react";
import Formcontact from "../components/contact/formContact";
import Listmembers from "../components/members/MembersList";
import customTransition from "../components/utils/CustomTransition";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ScreenContact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <h1>Contacto</h1>
      <Breadcrumb className="mt-3 ms-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Contacto</Breadcrumb.Item>
      </Breadcrumb>
      <div className="container-fluid d-flex justify-content-center mt-4">
        <div className="row justify-content-around" style={{ width: '100%' }}>
          <div className="col-11 col-md-5 col-xl-4 shadow bg-light mb-5 border rounded px-0">
            <p className="p-2 fs-2 bg-primary rounded text-white">Miembros</p>
              <Listmembers />
          </div>
          <div className="col-11 col-md-5 col-xl-4 bg-light shadow mb-5 border rounded px-0">
            <p className="p-2 fs-2 bg-primary rounded text-white">
              ¡Contactáte con nosotros!
            </p>
            <div className="px-3">
              <Formcontact />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ScreenContact;
