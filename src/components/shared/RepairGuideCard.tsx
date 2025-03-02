import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { RepairGuideType } from "@/types";

interface RepairGuideCardProps {
  guide: RepairGuideType;
}

export const RepairGuideCard = ({ guide }: RepairGuideCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image 
          src={`/api/placeholder/400/225`} 
          alt="Repair guide" 
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{guide.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-4">Difficulty: {guide.difficulty}</span>
          <span>Time: {guide.time}</span>
        </div>
      </CardContent>
    </Card>
  );
};