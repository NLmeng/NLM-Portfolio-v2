"use client";

import React from "react";

interface TimelineProps {
  currentIndex: number;
  experienceData: {
    year: string;
    title: string;
    description: string;
  }[];
}

export const Timeline: React.FC<TimelineProps> = ({
  currentIndex,
  experienceData,
}) => {
  return (
    <div className="my-12 h-[100%]">
      <div className="w-full p-6 border border-theme rounded-lg shadow-md ">
        <h2 className="font-semibold">{experienceData[currentIndex].year}</h2>
        <h3 className="mt-2">{experienceData[currentIndex].title}</h3>
        <p className="mt-4">{experienceData[currentIndex].description}</p>
      </div>
    </div>
  );
};
