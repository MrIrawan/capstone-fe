import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>MacBook Pro</CardTitle>
              <CardDescription>Repair guides for Macbook Pro</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="w-full h-full">
                  <Image 
                    src={`/og-fb-logo-en.webp`} 
                    alt="Repair guide" 
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                  <div></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};