import { IButton } from "@/lib/types/button";
import React from "react";

const Button: React.FC<IButton> = ({
  bg = "transparent",
  color,
  font,
  children,
  className = "",
  sm = false,
}: IButton) => {
  const minWidth = sm ? "min-w-[100px]" : "min-w-[200px]";
  const hoverStyles =
    bg === "transparent"
      ? ""
      : "transition-all duration-300 hover:brightness-110 hover:shadow-md";

  return (
    <button
      style={
        {
          "--buttonBg": bg,
          "--buttonColor": color,
          fontFamily: font,
        } as React.CSSProperties
      }
      className={`
        cursor-pointer 
        px-5 
        py-2 
        outline-0 
        rounded-md 
        
        w-auto 
        bg-[var(--buttonBg)]
        text-[var(--buttonColor)]
        ${minWidth}
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
