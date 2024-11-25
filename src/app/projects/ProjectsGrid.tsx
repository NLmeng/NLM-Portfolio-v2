"use client";

import { Highlight } from "@/components";
import { PROJECTS, TEXT_SIZE } from "@/constants";
import { Key } from "react";

const getYear = (timeline: string): number | "ongoing" => {
  if (timeline.toLowerCase().includes("ongoing")) {
    return "ongoing";
  }
  const yearMatch = timeline.match(/\b\d{4}\b/);
  return yearMatch ? parseInt(yearMatch[0]) : 0;
};

export function ProjectsGrid() {
  const sortedProjects = PROJECTS.sort(
    (a: { timeline: string }, b: { timeline: string }) => {
      const yearA = getYear(a.timeline);
      const yearB = getYear(b.timeline);

      if (yearA === "ongoing") return -1;
      if (yearB === "ongoing") return 1;

      return yearB - yearA;
    }
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 whitespace-pre-line">
      {sortedProjects.map(
        (project: {
          id: Key;
          title: string;
          timeline: string;
          summary: string;
          tech: string[];
          url: string;
        }) => (
          <div
            key={project.id}
            className="bg-[var(--main-bg-color)] rounded-lg p-6 shadow-lg flex flex-col"
          >
            <h3 className="text-xl font-bold mb-2 text-[rgb(var(--color-orange))]">
              {project.title}
              <span className={`${TEXT_SIZE.MINI} text-gray-400 ml-2`}>
                ({project.timeline})
              </span>
            </h3>
            <p
              className={`my-4 text-[var(--main-text-color)] ${TEXT_SIZE.MAIN_BODY}`}
            >
              {project.summary}
            </p>
            <div className="mb-4">
              <Highlight keywords={project.tech} />
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline after:content-['_↗'] text-[var(--main-text-color)] hover:text-[var(--button-hover-bg-color)] transition-colors duration-300 mt-auto"
              >
                View Project
              </a>
            )}
          </div>
        )
      )}
    </div>
  );
}
