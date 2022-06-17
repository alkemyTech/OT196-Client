import React, { useEffect, useState } from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import { exampleNewsData } from "../components/news/exampleNewsData";
import NewsCard from "../components/news/NewsCard";
import WelcomeTitle from "../components/home/WelcomeTitle";
import SliderComponent from "../features/sliderComponent/SliderComponent";
import { motion } from 'framer-motion'
import { getRequest } from '../services/RequestService'
import { Link } from 'react-router-dom'

export default function Home() {
  const { REACT_APP_BACKEND_URL } = process.env
  const [data, setData] = useState({})
  const [isReady, setIsReady] = useState({status: false, message: 'Cargando información'})

  useEffect(() => {
    async function fetchLastNews(){
      try{
        const res = await getRequest(`${REACT_APP_BACKEND_URL}/news/`)
        setData(res)
        setIsReady({status: true, message: ''})
      }
      catch(e){
        setIsReady({status: false, message: 'Error al obtener la información'})
      }
    }
    fetchLastNews()
  }, [REACT_APP_BACKEND_URL])

  return (
    <motion.div className="container-fluid"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <WelcomeTitle text={data.welcome} />
    <div className="container-fluid">
      <WelcomeTitle text="Inicio" />
      <div className="container-fluid">
        <SliderComponent />
      </div>
      <div className="news-container">
        <div className="news-title my-4 py-4">

          <h2>Ultimas novedades</h2>
        </div>
        <Row className="px-3" xs={1} sm={2} md={2} xl={3}>
          {isReady.status ?
            ((data.slice(3)).reverse()).map((news, index) => {
              return (<NewsCard newData={news} key={news.id}/>)
            })
            : 
            <div className='mx-auto'>
            <Spinner animation="border" variant="primary" />
            <h5>{isReady.message}</h5>
            </div>}
        </Row>
      </div>
      <div className="all-news-button  my-4 py-4">
        <Link to="/novedades">
          <Button variant="outline-primary" >Ver más noticias</Button>
        </Link>
      </div>
      </div>
    </motion.div>
  );
}
