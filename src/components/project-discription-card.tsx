"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Github, ExternalLink, Calendar, User, Code2, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  id: number;
  name: string;
  slug: string;
  technology: string;
  description: string;
  gitHubRepoLink: string;
  liveLink: string;
  role: string;
  completionDate: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  screenshots: string[];
}

interface ProjectDescriptionCardProps {
  project: Project;
}

function ProjectDescriptionCard({ project }: ProjectDescriptionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const techStack = project.technology.split(", ");

  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="relative bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-xl rounded-3xl border border-neutral-800/50 overflow-hidden hover:border-purple-500/50 transition-all duration-500 shadow-2xl hover:shadow-purple-500/10">
        
        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Number Badge */}
        <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {project.id}
        </div>

        <div className="relative flex flex-col lg:flex-row">
          {/* Left Side - Image/Visual Section */}
          <div className="lg:w-2/5 relative group/image">
            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="relative h-72 lg:h-full min-h-[450px] overflow-hidden">
                <img
                  src={project.screenshots[0]}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                
                {/* Screenshot Counter Badge */}
                {project.screenshots.length > 1 && (
                  <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    {project.screenshots.length} Screenshots
                  </div>
                )}

                {/* Live/Code Badges Overlay */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  {project.liveLink && (
                    <div className="px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-xs font-medium text-green-300 border border-green-500/30">
                      ● Live
                    </div>
                  )}
                  {project.gitHubRepoLink && (
                    <div className="px-3 py-1 bg-neutral-800/80 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-300 border border-neutral-700">
                      <Github className="w-3 h-3 inline mr-1" /> Code
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative h-72 lg:h-full min-h-[450px] bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                <Code2 size={80} className="text-neutral-700" />
              </div>
            )}
          </div>

          {/* Right Side - Content Section */}
          <div className="lg:w-3/5 p-8 md:p-10 space-y-6">
            {/* Header */}
            <div>
              <Link href={`/project/${project.slug}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-purple-400 transition-colors cursor-pointer group-hover:translate-x-1 transition-transform duration-300">
                  {project.name}
                  <ArrowRight className="inline ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
              </Link>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-neutral-400 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <User size={16} className="text-purple-400" />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Calendar size={16} className="text-blue-400" />
                  <span>{project.completionDate}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-300 leading-relaxed text-base">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-bold text-neutral-500 mb-3 uppercase tracking-wider">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg text-purple-300 text-xs font-medium hover:bg-purple-500/20 hover:scale-105 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Expandable Features Section */}
            <div className="border-t border-neutral-800 pt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-between w-full text-left group/expand"
              >
                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider group-hover/expand:text-purple-400 transition-colors">
                  Key Features ({project.features.length})
                </h3>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-neutral-400 group-hover/expand:text-purple-400 transition-colors" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400 group-hover/expand:text-purple-400 transition-colors" />
                )}
              </button>

              {/* Features List */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-24 opacity-60 mt-3"
                }`}
              >
                <ul className="space-y-2">
                  {(isExpanded ? project.features : project.features.slice(0, 3)).map((feature, index) => (
                    <li
                      key={index}
                      className="text-neutral-300 text-sm flex items-start gap-3 pl-2"
                    >
                      <span className="text-purple-400 mt-1 text-lg">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {!isExpanded && project.features.length > 3 && (
                  <p className="text-neutral-500 text-xs italic mt-3 pl-2">
                    Click to see {project.features.length - 3} more features...
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-6">
              <Link
                href={`/project/${project.slug}`}
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 font-semibold group/btn"
              >
                View Full Details
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              {project.gitHubRepoLink && (
                <a
                  href={project.gitHubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-700 transition-all font-medium"
                >
                  <Github size={18} />
                  <span className="hidden sm:inline">Repository</span>
                </a>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-700 transition-all font-medium"
                >
                  <ExternalLink size={18} />
                  <span className="hidden sm:inline">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDescriptionCard;