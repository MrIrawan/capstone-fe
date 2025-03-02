import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl font-bold md:text-5xl">Repair guides for every thing</h1>
          <p className="text-xl max-w-2xl">
            Thousands of repair guides, step by step videos, and troubleshooting help.
          </p>
          <div className="w-full max-w-xl relative">
            <Input 
              placeholder="Search for guides, parts, and tools..." 
              className="h-14 pl-4 pr-12 text-black rounded-full"
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-blue-700" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};