import React from "react";
import UserForm from "../components/register/UserForm";
import logo from "../img/logoSomosMas.png";
import { motion } from "framer-motion";
import customTransition from "../components/utils/CustomTransition";

export default function CreateUser() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <h1 className="text-center">Registrarse</h1>
      <header>
        <img
          className="mx-auto d-block img-fluid"
          src={logo}
          alt="Logo Somos Mas"
        />
      </header>
      <div className="d-flex">
        <UserForm />
      </div>
    </motion.div>
  );
}
