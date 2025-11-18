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

        {/* FIXED NAVBAR WRAPPER */}
        <div className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
          <Navbar />
        </div>

        {/* PAGE CONTENT */}
        <main className="pt-20"> 
          {/* top padding so content does not go behind the navbar */}
          {children}
        </main>

      </body>
    </html>
  );
}
