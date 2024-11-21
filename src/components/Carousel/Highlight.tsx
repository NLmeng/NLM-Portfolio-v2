"use client";

import { TEXT_SIZE } from "@/constants";
import React from "react";

interface HighlightProps {
  keywords: string[];
  limit?: number;
}

export const Highlight: React.FC<HighlightProps> = ({ keywords, limit }) => {
  const toDisplay = limit ? keywords.slice(0, limit) : keywords;

  return (
    <span className="flex flex-wrap gap-2 mt-4">
      {toDisplay.map((item, index) => (
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
