"use client";

import React from "react";

interface TimelineProps {
  currentIndex: number;
  experienceData: {
    year: string;
    title: string;
    subtitle: string;
    description: string;
  }[];
}

export const Timeline: React.FC<TimelineProps> = ({
  currentIndex,
  experienceData,
}) => {
  return (
    <div className="my-[100px] w-full min-w-full max-w-full h-[600px] max-h-[600px]">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline after:content-['_↗'] text-[rgb(var(--color-orange))] transition-colors duration-300"
      >
        See Resume
      </a>
      <div className="w-full min-w-full max-w-full h-[450px] max-h-[450px] p-6 shadow-md whitespace-pre-line overflow-hidden flex flex-col justify-start text-center">
        <h2 className="font-semibold italic tracking-wide">
          {experienceData[currentIndex].year}
        </h2>
        <h3 className="mt-2 font-bold tracking-tighter text-[rgb(var(--color-orange))]">
          {experienceData[currentIndex].title}
        </h3>
        <p className="mt-4 flex-grow text-start">
          {experienceData[currentIndex].description}
        </p>
      </div>
    </div>
  );
};
