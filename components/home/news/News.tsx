import { newsCards } from "@/api/news-cards";
import React from "react";
import CardSlider from "@/components/slider/CardSlider";
import newsIcon from "@/public/assets/icons/news.svg";
import ProductCard from "@/components/ProcutCard";
import { IProductCard } from "@/lib/types/product-card";

const News: React.FC = () => {
  return (
    <CardSlider href="/" icon={newsIcon} title="სიახლე">
      {newsCards?.map((card: IProductCard) => (
        <ProductCard key={card.id} {...card} />
      ))}
    </CardSlider>
  );
};

export default News;
