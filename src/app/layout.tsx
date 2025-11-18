import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onkar Portfolio",
  description: "Portfolio website of Onkar Khedekar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* FLOATING NAVBAR - NO BACKGROUND */}
        <div className="w-full fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Navbar />
          </div>
        </div>

        {/* PAGE CONTENT */}
        <main className="pt-28 md:pt-32"> 
          {children}
        </main>
      </body>
    </html>
  );
}