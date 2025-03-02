import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CategoryType } from "@/types";

const categories: CategoryType[] = [
  { name: "MacBook Pro", image: "/api/placeholder/64/64" },
  { name: "iPhone", image: "/api/placeholder/64/64" },
  { name: "iPad", image: "/api/placeholder/64/64" },
  { name: "Samsung Galaxy", image: "/api/placeholder/64/64" },
  { name: "Game Console", image: "/api/placeholder/64/64" },
  { name: "PC", image: "/api/placeholder/64/64" },
];

export const CategoriesSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent">
              <CardContent className="flex flex-col items-center p-4 hover:bg-white hover:shadow-md rounded-lg transition-all">
                <div className="w-16 h-16 mb-2 relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-center font-medium">{category.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};