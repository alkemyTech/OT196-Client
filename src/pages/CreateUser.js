import React from "react";
import UserForm from "../components/register/UserForm";
import logo from "../img/logoSomosMas.png";
import {motion} from 'framer-motion'

export default function CreateUser() {
  return (
    <motion
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <header>
        <img
          className="mx-auto d-block img-fluid"
          src={logo}
          alt="Logo Somos Mas"
        />
        <h1 className="text-center mb-4">Sign Up</h1>
      </header>
      <div className="d-flex">
        <UserForm />
      </div>
    </motion>
  );
}
