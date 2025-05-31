import Header from "@/components/home/header/Header";
import React from "react";
import News from "@/components/home/news/News";
import Categories from "@/components/categories/Categories";
import BestSeller from "@/components/home/best-seller/BestSeller";
const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-25 pb-30">
      <Header />
      <News />
      <Categories />
      <BestSeller />
    </main>
  );
};

export default Home;
