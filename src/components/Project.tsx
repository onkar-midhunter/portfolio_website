import { project } from "@/data/project";
import { ProjectCard } from "@/components/Project-card";

export default function ProjectList() {
  return (
  <div className="w-full h-[98vh] py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.15),_transparent_70%)] pointer-events-none"></div>
    {/* Heading + Subtext */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
        My Projects
      </h2>
      <p className="text-neutral-400 text-sm md:text-base mt-2">
        Click on any project card to explore detailed information 🚀
      </p>
    </div>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
      {project.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </div>
  </div>
);

}
