import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";

export default function NoMatchRoute() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <h1> La ruta que estas buscando no existe en nuestra app </h1>

      <h6> Para volver a home da click en el botón </h6>
      <Button variant="primary" size="lg" onClick={() => navigate("/")}>
        Volver al Inicio
      </Button>
    </motion.div>
  );
}
