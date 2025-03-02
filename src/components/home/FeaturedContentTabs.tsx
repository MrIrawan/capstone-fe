import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArticleProps } from "@/types";
import CardArticle from "../shared/CardArticle";

const featuredGuides: ArticleProps[] = [
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
];

const newestGuides: ArticleProps[] = [
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
];

const popularGuides: ArticleProps[] = [
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
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
            <div className="grid grid-cols-3 gap-6">
              {featuredGuides.map((article, articleIndex) => (
                <CardArticle key={articleIndex} data={article} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="newest" className="mt-0">
            <div className="grid grid-cols-3 gap-6">
              {newestGuides.map((article, articleIndex) => (
                <CardArticle key={articleIndex} data={article}/>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-3 gap-6">
              {popularGuides.map((article, articleIndex) => (
                <CardArticle key={articleIndex} data={article}/>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};