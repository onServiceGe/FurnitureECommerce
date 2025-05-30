import Image from "next/image";
import React from "react";
import news from "@/public/assets/icons/news.svg";
import Link from "next/link";
import NewsCardList from "./NewsCardList";

const News: React.FC = () => {
  return (
    <section className="container py-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center bg-main rounded-md w-[40px] h-[40px]">
            <Image src={news} alt="news icon" width={24} height={24} />
          </div>
          <h2 className="text-2xl font-mainBold">სიახლე</h2>
        </div>
        <Link href="/" className="text-main font-mainBold underline text-lg">
          მეტის ნახვა
        </Link>
      </div>
      <NewsCardList />
    </section>
  );
};

export default News;
