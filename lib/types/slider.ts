import { ReactNode } from "react";

export interface ICardSlider {
  href: string;
  icon: string;
  title: string;
}

export interface SliderCardListProps {
  children: ReactNode;
  className?: string;
}
