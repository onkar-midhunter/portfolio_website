"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/project",
    },
    {
      title: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        >
          <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5C1.9 5.5 1 4.6 1 3.5C1 2.4 1.9 1.5 3 1.5C4.1 1.5 4.98 2.4 4.98 3.5ZM1.5 23V7H4.5V23H1.5ZM8.98 23H12V14.5C12 12.76 13.24 11.5 14.98 11.5C16.72 11.5 17.98 12.76 17.98 14.5V23H20.98V14C20.98 10.96 19 9 16.48 9C14.58 9 13.24 9.96 12.6 11H12.52L12.5 9.5H8.98C9.04 10.72 8.98 23 8.98 23Z"/>
        </svg>
      ),
      href: "https://linkedin.com/in/yourid",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/onkar-midhunter",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock items={links} />
    </div>
  );
}