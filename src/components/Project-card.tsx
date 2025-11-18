"use client";

import Link from "next/link";
import { GlareCard } from "@/components/ui/glare-card";

interface ProjectCardProps {
  project: {
    name: string;
    slug: string;
    technology: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.slug}`} className="w-full">
      <GlareCard className="flex flex-col items-start justify-center p-6 cursor-pointer h-40">
        <h2 className="text-white text-xl font-bold">
          {project.name}
        </h2>

        <p className="text-neutral-300 text-sm mt-2">
          {project.technology.split(",").slice(0, 2).join(", ")}...
        </p>

        <p className="text-neutral-500 text-xs mt-4">
          Click to view details →
        </p>
      </GlareCard>
    </Link>
  );
}
