import React from "react";
import { projects } from "@/data/detailedProject";
import ProjectDescriptionCard from "@/components/project-discription-card";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Code2, Github, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Dotted Glow Background - Fixed Position */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DottedGlowBackground
          className="w-full h-full"
          opacity={0.8}
          gap={20}
          radius={1.5}
          color="rgba(100, 100, 100, 0.3)"
          darkColor="rgba(150, 150, 150, 0.4)"
          glowColor="rgba(147, 51, 234, 0.6)"
          darkGlowColor="rgba(147, 51, 234, 0.8)"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.2}
          speedScale={1}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <div className="relative overflow-hidden py-24 px-6">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent" />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-700" />
          
          <div className="relative max-w-7xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-300 mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Portfolio Showcase</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            
            {/* Subheading */}
            <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A curated collection of full-stack applications showcasing modern web development practices, 
              innovative solutions, and production-ready code.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{projects.length}</div>
                <div className="text-sm text-neutral-500 uppercase tracking-wide">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">
                  {projects.reduce((acc, p) => acc + p.features.length, 0)}
                </div>
                <div className="text-sm text-neutral-500 uppercase tracking-wide">Features</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">
                  {projects.filter(p => p.liveLink).length}
                </div>
                <div className="text-sm text-neutral-500 uppercase tracking-wide">Live Demos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section with Enhanced Spacing */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-full mb-4">
              <Code2 className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-neutral-300">All Projects</span>
            </div>
          </div>

          {/* Projects Grid with Stagger Effect */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectDescriptionCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="max-w-5xl mx-auto px-6 pb-24 text-center">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">Want to see more?</h3>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              These projects represent my journey in full-stack development. Each one taught me valuable lessons 
              and helped me grow as a developer.
            </p>
            <a
              href="https://github.com/onkar-midhunter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/30 font-semibold"
            >
              <Github size={20} />
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}