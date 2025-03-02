import CardArticle from "../shared/CardArticle";
import { ArticleProps } from "@/types";

const articleDatas: ArticleProps[] =[
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "iPhone 15 Pro Battery Replacement", 
    description: "Replace your iPhone 15 Pro battery with this guided repair.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "iPhone 15 Pro Battery Replacement", 
    description: "Replace your iPhone 15 Pro battery with this guided repair.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "MacBook Pro M3 SSD Upgrade", 
    description: "Upgrade your MacBook Pro M3's storage with this step-by-step guide.", 
    image: "/og-fb-logo-en.webp"
  },
  {
    title: "iPhone 15 Pro Battery Replacement", 
    description: "Replace your iPhone 15 Pro battery with this guided repair.", 
    image: "/og-fb-logo-en.webp"
  },
]

export const CategoriesSection = () => {
  return (
    <div className="py-16 bg-gray-50" id="categories">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {articleDatas.map((article, articleIndex) => (
            <CardArticle key={articleIndex} data={article} />
          ))}
        </div>
      </div>
    </div>
  );
};