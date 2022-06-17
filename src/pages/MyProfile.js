import React from "react";
import Profile from "../components/myProfile/Profile";
import { Container } from "react-bootstrap";
import {motion} from 'framer-motion'

function MyProfile() {
  return (
    <motion.Container
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h1 className="d-flex justify-content-center mt-3 mb-5">My Profile</h1>
      <Profile />
    </motion.Container>
  );
}

export default MyProfile;
