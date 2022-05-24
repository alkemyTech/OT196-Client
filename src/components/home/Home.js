import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { exampleNewsData } from '../news/exampleNewsData'
import NewsCard from '../news/NewsCard'
import WelcomeTitle from './WelcomeTitle'


export default function Home() {

  const [data, setData] = useState({ welcome: "", news: "" })

  useEffect(() => {
    setData(
      {
        ...data,
        welcome: "Texto de Bienvenida",
        news: exampleNewsData.slice(-4)
      })
  }, [])

  return (
    <div className="container-fluid">
      {/* Aqui iria el Slider */}
      <WelcomeTitle text={data.welcome} />
      <div className="news-container">
        <div className="news-title my-4 py-4">

          <h2>Latest News</h2>
        </div>
        <div className="d-sm-flex justify-content-around news-card-container">
          {data.news ?

            data.news.map((news, index) => {
              return (< NewsCard data={news} key={index} />)
            })

            : null}
        </div>
      </div>
      <div className="all-news-button p-4">
        <Button variant="outline-info">See all news</Button>
      </div>
    </div>
  )
}