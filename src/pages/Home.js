import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { exampleNewsData } from "../components/news/exampleNewsData";
import NewsCard from "../components/news/NewsCard";
import WelcomeTitle from "../components/home/WelcomeTitle";
import SliderComponent from "../features/sliderComponent/SliderComponent";

export default function Home() {
  const [data, setData] = useState({ welcome: "", news: "" });

  useEffect(() => {
    setData({
      ...data,
      welcome: "Texto de Bienvenida",
      news: exampleNewsData.slice(-4),
    });
  }, []);

  return (
    <div className="container-fluid">
      <WelcomeTitle text={data.welcome} />
      <div className="container-fluid">
        <SliderComponent />
      </div>
      <div className="news-container">
        <div className="news-title my-4 py-4">
          <h2>Latest News</h2>
        </div>
        <div className="d-sm-flex justify-content-around news-card-container">
          {data.news
            ? data.news.map((news, index) => {
                return <NewsCard data={news} key={index} />;
              })
            : null}
        </div>
      </div>
      <div className="all-news-button  my-4 py-4">
        <Button variant="outline-info">See all news</Button>
      </div>
    </div>
  );
}
