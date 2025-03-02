import React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "MarketSight",
  description: "Search your medicine",
};

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children } : RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        { children }
        <Footer />
      </body>
    </html>
  )
}