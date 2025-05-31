import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "@/api/categories";

const Categories: React.FC = () => {
  return (
    <div className="container flex gap-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Categories;
