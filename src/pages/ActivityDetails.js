import React from "react";
import { Container } from "react-bootstrap";
import Activity from "../components/activity/Activity";
import { motion } from 'framer-motion'
function ActivityDetails() {
  return (
    <motion.Container
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h1 className="d-flex justify-content-center mt-3 mb-5">
        Detalles de la actividad
      </h1>
      <Activity />
    </motion.Container>
  );
}

export default ActivityDetails;
