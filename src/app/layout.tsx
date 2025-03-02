import React from "react"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarketSight",
  description: "Search your medicine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}

export default function RootLayout({ children } : LayoutProps) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  )
}