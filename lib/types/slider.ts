import { JSX, ReactNode, SVGProps } from "react";

export interface ICardSlider {
  href: string;
  icon: JSX.Element;
  title: string;
}

export interface SliderCardListProps {
  children: ReactNode;
  className?: string;
}
