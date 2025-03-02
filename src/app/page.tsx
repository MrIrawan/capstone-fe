"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedContentTabs } from "@/components/home/FeaturedContentTabs";
import { PartsToolsSection } from "@/components/home/PartsToolsSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Avoid SSR for interactive components
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render content if mounted (client-side)
  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="min-h-screen font-sans">
      <HeroSection />
      <CategoriesSection />
      <FeaturedContentTabs />
      <PartsToolsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}