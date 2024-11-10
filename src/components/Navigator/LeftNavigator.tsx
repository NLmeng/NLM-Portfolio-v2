"use client";

import { NavigationItem } from "@/components";
import { useCurrentSection } from "@/hooks/useCurrentSection";
import React from "react";

interface LeftNavigatorProps {
  onNavigate: (sectionId: string) => void;
}

export const LeftNavigator: React.FC<LeftNavigatorProps> = ({ onNavigate }) => {
  const currentSection = useCurrentSection();
  const sections: string[] = ["ABOUT", "EXPERIENCE", "PROJECTS"];

  return (
    <div className="ml-6 fixed left-6 top-1/2 transform -translate-y-1/2 z-40 w-48 flex flex-col items-center">
      <ul className="space-y-8 text-lg">
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
