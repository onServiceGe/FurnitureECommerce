import React from "react";
import CardSlider from "@/components/slider/CardSlider";
import newsIcon from "@/public/assets/icons/news.svg";
import ProductCard from "@/components/ProcutCard";
import { IProductCard } from "@/lib/types/product-card";
import { suggestCards } from "@/api/suggest-cards";

const Suggested: React.FC = () => {
  return (
    <CardSlider href="/" icon={newsIcon} title="ჩვენ გირჩევთ">
      {suggestCards?.map((card: IProductCard) => (
        <ProductCard key={card.id} {...card} />
      ))}
    </CardSlider>
  );
};

export default Suggested;
