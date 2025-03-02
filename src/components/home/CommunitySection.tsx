import { Button } from "@/components/ui/button";

export const CommunitySection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Repair Community</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10">
          Help others repair their devices and reduce electronic waste by contributing to our repair guides.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 rounded-full px-6">
            Start a Repair Guide
          </Button>
          <Button variant="outline" className="rounded-full px-6 border-gray-300">
            Answer Community Questions
          </Button>
        </div>
      </div>
    </div>
  );
};