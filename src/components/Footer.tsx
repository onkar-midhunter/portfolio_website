"use client";
import React from "react";
import Link from "next/link";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  ArrowUp, 
  Heart,
  Code2,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/project" },
    { name: "Skills", href: "/#skills" },
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/onkar-midhunter", 
      icon: Github,
      color: "hover:text-gray-400"
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/onkar-khedekar/", 
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    { 
      name: "Email", 
      href: "khedekar679@gmail.com", 
      icon: Mail,
      color: "hover:text-purple-400"
    },
  ];

  const projects = [
    { name: "NextJS Auth App", href: "/project/next-js-auth-app" },
    { name: "Music Academy", href: "/project/music-academy" },
    { name: "YouTube Clone", href: "/project/youtube-clone" },
    { name: "Ecommerce Website", href: "/project/ecommerce-website" },
  ];

  return (
    <footer className="relative bg-black border-t border-neutral-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-purple-950/5 to-neutral-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Onkar Khedekar</h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Full-Stack Developer crafting scalable web applications with modern technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-purple-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full" />
              Featured Projects
            </h4>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.name}>
                  <Link
                    href={project.href}
                    className="text-neutral-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-pink-500 rounded-full" />
              Connect
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-neutral-900 border border-neutral-800 rounded-xl ${social.color} transition-all hover:scale-110 hover:border-neutral-700 group`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <a
              href="mailto:khedekar679@gmail.com"
              className="text-sm text-neutral-400 hover:text-purple-400 transition-colors block"
            >
              khedekar679@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-sm flex items-center gap-2">
            © {currentYear} Onkar Khedekar. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            and <Code2 className="w-4 h-4 text-purple-400" />
          </p>

          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <Link href="/privacy" className="hover:text-purple-400 transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-purple-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full text-white shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110 group z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}