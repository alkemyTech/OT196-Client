import React from "react";
import Profile from "../components/myProfile/Profile";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";

function MyProfile() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={customTransition}
      >
        <h1 className="d-flex justify-content-center mt-3 mb-5">Mi Perfil</h1>
        <Profile />
      </motion.div>
    </Container>
  );
}

export default MyProfile;
