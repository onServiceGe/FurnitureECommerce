import React from "react";
import Button from "@/components/ui/Button";

interface IDiscount {
  discount: number;
}

const Discount: React.FC<IDiscount> = ({ discount }) => {
  return (
    <div className="container relative  h-[250px] bg-[url('/assets/images/discount.png')] flex justify-center items-center bg-cover bg-center bg-no-repeat rounded-md">
      <div>
        <h3 className="text-white text-[64px] font-mainBold text-center leading-18 drop-shadow-[0_4px_8px_var(--color-main)]">
          {discount}%-მდე
        </h3>
        <h4 className="text-white text-[34px] font-mainBold text-center drop-shadow-[0_2px_4px_var(--color-main)]">
          ფასდაკლება
        </h4>
      </div>
      <Button
        bg="var(--color-white)"
        color="var(--color-main)"
        font="var(--font-mainBold)"
        className="absolute bottom-5 right-5"
      >
        ნახვა
      </Button>
    </div>
  );
};

export default Discount;
