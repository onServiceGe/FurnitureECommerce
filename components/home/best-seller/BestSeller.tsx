import React from "react";
import CardSlider from "@/components/slider/CardSlider";
import { IProductCard } from "@/lib/types/product-card";
import { bestSellerCards } from "@/api/best-seller-cards";
import ProductCard from "@/components/ProductCard";
import { FireIcon } from "@/lib/Icons";

const BestSeller: React.FC = () => {
  return (
    <CardSlider href="/" icon={<FireIcon />} title="ხშირად გაყიდვადი">
      {bestSellerCards?.map((card: IProductCard) => (
        <ProductCard key={card.id} {...card} />
      ))}
    </CardSlider>
  );
};

export default BestSeller;
