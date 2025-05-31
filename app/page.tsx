import Header from "@/components/home/header/Header";
import React from "react";
import News from "@/components/home/news/News";
import BestSeller from "@/components/home/best-seller/BestSeller";
import Discount from "@/components/Discount";
import Categories from "@/components/home/categories/Categories";
import Suggested from "@/components/home/suggest/Suggested";
const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-25 pb-30">
      <Header />
      <News />
      <Categories />
      <BestSeller />
      <Discount discount={30} />
      <Suggested />
    </main>
  );
};

export default Home;
