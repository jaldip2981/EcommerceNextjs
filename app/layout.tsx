"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Navbar from "@/components/navbar/page";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
      {children}

      </body>
    </html>
  );
}
