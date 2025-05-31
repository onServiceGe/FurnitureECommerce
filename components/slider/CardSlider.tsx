import Image from "next/image";
import React from "react";
import Link from "next/link";
import SliderCardList from "./SliderCardList";
import { ICardSlider, SliderCardListProps } from "@/lib/types/slider";

const CardSlider: React.FC<ICardSlider & SliderCardListProps> = ({
  href,
  icon,
  title,
  children,
}) => {
  return (
    <section className="container">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center bg-main rounded-md w-[40px] h-[40px] text-white">
            {/* <Image src={icon} alt={`${title} icon`} width={24} height={24} /> */}
            {icon}
          </div>
          <h2 className="text-2xl font-mainBold">{title}</h2>
        </div>
        <Link href={href} className="text-main font-mainBold underline text-lg">
          მეტის ნახვა
        </Link>
      </div>
      <SliderCardList>{children}</SliderCardList>
    </section>
  );
};

export default CardSlider;
