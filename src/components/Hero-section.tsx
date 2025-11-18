"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full h-[98vh] flex items-center justify-center py-24 px-4 md:px-10">
      <BackgroundRippleEffect />
      <div className="max-w-3xl text-center text-white flex flex-col items-center gap-6">

        {/* NAME */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Onkar Khedekar
        </h1>

        {/* ROLE */}
        <h2 className="text-xl md:text-2xl font-semibold opacity-90">
          Full-Stack Developer
        </h2>

        {/* TAGLINE */}
        <p className="text-sm md:text-lg opacity-80 leading-relaxed">
          I build high-performance full-stack applications using 
          <span className="font-semibold"> Node.js</span>, 
          <span className="font-semibold"> Express.js</span>, 
          <span className="font-semibold"> React.js</span>, 
          <span className="font-semibold"> MongoDB</span> & 
          <span className="font-semibold"> Mongoose</span>.  
          Passionate about creating scalable backend APIs, clean UI, and 
          production-ready solutions with modern technologies and related libraries.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="/Onkar_Khedekar_CV.pdf"
            download
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Download Resume
          </a>

          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Show Projects
          </Link>
        </div>

      </div>
    </div>
  );
}