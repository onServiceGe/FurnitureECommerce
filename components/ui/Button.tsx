import { IButton } from "@/lib/types/button";
import React from "react";

const Button: React.FC<IButton> = ({
  bg = "transparent",
  color,
  font,
  children,
  className = "",
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
      className={`cursor-pointer px-5 py-2 rounded-md min-w-[200px] w-auto bg-[var(--buttonBg)] text-[var(--buttonColor)] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
