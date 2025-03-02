import React from "react"
import "./globals.css"

type LayoutProps = {
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