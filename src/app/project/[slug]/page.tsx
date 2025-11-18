import { projects } from "@/data/detailedProject";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;

  console.log(param);
  console.log(param.slug);

  const { slug } = await params;
  console.log(slug);

  const projectData = projects.find((p) => p.slug === slug);
  console.log(projectData);

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-white">
        Project Not Found ❌
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition mb-6"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {projectData.name}
        </h1>

        <p className="text-neutral-300 text-sm md:text-base mb-6 max-w-3xl">
          <span className="font-semibold text-purple-400">Tech Stack:</span>{" "}
          {projectData.technology}
        </p>

        <div className="glass-card p-6 md:p-8 rounded-2xl shadow-lg border border-white/10 bg-white/5 backdrop-blur-xl">
          <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
            {projectData.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          {projectData.gitHubRepoLink && (
            <a
              href={projectData.gitHubRepoLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition"
            >
              <Github size={20} /> GitHub Repo
            </a>
          )}

          {projectData.liveLink && (
            <a
              href={projectData.liveLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition"
            >
              <ExternalLink size={20} /> Live Demo
            </a>
          )}
        </div>
        {projectData.screenshots && projectData.screenshots.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">
              Project Screenshots
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projectData.screenshots.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <img
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent my-14 opacity-40"></div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-3 text-purple-400">
              Key Features
            </h2>
            <p className="text-neutral-300 text-sm">
              • Add the best parts of your project here
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-3 text-purple-400">
              What I Learned
            </h2>
            <p className="text-neutral-300 text-sm">
              • Add your learnings here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
