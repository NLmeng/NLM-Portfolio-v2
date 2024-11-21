"use client";

import { ProjectsGrid } from "@/app/projects/ProjectsGrid";
import { Header } from "@/components";
import { TEXT_SIZE } from "@/constants";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="bg-[var(--main-bg-color)] text-[var(--main-text-color)]">
      <Header />

      <main className="w-full mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-start justify-start mt-10">
          <Link href="/" passHref>
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

        <ProjectsGrid />
      </main>
    </div>
  );
}
