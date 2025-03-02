import React from "react"
import "./globals.css"
import type { Metadata } from "next"

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
        { children }
      </body>
    </html>
  )
}