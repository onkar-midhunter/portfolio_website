"use client";

import Link from "next/link";
import { GlareCard } from "@/components/ui/glare-card";
import { ExternalLink, Github, Code } from "lucide-react";

interface ProjectCardProps {
  project: {
    id:number;
    name: string;
    slug: string;
    technology: string;
    gitHubRepoLink?: string;
    LiveLInk?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const techList = project.technology.split(",").map(t => t.trim());
  const displayTech = techList.slice(0, 3);
  const remainingCount = techList.length - 3;

  return (
    <div className="group/card relative">
      <Link href={`/project/${project.slug}`} className="block">
        <GlareCard className="flex flex-col items-start justify-between p-6 cursor-pointer h-64 hover:scale-[1.02] transition-transform duration-300">
          {/* Top Section */}
          <div className="w-full space-y-4">
            {/* Project Number Badge */}
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-sm shadow-lg">
              {project.id}
            </div>

            {/* Project Name */}
            <h2 className="text-white text-xl md:text-2xl font-bold leading-tight group-hover/card:text-purple-300 transition-colors">
              {project.name}
            </h2>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {displayTech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-200 text-xs font-medium backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
              {remainingCount > 0 && (
                <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-neutral-400 text-xs font-medium">
                  +{remainingCount} more
                </span>
              )}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full space-y-3">
            {/* Action Links */}
            <div className="flex items-center gap-2">
              {project.LiveLInk && (
                <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-xs font-medium">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span>Live</span>
                </div>
              )}
              {project.gitHubRepoLink && (
                <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-300 text-xs font-medium">
                  <Github className="w-3 h-3" />
                  <span>Code</span>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div className="flex items-center justify-between text-neutral-400 group-hover/card:text-purple-400 transition-colors">
              <span className="text-xs font-medium">View Details</span>
              <ExternalLink className="w-4 h-4 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform" />
            </div>
          </div>
        </GlareCard>
      </Link>
    </div>
  );
}