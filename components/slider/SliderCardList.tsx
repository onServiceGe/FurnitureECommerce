"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { SliderCardListProps } from "@/lib/types/slider";

const SliderCardList: React.FC<SliderCardListProps> = ({
  children,
  className = "",
}) => {
  return (
    <Swiper
      modules={[FreeMode]}
      spaceBetween={16}
      slidesPerView="auto"
      freeMode={true}
      className={`py-8 ${className}`}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className="!w-auto">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderCardList;
