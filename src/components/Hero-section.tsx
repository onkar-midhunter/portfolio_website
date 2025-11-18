"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Onkar_cv.pdf'; // Path to your PDF in public folder
    link.download = 'Onkar_Khedekar_Resume.pdf'; // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-[98vh] flex items-center justify-center py-24 px-4 md:px-10">
      <BackgroundRippleEffect />
      <div className="max-w-3xl text-center text-white flex flex-col items-center gap-6 relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-300 backdrop-blur-sm animate-fade-in">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>Open to Work</span>
        </div>

        {/* NAME */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Onkar Khedekar
        </h1>

        {/* ROLE */}
        <h2 className="text-xl md:text-3xl font-semibold text-neutral-300">
          Full-Stack Developer
        </h2>

        {/* TAGLINE */}
        <p className="text-sm md:text-lg text-neutral-400 leading-relaxed max-w-2xl">
          I build high-performance full-stack applications using 
          <span className="text-purple-400 font-semibold"> Node.js</span>, 
          <span className="text-purple-400 font-semibold"> Express.js</span>, 
          <span className="text-purple-400 font-semibold"> React.js</span>, 
          <span className="text-purple-400 font-semibold"> MongoDB</span> & 
          <span className="text-purple-400 font-semibold"> Mongoose</span>.  
          Passionate about creating scalable backend APIs, clean UI, and 
          production-ready solutions with modern technologies.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={handleDownloadResume}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download Resume</span>
          </button>

          <Link
            href="/project"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-neutral-700 hover:border-purple-500 rounded-xl font-semibold transition-all hover:scale-105 hover:bg-neutral-900"
          >
            <span>View Projects</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}