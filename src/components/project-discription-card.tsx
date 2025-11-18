import React from "react";
import Link from "next/link";
import { Github, ExternalLink, Calendar, User, Code2 } from "lucide-react";

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
  const techStack = project.technology.split(", ");

  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="relative bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-xl rounded-3xl border border-neutral-800/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-2xl">
        
        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex flex-col lg:flex-row">
          {/* Left Side - Image/Visual Section */}
          <div className="lg:w-2/5 relative">
            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
                <img
                  src={project.screenshots[0]}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Screenshot Counter Badge */}
                {project.screenshots.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                    +{project.screenshots.length - 1} more
                  </div>
                )}
              </div>
            ) : (
              <div className="relative h-64 lg:h-full min-h-[400px] bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                <Code2 size={64} className="text-neutral-700" />
              </div>
            )}
          </div>

          {/* Right Side - Content Section */}
          <div className="lg:w-3/5 p-6 md:p-8 space-y-6">
            {/* Header */}
            <div>
              <Link href={`/project/${project.slug}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 hover:text-purple-400 transition-colors cursor-pointer">
                  {project.name}
                </h2>
              </Link>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-neutral-400 mb-4">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-purple-400" />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-purple-400" />
                  <span>{project.completionDate}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 mb-3 uppercase tracking-wide">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-300 text-xs font-medium hover:bg-purple-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features Preview */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-400 mb-3 uppercase tracking-wide">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="text-neutral-300 text-sm flex items-start gap-2"
                  >
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
                {project.features.length > 3 && (
                  <li className="text-neutral-500 text-sm italic">
                    +{project.features.length - 3} more features...
                  </li>
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href={`/project/${project.slug}`}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/30 font-medium"
              >
                View Details
              </Link>

              {project.gitHubRepoLink && (
                <a
                  href={project.gitHubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-700 transition-all"
                >
                  <Github size={18} />
                  <span className="hidden sm:inline">Code</span>
                </a>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-700 transition-all"
                >
                  <ExternalLink size={18} />
                  <span className="hidden sm:inline">Demo</span>
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