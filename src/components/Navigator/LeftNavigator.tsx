"use client";

import { NavigationItem } from "@/components";
import { TEXT_SIZE } from "@/constants";
import { useCurrentSection } from "@/hooks/useCurrentSection";
import React from "react";

interface LeftNavigatorProps {
  onNavigate: (sectionId: string) => void;
}

export const LeftNavigator: React.FC<LeftNavigatorProps> = ({ onNavigate }) => {
  const currentSection = useCurrentSection();
  const sections: string[] = ["ABOUT", "EXPERIENCE", "PROJECTS"];

  return (
    <div className="md:ml-6 ml-2 fixed md:left-6 left-2 top-1/2 transform -translate-y-1/2 z-40 w-48 flex flex-col items-center">
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
