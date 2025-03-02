import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartToolType } from "@/types";

const partsTools: PartToolType[] = [
  { name: "iPhone Batteries", image: "/api/placeholder/200/200" },
  { name: "Precision Screwdriver Sets", image: "/api/placeholder/200/200" },
  { name: "Replacement Screens", image: "/api/placeholder/200/200" },
  { name: "Opening Tools", image: "/api/placeholder/200/200" },
];

export const PartsToolsSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">Parts & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partsTools.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold">{item.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 h-auto text-lg">
            Shop All Parts & Tools
          </Button>
        </div>
      </div>
    </div>
  );
};