import Header from "@/components/home/header/Header";
import React from "react";
import News from "@/components/home/news/News";
import Categories from "@/components/categories/Categories";
const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-20 pb-30">
      <Header />
      <News />
      <Categories />
    </main>
  );
};

export default Home;
