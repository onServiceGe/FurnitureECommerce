import React from "react";
import Button from "@/components/ui/Button";
import { ICategoryCard } from "@/lib/types/categories";
import Image from "next/image";

const CategoryCard: React.FC<ICategoryCard> = ({
  title,
  image,
  cardBg,
  buttonBg,
  textColor,
}) => {
  return (
    <div
      className={`${cardBg} flex items-center justify-between flex-1 rounded-md`}
    >
      <div className="h-full flex flex-col justify-between py-4 ps-5">
        <h5 className={`${textColor} font-mainBold text-xl`}>{title}</h5>
        <Button
          sm
          bg={buttonBg}
          color="var(--color-white)"
          font="var(--font-mainBold)"
        >
          შეარჩიე
        </Button>
      </div>
      <div>
        <Image
          width={180}
          height={168}
          src={image}
          alt={title + " image"}
          className="rounded-br-md"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
