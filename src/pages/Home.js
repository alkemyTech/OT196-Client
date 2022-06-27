import React, { useEffect, useState } from "react";
import { Button, Row, Spinner, Image, Col, Card } from "react-bootstrap";
import NewsCard from "../components/news/NewsBox";
import WelcomeTitle from "../components/home/WelcomeTitle";
import SliderComponent from "../features/sliderComponent/SliderComponent";
import { motion } from "framer-motion";
import { getRequest } from "../services/RequestService";
import { Link } from "react-router-dom";
import customTransition from "../components/utils/CustomTransition";
import imgNews from "../img/ultimasNovedades.png";
import "./Home.css";

export default function Home() {
  const { REACT_APP_BACKEND_NEWS } = process.env;
  const [data, setData] = useState({});
  const [isReady, setIsReady] = useState({
    status: false,
    message: "Cargando información",
  });

  useEffect(() => {
    async function fetchLastNews() {
      try {
        const res = await getRequest(`${REACT_APP_BACKEND_NEWS}`);
        setData(res);
        setIsReady({ status: true, message: "" });
      } catch (e) {
        setIsReady({
          status: false,
          message: "Error al obtener la información",
        });
      }
    }
    fetchLastNews();
  }, [REACT_APP_BACKEND_NEWS]);

  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <div className="container-fluid">
        <div className="container-fluid">
          <Row className="mt-4 d-flex">
            <Card className="col-12 col-xl-4 mb-3" border="light">
              <Card.Title>
                <WelcomeTitle text="BIENVENIDO A SOMOS MÁS" />
              </Card.Title>
              <Card.Body
                className="d-flex fs-5 mx-2"
                style={{ textAlign: "justify" }}
              >
                <p className="fs-5">
                  En Somos Más trabajamos con los chicos y chicas, mamás y
                  papás, abuelos y vecinos del barrio La Cava generando procesos
                  de crecimiento y de inserción social.
                </p>
              </Card.Body>
            </Card>
            <div className="col-12 col-xl-8 mb-3">
              <SliderComponent />
            </div>
          </Row>
        </div>
        <div className="news-container">
          <Row
            className="g-4 d-flex align-items-center justify-content-center"
            xs={1}
            sm={2}
            md={4}
          >
            <Col
              xs={12}
              sm={12}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Image fluid src={imgNews} className="img-custom-size" />
            </Col>

            {isReady.status ? (
              data
                .slice(-3)
                .reverse()
                .map((news, index) => {
                  return <NewsCard newData={news} key={news.id} />;
                })
            ) : (
              <div className="mx-auto">
                <Spinner animation="border" variant="primary" />
                <h5>{isReady.message}</h5>
              </div>
            )}
          </Row>
        </div>
        <div className="all-news-button  my-4 py-4">
          <Link to="/news">
            <Button variant="outline-primary">Ver más noticias</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
