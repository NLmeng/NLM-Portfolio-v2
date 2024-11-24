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
    <div className="w-full min-w-full xl:my-[100px] lg:mt-[200px] lg:mb-[100px] md:mt-[200px] md:mb[100px] mt-[250px] mb-[50px]">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline after:content-['_↗'] text-[rgb(var(--color-orange))] transition-colors duration-300"
      >
        See Resume
      </a>
      <div className="w-full min-w-full max-w-full h-[450px] max-h-[450px] p-6 shadow-md whitespace-pre-line overflow-scroll hide-scroll flex flex-col justify-start text-center">
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
