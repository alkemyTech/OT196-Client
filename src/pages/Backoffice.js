import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackofficeCard from "../components/backoffice/BackofficeCard.js";
import { useSelector } from "react-redux";
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
import customTransition from "../components/utils/CustomTransition.js";

function Backoffice() {
  const [cardsArr, setCardsArr] = React.useState([]);

  const userData = useSelector((state) => state.USER_LOGIN);

  // make the icons bigger
  const iconSize = "display-4";

  //   starting point for values that will be unique keys for each child in the list
  let colId = 0;
  let cardId = 0;

  let availableFeatures = [];

  const isAdmin = () => {
    return userData.roleId === 1;
  };

  //  Change the Card's array for the admin
  React.useEffect(() => {
    if (isAdmin()) {
      availableFeatures.push(
        {
          icon: <FaRegNewspaper className={iconSize} />,
          text: "Novedades",
          route: "news",
        },
        {
          icon: <FaTasks className={iconSize} />,
          text: "Actividades",
          route: "activities",
        },
        {
          icon: <FaRegListAlt className={iconSize} />,
          text: "Categorías",
          route: "categories",
        },
        {
          icon: <BiMessageDetail className={iconSize} />,
          text: "Testimonios",
          route: "testimonials",
        },
        {
          icon: <ImTree className={iconSize} />,
          text: "Organización",
          route: "organization",
        },
        {
          icon: <RiSlideshow3Line className={iconSize} />,
          text: "Slides",
          route: "slides",
        },
        {
          icon: <FaUsers className={iconSize} />,
          text: "Usuarios",
          route: "users",
        },
        {
          icon: <FaUserTie className={iconSize} />,
          text: "Miembros",
          route: "members",
        }
      );
    }
    setCardsArr(availableFeatures);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <h1 className="text-center mb-3">Backoffice</h1>
      <Breadcrumb className="mt-3 ms-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Backoffice</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <Row className="justify-content-center mb-5">
          {cardsArr.map((card) => (
            <Col key={colId++} xs="auto" md={4} lg="auto" className="">
              <BackofficeCard
                key={cardId++}
                icon={card.icon}
                text={card.text}
                route={card.route}
              />
            </Col>
          ))}
        </Row>
      </div>
    </motion.div>
  );
}

export default Backoffice;
