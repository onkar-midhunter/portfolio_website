import { projects } from "@/data/detailedProject";
import { ArrowLeft, ExternalLink, Github, Calendar, User, CheckCircle, Lightbulb, AlertCircle } from "lucide-react";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectData = projects.find((p) => p.slug === slug);

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-neutral-400 mb-8">Project Not Found</p>
          <Link
            href="/project"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl transition"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20">
          {/* Back Button */}
          <Link
            href="/project"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>

          {/* Project Title & Meta */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {projectData.name}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 text-neutral-300">
                <User size={18} className="text-purple-400" />
                <span>{projectData.role}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Calendar size={18} className="text-purple-400" />
                <span>{projectData.completionDate}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {projectData.gitHubRepoLink && (
                <a
                  href={projectData.gitHubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 transition-all group"
                >
                  <Github size={20} className="group-hover:rotate-12 transition-transform" />
                  <span>View Code</span>
                </a>
              )}

              {projectData.liveLink && (
                <a
                  href={projectData.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/30 group"
                >
                  <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Tech Stack Showcase */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
            Technology Stack
          </h2>
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl">
            <div className="flex flex-wrap gap-3">
              {projectData.technology.split(", ").map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium hover:bg-purple-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Project Description */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
            Project Overview
          </h2>
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl">
            <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
              {projectData.description}
            </p>
          </div>
        </section>

        {/* Screenshots */}
        {projectData.screenshots && projectData.screenshots.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
              Project Screenshots
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projectData.screenshots.map((img, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-500/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    Screenshot {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Features, Challenges, Learnings Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          {/* Key Features */}
          <div className="glass-card p-6 rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-white/0 backdrop-blur-xl hover:border-green-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/10">
                <CheckCircle size={24} className="text-green-400" />
              </div>
              <h2 className="text-xl font-semibold text-green-400">
                Key Features
              </h2>
            </div>
            <ul className="space-y-3">
              {projectData.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-neutral-300 text-sm flex items-start gap-2"
                >
                  <span className="text-green-400 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="glass-card p-6 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-white/0 backdrop-blur-xl hover:border-orange-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <AlertCircle size={24} className="text-orange-400" />
              </div>
              <h2 className="text-xl font-semibold text-orange-400">
                Challenges
              </h2>
            </div>
            <ul className="space-y-3">
              {projectData.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="text-neutral-300 text-sm flex items-start gap-2"
                >
                  <span className="text-orange-400 mt-1">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div className="glass-card p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-white/0 backdrop-blur-xl hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Lightbulb size={24} className="text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold text-blue-400">
                Key Learnings
              </h2>
            </div>
            <ul className="space-y-3">
              {projectData.learnings.map((learning, index) => (
                <li
                  key={index}
                  className="text-neutral-300 text-sm flex items-start gap-2"
                >
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Decorative Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        {/* Bottom CTA */}
        <section className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">Interested in this project?</h3>
          <p className="text-neutral-400 mb-6">Check out the code or see it in action</p>
          <div className="flex flex-wrap justify-center gap-4">
            {projectData.gitHubRepoLink && (
              <a
                href={projectData.gitHubRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 transition-all"
              >
                <Github size={20} />
                <span>View Source Code</span>
              </a>
            )}
            {projectData.liveLink && (
              <a
                href={projectData.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/30"
              >
                <ExternalLink size={20} />
                <span>View Live Demo</span>
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}