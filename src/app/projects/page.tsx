"use client";

import { Header } from "@/components";
import { PROJECTS, TEXT_SIZE } from "@/constants";
import Link from "next/link";
import React from "react";

const ProjectsPage: React.FC = () => {
  // TODO: add year next to title
  // TODO: revise constants
  return (
    <div className="bg-[var(--main-bg-color)] text-[var(--main-text-color)]">
      <Header />

      <main className="w-full mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-start justify-start mt-10">
          <Link href="/" passHref className="">
            <button className="before:content-['←'] text-[var(--main-text-color)] hover:bg-[var(--button-hover-bg-color)] bg-[var(--button-bg-color)] p-3 py-1 rounded-full z-20">
              Back
            </button>
          </Link>
          <h1
            className={`my-4 text-[rgb(var(--color-orange))] ${TEXT_SIZE.MAIN_HEADER}`}
          >
            All Projects
            <span className={`${TEXT_SIZE.MINI} text-gray-400`}>
              (so far ...)
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 whitespace-pre-line">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[var(--main-bg-color)] rounded-lg p-6 shadow-lg flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2 text-[rgb(var(--color-orange))]">
                {project.title}
              </h3>
              <p
                className={`my-4 text-[var(--main-text-color)] ${TEXT_SIZE.MAIN_BODY}`}
              >
                {project.summary}
              </p>
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
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
