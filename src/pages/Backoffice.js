import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion'
import BackofficeCard from "../components/backoffice/BackofficeCard.js";

import {
  FaRegNewspaper,
  FaTasks,
  FaRegListAlt,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { RiSlideshow3Line } from "react-icons/ri";
import { ImTree } from "react-icons/im";
import { BiMessageDetail } from "react-icons/bi";

function Backoffice() {
  const [cardsArr, setCardsArr] = React.useState([]);

  // make the icons bigger
  const iconSize = "display-4";

  //   starting point for values that will be unique keys for each child in the list
  let colId = 0;
  let cardId = 0;

  // fake user to test
  const fakeRoleId = 1;

  let availableFeatures = [
    { icon: <FaRegNewspaper className={iconSize} />, text: "Novedades" },
    { icon: <FaTasks className={iconSize} />, text: "Actividades" },
    { icon: <FaRegListAlt className={iconSize} />, text: "Categorías" },
    { icon: <BiMessageDetail className={iconSize} />, text: "Testimonios" },
    { icon: <ImTree className={iconSize} />, text: "Organización" },
    { icon: <RiSlideshow3Line className={iconSize} />, text: "Slides" },
  ];

  //  Boolean that returns the role from the user
  const isAdmin = () => {
    // Considering the roleId 1 is Admin
    return fakeRoleId === 1;
  };

  //  Change the Card's array for the admin
  React.useEffect(() => {
    if (isAdmin()) {
      availableFeatures.push(
        { icon: <FaUsers className={iconSize} />, text: "Usuarios" },
        { icon: <FaUserTie className={iconSize} />, text: "Miembros" }
      );
    }
    setCardsArr(availableFeatures);
  }, [availableFeatures]);

  return (
    <motion.Container
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h1 className="text-center">Backoffice</h1>
      <Row className="justify-content-center">
        {cardsArr.map((card) => (
          <Col key={colId++} xs="auto" md={4} lg="auto" className="">
            <BackofficeCard key={cardId++} icon={card.icon} text={card.text} />
          </Col>
        ))}
      </Row>
    </motion.Container>
  );
}

export default Backoffice;
