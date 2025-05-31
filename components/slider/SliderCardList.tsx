"use client";
import React, { useRef } from "react";
import NewsCard from "../home/news/NewsCard";
import { newsCards } from "@/api/news-cards";
import { SliderCardListProps } from "@/lib/types/slider";

const SliderCardList: React.FC<SliderCardListProps> = ({ children, className = "" }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grabbing";
      startX = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft = sliderRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown = false;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    isDown = false;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div
      ref={sliderRef}
      className={`flex gap-4 overflow-x-auto cursor-grab py-8 no-scrollbar ${className}`}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default SliderCardList;
