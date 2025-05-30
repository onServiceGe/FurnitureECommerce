import React from "react";
import heart from "@/lib/icons/heart.svg";
import cart from "@/lib/icons/shopping-cart.svg";
import Image from "next/image";
const NavIcons: React.FC = () => {
  return (
    <div className="flex gap-4 ">
      <Image src={heart} alt="heart" className="cursor-pointer w-7 h-7 " />
      <div className="relative">
        <Image src={cart} alt="cart" className="cursor-pointer w-7 h-7" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white cursor-pointer text-xs w-4.5 h-4.5 rounded-full flex items-center justify-center font-mainBold">
          1
        </span>
      </div>
    </div>
  );
};

export default NavIcons;
