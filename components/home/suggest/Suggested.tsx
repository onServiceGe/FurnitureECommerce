import React from "react";
import CardSlider from "@/components/slider/CardSlider";
import { IProductCard } from "@/lib/types/product-card";
import { suggestCards } from "@/api/suggest-cards";
import ProductCard from "@/components/ProductCard";
import { NewsIcon } from "@/lib/Icons";

const Suggested: React.FC = () => {
  return (
    <CardSlider href="/" icon={<NewsIcon />} title="ჩვენ გირჩევთ">
      {suggestCards?.map((card: IProductCard) => (
        <ProductCard key={card.id} {...card} />
      ))}
    </CardSlider>
  );
};

export default Suggested;
