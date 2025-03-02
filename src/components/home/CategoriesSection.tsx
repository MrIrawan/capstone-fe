import { CategoryType } from "@/types";
import CardArticle from "../shared/CardArticle";

const categories: CategoryType[] = [
  { name: "MacBook Pro", image: "/og-fb-logo-en.webp" },
  { name: "iPhone", image: "/og-fb-logo-en.webp" },
  { name: "iPad", image: "/og-fb-logo-en.webp" },
  { name: "Samsung Galaxy", image: "/og-fb-logo-en.webp" },
  { name: "Game Console", image: "/og-fb-logo-en.webp" },
  { name: "PC", image: "/og-fb-logo-en.webp" },
];

export const CategoriesSection = () => {
  return (
    <div className="py-16 bg-gray-50" id="categories">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <CardArticle key={index} image={category.image} title={category.name} description="Description" />
          ))}
        </div>
      </div>
    </div>
  );
};