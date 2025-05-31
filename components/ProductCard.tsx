import Image from "next/image";
import React from "react";
import { HeartIcon, CartIcon } from "@/lib/Icons";
import { IProductCard } from "@/lib/types/product-card";

const ProductCard: React.FC<IProductCard> = ({
  id,
  title,
  height,
  width,
  image,
}) => {
  return (
    <div className="min-w-[250px] bg-white rounded-md no-select">
      <div className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={130}
          height={130}
          className=" max-h-[130px] max-w-[130px] object-cover "
        />
      </div>
      <div className="p-4">
        <h3 className="text-card-title font-mainBold">{title}</h3>
        <p className="text-card-paragraph font-mainMedium">
          {height}x{width}
        </p>

        <div className="py-4 flex items-center gap-2">
          <div className="bg-paragraph rounded-full w-[12px] h-[12px] cursor-pointer"></div>
          <div className="bg-yellow-500 rounded-full w-[12px] h-[12px] cursor-pointer"></div>
          <div className="bg-black rounded-full w-[12px] h-[12px] cursor-pointer"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h4 className="text-main font-mainBold">100₾ /</h4>
            <h4 className="text-sale-price font-mainBold relative">
              130₾
              <div className="absolute top-1/2 transform -translate-y-1/2 left-[-3px] w-[calc(100%+6px)] h-[2px] bg-sale-price rounded-full"></div>
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-main/10 rounded-md p-1 cursor-pointer">
              <HeartIcon className="w-6 h-6 text-main" />
            </div>
            <div className="bg-[#F8F8F8] rounded-md p-1 cursor-pointer">
              <CartIcon className="w-6 h-6 text-[#333333]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
