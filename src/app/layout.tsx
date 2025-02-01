import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils"
import Sidebar from "@/components/sidebar/Sidebar";


const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "NEXTJS DASHBOARD",
  description: "DASHBOARD EXAMPLE WITH NEXTJS",
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", inter.className  
        )}>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
