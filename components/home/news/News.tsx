import { newsCards } from "@/api/news-cards";
import React from "react";
import CardSlider from "@/components/slider/CardSlider";

import { IProductCard } from "@/lib/types/product-card";
import ProductCard from "@/components/ProductCard";
import { NewsIcon } from "@/lib/Icons";

const News: React.FC = () => {
  return (
    <CardSlider href="/" icon={<NewsIcon/>} title="სიახლე">
      {newsCards?.map((card: IProductCard) => (
        <ProductCard key={card.id} {...card} />
      ))}
    </CardSlider>
  );
};

export default News;
