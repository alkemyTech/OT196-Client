import React, { useState, useEffect } from "react";
import {Row} from "react-bootstrap";
import NewsCard from "./NewsBox"
import axios from "axios"

export default function ShowNews() {
  const [newsData, setNews] = useState( )
  const [isLoading, setIsLoading] = useState(true)
  const [resMessage, setResMessage] = useState('Cargando...')

  const loadData = async (emailAddress, password) => {
    try {
      const { data } = await axios.get('http://localhost:3000/news/')
      setNews(data)
      setIsLoading(false)
    } catch (err) {
      setResMessage(`Error al cargar los datos: ${err.message}`)
    }
  };

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
        {isLoading ? 
          <h1 className="text-center">{resMessage}</h1> 
          : 
          <Row xs={1} sm={2} md={2} xl={3} className="g-4">
            {newsData.map((e)=>(
              <NewsCard key={e.id} newData={e}/>
            ))}
        </Row>
        }
    </>
  );
}
