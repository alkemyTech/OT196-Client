import React from "react";
import Activity from "../components/activity/Activity";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";
function ActivityDetails() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <h1 className="d-flex justify-content-center mt-3 mb-5">
        Detalles de la actividad
      </h1>
      <Activity />
    </motion.div>
  );
}

export default ActivityDetails;
