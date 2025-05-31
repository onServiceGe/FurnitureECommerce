import React from "react";
import CardSlider from "@/components/slider/CardSlider";
import fireIcon from "@/public/assets/icons/fire.svg";
import ProductCard from "@/components/ProcutCard";
import { IProductCard } from "@/lib/types/product-card";
import { bestSellerCards } from "@/api/best-seller-cards";

const BestSeller: React.FC = () => {
  return (
    <CardSlider href="/" icon={fireIcon} title="ხშირად გაყიდვადი">
      {bestSellerCards?.map((card: IProductCard) => (
        <ProductCard key={card.id} {...card} />
      ))}
    </CardSlider>
  );
};

export default BestSeller;
