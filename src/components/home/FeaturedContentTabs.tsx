import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RepairGuideCard } from "@/components/shared/RepairGuideCard";
import { RepairGuideType } from "@/types";

const featuredGuides: RepairGuideType[] = [
  {
    title: "iPhone 15 Pro Battery Replacement",
    description: "Replace your iPhone 15 Pro battery with this guided repair.",
    difficulty: "Moderate",
    time: "30 minutes",
  },
  {
    title: "iPhone 15 Pro Battery Replacement",
    description: "Replace your iPhone 15 Pro battery with this guided repair.",
    difficulty: "Moderate",
    time: "30 minutes",
  },
  {
    title: "iPhone 15 Pro Battery Replacement",
    description: "Replace your iPhone 15 Pro battery with this guided repair.",
    difficulty: "Moderate",
    time: "30 minutes",
  },
  {
    title: "iPhone 15 Pro Battery Replacement",
    description: "Replace your iPhone 15 Pro battery with this guided repair.",
    difficulty: "Moderate",
    time: "30 minutes",
  },
  {
    title: "iPhone 15 Pro Battery Replacement",
    description: "Replace your iPhone 15 Pro battery with this guided repair.",
    difficulty: "Moderate",
    time: "30 minutes",
  },
  {
    title: "iPhone 15 Pro Battery Replacement",
    description: "Replace your iPhone 15 Pro battery with this guided repair.",
    difficulty: "Moderate",
    time: "30 minutes",
  },
];

const newestGuides: RepairGuideType[] = [
  {
    title: "MacBook Pro M3 SSD Upgrade",
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.",
    difficulty: "Hard",
    time: "45 minutes",
  },
  {
    title: "MacBook Pro M3 SSD Upgrade",
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.",
    difficulty: "Hard",
    time: "45 minutes",
  },
  {
    title: "MacBook Pro M3 SSD Upgrade",
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.",
    difficulty: "Hard",
    time: "45 minutes",
  },
  {
    title: "MacBook Pro M3 SSD Upgrade",
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.",
    difficulty: "Hard",
    time: "45 minutes",
  },
  {
    title: "MacBook Pro M3 SSD Upgrade",
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.",
    difficulty: "Hard",
    time: "45 minutes",
  },
  {
    title: "MacBook Pro M3 SSD Upgrade",
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.",
    difficulty: "Hard",
    time: "45 minutes",
  },
];

const popularGuides: RepairGuideType[] = [
  {
    title: "Samsung Galaxy S24 Screen Replacement",
    description: "Fix your cracked Galaxy S24 screen with our comprehensive guide.",
    difficulty: "Moderate",
    time: "40 minutes",
  },
  {
    title: "Samsung Galaxy S24 Screen Replacement",
    description: "Fix your cracked Galaxy S24 screen with our comprehensive guide.",
    difficulty: "Moderate",
    time: "40 minutes",
  },
  {
    title: "Samsung Galaxy S24 Screen Replacement",
    description: "Fix your cracked Galaxy S24 screen with our comprehensive guide.",
    difficulty: "Moderate",
    time: "40 minutes",
  },
  {
    title: "Samsung Galaxy S24 Screen Replacement",
    description: "Fix your cracked Galaxy S24 screen with our comprehensive guide.",
    difficulty: "Moderate",
    time: "40 minutes",
  },
  {
    title: "Samsung Galaxy S24 Screen Replacement",
    description: "Fix your cracked Galaxy S24 screen with our comprehensive guide.",
    difficulty: "Moderate",
    time: "40 minutes",
  },
  {
    title: "Samsung Galaxy S24 Screen Replacement",
    description: "Fix your cracked Galaxy S24 screen with our comprehensive guide.",
    difficulty: "Moderate",
    time: "40 minutes",
  },
];

export const FeaturedContentTabs = () => {
  return (
    <div className="py-16 bg-white" id="articles">
      <div className="container mx-auto px-4 max-w-6xl">
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="w-full flex justify-center mb-8 bg-transparent border-b">
            <TabsTrigger value="featured" className="text-lg px-6 py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none">
              Featured
            </TabsTrigger>
            <TabsTrigger value="newest" className="text-lg px-6 py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none">
              Newest
            </TabsTrigger>
            <TabsTrigger value="popular" className="text-lg px-6 py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none">
              Popular
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGuides.map((guide, index) => (
                <RepairGuideCard key={index} guide={guide} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="newest" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newestGuides.map((guide, index) => (
                <RepairGuideCard key={index} guide={guide} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularGuides.map((guide, index) => (
                <RepairGuideCard key={index} guide={guide} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};