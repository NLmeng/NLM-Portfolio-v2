"use client";

import { NavigationItem } from "@/components";
import { TEXT_SIZE } from "@/constants";
import { useCurrentSection } from "@/hooks/useCurrentSection";
import React from "react";

interface LeftNavigatorProps {
  onNavigate: (sectionId: string) => void;
  isExpanded: boolean;
}

export const LeftNavigator: React.FC<LeftNavigatorProps> = ({
  onNavigate,
  isExpanded,
}) => {
  const sections: string[] = ["ABOUT", "EXPERIENCE", "PROJECTS"];
  const currentSection = useCurrentSection();
  return (
    <div
      className={`fixed top-1/2 transform -translate-y-1/2 z-40 w-32 flex flex-col items-center transition-all duration-500 ease-in-out ${
        isExpanded
          ? "opacity-100 md:ml-2 ml-0 fixed md:left-8 left-6"
          : "opacity-0 left-[-100px]"
      }`}
    >
      <ul className={`space-y-8 ${TEXT_SIZE.BODY}`}>
        {sections.map((section) => (
          <NavigationItem
            key={section}
            section={section}
            currentSection={currentSection}
            onClick={() => onNavigate(section.toLowerCase())}
          />
        ))}
      </ul>
    </div>
  );
};
