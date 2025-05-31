import { newsCards } from "@/api/news-cards";
import React from "react";
import NewsCard from "./NewsCard";
import CardSlider from "@/components/slider/CardSlider";
import news from "@/public/assets/icons/news.svg";

const News: React.FC = () => {
  return (
    <CardSlider href="/" icon={news} title="სიახლე">
      {newsCards?.map((card) => (
        <NewsCard key={card.id} {...card} />
      ))}
    </CardSlider>
  );
};

export default News;
