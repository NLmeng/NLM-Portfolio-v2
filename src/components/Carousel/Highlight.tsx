"use client";

import { TEXT_SIZE } from "@/constants";
import React from "react";

interface HighlightProps {
  tech: string[];
  limit?: number;
}

export const Highlight: React.FC<HighlightProps> = ({ tech, limit }) => {
  const displayedTech = limit ? tech.slice(0, limit) : tech;

  return (
    <span className="flex flex-wrap gap-2 mt-4">
      {displayedTech.map((item, index) => (
        <span
          key={index}
          className={`${TEXT_SIZE.MINI} text-[var(--main-text-color)] bg-[var(--button-bg-color)] p-[2px] px-[4px] rounded-lg`}
        >
          {item}
        </span>
      ))}
    </span>
  );
};
