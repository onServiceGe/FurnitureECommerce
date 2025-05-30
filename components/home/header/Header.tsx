import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="relative ">
      <div className="container flex justify-between items-center pt-30 flex-wrap">
        <div className="flex flex-col items-start gap-7">
          <h1 className="text-4xl font-mainBold">
            შეიძინე ხარისხიანი <span className="text-main">ავეჯი</span> მარტივად
          </h1>
          <p className="text-paragraph w-[500px] max-w-full text-lg">
            მრავალფეროვანი არჩევანი და მარტივად მოწყობილი გარემო შენთვის, რათა
            შეარჩიო შენთვის მორგებული ავეჯი
          </p>
          <div className="flex gap-5">
            {" "}
            <Button
              bg="var(--color-main)"
              font="var(--font-mainSemiBold)"
              color="var(--color-white)"
            >
              კატალოგი
            </Button>
            <Button font="var(--font-mainSemiBold)" color="var(--color-main)">
              დაკავშირება
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/home-header-chair.png"
            className="object-cover relative z-10"
            alt="header"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-full bg-[#E7494C1A]"></div>
      </div>
    </header>
  );
};

export default Header;
