import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "@/styles/globals.css";

import { Metadata } from "next";


import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template | Next.js",
  description: "Template for Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={cn("h-screen", inter.className)}>
        <Navbar />
        <main className="container mx-auto h-[90vh]">{children}</main>
        
      </body>
    </html>
  );
}
