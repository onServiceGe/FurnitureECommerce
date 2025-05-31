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
  return (
    <button
      style={
        {
          "--buttonBg": bg,
          "--buttonColor": color,
          fontFamily: font,
        } as React.CSSProperties
      }
      className={`cursor-pointer px-5 py-2 outline-0 rounded-md min-w-[${
        sm ? "100px" : "200px"
      }] w-auto bg-[var(--buttonBg)] text-[var(--buttonColor)] ${
        bg === "transparent"
          ? ""
          : "transition-all duration-300 hover:brightness-110 hover:shadow-md"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
