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
    <div className="my-[100px] h-[100%]">
      <div className="w-full p-6 shadow-md">
        <h2 className="font-semibold italic tracking-wide">
          {experienceData[currentIndex].year}
        </h2>
        <h3 className="mt-2 font-bold tracking-tighter text-[rgb(var(--color-orange))]">
          {experienceData[currentIndex].title}
        </h3>
        <p className="mt-4">{experienceData[currentIndex].description}</p>
      </div>
    </div>
  );
};
